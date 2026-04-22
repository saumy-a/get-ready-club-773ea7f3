import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Check, AlertCircle } from "lucide-react";
import { z } from "zod";

const emailSchema = z
  .string()
  .trim()
  .nonempty({ message: "Email cannot be empty" })
  .email({ message: "Please enter a valid email address" })
  .max(255, { message: "Email must be less than 255 characters" });

const EmailSignup = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = emailSchema.safeParse(email);
    if (!result.success) {
      setError(result.error.issues[0].message);
      return;
    }
    setError(null);
    setIsSubmitted(true);
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
    <div className="w-full max-w-md">
      <form onSubmit={handleSubmit} noValidate className="flex w-full flex-col gap-3 sm:flex-row">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (error) setError(null);
          }}
          aria-invalid={!!error}
          aria-describedby={error ? "email-error" : undefined}
          maxLength={255}
          className="h-14 flex-1 rounded-xl border-muted bg-secondary/50 px-5 font-body text-base placeholder:text-muted-foreground focus-visible:border-primary focus-visible:ring-primary/20"
        />
        <Button
          type="submit"
          className="group h-14 gap-2 rounded-xl bg-primary px-8 font-display font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
        >
          Notify Me
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </form>
      {error && (
        <div
          id="email-error"
          role="alert"
          className="mt-3 flex items-center gap-2 text-left text-sm text-destructive"
        >
          <AlertCircle className="h-4 w-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
};

export default EmailSignup;
