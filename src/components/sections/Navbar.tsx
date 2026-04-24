import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  // { to: '/projects', label: 'Projects' },
  // { to: '/contact', label: 'Contact' },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <a
          href="#"
          className="text-lg font-medium text-text-primary tracking-tight"
        >
          nethangabrielb
        </a>

        <div className="flex items-center gap-1">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className="hover:text-primary transition-colors"
            >
              {label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}
