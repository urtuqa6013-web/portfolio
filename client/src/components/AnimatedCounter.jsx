import { useState, useEffect } from "react";
import { motion } from "framer-motion";


export const AnimatedCounter = ({ value, isDark }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const increment = value / 50;
    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev >= value) {
          clearInterval(timer);
          return value;
        }
        return Math.ceil(prev + increment);
      });
    }, 30);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <motion.span
      className="font-bold text-3xl bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
      key={count}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {count}
    </motion.span>
  );
};