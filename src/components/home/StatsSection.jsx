import { motion } from 'framer-motion';
import { stats } from '../../data/homeData';
import { useCounter } from '../../hooks/useCounter';

const StatItem = ({ value, suffix, label, delay }) => {
  const { count, ref } = useCounter(value, 2000);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="text-center"
    >
      <div className="font-heading text-5xl sm:text-6xl font-bold text-white mb-2">
        {count}{suffix}
      </div>
      <div className="text-white/60 text-sm font-medium uppercase tracking-wider">{label}</div>
    </motion.div>
  );
};

const StatsSection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1920&q=80"
          alt="Restaurant background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#D62828]/90 to-[#1D1D1D]/95" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block text-[#FCBF49] font-semibold text-sm tracking-widest uppercase mb-3">
            ✦ Our Numbers ✦
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white">
            The Bella Cucina <span className="text-[#FCBF49]">Legacy</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {stats.map((stat, i) => (
            <StatItem
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              delay={i * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
