#!/usr/bin/env bash
# Produces H.264 + AAC MP4 with faststart for broad browser support (Chrome, Firefox, Edge).
# Requires ffmpeg. Run from repo root: ./scripts/encode-section-4-video.sh
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SRC="$ROOT/public/images/course/Section-4-video.mov"
OUT="$ROOT/public/images/course/Section-4-video.mp4"
if ! command -v ffmpeg >/dev/null 2>&1; then
  echo "ffmpeg not found. Install with: brew install ffmpeg" >&2
  exit 1
fi
if [[ ! -f "$SRC" ]]; then
  echo "Missing source: $SRC" >&2
  exit 1
fi
ffmpeg -y -i "$SRC" \
  -c:v libx264 -crf 22 -preset medium -pix_fmt yuv420p \
  -c:a aac -b:a 128k \
  -movflags +faststart \
  "$OUT"
echo "Wrote $OUT"
