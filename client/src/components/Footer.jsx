import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Footer = ({ isDark }) => {
  const currentYear = new Date().getFullYear();

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
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const socialLinks = [
    { icon: FiGithub, url: 'https://github.com', label: 'GitHub' },
    { icon: FiLinkedin, url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: FiMail, url: 'https://mail.google.com/mail/?view=cm&fs=1&to=urtuqa6013@gmail.com', label: 'Email' },
  ];

  const footerLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.footer
      className={`border-t transition-colors ${
        isDark ? 'bg-slate-900/50 border-gray-700/50' : 'bg-white/50 border-gray-200/50'
      }`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand */}
          <motion.div variants={itemVariants}>
            <motion.div
              className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4"
              whileHover={{ scale: 1.05 }}
            >
              Urwa Tul Wusqa
            </motion.div>
            <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Full-stack developer passionate about creating beautiful and functional web applications.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <div className="space-y-2">
              {footerLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className={`block text-sm transition-colors ${
                    isDark
                      ? 'text-gray-400 hover:text-blue-400'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                  whileHover={{ x: 5 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <div className="space-y-2">
              {[
                'Web Development',
                'Full-Stack Development',
                'UI/UX Design',
                'Consulting',
              ].map((service) => (
                <motion.p
                  key={service}
                  className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
                  whileHover={{ x: 5 }}
                >
                  {service}
                </motion.p>
              ))}
            </div>
          </motion.div>

          {/* Connect */}
          <motion.div variants={itemVariants}>
            <h4 className="font-bold text-lg mb-4">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-full transition-all ${
                      isDark
                        ? 'bg-gray-800 hover:bg-blue-600'
                        : 'bg-gray-200 hover:bg-blue-400'
                    }`}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                    title={social.label}
                  >
                    <Icon className="text-lg" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className={`h-px mb-8 ${isDark ? 'bg-gray-700/50' : 'bg-gray-300/50'}`}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />

        {/* Bottom */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-4"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            © {currentYear} Urwa. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <motion.a
              href="#"
              className={`transition-colors ${
                isDark
                  ? 'text-gray-400 hover:text-blue-400'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
              whileHover={{ scale: 1.1 }}
            >
              Privacy Policy
            </motion.a>
            <motion.a
              href="#"
              className={`transition-colors ${
                isDark
                  ? 'text-gray-400 hover:text-blue-400'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
              whileHover={{ scale: 1.1 }}
            >
              Terms of Service
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
