function buildOffsetPath(w, h, R, corner, b, F) {
  const offset = b * 0.35;
  const cx = offset, cy = offset; // for top-left

  const dx = Math.sqrt(Math.pow(b + F, 2) - Math.pow(cy - F, 2));
  const dy = Math.sqrt(Math.pow(b + F, 2) - Math.pow(cx - F, 2));

  // Top-left logic
  if (corner === "top-left") {
    const fx = cx + dx; // fillet on top edge
    const fy = cy + dy; // fillet on left edge

    // Top edge tangent
    const startX = fx;
    // T1: between top fillet (fx, F) and cutout (cx, cy)
    const ratio1 = F / (b + F);
    const t1x = fx + ratio1 * (cx - fx);
    const t1y = F + ratio1 * (cy - F);

    // T2: between cutout (cx, cy) and left fillet (F, fy)
    const ratio2 = F / (b + F);
    const t2x = F + ratio2 * (cx - F);
    const t2y = fy + ratio2 * (cy - fy);

    const endY = fy;

    return `M ${startX} 0 H ${w - R} A ${R} ${R} 0 0 1 ${w} ${R} V ${h - R} A ${R} ${R} 0 0 1 ${w - R} ${h} H ${R} A ${R} ${R} 0 0 1 0 ${h - R} V ${endY} A ${F} ${F} 0 0 1 ${t2x} ${t2y} A ${b} ${b} 0 0 0 ${t1x} ${t1y} A ${F} ${F} 0 0 1 ${startX} 0 Z`;
  }
}

const p = buildOffsetPath(300, 200, 20, "top-left", 38, 16);
const html = `<!DOCTYPE html><html><body>
<svg width="350" height="250" viewBox="0 0 320 220">
  <path d="${p}" fill="lightblue"/>
  <circle cx="${38 * 0.35}" cy="${38 * 0.35}" r="28" fill="red" opacity="0.5"/>
</svg>
</body></html>`;
require('fs').writeFileSync('scratch/offset_test.html', html);
