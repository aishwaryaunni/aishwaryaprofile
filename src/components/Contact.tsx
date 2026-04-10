'use client';

import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'aishwaryacu.1506@gmail.com',
      href: 'mailto:aishwaryacu.1506@gmail.com',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/yourprofile',
      href: 'https://www.linkedin.com/in/aishwarya-unni-b3474a218/',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/yourprofile',
      href: 'https://github.com/aishwaryaunni',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Chennai, India',
      href: 'https://maps.app.goo.gl/ywf1YYAusH9yEBbo8',
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 px-6 max-w-6xl mx-auto scroll-mt-20"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="section-title"
      >
        Get In Touch
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Left - Contact Methods */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p
            variants={itemVariants}
            className="text-lg text-slate-700 dark:text-slate-300 mb-8"
          >
            I'm always open to interesting projects and collaboration opportunities. Feel free to
            reach out through any of these channels!
          </motion.p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <motion.a
                  key={index}
                  variants={itemVariants}
                  href={method.href}
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group"
                >
                  <div className="p-3 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg text-white group-hover:shadow-lg transition-shadow">
                    <Icon size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">{method.label}</p>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">{method.value}</p>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>

          {/* Quick Stats */}
          {/* <motion.div
            variants={itemVariants}
            className="mt-12 grid grid-cols-2 gap-4"
          >
            {[
              { label: 'Response Time', value: '24h' },
              { label: 'Timezone', value: 'IST (UTC+5:30)' },
            ].map((stat, index) => (
              <div
                key={index}
                className="glass-card p-4 rounded-lg border border-white/20 dark:border-white/10"
              >
                <p className="text-sm text-slate-600 dark:text-slate-400">{stat.label}</p>
                <p className="font-bold text-slate-900 dark:text-white">{stat.value}</p>
              </div>
            ))}
          </motion.div> */}
        </motion.div>

        {/* Right - Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <motion.form
            onSubmit={handleSubmit}
            className="glass-card p-8 rounded-2xl border border-white/20 dark:border-white/10 space-y-6"
          >
            <div>
              <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors resize-none"
                placeholder="Your message..."
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                submitted
                  ? 'bg-green-600 text-white'
                  : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg'
              }`}
            >
              {submitted ? '✓ Message Sent!' : 'Send Message'}
            </motion.button>

            {submitted && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-green-600 dark:text-green-400 text-sm text-center"
              >
                Thanks for reaching out! I'll get back to you soon.
              </motion.p>
            )}
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
