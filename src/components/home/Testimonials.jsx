import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '../../data/homeData';
import { useTheme } from '../../context/ThemeContext';

const Testimonials = () => {
  const { isDark } = useTheme();
  const [active, setActive] = useState(0);

  const prev = () => setActive(i => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setActive(i => (i === testimonials.length - 1 ? 0 : i + 1));

  return (
    <section className={`section-padding ${isDark ? 'bg-[#1D1D1D]' : 'bg-[#FFF8F0]'}`}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block text-[#D62828] font-semibold text-sm tracking-widest uppercase mb-3">
            ✦ Testimonials ✦
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold mb-4">
            What Our Guests <span className="text-gradient">Say</span>
          </h2>
        </motion.div>

        {/* Main testimonial */}
        <div className="grid lg:grid-cols-5 gap-10 items-center">
          {/* Avatars sidebar */}
          <div className="hidden lg:flex flex-col gap-4 col-span-1">
            {testimonials.map((t, i) => (
              <motion.button
                key={t.id}
                onClick={() => setActive(i)}
                whileHover={{ scale: 1.05 }}
                className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-300 ${
                  i === active
                    ? 'bg-gradient-to-r from-[#D62828] to-[#F77F00] shadow-lg'
                    : isDark ? 'bg-white/5 hover:bg-white/10' : 'bg-white hover:bg-gray-50'
                }`}
              >
                <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover border-2 border-white/30" />
                <div className="text-left">
                  <p className={`font-semibold text-xs ${i === active ? 'text-white' : isDark ? 'text-gray-200' : 'text-gray-800'}`}>
                    {t.name}
                  </p>
                  <p className={`text-xs ${i === active ? 'text-white/70' : 'text-gray-500'}`}>{t.role}</p>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Active testimonial */}
          <div className="lg:col-span-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
                className={`relative p-8 sm:p-10 rounded-3xl ${
                  isDark ? 'bg-white/5 border border-white/10' : 'bg-white shadow-xl shadow-gray-200/60'
                }`}
              >
                <Quote className="absolute top-6 right-8 w-16 h-16 text-[#D62828]/10 fill-[#D62828]/10" />

                <div className="flex items-center gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#FCBF49] fill-[#FCBF49]" />
                  ))}
                </div>

                <p className={`text-lg sm:text-xl leading-relaxed mb-8 font-medium ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
                  "{testimonials[active].text}"
                </p>

                <div className="flex items-center gap-4">
                  <img
                    src={testimonials[active].avatar}
                    alt={testimonials[active].name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-[#D62828]/30"
                  />
                  <div>
                    <p className={`font-heading font-bold text-lg ${isDark ? 'text-white' : 'text-[#1D1D1D]'}`}>
                      {testimonials[active].name}
                    </p>
                    <p className="text-[#D62828] text-sm font-medium">{testimonials[active].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-6">
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`rounded-full transition-all duration-300 ${
                      i === active ? 'w-8 h-2.5 bg-[#D62828]' : 'w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={prev}
                  className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-colors ${
                    isDark ? 'border-white/20 text-white hover:border-[#D62828] hover:text-[#D62828]' : 'border-gray-200 text-gray-600 hover:border-[#D62828] hover:text-[#D62828]'
                  }`}
                >
                  <ChevronLeft className="w-4 h-4" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={next}
                  className="w-10 h-10 rounded-full bg-gradient-to-r from-[#D62828] to-[#F77F00] text-white flex items-center justify-center"
                >
                  <ChevronRight className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
