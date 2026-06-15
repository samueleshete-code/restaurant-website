import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Star, ArrowRight } from 'lucide-react';
import { featuredDishes } from '../../data/homeData';
import { useTheme } from '../../context/ThemeContext';

const FeaturedDishes = () => {
  const { isDark } = useTheme();

  return (
    <section className={`section-padding ${isDark ? 'bg-[#111111]' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-[#D62828] font-semibold text-sm tracking-widest uppercase mb-3">
            ✦ Our Specialties ✦
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Dishes</span>
          </h2>
          <p className={`max-w-xl mx-auto text-base leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Hand-selected by our Executive Chef Marco Rossi — dishes that define the Bella Cucina experience.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {featuredDishes.map((dish, i) => (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -8 }}
              className={`rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-400 group ${
                isDark ? 'bg-[#1D1D1D] shadow-black/30' : 'bg-white shadow-gray-200/80'
              }`}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                {dish.badge && (
                  <span className="absolute top-3 left-3 bg-gradient-to-r from-[#D62828] to-[#F77F00] text-white text-xs font-bold px-3 py-1 rounded-full">
                    {dish.badge}
                  </span>
                )}
                <div className="absolute bottom-3 right-3 flex items-center gap-1 glass px-2 py-1 rounded-full">
                  <Star className="w-3 h-3 text-[#FCBF49] fill-[#FCBF49]" />
                  <span className="text-white text-xs font-semibold">4.9</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className={`font-heading font-bold text-xl mb-2 ${isDark ? 'text-white' : 'text-[#1D1D1D]'}`}>
                  {dish.name}
                </h3>
                <p className={`text-sm leading-relaxed mb-4 line-clamp-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {dish.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-heading text-2xl font-bold text-[#D62828]">{dish.price}</span>
                  <Link
                    to="/menu"
                    className="flex items-center gap-1.5 text-sm font-semibold text-[#D62828] hover:gap-3 transition-all duration-300 group/link"
                  >
                    Order Now
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link to="/menu" className="btn-primary inline-block">
            View Full Menu
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedDishes;
