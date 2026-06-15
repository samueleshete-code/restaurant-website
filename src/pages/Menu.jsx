import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Star, X, ShoppingBag } from 'lucide-react';
import { menuItems, categories } from '../data/menuData';
import { useTheme } from '../context/ThemeContext';

const badgeColors = {
  Bestseller: 'bg-[#D62828] text-white',
  Popular: 'bg-[#F77F00] text-white',
  'Chef\'s Pick': 'bg-purple-600 text-white',
  'Must Try': 'bg-green-600 text-white',
  Premium: 'bg-amber-600 text-white',
  Signature: 'bg-blue-600 text-white',
  New: 'bg-pink-600 text-white',
  Spicy: 'bg-red-500 text-white',
  'Fan Fave': 'bg-teal-600 text-white',
  Classic: 'bg-gray-600 text-white',
  French: 'bg-indigo-600 text-white',
  Italian: 'bg-green-700 text-white',
  Refreshing: 'bg-cyan-600 text-white',
};

const MenuCard = ({ item, isDark }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -6 }}
      className={`rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group ${
        isDark ? 'bg-[#2a2a2a] shadow-black/30' : 'bg-white shadow-gray-200/80'
      }`}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {item.badge && (
          <span className={`absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full ${badgeColors[item.badge] || 'bg-gray-600 text-white'}`}>
            {item.badge}
          </span>
        )}

        <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full">
          <Star className="w-3 h-3 text-[#FCBF49] fill-[#FCBF49]" />
          <span className="text-white text-xs font-semibold">{item.rating}</span>
          <span className="text-white/60 text-xs">({item.reviews})</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-1.5">
          <h3 className={`font-heading font-bold text-base leading-tight ${isDark ? 'text-white' : 'text-[#1D1D1D]'}`}>
            {item.name}
          </h3>
          <span className="font-heading font-bold text-lg text-[#D62828] whitespace-nowrap">
            ${item.price.toFixed(2)}
          </span>
        </div>

        <span className={`inline-block text-xs font-medium px-2 py-0.5 rounded-full mb-2 ${
          isDark ? 'bg-white/10 text-gray-400' : 'bg-gray-100 text-gray-500'
        }`}>
          {item.category}
        </span>

        <p className={`text-sm leading-relaxed line-clamp-2 mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          {item.description}
        </p>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          className="w-full btn-primary text-sm py-2.5 flex items-center justify-center gap-2"
        >
          <ShoppingBag className="w-4 h-4" />
          Add to Order
        </motion.button>
      </div>
    </motion.div>
  );
};

const Menu = () => {
  const { isDark } = useTheme();
  const [activeCategory, setActiveCategory] = useState('All');
  const [search, setSearch] = useState('');

  useEffect(() => {
    document.title = 'Menu — Bella Cucina';
  }, []);

  const filtered = useMemo(() => {
    return menuItems.filter((item) => {
      const matchCat = activeCategory === 'All' || item.category === activeCategory;
      const matchSearch =
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.description.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [activeCategory, search]);

  return (
    <div className={`min-h-screen ${isDark ? 'bg-[#1D1D1D]' : 'bg-[#FFF8F0]'}`}>
      {/* Hero Banner */}
      <div className="relative h-64 sm:h-80 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920&q=80"
          alt="Menu hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pt-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#FCBF49] font-semibold text-sm tracking-widest uppercase mb-2"
          >
            ✦ Our Menu ✦
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl font-bold text-white mb-3"
          >
            Explore Our <span className="text-[#FCBF49]">Dishes</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white/70 text-sm max-w-md"
          >
            From hearty mains to divine desserts — every dish crafted with passion.
          </motion.p>
        </div>
      </div>

      {/* Sticky Filter Bar */}
      <div className={`sticky top-16 sm:top-20 z-30 shadow-sm ${isDark ? 'bg-[#1D1D1D]/95 backdrop-blur-md border-b border-white/10' : 'bg-[#FFF8F0]/95 backdrop-blur-md border-b border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search dishes..."
                className={`w-full pl-10 pr-10 py-2.5 rounded-full text-sm focus:outline-none transition-colors ${
                  isDark
                    ? 'bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:border-[#D62828]'
                    : 'bg-white border border-gray-200 text-gray-800 placeholder-gray-400 focus:border-[#D62828] shadow-sm'
                }`}
              />
              {search && (
                <button
                  onClick={() => setSearch('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Category Pills */}
            <div className="flex gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none flex-nowrap">
              {categories.map((cat) => (
                <motion.button
                  key={cat}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveCategory(cat)}
                  className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                    activeCategory === cat
                      ? 'bg-gradient-to-r from-[#D62828] to-[#F77F00] text-white shadow-md'
                      : isDark
                      ? 'bg-white/10 text-gray-300 hover:bg-white/20'
                      : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {cat}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        {/* Result count */}
        <div className="flex items-center justify-between mb-6">
          <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Showing <span className="font-semibold text-[#D62828]">{filtered.length}</span> item{filtered.length !== 1 ? 's' : ''}
            {activeCategory !== 'All' && (
              <span> in <span className="font-semibold">{activeCategory}</span></span>
            )}
            {search && (
              <span> for "<span className="font-semibold">{search}</span>"</span>
            )}
          </p>
        </div>

        <AnimatePresence mode="popLayout">
          {filtered.length > 0 ? (
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filtered.map((item) => (
                <MenuCard key={item.id} item={item} isDark={isDark} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className={`font-heading text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-[#1D1D1D]'}`}>
                No dishes found
              </h3>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                Try adjusting your search or filter criteria.
              </p>
              <button
                onClick={() => { setSearch(''); setActiveCategory('All'); }}
                className="btn-primary mt-4 text-sm"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Menu;
