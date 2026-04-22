import { useState } from "react";
import { Check } from "lucide-react";

const EmailSignup = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
    }
  };

  if (isSubmitted) {
    return (
      <div className="flex items-center gap-3 border border-border bg-primary px-6 py-4 text-primary-foreground">
        <div className="flex h-7 w-7 items-center justify-center border border-primary-foreground/30">
          <Check className="h-4 w-4" />
        </div>
        <p className="font-mono text-xs uppercase tracking-[0.15em]">You're on the list</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-md flex-col gap-0 border border-border bg-card sm:flex-row">
      <input
        type="email"
        placeholder="your.email@university.edu"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="h-12 flex-1 bg-transparent px-4 font-mono text-xs uppercase tracking-[0.12em] text-foreground placeholder:text-muted-foreground/70 focus:outline-none"
        required
      />
      <button
        type="submit"
        className="h-12 border-l border-border bg-foreground px-6 font-mono text-xs uppercase tracking-[0.15em] text-background transition-colors hover:bg-primary hover:text-primary-foreground"
      >
        Notify Me →
      </button>
    </form>
  );
};

export default EmailSignup;
