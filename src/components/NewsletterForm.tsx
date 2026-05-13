"use client";
import { useEffect, useRef } from "react";

interface Props {
  // Kept for backward compatibility with existing call sites; Beehiiv's
  // embedded form has its own styling and ignores this prop.
  dark?: boolean;
  className?: string;
}

const BEEHIIV_FORM_ID = "46207a5d-7fd4-44dc-ba8c-d73ad8bc9093";
const BEEHIIV_LOADER_SRC = "https://subscribe-forms.beehiiv.com/v3/loader.js";

export default function NewsletterForm({ className = "" }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const script = document.createElement("script");
    script.src = BEEHIIV_LOADER_SRC;
    script.async = true;
    script.setAttribute("data-beehiiv-form", BEEHIIV_FORM_ID);
    containerRef.current.appendChild(script);
  }, []);

  return <div ref={containerRef} className={className} />;
}
