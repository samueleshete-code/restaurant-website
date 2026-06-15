import { motion } from 'framer-motion';
import { UtensilsCrossed } from 'lucide-react';

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="fixed inset-0 z-[100] bg-[#1D1D1D] flex flex-col items-center justify-center"
    >
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.6, ease: 'backOut' }}
        className="w-20 h-20 bg-gradient-to-br from-[#D62828] to-[#F77F00] rounded-2xl flex items-center justify-center mb-6 shadow-2xl shadow-[#D62828]/50"
      >
        <UtensilsCrossed className="w-10 h-10 text-white" />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="font-heading text-4xl font-bold bg-gradient-to-r from-[#D62828] to-[#F77F00] bg-clip-text text-transparent mb-2"
      >
        Bella Cucina
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-gray-400 text-sm tracking-widest uppercase mb-8"
      >
        Fine Dining Experience
      </motion.p>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.6, duration: 1.2, ease: 'easeInOut' }}
        className="w-48 h-1 bg-gradient-to-r from-[#D62828] to-[#F77F00] rounded-full origin-left"
      />
    </motion.div>
  );
};

export default LoadingScreen;
