import { Outlet, Route, Routes, Link, NavLink, useLocation } from 'react-router-dom'
import { useEffect, useMemo } from 'react'
import Home from './pages/Home'
import Projects from './pages/Projects'

function ScrollToHash() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const hashId = location.hash.replace('#', '')
      const section = document.getElementById(hashId)

      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
    }

    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location])

  return null
}

function Navigation() {
  const navItems = useMemo(
    () => [
      { label: 'About', to: '/#about' },
      { label: 'Projects', to: '/projects' },
      { label: 'Contact', to: '/#contact' },
    ],
    [],
  )

  return (
    <nav className="flex flex-wrap justify-end gap-6 px-6 py-6 text-xs font-semibold uppercase tracking-[0.22em] text-slate-400 sm:text-sm">
      {navItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) =>
            [
              'transition-colors duration-200 hover:text-emerald-300',
              isActive && 'text-emerald-300',
            ]
              .filter(Boolean)
              .join(' ')
          }
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  )
}

function Footer() {
  return (
    <footer className="mt-16 bg-slate-900/40 px-6 py-10 text-center text-sm text-slate-500 backdrop-blur">
      <p>&copy; 2025 Artin Seyrafi. All rights reserved.</p>
    </footer>
  )
}

function Layout() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-200">
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#1f2a48_0,transparent_35%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,#0f172a_0,transparent_30%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_90%,#0b1224_0,transparent_25%)]" />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(135deg,#050d1a_0%,#0a192f_100%)]" />
      <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(#1f2d44_1px,transparent_1px)] [background-size:80px_80px]" />

      <div className="relative z-10 flex min-h-screen flex-col">
        <Navigation />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  )
}

function App() {
  return (
    <>
      <ScrollToHash />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Route>
        <Route
          path="*"
          element={
            <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-slate-950 text-center text-slate-300">
              <p className="text-2xl font-semibold">Page not found</p>
              <Link
                to="/"
                className="rounded-full border border-emerald-400 px-5 py-2 text-sm font-semibold text-emerald-300 transition hover:-translate-y-0.5 hover:bg-emerald-400 hover:text-slate-900 hover:shadow-emerald-400/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"
              >
                Go back home
              </Link>
            </div>
          }
        />
      </Routes>
    </>
  )
}

export default App
