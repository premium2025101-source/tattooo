export default function TattooBackground() {
  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
      style={{ background: '#050505' }}
    >
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Radial gradients for subtle spotlights */}
          <radialGradient id="spot1" cx="15%" cy="20%" r="30%">
            <stop offset="0%" stopColor="#C41E3A" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#050505" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="spot2" cx="85%" cy="60%" r="25%">
            <stop offset="0%" stopColor="#C41E3A" stopOpacity="0.03" />
            <stop offset="100%" stopColor="#050505" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="spot3" cx="50%" cy="90%" r="35%">
            <stop offset="0%" stopColor="#C41E3A" stopOpacity="0.03" />
            <stop offset="100%" stopColor="#050505" stopOpacity="0" />
          </radialGradient>

          {/* Ink texture filter */}
          <filter id="inkTexture">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" seed="15" result="noise" />
            <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise" />
            <feBlend in="SourceGraphic" in2="grayNoise" mode="multiply" />
          </filter>
          <filter id="inkBlur">
            <feGaussianBlur stdDeviation="1.5" />
          </filter>
          <filter id="softGlow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Dotwork pattern */}
          <pattern id="dotwork" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="0.5" fill="#ffffff" opacity="0.03" />
            <circle cx="0" cy="0" r="0.3" fill="#ffffff" opacity="0.02" />
            <circle cx="20" cy="0" r="0.3" fill="#ffffff" opacity="0.02" />
            <circle cx="0" cy="20" r="0.3" fill="#ffffff" opacity="0.02" />
            <circle cx="20" cy="20" r="0.3" fill="#ffffff" opacity="0.02" />
          </pattern>

          {/* Crosshatch pattern */}
          <pattern id="crosshatch" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="30" y2="30" stroke="#ffffff" strokeWidth="0.3" opacity="0.02" />
            <line x1="30" y1="0" x2="0" y2="30" stroke="#ffffff" strokeWidth="0.3" opacity="0.02" />
          </pattern>

          {/* Diagonal line pattern */}
          <pattern id="diagonalLines" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <line x1="0" y1="40" x2="40" y2="0" stroke="#ffffff" strokeWidth="0.2" opacity="0.015" />
          </pattern>

          {/* Mandala pattern */}
          <pattern id="mandala" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <circle cx="50" cy="50" r="20" fill="none" stroke="#ffffff" strokeWidth="0.3" opacity="0.025" />
            <circle cx="50" cy="50" r="30" fill="none" stroke="#ffffff" strokeWidth="0.2" opacity="0.02" />
            <circle cx="50" cy="50" r="40" fill="none" stroke="#ffffff" strokeWidth="0.15" opacity="0.015" />
            {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle) => (
              <line
                key={angle}
                x1="50"
                y1="50"
                x2={50 + 45 * Math.cos((angle * Math.PI) / 180)}
                y2={50 + 45 * Math.sin((angle * Math.PI) / 180)}
                stroke="#ffffff"
                strokeWidth="0.2"
                opacity="0.02"
              />
            ))}
          </pattern>

          {/* Tribal wave pattern */}
          <pattern id="tribalWave" x="0" y="0" width="200" height="80" patternUnits="userSpaceOnUse">
            <path
              d="M0,40 Q25,20 50,40 Q75,60 100,40 Q125,20 150,40 Q175,60 200,40"
              fill="none"
              stroke="#ffffff"
              strokeWidth="0.5"
              opacity="0.03"
            />
            <path
              d="M0,50 Q25,30 50,50 Q75,70 100,50 Q125,30 150,50 Q175,70 200,50"
              fill="none"
              stroke="#ffffff"
              strokeWidth="0.3"
              opacity="0.02"
            />
          </pattern>
        </defs>

        {/* Base background layers */}
        <rect width="100%" height="100%" fill="url(#spot1)" />
        <rect width="100%" height="100%" fill="url(#spot2)" />
        <rect width="100%" height="100%" fill="url(#spot3)" />
        <rect width="100%" height="100%" fill="url(#dotwork)" />
        <rect width="100%" height="100%" fill="url(#crosshatch)" />
        <rect width="100%" height="100%" fill="url(#diagonalLines)" />

        {/* ========== TOP LEFT - Ink Splatter + Mandala ========== */}
        <g transform="translate(0, 0)" opacity="0.6">
          {/* Mandala */}
          <circle cx="120" cy="120" r="80" fill="none" stroke="#C41E3A" strokeWidth="0.5" opacity="0.06" filter="url(#softGlow)" />
          <circle cx="120" cy="120" r="60" fill="none" stroke="#C41E3A" strokeWidth="0.3" opacity="0.08" />
          <circle cx="120" cy="120" r="40" fill="none" stroke="#C41E3A" strokeWidth="0.4" opacity="0.1" />
          <circle cx="120" cy="120" r="20" fill="none" stroke="#C41E3A" strokeWidth="0.5" opacity="0.12" />
          {/* Radiating lines */}
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i * 30 * Math.PI) / 180;
            return (
              <line
                key={`ml-${i}`}
                x1={120 + 20 * Math.cos(angle)}
                y1={120 + 20 * Math.sin(angle)}
                x2={120 + 80 * Math.cos(angle)}
                y2={120 + 80 * Math.sin(angle)}
                stroke="#C41E3A"
                strokeWidth="0.3"
                opacity="0.05"
              />
            );
          })}
          {/* Ink splatters */}
          <ellipse cx="50" cy="80" rx="15" ry="8" fill="#C41E3A" opacity="0.03" filter="url(#inkBlur)" />
          <ellipse cx="180" cy="50" rx="12" ry="6" fill="#C41E3A" opacity="0.025" filter="url(#inkBlur)" />
          <circle cx="30" cy="30" r="3" fill="#C41E3A" opacity="0.04" />
          <circle cx="200" cy="200" r="2" fill="#C41E3A" opacity="0.03" />
          <circle cx="90" cy="40" r="1.5" fill="#C41E3A" opacity="0.03" />
        </g>

        {/* ========== TOP RIGHT - Geometric Tribal ========== */}
        <g transform="translate(0, 0)" opacity="0.6">
          {/* Tribal triangles */}
          <path
            d="M 1300,50 L 1380,120 L 1220,120 Z"
            fill="none"
            stroke="#ffffff"
            strokeWidth="0.6"
            opacity="0.04"
          />
          <path
            d="M 1340,70 L 1400,130 L 1280,130 Z"
            fill="none"
            stroke="#ffffff"
            strokeWidth="0.4"
            opacity="0.03"
          />
          <path
            d="M 1340,30 L 1420,100 L 1260,100 Z"
            fill="none"
            stroke="#C41E3A"
            strokeWidth="0.3"
            opacity="0.04"
          />
          {/* Fine line decorative elements */}
          <line x1="1250" y1="80" x2="1450" y2="80" stroke="#ffffff" strokeWidth="0.2" opacity="0.03" />
          <line x1="1250" y1="100" x2="1450" y2="100" stroke="#ffffff" strokeWidth="0.2" opacity="0.03" />
          {/* Ink splatters */}
          <ellipse cx="1400" cy="60" rx="20" ry="5" fill="#C41E3A" opacity="0.02" filter="url(#inkBlur)" />
          <circle cx="1350" cy="30" r="2" fill="#C41E3A" opacity="0.03" />
          <circle cx="1420" cy="150" r="1.5" fill="#ffffff" opacity="0.02" />
        </g>

        {/* ========== MIDDLE LEFT - Dotwork Sleeve Pattern ========== */}
        <g transform="translate(0, 0)" opacity="0.5">
          {/* Dotwork clusters */}
          {Array.from({ length: 20 }).map((_, row) =>
            Array.from({ length: 5 }).map((_, col) => (
              <circle
                key={`dw-${row}-${col}`}
                cx={40 + col * 15}
                cy={500 + row * 15}
                r={Math.random() * 1.5 + 0.3}
                fill="#ffffff"
                opacity={Math.random() * 0.03 + 0.01}
              />
            ))
          )}
          {/* Decorative fine lines */}
          <path
            d="M 30,500 Q 80,480 60,530 Q 40,580 90,560"
            fill="none"
            stroke="#C41E3A"
            strokeWidth="0.4"
            opacity="0.05"
          />
          <path
            d="M 50,520 Q 100,500 80,550 Q 60,600 110,580"
            fill="none"
            stroke="#ffffff"
            strokeWidth="0.3"
            opacity="0.03"
          />
        </g>

        {/* ========== MIDDLE RIGHT - Large Ornamental Circle ========== */}
        <g transform="translate(0, 0)" opacity="0.5">
          {/* Big ornamental circles */}
          <circle cx="1400" cy="600" r="150" fill="none" stroke="#C41E3A" strokeWidth="0.3" opacity="0.04" />
          <circle cx="1400" cy="600" r="120" fill="none" stroke="#C41E3A" strokeWidth="0.5" opacity="0.05" />
          <circle cx="1400" cy="600" r="90" fill="none" stroke="#C41E3A" strokeWidth="0.3" opacity="0.06" />
          <circle cx="1400" cy="600" r="60" fill="none" stroke="#ffffff" strokeWidth="0.4" opacity="0.04" />
          {/* Inner decorative pattern */}
          {Array.from({ length: 8 }).map((_, i) => {
            const angle = (i * 45 * Math.PI) / 180;
            return (
              <g key={`orn-${i}`}>
                <line
                  x1={1400 + 60 * Math.cos(angle)}
                  y1={600 + 60 * Math.sin(angle)}
                  x2={1400 + 150 * Math.cos(angle)}
                  y2={600 + 150 * Math.sin(angle)}
                  stroke="#C41E3A"
                  strokeWidth="0.2"
                  opacity="0.03"
                />
                <circle
                  cx={1400 + 120 * Math.cos(angle)}
                  cy={600 + 120 * Math.sin(angle)}
                  r="2"
                  fill="#C41E3A"
                  opacity="0.04"
                />
              </g>
            );
          })}
          {/* Ink splatter */}
          <ellipse cx="1450" cy="550" rx="30" ry="8" fill="#C41E3A" opacity="0.02" filter="url(#inkBlur)" />
        </g>

        {/* ========== BOTTOM LEFT - Tribal Wave ========== */}
        <g transform="translate(0, 0)" opacity="0.5">
          {/* Wave pattern */}
          <path
            d="M 50,1200 Q 150,1170 250,1200 Q 350,1230 450,1200 Q 550,1170 650,1200 Q 750,1230 850,1200"
            fill="none"
            stroke="#C41E3A"
            strokeWidth="0.8"
            opacity="0.05"
          />
          <path
            d="M 50,1220 Q 150,1190 250,1220 Q 350,1250 450,1220 Q 550,1190 650,1220 Q 750,1250 850,1220"
            fill="none"
            stroke="#C41E3A"
            strokeWidth="0.5"
            opacity="0.04"
          />
          <path
            d="M 50,1240 Q 150,1210 250,1240 Q 350,1270 450,1240 Q 550,1210 650,1240 Q 750,1270 850,1240"
            fill="none"
            stroke="#ffffff"
            strokeWidth="0.3"
            opacity="0.03"
          />
          {/* Ink drips */}
          <line x1="250" y1="1200" x2="250" y2="1240" stroke="#C41E3A" strokeWidth="0.5" opacity="0.04" />
          <line x1="450" y1="1200" x2="450" y2="1260" stroke="#C41E3A" strokeWidth="0.3" opacity="0.03" />
          <line x1="650" y1="1200" x2="650" y2="1235" stroke="#C41E3A" strokeWidth="0.4" opacity="0.03" />
          <circle cx="250" cy="1242" r="2" fill="#C41E3A" opacity="0.05" />
          <circle cx="450" cy="1262" r="1.5" fill="#C41E3A" opacity="0.04" />
          <circle cx="650" cy="1237" r="1.8" fill="#C41E3A" opacity="0.04" />
        </g>

        {/* ========== BOTTOM RIGHT - Geometric Diamond ========== */}
        <g transform="translate(0, 0)" opacity="0.5">
          {/* Diamond shapes */}
          <path
            d="M 1350,1100 L 1450,1150 L 1350,1200 L 1250,1150 Z"
            fill="none"
            stroke="#C41E3A"
            strokeWidth="0.5"
            opacity="0.05"
          />
          <path
            d="M 1350,1115 L 1430,1150 L 1350,1185 L 1270,1150 Z"
            fill="none"
            stroke="#ffffff"
            strokeWidth="0.3"
            opacity="0.03"
          />
          <path
            d="M 1350,1130 L 1410,1150 L 1350,1170 L 1290,1150 Z"
            fill="none"
            stroke="#C41E3A"
            strokeWidth="0.4"
            opacity="0.04"
          />
          {/* Cross lines */}
          <line x1="1250" y1="1150" x2="1450" y2="1150" stroke="#ffffff" strokeWidth="0.2" opacity="0.03" />
          <line x1="1350" y1="1100" x2="1350" y2="1200" stroke="#ffffff" strokeWidth="0.2" opacity="0.03" />
          {/* Ink splatters */}
          <circle cx="1300" cy="1120" r="2" fill="#C41E3A" opacity="0.03" />
          <circle cx="1400" cy="1180" r="1.5" fill="#C41E3A" opacity="0.025" />
          <ellipse cx="1460" cy="1140" rx="8" ry="3" fill="#C41E3A" opacity="0.02" filter="url(#inkBlur)" />
        </g>

        {/* ========== SCATTERED INK SPLATTERS ========== */}
        <g filter="url(#inkBlur)" opacity="0.7">
          <ellipse cx="500" cy="300" rx="25" ry="8" fill="#C41E3A" opacity="0.015" transform="rotate(-15, 500, 300)" />
          <ellipse cx="800" cy="200" rx="18" ry="5" fill="#C41E3A" opacity="0.012" transform="rotate(25, 800, 200)" />
          <ellipse cx="1100" cy="400" rx="22" ry="7" fill="#C41E3A" opacity="0.01" transform="rotate(-10, 1100, 400)" />
          <ellipse cx="300" cy="700" rx="30" ry="10" fill="#C41E3A" opacity="0.012" transform="rotate(8, 300, 700)" />
          <ellipse cx="700" cy="900" rx="20" ry="6" fill="#C41E3A" opacity="0.015" transform="rotate(-20, 700, 900)" />
          <ellipse cx="1200" cy="800" rx="28" ry="9" fill="#C41E3A" opacity="0.01" transform="rotate(12, 1200, 800)" />
          <ellipse cx="200" cy="1000" rx="15" ry="4" fill="#C41E3A" opacity="0.012" transform="rotate(30, 200, 1000)" />
          <ellipse cx="1000" cy="1100" rx="35" ry="12" fill="#C41E3A" opacity="0.008" transform="rotate(-5, 1000, 1100)" />
        </g>

        {/* ========== SCATTERED DOT PARTICLES ========== */}
        <g>
          {Array.from({ length: 40 }).map((_, i) => {
            const x = (Math.random() * 1600);
            const y = (Math.random() * 1400);
            const r = Math.random() * 1.5 + 0.2;
            const opacity = Math.random() * 0.03 + 0.005;
            return (
              <circle
                key={`particle-${i}`}
                cx={x}
                cy={y}
                r={r}
                fill={Math.random() > 0.7 ? '#C41E3A' : '#ffffff'}
                opacity={opacity}
              />
            );
          })}
        </g>

        {/* ========== FINE LINE DECORATIVE BORDERS ========== */}
        <g opacity="0.4">
          {/* Top border line */}
          <line x1="0" y1="2" x2="1600" y2="2" stroke="#C41E3A" strokeWidth="0.5" opacity="0.06" />
          {/* Bottom border line */}
          <line x1="0" y1="1438" x2="1600" y2="1438" stroke="#C41E3A" strokeWidth="0.5" opacity="0.06" />
          {/* Left decorative line */}
          <line x1="2" y1="0" x2="2" y2="1440" stroke="#C41E3A" strokeWidth="0.3" opacity="0.04" />
          {/* Right decorative line */}
          <line x1="1598" y1="0" x2="1598" y2="1440" stroke="#C41E3A" strokeWidth="0.3" opacity="0.04" />
        </g>

        {/* ========== SUBTLE TATTOO NEEDLE LINES ========== */}
        <g opacity="0.3">
          <path
            d="M 600,100 C 620,150 580,200 600,250 C 620,300 580,350 600,400"
            fill="none"
            stroke="#ffffff"
            strokeWidth="0.2"
            opacity="0.02"
            strokeDasharray="3,5"
          />
          <path
            d="M 900,500 C 920,550 880,600 900,650 C 920,700 880,750 900,800"
            fill="none"
            stroke="#ffffff"
            strokeWidth="0.2"
            opacity="0.02"
            strokeDasharray="2,4"
          />
          <path
            d="M 1100,200 C 1120,260 1080,320 1100,380 C 1120,440 1080,500 1100,560"
            fill="none"
            stroke="#C41E3A"
            strokeWidth="0.2"
            opacity="0.015"
            strokeDasharray="4,6"
          />
        </g>

        {/* ========== SMALL TATTOO-STYLE ICONS ========== */}
        {/* Rose / flower sketch */}
        <g transform="translate(750, 350)" opacity="0.04">
          <circle cx="0" cy="0" r="15" fill="none" stroke="#C41E3A" strokeWidth="0.5" />
          <path d="M 0,-15 Q 8,-5 0,15 Q -8,-5 0,-15" fill="none" stroke="#C41E3A" strokeWidth="0.3" />
          <path d="M -15,0 Q -5,-8 15,0 Q -5,8 -15,0" fill="none" stroke="#C41E3A" strokeWidth="0.3" />
          <path d="M -10,-10 Q 0,-20 10,-10" fill="none" stroke="#C41E3A" strokeWidth="0.3" />
          <path d="M -10,10 Q 0,20 10,10" fill="none" stroke="#C41E3A" strokeWidth="0.3" />
        </g>

        {/* Skull / geometric shape */}
        <g transform="translate(350, 850)" opacity="0.035">
          <polygon points="0,-20 15,0 15,20 0,30 -15,20 -15,0" fill="none" stroke="#ffffff" strokeWidth="0.4" />
          <circle cx="0" cy="5" r="5" fill="none" stroke="#ffffff" strokeWidth="0.3" />
          <line x1="-8" y1="15" x2="8" y2="15" stroke="#ffffff" strokeWidth="0.3" />
        </g>

        {/* Arrow / tribal element */}
        <g transform="translate(1200, 350)" opacity="0.035">
          <line x1="-25" y1="0" x2="20" y2="0" stroke="#C41E3A" strokeWidth="0.5" />
          <polygon points="15,-8 25,0 15,8" fill="none" stroke="#C41E3A" strokeWidth="0.4" />
          <line x1="-20" y1="-5" x2="-10" y2="-5" stroke="#C41E3A" strokeWidth="0.3" />
          <line x1="-20" y1="5" x2="-10" y2="5" stroke="#C41E3A" strokeWidth="0.3" />
        </g>

        {/* ========== VIGNETTE OVERLAY ========== */}
        <rect
          width="100%"
          height="100%"
          fill="url(#mandala)"
          opacity="0.5"
        />
        <rect
          width="100%"
          height="100%"
          fill="url(#tribalWave)"
          opacity="0.3"
        />
      </svg>
    </div>
  );
}
