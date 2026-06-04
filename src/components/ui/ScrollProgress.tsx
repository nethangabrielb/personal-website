import { useScrollProgress } from "@/hooks/useScrollProgress";

export function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div className="scroll-track">
      <div className="scroll-fill" style={{ height: `${progress}%` }} />
    </div>
  );
}
