"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    Calendly?: { initPopupWidget: (opts: { url: string }) => void };
  }
}

const CALENDLY_CSS = "https://assets.calendly.com/assets/external/widget.css";
const CALENDLY_JS = "https://assets.calendly.com/assets/external/widget.js";

function loadCalendlyAssets() {
  if (typeof document === "undefined") return;
  if (!document.querySelector(`link[href="${CALENDLY_CSS}"]`)) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = CALENDLY_CSS;
    document.head.appendChild(link);
  }
  if (!document.querySelector(`script[src="${CALENDLY_JS}"]`)) {
    const script = document.createElement("script");
    script.src = CALENDLY_JS;
    script.async = true;
    document.body.appendChild(script);
  }
}

type Props = {
  url: string;
  className?: string;
  children: React.ReactNode;
};

export default function CalendlyButton({ url, className, children }: Props) {
  useEffect(() => {
    loadCalendlyAssets();
  }, []);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url });
    } else {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <button type="button" onClick={handleClick} className={className}>
      {children}
    </button>
  );
}
