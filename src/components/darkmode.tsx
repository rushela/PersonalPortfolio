import { useState, useEffect, useRef, useCallback } from "react";

interface DarkModeToggleProps {
  variant?: "below-navbar" | "header" | "floating";
  className?: string;
}

export function DarkModeToggle({
  variant = "below-navbar",
  className = "",
}: DarkModeToggleProps) {
  const [darkMode, setDarkMode] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [isPulling, setIsPulling] = useState(false);
  const [isSwinging, setIsSwinging] = useState(false);
  const [pullOffset, setPullOffset] = useState(0);

  const startYRef = useRef<number | null>(null);
  const currentPullRef = useRef(0);

  useEffect(() => {
    const saved = localStorage.getItem("darkMode");
    let isDark = true;
    if (saved !== null) {
      isDark = saved === "true";
    } else {
      isDark = true;
    }

    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    setMounted(true);
  }, []);

  const triggerToggle = useCallback(() => {
    setDarkMode((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("darkMode", "true");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("darkMode", "false");
      }
      return next;
    });

    // Trigger natural pendulum lamp sway animation on pull release
    setIsSwinging(true);
    setTimeout(() => setIsSwinging(false), 950);
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    e.preventDefault();
    try {
      (e.target as Element)?.setPointerCapture?.(e.pointerId);
    } catch {
      // Ignore if pointer capture isn't supported
    }
    startYRef.current = e.clientY;
    currentPullRef.current = 0;
    setIsPulling(true);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (startYRef.current === null) return;
    const diff = Math.max(0, Math.min(22, e.clientY - startYRef.current));
    currentPullRef.current = diff;
    setPullOffset(diff);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (startYRef.current !== null) {
      triggerToggle();
    }
    startYRef.current = null;
    currentPullRef.current = 0;
    setPullOffset(0);
    setIsPulling(false);
  };

  const handlePointerCancel = () => {
    startYRef.current = null;
    currentPullRef.current = 0;
    setPullOffset(0);
    setIsPulling(false);
  };

  // Keyboard accessibility (Enter or Space)
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setIsPulling(true);
      setPullOffset(16);
      setTimeout(() => {
        triggerToggle();
        setPullOffset(0);
        setIsPulling(false);
      }, 160);
    }
  };

  const baseContainerClass =
    variant === "below-navbar"
      ? "lamp-toggle-below-navbar"
      : variant === "header"
      ? "lamp-toggle-header"
      : "lamp-toggle-floating";

  // When pulling by drag: pullOffset (0..22)
  const effectivePull = isPulling ? (pullOffset > 0 ? pullOffset : 14) : 0;
  // Resting cord bottom is at y=196, pulled down to y=196 + effectivePull * 1.3
  const cordEndY = 196 + effectivePull * 1.3;

  return (
    <div
      className={`${baseContainerClass} ${className}`.trim()}
      title={
        darkMode
          ? "Lamp is OFF (Dark Mode). Pull rope to switch to Light Mode."
          : "Lamp is ON (Light Mode). Pull rope to switch to Dark Mode."
      }
    >
      <button
        type="button"
        className="lamp-toggle-btn"
        aria-label={
          darkMode
            ? "Lamp is OFF in Dark Mode. Pull rope to switch to Light Mode"
            : "Lamp is ON in Light Mode. Pull rope to switch to Dark Mode"
        }
        aria-pressed={darkMode}
        onKeyDown={handleKeyDown}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerCancel}
      >
        <svg
          viewBox="0 0 160 220"
          className={`lamp-svg ${isSwinging ? "lamp-swaying" : ""}`}
          aria-hidden="true"
        >
          <defs>
            {/* Ambient Radial Bloom Halo for Light Mode (Lamp ON) */}
            <radialGradient id="lampConeHalo" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="oklch(0.92 0.16 80)" stopOpacity="0.88" />
              <stop offset="45%" stopColor="oklch(0.75 0.18 55)" stopOpacity="0.45" />
              <stop offset="100%" stopColor="oklch(0.65 0.15 45)" stopOpacity="0" />
            </radialGradient>

            {/* Downward light cone beam */}
            <linearGradient id="lampConeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="oklch(0.88 0.2 88)" stopOpacity="0.38" />
              <stop offset="45%" stopColor="oklch(0.88 0.2 88)" stopOpacity="0.15" />
              <stop offset="100%" stopColor="oklch(0.88 0.2 88)" stopOpacity="0" />
            </linearGradient>

            {/* Glass internal reflection arc */}
            <linearGradient id="glassReflection" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.32" />
              <stop offset="40%" stopColor="#ffffff" stopOpacity="0.05" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>

            {/* Bulb Glow Filter */}
            <filter id="bulbGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4.2" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* 1. Ambient radiant glow behind the bulb when Lamp is ON in Light Mode */}
          {mounted && !darkMode && (
            <>
              <circle
                cx="80"
                cy="148"
                r="64"
                fill="url(#lampConeHalo)"
                className="lamp-light-halo"
              />
              <polygon
                points="62,108 0,220 160,220 98,108"
                fill="url(#lampConeGrad)"
                className="lamp-light-cone"
              />
            </>
          )}

          {/* 2. Ceiling suspension mount */}
          <rect
            x="74"
            y="0"
            width="12"
            height="5"
            rx="1.5"
            className="lamp-mount"
          />

          {/* 3. Suspension wire / cord */}
          <line
            x1="80"
            y1="5"
            x2="80"
            y2="88"
            className="lamp-wire"
          />

          {/* 4. Socket fixture & grooves */}
          <rect
            x="73"
            y="88"
            width="14"
            height="15"
            rx="2"
            className="lamp-socket"
          />
          <line x1="72" y1="94" x2="88" y2="94" className="lamp-socket-groove" />
          <line x1="72" y1="99" x2="88" y2="99" className="lamp-socket-groove" />

          {/* 5. Pendant fixture rim / shade top */}
          <path
            d="M62 103 C62 103, 73 98, 80 98 C87 98, 98 103, 98 103 L94 108 L66 108 Z"
            className="lamp-shade"
          />

          {/* 6. Glass Bulb Envelope */}
          <path
            d="M71 108 C64 116, 56 128, 56 148 C56 166, 67 182, 80 182 C93 182, 104 166, 104 148 C104 128, 96 116, 89 108 Z"
            filter={mounted && !darkMode ? "url(#bulbGlow)" : undefined}
            className={mounted && !darkMode ? "lamp-bulb-lit" : "lamp-bulb-unlit"}
          />

          {/* 7. Glass internal reflection arc */}
          <path
            d="M63 132 C60 142, 62 160, 71 172"
            stroke="url(#glassReflection)"
            strokeWidth="2"
            strokeLinecap="round"
          />

          {/* 8. Internal filament stem lead electrodes */}
          <line x1="75" y1="108" x2="75" y2="134" className="lamp-lead" />
          <line x1="85" y1="108" x2="85" y2="134" className="lamp-lead" />

          {/* 9. Glowing Double-Helix Tungsten Filament */}
          <path
            d="M75 134 Q77 138, 80 134 T85 134 Q82 143, 77 146 T83 150 Q80 156, 85 152"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={mounted && !darkMode ? "lamp-filament lamp-filament-lit" : "lamp-filament"}
          />

          {/* 10. Interactive Pull Rope / Cord & Knob */}
          <g className={`lamp-pull-group ${isPulling ? "is-pulling" : ""}`}>
            {/* Beaded rope drop from the right side of the fixture */}
            <line
              x1="93"
              y1="108"
              x2="93"
              y2={cordEndY}
              strokeDasharray="2.5 3"
              className="lamp-pull-rope"
            />

            {/* Pull handle / knob */}
            <circle
              cx="93"
              cy={cordEndY + 4}
              r="3.5"
              className="lamp-pull-knob"
            />
            {/* Small decorative bead */}
            <circle
              cx="93"
              cy={cordEndY + 9}
              r="1.8"
              className="lamp-pull-bead"
            />

            {/* Invisible expanded hit area for effortless touch & mouse grabbing */}
            <rect
              x="76"
              y="108"
              width="36"
              height="116"
              fill="transparent"
              className="lamp-hit-area"
            />
          </g>
        </svg>

        {/* Hover Hint Tooltip */}
        <span className="lamp-hint-text">
          {darkMode ? "Pull cord for light" : "Pull cord for dark"}
        </span>
      </button>
    </div>
  );
}

export default DarkModeToggle;
