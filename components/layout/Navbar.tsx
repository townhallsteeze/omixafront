"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { meetingUrl } from "@/lib/utils";
import { navLinks } from "@/data/site";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition ${scrolled ? "bg-navy shadow-lg" : "bg-navy/95 shadow-md backdrop-blur-md"}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6" aria-label="Primary navigation">
        <Link href="/" className="focus-ring flex items-center gap-3 rounded-md">
          <Image src="/images/omixa-labs-logo.png" width={264} height={132} alt="Omixa Labs logo" className="h-16 w-auto object-contain md:h-24" priority />
        </Link>
        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => <Link key={link.href} className="focus-ring rounded px-1 py-1 text-sm font-bold text-white hover:text-white/80" href={link.href}>{link.label}</Link>)}
        </div>
        <div className="hidden items-center gap-3 lg:flex">
          <Button href={meetingUrl} variant="ghost" className="border-white/35 bg-white text-ink hover:bg-mist">Join Interview</Button>
          <Button href="/contact">Start a Project</Button>
        </div>
        <button aria-label="Toggle menu" className="focus-ring rounded-md p-2 text-white lg:hidden" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </nav>
      {open ? (
        <div className="border-t border-white/15 bg-navy px-4 py-4 lg:hidden">
          <div className="grid gap-3">
            {navLinks.map((link) => <Link key={link.href} className="focus-ring rounded-md px-2 py-2 font-semibold text-white" href={link.href} onClick={() => setOpen(false)}>{link.label}</Link>)}
            <Button href={meetingUrl} variant="ghost" className="border-white/35 bg-white text-ink">Join Interview</Button>
            <Button href="/contact">Start a Project</Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
