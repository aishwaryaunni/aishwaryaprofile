'use client';

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const highlights = [
    'MSc Data Science (CGPA 7.84) from SASTRA University',
    '2+ years at Deloitte driving data-centric solutions',
    'Expertise in ML, Statistical Analysis, and Predictive Modeling',
    'Proficient in Python, SQL, GIS, and Cloud Technologies',
    'Currently building AI-powered geospatial analytics at CUMTA',
  ];

  return (
    <section
      id="about"
      className="py-20 px-6 max-w-6xl mx-auto scroll-mt-20"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="section-title"
      >
        About Me
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
            I'm a Data Science professional with a passion for transforming complex datasets into actionable business intelligence. With a strong foundation in machine learning, statistical analysis, and geospatial analytics, I specialize in building end-to-end data solutions that drive strategic decision-making.
          </p>

          <p className="text-lg text-slate-700 dark:text-slate-300 mb-8 leading-relaxed">
            My journey spans from supporting analytics initiatives at Deloitte across Energy, Insurance, and Public Sector domains, to architecting AI-powered geospatial systems for urban mobility. I thrive on translating complex business requirements into scalable, data-driven solutions.
          </p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-start gap-3"
              >
                <CheckCircle className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" size={20} />
                <span className="text-slate-700 dark:text-slate-300">{highlight}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Content - Stats Cards */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-2 gap-6"
        >
          {[
            { number: '2+', label: 'Years Experience'},
            { number: '6+', label: 'Projects'},
            { number: '10+', label: 'Tech Skills'},
            { number: '100%', label: 'Commitment & Team Collaboration'},
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="glass-card p-6 card-shadow rounded-2xl border border-white/20 dark:border-white/10"
            >
              {/* <p className="text-4xl mb-2">{stat.icon}</p> */}
              <p className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {stat.number}
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Education */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mt-16 grid md:grid-cols-2 gap-6"
      >
        {[
          {
            degree: 'MSc Data Science',
            school: 'SASTRA Deemed to be University',
            cgpa: 'CGPA: 7.84',
          },
          {
            degree: 'BSc Computer Science',
            school: 'M.O.P. Vaishnav College for Women',
            cgpa: 'CGPA: 8.1',
          },
        ].map((edu, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            className="glass-card p-6 rounded-2xl border border-white/20 dark:border-white/10"
          >
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
              {edu.degree}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-2">{edu.school}</p>
            <p className="text-blue-600 dark:text-blue-400 font-semibold">{edu.cgpa}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
