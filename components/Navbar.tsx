"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { menuItemVariants, menuVariants } from "@/animations/variants/variants";
import MenuIcon from "@/icons/MenuIcon";
import DownloadIcon from "@/icons/DownloadIcon";

const MotionLink = motion.create(Link);

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

  const linkClassName = (href: string) =>
    `nav-link ${pathname === href ? "active" : ""}`;

  return (
    <nav ref={navRef} className="navbar" aria-label="Main navigation">
      <div className="navbar-menu">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className={linkClassName(link.href)}>
            {link.label}
          </Link>
        ))}
      </div>

      <button
        type="button"
        className="menu-toggle"
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
        aria-controls="mobile-menu"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <MenuIcon />
      </button>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            className="mobile-menu"
            variants={menuVariants}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            {links.map((link) => (
              <MotionLink
                key={link.href}
                href={link.href}
                className={linkClassName(link.href)}
                variants={menuItemVariants}
              >
                {link.label}
              </MotionLink>
            ))}

            <motion.a
              href="/KaidenZapantaResume2026.pdf"
              className="nav-link nav-resume"
              target="_blank"
              rel="noopener noreferrer"
              variants={menuItemVariants}
            >
              <span className="icon"><DownloadIcon /></span>
              Resume / CV
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
