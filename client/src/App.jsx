import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ThemeToggle from './components/ThemeToggle';

// Context
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 100,
    });
  }, []);

  useEffect(() => {
    // Save theme preference
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setIsDark(savedTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    localStorage.setItem('theme', !isDark ? 'dark' : 'light');
  };

  return (
    <ThemeProvider value={{ isDark, toggleTheme }}>
      <div className={`${isDark ? 'dark' : 'light'}`}>
        <div
          className={`min-h-screen transition-colors duration-300 ${
            isDark
              ? 'bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white'
              : 'bg-gradient-to-b from-white via-slate-50 to-white text-slate-900'
          }`}
        >
          {/* Animated background blur elements */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className={`absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 ${
                isDark ? 'bg-blue-500' : 'bg-blue-300'
              }`}
              animate={{
                y: [0, 30, 0],
                x: [0, 20, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.div
              className={`absolute top-1/2 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 ${
                isDark ? 'bg-purple-500' : 'bg-purple-300'
              }`}
              animate={{
                y: [0, -30, 0],
                x: [0, -20, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.div
              className={`absolute -bottom-1/2 left-1/2 w-96 h-96 rounded-full blur-3xl opacity-20 ${
                isDark ? 'bg-pink-500' : 'bg-pink-300'
              }`}
              animate={{
                y: [0, 40, 0],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </div>

          {/* Main Content */}
          <div className="relative z-10">
            <Navbar isDark={isDark} />
            <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
            <main>
              <Hero isDark={isDark} />
              <About isDark={isDark} />
              <Projects isDark={isDark} />
              <Skills isDark={isDark} />
              <Contact isDark={isDark} />
            </main>
            <Footer isDark={isDark} />
            <ScrollToTop />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
