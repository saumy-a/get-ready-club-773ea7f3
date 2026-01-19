import EmailSignup from "@/components/EmailSignup";
import GlowOrb from "@/components/GlowOrb";
import { Instagram, Twitter } from "lucide-react";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-hidden hero-gradient">
      {/* Background glow effects */}
      <GlowOrb className="left-1/4 top-1/4 h-96 w-96 -translate-x-1/2 -translate-y-1/2" />
      <GlowOrb className="right-1/4 bottom-1/4 h-80 w-80 translate-x-1/2 translate-y-1/2" />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
        aria-hidden="true"
      />

      <main className="relative flex min-h-screen flex-col items-center justify-center px-6 py-12">
        <div className="w-full max-w-3xl text-center">
          {/* Badge */}
          <div 
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 animate-fade-in"
            style={{ animationDelay: '0.1s' }}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            <span className="font-body text-sm font-medium text-primary">
              Launching Soon
            </span>
          </div>

          {/* Main heading */}
          <h1 
            className="mb-6 font-display text-5xl font-bold leading-tight tracking-tight text-foreground sm:text-6xl md:text-7xl animate-slide-up"
            style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
          >
            Something{' '}
            <span className="text-gradient">Extraordinary</span>
            {' '}is Coming
          </h1>

          {/* Subheading */}
          <p 
            className="mx-auto mb-12 max-w-xl font-body text-lg leading-relaxed text-muted-foreground sm:text-xl animate-slide-up"
            style={{ animationDelay: '0.4s', animationFillMode: 'both' }}
          >
            Be the first to know when we launch. Join our exclusive waitlist and get early access to our club.
          </p>

          {/* Email signup */}
          <div 
            className="flex justify-center animate-slide-up"
            style={{ animationDelay: '0.6s', animationFillMode: 'both' }}
          >
            <EmailSignup />
          </div>

          {/* Social links */}
          <div 
            className="mt-16 flex items-center justify-center gap-6 animate-fade-in"
            style={{ animationDelay: '0.8s', animationFillMode: 'both' }}
          >
            <span className="font-body text-sm text-muted-foreground">Follow us</span>
            <div className="flex gap-4">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-muted bg-secondary/50 text-muted-foreground transition-all hover:border-primary hover:bg-primary/10 hover:text-primary"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-muted bg-secondary/50 text-muted-foreground transition-all hover:border-primary hover:bg-primary/10 hover:text-primary"
                aria-label="Follow us on Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="absolute bottom-0 left-0 right-0 py-6 text-center">
        <p className="font-body text-sm text-muted-foreground">
          © 2026 Your Club. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Index;
