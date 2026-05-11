"use client";
import { useState } from "react";
import { ROUND_UP_FORM_ACTION } from "@/lib/constants";

export default function RoundUpForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [form, setForm] = useState({
    businessName: "",
    contactName: "",
    email: "",
    instagramOrWebsite: "",
    neighborhood: "",
    type: "",
    feature: "",
    notes: "",
  });

  const update = (field: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [field]: e.target.value });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch(ROUND_UP_FORM_ACTION, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="border border-green p-12 text-center">
        <div className="font-mono font-bold text-[10px] text-green uppercase tracking-[0.18em] mb-3">
          Got it
        </div>
        <h3 className="font-serif italic text-[36px] text-ink leading-tight mb-4">
          Thanks for reaching out.
        </h3>
        <p className="font-sans text-base text-dim leading-relaxed max-w-[480px] mx-auto m-0">
          We have your submission and we will review it as we plan the next round-up. If you are a fit, we will reach out within a week to lock in the details.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Field label="Business name" required>
          <input
            type="text"
            required
            value={form.businessName}
            onChange={update("businessName")}
            className="form-input"
          />
        </Field>
        <Field label="Your name" required>
          <input
            type="text"
            required
            value={form.contactName}
            onChange={update("contactName")}
            className="form-input"
          />
        </Field>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Field label="Email" required>
          <input
            type="email"
            required
            value={form.email}
            onChange={update("email")}
            className="form-input"
          />
        </Field>
        <Field label="Instagram or website" required>
          <input
            type="text"
            required
            placeholder="@yourhandle or yoursite.com"
            value={form.instagramOrWebsite}
            onChange={update("instagramOrWebsite")}
            className="form-input"
          />
        </Field>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Field label="Neighborhood">
          <input
            type="text"
            placeholder="Capitol Hill, Ballard, etc."
            value={form.neighborhood}
            onChange={update("neighborhood")}
            className="form-input"
          />
        </Field>
        <Field label="Type of business">
          <select value={form.type} onChange={update("type")} className="form-input">
            <option value="">Pick one</option>
            <option value="cafe">Cafe / coffee shop</option>
            <option value="bar">Bar / brewery / tasting room</option>
            <option value="restaurant">Restaurant</option>
            <option value="venue">Music or event venue</option>
            <option value="event">One-off event</option>
            <option value="fitness">Fitness or wellness</option>
            <option value="retail">Retail / boutique</option>
            <option value="other">Something else</option>
          </select>
        </Field>
      </div>

      <Field label="What are you hoping to feature?">
        <select value={form.feature} onChange={update("feature")} className="form-input">
          <option value="">Pick the closest fit</option>
          <option value="weekly">A weekly recurring event or special</option>
          <option value="monthly">A monthly recurring event or special</option>
          <option value="one-time">A one-time event or pop-up</option>
          <option value="grand-opening">A grand opening or launch</option>
          <option value="ongoing">Our business in general</option>
        </select>
      </Field>

      <Field label="Anything else we should know?">
        <textarea
          rows={4}
          value={form.notes}
          onChange={update("notes")}
          placeholder="Dates, links to past press, what makes this special..."
          className="form-input"
        />
      </Field>

      {status === "error" && (
        <div className="font-mono font-bold text-[11px] text-red-700 uppercase tracking-[0.12em]">
          Something broke on our end. Try again or email us directly.
        </div>
      )}

      <div className="pt-2">
        <button
          type="submit"
          disabled={status === "loading"}
          className="font-mono font-bold text-[11px] text-white bg-green border border-green px-10 py-5 cursor-pointer uppercase tracking-[0.14em] hover:brightness-110 transition-all disabled:opacity-60"
        >
          {status === "loading" ? "Sending..." : "Submit for the round-up"}
        </button>
        <div className="font-mono font-bold text-[9px] text-dim uppercase tracking-[0.12em] mt-4">
          Takes 60 seconds / We read every submission
        </div>
      </div>

      <style jsx>{`
        .form-input {
          width: 100%;
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          color: var(--ink);
          background: transparent;
          border: 1px solid var(--faint);
          padding: 16px 16px;
          min-height: 48px;
          outline: none;
          transition: border-color 0.2s ease;
        }
        .form-input:focus {
          border-color: var(--green);
        }
        textarea.form-input {
          font-family: 'Inter', sans-serif;
          resize: vertical;
        }
      `}</style>
    </form>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <div className="font-mono font-bold text-[10px] text-ink uppercase tracking-[0.14em] mb-2">
        {label}
        {required && <span className="text-green"> *</span>}
      </div>
      {children}
    </label>
  );
}
