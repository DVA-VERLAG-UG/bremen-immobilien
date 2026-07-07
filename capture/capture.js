#!/usr/bin/env node
'use strict';

/**
 * Map Capture Script — Ansatz 3 (finale Version)
 *
 * WARUM NICHT ANSATZ 1 (Puppeteer headless):
 *   Headless-Chromium nutzt SwiftShader (Software-WebGL) statt echter GPU.
 *   Ergebnis: schlechtes Anti-Aliasing, matschige Fog-Effekte, falsche Farben.
 *
 * WARUM NICHT ANSATZ 2 (canvas.toDataURL() im echten Browser):
 *   toDataURL() liest nur den rohen WebGL-Framebuffer, NICHT den kompositierten
 *   Output. Mapbox GL v3 Standard-Style-Effekte (Fog, Ambient Occlusion, Bloom)
 *   laufen teilweise im Browser-Compositor — fehlen also im Bild. Außerdem
 *   deaktiviert preserveDrawingBuffer: true MSAA und verschlechtert die Qualität.
 *
 * DIESER ANSATZ (Ansatz 3 — page.screenshot() mit headless: false + echter GPU):
 *   - Puppeteer startet echtes Chrome mit GUI (headless: false).
 *   - Echte GPU, echtes MSAA, vollständiger Compositor-Output.
 *   - page.screenshot() nutzt CDP Page.captureScreenshot — erfasst, was der
 *     User tatsächlich auf dem Bildschirm sieht, inkl. aller GL-Effekte.
 *   - Kein preserveDrawingBuffer: true nötig.
 *   - deviceScaleFactor: 2 → Retina-Qualität direkt aus page.screenshot().
 *
 * UMGEBUNG: macOS mit physischem Display — kein Xvfb nötig.
 *   Auf Linux ohne Display: `xvfb-run node capture.js` + --use-gl=desktop
 *
 * USAGE:
 *   node capture.js [set] [frames]
 *   node capture.js desktop        → 120 Frames, Desktop-Viewport
 *   node capture.js mobile         → 120 Frames, Mobile-Viewport
 *   node capture.js desktop 10     → 10 Frames (Testlauf)
 *
 * OUTPUT:
 *   ../frames-raw-desktop/frame_0000.png … (Desktop)
 *   ../frames-raw-mobile/ frame_0000.png … (Mobile)
 *   Set-Name ist im Ordnernamen eingebaut → kein versehentliches Überschreiben.
 */

const puppeteer   = require('puppeteer');
const http        = require('http');
const handler     = require('serve-handler');
const path        = require('path');
const fs          = require('fs');

// ── CLI-Argumente ─────────────────────────────────────────────────────────────
const SET          = process.argv[2] || 'desktop';
const TOTAL_FRAMES = parseInt(process.argv[3] || '120', 10);

if (!['desktop', 'mobile'].includes(SET)) {
  console.error(`Fehler: Set muss "desktop" oder "mobile" sein (erhalten: "${SET}")`);
  process.exit(1);
}

// ── Viewport-Definitionen ─────────────────────────────────────────────────────
const VIEWPORTS = {
  // 1512×900 CSS-Px @2× → 3024×1800 px Screenshots (Retina-Qualität)
  desktop: { width: 1512, height: 900,  deviceScaleFactor: 2 },
  // 390×844 CSS-Px  @2× → 780×1688  px Screenshots
  mobile:  { width: 390,  height: 844,  deviceScaleFactor: 2 },
};

// ── Pfade ─────────────────────────────────────────────────────────────────────
const SERVE_PORT  = 8765;
const SITE_ROOT   = path.resolve(__dirname, '..');
const OUT_DIR     = path.join(SITE_ROOT, `frames-raw-${SET}`);

// ── Helpers ───────────────────────────────────────────────────────────────────
const sleep = ms => new Promise(r => setTimeout(r, ms));

async function waitForReady(page, timeoutMs = 45_000) {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    if (await page.evaluate(() => !!window._frameReady)) return;
    await sleep(150);
  }
  throw new Error('Timeout: _frameReady wurde nicht gesetzt (Tiles zu langsam?)');
}

// ── Sicherheitsprüfung: Ordner bereits befüllt? ───────────────────────────────
function checkOutputDir(dir, totalFrames) {
  if (!fs.existsSync(dir)) return; // noch nicht da → OK
  const existing = fs.readdirSync(dir).filter(f => f.endsWith('.png'));
  if (existing.length === 0) return;
  console.error(`\nFehler: Zielordner enthält bereits ${existing.length} PNG-Dateien:`);
  console.error(`  ${dir}`);
  console.error('Bitte manuell löschen oder umbenennen, dann erneut starten.');
  console.error('  rm -rf ' + dir);
  process.exit(1);
}

