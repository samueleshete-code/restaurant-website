import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown, Star, Award } from 'lucide-react';

const Hero = () => {
  const scrollDown = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=85"
          alt="Restaurant Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* Floating Particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-[#FCBF49]/30"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + (i % 3) * 20}%`,
          }}
          animate={{ y: [-15, 15, -15], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 3 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-28 pb-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6"
          >
            <Award className="w-4 h-4 text-[#FCBF49]" />
            <span className="text-white text-sm font-semibold">Michelin Star Restaurant 2024</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
          >
            Where Every Bite Tells A{' '}
            <span className="bg-gradient-to-r from-[#F77F00] to-[#FCBF49] bg-clip-text text-transparent">
              Story
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="text-white/80 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl"
          >
            Experience the finest Italian-American fusion cuisine crafted by our world-class chefs using only the freshest locally sourced ingredients.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/menu" className="btn-primary inline-block text-base px-8 py-3.5">
                Explore Menu
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                className="inline-block px-8 py-3.5 rounded-full font-semibold text-base border-2 border-white/60 text-white hover:bg-white/10 transition-all duration-300"
              >
                Reserve a Table
              </Link>
            </motion.div>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75 }}
            className="flex flex-wrap gap-6 sm:gap-10"
          >
            {[
              { value: '500+', label: 'Happy Guests Daily' },
              { value: '15+', label: 'Years of Excellence' },
              { value: '1', label: 'Michelin Star' },
            ].map(({ value, label }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="w-0.5 h-10 bg-gradient-to-b from-[#D62828] to-[#F77F00] rounded-full" />
                <div>
                  <div className="font-heading text-2xl font-bold text-white">{value}</div>
                  <div className="text-white/60 text-xs">{label}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Rating Card */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 glass rounded-2xl p-5 max-w-[200px]"
        >
          <div className="flex items-center gap-1 mb-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-[#FCBF49] fill-[#FCBF49]" />
            ))}
          </div>
          <p className="text-white text-sm font-bold mb-0.5">4.9/5.0 Rating</p>
          <p className="text-white/60 text-xs">Based on 2,400+ reviews</p>
          <div className="mt-3 flex -space-x-2">
            {[
              'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&q=80',
              'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&q=80',
              'https://images.unsplash.com/photo-1494790108755-2616b612b047?w=40&q=80',
            ].map((src, i) => (
              <img key={i} src={src} alt="Reviewer" className="w-8 h-8 rounded-full border-2 border-white/20 object-cover" />
            ))}
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#D62828] to-[#F77F00] border-2 border-white/20 flex items-center justify-center text-white text-xs font-bold">
              +
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1.2, duration: 0.5 }, y: { repeat: Infinity, duration: 2, ease: 'easeInOut' } }}
        onClick={scrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors"
        aria-label="Scroll down"
      >
        <span className="text-xs tracking-widest uppercase">Scroll Down</span>
        <ChevronDown className="w-5 h-5" />
      </motion.button>
    </section>
  );
};

export default Hero;
