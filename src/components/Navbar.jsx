"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import Image from "next/image";

export default function Navbar({ lang = "en", labels }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [open, setOpen] = useState(false);

  //No need since react 19 already does this
  const currentParams = useMemo(() => {
    const params = new URLSearchParams(searchParams?.toString());
    return params;
  }, [searchParams]);

  const setLang = (nextLang) => {
    const params = new URLSearchParams(currentParams.toString());
    params.set("lang", nextLang);
    router.push(`${pathname}?${params.toString()}${window.location.hash || ""}`, { scroll: false });
  };

  const isActive = (l) => lang === l;

  return (
    <header className="fixed top-0 inset-x-0 z-50" style={{ transform: 'translateZ(0)' }}>
      <div className="mx-auto max-w-[1200px] px-4 md:px-6">
        <div className="mt-4 rounded-2xl border border-[var(--border)] bg-[rgba(0,0,0,0.5)] backdrop-blur supports-[backdrop-filter]:bg-[rgba(0,0,0,0.4)]">
          <nav className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-4 md:gap-8">
    <Image src={'/logo.png'} priority width={40} height={0} alt="Logo" className="w-{40px} h-{40px}"/ >


                          <ul className="hidden md:flex items-center gap-6 text-sm text-muted">
                <li><a className="hover:text-gold" href="#services">{labels.nav.services}</a></li>
                <li><a className="hover:text-gold" href="#approach">{labels.nav.approach}</a></li>
                <li><a className="hover:text-gold" href="#cases">{labels.nav.cases}</a></li>
                <li><a className="hover:text-gold" href="#why">{labels.nav.why}</a></li>
                <li><a className="hover:text-gold" href="#contact">{labels.nav.contact}</a></li>
              </ul>
            </div>
            <div className="flex items-center gap-2 md:gap-3">
              <a href="#contact" className="hidden sm:inline-flex cta-primary h-10 px-4 text-sm font-medium items-center justify-center">
                {labels.ctaQuote}
              </a>
              <button
                className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-[var(--border)] bg-[rgba(255,255,255,0.02)]"
                aria-label="Open menu"
                aria-expanded={open}
                onClick={() => setOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
              <div className="hidden md:flex items-center gap-1 text-xs border border-[var(--border)] rounded-full px-1 py-1 bg-[rgba(255,255,255,0.02)]">
                {[
                  { code: "en", label: "EN" },
                  { code: "fr", label: "FR" },
                  { code: "ar", label: "AR" },
                ].map((l) => (
                  <button
                    key={l.code}
                    onClick={() => setLang(l.code)}
                    className={`px-2.5 py-1 rounded-full transition-colors ${
                      isActive(l.code)
                        ? "bg-[rgba(212,175,55,0.2)] text-gold"
                        : "text-muted hover:text-foreground"
                    }`}
                    aria-pressed={isActive(l.code)}
                    aria-label={`Switch language to ${l.label}`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile Drawer */}
      <MobileDrawer
        open={open}
        onClose={() => setOpen(false)}
        labels={labels}
        isActive={isActive}
        setLang={setLang}
      />
    </header>
  );
}

function MobileDrawer({ open, onClose, labels, isActive, setLang }) {
  useEffect(() => {
    if (open) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [open]);

  return (
    <div
      className={`fixed inset-0 z-[60] transition-opacity ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      aria-hidden={!open}
    >
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <aside
        className={`absolute right-0 top-0 h-full w-[85%] max-w-[360px] bg-[var(--surface)] border-l border-[var(--border)] shadow-xl transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}
        role="dialog"
        aria-modal="true"
      >
        <div className="p-4 flex items-center justify-between border-b border-[var(--border)]">
          <span className="font-semibold">Menu</span>
          <button
            aria-label="Close menu"
            onClick={onClose}
            className="w-10 h-10 inline-flex items-center justify-center rounded-lg border border-[var(--border)] bg-[rgba(255,255,255,0.02)] btn-click-effect grey-glow"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        <div className="p-4 flex flex-col gap-4">
          <a href="#services" onClick={onClose} className="py-2 text-foreground/90 hover:text-gold btn-click-effect grey-glow">{labels.nav.services}</a>
          <a href="#approach" onClick={onClose} className="py-2 text-foreground/90 hover:text-gold btn-click-effect grey-glow">{labels.nav.approach}</a>
          <a href="#cases" onClick={onClose} className="py-2 text-foreground/90 hover:text-gold btn-click-effect grey-glow">{labels.nav.cases}</a>
          <a href="#why" onClick={onClose} className="py-2 text-foreground/90 hover:text-gold btn-click-effect grey-glow">{labels.nav.why}</a>
          <a href="#contact" onClick={onClose} className="py-2 text-foreground/90 hover:text-gold btn-click-effect grey-glow">{labels.nav.contact}</a>

          <div className="mt-2 flex items-center gap-2 text-xs border border-[var(--border)] rounded-full px-1 py-1 bg-[rgba(255,255,255,0.02)] w-max">
            {[{ code: "en", label: "EN" }, { code: "fr", label: "FR" }, { code: "ar", label: "AR" }].map((l) => (
              <button
                key={l.code}
                onClick={() => {
                  setLang(l.code);
                  onClose();
                }}
                className={`px-2.5 py-1 rounded-full transition-colors btn-click-effect ${
                  isActive(l.code) ? "bg-[rgba(212,175,55,0.2)] text-gold golden-glow" : "text-muted hover:text-foreground grey-glow"
                }`}
                aria-pressed={isActive(l.code)}
                aria-label={`Switch language to ${l.label}`}
              >
                {l.label}
              </button>
            ))}
          </div>

          <a href="#contact" onClick={onClose} className="cta-primary h-11 px-6 inline-flex items-center justify-center text-sm font-medium mt-2 btn-click-effect golden-glow">
            {labels.ctaQuote}
          </a>
        </div>
      </aside>
    </div>
  );
}

