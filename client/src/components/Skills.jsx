import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiStar } from 'react-icons/hi';
import {
  FaReact,
  FaNode,
  FaDatabase,
  FaGitAlt,
  FaPython,
  FaDocker,
  FaLinux,
  FaCode,
  FaPalette,
  FaTools,
  FaCog,
  FaLaptopCode,
} from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiJavascript, SiVite, SiPostman } from 'react-icons/si';


const Skills = ({ isDark }) => {
  const [selectedCategory, setSelectedCategory] = useState('frontend');

  const skillCategories = {
    frontend: {
      title: 'Frontend',
      icon: FaPalette,
      skills: [
        { name: 'React', proficiency: 95, icon: FaReact },
        { name: 'JavaScript', proficiency: 90, icon: SiJavascript },
        { name: 'Tailwind CSS', proficiency: 92, icon: SiTailwindcss },
        { name: 'Framer Motion', proficiency: 88, icon: FaCode },
        { name: 'HTML/CSS', proficiency: 95, icon: FaCode },
      ],
    },
    backend: {
      title: 'Backend',
      icon: FaCog,
      skills: [
        { name: 'Node.js', proficiency: 90, icon: FaNode },
        { name: 'Express.js', proficiency: 88, icon: SiExpress },
        { name: 'MongoDB', proficiency: 87, icon: SiMongodb },
        { name: 'PostgreSQL', proficiency: 80, icon: FaDatabase },
        { name: 'REST APIs', proficiency: 92, icon: FaCode },
      ],
    },
    tools: {
      title: 'Tools & Others',
      icon: FaTools,
      skills: [
        { name: 'Git', proficiency: 90, icon: FaGitAlt },
        { name: 'Postman', proficiency: 82, icon: SiPostman },
        { name: 'Linux', proficiency: 85, icon: FaLinux },
        { name: 'Vite', proficiency: 78, icon: SiVite },
        { name: 'AWS', proficiency: 75, icon: FaCode },
      ],
    },
  };

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

  const progressVariants = {
    hidden: { width: 0 },
    visible: (custom) => ({
      width: `${custom}%`,
      transition: { duration: 1.5, ease: 'easeOut' },
    }),
  };

  return (
    <section id="skills" className="min-h-screen py-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className={`text-lg font-semibold mb-4 ${isDark ? 'text-blue-400' : 'text-blue-600'
            }`}>
            My Skills
          </p>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Technologies & Tools
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
            Here's a showcase of my technical skills and expertise
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {Object.entries(skillCategories).map(([key, category]) => {
            const CategoryIcon = category.icon;
            return (
              <motion.button
                key={key}
                onClick={() => setSelectedCategory(key)}
                
                className={`px-8 py-4 rounded-2xl font-semibold flex items-center gap-3 transition-all duration-300 border ${selectedCategory === key
                  ? "bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white shadow-2xl shadow-blue-500/40 border-transparent"
                  : isDark
                    ? "bg-gray-800/60 border-gray-700 text-gray-300 hover:bg-gray-700 hover:border-blue-500"
                    : "bg-white border-gray-200 text-gray-700 hover:bg-gray-100"
                  }`}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >


                <CategoryIcon className="text-2xl" />
                <span>{category.title}</span>
              </motion.button>
            )
          })}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {skillCategories[selectedCategory].skills.map((skill, index) => {
            const IconComponent = skill.icon;

            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.div
                  className={`p-6 rounded-lg backdrop-blur-md border ${isDark
                    ? 'bg-gray-800/50 border-gray-700/50 hover:bg-gray-800/80'
                    : 'bg-white/50 border-gray-200/50 hover:bg-white/80'
                    } transition-all`}
                  whileHover={{ y: -10 }}
                >
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <motion.div
                        className={`p-3 rounded-lg ${isDark
                          ? 'bg-blue-500/20'
                          : 'bg-blue-400/20'
                          }`}
                        animate={{ rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      >
                        <IconComponent
                          className={`text-2xl ${isDark ? 'text-blue-400' : 'text-blue-600'
                            }`} />
                      </motion.div>
                      <h4 className="text-lg font-bold">{skill.name}</h4>
                    </div>
                    <motion.div
                      className="font-bold text-lg bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                    >
                      {skill.proficiency}%
                    </motion.div>
                  </div>

                  {/* Progress Bar */}
                  <div className={`h-3 rounded-full overflow-hidden ${isDark ? 'bg-gray-700' : 'bg-gray-300'
                    }`}>
                    <motion.div
                      className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
                      custom={skill.proficiency}
                      variants={progressVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.5 }}
                    />
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 mt-4">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: i * 20 < skill.proficiency ? 1 : 0.2, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <HiStar
                          className={`text-lg ${i * 20 < skill.proficiency
                            ? 'text-yellow-400'
                            : isDark
                              ? 'text-gray-600'
                              : 'text-gray-400'
                            }`}
                        />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Skills Highlight Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            {
              title: 'Frontend Development',
              description: 'Creating beautiful and responsive user interfaces with React and modern CSS',
              skills: ['React', 'Tailwind', 'Framer Motion'],
              icon: FaPalette,
            },
            {
              title: 'Backend Development',
              description: 'Building scalable server-side applications with Node.js and Express',
              skills: ['Node.js', 'Express', 'MongoDB'],
              icon: FaCog,
            },
            {
              title: 'Full-Stack Solutions',
              description: 'End-to-end development of complete web applications',
              skills: ['MERN', 'APIs', 'Databases'],
              icon: FaLaptopCode,
            },
          ].map((specialty, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`p-8 rounded-xl backdrop-blur-md border ${isDark
                ? 'bg-gray-800/50 border-gray-700/50 hover:bg-gray-800/80'
                : 'bg-white/50 border-gray-200/50 hover:bg-white/80'
                } transition-all`}
              whileHover={{ y: -20 }}
            >

              <motion.div
                className="text-5xl mb-4"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <specialty.icon className={isDark ? "text-blue-400" : "text-blue-600"} />
              </motion.div>
              <h3 className="text-xl font-bold mb-3">{specialty.title}</h3>
              <p className={`mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {specialty.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {specialty.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${isDark
                      ? 'bg-blue-500/20 text-blue-300'
                      : 'bg-blue-400/20 text-blue-700'
                      }`}
                    whileHover={{ scale: 1.1 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Learning Section */}
        <motion.div
          className={`p-8 rounded-xl backdrop-blur-md border text-center ${isDark
            ? 'bg-gradient-to-r from-blue-500/10 to-purple-600/10 border-blue-500/30'
            : 'bg-gradient-to-r from-blue-400/10 to-purple-500/10 border-blue-400/30'
            }`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-4">Always Learning</h3>
          <p className={`mb-6 max-w-2xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
            I'm constantly staying updated with the latest technologies and trends in web development.
            Currently exploring: TypeScript, Next.js, GraphQL, and Cloud Technologies
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['TypeScript', 'Next.js', 'GraphQL', 'AWS', 'Docker'].map((tech) => (
              <motion.span
                key={tech}
                className={`px-4 py-2 rounded-full font-semibold ${isDark
                  ? 'bg-blue-500/20 text-blue-300'
                  : 'bg-blue-400/20 text-blue-700'
                  }`}
                whileHover={{ scale: 1.1 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
