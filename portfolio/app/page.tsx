'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope, 
  FaPhone, 
  FaExternalLinkAlt,
  FaCode,
  FaDatabase,
  FaChartLine,
  FaRobot,
  FaCloud,
  FaGraduationCap,
  FaBriefcase,
  FaCertificate
} from 'react-icons/fa'
import { HiMenu, HiX } from 'react-icons/hi'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'education', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ]

  const skills = {
    'Programming Languages': ['Python', 'JavaScript', 'TypeScript', 'SQL', 'Java', 'C++'],
    'Data Analysis & ML': ['Pandas', 'NumPy', 'Scikit-learn', 'K-Means', 'PCA', 'RFM Analysis'],
    'Web Development': ['React', 'Next.js', 'Node.js', 'Express.js', 'HTML5', 'CSS3'],
    'Data Visualization': ['Plotly', 'Matplotlib', 'Seaborn', 'Streamlit', 'Tableau'],
    'Databases': ['MongoDB', 'MySQL', 'PostgreSQL', 'Redis'],
    'Tools & Others': ['Git', 'Docker', 'AWS', 'ETL', 'Data Warehousing', 'Business Intelligence']
  }

  const projects = [
    {
      title: 'Customer Segmentation & RFM Analysis Dashboard',
      description: 'Advanced interactive data analytics dashboard for customer segmentation using RFM analysis and K-Means clustering. Features real-time visualizations, business insights, and export capabilities.',
      technologies: ['Python', 'Streamlit', 'Plotly', 'Scikit-learn', 'Pandas', 'NumPy'],
      github: 'https://github.com/piyushm04/new-project',
      demo: 'https://new-project.streamlit.app',
      image: '/project1.jpg'
    },
    {
      title: 'Data Analytics Platform',
      description: 'Comprehensive data analytics platform with ETL processes, data warehousing, and business intelligence features.',
      technologies: ['Python', 'SQL', 'ETL', 'Data Warehousing'],
      github: 'https://github.com/piyushm04',
      demo: '#',
      image: '/project2.jpg'
    }
  ]

  const experience = [
    {
      title: 'Data Analyst Intern',
      company: 'Company Name',
      period: 'May 2025 - June 2025',
      description: [
        'Built and deployed interactive dashboards using Streamlit and Plotly, improving data accessibility by 40%',
        'Applied machine learning algorithms (K-Means, PCA) for customer segmentation, achieving 88% accuracy',
        'Executed statistical analysis on 50,000+ customer records, identifying key business insights',
        'Enhanced data processing workflows, reducing analysis time by 35%'
      ]
    }
  ]

  const education = [
    {
      degree: 'Bachelor of Engineering',
      institution: 'Your University',
      period: 'Expected Graduation: 2025',
      gpa: 'CGPA: X.XX/10.0',
      coursework: ['Data Structures', 'Machine Learning', 'Database Systems', 'Statistics']
    }
  ]

  const certifications = [
    {
      name: 'Data Analysis Certification',
      issuer: 'Issuing Organization',
      achievement: 'Top Performer'
    },
    {
      name: 'Machine Learning Specialization',
      issuer: 'Issuing Organization',
      achievement: 'Completed with Excellence'
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-primary">PM</div>
            <div className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === link.id
                      ? 'text-primary border-b-2 border-primary'
                      : 'text-gray-600 hover:text-primary'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
            <button
              className="md:hidden text-gray-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-2 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100 rounded"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Hi, I'm <span className="text-primary">Piyush Molawade</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Data Analyst & Full Stack Developer
            </p>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-12">
              Specializing in Data Analysis, Machine Learning, and Building Interactive Dashboards
            </p>
            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/piyushm04"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition"
              >
                <FaGithub size={20} />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/piyushmolawade"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                <FaLinkedin size={20} />
                <span>LinkedIn</span>
              </a>
              <a
                href="mailto:piyushm56042@gmail.com"
                className="flex items-center space-x-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-blue-700 transition"
              >
                <FaEnvelope size={20} />
                <span>Email</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">About Me</h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="text-lg leading-relaxed mb-4">
                I'm a passionate Data Analyst and Full Stack Developer with expertise in transforming 
                complex data into actionable business insights. I specialize in building interactive 
                analytics dashboards, implementing machine learning models, and creating data-driven solutions.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                My work focuses on customer segmentation, RFM analysis, predictive modeling, and 
                developing scalable web applications. I'm experienced in Python, SQL, React, and 
                various data visualization tools.
              </p>
              <p className="text-lg leading-relaxed">
                I'm always eager to take on new challenges and contribute to innovative projects 
                that make a real impact.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Technical Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(skills).map(([category, items], index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
                >
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition overflow-hidden"
                >
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">{project.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-gray-700 hover:text-primary transition"
                      >
                        <FaGithub size={18} />
                        <span>Code</span>
                      </a>
                      {project.demo !== '#' && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 text-gray-700 hover:text-primary transition"
                        >
                          <FaExternalLinkAlt size={18} />
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Experience</h2>
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-white p-6 rounded-lg shadow-md"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <FaBriefcase className="text-primary text-2xl" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{exp.title}</h3>
                      <p className="text-primary font-medium mb-2">{exp.company}</p>
                      <p className="text-gray-500 text-sm mb-4">{exp.period}</p>
                      <ul className="space-y-2">
                        {exp.description.map((item, i) => (
                          <li key={i} className="text-gray-600 flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Education</h2>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-white border border-gray-200 p-6 rounded-lg shadow-md"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <FaGraduationCap className="text-primary text-2xl" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{edu.degree}</h3>
                      <p className="text-primary font-medium mb-2">{edu.institution}</p>
                      <p className="text-gray-600 mb-2">{edu.period}</p>
                      <p className="text-gray-600 mb-4">{edu.gpa}</p>
                      <div className="mt-4">
                        <p className="text-sm font-semibold text-gray-700 mb-2">Relevant Coursework:</p>
                        <div className="flex flex-wrap gap-2">
                          {edu.coursework.map((course) => (
                            <span
                              key={course}
                              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-md"
                >
                  <div className="flex items-start space-x-4">
                    <FaCertificate className="text-primary text-2xl flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{cert.name}</h3>
                      <p className="text-gray-600 text-sm mb-2">{cert.issuer}</p>
                      <p className="text-primary text-sm font-medium">{cert.achievement}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Get In Touch</h2>
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <p className="text-center text-gray-600 mb-8 text-lg">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <a
                  href="mailto:piyushm56042@gmail.com"
                  className="flex flex-col items-center p-6 bg-white rounded-lg shadow hover:shadow-lg transition"
                >
                  <FaEnvelope className="text-primary text-3xl mb-3" />
                  <span className="font-semibold text-gray-900">Email</span>
                  <span className="text-sm text-gray-600 mt-1">piyushm56042@gmail.com</span>
                </a>
                <a
                  href="tel:+919028702500"
                  className="flex flex-col items-center p-6 bg-white rounded-lg shadow hover:shadow-lg transition"
                >
                  <FaPhone className="text-primary text-3xl mb-3" />
                  <span className="font-semibold text-gray-900">Phone</span>
                  <span className="text-sm text-gray-600 mt-1">+91-9028702500</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/piyushmolawade"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center p-6 bg-white rounded-lg shadow hover:shadow-lg transition"
                >
                  <FaLinkedin className="text-primary text-3xl mb-3" />
                  <span className="font-semibold text-gray-900">LinkedIn</span>
                  <span className="text-sm text-gray-600 mt-1">Connect with me</span>
                </a>
              </div>
              <div className="mt-8 flex justify-center space-x-6">
                <a
                  href="https://github.com/piyushm04"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary transition"
                >
                  <FaGithub size={28} />
                </a>
                <a
                  href="https://www.linkedin.com/in/piyushmolawade"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary transition"
                >
                  <FaLinkedin size={28} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Piyush Sunil Molawade. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Built with Next.js, React, and Tailwind CSS
          </p>
        </div>
      </footer>
    </main>
  )
}
