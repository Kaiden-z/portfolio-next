"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import MenuIcon from "@/icons/MenuIcon";
import DownloadIcon from "@/icons/DownloadIcon";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;

    const handlePointerDown = (e: PointerEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  return (
    <nav ref={navRef} className="navbar" aria-label="Main navigation">
      <button
        type="button"
        className="menu-toggle"
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
        aria-controls="navbar-menu"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <MenuIcon />
      </button>

      <div id="navbar-menu" className={`navbar-menu ${menuOpen ? "open" : ""}`}>
        {links.map((link) => {
          const isActive = pathname === link.href;

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link ${isActive ? "active" : ""}`}
            >
              {link.label}
            </Link>
          );
        })}

        <a
          href="/KaidenZapantaResume2026.pdf"
          className="nav-link nav-resume"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon"><DownloadIcon /></span>
          Resume / CV
        </a>
      </div>
    </nav>
  );
}
