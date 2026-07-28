import React from 'react';
import { motion } from 'framer-motion';
import { HiCheckCircle } from 'react-icons/hi';

const About = ({ isDark }) => {
  const experiences = [
    {
      year: '2023 - Present',
      title: 'Full-Stack Developer',
      company: 'Tech Company',
      description: 'Building scalable web applications using MERN stack',
      skills: ['React', 'Node.js', 'MongoDB', 'Express'],
    },
    {
      year: '2022 - 2023',
      title: 'Frontend Developer',
      company: 'Digital Agency',
      description: 'Creating responsive and interactive user interfaces',
      skills: ['React', 'Tailwind CSS', 'JavaScript'],
    },
    {
      year: '2021 - 2022',
      title: 'Junior Developer',
      company: 'Startup',
      description: 'Learning and developing core web development skills',
      skills: ['HTML', 'CSS', 'JavaScript', 'React Basics'],
    },
  ];

  const stats = [
    { label: 'Projects Completed', value: '50+', icon: '📁' },
    { label: 'Happy Clients', value: '30+', icon: '😊' },
    { label: 'Years Experience', value: '3+', icon: '⏱️' },
    { label: 'Code Commits', value: '1000+', icon: '📝' },
  ];

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
      transition: { duration: 0.8 },
    },
  };

  return (
    <section
      id="about"
      className="min-h-screen py-20 px-6 overflow-hidden"
      data-aos="fade-up"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          className="mb-20 text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants}>
            <p className={`text-lg font-semibold mb-4 ${
              isDark ? 'text-blue-400' : 'text-blue-600'
            }`}>
              About Me
            </p>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Who Am I?
            </h2>
          </motion.div>

          <motion.p
            className={`text-lg md:text-xl max-w-2xl mx-auto ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}
            variants={itemVariants}
          >
            I'm a passionate full-stack developer from Pakistan, focused on creating beautiful
            and functional web applications that solve real-world problems.
          </motion.p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className={`p-6 rounded-xl backdrop-blur-md border transition-all ${
                isDark
                  ? 'bg-gray-800/50 border-gray-700/50 hover:bg-gray-800/80'
                  : 'bg-white/50 border-gray-200/50 hover:bg-white/80'
              }`}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <motion.div
                className="text-4xl mb-3"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {stat.icon}
              </motion.div>
              <motion.p
                className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                {stat.value}
              </motion.p>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline */}
        <div className="mb-20">
          <motion.h3
            className="text-3xl font-bold mb-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            My Journey
          </motion.h3>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="grid grid-cols-1 md:grid-cols-4 gap-6 items-start"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.2 }}
              >
                {/* Year */}
                <motion.div
                  className={`md:col-span-1 ${
                    isDark ? 'text-blue-400' : 'text-blue-600'
                  } font-bold text-lg`}
                  whileHover={{ x: 10 }}
                >
                  {exp.year}
                </motion.div>

                {/* Timeline Line (Desktop only) */}
                <div className="hidden md:flex items-center justify-center">
                  <motion.div
                    className={`w-4 h-4 rounded-full ${
                      isDark
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500'
                        : 'bg-gradient-to-r from-blue-400 to-purple-500'
                    }`}
                    animate={{
                      scale: [1, 1.3, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  />
                </div>

                {/* Content */}
                <motion.div
                  className={`md:col-span-2 p-6 rounded-xl backdrop-blur-md border ${
                    isDark
                      ? 'bg-gray-800/50 border-gray-700/50 hover:bg-gray-800/80'
                      : 'bg-white/50 border-gray-200/50 hover:bg-white/80'
                  } transition-all`}
                  whileHover={{ y: -10 }}
                >
                  <h4 className="text-xl font-bold mb-2">{exp.title}</h4>
                  <p className={`text-sm mb-3 ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {exp.company}
                  </p>
                  <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    {exp.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <motion.span
                        key={i}
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          isDark
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
              </motion.div>
            ))}
          </div>
        </div>

        {/* About Text */}
        <motion.div
          className={`max-w-3xl mx-auto p-8 rounded-xl backdrop-blur-md border ${
            isDark
              ? 'bg-gray-800/50 border-gray-700/50'
              : 'bg-white/50 border-gray-200/50'
          }`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="space-y-4">
            <motion.p
              className={`text-lg leading-relaxed ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              With over 3 years of experience in web development, I specialize in building
              modern, responsive, and performant applications using the MERN stack. My passion
              for clean code and user-centered design drives me to create solutions that not only
              work well but also provide exceptional user experiences.
            </motion.p>

            <motion.p
              className={`text-lg leading-relaxed ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              When I'm not coding, you'll find me exploring new technologies, contributing to
              open-source projects, or writing about web development. I believe in continuous
              learning and staying updated with the latest trends in the tech industry.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
