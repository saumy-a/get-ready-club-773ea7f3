interface GlowOrbProps {
  className?: string;
}

const GlowOrb = ({ className = "" }: GlowOrbProps) => {
  return (
    <div 
      className={`pointer-events-none absolute rounded-full bg-primary/20 blur-3xl animate-pulse-slow ${className}`}
      aria-hidden="true"
    />
  );
};

export default GlowOrb;
