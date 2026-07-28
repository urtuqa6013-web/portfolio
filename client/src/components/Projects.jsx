import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiExternalLink, HiCode, HiStar } from 'react-icons/hi';
import { FiGithub } from 'react-icons/fi';

const Projects = ({ isDark }) => {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
  {
    id: 1,
    title: "Task Manager Pro",
    description:
      "A full-stack task management application with authentication, role-based access, and advanced features.",
    longDescription:
      "A MERN stack task management system featuring JWT authentication, OTP verification, RBAC (Admin, Manager, User), CRUD operations, search, filtering, pagination, file uploads with Cloudinary, and protected routes.",
    image: "/images/task.png",
    category: "fullstack",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Cloudinary",
      "Redux Toolkit",
    ],
    liveUrl: "https://task-manager-urwa.vercel.app/",
    githubUrl: "https://github.com/urtuqa6013-web",
    featured: true,
    stats: {
      stars: 120,
      forks: 25,
      views: 3000,
    },
  },

  {
    id: 2,
    title: "MedWear E-Commerce",
    description:
      "A medical fashion e-commerce platform for doctors' coats and professional wear.",
    longDescription:
      "A full-stack MERN e-commerce application with product management, authentication, cart, wishlist, orders, reviews, ratings, admin dashboard, image uploads using Cloudinary, and email notifications using Nodemailer.",
    image: "/images/medwear.png",
    category: "fullstack",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redux Toolkit",
      "Cloudinary",
      "Nodemailer",
    ],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    stats: {
      stars: 80,
      forks: 15,
      views: 2000,
    },
  },

  {
    id: 3,
    title: "ConnectHub Chat Application",
    description:
      "Real-time chat application with instant messaging functionality.",
    longDescription:
      "A real-time communication platform built with MERN stack and Socket.io. Includes authentication, live messaging, online users, and responsive chat interface.",
    image: "/images/chat.png",
    category: "fullstack",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.io",
    ],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    stats: {
      stars: 75,
      forks: 12,
      views: 1500,
    },
  },

  {
    id: 4,
    title: "Purse Palace",
    description:
      "A modern fashion landing page with responsive design.",
    longDescription:
      "A stylish fashion website created with clean HTML and CSS focusing on responsive layouts, modern UI design, and user-friendly experience.",
    image: "/images/project1.jpg",
    category: "frontend",
    technologies: [
      "HTML",
      "CSS",
      "Responsive Design",
    ],
    liveUrl: "#",
    githubUrl:
      "https://github.com/urtuqa6013-web/Purse-palace",
    featured: false,
    stats: {
      stars: 20,
      forks: 5,
      views: 800,
    },
  },

  {
    id: 5,
    title: "Stopwatch",
    description:
      "A stopwatch application with start, pause, and reset functionality.",
    longDescription:
      "A JavaScript-based stopwatch application implementing timer logic, event handling, and interactive UI controls.",
    image: "/images/project2.jpg",
    category: "frontend",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
    ],
    liveUrl: "https://urwa-stop-watch.netlify.app/",
    githubUrl:
      "https://github.com/urtuqa6013-web/Stop-watch",
    featured: false,
    stats: {
      stars: 15,
      forks: 3,
      views: 600,
    },
  },

  {
    id: 6,
    title: "CRUD Application",
    description:
      "Basic CRUD operations application using JavaScript.",
    longDescription:
      "A beginner-friendly CRUD project demonstrating create, read, update, and delete operations with JavaScript and DOM manipulation.",
    image: "/images/project5.jpg",
    category: "frontend",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
    ],
    liveUrl: "#",
    githubUrl:
      "https://github.com/urtuqa6013-web/CRUD",
    featured: false,
    stats: {
      stars: 12,
      forks: 2,
      views: 500,
    },
  },

  {
    id: 7,
    title: "Redux Toolkit",
    description:
      "State management implementation using Redux Toolkit.",
    longDescription:
      "A React project demonstrating global state management using Redux Toolkit with slices, reducers, actions, and store configuration.",
    image: "/images/project4.jpg",
    category: "frontend",
    technologies: [
      "React",
      "Redux Toolkit",
      "JavaScript",
    ],
    liveUrl: "#",
    githubUrl:
      "https://github.com/urtuqa6013-web/Redux-Toolkit",
    featured: false,
    stats: {
      stars: 18,
      forks: 4,
      views: 700,
    },
  },

  {
    id: 8,
    title: "TM Converter",
    description:
      "Temperature converter with interactive user interface.",
    longDescription:
      "A simple temperature conversion application built using HTML, CSS, and JavaScript with real-time calculations.",
    image: "/images/project3.jpg",
    category: "frontend",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
    ],
    liveUrl: "#",
    githubUrl:
      "https://github.com/urtuqa6013-web/TM-Converter",
    featured: false,
    stats: {
      stars: 10,
      forks: 2,
      views: 400,
    },
  },
];

  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter((p) => p.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="projects" className="min-h-screen py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className={`text-lg font-semibold mb-4 ${
            isDark ? 'text-blue-400' : 'text-blue-600'
          }`}>
            My Work
          </p>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Featured Projects
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Explore some of my recent projects built with modern technologies
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {['all', 'frontend', 'fullstack'].map((category) => (
            <motion.button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all capitalize ${
                filter === category
                  ? isDark
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/50'
                    : 'bg-gradient-to-r from-blue-400 to-purple-500 text-white shadow-lg shadow-blue-400/50'
                  : isDark
                  ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          layout
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              variants={itemVariants}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <motion.div
                className={`h-full rounded-xl overflow-hidden backdrop-blur-md border transition-all ${
                  isDark
                    ? 'bg-gray-800/50 border-gray-700/50 hover:bg-gray-800/80'
                    : 'bg-white/50 border-gray-200/50 hover:bg-white/80'
                }`}
                whileHover={{ y: -20 }}
              >
                {/* Image */}
                <motion.div
                  className="h-48 overflow-hidden bg-gradient-to-br from-blue-500/20 to-purple-600/20 relative"
                  whileHover={{ scale: 1.1 }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />

                  {/* Featured Badge */}
                  {project.featured && (
                    <motion.div
                      className="absolute top-4 right-4 bg-yellow-500 text-black px-3 py-1 rounded-full font-bold text-sm flex items-center gap-1"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <HiStar /> Featured
                    </motion.div>
                  )}

                  {/* Overlay */}
                  <motion.div
                    className={`absolute inset-0 ${
                      isDark
                        ? 'bg-black/60'
                        : 'bg-black/40'
                    } flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity`}
                  >
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-full ${
                        isDark
                          ? 'bg-blue-500 hover:bg-blue-600'
                          : 'bg-blue-400 hover:bg-blue-500'
                      } text-white transition-all`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <HiExternalLink className="text-xl" />
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-full ${
                        isDark
                          ? 'bg-gray-700 hover:bg-gray-600'
                          : 'bg-gray-400 hover:bg-gray-500'
                      } text-white transition-all`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FiGithub className="text-xl" />
                    </motion.a>
                  </motion.div>
                </motion.div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className={`text-sm mb-4 ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {project.description}
                  </p>

                  {/* Stats */}
                  <div className="flex justify-between mb-4 text-xs">
                    <span className={isDark ? 'text-gray-500' : 'text-gray-500'}>
                      ⭐ {project.stats.stars}
                    </span>
                    <span className={isDark ? 'text-gray-500' : 'text-gray-500'}>
                      👁️ {project.stats.views}
                    </span>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <motion.span
                        key={i}
                        className={`px-2 py-1 rounded text-xs font-semibold ${
                          isDark
                            ? 'bg-blue-500/20 text-blue-300'
                            : 'bg-blue-400/20 text-blue-700'
                        }`}
                        whileHover={{ scale: 1.1 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Projects Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.button
            className={`px-8 py-3 rounded-lg font-semibold ${
              isDark
                ? 'bg-gradient-to-r from-blue-500 to-purple-600 hover:shadow-lg hover:shadow-blue-500/50'
                : 'bg-gradient-to-r from-blue-400 to-purple-500 hover:shadow-lg hover:shadow-blue-400/50'
            } text-white transition-all`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          onClick={() => setSelectedProject(null)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setSelectedProject(null)}
          />

          {/* Modal */}
          <motion.div
            className={`relative z-10 max-w-2xl w-full rounded-xl p-8 ${
              isDark ? 'bg-slate-900' : 'bg-white'
            }`}
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5 }}
          >
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
            <h3 className="text-3xl font-bold mb-4">{selectedProject.title}</h3>
            <p className={`text-lg mb-6 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              {selectedProject.longDescription}
            </p>

            {/* Technologies */}
            <div className="mb-6">
              <h4 className="font-bold mb-3">Technologies Used:</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      isDark
                        ? 'bg-blue-500/20 text-blue-300'
                        : 'bg-blue-400/20 text-blue-700'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex gap-4">
              <motion.a
                href={selectedProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold text-center"
                whileHover={{ scale: 1.05 }}
              >
                View Live
              </motion.a>
              <motion.a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex-1 px-4 py-2 rounded-lg border font-bold text-center ${
                  isDark
                    ? 'border-gray-600 hover:bg-gray-800'
                    : 'border-gray-300 hover:bg-gray-100'
                }`}
                whileHover={{ scale: 1.05 }}
              >
                GitHub
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Projects;
