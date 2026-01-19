import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Check } from "lucide-react";

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
      <div className="flex items-center gap-3 rounded-xl border border-primary/30 bg-primary/10 px-6 py-4">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
          <Check className="h-4 w-4 text-primary-foreground" />
        </div>
        <p className="font-medium text-foreground">You're on the list!</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="h-14 flex-1 rounded-xl border-muted bg-secondary/50 px-5 font-body text-base placeholder:text-muted-foreground focus-visible:border-primary focus-visible:ring-primary/20"
        required
      />
      <Button 
        type="submit" 
        className="group h-14 gap-2 rounded-xl bg-primary px-8 font-display font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
      >
        Notify Me
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Button>
    </form>
  );
};

export default EmailSignup;
