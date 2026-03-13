"use client";

import { useState, useEffect, useRef } from "react";

const words = ["researchers", "founders", "policymakers"];
const TYPE_SPEED = 140;
const DELETE_SPEED = 70;
const PAUSE_AFTER_TYPE = 2000;
const PAUSE_AFTER_DELETE = 800;

export default function RotatingText() {
  const [displayed, setDisplayed] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const word = words[wordIndex];

    if (!isDeleting) {
      if (displayed.length < word.length) {
        timeoutRef.current = setTimeout(() => {
          setDisplayed(word.slice(0, displayed.length + 1));
        }, TYPE_SPEED);
      } else {
        timeoutRef.current = setTimeout(() => {
          setIsDeleting(true);
        }, PAUSE_AFTER_TYPE);
      }
    } else {
      if (displayed.length > 0) {
        timeoutRef.current = setTimeout(() => {
          setDisplayed(displayed.slice(0, -1));
        }, DELETE_SPEED);
      } else {
        timeoutRef.current = setTimeout(() => {
          setWordIndex((i) => (i + 1) % words.length);
          setIsDeleting(false);
        }, PAUSE_AFTER_DELETE);
      }
    }

    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, [displayed, isDeleting, wordIndex]);

  return (
    <span className="text-accent">
      {displayed}
      <span className="inline-block w-[2px] h-[0.65em] bg-accent ml-[1px] align-baseline" />
    </span>
  );
}
