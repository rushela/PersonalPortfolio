import { useState, useEffect, useCallback } from "react";

interface LoadingScreenProps {
  onComplete?: () => void;
  minDuration?: number;
}

const TELEMETRY_STEPS = [
  { threshold: 0, label: "INITIALIZING SYSTEM KERNEL...", code: "BOOT_01" },
  { threshold: 22, label: "COMPILING OKLCH DESIGN SYSTEM...", code: "SYS_OKLCH" },
  { threshold: 48, label: "MOUNTING TANSTACK ROUTER CORE...", code: "MOD_ROUTER" },
  { threshold: 72, label: "ENERGIZING PENDANT FILAMENT...", code: "VOLT_HIGH" },
  { threshold: 92, label: "CALIBRATING INTERACTIVE PHYSICS...", code: "PHYS_RDY" },
  { threshold: 100, label: "ALL SYSTEMS OPERATIONAL // READY", code: "STATUS_OK" },
];

export function LoadingScreen({ onComplete, minDuration = 2200 }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [statusText, setStatusText] = useState(
    TELEMETRY_STEPS[0]?.label ?? "INITIALIZING SYSTEM KERNEL...",
  );
  const [statusCode, setStatusCode] = useState(TELEMETRY_STEPS[0]?.code ?? "BOOT_01");

  const finishLoading = useCallback(() => {
    setIsExiting(true);
    setTimeout(() => {
      setIsDone(true);
      if (onComplete) onComplete();
    }, 750);
  }, [onComplete]);

  useEffect(() => {
    const startTime = performance.now();
    let animFrame: number;

    const tick = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const rawProgress = Math.min(elapsed / minDuration, 1);
      
      // Custom non-linear easing: snappy start, gentle curve in the middle, confident finish
      const eased = rawProgress < 0.5
        ? 2 * rawProgress * rawProgress
        : 1 - Math.pow(-2 * rawProgress + 2, 2) / 2;

      const currentPercent = Math.min(Math.round(eased * 100), 100);
      setProgress(currentPercent);

      // Find active telemetry step
      const step = [...TELEMETRY_STEPS].reverse().find((s) => currentPercent >= s.threshold);
      if (step) {
        setStatusText(step.label);
        setStatusCode(step.code);
      }

      if (rawProgress < 1) {
        animFrame = requestAnimationFrame(tick);
      } else {
        // Small delay at 100% to let the full filament glow and readiness register
        setTimeout(() => {
          finishLoading();
        }, 220);
      }
    };

    animFrame = requestAnimationFrame(tick);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === " ") {
        finishLoading();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [minDuration, finishLoading]);

  if (isDone) return null;

  // Filament glow calculations based on progress
  const glowOpacity = Math.max(0, (progress - 30) / 70);
  const filamentColor =
    progress < 30
      ? "var(--muted-foreground)"
      : progress < 70
        ? "oklch(0.78 0.18 55)" // warm tungsten amber
        : "oklch(0.96 0.14 85)"; // brilliant white-gold filament
  const bulbHaloScale = 0.6 + glowOpacity * 0.7;

  return (
    <div
      className={`loader-overlay ${isExiting ? "loader-exiting" : ""}`}
      role="progressbar"
      aria-valuenow={progress}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Loading Gavindu Rushela Portfolio"
      onClick={() => progress > 20 && finishLoading()}
    >
      {/* Split shutter top panel */}
      <div className="loader-shutter loader-shutter-top" />
      {/* Split shutter bottom panel */}
      <div className="loader-shutter loader-shutter-bottom" />

      {/* Central horizontal optical laser split beam */}
      <div className="loader-horizon-beam" />

      {/* Blueprint grid & corner technical crosshairs */}
      <div className="loader-hud-frame">
        <div className="hud-corner hud-tl">
          <span className="hud-crosshair">+</span>
          <span className="hud-label">SYS.GRE // 2026</span>
          <span className="hud-status-led" />
        </div>
        <div className="hud-corner hud-tr">
          <span className="hud-label">COLOMBO, LK [06°55&apos;N 79°52&apos;E]</span>
          <span className="hud-crosshair">+</span>
        </div>
        <div className="hud-corner hud-bl">
          <span className="hud-crosshair">+</span>
          <span className="hud-label">TANSTACK START · OKLCH · REACT 19</span>
        </div>
        <div className="hud-corner hud-br">
          <span className="hud-label">[{statusCode}]</span>
          <span className="hud-crosshair">+</span>
        </div>
      </div>

      {/* Core animated centerpiece */}
      <div className="loader-core">
        {/* Animated Hanging Pendant Lamp SVG */}
        <div className="loader-lamp-wrap">
          <svg
            className="loader-lamp-svg"
            viewBox="0 0 160 220"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <defs>
              {/* Radial ambient filament bloom */}
              <radialGradient id="loaderBulbHalo" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="oklch(0.92 0.16 80)" stopOpacity={glowOpacity * 0.9} />
                <stop offset="45%" stopColor="oklch(0.75 0.18 55)" stopOpacity={glowOpacity * 0.45} />
                <stop offset="100%" stopColor="oklch(0.65 0.15 45)" stopOpacity="0" />
              </radialGradient>

              {/* Wire current pulse gradient */}
              <linearGradient id="wireCurrent" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--line)" />
                <stop offset="50%" stopColor="var(--primary)" />
                <stop offset="100%" stopColor="var(--line)" />
              </linearGradient>

              {/* Bulb Glass Shimmer */}
              <linearGradient id="glassReflection" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.28" />
                <stop offset="40%" stopColor="#ffffff" stopOpacity="0.04" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Ambient radiant glow behind the bulb */}
            <circle
              cx="80"
              cy="150"
              r="62"
              fill="url(#loaderBulbHalo)"
              style={{
                transform: `scale(${bulbHaloScale})`,
                transformOrigin: "80px 150px",
                transition: "transform 0.15s ease-out",
              }}
            />

            {/* Ceiling suspension mount */}
            <rect x="74" y="0" width="12" height="5" rx="1.5" className="loader-svg-mount" />

            {/* Electrical suspension cord with animated current dash */}
            <line
              x1="80"
              y1="5"
              x2="80"
              y2="88"
              className="loader-svg-wire"
            />
            {/* Travelling pulse of electricity */}
            <line
              x1="80"
              y1="5"
              x2="80"
              y2="88"
              stroke="url(#wireCurrent)"
              strokeWidth="2.4"
              strokeDasharray="18 45"
              className="loader-svg-pulse"
            />

            {/* Industrial lamp socket fixture */}
            <rect x="73" y="88" width="14" height="15" rx="2" className="loader-svg-socket" />
            <line x1="72" y1="94" x2="88" y2="94" className="loader-svg-socket-groove" />
            <line x1="72" y1="99" x2="88" y2="99" className="loader-svg-socket-groove" />

            {/* Pendant fixture rim / shade top */}
            <path
              d="M62 103 C62 103, 73 98, 80 98 C87 98, 98 103, 98 103 L94 108 L66 108 Z"
              className="loader-svg-shade"
            />

            {/* Glass Bulb Envelope */}
            <path
              d="M71 108 C64 116, 56 128, 56 148 C56 166, 67 182, 80 182 C93 182, 104 166, 104 148 C104 128, 96 116, 89 108 Z"
              className="loader-svg-glass"
            />

            {/* Glass internal reflection arc */}
            <path
              d="M63 132 C60 142, 62 160, 71 172"
              stroke="url(#glassReflection)"
              strokeWidth="2"
              strokeLinecap="round"
            />

            {/* Internal filament stem electrodes */}
            <line x1="75" y1="108" x2="75" y2="134" className="loader-svg-lead" />
            <line x1="85" y1="108" x2="85" y2="134" className="loader-svg-lead" />

            {/* Glowing Double-Helix Tungsten Filament */}
            <path
              d="M75 134 Q77 138, 80 134 T85 134 Q82 143, 77 146 T83 150 Q80 156, 85 152"
              fill="none"
              stroke={filamentColor}
              strokeWidth={progress > 60 ? "2.6" : "1.8"}
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`loader-svg-filament ${progress >= 95 ? "filament-surge" : ""}`}
              style={{
                filter:
                  progress > 40
                    ? `drop-shadow(0 0 ${progress > 75 ? "8px" : "4px"} ${filamentColor})`
                    : "none",
                transition: "stroke 0.2s ease, stroke-width 0.2s ease",
              }}
            />

            {/* Pull rope drop with knob */}
            <line
              x1="93"
              y1="108"
              x2="93"
              y2="198"
              strokeDasharray="2.5 3"
              className="loader-svg-rope"
            />
            <circle cx="93" cy="202" r="3.2" className="loader-svg-knob" />
          </svg>
        </div>

        {/* Editorial Monogram & Identification */}
        <div className="loader-branding">
          <div className="loader-wordmark">
            <span className="loader-char">G</span>
            <span className="loader-char">R</span>
            <span className="loader-char">E</span>
            <span className="loader-dot">.</span>
          </div>
          <h2 className="loader-name">GAVINDU RUSHELA EKANAYAKA</h2>
          <p className="loader-role">SOFTWARE ENGINEER · COLOMBO</p>
        </div>

        {/* Big Monospace Telemetry Digital Gauge */}
        <div className="loader-gauge">
          <div className="loader-counter-row">
            <span className="loader-counter-digits">
              {progress < 10 ? `0${progress}` : progress}
            </span>
            <span className="loader-counter-unit">%</span>
          </div>

          {/* Precision Horizontal Gauge Bar */}
          <div className="loader-track">
            <div
              className="loader-fill"
              style={{ width: `${progress}%` }}
            >
              <span className="loader-fill-head" />
            </div>
          </div>

          {/* Terminal log ticker status */}
          <div className="loader-terminal-line">
            <span className="terminal-prompt">&gt;</span>
            <span className="terminal-text">{statusText}</span>
          </div>
        </div>

        {/* Interactive skip hint */}
        <div className="loader-skip-hint">
          <span>PRESS [ESC] OR CLICK TO SKIP</span>
        </div>
      </div>
    </div>
  );
}

export default LoadingScreen;
