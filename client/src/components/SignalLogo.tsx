// Signal mark — gold soundwave for the IT division. Uses theme accent color.
export function SignalMark({ size = 32, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={(size * 56) / 64}
      viewBox="0 0 64 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="AllPros IT"
      className={className}
    >
      <g stroke="hsl(var(--accent))" strokeWidth={4} strokeLinecap="round">
        <line x1="8" y1="24" x2="8" y2="32" />
        <line x1="20" y1="14" x2="20" y2="42" />
        <line x1="32" y1="8" x2="32" y2="48" />
        <line x1="44" y1="20" x2="44" y2="36" />
        <line x1="54" y1="26" x2="54" y2="30" />
      </g>
    </svg>
  );
}

export function SignalWordmark({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <SignalMark size={32} />
      <span className="font-display font-extrabold text-xl tracking-tight leading-none text-foreground">
        AllPros<span className="text-primary"> IT</span>
      </span>
    </div>
  );
}
