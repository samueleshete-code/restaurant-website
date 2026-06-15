import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Globe, Share2, Rss, ExternalLink, UtensilsCrossed } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const { isDark } = useTheme();

  return (
    <footer className={`${isDark ? 'bg-[#111111]' : 'bg-[#1D1D1D]'} text-white`}>
      {/* Top Wave */}
      <div className="w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none" style={{ height: '40px' }}>
          <path
            d="M0,30 C360,60 1080,0 1440,30 L1440,0 L0,0 Z"
            fill={isDark ? '#FFF8F0' : '#FFF8F0'}
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#D62828] to-[#F77F00] rounded-xl flex items-center justify-center">
                <UtensilsCrossed className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-heading font-bold text-xl bg-gradient-to-r from-[#D62828] to-[#F77F00] bg-clip-text text-transparent">Bella Cucina</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              A Michelin-starred culinary experience where tradition meets innovation. Every dish tells a story of passion, quality, and love.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Globe, href: '#', label: 'Instagram' },
                { Icon: Share2, href: '#', label: 'Facebook' },
                { Icon: Rss, href: '#', label: 'Twitter' },
                { Icon: ExternalLink, href: '#', label: 'YouTube' },
              ].map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  whileHover={{ scale: 1.15, y: -2 }}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-gradient-to-br hover:from-[#D62828] hover:to-[#F77F00] flex items-center justify-center transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-5 text-white">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { to: '/', label: 'Home' },
                { to: '/menu', label: 'Our Menu' },
                { to: '/about', label: 'About Us' },
                { to: '/contact', label: 'Contact' },
                { to: '/contact#reservation', label: 'Reserve a Table' },
              ].map(({ to, label }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="text-gray-400 hover:text-[#FCBF49] text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D62828] group-hover:scale-125 transition-transform" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-5 text-white">Contact Us</h4>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin className="w-4 h-4 text-[#D62828] mt-0.5 shrink-0" />
                <span>123 Culinary Avenue, <br />Flavor District, NY 10001</span>
              </li>
              <li>
                <a href="tel:+15551234567" className="flex items-center gap-3 text-sm text-gray-400 hover:text-[#FCBF49] transition-colors">
                  <Phone className="w-4 h-4 text-[#D62828] shrink-0" />
                  (555) 123-4567
                </a>
              </li>
              <li>
                <a href="mailto:hello@bellacucina.com" className="flex items-center gap-3 text-sm text-gray-400 hover:text-[#FCBF49] transition-colors">
                  <Mail className="w-4 h-4 text-[#D62828] shrink-0" />
                  hello@bellacucina.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <Clock className="w-4 h-4 text-[#D62828] mt-0.5 shrink-0" />
                <span>Mon–Thu: 11am–10pm<br />Fri–Sun: 11am–11pm</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-5 text-white">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">Subscribe for exclusive deals, new menu items, and culinary events.</p>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-white/10 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#D62828] transition-colors"
                required
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="btn-primary text-sm py-2.5"
              >
                Subscribe Now
              </motion.button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-gray-500">
          <p>© 2024 Bella Cucina. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
