// We want a corner cutout at top-right.
// Center of cutout circle is (w - cx, cy).
// Radius of cutout circle is biteR.
// Fillet radius is F.
function build(w, h, R, cx, cy, biteR, F) {
  // Top edge y = 0. Fillet circle is tangent to y = 0 and to the cutout circle.
  // Fillet circle center (fx, F).
  // Distance from (fx, F) to (w - cx, cy) is biteR + F.
  // (w - cx - fx)^2 + (cy - F)^2 = (biteR + F)^2
  // Let dx = w - cx - fx.
  // dx = sqrt((biteR + F)^2 - (cy - F)^2)
  // fx = w - cx - dx
  const dx = Math.sqrt(Math.pow(biteR + F, 2) - Math.pow(cy - F, 2));
  const fx = w - cx - dx;
  
  // Right edge x = w. Fillet circle center (w - F, fy).
  // Distance from (w - F, fy) to (w - cx, cy) is biteR + F.
  // (F - cx)^2 + (cy - fy)^2 = (biteR + F)^2
  // Let dy = cy - fy.
  // dy = sqrt((biteR + F)^2 - (F - cx)^2)
  // fy = cy - dy
  const dy = Math.sqrt(Math.pow(biteR + F, 2) - Math.pow(F - cx, 2));
  const fy = cy - dy;

  // Tangent points
  const t1x = fx, t1y = 0; // On top edge
  const ratio1 = F / (biteR + F);
  const tc1x = fx + ratio1 * dx, tc1y = F + ratio1 * (cy - F); // Between fillet 1 and cutout
  
  const t2x = w, t2y = fy; // On right edge
  const ratio2 = F / (biteR + F);
  const tc2x = (w - F) + ratio2 * (cx - F), tc2y = fy + ratio2 * dy; // Between cutout and fillet 2

  return `M ${R} 0 H ${t1x} A ${F} ${F} 0 0 1 ${tc1x} ${tc1y} A ${biteR} ${biteR} 0 0 0 ${tc2x} ${tc2y} A ${F} ${F} 0 0 1 ${t2x} ${t2y} V ${h - R} A ${R} ${R} 0 0 1 ${w - R} ${h} H ${R} A ${R} ${R} 0 0 1 0 ${h - R} V ${R} A ${R} ${R} 0 0 1 ${R} 0 Z`;
}

const html = `<!DOCTYPE html>
<html><body>
<svg width="350" height="250" viewBox="0 0 320 220">
  <path d="${build(300, 200, 20, 25, 25, 50, 16)}" fill="lightblue"/>
  <circle cx="${300-25}" cy="25" r="28" fill="red" opacity="0.5"/>
</svg>
</body></html>`;
require('fs').writeFileSync('scratch/fillet_test2.html', html);
