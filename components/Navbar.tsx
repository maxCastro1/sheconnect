"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link href="/" className="font-display text-xl font-semibold text-foreground">
          She<span className="text-primary">Connect</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 md:flex">
          <a href="#categories" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Categories</a>
          <a href="#resources" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Resources</a>
          <a href="#urgent" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Get Help</a>
          <a href="#about" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">About</a>
        </div>

        <div className="hidden md:block">
          <a
            href="#resources"
            className="rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Explore
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-controls="mobile-navigation"
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          className="rounded-full p-2 text-foreground transition-colors hover:bg-muted md:hidden"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-border bg-background px-4 py-6 md:hidden"
        >
          <div className="flex flex-col gap-4">
            <a href="#categories" onClick={() => setMobileOpen(false)} className="text-foreground">Categories</a>
            <a href="#resources" onClick={() => setMobileOpen(false)} className="text-foreground">Resources</a>
            <a href="#urgent" onClick={() => setMobileOpen(false)} className="text-foreground">Get Help</a>
            <a href="#about" onClick={() => setMobileOpen(false)} className="text-foreground">About</a>
            <a
              href="#resources"
              onClick={() => setMobileOpen(false)}
              className="mt-2 rounded-full bg-primary px-6 py-3 text-center text-sm font-medium text-primary-foreground"
            >
              Explore
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
