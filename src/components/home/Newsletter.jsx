import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, CheckCircle } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const Newsletter = () => {
  const { isDark } = useTheme();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <section
      className="section-padding relative overflow-hidden"
      style={{
        background: isDark
          ? 'linear-gradient(135deg, #2a1010, #1D1D1D)'
          : 'linear-gradient(135deg, #fff0e0, #FFF8F0)',
      }}
    >
      {/* Decorative Blobs */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-[#D62828]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-[#F77F00]/10 rounded-full blur-3xl" />

      <div className="relative max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-16 h-16 bg-gradient-to-br from-[#D62828] to-[#F77F00] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-[#D62828]/30">
            <Mail className="w-8 h-8 text-white" />
          </div>
          <span className="inline-block text-[#D62828] font-semibold text-sm tracking-widest uppercase mb-3">
            ✦ Stay in the Loop ✦
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold mb-4">
            Get Exclusive <span className="text-gradient">Offers</span>
          </h2>
          <p className={`text-base leading-relaxed mb-10 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Subscribe to our newsletter and be the first to know about seasonal specials, new menu launches, exclusive events, and member-only discounts.
          </p>

          {submitted ? (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="flex flex-col items-center gap-3"
            >
              <CheckCircle className="w-16 h-16 text-green-500" />
              <p className={`font-heading text-2xl font-bold ${isDark ? 'text-white' : 'text-[#1D1D1D]'}`}>
                You're on the list!
              </p>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                Thank you for subscribing. Expect delicious news soon!
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <div className="flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className={`w-full px-5 py-3.5 rounded-full border text-sm focus:outline-none transition-colors ${
                    error ? 'border-red-400' : isDark ? 'border-white/20 bg-white/10 text-white placeholder-gray-500 focus:border-[#D62828]' : 'border-gray-200 bg-white text-gray-800 placeholder-gray-400 focus:border-[#D62828]'
                  }`}
                  required
                />
                {error && <p className="text-red-400 text-xs mt-1 ml-4">{error}</p>}
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="btn-primary whitespace-nowrap text-sm"
              >
                Subscribe Free
              </motion.button>
            </form>
          )}

          <p className={`text-xs mt-4 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
            No spam, ever. Unsubscribe at any time.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
