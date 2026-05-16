#!/usr/bin/env bash
# compress-video.sh — Two-pass H.264 compression for BayShine background videos.
#
# REQUIREMENTS: ffmpeg must be installed and on your PATH.
#   macOS: brew install ffmpeg
#   Linux: sudo apt install ffmpeg
#
# USAGE: bash scripts/compress-video.sh
#
# Run from the repo root. Overwrites source files in place.
# Originals are NOT kept — back up first if you need them.
#
# CRF guide used here:
#   CRF 26 — showcase/hero videos (slightly higher quality)
#   CRF 28 — ambient loops (smaller file, imperceptible on dark overlay)
# Scale: capped at 720p (-2:720 preserves aspect ratio)

set -euo pipefail

# ── Guard: require ffmpeg ────────────────────────────────────────────────────
if ! command -v ffmpeg &>/dev/null; then
  echo "ERROR: ffmpeg not found. Install it first."
  echo "  macOS: brew install ffmpeg"
  echo "  Linux: sudo apt install ffmpeg"
  exit 1
fi

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
VIDEO_DIR="$REPO_ROOT/public/videos"

# ── Video definitions: [filename, CRF, target label] ────────────────────────
# Format: "filename|crf|label"
declare -a VIDEOS=(
  "showcase-exterior.mp4|26|showcase — target <5MB"
  "showcase-coating.mp4|26|showcase — target <4MB"
  "AtTheCarWash.mp4|26|showcase — target <3MB"
  "showcase-decontamination.mp4|26|showcase — target <3MB"
  "ambient-beads-on-hood.mp4|26|hero ambient — target <2MB (CRITICAL)"
  "ambient-fleet.mp4|28|ambient loop — target <2MB"
  "comparison-bayshine-detail.mp4|26|comparison — target <3MB"
)

# ── Two-pass encode function ─────────────────────────────────────────────────
# Args: $1=input path, $2=crf, $3=label
compress_video() {
  local input="$1"
  local crf="$2"
  local label="$3"
  local tmp="${input%.mp4}_compressed_tmp.mp4"
  local passlog="${input%.mp4}_ffmpeg2pass"

  if [[ ! -f "$input" ]]; then
    echo "  SKIP: $input not found"
    return
  fi

  local before_kb
  before_kb=$(du -k "$input" | cut -f1)

  echo ""
  echo "── $label"
  echo "   File   : $(basename "$input")"
  echo "   Before : ${before_kb}KB"
  echo "   CRF    : $crf"

  # Pass 1 — analysis only, no output file
  ffmpeg -y -i "$input" \
    -vf "scale=-2:720" \
    -c:v libx264 -crf "$crf" -preset slow \
    -pass 1 -passlogfile "$passlog" \
    -an -f null /dev/null 2>/dev/null

  # Pass 2 — final encode
  ffmpeg -y -i "$input" \
    -vf "scale=-2:720" \
    -c:v libx264 -crf "$crf" -preset slow \
    -pass 2 -passlogfile "$passlog" \
    -c:a aac -b:a 64k \
    -movflags +faststart \
    "$tmp" 2>/dev/null

  # Clean up pass log files
  rm -f "${passlog}-0.log" "${passlog}-0.log.mbtree" 2>/dev/null || true

  # Replace original only if output is smaller
  local after_kb
  after_kb=$(du -k "$tmp" | cut -f1)

  if (( after_kb < before_kb )); then
    mv "$tmp" "$input"
    echo "   After  : ${after_kb}KB  (saved $(( before_kb - after_kb ))KB)"
  else
    rm -f "$tmp"
    echo "   SKIP   : compressed version was not smaller — original kept"
  fi
}

# ── Run ──────────────────────────────────────────────────────────────────────
echo "BayShine video compression — $(date)"
echo "Video directory: $VIDEO_DIR"
echo ""

for entry in "${VIDEOS[@]}"; do
  IFS='|' read -r filename crf label <<< "$entry"
  compress_video "$VIDEO_DIR/$filename" "$crf" "$label"
done

echo ""
echo "Done. Run \`du -sh $VIDEO_DIR\` to review total size."
