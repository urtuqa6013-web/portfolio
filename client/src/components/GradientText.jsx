export const GradientText = ({ children, className }) => {
  return (
    <span className={`bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent ${className}`}>
      {children}
    </span>
  );
};