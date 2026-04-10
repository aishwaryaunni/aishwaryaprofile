'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-blue-50 to-purple-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900 overflow-hidden"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto px-6 text-center z-10"
      >
        {/* Floating Gradient Background Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 dark:bg-blue-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>

        {/* Greeting */}
        {/* <motion.div variants={itemVariants}>
          <p className="text-lg md:text-xl text-blue-600 dark:text-blue-400 font-semibold mb-4">
            Hi
          </p>
        </motion.div> */}

        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="mb-6 leading-tight"
        >
          <span className="block text-5xl md:text-6xl font-bold gradient-text pb-3">
            Aishwarya C U
          </span>
          <span className="block text-2xl md:text-4xl font-medium text-slate-700 dark:text-white mt-2">
            Data Science & Analytics
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto font-light leading-relaxed text-center"
        >
          Transforming complex data into data-driven decisions using analytics, machine learning, and visualization. Currently contributing at CUMTA, backed by industry experience at Deloitte.
        </motion.p>
        
        {/* Stats */}
        {/* <motion.div
          variants={itemVariants}
          className="flex justify-center gap-8 mb-12 flex-wrap"
        >
          <div className="text-center">
            <p className="text-3xl font-bold gradient-text">2+</p>
            <p className="text-slate-600 dark:text-slate-400">Years Experience</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold gradient-text">6+</p>
            <p className="text-slate-600 dark:text-slate-400">Projects Completed</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold gradient-text">100%</p>
            <p className="text-slate-600 dark:text-slate-400">Data-Driven</p>
          </div>
        </motion.div> */}

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-6 flex-wrap"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transition-shadow duration-300"
          >
            View Projects <ArrowRight size={20} />
          </motion.a>
          <motion.a
            href="/aishu_resume.pdf"  // Update with your actual resume path
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-8 py-4 border-2 border-slate-900 dark:border-white text-slate-900 dark:text-white rounded-full font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-300"
          >
            Download Resume <Download size={20} />
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-16 flex justify-center"
        >
          <div className="text-slate-600 dark:text-slate-400">
            <svg
              className="w-6 h-6 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
