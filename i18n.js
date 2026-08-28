/* ── Sprachumschalter Deutsch / Türkisch ─────────────────────────
   Fügt einen DE/TR-Button neben dem Hamburger-Menü ein und übersetzt
   alle Elemente mit [data-i18n] (Inhalt), [data-i18n-ph] (Platzhalter)
   und [data-i18n-aria] (aria-label) anhand des Wörterbuchs, das jede
   Seite selbst in window.I18N_TR definiert. Deutsch bleibt dabei die
   Quelle der Wahrheit — der deutsche Originaltext wird beim ersten
   Umschalten automatisch zwischengespeichert, nicht dupliziert. */
(function () {
  const LANG_KEY = 'siteLang';

  function dict() {
    return window.I18N_TR || {};
  }

  function currentLang() {
    return localStorage.getItem(LANG_KEY) === 'tr' ? 'tr' : 'de';
  }

  function applyLang(lang) {
    const d = dict();
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (el.dataset.i18nDe === undefined) el.dataset.i18nDe = el.innerHTML;
      const tr = d[key];
      el.innerHTML = lang === 'tr' && tr !== undefined ? tr : el.dataset.i18nDe;
    });

    document.querySelectorAll('[data-i18n-ph]').forEach((el) => {
      const key = el.getAttribute('data-i18n-ph');
      if (el.dataset.i18nPhDe === undefined) el.dataset.i18nPhDe = el.getAttribute('placeholder') || '';
      const tr = d[key];
      el.setAttribute('placeholder', lang === 'tr' && tr !== undefined ? tr : el.dataset.i18nPhDe);
    });

    document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
      const key = el.getAttribute('data-i18n-aria');
      if (el.dataset.i18nAriaDe === undefined) el.dataset.i18nAriaDe = el.getAttribute('aria-label') || '';
      const tr = d[key];
      el.setAttribute('aria-label', lang === 'tr' && tr !== undefined ? tr : el.dataset.i18nAriaDe);
    });

    document.querySelectorAll('[data-i18n-title]').forEach((el) => {
      const key = el.getAttribute('data-i18n-title');
      if (el.dataset.i18nTitleDe === undefined) el.dataset.i18nTitleDe = el.getAttribute('title') || '';
      const tr = d[key];
      el.setAttribute('title', lang === 'tr' && tr !== undefined ? tr : el.dataset.i18nTitleDe);
    });

    document.querySelectorAll('[data-i18n-alt]').forEach((el) => {
      const key = el.getAttribute('data-i18n-alt');
      if (el.dataset.i18nAltDe === undefined) el.dataset.i18nAltDe = el.getAttribute('alt') || '';
      const tr = d[key];
      el.setAttribute('alt', lang === 'tr' && tr !== undefined ? tr : el.dataset.i18nAltDe);
    });

    document.querySelectorAll('.lang-toggle [data-lang]').forEach((btn) => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    document.dispatchEvent(new CustomEvent('langchange', { detail: { lang } }));
  }

  // Für Seiten-Skripte: window.i18nLang() liefert die aktuelle Sprache,
  // window.i18nText(key, deText) liefert die passende Übersetzung für
  // dynamisch erzeugte Inhalte (z. B. Button-Text während des Sendens).
  window.i18nLang = currentLang;
  window.i18nText = function (key, deText) {
    const d = dict();
    return currentLang() === 'tr' && d[key] !== undefined ? d[key] : deText;
  };

  function setLang(lang) {
    localStorage.setItem(LANG_KEY, lang);
    applyLang(lang);
  }

  function injectStyles() {
    const style = document.createElement('style');
    style.textContent = `
      .lang-toggle {
        display: flex; align-items: center; gap: 1px;
        height: 44px;
        margin-left: auto;
        border: 1px solid rgba(255,255,255,0.15);
        border-radius: 4px;
        overflow: hidden;
        flex-shrink: 0;
      }
      .lang-toggle.lang-toggle-fixed { margin-left: 0; }
      .lang-toggle button {
        background: none; border: none;
        color: rgba(255,255,255,0.5);
        font-family: 'Helvetica Neue', Arial, sans-serif;
        font-size: 0.62rem;
        letter-spacing: 0.15em;
        padding: 0.45rem 0.7rem;
        cursor: pointer;
        transition: background 0.2s, color 0.2s;
      }
      .lang-toggle button.active { background: var(--gold, #c8a96e); color: var(--dark, #08080e); }
      .lang-toggle button:not(.active):hover { color: #fff; }
      @media (max-width: 768px) {
        .lang-toggle button { padding: 0.4rem 0.55rem; }
      }
      /* Fallback-Positionierung für Seiten ohne <nav>-Flexbox (z. B. die
         Startseite mit frei positionierten Fixed-Elementen). Der genaue
         "right"-Wert wird per JS berechnet, damit er sich an die jeweils
         aktuelle Breite von #top-links anpasst (unterschiedlich lange
         Wörter je Sprache). */
      .lang-toggle.lang-toggle-fixed {
        position: fixed;
        top: 1.125rem;
        height: 44px;
        z-index: 200;
        margin-right: 0;
      }
      @media (max-width: 768px) {
        .lang-toggle.lang-toggle-fixed { top: 1.4rem; height: 44px; right: 3.6rem !important; }
      }
    `;
    document.head.appendChild(style);
  }

  function positionFixedToggle(wrap) {
    if (!wrap.classList.contains('lang-toggle-fixed')) return;
    if (window.innerWidth <= 768) return; // Mobile-Regel per CSS, #top-links ist dort ohnehin ausgeblendet
    const topLinks = document.getElementById('top-links');
    const menuBtn = document.getElementById('menu-btn');
    let rightPx = 84; // Fallback: knapp links vom Burger-Button
    // Hinweis: offsetParent ist bei position:fixed-Elementen immer null,
    // daher hier stattdessen den berechneten Stil prüfen.
    if (topLinks && getComputedStyle(topLinks).display !== 'none') {
      const rect = topLinks.getBoundingClientRect();
      rightPx = window.innerWidth - rect.left + 16;
    } else if (menuBtn) {
      const rect = menuBtn.getBoundingClientRect();
      rightPx = window.innerWidth - rect.left + 16;
    }
    wrap.style.right = rightPx + 'px';
  }

  function injectButton() {
    const menuBtn = document.getElementById('menu-btn');
    const nav = document.querySelector('nav');
    const wrap = document.createElement('div');
    wrap.className = 'lang-toggle';
    wrap.innerHTML =
      '<button type="button" data-lang="de">DE</button>' +
      '<button type="button" data-lang="tr">TR</button>';

    if (nav) {
      // Immer links von den Nav-Links (und links vom Burger-Button)
      // einfügen, damit die Position auf allen Seiten gleich ist.
      const navLinks = nav.querySelector('.nav-links');
      if (navLinks && navLinks.parentNode === nav) {
        nav.insertBefore(wrap, navLinks);
      } else if (menuBtn && menuBtn.parentNode === nav) {
        nav.insertBefore(wrap, menuBtn);
      } else {
        nav.appendChild(wrap);
      }
    } else if (menuBtn) {
      wrap.classList.add('lang-toggle-fixed');
      menuBtn.parentNode.insertBefore(wrap, menuBtn);
    } else {
      return;
    }

    wrap.querySelectorAll('button[data-lang]').forEach((btn) => {
      btn.addEventListener('click', () => setLang(btn.getAttribute('data-lang')));
    });

    if (wrap.classList.contains('lang-toggle-fixed')) {
      positionFixedToggle(wrap);
      document.addEventListener('langchange', () => positionFixedToggle(wrap));
      window.addEventListener('resize', () => positionFixedToggle(wrap), { passive: true });
    }
  }

  function init() {
    injectStyles();
    injectButton();
    applyLang(currentLang());
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Hält andere gleichzeitig offene Fenster/Frames synchron (z. B. den
  // eingebetteten VR-Rundgang als Iframe), sobald sich die Sprache in
  // einem anderen Kontext ändert. Das "storage"-Event feuert nur in
  // ANDEREN Fenstern/Frames als dem, das localStorage geändert hat.
  window.addEventListener('storage', function (e) {
    if (e.key === LANG_KEY) applyLang(currentLang());
  });
})();
