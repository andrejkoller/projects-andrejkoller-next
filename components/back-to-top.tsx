"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUp } from "lucide-react";

export const BackToTop = () => {
  const [visible, setVisible] = useState(false);
  const [opacity, setOpacity] = useState(1);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      setVisible(currentY > 100);

      if (currentY < lastScrollY.current) {
        setOpacity(1);
      } else {
        setOpacity(0.3);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      style={{ opacity, transition: "opacity 0.3s ease" }}
      className="fixed bottom-6 right-8 z-50 flex items-center justify-center w-8 h-8 rounded-md border border-color-border bg-color-background text-color-foreground cursor-pointer hover:opacity-100"
    >
      <ArrowUp size={20} />
    </button>
  );
};
