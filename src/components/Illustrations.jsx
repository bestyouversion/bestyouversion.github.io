// Inline SVG illustrations matching the site's pink/plum/gold theme
// No external images needed — these render as React components

const GOLD = '#5D2B3D'
const GOLD_LIGHT = 'rgba(233,75,124,0.18)'
const GOLD_FAINT = 'rgba(233,75,124,0.08)'
const TEXT_MUTED = 'rgba(60,30,40,0.45)'
const BG_FILL = '#FFF0F4'

export function HeroIllustration({ width = '100%', height = 300 }) {
  return (
    <svg viewBox="0 0 800 400" width={width} height={height} style={{ display: 'block', borderRadius: 14 }}>
      <rect width="800" height="400" fill={BG_FILL} />
      {/* Soft radial glow */}
      <circle cx="400" cy="200" r="180" fill={GOLD_FAINT} />
      <circle cx="400" cy="200" r="100" fill="rgba(233,75,124,0.12)" />
      {/* Brain outline */}
      <path d="M360 260 Q320 260 310 230 Q295 200 310 170 Q320 140 350 130 Q360 110 390 105 Q420 100 440 115 Q460 105 480 115 Q510 125 510 155 Q530 170 525 200 Q520 230 500 240 Q490 260 460 260" fill="none" stroke={GOLD} strokeWidth="1.5" opacity="0.6" />
      {/* Neural connections */}
      <circle cx="370" cy="170" r="4" fill={GOLD} opacity="0.8" />
      <circle cx="420" cy="150" r="5" fill={GOLD} opacity="0.9" />
      <circle cx="460" cy="175" r="4" fill={GOLD} opacity="0.7" />
      <circle cx="390" cy="210" r="3" fill={GOLD} opacity="0.6" />
      <circle cx="440" cy="220" r="4" fill={GOLD} opacity="0.8" />
      <circle cx="480" cy="200" r="3" fill={GOLD} opacity="0.5" />
      <circle cx="350" cy="200" r="3" fill={GOLD} opacity="0.5" />
      <line x1="370" y1="170" x2="420" y2="150" stroke={GOLD} strokeWidth="0.8" opacity="0.4" />
      <line x1="420" y1="150" x2="460" y2="175" stroke={GOLD} strokeWidth="0.8" opacity="0.4" />
      <line x1="370" y1="170" x2="390" y2="210" stroke={GOLD} strokeWidth="0.8" opacity="0.3" />
      <line x1="420" y1="150" x2="440" y2="220" stroke={GOLD} strokeWidth="0.8" opacity="0.3" />
      <line x1="460" y1="175" x2="440" y2="220" stroke={GOLD} strokeWidth="0.8" opacity="0.4" />
      <line x1="460" y1="175" x2="480" y2="200" stroke={GOLD} strokeWidth="0.8" opacity="0.3" />
      <line x1="350" y1="200" x2="370" y2="170" stroke={GOLD} strokeWidth="0.8" opacity="0.3" />
      <line x1="350" y1="200" x2="390" y2="210" stroke={GOLD} strokeWidth="0.8" opacity="0.4" />
      {/* Sparkle dots */}
      <circle cx="300" cy="140" r="2" fill={GOLD} opacity="0.3" />
      <circle cx="520" cy="150" r="2" fill={GOLD} opacity="0.25" />
      <circle cx="340" cy="270" r="1.5" fill={GOLD} opacity="0.2" />
      <circle cx="490" cy="270" r="1.5" fill={GOLD} opacity="0.2" />
      {/* Text */}
      <text x="400" y="330" textAnchor="middle" fontFamily="serif" fontSize="14" fill={TEXT_MUTED} letterSpacing="3">HEAL · TRANSFORM · GROW</text>
    </svg>
  )
}

