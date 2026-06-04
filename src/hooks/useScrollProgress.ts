import { useEffect, useState } from "react";

/** Returns scroll progress as a percentage (0–100) */
export function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const h = document.documentElement;
      const pct = (window.scrollY / (h.scrollHeight - h.clientHeight)) * 100;
      setProgress(pct);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return progress;
}
