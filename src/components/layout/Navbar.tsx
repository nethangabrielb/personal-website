import { NavLink } from 'react-router-dom'

import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { cn } from '@/lib/utils'

const links = [
  { to: '/', label: 'Home' },
  // { to: '/projects', label: 'Projects' },
  // { to: '/contact', label: 'Contact' },
]

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <NavLink to="/" className="text-lg font-semibold tracking-tight">
          YourName
        </NavLink>

        <div className="flex items-center gap-1">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                cn(
                  'rounded-md px-3 py-1.5 text-sm transition-colors',
                  isActive
                    ? 'bg-muted font-medium'
                    : 'text-muted-foreground hover:text-foreground'
                )
              }
            >
              {label}
            </NavLink>
          ))}
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
