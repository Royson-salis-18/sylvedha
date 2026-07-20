import React from 'react';

export function LayeredBackground() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-[#01312D]" aria-hidden="true">
      {/* 
        Progressive Layer Building Technique
        Base is Dark Green (#01312D), Top Right is Light Green (#BFF202 / #EAFDE7), Bottom Left is minimal Black.
      */}
      <div className="absolute inset-0 w-full h-full" style={{ filter: 'blur(120px)' }}>
        
        {/* 1. Center / Max Dark Green (Primary Website Color) */}
        <div 
          className="absolute inset-0 w-full h-full bg-[#01312D] z-10"
        />
        
        {/* 2. Light Color (Top Right Corner) - Accent Color (Minimized) */}
        <div 
          className="absolute -top-[10%] -right-[5%] w-[35vw] h-[35vh] rounded-full bg-[#BFF202] opacity-45 z-30"
        />
        
        {/* 3. Black (Bottom Left leaning, spreading to bottom right) */}
        <div 
          className="absolute -bottom-[5%] -left-[30%] w-[130vw] h-[55vh] rounded-[100%] bg-black opacity-85 z-20"
        />
        
      </div>
      
      {/* Noise texture overlay to make it look premium and prevent banding */}
      <div 
        className="absolute inset-0 opacity-[0.04] z-40" 
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
          mixBlendMode: "overlay"
        }}
      />
    </div>
  );
}
