function buildFilletedArc(corner, w, h, R, biteR, F) {
  // R = corner radius for standard corners
  // biteR = cutout radius
  // F = fillet radius
  const D = Math.sqrt(biteR * biteR + 2 * biteR * F);
  const ratio = F / (biteR + F);
  
  if (corner === "top-right") {
    const startX = w - D;
    const startY = 0;
    
    const t1x = (w - D) + ratio * D;
    const t1y = F + ratio * (-F);
    
    const t2x = (w - F) + ratio * F;
    const t2y = D + ratio * (-D);
    
    const endX = w;
    const endY = D;
    
    return `M ${R} 0 H ${startX} A ${F} ${F} 0 0 1 ${t1x} ${t1y} A ${biteR} ${biteR} 0 0 0 ${t2x} ${t2y} A ${F} ${F} 0 0 1 ${endX} ${endY} V ${h - R} A ${R} ${R} 0 0 1 ${w - R} ${h} H ${R} A ${R} ${R} 0 0 1 0 ${h - R} V ${R} A ${R} ${R} 0 0 1 ${R} 0 Z`;
  }
}
console.log(buildFilletedArc("top-right", 300, 200, 20, 50, 16));
