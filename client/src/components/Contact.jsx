import axios from 'axios';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiCheckCircle, HiExclamationCircle } from 'react-icons/hi';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Contact = ({ isDark }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

    const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Validate form first
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: 'error', message: 'Please fill all fields' });
      setIsLoading(false);
      return;
    }

    try {
      console.log(import.meta.env.VITE_API_URL);
console.log(`${import.meta.env.VITE_API_URL}/api/contact`);
      // Send data to your backend API
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/contact`, 
        formData
      );

      setStatus({ type: 'success', message: 'Message sent successfully!' });
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Reset status after 3 seconds
      setTimeout(() => setStatus(null), 3000);
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

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
      transition: { duration: 0.5 },
    },
  };

  const contactInfo = [
    {
      icon: FiMail,
      label: 'Email',
      value: 'urtuqa6013@gmail.com',
      href: 'mailto:urtuqa6013@gmail.com',
    },
    {
      icon: FiPhone,
      label: 'Phone',
      value: '+92 3217213659',
      href: 'tel:+923217213659',
    },
    {
      icon: FiMapPin,
      label: 'Location',
      value: 'Faisalabad, Punjab, Pakistan',
      href: '#',
    },
  ];

  return (
    <section id="contact" className="min-h-screen py-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
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
            Get In Touch
          </p>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Let's Work Together
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Have a project in mind or want to discuss opportunities? I'd love to hear from you!
          </p>
        </motion.div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Info */}
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <motion.a
                  key={index}
                  href={info.href}
                  variants={itemVariants}
                  className={`p-6 rounded-lg  border transition-all ${
                    isDark
                      ? 'bg-gray-800/50 border-gray-700/50 hover:bg-gray-800/80'
                      : 'bg-white/50 border-gray-200/50 hover:bg-white/80'
                  }`}
                  whileHover={{ x: 10 }}
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      className={`p-3 rounded-lg ${
                        isDark
                          ? 'bg-blue-500/20'
                          : 'bg-blue-400/20'
                      }`}
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <IconComponent className={`text-2xl ${
                        isDark ? 'text-blue-400' : 'text-blue-600'
                      }`} />
                    </motion.div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{info.label}</h4>
                      <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                        {info.value}
                      </p>
                    </div>
                  </div>
                </motion.a>
              );
            })}

            {/* Social Links */}
            <motion.div
              className={`p-6 rounded-lg backdrop-blur-md border ${
                isDark
                  ? 'bg-gray-800/50 border-gray-700/50'
                  : 'bg-white/50 border-gray-200/50'
              }`}
              variants={itemVariants}
            >
              <h4 className="font-bold text-lg mb-4">Connect With Me</h4>
              <div className="flex gap-4">
                {[
                  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/urwa-tul-wusqa-39029341b/', icon: '💼' },
                  { name: 'GitHub', url: 'https://github.com', icon: '🐙' },
                  { name: 'Gmail', url: 'https://mail.google.com/mail/?view=cm&fs=1&to=urtuqa6013@gmail.com', icon: '📧' },
                ].map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 rounded-full flex items-center justify-center text-xl transition-all ${
                      isDark
                        ? 'bg-gray-700 hover:bg-blue-600'
                        : 'bg-gray-300 hover:bg-blue-400'
                    }`}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                    title={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className={`lg:col-span-2 p-8 rounded-lg backdrop-blur-md border ${
              isDark
                ? 'bg-gray-800/50 border-gray-700/50'
                : 'bg-white/50 border-gray-200/50'
            }`}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              {/* Name */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <label className="block text-sm font-bold mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg focus:outline-none transition-all ${
                    isDark
                      ? 'bg-gray-700 border border-gray-600 focus:border-blue-500 text-white'
                      : 'bg-gray-100 border border-gray-300 focus:border-blue-400'
                  }`}
                  placeholder="Your name"
                />
              </motion.div>

              {/* Email */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <label className="block text-sm font-bold mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg focus:outline-none transition-all ${
                    isDark
                      ? 'bg-gray-700 border border-gray-600 focus:border-blue-500 text-white'
                      : 'bg-gray-100 border border-gray-300 focus:border-blue-400'
                  }`}
                  placeholder="your@email.com"
                />
              </motion.div>

              {/* Subject */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <label className="block text-sm font-bold mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg focus:outline-none transition-all ${
                    isDark
                      ? 'bg-gray-700 border border-gray-600 focus:border-blue-500 text-white'
                      : 'bg-gray-100 border border-gray-300 focus:border-blue-400'
                  }`}
                  placeholder="Project inquiry"
                />
              </motion.div>

              {/* Message */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <label className="block text-sm font-bold mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className={`w-full px-4 py-3 rounded-lg focus:outline-none transition-all resize-none ${
                    isDark
                      ? 'bg-gray-700 border border-gray-600 focus:border-blue-500 text-white'
                      : 'bg-gray-100 border border-gray-300 focus:border-blue-400'
                  }`}
                  placeholder="Your message here..."
                />
              </motion.div>

              {/* Status Messages */}
              {status && (
                <motion.div
                  className={`p-4 rounded-lg flex items-center gap-3 ${
                    status.type === 'success'
                      ? isDark
                        ? 'bg-green-500/20 border border-green-500/50 text-green-300'
                        : 'bg-green-400/20 border border-green-400/50 text-green-700'
                      : isDark
                      ? 'bg-red-500/20 border border-red-500/50 text-red-300'
                      : 'bg-red-400/20 border border-red-400/50 text-red-700'
                  }`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {status.type === 'success' ? (
                    <HiCheckCircle className="text-xl flex-shrink-0" />
                  ) : (
                    <HiExclamationCircle className="text-xl flex-shrink-0" />
                  )}
                  {status.message}
                </motion.div>
              )}

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isLoading}
                className={`w-full py-3 rounded-lg font-bold transition-all ${
                  isDark
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 hover:shadow-lg hover:shadow-blue-500/50'
                    : 'bg-gradient-to-r from-blue-400 to-purple-500 hover:shadow-lg hover:shadow-blue-400/50'
                } text-white disabled:opacity-50`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isLoading ? (
                  <motion.div
                    className="flex items-center justify-center gap-2"
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <div className="w-4 h-4 rounded-full bg-white" />
                    Sending...
                  </motion.div>
                ) : (
                  'Send Message'
                )}
              </motion.button>
            </div>
          </motion.form>
        </div>

        {/* CTA Section */}
        <motion.div
          className={`p-12 rounded-xl backdrop-blur-md border text-center ${
            isDark
              ? 'bg-gradient-to-r from-blue-500/10 to-purple-600/10 border-blue-500/30'
              : 'bg-gradient-to-r from-blue-400/10 to-purple-500/10 border-blue-400/30'
          }`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.h3
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Ready to Collaborate?
          </motion.h3>
          <motion.p
            className={`text-lg mb-8 max-w-2xl mx-auto ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Whether you have a specific project in mind or just want to explore possibilities,
            I'm excited to hear about your ideas and discuss how I can help.
          </motion.p>
          <motion.a
            href="#contact"
            className={`inline-block px-8 py-3 rounded-lg font-bold ${
              isDark
                ? 'bg-gradient-to-r from-blue-500 to-purple-600 hover:shadow-lg hover:shadow-blue-500/50'
                : 'bg-gradient-to-r from-blue-400 to-purple-500 hover:shadow-lg hover:shadow-blue-400/50'
            } text-white transition-all`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start A Project
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
