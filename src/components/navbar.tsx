"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.webp"
            alt="TAISI"
            width={160}
            height={21}
            className="h-5 w-auto"
            priority
          />
        </Link>
        <div className="hidden items-center gap-8 sm:flex">
          <Link
            href="/program"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Program
          </Link>
          <Link
            href="/about"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            About
          </Link>
          <Button asChild size="sm" className="bg-taisi-red hover:bg-taisi-red/90 text-white">
            <a href="#apply">Apply →</a>
          </Button>
        </div>
        <button
          className="sm:hidden text-muted-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
          )}
        </button>
      </div>
      {open && (
        <div className="flex flex-col gap-4 border-t border-border/50 px-6 py-5 sm:hidden bg-background/95 backdrop-blur-md">
          <Link
            href="/program"
            className="text-sm text-muted-foreground"
            onClick={() => setOpen(false)}
          >
            Program
          </Link>
          <Link
            href="/about"
            className="text-sm text-muted-foreground"
            onClick={() => setOpen(false)}
          >
            About
          </Link>
          <Button asChild size="sm" className="w-fit bg-taisi-red hover:bg-taisi-red/90 text-white">
            <a href="#apply" onClick={() => setOpen(false)}>
              Apply →
            </a>
          </Button>
        </div>
      )}
    </nav>
  );
}
