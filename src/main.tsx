import "@/styles/globals.css";

import { MotionConfig } from "motion/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "sonner";

import { SectionProvider } from "@/CurrentSectionProvider";

import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <SectionProvider>
        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              background: "var(--paper)",
              color: "var(--ink)",
              border: "1px solid var(--rule)",
              fontFamily: "var(--font-body)",
              fontSize: "0.75rem",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              borderRadius: "2px",
            },
          }}
        />
        <MotionConfig reducedMotion="user">
          <App />
        </MotionConfig>
      </SectionProvider>
    </BrowserRouter>
  </StrictMode>,
);
