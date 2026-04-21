import { Route,Routes } from 'react-router-dom'

import { RootLayout } from '@/components/layout/RootLayout'
import { HomePage } from '@/pages/HomePage'
import { NotFoundPage } from '@/pages/NotFoundPage'

export default function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<HomePage />} />
        {/* Add more routes here */}
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
