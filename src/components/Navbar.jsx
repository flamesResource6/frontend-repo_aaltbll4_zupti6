import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur-xl bg-white/60 dark:bg-black/40 border border-white/20 dark:border-white/10 shadow-md rounded-2xl">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#home" className="text-xl font-bold tracking-tight bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
              MyPortfolio
            </a>
            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-sm font-medium text-slate-700/80 hover:text-slate-900 dark:text-slate-200/80 dark:hover:text-white transition-colors">
                  {item.label}
                </a>
              ))}
              <a href="#contact" className="text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-fuchsia-600 px-4 py-2 rounded-full shadow hover:shadow-lg transition-shadow">
                Hire Me
              </a>
            </nav>
            <button className="md:hidden p-2 rounded-lg bg-white/70 dark:bg-white/10" onClick={() => setOpen(!open)} aria-label="Toggle Menu">
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
          {open && (
            <div className="md:hidden px-4 pb-4 space-y-2">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block text-sm font-medium text-slate-700/90 dark:text-slate-200/90">
                  {item.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="inline-block text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-fuchsia-600 px-4 py-2 rounded-full shadow">
                Hire Me
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
