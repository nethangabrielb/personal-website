import "@/styles/globals.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { ThemeProvider } from "@/lib/theme";
import { Toaster } from "sonner"
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <Toaster position="top-center" richColors />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
);
