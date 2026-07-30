import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = ({ isDark }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Skills", id: "skills" },
    { name: "Contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navItems.map((item) =>
        document.getElementById(item.id)
      );

      const current = sections.find((section) => {
        if (!section) return false;

        const rect = section.getBoundingClientRect();

        return rect.top <= 120 && rect.bottom >= 120;
      });

      if (current) {
        setActiveSection(current.id);
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsOpen(false);

    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: -15,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <>
      {/* ================= Desktop Navbar ================= */}

      <motion.nav
        initial={{
          y: -80,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.7,
        }}
        className={`hidden md:flex
        fixed
        -translate-x-1/2
        z-50
        w-[100%]
        px-8
        py-3
        transition-all
        duration-500

        ${scrolled
            ? isDark
              ? "bg-[#0a0e27]/80 backdrop-blur-2xl border border-cyan-500/20 shadow-[0_10px_40px_rgba(0,217,255,.18)]"
              : "bg-white/80 backdrop-blur-2xl border border-cyan-200 shadow-[0_10px_40px_rgba(0,217,255,.15)]"
            : isDark
              ? "bg-[#0a0e27]/60 backdrop-blur-xl"
              : "bg-white/60 backdrop-blur-xl"
          }`}
      >
        <div className="w-full sticky top-0 z-50 flex items-center justify-between">

          {/* ================= Logo ================= */}

          <motion.div
            whileHover={{
              scale: 1.05,
              rotate: -2,
            }}
            animate={{
              filter: [
                "hue-rotate(0deg)",
                "hue-rotate(12deg)",
                "hue-rotate(0deg)",
              ],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="cursor-pointer
            text-3xl
            font-black
            tracking-tight
            bg-gradient-to-r
            from-[#00D9FF]
            via-[#06D7D9]
            via-[#8EC5FC]
            to-[#E0C3FC]
            bg-clip-text
            text-transparent"
          >
            Urwa
          </motion.div>

          {/* ================= Desktop Menu ================= */}

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex items-center gap-8 flex-1 justify-center"
          >
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                variants={itemVariants}
                whileHover={{
                  y: -2,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                onClick={() => scrollToSection(item.id)}
                className={`relative
                px-1
                py-2
                font-semibold
                transition-all
                duration-300

                ${activeSection === item.id
                    ? "text-[#00D9FF]"
                    : isDark
                      ? "text-gray-300 hover:text-[#00D9FF]"
                      : "text-gray-700 hover:text-[#00D9FF]"
                  }`}
              >
                {item.name}

                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeTab"
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 28,
                    }}
                    className="absolute
                    -bottom-1
                    left-0
                    right-0
                    h-[3px]
                    rounded-full
                    bg-gradient-to-r
                    from-[#00D9FF]
                    to-[#E0C3FC]
                    shadow-[0_0_18px_#00D9FF]"
                  />
                )}
              </motion.button>
            ))}
          </motion.div>
          {/* ================= Hire Me Button ================= */}

          <motion.a
            href="#contact"
            whileHover={{
              scale: 1.05,
              y: -3,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="
            px-7
            py-3
            rounded-full
            font-bold
            text-white
            bg-gradient-to-r
            from-[#00D9FF]
            via-[#06D7D9]
            to-[#8EC5FC]
            shadow-[0_0_25px_rgba(0,217,255,.35)]
            transition-all
            duration-300
            "
          >
            Hire Me
          </motion.a>

        </div>
      </motion.nav>


      {/* ================= Mobile Navbar ================= */}

      <motion.nav
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
        }}
        className={`md:hidden
        fixed
        top-0
        left-0
        right-0
        z-50
        px-5
        py-4
        transition-all
        duration-500

        ${scrolled
            ? isDark
              ? "bg-[#0a0e27]/90 backdrop-blur-2xl border-b border-cyan-500/20"
              : "bg-white/90 backdrop-blur-2xl border-b border-cyan-200"
            : isDark
              ? "bg-[#0a0e27]/60 backdrop-blur-xl"
              : "bg-white/60 backdrop-blur-xl"
          }`}
      >

        <div className="flex items-center justify-between">


          {/* Mobile Logo */}

          <motion.div
            whileHover={{
              scale: 1.05,
            }}
            className="
            text-2xl
            font-black
            tracking-tight
            bg-gradient-to-r
            from-[#00D9FF]
            via-[#06D7D9]
            via-[#8EC5FC]
            to-[#E0C3FC]
            bg-clip-text
            text-transparent
            "
          >
            Urwa
          </motion.div>



          {/* Menu Icon */}

          <motion.button
            whileTap={{
              scale: 0.9,
            }}
            onClick={() => setIsOpen(!isOpen)}
            className={`text-3xl ${isDark
              ? "text-white"
              : "text-gray-800"
              }`}
          >

            {isOpen ? <HiX /> : <HiMenu />}

          </motion.button>

        </div>



        {/* ================= Mobile Menu ================= */}


        <motion.div
          initial={{
            opacity: 0,
            height: 0,
          }}
          animate={
            isOpen
              ? {
                opacity: 1,
                height: "auto",
                marginTop: 20,
              }
              : {
                opacity: 0,
                height: 0,
                marginTop: 0,
              }
          }
          transition={{
            duration: 0.35,
          }}

          className={`overflow-hidden
          rounded-3xl
          
          ${isDark
              ? "bg-[#0a0e27]/95 backdrop-blur-2xl border border-cyan-500/20"
              : "bg-white/95 backdrop-blur-2xl border border-cyan-200"
            }`}
        >


          <div className="flex flex-col gap-5 p-6">


            {navItems.map((item, index) => (

              <motion.button

                key={item.id}

                initial={{
                  opacity: 0,
                  x: -20,
                }}

                animate={
                  isOpen
                    ? {
                      opacity: 1,
                      x: 0,
                    }
                    : {}
                }

                transition={{
                  delay: index * 0.08,
                }}

                whileHover={{
                  x: 10,
                }}

                onClick={() =>
                  scrollToSection(item.id)
                }


                className={`text-left
                font-semibold
                transition-all
                duration-300

                ${activeSection === item.id
                    ? "text-[#00D9FF]"
                    : isDark
                      ? "text-gray-300 hover:text-[#00D9FF]"
                      : "text-gray-700 hover:text-[#00D9FF]"
                  }`}
              >

                {item.name}

              </motion.button>

            ))}



            {/* Mobile Hire Button */}


            <motion.a

              href="#contact"

              whileHover={{
                scale: 1.03,
              }}

              whileTap={{
                scale: 0.95,
              }}

              onClick={() =>
                setIsOpen(false)
              }

              className="
              mt-2
              py-3
              rounded-full
              text-center
              font-bold
              text-white
              bg-gradient-to-r
              from-[#00D9FF]
              via-[#06D7D9]
              to-[#8EC5FC]
              shadow-[0_0_25px_rgba(0,217,255,.4)]
              "
            >

              Hire Me

            </motion.a>


          </div>


        </motion.div>


      </motion.nav>




     

    </>
  );
};


export default Navbar;
