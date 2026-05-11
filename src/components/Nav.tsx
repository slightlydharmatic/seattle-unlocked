"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "Events", href: "/events" },
  { label: "Sports", href: "/sports" },
  { label: "Stories", href: "/stories" },
  { label: "Partner", href: "/partner" },
  { label: "About", href: "/about" },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const dark = false;

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-400"
      style={{
        background: scrolled
          ? dark ? "rgba(12,12,12,0.95)" : "rgba(242,237,228,0.95)"
          : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
      }}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between h-14 px-5 md:px-[5vw] xl:px-[60px]">
        {/* Logo */}
        <Link href="/" className="flex items-baseline gap-1 no-underline">
          <span className={`font-serif italic text-xl ${dark ? "text-lt" : "text-ink"}`}>Seattle</span>
          <span className="font-mono text-[10px] text-green uppercase tracking-[0.15em]">Unlocked</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {links.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={`font-mono text-[10px] uppercase tracking-[0.08em] no-underline transition-colors ${
                pathname === href || pathname.startsWith(href + "/")
                  ? "text-green"
                  : dark ? "text-lt-faint hover:text-lt-dim" : "text-dim hover:text-ink"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-[5px] p-2 bg-transparent border-none cursor-pointer"
          aria-label="Menu"
        >
          {[0, 1, 2].map(i => (
            <span
              key={i}
              className="block w-5 h-[1.5px] transition-all"
              style={{ background: dark ? "var(--lt)" : "var(--ink)" }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-bg border-t border-faint px-5 pb-6 pt-4">
          {links.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={`block font-mono text-xs uppercase tracking-[0.08em] py-3 no-underline border-b border-faint ${
                pathname === href ? "text-green" : "text-ink"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
