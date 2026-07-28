import { motion } from "framer-motion";
import { HiSun, HiMoon } from "react-icons/hi";



const ThemeToggle = ({ isDark, toggleTheme }) => {
  return (
    <motion.button
      onClick={toggleTheme}
      className="
fixed
top-24
right-8
z-40
p-3
rounded-full
bg-gradient-to-r
from-blue-500
to-purple-600
text-white
shadow-lg
hover:shadow-xl
transition-all
"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        animate={{ rotate: isDark ? 0 : 180 }}
        transition={{ duration: 0.5 }}
      >
        {isDark ? (
          <HiMoon className="text-xl" />
        ) : (
          <HiSun className="text-xl" />
        )}
      </motion.div>
    </motion.button>
  );
};


export default ThemeToggle;