export function MindfulnessIllustration({ width = '100%', height = 200 }) {
  return (
    <svg viewBox="0 0 600 300" width={width} height={height} style={{ display: 'block', borderRadius: 14 }}>
      <rect width="600" height="300" fill={BG_FILL} />
      {/* Meditation figure silhouette */}
      <circle cx="300" cy="120" r="22" fill="none" stroke={GOLD} strokeWidth="1.2" opacity="0.7" />
      <path d="M278 155 Q280 140 300 138 Q320 140 322 155" fill="none" stroke={GOLD} strokeWidth="1.2" opacity="0.7" />
      <path d="M260 200 Q270 170 300 165 Q330 170 340 200" fill="none" stroke={GOLD} strokeWidth="1.2" opacity="0.7" />
      <path d="M255 200 Q240 210 235 200" fill="none" stroke={GOLD} strokeWidth="1" opacity="0.5" />
      <path d="M345 200 Q360 210 365 200" fill="none" stroke={GOLD} strokeWidth="1" opacity="0.5" />
      {/* Lotus base */}
      <path d="M270 210 Q285 195 300 210 Q315 195 330 210" fill="none" stroke={GOLD} strokeWidth="1" opacity="0.4" />
      <path d="M260 215 Q280 200 300 215 Q320 200 340 215" fill="none" stroke={GOLD} strokeWidth="1" opacity="0.3" />
      {/* Energy rings */}
      <circle cx="300" cy="160" r="55" fill="none" stroke={GOLD} strokeWidth="0.5" opacity="0.15" />
      <circle cx="300" cy="160" r="80" fill="none" stroke={GOLD} strokeWidth="0.5" opacity="0.1" />
      <circle cx="300" cy="160" r="110" fill="none" stroke={GOLD} strokeWidth="0.5" opacity="0.07" />
      {/* Floating particles */}
      <circle cx="220" cy="100" r="2" fill={GOLD} opacity="0.2" />
      <circle cx="380" cy="90" r="1.5" fill={GOLD} opacity="0.25" />
      <circle cx="200" cy="180" r="1.5" fill={GOLD} opacity="0.15" />
      <circle cx="400" cy="170" r="2" fill={GOLD} opacity="0.2" />
      <circle cx="250" cy="70" r="1" fill={GOLD} opacity="0.15" />
      <circle cx="350" cy="60" r="1" fill={GOLD} opacity="0.15" />
      <text x="300" y="265" textAnchor="middle" fontFamily="serif" fontSize="12" fill={TEXT_MUTED} letterSpacing="3">MINDFULNESS</text>
    </svg>
  )
}

export function GrowthIllustration({ width = '100%', height = 200 }) {
  return (
    <svg viewBox="0 0 600 300" width={width} height={height} style={{ display: 'block', borderRadius: 14 }}>
      <rect width="600" height="300" fill={BG_FILL} />
      {/* Rising sun */}
      <circle cx="300" cy="220" r="60" fill="none" stroke={GOLD} strokeWidth="0.8" opacity="0.2" />
      <circle cx="300" cy="220" r="45" fill="none" stroke={GOLD} strokeWidth="0.8" opacity="0.15" />
      <path d="M240 220 Q270 160 300 150 Q330 160 360 220" fill={GOLD_FAINT} />
      {/* Sun rays */}
      <line x1="300" y1="130" x2="300" y2="100" stroke={GOLD} strokeWidth="0.8" opacity="0.3" />
      <line x1="340" y1="140" x2="360" y2="115" stroke={GOLD} strokeWidth="0.8" opacity="0.25" />
      <line x1="260" y1="140" x2="240" y2="115" stroke={GOLD} strokeWidth="0.8" opacity="0.25" />
      <line x1="370" y1="165" x2="395" y2="150" stroke={GOLD} strokeWidth="0.8" opacity="0.2" />
      <line x1="230" y1="165" x2="205" y2="150" stroke={GOLD} strokeWidth="0.8" opacity="0.2" />
      {/* Horizon line */}
      <line x1="100" y1="220" x2="500" y2="220" stroke={GOLD} strokeWidth="0.5" opacity="0.3" />
      {/* Growing plant */}
      <path d="M300 220 Q300 180 300 160" fill="none" stroke={GOLD} strokeWidth="1.2" opacity="0.5" />
      <path d="M300 185 Q280 175 275 160" fill="none" stroke={GOLD} strokeWidth="1" opacity="0.4" />
      <path d="M300 170 Q320 160 325 148" fill="none" stroke={GOLD} strokeWidth="1" opacity="0.4" />
      {/* Butterfly */}
      <path d="M345 130 Q355 115 365 125 Q355 135 345 130Z" fill={GOLD} opacity="0.2" />
      <path d="M345 130 Q355 145 365 135 Q355 125 345 130Z" fill={GOLD} opacity="0.15" />
      <text x="300" y="265" textAnchor="middle" fontFamily="serif" fontSize="12" fill={TEXT_MUTED} letterSpacing="3">PERSONAL GROWTH</text>
    </svg>
  )
}

