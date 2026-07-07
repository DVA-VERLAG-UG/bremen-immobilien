#!/usr/bin/env bash
# Konvertiert frames-raw-{SET}/ PNGs → frames-webp-{SET}/ WebPs
# Usage: bash postprocess.sh desktop
#        bash postprocess.sh mobile
set -euo pipefail

SET="${1:-desktop}"
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
RAW="$SCRIPT_DIR/../frames-raw-${SET}"
OUT="$SCRIPT_DIR/../frames-webp-${SET}"
QUALITY=80

echo "── WebP-Konvertierung ────────────────────────────────────────────────"
printf "  Set      : %s\n"   "$SET"
printf "  Quelle   : %s\n"   "$RAW"
printf "  Ausgabe  : %s\n"   "$OUT"
printf "  Qualität : %d\n\n" "$QUALITY"

command -v cwebp >/dev/null 2>&1 || {
  echo "FEHLER: cwebp nicht gefunden. Installieren mit: brew install webp"
  exit 1
}

[ -d "$RAW" ] || { echo "FEHLER: $RAW existiert nicht."; exit 1; }

mkdir -p "$OUT"
count=0; total_before=0; total_after=0
png_count=$(find "$RAW" -maxdepth 1 -name 'frame_*.png' | wc -l | tr -d ' ')

for src in "$RAW"/frame_*.png; do
  [ -f "$src" ] || continue
  frame=$(basename "$src" .png)
  dst="$OUT/${frame}.webp"
  b=$(stat -f%z "$src" 2>/dev/null || stat -c%s "$src")
  cwebp -q "$QUALITY" -quiet "$src" -o "$dst"
  a=$(stat -f%z "$dst" 2>/dev/null || stat -c%s "$dst")
  total_before=$((total_before + b)); total_after=$((total_after + a)); count=$((count + 1))
  printf "\r  %d/%d" "$count" "$png_count"
done

pct=$(( (total_before - total_after) * 100 / (total_before + 1) ))
echo ""
echo "── Zusammenfassung ──────────────────────────────────────────────────"
printf "  Frames   : %d\n"      "$count"
printf "  PNG      : %.1f MB\n" "$(echo "scale=1; $total_before/1048576" | bc)"
printf "  WebP     : %.1f MB\n" "$(echo "scale=1; $total_after/1048576"  | bc)"
printf "  Ersparnis: %d%%\n"    "$pct"
printf "  Ausgabe  : %s/\n"     "$OUT"
