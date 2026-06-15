import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Globe, ChevronRight } from 'lucide-react';
import { teamMembers, galleryImages, milestones } from '../data/teamData';
import { useTheme } from '../context/ThemeContext';
import { useCounter } from '../hooks/useCounter';

const StatItem = ({ value, suffix, label, delay }) => {
  const { count, ref } = useCounter(value, 1800);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="text-center"
    >
      <div className="font-heading text-4xl sm:text-5xl font-bold text-[#D62828]">{count}{suffix}</div>
      <div className="text-sm font-medium mt-1">{label}</div>
    </motion.div>
  );
};

const About = () => {
  const { isDark } = useTheme();
  const [lightboxImg, setLightboxImg] = useState(null);

  useEffect(() => {
    document.title = 'About Us — Bella Cucina';
  }, []);

  useEffect(() => {
    const close = (e) => { if (e.key === 'Escape') setLightboxImg(null); };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, []);

  return (
    <div className={isDark ? 'bg-[#1D1D1D] text-white' : 'bg-[#FFF8F0] text-[#1D1D1D]'}>
      {/* Hero */}
      <div className="relative h-72 sm:h-96 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80"
          alt="About hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pt-16">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-[#FCBF49] font-semibold text-sm tracking-widest uppercase mb-2">
            ✦ Our Story ✦
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-heading text-4xl sm:text-5xl font-bold text-white mb-3">
            About <span className="text-[#FCBF49]">Bella Cucina</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-white/70 text-sm max-w-md">
            A story of passion, flavor, and the relentless pursuit of culinary excellence.
          </motion.p>
        </div>
      </div>

      {/* Intro + Mission */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <span className="inline-block text-[#D62828] font-semibold text-sm tracking-widest uppercase mb-3">✦ Who We Are ✦</span>
            <h2 className="font-heading text-4xl font-bold mb-5">
              A Passion for <span className="text-gradient">Exceptional Food</span>
            </h2>
            <p className={`text-base leading-relaxed mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Founded in 2010 by Chef Marco Rossi, Bella Cucina began as a small 12-seat bistro with one simple dream: to create food that tells a story. Inspired by his Italian grandmother's recipes and elevated by years of Michelin-starred training, Marco built something truly special.
            </p>
            <p className={`text-base leading-relaxed mb-6 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Today, Bella Cucina is a celebrated institution — a place where Italian tradition meets bold American flavors, where every plate is a work of art, and where every guest is treated like family.
            </p>
            <div className="grid grid-cols-2 gap-5">
              <div className={`p-5 rounded-2xl ${isDark ? 'bg-white/5 border border-white/10' : 'bg-white shadow-md border border-gray-100'}`}>
                <h3 className="font-heading font-bold text-lg mb-2 text-[#D62828]">Our Mission</h3>
                <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  To deliver extraordinary dining experiences through exceptional food, warm hospitality, and a commitment to quality in everything we do.
                </p>
              </div>
              <div className={`p-5 rounded-2xl ${isDark ? 'bg-white/5 border border-white/10' : 'bg-white shadow-md border border-gray-100'}`}>
                <h3 className="font-heading font-bold text-lg mb-2 text-[#F77F00]">Our Vision</h3>
                <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  To be the most beloved restaurant in the city — a gathering place where memories are made, traditions are honored, and culinary boundaries are pushed.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative">
            <div className="grid grid-cols-2 gap-3">
              <img src="https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400&q=80" alt="Chef cooking" className="rounded-2xl h-60 w-full object-cover shadow-lg" />
              <img src="https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=400&q=80" alt="Bar" className="rounded-2xl h-60 w-full object-cover shadow-lg mt-8" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-gradient-to-br from-[#D62828] to-[#F77F00] rounded-2xl p-4 shadow-xl">
              <p className="font-heading text-white font-bold text-2xl">15+</p>
              <p className="text-white/80 text-xs">Years of Excellence</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className={`py-16 ${isDark ? 'bg-[#111111]' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            <StatItem value={500} suffix="+" label="Happy Guests Daily" delay={0} />
            <StatItem value={50} suffix="+" label="Menu Items" delay={0.1} />
            <StatItem value={15} suffix="+" label="Years Experience" delay={0.2} />
            <StatItem value={12} suffix="" label="Awards Won" delay={0.3} />
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <span className="inline-block text-[#D62828] font-semibold text-sm tracking-widest uppercase mb-3">✦ Our Journey ✦</span>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold">
              Restaurant <span className="text-gradient">Timeline</span>
            </h2>
          </motion.div>

          <div className="relative">
            {/* Center line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#D62828] to-[#F77F00] -translate-x-1/2 hidden md:block" />

            <div className="space-y-8">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`relative flex items-center gap-6 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`md:w-[46%] ${i % 2 === 0 ? 'md:text-right md:pr-10' : 'md:text-left md:pl-10'}`}>
                    <div className={`p-5 rounded-2xl ${isDark ? 'bg-[#2a2a2a] border border-white/10' : 'bg-white shadow-md border border-gray-100'}`}>
                      <span className="font-heading text-2xl font-bold text-[#D62828]">{m.year}</span>
                      <h3 className={`font-heading font-bold text-lg mt-1 mb-2 ${isDark ? 'text-white' : 'text-[#1D1D1D]'}`}>{m.title}</h3>
                      <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{m.description}</p>
                    </div>
                  </div>
                  {/* Dot */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-br from-[#D62828] to-[#F77F00] items-center justify-center z-10 shadow-lg">
                    <ChevronRight className="w-4 h-4 text-white" />
                  </div>
                  <div className="md:w-[46%]" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className={`section-padding ${isDark ? 'bg-[#111111]' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <span className="inline-block text-[#D62828] font-semibold text-sm tracking-widest uppercase mb-3">✦ Our People ✦</span>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold">
              Meet the <span className="text-gradient">Team</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className={`rounded-2xl overflow-hidden text-center group ${isDark ? 'bg-[#1D1D1D] border border-white/10' : 'bg-[#FFF8F0] border border-gray-100 shadow-md'}`}
              >
                <div className="relative h-56 overflow-hidden">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a href={member.social.instagram} className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-[#D62828] transition-colors">
                      <Globe className="w-3.5 h-3.5" />
                    </a>
                    <a href={member.social.twitter} className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-[#D62828] transition-colors">
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className={`font-heading font-bold text-lg mb-1 ${isDark ? 'text-white' : 'text-[#1D1D1D]'}`}>{member.name}</h3>
                  <p className="text-[#D62828] text-sm font-semibold mb-2">{member.role}</p>
                  <p className={`text-xs leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <span className="inline-block text-[#D62828] font-semibold text-sm tracking-widest uppercase mb-3">✦ Gallery ✦</span>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold">
              Our <span className="text-gradient">Moments</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {galleryImages.map((img, i) => (
              <motion.div
                key={img.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ scale: 1.02 }}
                onClick={() => setLightboxImg(img)}
                className={`relative overflow-hidden rounded-2xl cursor-pointer group ${i === 0 || i === 5 ? 'md:col-span-2 md:row-span-2' : ''}`}
                style={{ aspectRatio: i === 0 || i === 5 ? '4/3' : '1/1' }}
              >
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity glass px-3 py-1 rounded-full">
                    {img.alt}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightboxImg(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={lightboxImg.src} alt={lightboxImg.alt} className="w-full rounded-2xl object-contain max-h-[80vh]" />
              <button
                onClick={() => setLightboxImg(null)}
                className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-white text-gray-800 flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <p className="text-center text-white/70 text-sm mt-3">{lightboxImg.alt} · {lightboxImg.category}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default About;