export function BrainIllustration({ width = '100%', height = 200 }) {
  return (
    <svg viewBox="0 0 600 300" width={width} height={height} style={{ display: 'block', borderRadius: 14 }}>
      <rect width="600" height="300" fill={BG_FILL} />
      {/* Brain halves */}
      <path d="M270 200 Q230 200 220 170 Q210 140 230 115 Q250 90 280 90 Q295 80 300 85" fill="none" stroke={GOLD} strokeWidth="1.2" opacity="0.5" />
      <path d="M330 200 Q370 200 380 170 Q390 140 370 115 Q350 90 320 90 Q305 80 300 85" fill="none" stroke={GOLD} strokeWidth="1.2" opacity="0.5" />
      {/* Internal folds left */}
      <path d="M250 140 Q270 130 280 145" fill="none" stroke={GOLD} strokeWidth="0.8" opacity="0.3" />
      <path d="M240 165 Q265 155 275 170" fill="none" stroke={GOLD} strokeWidth="0.8" opacity="0.3" />
      {/* Internal folds right */}
      <path d="M350 140 Q330 130 320 145" fill="none" stroke={GOLD} strokeWidth="0.8" opacity="0.3" />
      <path d="M360 165 Q335 155 325 170" fill="none" stroke={GOLD} strokeWidth="0.8" opacity="0.3" />
      {/* Center line */}
      <line x1="300" y1="85" x2="300" y2="200" stroke={GOLD} strokeWidth="0.5" opacity="0.2" strokeDasharray="4 4" />
      {/* Glowing nodes */}
      <circle cx="260" cy="130" r="4" fill={GOLD} opacity="0.6" />
      <circle cx="340" cy="130" r="4" fill={GOLD} opacity="0.6" />
      <circle cx="280" cy="165" r="3" fill={GOLD} opacity="0.4" />
      <circle cx="320" cy="165" r="3" fill={GOLD} opacity="0.4" />
      <circle cx="300" cy="110" r="5" fill={GOLD} opacity="0.7" />
      {/* Connection lines */}
      <line x1="260" y1="130" x2="300" y2="110" stroke={GOLD} strokeWidth="0.6" opacity="0.3" />
      <line x1="340" y1="130" x2="300" y2="110" stroke={GOLD} strokeWidth="0.6" opacity="0.3" />
      <line x1="280" y1="165" x2="260" y2="130" stroke={GOLD} strokeWidth="0.6" opacity="0.25" />
      <line x1="320" y1="165" x2="340" y2="130" stroke={GOLD} strokeWidth="0.6" opacity="0.25" />
      {/* Outer glow */}
      <circle cx="300" cy="145" r="80" fill="none" stroke={GOLD} strokeWidth="0.3" opacity="0.1" />
      <text x="300" y="250" textAnchor="middle" fontFamily="serif" fontSize="12" fill={TEXT_MUTED} letterSpacing="3">THE MIND</text>
    </svg>
  )
}

