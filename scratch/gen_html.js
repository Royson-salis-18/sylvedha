function buildFilletedArcs() {
  const corner = "top-left";
  const w = 300, h = 200, R = 20, biteR = 50, F = 16;
  const D = Math.sqrt(biteR * biteR + 2 * biteR * F);
  const ratio = F / (biteR + F);

  // top-right
  const tr_startX = w - D;
  const tr_t1x = (w - D) + ratio * D, tr_t1y = F + ratio * (-F);
  const tr_t2x = (w - F) + ratio * F, tr_t2y = D + ratio * (-D);
  const tr_endY = D;
  const tr_path = `M ${R} 0 H ${tr_startX} A ${F} ${F} 0 0 1 ${tr_t1x} ${tr_t1y} A ${biteR} ${biteR} 0 0 0 ${tr_t2x} ${tr_t2y} A ${F} ${F} 0 0 1 ${w} ${tr_endY} V ${h - R} A ${R} ${R} 0 0 1 ${w - R} ${h} H ${R} A ${R} ${R} 0 0 1 0 ${h - R} V ${R} A ${R} ${R} 0 0 1 ${R} 0 Z`;

  // top-left
  const tl_startX = D;
  const tl_t1x = D + ratio * (-D), tl_t1y = F + ratio * (-F); // top edge fillet
  const tl_t2x = F + ratio * (-F), tl_t2y = D + ratio * (-D); // left edge fillet
  const tl_endY = D; // on left edge
  // Start at (D,0). Go CW.
  const tl_path = `M ${tl_startX} 0 H ${w - R} A ${R} ${R} 0 0 1 ${w} ${R} V ${h - R} A ${R} ${R} 0 0 1 ${w - R} ${h} H ${R} A ${R} ${R} 0 0 1 0 ${h - R} V ${tl_endY} A ${F} ${F} 0 0 1 ${tl_t2x} ${tl_t2y} A ${biteR} ${biteR} 0 0 0 ${tl_t1x} ${tl_t1y} A ${F} ${F} 0 0 1 ${tl_startX} 0 Z`;

  // bottom-left
  const bl_t1x = F + ratio * (-F), bl_t1y = (h - D) + ratio * D; // left edge
  const bl_t2x = D + ratio * (-D), bl_t2y = (h - F) + ratio * F; // bottom edge
  const bl_path = `M ${R} 0 H ${w - R} A ${R} ${R} 0 0 1 ${w} ${R} V ${h - R} A ${R} ${R} 0 0 1 ${w - R} ${h} H ${D} A ${F} ${F} 0 0 1 ${bl_t2x} ${bl_t2y} A ${biteR} ${biteR} 0 0 0 ${bl_t1x} ${bl_t1y} A ${F} ${F} 0 0 1 0 ${h - D} V ${R} A ${R} ${R} 0 0 1 ${R} 0 Z`;
  
  // bottom-right
  const br_t1x = (w - D) + ratio * D, br_t1y = (h - F) + ratio * F; // bottom edge
  const br_t2x = (w - F) + ratio * F, br_t2y = (h - D) + ratio * D; // right edge
  const br_path = `M ${R} 0 H ${w - R} A ${R} ${R} 0 0 1 ${w} ${R} V ${h - D} A ${F} ${F} 0 0 1 ${br_t2x} ${br_t2y} A ${biteR} ${biteR} 0 0 0 ${br_t1x} ${br_t1y} A ${F} ${F} 0 0 1 ${w - D} ${h} H ${R} A ${R} ${R} 0 0 1 0 ${h - R} V ${R} A ${R} ${R} 0 0 1 ${R} 0 Z`;

  return `<!DOCTYPE html>
<html><body>
<svg width="350" height="250" viewBox="-10 -10 320 220">
  <path d="${tr_path}" fill="lightblue"/>
</svg>
<svg width="350" height="250" viewBox="-10 -10 320 220">
  <path d="${tl_path}" fill="lightgreen"/>
</svg>
<svg width="350" height="250" viewBox="-10 -10 320 220">
  <path d="${bl_path}" fill="pink"/>
</svg>
<svg width="350" height="250" viewBox="-10 -10 320 220">
  <path d="${br_path}" fill="yellow"/>
</svg>
</body></html>`;
}
const fs = require('fs');
fs.writeFileSync('scratch/fillet_test.html', buildFilletedArcs());
