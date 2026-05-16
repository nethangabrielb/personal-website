import { Outlet } from "react-router-dom";

import { Navbar } from "../sections/Navbar";

export function RootLayout() {
  return (
    <div className="min-h-screen bg-bg text-text antialiased">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
