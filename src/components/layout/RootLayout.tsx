import { Outlet } from "react-router-dom";

export function RootLayout() {
  return (
    <>
      <a href="#workspace" className="skip-link">
        Skip to content
      </a>
      <Outlet />
    </>
  );
}