// ── Haupt-Capture ─────────────────────────────────────────────────────────────
async function main() {
  checkOutputDir(OUT_DIR, TOTAL_FRAMES);
  fs.mkdirSync(OUT_DIR, { recursive: true });

  const viewport = VIEWPORTS[SET];
  const screenshotW = viewport.width;
  const screenshotH = viewport.height;

  // Statischer Server so dass Mapbox-Tiles und Assets korrekt laden
  const server = http.createServer((req, res) =>
    handler(req, res, { public: SITE_ROOT })
  );
  await new Promise(r => server.listen(SERVE_PORT, r));
  console.log(`\nStatischer Server  → http://localhost:${SERVE_PORT}`);
  console.log(`Set                → ${SET}`);
  console.log(`Frames             → ${TOTAL_FRAMES}`);
  console.log(`Viewport (CSS px)  → ${viewport.width}×${viewport.height} @${viewport.deviceScaleFactor}x`);
  console.log(`Screenshot-Größe   → ${screenshotW * viewport.deviceScaleFactor}×${screenshotH * viewport.deviceScaleFactor} px`);
  console.log(`Output             → ${OUT_DIR}/\n`);

  const browser = await puppeteer.launch({
    headless: false,   // echtes Chrome mit GPU — kein SwiftShader
    args: [
      '--use-gl=desktop',          // macOS: Metal/OpenGL statt Software-Renderer
      '--enable-gpu',
      '--ignore-gpu-blocklist',    // GPU auch bei unbekannten Treibern erzwingen
      '--disable-gpu-vsync',       // VSync aus → kein Throttling beim Rendern
      '--no-sandbox',
      `--window-size=${viewport.width},${viewport.height + 120}`, // +120 für Browser-Chrome
    ],
  });

  const page = await browser.newPage();
  await page.setViewport({
    width:             viewport.width,
    height:            viewport.height,
    deviceScaleFactor: viewport.deviceScaleFactor,
  });

  const url = `http://localhost:${SERVE_PORT}/capture/index.html?set=${SET}`;
  console.log(`Lade Seite: ${url}`);
  await page.goto(url, { waitUntil: 'networkidle0', timeout: 60_000 });
  console.log('Seite geladen — warte auf Frame 0…\n');

  const t0 = Date.now();

  for (let i = 0; i < TOTAL_FRAMES; i++) {
    await waitForReady(page);

    const pad  = String(i).padStart(4, '0');
    const dest = path.join(OUT_DIR, `frame_${pad}.png`);

    // page.screenshot() via CDP → erfasst den vollständigen Compositor-Output,
    // inkl. aller GPU-Effekte — NICHT nur den rohen WebGL-Buffer.
    await page.screenshot({
      path: dest,
      clip: { x: 0, y: 0, width: screenshotW, height: screenshotH },
    });

    const elapsed = ((Date.now() - t0) / 1000).toFixed(1);
    const pct     = Math.round(((i + 1) / TOTAL_FRAMES) * 100);
    process.stdout.write(
      `\r  [${SET}]  ${String(i + 1).padStart(3)} / ${TOTAL_FRAMES}  (${String(pct).padStart(3)}%)  ${elapsed}s`
    );

    if (i < TOTAL_FRAMES - 1) {
      await page.evaluate(() => {
        window._frameReady = false;
        window._nextFrame();
      });
    }
  }

  await browser.close();
  server.close();

  const elapsed = ((Date.now() - t0) / 1000).toFixed(1);
  const bytes   = fs.readdirSync(OUT_DIR)
    .filter(f => f.endsWith('.png'))
    .reduce((s, f) => s + fs.statSync(path.join(OUT_DIR, f)).size, 0);

  console.log(`\n\n✓  Fertig — ${TOTAL_FRAMES} Frames in ${elapsed}s`);
  console.log(`   PNG-Größe gesamt: ${(bytes / 1_048_576).toFixed(1)} MB`);
  console.log(`   Output: ${OUT_DIR}/`);
  console.log('\nNächster Schritt: bash postprocess.sh ' + SET);
}

main().catch(e => { console.error('\nFehler:', e.message); process.exit(1); });
