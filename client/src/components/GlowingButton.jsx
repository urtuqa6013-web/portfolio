import { motion } from "framer-motion";

export const GlowingButton = ({ children, isDark, ...props }) => {
  return (
    <motion.button
      className={`relative px-8 py-3 rounded-lg font-bold overflow-hidden ${
        isDark
          ? 'bg-gradient-to-r from-blue-500 to-purple-600'
          : 'bg-gradient-to-r from-blue-400 to-purple-500'
      } text-white`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      <motion.div
        className="absolute inset-0 bg-white/20"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      />
      <span className="relative">{children}</span>
    </motion.button>
  );
};
