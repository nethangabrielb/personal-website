import "@/styles/globals.css";

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
              background: "var(--bg)",
              color: "var(--text)",
              border: "0.5px solid var(--rule)",
              fontFamily: "var(--font-body)",
              fontSize: "0.75rem",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              borderRadius: "4px",
            },
            classNames: {
              success: "text-amber border-amber",
              error: "text-red-500 border-red-500",
            },
          }}
        />
        <App />
      </SectionProvider>
    </BrowserRouter>
  </StrictMode>,
);
