const links = [
  { to: "#", label: "Home" },
  { to: "#techstack", label: "Skills" },
  { to: "#experience", label: "Experience" },
  { to: "#projects", label: "Projects" },
  { to: "#contact", label: "Contact" },
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

        <div className="flex items-center gap-4">
          {links.map(({ to, label }) => (
            <a
              key={to}
              href={to}
              className="hover:text-primary transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
