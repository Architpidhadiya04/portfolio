import React, { useState } from "react";

function LampSwitch({ darkMode, toggleTheme }) {
  const [pulling, setPulling] = useState(false);

  const handlePull = () => {
    if (pulling) return; // prevent spamming pulls
    setPulling(true);
    toggleTheme();
    setTimeout(() => {
      setPulling(false);
    }, 500); // matches spring-back transition duration
  };

  return (
    <div className={`lamp-switch-wrapper ${darkMode ? "theme-dark" : "theme-light"} ${pulling ? "pulling" : ""}`}>
      <svg
        className="lamp-svg"
        width="80"
        height="240"
        viewBox="0 0 80 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Ceiling Mount Base */}
        <rect x="34" y="0" width="12" height="6" rx="2" fill="var(--text-primary)" />
        
        {/* Main Hanging Electrical Cord */}
        <line x1="40" y1="6" x2="40" y2="70" stroke="var(--text-primary)" strokeWidth="2" />
        
        {/* Lamp Cap / Socket */}
        <rect x="32" y="70" width="16" height="12" rx="1" fill="var(--text-primary)" />
        
        {/* Minimalist Dome Lamp Shade */}
        <path
          d="M20 98 C20 86 30 82 40 82 C50 82 60 86 60 98 L64 108 H16 L20 98 Z"
          fill="var(--surface-solid)"
          stroke="var(--text-primary)"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        
        {/* Light Bulb */}
        <circle
          cx="40"
          cy="114"
          r="10"
          className="lamp-bulb"
          fill={darkMode ? "rgba(255, 255, 255, 0.15)" : "#f59e0b"}
          stroke="var(--text-primary)"
          strokeWidth="2"
        />
        <path
          d="M37 124 H43 M38 127 H42"
          stroke="var(--text-primary)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        {/* Glowing Halo Gradient in Light Mode */}
        {!darkMode && (
          <circle
            cx="40"
            cy="114"
            r="24"
            fill="url(#lamp-glow-grad)"
            opacity="0.65"
            className="lamp-glow-orb"
          />
        )}

        {/* Radial Gradient Defs */}
        <defs>
          <radialGradient id="lamp-glow-grad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fbbf24" stopOpacity="1" />
            <stop offset="100%" stopColor="#fbbf24" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Interactive Beaded Pull Cord Group */}
        <g className="lamp-chain-group" onClick={handlePull}>
          {/* Beaded cord line */}
          <line
            x1="54"
            y1="108"
            x2="54"
            y2={pulling ? "185" : "175"}
            className="lamp-pull-line"
            stroke="var(--text-primary)"
            strokeWidth="1.5"
            strokeDasharray="1, 4"
            strokeLinecap="round"
          />
          {/* Metallic golden pull handle */}
          <circle
            cx="54"
            cy={pulling ? "191" : "181"}
            r="6"
            className="lamp-pull-handle"
            fill="#eab308"
            stroke="var(--text-primary)"
            strokeWidth="2"
          />
          {/* Transparent target block for easy user tapping */}
          <rect
            x="44"
            y="108"
            width="20"
            height="90"
            fill="transparent"
            style={{ cursor: "pointer" }}
          />
        </g>
      </svg>
    </div>
  );
}

export default LampSwitch;
