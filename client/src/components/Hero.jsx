import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';


const Hero = ({ isDark }) => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Full-Stack Developer';
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    if (textIndex < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayText(fullText.slice(0, textIndex + 1));
        setTextIndex(textIndex + 1);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [textIndex]);

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

  const stats = [
    { number: '10+', label: 'Projects' },
    { number: '10+', label: 'Happy Clients' },
    { number: '12+', label: 'Months Exp.' },
    { number: '100%', label: 'Dedicated' },
  ];

  return (
    <section
      id="home"
      className={`relative min-h-screen flex items-center justify-center px-6 py-32 md:pt-28 overflow-hidden ${isDark
        ? 'bg-slate-900 text-white'
        : 'bg-gradient-to-br from-white via-blue-50 to-pink-50 text-gray-800'
        }`}
    >
      {/* Floating Background Blobs */}
      <motion.div
        className="absolute top-[10%] left-[5%] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(0, 217, 255, 0.15) 0%, transparent 70%)',
        }}
        animate={{ y: [0, -40, 0], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[5%] right-[5%] w-[350px] h-[350px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(224, 195, 252, 0.2) 0%, transparent 70%)',
        }}
        animate={{ y: [0, 40, 0], x: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div

        className="relative z-10 max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Content */}
        <motion.div
          className="space-y-6 order-2 md:order-1"
          variants={itemVariants}
        >
          {/* Main Heading */}
          <div>
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-4 leading-tight"
              variants={itemVariants}
            >
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Urwa
              </span>
            </motion.h1>

            {/* Typewriter Effect */}
            <motion.div
              className={`text-xl md:text-2xl font-semibold h-10 flex items-center ${isDark ? 'text-cyan-400' : 'text-cyan-500'
                }`}
              variants={itemVariants}
            >
              {displayText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="ml-1 text-cyan-500"
              >
                |
              </motion.span>
            </motion.div>
          </div>

          {/* Description */}
          <motion.p
            className={`text-base md:text-lg max-w-md leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'
              }`}
            variants={itemVariants}
          >
            Building beautiful, fast, and responsive web applications with modern technologies.
            Specializing in MERN stack development with a focus on user experience and performance.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div className="flex flex-wrap gap-6" variants={itemVariants}>
            <motion.a
              href="#projects"
              className="px-8 py-4 rounded-xl font-semibold flex items-center gap-2 text-white bg-gradient-to-r from-cyan-400 to-blue-400 shadow-lg shadow-cyan-500/40 transition-all hover:-translate-y-1 hover:shadow-cyan-500/60"
              whileHover={{ scale: 1.02, x: 5 }}
              whileTap={{ scale: 0.98 }}
            >
              View My Work <HiArrowRight className="text-lg" />
            </motion.a>

            <motion.a
              href="#contact"
              className={`px-8 py-4 rounded-xl font-semibold border-2 border-cyan-400 transition-all hover:-translate-y-1 ${isDark
                ? 'bg-slate-800 text-cyan-400 hover:bg-slate-700'
                : 'bg-white text-cyan-500 hover:bg-blue-50'
                }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8"
            variants={itemVariants}
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`p-4 rounded-2xl text-center border transition-all hover:-translate-y-1 ${isDark
                  ? 'bg-slate-800/50 border-cyan-400/20 hover:border-cyan-400/60 hover:shadow-lg hover:shadow-cyan-500/10'
                  : 'bg-white border-cyan-400/20 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20'
                  }`}
              >
                <div className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className={`text-xs md:text-sm mt-1 font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Side - Profile Image */}
        <motion.div
          className="relative flex justify-center items-center h-[300px] md:h-[450px] order-1 md:order-2"
          variants={itemVariants}
        >
          {/* Rotating Gradient Ring */}
          <motion.div
            className="absolute w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[380px] md:h-[380px] rounded-full opacity-60"
            style={{
              background: 'linear-gradient(135deg, #00D9FF, #8EC5FC)',
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          />

          {/* Floating Image Container */}
          <motion.div
           className="relative w-[230px] h-[230px] sm:w-[280px] sm:h-[280px] md:w-[360px] md:h-[360px]"
            animate={{ y: [0, -25, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            <motion.div
              className="w-full h-full rounded-full overflow-hidden border-8 border-white shadow-2xl shadow-cyan-500/30"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <img
                src="/images/profile.png"
                alt="Urwa"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;