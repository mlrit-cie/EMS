import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { lovable } from "@/integrations/lovable/index";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";


export const Route = createFileRoute("/register")({
  head: () => ({ meta: [
    { title: "Sign in — IIC.MLRIT" },
    { name: "description", content: "Sign in to register for events and manage your IIC.MLRIT activity." },
    { property: "og:title", content: "Sign in — IIC.MLRIT" },
    { property: "og:description", content: "Sign in to register for events and manage your IIC.MLRIT activity." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
  ]}),
  component: RegisterPage,
});

function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setMessage("");
    const result = mode === "signin"
      ? await supabase.auth.signInWithPassword({ email, password })
      : await supabase.auth.signUp({ email, password });
    setMessage(result.error?.message ?? (mode === "signin" ? "Signed in." : "Check your email to confirm your account."));
    setBusy(false);
  }

  async function google() {
    const result = await lovable.auth.signInWithOAuth("google", { redirect_uri: window.location.origin });
    if (result.error) setMessage(result.error.message);
  }

  return (
    <main className="grid min-h-svh md:grid-cols-2">
      {/* ── Left panel — purple background, white text ── */}
      <div className="relative min-h-80" style={{ background: "var(--clr-purple)", color: "var(--clr-white)" }}>
        
        <div className="page-gutter absolute bottom-12">
          <p className="meta" style={{ color: "var(--clr-orange)" }}>Your campus pass</p>
          <h1 className="mt-4 text-5xl font-semibold md:text-7xl" style={{ color: "var(--clr-white)" }}>
            Step into<br />what's next.
          </h1>
        </div>
      </div>

      {/* ── Right panel — off-white background, dark text ── */}
      <div className="flex items-center justify-center p-6 md:p-14" style={{ background: "var(--clr-white)" }}>
        <div className="w-full max-w-md">
          <p className="meta" style={{ color: "var(--clr-purple)" }}>IIC.MLRIT account</p>
          <h2 className="mt-4 text-4xl font-semibold" style={{ color: "var(--clr-black)" }}>
            {mode === "signin" ? "Welcome back." : "Join the community."}
          </h2>

          <Button type="button" variant="outline" size="lg" className="mt-8 w-full" onClick={google}>
            Continue with Google
          </Button>

          <div className="my-7 flex items-center gap-4 text-xs uppercase" style={{ color: "rgba(33,37,41,0.45)" }}>
            <span className="h-px flex-1 bg-border" />or use email<span className="h-px flex-1 bg-border" />
          </div>

          <form onSubmit={submit} className="space-y-5">
            <label className="block">
              <span className="meta" style={{ color: "var(--clr-black)" }}>Email</span>
              <input
                value={email}
                onChange={e => setEmail(e.target.value)}
                type="email"
                required
                className="mt-2 h-12 w-full border border-input bg-transparent px-4 outline-none focus:border-primary"
                style={{ color: "var(--clr-black)" }}
              />
            </label>
            <label className="block">
              <span className="meta" style={{ color: "var(--clr-black)" }}>Password</span>
              <input
                value={password}
                onChange={e => setPassword(e.target.value)}
                type="password"
                required
                minLength={6}
                className="mt-2 h-12 w-full border border-input bg-transparent px-4 outline-none focus:border-primary"
                style={{ color: "var(--clr-black)" }}
              />
            </label>
            <Button
              type="submit"
              size="lg"
              className="w-full"
              style={{ background: "var(--clr-purple)", color: "var(--clr-white)" }}
              disabled={busy}
            >
              {busy ? "Please wait" : mode === "signin" ? "Sign in" : "Create account"}
            </Button>
          </form>

          {message && (
            <p role="status" className="mt-5 text-sm" style={{ color: "rgba(33,37,41,0.6)" }}>
              {message}
            </p>
          )}

          <button
            type="button"
            onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
            className="mt-7 font-display text-sm font-semibold underline underline-offset-4"
            style={{ color: "var(--clr-black)" }}
          >
            {mode === "signin" ? "New here? Create an account" : "Already registered? Sign in"}
          </button>

          <p className="mt-10 text-sm" style={{ color: "rgba(33,37,41,0.5)" }}>
            <Link to="/" className="underline">Return to events</Link>
          </p>
        </div>
      </div>
    </main>
  );
}
