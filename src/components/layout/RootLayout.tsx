import { Outlet } from 'react-router-dom'

import { Footer } from '../sections/Footer'
import { Navbar } from '../sections/Navbar'

export function RootLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground antialiased">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
