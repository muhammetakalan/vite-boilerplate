import { BrowserRouter, Route, Routes } from 'react-router-dom'

import RootLayout from './layouts/root-layout'
import HomePage from './pages/home'
import NotFound from './pages/not-found'

export default function App() {
  const routes = [
    { path: '/', element: <HomePage /> },
    { path: '*', element: <NotFound /> }
  ]

  return (
    <RootLayout>
      <BrowserRouter>
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </BrowserRouter>
    </RootLayout>
  )
}