export function TherapyRoomIllustration({ width = '100%', height = 200 }) {
  return (
    <svg viewBox="0 0 600 300" width={width} height={height} style={{ display: 'block', borderRadius: 14 }}>
      <rect width="600" height="300" fill={BG_FILL} />
      {/* Couch */}
      <path d="M180 200 Q180 170 200 165 L400 165 Q420 170 420 200" fill="none" stroke={GOLD} strokeWidth="1.2" opacity="0.5" />
      <line x1="175" y1="200" x2="425" y2="200" stroke={GOLD} strokeWidth="1" opacity="0.4" />
      <line x1="180" y1="200" x2="180" y2="220" stroke={GOLD} strokeWidth="1" opacity="0.3" />
      <line x1="420" y1="200" x2="420" y2="220" stroke={GOLD} strokeWidth="1" opacity="0.3" />
      {/* Armrest */}
      <path d="M175 170 Q170 165 175 155 Q180 150 185 155" fill="none" stroke={GOLD} strokeWidth="1" opacity="0.4" />
      <path d="M425 170 Q430 165 425 155 Q420 150 415 155" fill="none" stroke={GOLD} strokeWidth="1" opacity="0.4" />
      {/* Plant */}
      <line x1="480" y1="220" x2="480" y2="160" stroke={GOLD} strokeWidth="1" opacity="0.3" />
      <path d="M480 160 Q465 145 460 130" fill="none" stroke={GOLD} strokeWidth="0.8" opacity="0.3" />
      <path d="M480 155 Q495 140 500 125" fill="none" stroke={GOLD} strokeWidth="0.8" opacity="0.3" />
      <path d="M480 165 Q470 155 462 145" fill="none" stroke={GOLD} strokeWidth="0.8" opacity="0.25" />
      {/* Pot */}
      <rect x="472" y="220" width="16" height="12" rx="2" fill="none" stroke={GOLD} strokeWidth="0.8" opacity="0.3" />
      {/* Lamp */}
      <line x1="140" y1="220" x2="140" y2="120" stroke={GOLD} strokeWidth="0.8" opacity="0.3" />
      <path d="M120 120 Q130 105 140 100 Q150 105 160 120" fill={GOLD_FAINT} stroke={GOLD} strokeWidth="0.8" opacity="0.3" />
      {/* Warm glow from lamp */}
      <circle cx="140" cy="115" r="30" fill={GOLD} opacity="0.04" />
      {/* Window */}
      <rect x="240" y="70" width="120" height="70" rx="2" fill="none" stroke={GOLD} strokeWidth="0.8" opacity="0.2" />
      <line x1="300" y1="70" x2="300" y2="140" stroke={GOLD} strokeWidth="0.5" opacity="0.15" />
      <line x1="240" y1="105" x2="360" y2="105" stroke={GOLD} strokeWidth="0.5" opacity="0.15" />
      <text x="300" y="260" textAnchor="middle" fontFamily="serif" fontSize="12" fill={TEXT_MUTED} letterSpacing="3">SAFE SPACE</text>
    </svg>
  )
}

export function ConsultationIllustration({ width = '100%', height = 280 }) {
  return (
    <svg viewBox="0 0 600 350" width={width} height={height} style={{ display: 'block', borderRadius: 14 }}>
      <rect width="600" height="350" fill={BG_FILL} />
      {/* Two figures */}
      {/* Person 1 - therapist */}
      <circle cx="220" cy="120" r="20" fill="none" stroke={GOLD} strokeWidth="1.2" opacity="0.6" />
      <path d="M200 155 Q210 145 220 143 Q230 145 240 155" fill="none" stroke={GOLD} strokeWidth="1" opacity="0.5" />
      <path d="M195 200 Q205 170 220 165 Q235 170 245 200" fill="none" stroke={GOLD} strokeWidth="1" opacity="0.5" />
      {/* Person 2 - client */}
      <circle cx="380" cy="120" r="20" fill="none" stroke={GOLD} strokeWidth="1.2" opacity="0.6" />
      <path d="M360 155 Q370 145 380 143 Q390 145 400 155" fill="none" stroke={GOLD} strokeWidth="1" opacity="0.5" />
      <path d="M355 200 Q365 170 380 165 Q395 170 405 200" fill="none" stroke={GOLD} strokeWidth="1" opacity="0.5" />
      {/* Connection between them - speech/energy */}
      <path d="M245 140 Q300 120 355 140" fill="none" stroke={GOLD} strokeWidth="0.8" opacity="0.2" strokeDasharray="4 3" />
      <path d="M248 155 Q300 140 352 155" fill="none" stroke={GOLD} strokeWidth="0.8" opacity="0.15" strokeDasharray="4 3" />
      {/* Heart/healing symbol in center */}
      <path d="M293 145 Q293 138 300 133 Q307 138 307 145 Q300 155 293 145Z" fill={GOLD} opacity="0.25" />
      {/* Ground line */}
      <line x1="150" y1="220" x2="450" y2="220" stroke={GOLD} strokeWidth="0.5" opacity="0.15" />
      <text x="300" y="280" textAnchor="middle" fontFamily="serif" fontSize="12" fill={TEXT_MUTED} letterSpacing="3">CONSULTATION</text>
    </svg>
  )
}

