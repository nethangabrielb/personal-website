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
        <Toaster position="top-center" richColors />
        <App />
      </SectionProvider>
    </BrowserRouter>
  </StrictMode>,
);
