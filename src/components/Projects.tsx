'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'News Authenticity Verification using Hybrid Language Model(RAG) Pipeline',
    description: 'AI-powered system using semantic search and LLMs to detect misinformation with reasoning summaries.',
    image: '/rag.png',
    technologies: ['NLP', 'LLM (Gemini 2.5)', 'FAISS', 'BART', 'Sentence-Transformers'],
    // impact: 'Achieved 92% F1-Score with interpretable fake news probability scores',
    features: [
      'Semantic retrieval using FAISS vector search',
      'Integrated Gemini 2.5 Pro for claim verification',
      'BART-based zero-shot classification',
      'Evidence-based reasoning summaries',
    ],
    github: 'https://github.com/aishwaryaunni/News-Authenticity-Verification-using-Hybrid-Language-Model-Pipeline',
    live: '#',
  },
  {
    id: 2,
    title: 'Geospatial Transit Analytics for Chennai',
    description: 'End-to-end geospatial analytics platform optimizing urban public transport routes and resource allocation.',
    image: '/map.png',
    technologies: ['GIS (QGIS)', 'PostGIS', 'Python', 'Clustering', 'Spatial Analysis'],
    // impact: 'Identified 15+ underserved zones and optimized 8 transit corridors for better coverage',
    features: [
      'Spatial route optimization algorithms',
      'Cluster analysis for demand mapping',
      'Interactive GIS-based visualization',
      'Real-world implementation for Chennai network',
    ],
    github: 'https://github.com',
    live: '#',
  },
  {
    id: 3,
    title: 'NLP-Powered Support Ticket Management',
    description: 'Automated ticket classification and routing system for municipal service platform with priority-based workflows.',
    image: '/nlp.png',
    technologies: ['NLP', 'Text Classification', 'Sentiment Analysis', 'Python', 'Email Automation'],
    // impact: 'Reduced ticket resolution time by 40% with automated priority routing',
    features: [
      'Sentiment-based severity classification',
      'Automated ticket routing by issue type',
      'Scheduled email reports to development team',
      'Data-driven feedback loops for continuous improvement',
    ],
    github: 'https://github.com/aishwaryaunni/cumta-pulse-nlp-v2',
    live: 'https://cumta-pulse-nlp-v2.vercel.app/',
  },
  {
    id: 4,
    title: 'Machine Learning Cyber Incidents Analysis',
    description: 'Classification and regression models to analyze global cyber incidents and estimate financial impact.',
    image: '/cybersecurity.jpg',
    technologies: ['Python', 'Scikit-learn', 'Classification', 'Regression', 'Feature Engineering'],
    // impact: 'Built models with 87% accuracy for incident categorization and financial loss prediction',
    features: [
      'Multi-class classification for incident types',
      'Regression analysis for financial impact estimation',
      'Comprehensive feature engineering',
      'Pattern identification in cyber threats',
    ],
    github: 'https://github.com/aishwaryaunni/Machine-Learning-Analysis-of-Global-Cyber-Incidents',
    live: '#',
  },
  {
    id: 5,
    title: 'Stock Price Forecasting with ML',
    description: 'Time-series prediction models using machine learning to forecast stock closing prices.',
    image: '/at.png',
    technologies: ['Python', 'Regression Models', 'Feature Engineering', 'Time-Series', 'Scikit-learn'],
    // impact: 'Achieved 85% accuracy on closing price predictions with documented assumptions',
    features: [
      'Historical price data analysis',
      'Feature engineering for temporal patterns',
      'Multiple regression model comparison',
      'Error metrics and performance evaluation',
    ],
    github: 'https://github.com/aishwaryaunni/Forecasting-Technology-Company-Stock-Closing-Prices-Using-Machine-Learning',
    live: '#',
  },
  {
    id: 6,
    title: 'Youth Behavioral Predictive Modeling',
    description: 'Association analysis and predictive modeling of smoking and drug usage patterns among youth.',
    image: '/analytics.jpg',
    technologies: ['Python', 'Statistical Analysis', 'Association Rules', 'Predictive Modeling'],
    // impact: 'Identified key behavioral correlations to support public health insights',
    features: [
      'EDA on behavioral demographics',
      'Predictive model development',
      'Association rule mining',
      'Data-driven health recommendations',
    ],
    github: 'https://drive.google.com/file/d/1rXGMqkQM8bcatsPUHRSVx65bcc5ekfoC/view?usp=drive_link',
    live: '#',
  },
  {
    id: 7,  
    title: 'Student Management System',
    description: 'Web-based platform for managing student records, courses, subjects, and exam schedules with admin and student dashboards.',
    image: '/student.jpg',  // Add if you have a screenshot
    technologies: ['ASP.NET', 'VB.NET', 'MS Access', 'HTML', 'CSS', 'JavaScript'],
    // impact: 'Streamlined student data management and exam scheduling for educational institutions',
    features: [
      'Student registration and profile management',
      'Course and subject management',
      'Exam date scheduling and tracking',
      'Admin authentication system',
      'Student dashboard for viewing records',
      'Data validation with validators',
    ],
    github: 'https://drive.google.com/file/d/1af0djd9SGLUwH4buuuDX-3G-RAq5E5Gz/view?usp=sharing',
    live: '#',  // Add live link if deployed
  },
];

export default function Projects() {
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="projects"
      className="py-20 px-6 max-w-6xl mx-auto scroll-mt-20"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="section-title"
      >
        Featured Projects
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="grid md:grid-cols-2 gap-8"
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={itemVariants}
            whileHover={{ y: -8 }}
            className="glass-card rounded-2xl overflow-hidden card-shadow border border-white/20 dark:border-white/10 flex flex-col h-full"
          >
            {/* Project Header with Image Support */}
            <div className="h-40 bg-gradient-to-br from-blue-500/20 to-purple-500/20 dark:from-blue-900/30 dark:to-purple-900/30 flex items-center justify-center overflow-hidden">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    // Fallback if image doesn't load
                    e.currentTarget.style.display = 'none';
                  }}
                />
              ) : (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="text-5xl"
                >
                  📊
                </motion.div>
              )}
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
              {/* Title and Description */}
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                {project.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                {project.description}
              </p>

              {/* Impact */}
              {/* <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-3 mb-4">
                <p className="text-sm font-semibold text-blue-900 dark:text-blue-300">
                  💡 {project.impact}
                </p>
              </div> */}

              {/* Features */}
              <div className="mb-4">
                <p className="text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wide mb-2">
                  Key Features
                </p>
                <ul className="space-y-1">
                  {project.features.slice(0, 3).map((feature, index) => (
                    <li
                      key={index}
                      className="text-xs text-slate-600 dark:text-slate-400 flex items-start gap-2"
                    >
                      <span className="text-blue-600 dark:text-blue-400 mt-1">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="mb-6 flex-grow">
                <p className="text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wide mb-2">
                  Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs rounded font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex gap-4 pt-4 border-t border-white/20 dark:border-white/10">
                <motion.a
                  href={project.github}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm font-semibold"
                >
                  <Github size={18} /> Code
                </motion.a>
                <motion.a
                  href={project.live}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm font-semibold ml-auto"
                >
                  View <ExternalLink size={18} />
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* View All Projects CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-12 text-center"
      >
        <p className="text-slate-600 dark:text-slate-400 mb-4">
          Interested in seeing more? Check out my GitHub for additional projects and contributions.
        </p>
        <motion.a
          href="https://github.com/aishwaryaunni"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transition-shadow"
        >
          <Github size={20} /> View All on GitHub
        </motion.a>
      </motion.div>
    </section>
  );
}
