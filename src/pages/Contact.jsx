import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Calendar, Users, ChevronDown } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const inputClass = (isDark, error) =>
  `w-full px-4 py-3 rounded-xl text-sm focus:outline-none transition-colors border ${
    error
      ? 'border-red-400 bg-red-50/5'
      : isDark
      ? 'bg-white/5 border-white/10 text-white placeholder-gray-500 focus:border-[#D62828]'
      : 'bg-white border-gray-200 text-gray-800 placeholder-gray-400 focus:border-[#D62828] shadow-sm'
  }`;

const validate = (form) => {
  const errs = {};
  if (!form.name.trim()) errs.name = 'Name is required.';
  else if (form.name.trim().length < 2) errs.name = 'Name must be at least 2 characters.';
  if (!form.email.trim()) errs.email = 'Email is required.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Please enter a valid email.';
  if (!form.subject.trim()) errs.subject = 'Subject is required.';
  if (!form.message.trim()) errs.message = 'Message is required.';
  else if (form.message.trim().length < 10) errs.message = 'Message must be at least 10 characters.';
  return errs;
};

const Contact = () => {
  const { isDark } = useTheme();
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [reservationForm, setReservationForm] = useState({ name: '', email: '', phone: '', date: '', time: '', guests: '2', notes: '' });
  const [reservationSubmitted, setReservationSubmitted] = useState(false);

  useEffect(() => { document.title = 'Contact Us — Bella Cucina'; }, []);

  const handleContact = (e) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setSubmitted(true);
  };

  const handleReservation = (e) => {
    e.preventDefault();
    setReservationSubmitted(true);
  };

  const update = (field) => (e) => setForm(f => ({ ...f, [field]: e.target.value }));
  const updateRes = (field) => (e) => setReservationForm(f => ({ ...f, [field]: e.target.value }));

  const contactCards = [
    { Icon: MapPin, label: 'Visit Us', value: '123 Culinary Avenue, Flavor District, NY 10001', href: null, gradient: 'from-[#D62828] to-[#F77F00]' },
    { Icon: Phone, label: 'Call Us', value: '(555) 123-4567', href: 'tel:+15551234567', gradient: 'from-[#F77F00] to-[#FCBF49]' },
    { Icon: Mail, label: 'Email Us', value: 'hello@bellacucina.com', href: 'mailto:hello@bellacucina.com', gradient: 'from-purple-600 to-pink-600' },
    { Icon: Clock, label: 'Hours', value: 'Mon–Thu: 11am–10pm • Fri–Sun: 11am–11pm', href: null, gradient: 'from-blue-600 to-cyan-500' },
  ];

  const businessHours = [
    { day: 'Monday – Thursday', hours: '11:00 AM – 10:00 PM', open: true },
    { day: 'Friday', hours: '11:00 AM – 11:00 PM', open: true },
    { day: 'Saturday', hours: '10:00 AM – 11:00 PM', open: true },
    { day: 'Sunday', hours: '10:00 AM – 10:00 PM', open: true },
  ];

  return (
    <div className={isDark ? 'bg-[#1D1D1D] text-white' : 'bg-[#FFF8F0] text-[#1D1D1D]'}>
      {/* Hero */}
      <div className="relative h-64 sm:h-80 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=1920&q=80" alt="Contact hero" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pt-16">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-[#FCBF49] font-semibold text-sm tracking-widest uppercase mb-2">✦ Get In Touch ✦</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-heading text-4xl sm:text-5xl font-bold text-white mb-3">
            Contact <span className="text-[#FCBF49]">Us</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-white/70 text-sm max-w-md">
            We'd love to hear from you. Reach out for reservations, events, or just to say hello.
          </motion.p>
        </div>
      </div>

      {/* Contact Cards */}
      <section className="section-padding pb-0">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {contactCards.map(({ Icon, label, value, href, gradient }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className={`p-6 rounded-2xl text-center ${isDark ? 'bg-[#2a2a2a] border border-white/10' : 'bg-white shadow-md border border-gray-100'}`}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center mx-auto mb-3 shadow-md`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className={`font-heading font-bold text-base mb-1.5 ${isDark ? 'text-white' : 'text-[#1D1D1D]'}`}>{label}</h3>
                {href ? (
                  <a href={href} className="text-[#D62828] text-sm hover:underline">{value}</a>
                ) : (
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{value}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form + Map */}
      <section className="section-padding pt-0">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">
          {/* Contact Form */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="font-heading text-3xl font-bold mb-2">Send a <span className="text-gradient">Message</span></h2>
            <p className={`text-sm mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Fill out the form below and we'll get back to you within 24 hours.</p>

            {submitted ? (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center gap-4 py-12 text-center">
                <CheckCircle className="w-16 h-16 text-green-500" />
                <h3 className={`font-heading text-2xl font-bold ${isDark ? 'text-white' : 'text-[#1D1D1D]'}`}>Message Sent!</h3>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Thank you for reaching out. We'll be in touch soon!</p>
                <button onClick={() => { setForm({ name: '', email: '', subject: '', message: '' }); setSubmitted(false); }} className="btn-primary text-sm">
                  Send Another
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleContact} className="space-y-4" noValidate>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className={`text-xs font-semibold mb-1.5 block ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Full Name *</label>
                    <input type="text" value={form.name} onChange={update('name')} placeholder="John Doe" className={inputClass(isDark, errors.name)} />
                    {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className={`text-xs font-semibold mb-1.5 block ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Email Address *</label>
                    <input type="email" value={form.email} onChange={update('email')} placeholder="john@example.com" className={inputClass(isDark, errors.email)} />
                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>
                <div>
                  <label className={`text-xs font-semibold mb-1.5 block ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Subject *</label>
                  <input type="text" value={form.subject} onChange={update('subject')} placeholder="Table reservation inquiry" className={inputClass(isDark, errors.subject)} />
                  {errors.subject && <p className="text-red-400 text-xs mt-1">{errors.subject}</p>}
                </div>
                <div>
                  <label className={`text-xs font-semibold mb-1.5 block ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Message *</label>
                  <textarea value={form.message} onChange={update('message')} placeholder="Tell us how we can help..." rows={5} className={`${inputClass(isDark, errors.message)} resize-none`} />
                  {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                </div>
                <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }} type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                  <Send className="w-4 h-4" />
                  Send Message
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Map + Hours */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex flex-col gap-6">
            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-lg flex-1 min-h-[300px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215!2d-73.98677!3d40.74844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ0JzU0LjQiTiA3M8KwNTknMTIuNCJX!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ minHeight: '300px', border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Bella Cucina Location"
              />
            </div>

            {/* Business Hours */}
            <div className={`p-6 rounded-2xl ${isDark ? 'bg-[#2a2a2a] border border-white/10' : 'bg-white shadow-md border border-gray-100'}`}>
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-5 h-5 text-[#D62828]" />
                <h3 className={`font-heading font-bold text-lg ${isDark ? 'text-white' : 'text-[#1D1D1D]'}`}>Business Hours</h3>
              </div>
              <div className="space-y-2.5">
                {businessHours.map(({ day, hours, open }) => (
                  <div key={day} className="flex items-center justify-between">
                    <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{day}</span>
                    <div className="flex items-center gap-2">
                      <span className={`text-sm font-medium ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>{hours}</span>
                      <span className={`w-2 h-2 rounded-full ${open ? 'bg-green-500' : 'bg-red-500'}`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Reservation Form */}
      <section id="reservation" className={`section-padding ${isDark ? 'bg-[#111111]' : 'bg-white'}`}>
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
            <span className="inline-block text-[#D62828] font-semibold text-sm tracking-widest uppercase mb-3">✦ Book a Table ✦</span>
            <h2 className="font-heading text-4xl font-bold mb-3">Online <span className="text-gradient">Reservation</span></h2>
            <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Reserve your table online — quick, easy, and instantly confirmed.</p>
          </motion.div>

          {reservationSubmitted ? (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className={`font-heading text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-[#1D1D1D]'}`}>Reservation Confirmed!</h3>
              <p className={`text-sm mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>We'll see you soon, {reservationForm.name}! A confirmation email has been sent to {reservationForm.email}.</p>
              <button onClick={() => { setReservationForm({ name: '', email: '', phone: '', date: '', time: '', guests: '2', notes: '' }); setReservationSubmitted(false); }} className="btn-primary text-sm">
                Make Another Reservation
              </button>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onSubmit={handleReservation}
              className={`p-8 rounded-3xl space-y-5 ${isDark ? 'bg-[#2a2a2a] border border-white/10' : 'bg-[#FFF8F0] shadow-lg border border-gray-100'}`}
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className={`text-xs font-semibold mb-1.5 flex items-center gap-1.5 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    <Users className="w-3.5 h-3.5 text-[#D62828]" /> Full Name *
                  </label>
                  <input type="text" value={reservationForm.name} onChange={updateRes('name')} placeholder="John Doe" className={inputClass(isDark, false)} required />
                </div>
                <div>
                  <label className={`text-xs font-semibold mb-1.5 flex items-center gap-1.5 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    <Mail className="w-3.5 h-3.5 text-[#D62828]" /> Email *
                  </label>
                  <input type="email" value={reservationForm.email} onChange={updateRes('email')} placeholder="john@example.com" className={inputClass(isDark, false)} required />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className={`text-xs font-semibold mb-1.5 flex items-center gap-1.5 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    <Phone className="w-3.5 h-3.5 text-[#D62828]" /> Phone
                  </label>
                  <input type="tel" value={reservationForm.phone} onChange={updateRes('phone')} placeholder="(555) 000-0000" className={inputClass(isDark, false)} />
                </div>
                <div>
                  <label className={`text-xs font-semibold mb-1.5 flex items-center gap-1.5 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    <Users className="w-3.5 h-3.5 text-[#D62828]" /> Guests *
                  </label>
                  <div className="relative">
                    <select value={reservationForm.guests} onChange={updateRes('guests')} className={`${inputClass(isDark, false)} appearance-none cursor-pointer`} required>
                      {[1,2,3,4,5,6,7,8,10,12].map(n => <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>)}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                  </div>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className={`text-xs font-semibold mb-1.5 flex items-center gap-1.5 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    <Calendar className="w-3.5 h-3.5 text-[#D62828]" /> Date *
                  </label>
                  <input type="date" value={reservationForm.date} onChange={updateRes('date')} min={new Date().toISOString().split('T')[0]} className={inputClass(isDark, false)} required />
                </div>
                <div>
                  <label className={`text-xs font-semibold mb-1.5 flex items-center gap-1.5 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    <Clock className="w-3.5 h-3.5 text-[#D62828]" /> Time *
                  </label>
                  <div className="relative">
                    <select value={reservationForm.time} onChange={updateRes('time')} className={`${inputClass(isDark, false)} appearance-none cursor-pointer`} required>
                      <option value="">Select time</option>
                      {['11:00 AM','11:30 AM','12:00 PM','12:30 PM','1:00 PM','1:30 PM','5:00 PM','5:30 PM','6:00 PM','6:30 PM','7:00 PM','7:30 PM','8:00 PM','8:30 PM','9:00 PM'].map(t => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                  </div>
                </div>
              </div>

              <div>
                <label className={`text-xs font-semibold mb-1.5 block ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Special Requests</label>
                <textarea value={reservationForm.notes} onChange={updateRes('notes')} placeholder="Dietary restrictions, special occasions, seating preferences..." rows={3} className={`${inputClass(isDark, false)} resize-none`} />
              </div>

              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }} type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                <Calendar className="w-4 h-4" />
                Confirm Reservation
              </motion.button>
            </motion.form>
          )}
        </div>
      </section>
    </div>
  );
};

export default Contact;
