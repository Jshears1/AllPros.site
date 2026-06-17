export function Logo({ size = 40, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="AllPros Logo"
      className={className}
    >
      {/* Hexagon background */}
      <polygon
        points="20,2 36,11 36,29 20,38 4,29 4,11"
        fill="hsl(24,95%,53%)"
      />
      {/* A letter mark */}
      <path
        d="M12 30L20 10L28 30"
        stroke="white"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M14.5 23H25.5"
        stroke="white"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function LogoWordmark({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <Logo size={36} />
      <span className="font-display font-800 text-xl tracking-tight leading-none">
        All<span className="text-orange-500">Pros</span>
        <span className="text-sm font-body font-medium text-muted-foreground ml-1">.site</span>
      </span>
    </div>
  );
}
