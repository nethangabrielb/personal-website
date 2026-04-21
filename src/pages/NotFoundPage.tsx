import { Link } from "react-router-dom";

import { MotionButton } from "@/components/ui/MotionButton";

export function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 text-center">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-muted-foreground">This page doesn't exist.</p>
      <MotionButton>
        <Link to="/">Go Home</Link>
      </MotionButton>
    </div>
  );
}
