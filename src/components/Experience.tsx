'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    id: 1,
    company: 'CUMTA, Chennai',
    role: 'Data Science Intern',
    duration: 'Jan 2026 – Present',
    type: 'Current',
    description:
      'Building and deploying AI-powered geospatial analytics solutions for urban mobility and service intelligence.',
    achievements: [
      'Deployed AI-powered geospatial analytics integrating ML, NLP, and spatial analysis',
      'Constructed end-to-end data pipelines for geospatial and structured datasets',
      'Architected NLP-driven support ticket classification system with email automation',
      'Developed intelligent systems supporting urban planning and transit analytics',
      'Translated complex requirements into scalable data science solutions',
    ],
    skills: ['Geospatial Analysis', 'NLP', 'Machine Learning', 'Python', 'Data Pipelines', 'GIS'],
  },
  {
    id: 2,
    company: 'Deloitte USI, Bengaluru',
    role: 'Associate Analyst',
    duration: 'Aug 2022 – Aug 2024',
    type: 'Past',
    description:
      'Delivered data-centric solutions across Energy, Insurance, and Public Sector domains with focus on analytics and reporting.',
    achievements: [
      'Worked with cross-functional teams in Energy, Insurance, and Public Sector domains',
      'Analyzed business requirements to understand data flows and reporting needs',
      'Enhanced and maintained .NET and SQL-based data processing modules',
      'Wrote and optimized SQL queries for data extraction, validation, and analysis',
      'Supported defect analysis, root-cause identification, and resolution',
      'Participated in testing, UAT support, and post-deployment verification',
    ],
    skills: ['SQL', '.NET', 'Data Analysis', 'Reporting', 'Business Analysis', 'Testing'],
  },
];

export default function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="experience"
      className="py-20 px-6 max-w-4xl mx-auto scroll-mt-20"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="section-title"
      >
        Professional Experience
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="space-y-8"
      >
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            variants={itemVariants}
            className="relative"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-8 top-2 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white dark:border-slate-950 md:block hidden"></div>

            {/* Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="glass-card rounded-2xl p-8 card-shadow border border-white/20 dark:border-white/10 md:ml-8"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4 flex-col md:flex-row gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Briefcase className="text-blue-600 dark:text-blue-400" size={24} />
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                      {exp.role}
                    </h3>
                  </div>
                  <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold">
                    {exp.company}
                  </p>
                </div>
                <div className={`px-4 py-2 rounded-full text-sm font-semibold ${
                  exp.type === 'Current'
                    ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                }`}>
                  {exp.type}
                </div>
              </div>

              {/* Duration */}
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 mb-4">
                <Calendar size={16} />
                <span className="font-medium">{exp.duration}</span>
              </div>

              {/* Description */}
              <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                {exp.description}
              </p>

              {/* Achievements */}
              <div className="mb-6">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wide mb-3">
                  Key Achievements
                </h4>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start gap-3 text-slate-600 dark:text-slate-400"
                    >
                      <span className="text-blue-600 dark:text-blue-400 font-bold mt-1">▸</span>
                      <span>{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, idx) => (
                  <motion.span
                    key={idx}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-semibold rounded-full"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom Timeline Line */}
      <div className="absolute left-0 md:left-0 w-1 h-64 bg-gradient-to-b from-blue-600 to-purple-600 opacity-20 md:block hidden -ml-4"></div>
    </section>
  );
}
