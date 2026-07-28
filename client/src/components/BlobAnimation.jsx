import { motion } from "framer-motion";


export const BlobAnimation = ({ isDark }) => {
  return (
    <motion.div
      className={`absolute w-96 h-96 rounded-full blur-3xl opacity-20 ${
        isDark ? 'bg-blue-500' : 'bg-blue-300'
      }`}
      animate={{
        scale: [1, 1.2, 1],
        rotate: [0, 360],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
};