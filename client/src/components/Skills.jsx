import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaLinux,
  FaPalette,
  FaCog,
  FaLaptopCode,
  FaAws,
} from "react-icons/fa";

import {
  SiExpress,
  SiMongodb,
  SiJavascript,
  SiTailwindcss,
  SiJsonwebtokens,
  SiPostman,
  SiVite,
  SiPostgresql,
  SiFramer,
  SiBootstrap,
  SiApifox,
} from "react-icons/si";


const skills = [
  {
    name: "React",
    icon: FaReact,
    color: "text-cyan-400",
  },
  {
    name: "Node.js",
    icon: FaNodeJs,
    color: "text-green-500",
  },
  {
    name: "Express.js",
    icon: SiExpress,
    color: "text-gray-300",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "text-green-500",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "text-yellow-400",
  },
  {
    name: "HTML5",
    icon: FaHtml5,
    color: "text-orange-500",
  },
  {
    name: "CSS3",
    icon: FaCss3Alt,
    color: "text-blue-500",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "text-sky-400",
  },
  {
    name: "Bootstrap",
    icon: SiBootstrap,
    color: "text-purple-500",
  },
  {
    name: "Git & GitHub",
    icon: FaGitAlt,
    color: "text-orange-500",
  },
  {
    name: "JWT",
    icon: SiJsonwebtokens,
    color: "text-pink-500",
  },
  {
    name: "Postman",
    icon: SiPostman,
    color: "text-orange-400",
  },
  {
    name: "Vite",
    icon: SiVite,
    color: "text-purple-400",
  },
  {
    name: "AWS",
    icon: FaAws,
    color: "text-yellow-500",
  },
  {
    name: "Linux",
    icon: FaLinux,
    color: "text-yellow-300",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    color: "text-blue-400",
  },
  {
    name: "REST API",
    icon: SiApifox,
    color: "text-cyan-300",
  },
  {
    name: "Framer Motion",
    icon: SiFramer,
    color:"text-gray-300",
  },
];

const specialties = [
  {
    title: "Frontend Development",
    description:
      "Building modern, responsive, and interactive user interfaces with React and modern CSS.",
    skills: ["React", "Tailwind", "Framer Motion"],
    icon: FaPalette,
  },
  {
    title: "Backend Development",
    description:
      "Developing secure REST APIs and scalable backend applications using Node.js and Express.",
    skills: ["Node.js", "Express", "MongoDB"],
    icon: FaCog,
  },
  {
    title: "Full-Stack Development",
    description:
      "Creating complete MERN applications from frontend UI to backend APIs and databases.",
    skills: ["MERN", "REST API", "JWT"],
    icon: FaLaptopCode,
  },
];

export default function Skills({ isDark }) {
  return (
    <section
      id="skills"
      className={`min-h-screen py-20 px-6 overflow-hidden transition-all duration-500
         
        }`}
    >
      <div className="max-w-6xl mx-auto">

        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className={`text-lg font-semibold mb-4 ${isDark ? 'text-blue-400' : 'text-blue-600'
            }`}>
            My Skills
          </p>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Technologies & Tools
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
            Here's a showcase of my technical skills and expertise
          </p>
        </motion.div>

        <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 ${isDark ? 'text-blue-400' : 'text-blue-600'
          }`}
        >

          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.06,
                  duration: 0.5,
                }}
                animate={{
                  y: [0, -5, 0],
                }}
                whileHover={{
                  y: -10,
                  scale: 1.05,
                }}
                className={`group rounded-xl p-8 flex flex-col items-center justify-center
                transition-all duration-300 cursor-pointer border
                  ${isDark
                    ? "bg-gray-800/60 border-gray-700 text-gray-300 hover:bg-gray-700 hover:border-blue-500"
                    : "bg-white border-gray-200 text-gray-700 hover:bg-gray-100"
                  }`}
              >
                <Icon
                  className={`text-5xl ${skill.color} mb-5 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_20px_currentColor]`}
                />

                <h3 className={` mt-4text-center font-semibold ${isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                  {skill.name}
                </h3>
              </motion.div>
            );
          })}

        </div>

        {/* Specialties Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mt-20">

          {specialties.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.2,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className={`group rounded-2xl p-8 transition-all duration-300 border
                ${isDark
                    ? "bg-[#0f1b32] border-cyan-500/20 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]"
                    : "bg-white border-gray-200 hover:border-cyan-400 hover:shadow-xl"
                  }`}
              >
                <Icon className="text-5xl text-cyan-400 mb-4 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_20px_#22d3ee]" />

                <h3 className={`text-1xl font-bold mb-3 ${isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  {item.title}
                </h3>

                <p className={`leading-6 mb-5 ${isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1 rounded-full text-sm font-medium border
                     ${isDark
                          ? "bg-cyan-500/10 text-cyan-300 border-cyan-500/20"
                          : "bg-cyan-50 text-cyan-700 border-cyan-200"
                        }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </motion.div>
            );
          })}

        </div>

        {/* Always Learning */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className={`mt-24 rounded-3xl border p-10 text-center
             ${isDark
              ? "border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"
              : "border-cyan-200 bg-gradient-to-r from-cyan-50 via-blue-50 to-purple-50"
            }`}
        >
          <h2 className={`text-3xl font-bold mb-5 ${isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Always Learning
          </h2>

          <p className={`max-w-3xl mx-auto leading-8 ${isDark ? "text-gray-300" : "text-gray-700"
            }`}
          >
            I continuously improve my skills by learning modern technologies,
            building real-world MERN applications, and exploring best practices
            in full-stack web development.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">

            {[
              "TypeScript",
              "Next.js",
              "GraphQL",
              "AWS",
              "Docker",
              "Redis",
              "CI/CD",
              "System Design",
            ].map((tech) => (
              <motion.span
                key={tech}
                whileHover={{
                  scale: 1.1,
                }}
                className={`px-5 py-2 rounded-full font-medium border
                      ${isDark
                    ? "bg-cyan-500/10 text-cyan-300 border-cyan-500/20"
                    : "bg-cyan-50 text-cyan-700 border-cyan-200"
                  }`}
              >
                {tech}
              </motion.span>
            ))}

          </div>
        </motion.div>

      </div>
    </section>
  );
}