import { useState, useEffect, useRef, useCallback } from "react";

interface DarkModeToggleProps {
  variant?: "below-navbar" | "header" | "floating";
  className?: string;
}

export function DarkModeToggle({
  variant = "below-navbar",
  className = "",
}: DarkModeToggleProps) {
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isPulling, setIsPulling] = useState(false);
  const [isSwinging, setIsSwinging] = useState(false);
  const [pullOffset, setPullOffset] = useState(0);

  const startYRef = useRef<number | null>(null);
  const currentPullRef = useRef(0);

  useEffect(() => {
    const saved = localStorage.getItem("darkMode");
    let isDark = false;
    if (saved !== null) {
      isDark = saved === "true";
    } else {
      isDark =
        document.documentElement.classList.contains("dark") ||
        window.matchMedia("(prefers-color-scheme: dark)").matches;
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

  // When pulling by drag: pullOffset (0..22). If quick tap/drag:
  const effectivePull = isPulling ? (pullOffset > 0 ? pullOffset : 12) : 0;
  // Resting cord bottom is at y=80, pulled down to y=80 + effectivePull
  const cordEndY = 80 + effectivePull;

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
          viewBox="0 0 60 114"
          className={`lamp-svg ${isSwinging ? "lamp-swaying" : ""}`}
          aria-hidden="true"
        >
          <defs>
            {/* Ambient Cone Glow for Light Mode */}
            <linearGradient id="lampConeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="oklch(0.88 0.2 88)" stopOpacity="0.45" />
              <stop offset="45%" stopColor="oklch(0.88 0.2 88)" stopOpacity="0.18" />
              <stop offset="100%" stopColor="oklch(0.88 0.2 88)" stopOpacity="0" />
            </linearGradient>

            {/* Bulb Glow Filter */}
            <filter id="bulbGlow" x="-60%" y="-60%" width="220%" height="220%">
              <feGaussianBlur stdDeviation="3.8" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* 1. Downward Light Cone (Visible when Lamp is ON in Light Mode) */}
          {mounted && !darkMode && (
            <polygon
              points="12,52 0,114 52,114 40,52"
              fill="url(#lampConeGrad)"
              className="lamp-light-cone"
            />
          )}

          {/* 2. Mounting bracket anchored to underside of navbar */}
          <rect
            x="21"
            y="0"
            width="10"
            height="4"
            rx="1.5"
            className="lamp-mount"
          />

          {/* 3. Suspension Cord / Wire hanging from navbar */}
          <line
            x1="26"
            y1="4"
            x2="26"
            y2="26"
            strokeWidth="1.6"
            strokeLinecap="round"
            className="lamp-wire"
          />

          {/* 4. Fixture Socket & Accent Ring */}
          <rect
            x="22"
            y="26"
            width="8"
            height="5"
            rx="1"
            className="lamp-socket"
          />
          <rect
            x="21"
            y="30"
            width="10"
            height="2"
            rx="0.5"
            className="lamp-socket-ring"
          />

          {/* 5. Bulb (Sitting underneath shade) */}
          <ellipse
            cx="26"
            cy="56"
            rx="7.5"
            ry="8.5"
            filter={mounted && !darkMode ? "url(#bulbGlow)" : undefined}
            className={
              mounted && !darkMode ? "lamp-bulb-lit" : "lamp-bulb-unlit"
            }
          />

          {/* Filament coil when unlit (Dark Mode) */}
          {(!mounted || darkMode) && (
            <path
              d="M23 56 Q26 52 29 56"
              fill="none"
              strokeWidth="1.2"
              strokeLinecap="round"
              className="lamp-filament"
            />
          )}

          {/* 6. Pendant Shade (Modern Scandinavian dome) */}
          <path
            d="M 8 52 C 11 34, 41 34, 44 52 Z"
            className="lamp-shade"
          />
          {/* Shade Lower Rim */}
          <ellipse
            cx="26"
            cy="52"
            rx="18"
            ry="3.6"
            className="lamp-shade-rim"
          />

          {/* 7. Interactive Pull Rope / Chain & Knob */}
          <g className={`lamp-pull-group ${isPulling ? "is-pulling" : ""}`}>
            {/* Beaded rope hanging from the right rim of the shade */}
            <line
              x1="41"
              y1="52"
              x2="41"
              y2={cordEndY}
              strokeWidth="1.4"
              strokeDasharray="2.5, 2.5"
              strokeLinecap="round"
              className="lamp-pull-rope"
            />

            {/* Sleek pull handle / knob at the bottom of the rope */}
            <rect
              x="38.5"
              y={cordEndY}
              width="5"
              height="9"
              rx="2.5"
              className="lamp-pull-knob"
            />
            {/* Small decorative accent bead */}
            <circle
              cx="41"
              cy={cordEndY + 11}
              r="2"
              className="lamp-pull-bead"
            />

            {/* Invisible expanded hit area for effortless touch & mouse grabbing */}
            <rect
              x="28"
              y="50"
              width="30"
              height="64"
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
