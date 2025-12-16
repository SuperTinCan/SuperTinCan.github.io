import { Outlet, Route, Routes, Link, NavLink, useLocation } from 'react-router-dom'
import { useEffect, useMemo } from 'react'
import { Button } from './components/ui/button'
import { Badge } from './components/ui/badge'
import Home from './pages/Home'
import Projects from './pages/Projects'

function ScrollToHash() {
  const location = useLocation()

  useEffect(() => {
    // Skip auto-scroll when clicking "About" on home; allow other hashes (e.g., #contact) to scroll.
    if (location.pathname === '/' && location.hash === '#about') {
      return
    }

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
    <header className="sticky top-0 z-20 bg-slate-950/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-5">
        <Link to="/" className="flex items-center gap-3">
          <Badge variant="secondary" className="border-emerald-500/40 bg-emerald-400/10 text-emerald-200">
            Artin Seyrafi
          </Badge>
          <span className="text-xs uppercase tracking-[0.35em] text-slate-400">Builder</span>
        </Link>

        <div className="flex items-center gap-2 rounded-full border border-slate-800/70 bg-slate-900/70 px-2 py-1">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                [
                  'rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition-colors duration-200 text-slate-400 hover:text-emerald-300',
                  isActive && 'bg-emerald-400/10 text-emerald-200',
                ]
                  .filter(Boolean)
                  .join(' ')
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" asChild className="border-emerald-500/40 bg-slate-900/70 text-emerald-200">
            <a href="/resume.pdf" download>
              Resume
            </a>
          </Button>
          <Button size="sm" asChild className="bg-gradient-to-r from-emerald-400 to-sky-400 text-slate-50 shadow-emerald-500/30 hover:shadow-lg hover:-translate-y-0.5">
            <Link to="/projects">View Work</Link>
          </Button>
        </div>
      </div>
    </header>
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
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,#1d2745_0,transparent_35%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,#11243f_0,transparent_28%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_90%,#0b1428_0,transparent_30%)]" />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(140deg,#050d1a_0%,#091327_35%,#0d1f3a_100%)]" />
      <div className="absolute inset-x-10 top-6 h-48 rounded-full bg-gradient-to-r from-emerald-500/20 via-cyan-400/20 to-sky-500/20 blur-3xl" />
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
