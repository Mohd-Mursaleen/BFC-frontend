import { useState, useEffect, useMemo, useCallback } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logoImg from '../assets/photo/logo.jpeg'

// Throttle function for scroll events
function throttle(func, wait) {
  let inThrottle
  return function executedFunction(...args) {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), wait)
    }
  }
}

// Updated Menu Items based on tasks.todo
const MENU_ITEMS = [
  { label: 'Plans', href: '/plans' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' }
]

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    const throttledHandleScroll = throttle(handleScroll, 10)

    window.addEventListener('scroll', throttledHandleScroll, { passive: true })
    return () => window.removeEventListener('scroll', throttledHandleScroll)
  }, [])

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [location])

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev)
  }, [])

  const menuItems = useMemo(() => MENU_ITEMS, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50  transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm py-3'
          : 'bg-transparent mt-6 py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center gap-4 group"
        >
          <img 
            src={logoImg} 
            alt="BFC Logo" 
            className="h-12 w-12 md:h-14 md:w-14 rounded-full object-cover shadow-lg group-hover:scale-105 transition-transform duration-300"
          />
          <span className={`text-2xl md:text-3xl font-display font-black tracking-tighter uppercase transition-all drop-shadow-sm ${
            isScrolled 
              ? 'text-gray-900' 
              : 'text-transparent bg-clip-text bg-gradient-to-r from-bfc-yellow via-yellow-200 to-bfc-yellow bg-[length:200%_auto] animate-shine'
          }`}>
            BFC
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              className={`text-sm font-bold uppercase tracking-widest transition-colors hover:text-green-500 ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden text-2xl focus:outline-none transition-colors ${
            isScrolled ? 'text-gray-900' : 'text-white'
          }`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-black/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center transition-all duration-300 ${
            isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
          }`}
        >
          <button
            className="absolute top-8 right-8 text-white text-4xl focus:outline-none"
            onClick={toggleMenu}
          >
            ✕
          </button>
          
          <div className="flex flex-col items-center gap-8">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.href}
                className="text-2xl font-bold text-white uppercase tracking-widest hover:text-green-500 transition-colors"
                onClick={toggleMenu}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
