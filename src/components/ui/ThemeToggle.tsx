import { MotionButton } from "@/components/ui/MotionButton";
import { useTheme } from "@/lib/theme";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <MotionButton
      variant="ghost"
      size="sm"
      aria-label="Toggle theme"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {resolvedTheme === "dark" ? "☀️" : "🌙"}
    </MotionButton>
  );
}
