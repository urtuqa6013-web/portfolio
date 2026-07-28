import { motion } from "framer-motion";

export const LoadingSpinner = ({ isDark }) => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <motion.div
        className={`w-16 h-16 rounded-full border-4 ${
          isDark
            ? 'border-gray-700 border-t-blue-500'
            : 'border-gray-300 border-t-blue-400'
        }`}
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
      />
    </div>
  );
};