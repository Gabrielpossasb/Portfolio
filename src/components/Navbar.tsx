import { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { path: '/', label: 'Home' },
    { path: '/sobre', label: 'Sobre' },
    { path: '/curriculo', label: 'Currículo' },
    { path: '/contato', label: 'Contato' },
    { path: '/ajuda', label: 'Ajuda' }
  ]

  return (
    <nav className="sticky top-0 z-50 h-16 bg-bg/90 backdrop-blur-md border-b border-border flex items-center justify-between px-[clamp(20px,6vw,80px)]">
      <div className="font-sora text-[1.05rem] font-bold text-text">
        GP<span className="text-accent-light">.</span>
      </div>

      {/* Desktop Links */}
      <ul className="hidden md:flex gap-1 list-none">
        {links.map((link) => (
          <li key={link.path}>
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                `px-[14px] py-[7px] rounded-lg text-sm font-medium transition-all duration-180 ${
                  isActive
                    ? 'text-accent-light bg-accent-dim'
                    : 'text-text-muted hover:text-text hover:bg-surface-2'
                }`
              }
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Hamburger Button for Mobile */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden flex flex-col justify-between w-6 h-4 cursor-pointer text-text-muted hover:text-text focus:outline-none"
        aria-label="Toggle menu"
      >
        <span className={`h-0.5 bg-current rounded-full transition-transform duration-300 w-full ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
        <span className={`h-0.5 bg-current rounded-full transition-opacity duration-300 w-full ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
        <span className={`h-0.5 bg-current rounded-full transition-transform duration-300 w-full ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-bg/95 backdrop-blur-lg border-b border-border flex flex-col items-center py-6 gap-4 md:hidden shadow-xl animate-fade-in">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `px-6 py-2 rounded-lg text-base font-medium transition-all duration-180 w-4/5 text-center ${
                  isActive
                    ? 'text-accent-light bg-accent-dim'
                    : 'text-text-muted hover:text-text hover:bg-surface-2'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  )
}