export function HypnotherapyIllustration({ width = '100%', height = 200 }) {
  return (
    <svg viewBox="0 0 600 300" width={width} height={height} style={{ display: 'block', borderRadius: 14 }}>
      <rect width="600" height="300" fill={BG_FILL} />
      {/* Spiral - hypnosis symbol */}
      <path d="M300 150 Q320 150 320 170 Q320 190 300 190 Q280 190 280 170 Q280 150 300 150" fill="none" stroke={GOLD} strokeWidth="1" opacity="0.5" />
      <path d="M300 140 Q330 140 330 170 Q330 200 300 200 Q270 200 270 170 Q270 140 300 140" fill="none" stroke={GOLD} strokeWidth="0.8" opacity="0.35" />
      <path d="M300 130 Q340 130 340 170 Q340 210 300 210 Q260 210 260 170 Q260 130 300 130" fill="none" stroke={GOLD} strokeWidth="0.6" opacity="0.25" />
      <path d="M300 120 Q350 120 350 170 Q350 220 300 220 Q250 220 250 170 Q250 120 300 120" fill="none" stroke={GOLD} strokeWidth="0.5" opacity="0.15" />
      {/* Center glow */}
      <circle cx="300" cy="170" r="8" fill={GOLD} opacity="0.15" />
      <circle cx="300" cy="170" r="3" fill={GOLD} opacity="0.5" />
      {/* Stars */}
      <circle cx="200" cy="100" r="1.5" fill={GOLD} opacity="0.3" />
      <circle cx="400" cy="90" r="1.5" fill={GOLD} opacity="0.25" />
      <circle cx="180" cy="200" r="1" fill={GOLD} opacity="0.2" />
      <circle cx="420" cy="210" r="1" fill={GOLD} opacity="0.2" />
      <circle cx="230" cy="80" r="1" fill={GOLD} opacity="0.15" />
      <circle cx="370" cy="240" r="1" fill={GOLD} opacity="0.15" />
      <text x="300" y="265" textAnchor="middle" fontFamily="serif" fontSize="12" fill={TEXT_MUTED} letterSpacing="3">HYPNOTHERAPY</text>
    </svg>
  )
}

export function ThinkingIllustration({ width = '100%', height = 200 }) {
  return (
    <svg viewBox="0 0 600 300" width={width} height={height} style={{ display: 'block', borderRadius: 14 }}>
      <rect width="600" height="300" fill={BG_FILL} />
      {/* Head silhouette */}
      <path d="M270 220 Q260 220 255 200 Q245 170 255 145 Q265 120 285 110 Q300 100 315 110 Q335 120 345 145 Q355 170 345 200 Q340 220 330 220" fill="none" stroke={GOLD} strokeWidth="1.2" opacity="0.5" />
      {/* Thought bubbles / gears inside */}
      <circle cx="290" cy="150" r="12" fill="none" stroke={GOLD} strokeWidth="0.8" opacity="0.4" />
      <circle cx="310" cy="160" r="10" fill="none" stroke={GOLD} strokeWidth="0.8" opacity="0.35" />
      <circle cx="295" cy="175" r="8" fill="none" stroke={GOLD} strokeWidth="0.8" opacity="0.3" />
      {/* A B C labels */}
      <text x="290" y="154" textAnchor="middle" fontFamily="serif" fontSize="11" fill={GOLD} opacity="0.6">A</text>
      <text x="310" y="164" textAnchor="middle" fontFamily="serif" fontSize="10" fill={GOLD} opacity="0.5">B</text>
      <text x="295" y="179" textAnchor="middle" fontFamily="serif" fontSize="9" fill={GOLD} opacity="0.4">C</text>
      {/* Arrows between */}
      <path d="M298 147 L305 153" fill="none" stroke={GOLD} strokeWidth="0.6" opacity="0.3" />
      <path d="M305 167 L298 172" fill="none" stroke={GOLD} strokeWidth="0.6" opacity="0.3" />
      {/* Light bulb above */}
      <path d="M290 85 Q295 75 300 72 Q305 75 310 85" fill="none" stroke={GOLD} strokeWidth="0.8" opacity="0.3" />
      <line x1="295" y1="85" x2="305" y2="85" stroke={GOLD} strokeWidth="0.8" opacity="0.3" />
      <circle cx="300" cy="78" r="8" fill={GOLD} opacity="0.06" />
      {/* Rays from bulb */}
      <line x1="300" y1="65" x2="300" y2="58" stroke={GOLD} strokeWidth="0.5" opacity="0.2" />
      <line x1="290" y1="68" x2="285" y2="62" stroke={GOLD} strokeWidth="0.5" opacity="0.2" />
      <line x1="310" y1="68" x2="315" y2="62" stroke={GOLD} strokeWidth="0.5" opacity="0.2" />
      <text x="300" y="260" textAnchor="middle" fontFamily="serif" fontSize="12" fill={TEXT_MUTED} letterSpacing="3">COGNITIVE PATTERNS</text>
    </svg>
  )
}

