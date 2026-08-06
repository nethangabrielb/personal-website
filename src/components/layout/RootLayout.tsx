import { Outlet } from "react-router-dom";

import { Navbar } from "../sections/Navbar";

export function RootLayout() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <Navbar />
      <main id="main">
        <Outlet />
      </main>
    </>
  );
}
