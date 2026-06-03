import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaCheckCircle } from "react-icons/fa";
import { SiLeetcode, SiReact, SiMongodb } from "react-icons/si";

const fadeIn = (direction = "up", delay = 0) => ({
  hidden: {
    y: direction === "up" ? 40 : 0,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      delay,
      duration: 0.6,
      type: "spring",
    },
  },
});

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-[#0f0f0f] text-white flex items-center justify-center px-6 py-10"
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">
        {/* Profile Image */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          className="flex justify-center md:justify-start"
        >
          <img
            src="/profile-pic.jpg"
            alt="Sanjana Keshari"
            className="w-64 h-64 rounded-full object-cover shadow-lg border-4 border-purple-600"
          />
        </motion.div>

        {/* Text Content */}
        <div>
          <motion.h2
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            animate="show"
            className="text-4xl font-bold text-white mb-6 border-b-4 border-purple-500 inline-block"
          >
            About Me
          </motion.h2>

          <motion.p
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            className="text-lg sm:text-xl text-gray-300 leading-8 mb-6"
          >
            I’m{" "}
            <span className="text-purple-400 font-semibold">
              Sanjana Keshari
            </span>
            , an aspiring Software Development Engineer with strong foundations
            in{" "}
            <span className="text-yellow-400">
              Java, Spring Boot, Data Structures & Algorithms, and Backend
              Development
            </span>
            . I enjoy building scalable applications, designing efficient
            database systems, and developing RESTful APIs that solve real-world
            problems.
          </motion.p>

          <motion.p
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            animate="show"
            className="text-lg sm:text-xl text-gray-300 leading-8 mb-6"
          >
            I recently completed my B.Tech in Computer Science & Engineering
            with an aggregate of 89.6%. Through projects like CarCaddy and
            SafarSetu, along with my internship experience at Infosys
            Springboard, I have gained hands-on experience in software
            development, database management, API development, Agile
            methodologies, and problem-solving. I am passionate about building
            efficient software solutions and continuously enhancing my technical
            expertise.
          </motion.p>

          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            animate="show"
            className="grid sm:grid-cols-2 gap-6 text-gray-200"
          >
            {/* Core Skills */}
            <div>
              <h3 className="text-xl font-semibold mb-3 text-purple-400">
                Core Skills
              </h3>

              <ul className="space-y-2">
                <li className="flex items-center">
                  <FaCode className="text-green-400 mr-2" />
                  Java, Python, JavaScript, SQL
                </li>

                <li className="flex items-center">
                  <SiReact className="text-blue-400 mr-2" />
                  Spring Boot, REST APIs, Backend Development
                </li>

                <li className="flex items-center">
                  <SiMongodb className="text-green-500 mr-2" />
                  MySQL, MongoDB, Database Design
                </li>

                <li className="flex items-center">
                  <SiLeetcode className="text-orange-400 mr-2" />
                  DSA, OOPs, DBMS, Operating Systems
                </li>
              </ul>
            </div>

            {/* Highlights */}
            <div>
              <h3 className="text-xl font-semibold mb-3 text-purple-400">
                Highlights
              </h3>

              <ul className="space-y-2">
                <li className="flex items-center">
                  <FaCheckCircle className="text-teal-400 mr-2" />
                  Solved 200+ DSA Problems
                </li>

                <li className="flex items-center">
                  <FaCheckCircle className="text-teal-400 mr-2" />
                  Built Scalable Spring Boot Applications
                </li>

                <li className="flex items-center">
                  <FaCheckCircle className="text-teal-400 mr-2" />
                  Developed REST APIs & Optimized Database Systems
                </li>

                <li className="flex items-center">
                  <FaCheckCircle className="text-teal-400 mr-2" />
                  Microsoft Azure AI-900 Certified
                </li>

                <li className="flex items-center">
                  <FaCheckCircle className="text-teal-400 mr-2" />
                  Published Research Paper on AI-Powered Tourism Chatbot
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;