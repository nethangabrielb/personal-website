import { Outlet } from "react-router-dom";

import { GridOverlay } from "@/components/ui/GridOverlay";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { ScrollToTop } from "@/components/ui/ScrollToTop";

import { Navbar } from "../sections/Navbar";

export function RootLayout() {
  return (
    <>
      <ScrollProgress />
      <GridOverlay />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <ScrollToTop />
    </>
  );
}