export function FreedomIllustration({ width = '100%', height = 200 }) {
  return (
    <svg viewBox="0 0 600 300" width={width} height={height} style={{ display: 'block', borderRadius: 14 }}>
      <rect width="600" height="300" fill={BG_FILL} />
      {/* Breaking chains */}
      <path d="M220 160 Q235 155 250 160 Q265 165 280 160" fill="none" stroke={GOLD} strokeWidth="1.5" opacity="0.3" />
      <path d="M320 160 Q335 155 350 160 Q365 165 380 160" fill="none" stroke={GOLD} strokeWidth="1.5" opacity="0.3" />
      {/* Break point - energy burst */}
      <line x1="280" y1="160" x2="290" y2="150" stroke={GOLD} strokeWidth="1" opacity="0.5" />
      <line x1="280" y1="160" x2="288" y2="168" stroke={GOLD} strokeWidth="1" opacity="0.5" />
      <line x1="320" y1="160" x2="310" y2="150" stroke={GOLD} strokeWidth="1" opacity="0.5" />
      <line x1="320" y1="160" x2="312" y2="168" stroke={GOLD} strokeWidth="1" opacity="0.5" />
      {/* Burst particles */}
      <circle cx="300" cy="148" r="2" fill={GOLD} opacity="0.5" />
      <circle cx="295" cy="172" r="1.5" fill={GOLD} opacity="0.4" />
      <circle cx="305" cy="145" r="1.5" fill={GOLD} opacity="0.3" />
      <circle cx="300" cy="175" r="1" fill={GOLD} opacity="0.3" />
      {/* Rising figure */}
      <circle cx="300" cy="110" r="15" fill="none" stroke={GOLD} strokeWidth="1" opacity="0.5" />
      <path d="M285 135 Q292 128 300 126 Q308 128 315 135" fill="none" stroke={GOLD} strokeWidth="1" opacity="0.4" />
      {/* Wings/arms spread */}
      <path d="M285 130 Q260 115 240 105" fill="none" stroke={GOLD} strokeWidth="0.8" opacity="0.3" />
      <path d="M315 130 Q340 115 360 105" fill="none" stroke={GOLD} strokeWidth="0.8" opacity="0.3" />
      {/* Upward energy */}
      <line x1="300" y1="90" x2="300" y2="75" stroke={GOLD} strokeWidth="0.6" opacity="0.2" />
      <line x1="290" y1="85" x2="285" y2="70" stroke={GOLD} strokeWidth="0.6" opacity="0.15" />
      <line x1="310" y1="85" x2="315" y2="70" stroke={GOLD} strokeWidth="0.6" opacity="0.15" />
      <text x="300" y="240" textAnchor="middle" fontFamily="serif" fontSize="12" fill={TEXT_MUTED} letterSpacing="3">BREAKING FREE</text>
    </svg>
  )
}
