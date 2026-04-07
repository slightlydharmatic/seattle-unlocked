"use client";
import { useState } from "react";
import { BEEHIIV_EMBED_URL } from "@/lib/constants";

interface Props {
  dark?: boolean;
  className?: string;
}

export default function NewsletterForm({ dark = false, className = "" }: Props) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    try {
      // Beehiiv embed form submission
      const formData = new URLSearchParams();
      formData.append("email", email);

      const res = await fetch(BEEHIIV_EMBED_URL, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formData.toString(),
        mode: "no-cors", // Beehiiv doesn't support CORS from custom domains
      });

      // no-cors means we can't read the response, but the subscription goes through
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className={`font-mono text-sm ${dark ? "text-green" : "text-green"} ${className}`}>
        You&apos;re in. Check your inbox.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`flex gap-0 ${className}`}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your email"
        required
        className={`font-mono text-xs flex-1 outline-none px-4 py-3.5 border ${
          dark
            ? "text-lt bg-transparent border-lt-faint placeholder:text-lt-faint"
            : "text-ink bg-transparent border-faint placeholder:text-dim"
        }`}
        style={{ borderRight: "none" }}
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="font-mono text-[10px] font-bold text-white bg-green border border-green px-5 py-3.5 cursor-pointer uppercase tracking-[0.1em] hover:brightness-110 transition-all disabled:opacity-60"
      >
        {status === "loading" ? "..." : "I'm in"}
      </button>
    </form>
  );
}
