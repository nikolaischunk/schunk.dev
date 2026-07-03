"use client";

import { useState } from "react";
import { List, X } from "@phosphor-icons/react";
import NavBlur from "@/components/motion/NavBlur";

const links = [
  { href: "#top", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <NavBlur>
        <a href="/" className="flex items-center" aria-label="Home">
          <div className="w-8 h-8 bg-foreground rounded flex items-center justify-center text-background font-bold text-lg font-[family-name:var(--font-display)] transition-transform hover:rotate-6">
            S.
          </div>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <List size={24} />
        </button>
      </NavBlur>

      {mobileOpen && (
        <div className="fixed inset-0 z-[200] bg-background flex flex-col">
          <div className="flex items-center justify-between px-5 h-16">
            <a href="/" aria-label="Home">
              <div className="w-8 h-8 bg-foreground rounded flex items-center justify-center text-background font-bold text-lg font-[family-name:var(--font-display)]">
                S.
              </div>
            </a>
            <button
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              className="p-2 text-foreground"
            >
              <X size={24} />
            </button>
          </div>
          <nav className="flex-1 flex flex-col items-start justify-center gap-8 px-10">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-4xl font-bold font-[family-name:var(--font-display)] text-foreground hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
