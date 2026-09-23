"use client";

import React from "react";

export function NotFoundIllustration({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-full max-w-[720px] mx-auto select-none pointer-events-auto ${className}`}>
      {/* Ambient background glow matching Samarth brand palette */}
      <div className="absolute inset-0 bg-radial from-[#FF6B00]/10 via-[#0047AB]/5 to-transparent blur-3xl -z-10 pointer-events-none" />

      <svg
        viewBox="0 0 800 420"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-[0_10px_35px_rgba(0,0,0,0.45)]"
        role="img"
        aria-label="Illustration showing an engineer holding disconnected electrical cables in front of a giant 404"
      >
        <defs>
          {/* Gradients */}
          <linearGradient id="numeralGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22395C" />
            <stop offset="50%" stopColor="#1B2E4D" />
            <stop offset="100%" stopColor="#13223B" />
          </linearGradient>

          <linearGradient id="numeralStroke" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4A6B9C" />
            <stop offset="100%" stopColor="#2A456C" />
          </linearGradient>

          <linearGradient id="shirtBlueGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="50%" stopColor="#2563EB" />
            <stop offset="100%" stopColor="#1D4ED8" />
          </linearGradient>

          <linearGradient id="shirtShadeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1E40AF" />
            <stop offset="100%" stopColor="#2563EB" />
          </linearGradient>

          <linearGradient id="portalBg" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1E2C44" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#0B1526" stopOpacity="0.9" />
          </linearGradient>

          <linearGradient id="orangePlugGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF842B" />
            <stop offset="50%" stopColor="#FF6B00" />
            <stop offset="100%" stopColor="#D95700" />
          </linearGradient>

          <linearGradient id="metalProngGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FDE68A" />
            <stop offset="50%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#D97706" />
          </linearGradient>

          {/* Glow filter for sparks & connectors */}
          <filter id="plugGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          <style>{`
            @keyframes subtleFloat {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-7px); }
            }
            @keyframes sparkFlicker {
              0%, 100% { opacity: 0.3; transform: scale(0.85); }
              50% { opacity: 1; transform: scale(1.15); }
            }
            @keyframes wirePulse {
              0%, 100% { stroke: #475569; }
              50% { stroke: #64748B; }
            }
            .character-float {
              animation: subtleFloat 5s ease-in-out infinite;
              transform-origin: center bottom;
            }
            .spark-glow {
              animation: sparkFlicker 2s ease-in-out infinite;
              transform-origin: 278px 125px;
            }
          `}</style>
        </defs>

        {/* ═══════════════════════════════════════════════════════════
            LAYER 1: BACKGROUND NUMERALS "4" AND "4"
            ═══════════════════════════════════════════════════════════ */}
        <g id="bg-numerals" opacity="0.9">
          {/* Left "4" */}
          <path
            d="M 235 60 L 155 200 L 235 200 L 235 255 L 285 255 L 285 200 L 320 200 L 320 155 L 285 155 L 285 60 Z M 235 110 L 235 155 L 195 155 Z"
            fill="url(#numeralGrad)"
            stroke="url(#numeralStroke)"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />

          {/* Right "4" */}
          <path
            d="M 645 60 L 565 200 L 645 200 L 645 255 L 695 255 L 695 200 L 730 200 L 730 155 L 695 155 L 695 60 Z M 645 110 L 645 155 L 605 155 Z"
            fill="url(#numeralGrad)"
            stroke="url(#numeralStroke)"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />
        </g>

        {/* ═══════════════════════════════════════════════════════════
            LAYER 2: CIRCULAR BACKDROP PORTAL BEHIND CHARACTER
            ═══════════════════════════════════════════════════════════ */}
        <g id="portal-backdrop">
          {/* Outer ring */}
          <circle
            cx="400"
            cy="195"
            r="125"
            fill="url(#portalBg)"
            stroke="#273C5E"
            strokeWidth="2.5"
          />
          {/* Subtle inner accent ring */}
          <circle
            cx="400"
            cy="195"
            r="120"
            fill="none"
            stroke="#FF6B00"
            strokeWidth="1"
            strokeOpacity="0.25"
            strokeDasharray="6 6"
          />
        </g>

        {/* ═══════════════════════════════════════════════════════════
            LAYER 3: THE CHARACTER (ENGINEER WITH BLUE WORK SHIRT)
            ═══════════════════════════════════════════════════════════ */}
        <g id="character" className="character-float">
          {/* Body / Torso */}
          {/* Torso main blue */}
          <path
            d="M 345 230 Q 400 240 455 230 L 465 330 Q 400 335 335 330 Z"
            fill="url(#shirtBlueGrad)"
            stroke="#0B1320"
            strokeWidth="3"
            strokeLinejoin="round"
          />

          {/* Shirt side shadows */}
          <path
            d="M 345 230 L 335 330 Q 365 333 375 330 L 370 234 Z"
            fill="url(#shirtShadeGrad)"
            opacity="0.3"
          />
          <path
            d="M 455 230 L 465 330 Q 435 333 425 330 L 430 234 Z"
            fill="url(#shirtShadeGrad)"
            opacity="0.3"
          />

          {/* Lower garment / Belt waistband */}
          <path
            d="M 335 328 Q 400 336 465 328 L 472 360 Q 400 368 328 360 Z"
            fill="#1E293B"
            stroke="#0B1320"
            strokeWidth="3"
          />

          {/* Button placket in center */}
          <path
            d="M 395 190 L 395 332 L 405 332 L 405 190 Z"
            fill="#1D4ED8"
            stroke="#0B1320"
            strokeWidth="2.5"
          />
          {/* Buttons on placket */}
          <circle cx="400" cy="225" r="2.5" fill="#F8FAFC" stroke="#0B1320" strokeWidth="1.5" />
          <circle cx="400" cy="255" r="2.5" fill="#F8FAFC" stroke="#0B1320" strokeWidth="1.5" />
          <circle cx="400" cy="285" r="2.5" fill="#F8FAFC" stroke="#0B1320" strokeWidth="1.5" />
          <circle cx="400" cy="315" r="2.5" fill="#F8FAFC" stroke="#0B1320" strokeWidth="1.5" />

          {/* Chest Pocket on left chest */}
          <path
            d="M 420 220 L 442 220 L 442 242 Q 431 248 420 242 Z"
            fill="#1D4ED8"
            stroke="#0B1320"
            strokeWidth="2.5"
          />

          {/* Left Arm (outstretched to hold plug) */}
          <path
            d="M 352 195 L 290 230 L 275 220 L 340 180 Z"
            fill="url(#shirtBlueGrad)"
            stroke="#0B1320"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          {/* Left sleeve cuff */}
          <polygon
            points="272,217 288,227 282,236 266,226"
            fill="#1E40AF"
            stroke="#0B1320"
            strokeWidth="2.5"
          />

          {/* Right Arm (outstretched to hold socket) */}
          <path
            d="M 448 195 L 510 230 L 525 220 L 460 180 Z"
            fill="url(#shirtBlueGrad)"
            stroke="#0B1320"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          {/* Right sleeve cuff */}
          <polygon
            points="528,217 512,227 518,236 534,226"
            fill="#1E40AF"
            stroke="#0B1320"
            strokeWidth="2.5"
          />

          {/* ── Left Hand & Male Plug ── */}
          {/* Hand / Fingers gripping plug */}
          <path
            d="M 270 216 Q 262 205 258 195 Q 266 195 272 204 L 275 210 Q 284 200 290 205 Q 285 215 278 220 Z"
            fill="#FDBA74"
            stroke="#0B1320"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          {/* Male Plug Body (Samarth Safety Orange) */}
          <path
            d="M 245 170 L 285 195 L 275 212 L 235 187 Z"
            fill="url(#orangePlugGrad)"
            stroke="#0B1320"
            strokeWidth="2.5"
            strokeLinejoin="round"
            filter="url(#plugGlow)"
          />
          {/* Plug Ridges / Grip lines */}
          <line x1="252" y1="184" x2="260" y2="198" stroke="#D95700" strokeWidth="2" />
          <line x1="260" y1="179" x2="268" y2="193" stroke="#D95700" strokeWidth="2" />
          {/* Metal Prongs */}
          <rect
            x="242"
            y="152"
            width="5"
            height="18"
            rx="1.5"
            transform="rotate(32 244 161)"
            fill="url(#metalProngGrad)"
            stroke="#0B1320"
            strokeWidth="1.5"
          />
          <rect
            x="256"
            y="161"
            width="5"
            height="18"
            rx="1.5"
            transform="rotate(32 258 170)"
            fill="url(#metalProngGrad)"
            stroke="#0B1320"
            strokeWidth="1.5"
          />
          {/* Tiny spark dot */}
          <circle cx="242" cy="144" r="2.5" fill="#FFB703" className="spark-glow" />
          <circle cx="258" cy="148" r="1.5" fill="#FF6B00" className="spark-glow" />

          {/* ── Right Hand & Female Socket ── */}
          {/* Hand / Fingers supporting receptacle */}
          <path
            d="M 530 216 Q 538 205 542 195 Q 534 195 528 204 L 525 210 Q 516 200 510 205 Q 515 215 522 220 Z"
            fill="#FDBA74"
            stroke="#0B1320"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          {/* Female Receptacle Body (Half-sphere / cup shaped matching image) */}
          <path
            d="M 522 188 Q 555 160 568 190 Q 555 220 522 188 Z"
            fill="url(#orangePlugGrad)"
            stroke="#0B1320"
            strokeWidth="2.5"
            strokeLinejoin="round"
            filter="url(#plugGlow)"
          />
          {/* Female Socket Receptacle Opening */}
          <ellipse
            cx="542"
            cy="187"
            rx="16"
            ry="22"
            transform="rotate(-30 542 187)"
            fill="#7C2D12"
            stroke="#0B1320"
            strokeWidth="2"
          />
          {/* Female Socket Slots */}
          <rect
            x="538"
            y="180"
            width="3"
            height="7"
            rx="1"
            transform="rotate(-30 538 180)"
            fill="#0B1320"
          />
          <rect
            x="544"
            y="189"
            width="3"
            height="7"
            rx="1"
            transform="rotate(-30 544 189)"
            fill="#0B1320"
          />

          {/* Neck */}
          <path
            d="M 390 160 L 390 185 Q 400 190 410 185 L 410 160 Z"
            fill="#FDBA74"
            stroke="#0B1320"
            strokeWidth="2.5"
          />
          {/* Throat shadow */}
          <path d="M 392 165 Q 400 172 408 165 Z" fill="#F97316" opacity="0.35" />

          {/* Inner Collar Triangle (Samarth Brand Orange Accent) */}
          <polygon
            points="391,175 409,175 400,192"
            fill="#FF6B00"
            stroke="#0B1320"
            strokeWidth="1.5"
          />

          {/* Collars */}
          {/* Left Collar flap */}
          <polygon
            points="386,170 368,198 396,192 396,174"
            fill="#93C5FD"
            stroke="#0B1320"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          {/* Right Collar flap */}
          <polygon
            points="414,170 432,198 404,192 404,174"
            fill="#93C5FD"
            stroke="#0B1320"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />

          {/* ── Head & Face ── */}
          {/* Ears */}
          <ellipse cx="377" cy="138" rx="5" ry="7" fill="#FDBA74" stroke="#0B1320" strokeWidth="2" />
          <ellipse cx="423" cy="138" rx="5" ry="7" fill="#FDBA74" stroke="#0B1320" strokeWidth="2" />

          {/* Face base */}
          <path
            d="M 379 125 Q 377 152 400 157 Q 423 152 421 125 Z"
            fill="#FDBA74"
            stroke="#0B1320"
            strokeWidth="2.5"
          />

          {/* Hair back / sides */}
          <path
            d="M 376 130 C 372 105 385 88 402 88 C 420 88 428 105 424 130 C 420 120 415 110 400 110 C 385 110 380 120 376 130 Z"
            fill="#0F172A"
            stroke="#0B1320"
            strokeWidth="2.5"
          />
          {/* Hair front stylish quiff/fringe */}
          <path
            d="M 377 114 Q 392 98 408 105 Q 418 108 423 118 Q 412 110 401 112 Q 388 114 377 114 Z"
            fill="#0F172A"
          />

          {/* Eyebrows (Questioning / Shrugging: left tilted up, right slightly curved) */}
          <path d="M 384 124 Q 391 120 395 125" stroke="#0B1320" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M 405 125 Q 410 121 416 123" stroke="#0B1320" strokeWidth="2.2" strokeLinecap="round" />

          {/* Eyes looking quizzically at the disconnected plug */}
          <ellipse cx="390" cy="132" rx="2" ry="2.8" fill="#0B1320" />
          <ellipse cx="410" cy="132" rx="2" ry="2.8" fill="#0B1320" />

          {/* Nose */}
          <path d="M 400 132 L 398 140 L 402 140" stroke="#0B1320" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />

          {/* Wry subtle smile / smirk */}
          <path d="M 395 146 Q 401 150 407 146" stroke="#0B1320" strokeWidth="2" strokeLinecap="round" fill="none" />
        </g>

        {/* ═══════════════════════════════════════════════════════════
            LAYER 4: WINDING DISCONNECTED WIRES (LOOPS THROUGH 404)
            ═══════════════════════════════════════════════════════════ */}
        <g id="wires" strokeLinecap="round">
          {/* LEFT CABLE: From male plug -> looping through left 4 */}
          <path
            d="M 276 212 
               C 270 240, 240 280, 210 250 
               C 180 220, 160 170, 195 160
               C 230 150, 245 220, 200 235
               C 150 250, 120 180, 140 140
               C 155 110, 210 90, 225 140
               C 235 170, 245 210, 230 250
               C 215 285, 170 280, 160 250"
            fill="none"
            stroke="#1E293B"
            strokeWidth="5"
            opacity="0.75"
          />
          {/* Left cable foreground highlight */}
          <path
            d="M 276 212 
               C 270 240, 240 280, 210 250 
               C 180 220, 160 170, 195 160
               C 230 150, 245 220, 200 235
               C 150 250, 120 180, 140 140
               C 155 110, 210 90, 225 140
               C 235 170, 245 210, 230 250
               C 215 285, 170 280, 160 250"
            fill="none"
            stroke="#475569"
            strokeWidth="3.2"
          />

          {/* RIGHT CABLE: From female connector -> spiral loops through right 4 */}
          <path
            d="M 524 212
               C 535 250, 560 300, 595 280
               C 630 260, 650 220, 620 200
               C 585 180, 580 240, 615 255
               C 650 270, 680 240, 675 190
               C 670 140, 620 120, 635 80
               C 645 55, 680 70, 675 120
               C 670 160, 715 170, 710 220
               C 705 260, 665 290, 635 270"
            fill="none"
            stroke="#1E293B"
            strokeWidth="5"
            opacity="0.75"
          />
          {/* Right cable foreground highlight */}
          <path
            d="M 524 212
               C 535 250, 560 300, 595 280
               C 630 260, 650 220, 620 200
               C 585 180, 580 240, 615 255
               C 650 270, 680 240, 675 190
               C 670 140, 620 120, 635 80
               C 645 55, 680 70, 675 120
               C 670 160, 715 170, 710 220
               C 705 260, 665 290, 635 270"
            fill="none"
            stroke="#475569"
            strokeWidth="3.2"
          />
        </g>
      </svg>
    </div>
  );
}
