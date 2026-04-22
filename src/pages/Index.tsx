import EmailSignup from "@/components/EmailSignup";
import { Instagram, Linkedin } from "lucide-react";
import codeLogo from "@/assets/code-logo.png";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      {/* NAV */}
      <nav className="fixed inset-x-0 top-0 z-50 flex items-center justify-between border-b border-border bg-background px-6 py-4 md:px-12">
        <a href="#" className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em]">
          <span className="bg-primary px-1.5 py-0.5 text-primary-foreground">{`{ }`}</span>
          CODE Club
        </a>
        <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
          01 — Coming Soon
        </div>
      </nav>

      {/* HERO */}
      <main className="grid min-h-screen grid-cols-1 pt-20 md:grid-cols-2">
        {/* LEFT */}
        <section className="flex flex-col justify-center border-b border-border px-6 py-16 md:border-b-0 md:border-r md:px-12 md:py-20">
          <div className="mb-8 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground animate-fade-in">
            <span className="block h-px w-6 bg-muted-foreground" />
            University Code Club — Est. 2020
          </div>

          <img
            src={codeLogo}
            alt="CODE Club Logo"
            className="mb-8 h-16 w-auto animate-fade-in"
            style={{ animationDelay: '0.1s', animationFillMode: 'both' }}
          />

          <h1
            className="mb-8 font-serif text-[52px] font-semibold leading-[1] tracking-[-0.02em] text-foreground sm:text-[64px] md:text-[78px] animate-slide-up"
            style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
          >
            Build.
            <br />
            <em className="font-light italic">Learn.</em>
            <br />
            <span className="hl-mark">Ship.</span>
          </h1>

          <p
            className="mb-10 max-w-md font-mono text-sm leading-[1.8] text-muted-foreground animate-slide-up"
            style={{ animationDelay: '0.35s', animationFillMode: 'both' }}
          >
            A community of students who write code, solve hard problems, and build things that matter. Our new home is launching soon — get on the list.
          </p>

          <div
            className="animate-slide-up"
            style={{ animationDelay: '0.5s', animationFillMode: 'both' }}
          >
            <EmailSignup />
          </div>

          <div
            className="mt-12 flex items-center gap-4 animate-fade-in"
            style={{ animationDelay: '0.7s', animationFillMode: 'both' }}
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
              Follow
            </span>
            <span className="block h-px w-6 bg-border" />
            <a
              href="https://www.instagram.com/codeclub.gsfcu/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center border border-border text-muted-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
              aria-label="Follow us on Instagram"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/code-club-gsfc-university-0621a61ba/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center border border-border text-muted-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
              aria-label="Follow us on LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </section>

        {/* RIGHT */}
        <section className="flex flex-col justify-center px-6 py-16 md:px-12 md:py-20">
          {/* Stats grid */}
          <div
            className="mb-10 grid grid-cols-2 gap-px border border-border bg-border animate-fade-in"
            style={{ animationDelay: '0.3s', animationFillMode: 'both' }}
          >
            {[
              { num: '120+', label: 'Members' },
              { num: '18', label: 'Projects built' },
              { num: '6', label: 'Hackathons won' },
              { num: '3rd yr', label: 'Running strong' },
            ].map((s) => (
              <div
                key={s.label}
                className="group bg-background p-7 transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <div className="mb-1.5 font-serif text-4xl font-semibold leading-none">{s.num}</div>
                <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground group-hover:text-primary-foreground/70">
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          {/* Code block */}
          <div
            className="border border-border bg-card p-6 font-mono text-xs leading-[1.8] animate-fade-in"
            style={{ animationDelay: '0.5s', animationFillMode: 'both' }}
          >
            <div className="mb-4 flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-border" />
              <span className="h-2.5 w-2.5 rounded-full bg-border" />
              <span className="h-2.5 w-2.5 rounded-full bg-border" />
            </div>
            <div className="text-muted-foreground">{`// launching soon`}</div>
            <div>
              <span className="text-muted-foreground">const</span> you = {`{`}
            </div>
            <div className="pl-4">
              curious: <span className="text-primary">true</span>,
            </div>
            <div className="pl-4">
              skills: <span className="text-primary">"any level"</span>,
            </div>
            <div className="pl-4">
              ready: <span className="text-primary">true</span>
            </div>
            <div>{`};`}</div>
            <div className="mt-3">
              <span className="text-muted-foreground">if</span> (you.ready) {`{`}
            </div>
            <div className="pl-4">
              <span className="text-primary">joinUs()</span>;
              <span className="ml-0.5 inline-block h-3 w-0.5 translate-y-0.5 animate-pulse bg-primary align-middle" />
            </div>
            <div>{`}`}</div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="flex flex-col items-center justify-between gap-3 border-t border-border px-6 py-6 md:flex-row md:px-12">
        <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.15em]">
          <span className="bg-primary px-1.5 py-0.5 text-primary-foreground">{`{ }`}</span>
          CODE Club
        </div>
        <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
          © 2026 — All rights reserved
        </p>
      </footer>
    </div>
  );
};

export default Index;
