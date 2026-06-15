import { motion } from 'framer-motion';
import { ChefHat, Leaf, Clock, Heart, Star, Users } from 'lucide-react';
import { whyChooseUs } from '../../data/homeData';
import { useTheme } from '../../context/ThemeContext';

const iconMap = { ChefHat, Leaf, Clock, Heart, Star, Users };

const WhyChooseUs = () => {
  const { isDark } = useTheme();

  return (
    <section
      className="section-padding relative overflow-hidden"
      style={{
        background: isDark
          ? 'linear-gradient(135deg, #1D1D1D 0%, #2a1010 100%)'
          : 'linear-gradient(135deg, #FFF8F0 0%, #fff0e0 100%)',
      }}
    >
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#D62828]/10 to-transparent rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-[#F77F00]/10 to-transparent rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-[#D62828] font-semibold text-sm tracking-widest uppercase mb-3">
              ✦ Why Us ✦
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold mb-6">
              More Than Just{' '}
              <span className="text-gradient">Good Food</span>
            </h2>
            <p className={`text-base leading-relaxed mb-8 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              At Bella Cucina, we believe dining is an experience that engages all your senses. From the moment you walk in to the last bite of dessert, every detail is crafted with care.
            </p>

            {/* Image collage */}
            <div className="grid grid-cols-2 gap-3 max-w-sm">
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=300&q=80"
                alt="Restaurant ambiance"
                className="rounded-2xl h-40 w-full object-cover shadow-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=300&q=80"
                alt="Gourmet food"
                className="rounded-2xl h-40 w-full object-cover shadow-lg mt-6"
              />
            </div>
          </motion.div>

          {/* Right - Grid of features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {whyChooseUs.map((item, i) => {
              const Icon = iconMap[item.icon];
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -4 }}
                  className={`p-5 rounded-2xl transition-all duration-300 ${
                    isDark
                      ? 'bg-white/5 hover:bg-white/10 border border-white/10'
                      : 'bg-white hover:bg-white shadow-md hover:shadow-xl border border-gray-100'
                  }`}
                >
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#D62828] to-[#F77F00] flex items-center justify-center mb-3 shadow-md shadow-[#D62828]/30">
                    {Icon && <Icon className="w-5 h-5 text-white" />}
                  </div>
                  <h3 className={`font-heading font-bold text-base mb-1.5 ${isDark ? 'text-white' : 'text-[#1D1D1D]'}`}>
                    {item.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
