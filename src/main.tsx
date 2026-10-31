import "@/styles/globals.css";

import { MotionConfig } from "motion/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "sonner";

import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <MotionConfig reducedMotion="user">
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "var(--surface-2)",
              color: "var(--text-primary)",
              border: "1px solid var(--border-strong)",
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
              letterSpacing: "0.02em",
              borderRadius: "10px",
            },
          }}
        />
        <App />
      </MotionConfig>
    </BrowserRouter>
  </StrictMode>,
);
