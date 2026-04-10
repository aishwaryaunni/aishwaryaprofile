'use client';

import { motion } from 'framer-motion';

const skillCategories = [
  {
    category: 'Programming Languages',
    icon: '💻',
    skills: ['Python', 'SQL', 'R', '.NET'],
  },
  {
    category: 'Machine Learning & AI',
    icon: '🤖',
    skills: ['Predictive Analytics', 'NLP', 'Classification Models', 'Regression', 'Clustering', 'LLM Integration'],
  },
  {
    category: 'Data Visualization & BI',
    icon: '📊',
    skills: ['Power BI', 'Tableau', 'Excel', 'Python Visualization'],
  },
  {
    category: 'GIS & Spatial Technologies',
    icon: '🗺️',
    skills: ['QGIS', 'PostGIS', 'Geospatial Analysis', 'Route Optimization'],
  },
  {
    category: 'Cloud & DevOps',
    icon: '☁️',
    skills: ['Microsoft Azure', 'AWS', 'GitHub', 'Data Pipelines'],
  },
  {
    category: 'Data Analysis & Statistics',
    icon: '📈',
    skills: ['EDA', 'Statistical Analysis', 'Data Cleaning', 'Feature Engineering'],
  },
  {
    category: 'Web Technologies',
    icon: '🌐',
    skills: ['ASP.NET', 'VB.NET', 'HTML', 'CSS', 'JavaScript', 'XML'],
  },
  {
    category: 'Databases',
    icon: '🗄️',
    skills: ['MS Access', 'SQL Server', 'MySQL'],
  },
];

export default function Skills() {
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

  return (
    <section
      id="skills"
      className="py-20 px-6 max-w-6xl mx-auto scroll-mt-20"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="section-title"
      >
        Technical Skills
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="glass-card p-8 rounded-2xl card-shadow border border-white/20 dark:border-white/10"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">{category.icon}</span>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                {category.category}
              </h3>
            </div>

            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, skillIndex) => (
                <motion.span
                  key={skillIndex}
                  whileHover={{ scale: 1.05 }}
                  className="skill-badge hover:shadow-lg transition-all"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Proficiency Matrix */}
      {/* <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="mt-16 glass-card p-8 rounded-2xl border border-white/20 dark:border-white/10"
      >
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
          Proficiency Level
        </h3>

        <div className="space-y-6">
          {[
            { skill: 'Python & Data Analysis', level: 90 },
            { skill: 'Machine Learning', level: 85 },
            { skill: 'SQL & Database Design', level: 88 },
            { skill: 'Cloud Platforms (Azure/AWS)', level: 80 },
            { skill: 'GIS & Geospatial Analysis', level: 85 },
            { skill: 'Data Visualization', level: 87 },
          ].map((item, index) => (
            <div key={index}>
              <div className="flex justify-between mb-2">
                <span className="font-semibold text-slate-900 dark:text-white">
                  {item.skill}
                </span>
                <span className="text-blue-600 dark:text-blue-400 font-bold">
                  {item.level}%
                </span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                ></motion.div>
              </div>
            </div>
          ))}
        </div>
      </motion.div> */}
    </section>
  );
}
