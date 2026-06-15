import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import { useTheme } from '../context/ThemeContext';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const MainLayout = ({ children }) => {
  const { pathname } = useLocation();
  const { isDark } = useTheme();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return (
    <div className={`min-h-screen flex flex-col ${isDark ? 'bg-[#1D1D1D] text-white' : 'bg-[#FFF8F0] text-[#1D1D1D]'} transition-colors duration-300`}>
      <Navbar />
      <motion.main
        key={pathname}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        className="flex-1"
      >
        {children}
      </motion.main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default MainLayout;
