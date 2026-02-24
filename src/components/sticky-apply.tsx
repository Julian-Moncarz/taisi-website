"use client";

import { Button } from "@/components/ui/button";

export function StickyApply() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border/50 bg-background/90 backdrop-blur-md p-3 sm:hidden">
      <Button asChild className="w-full bg-taisi-red hover:bg-taisi-red/90 text-white" size="lg">
        <a href="https://airtable.com/appVfG77MoQbG3bgi/pagW6YDWqH4GG76kw/form" target="_blank" rel="noopener noreferrer">Apply Now — Closes April 5th</a>
      </Button>
    </div>
  );
}
