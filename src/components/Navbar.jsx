import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Phone, UtensilsCrossed } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/menu', label: 'Menu' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const isHome = location.pathname === '/';

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || !isHome
          ? isDark
            ? 'bg-[#1D1D1D]/95 backdrop-blur-md shadow-lg shadow-black/20'
            : 'bg-white/95 backdrop-blur-md shadow-lg shadow-black/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 bg-gradient-to-br from-[#D62828] to-[#F77F00] rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-[#D62828]/40 transition-all duration-300 group-hover:scale-110">
              <UtensilsCrossed className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-heading font-bold text-xl bg-gradient-to-r from-[#D62828] to-[#F77F00] bg-clip-text text-transparent">
                Bella
              </span>
              <span className={`text-xs font-semibold tracking-widest uppercase transition-colors duration-300 ${
                scrolled || !isHome ? (isDark ? 'text-gray-400' : 'text-gray-500') : 'text-white/80'
              }`}>
                Cucina
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(({ path, label }) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-[#D62828] to-[#F77F00] text-white shadow-md shadow-[#D62828]/30'
                      : scrolled || !isHome
                      ? isDark
                        ? 'text-gray-300 hover:text-white hover:bg-white/10'
                        : 'text-gray-700 hover:text-[#D62828] hover:bg-[#D62828]/5'
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>

          {/* Right Side */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+15551234567"
              className={`flex items-center gap-2 text-sm font-medium transition-colors duration-300 ${
                scrolled || !isHome
                  ? isDark ? 'text-gray-300 hover:text-[#FCBF49]' : 'text-gray-600 hover:text-[#D62828]'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              <Phone className="w-4 h-4" />
              <span>(555) 123-4567</span>
            </a>
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-all duration-300 ${
                scrolled || !isHome
                  ? isDark ? 'text-gray-400 hover:text-white hover:bg-white/10' : 'text-gray-600 hover:text-[#D62828] hover:bg-[#D62828]/10'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <Link
              to="/contact"
              className="btn-primary text-sm px-5 py-2.5"
            >
              Reserve Table
            </Link>
          </div>

          {/* Mobile Right */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full ${scrolled || !isHome ? (isDark ? 'text-gray-300' : 'text-gray-600') : 'text-white'}`}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-full ${scrolled || !isHome ? (isDark ? 'text-white' : 'text-gray-700') : 'text-white'}`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`md:hidden overflow-hidden ${isDark ? 'bg-[#1D1D1D] border-t border-white/10' : 'bg-white border-t border-gray-100'}`}
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map(({ path, label }) => (
                <NavLink
                  key={path}
                  to={path}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-xl font-semibold text-sm transition-all ${
                      isActive
                        ? 'bg-gradient-to-r from-[#D62828] to-[#F77F00] text-white'
                        : isDark ? 'text-gray-300 hover:bg-white/10' : 'text-gray-700 hover:bg-gray-50'
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
              <Link
                to="/contact"
                className="btn-primary text-sm mt-2 text-center"
              >
                Reserve a Table
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
