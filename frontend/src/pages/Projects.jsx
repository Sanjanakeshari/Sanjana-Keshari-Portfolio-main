import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
{
title: "CarCaddy | Car Rental Management System",
description:
"Developed a scalable backend system using Java, Spring Boot, MySQL, REST APIs, Postman, and XAMPP. Designed normalized database schemas, implemented employee and rental management modules, optimized query performance by approximately 25%, and added robust validation and exception handling for reliable operations.",
github: "https://github.com/Sanjanakeshari/CarCaddy-Backend",
live: "#",
},
{
title: "SafarSetu | Multilingual Tourism Guide Bot",
description:
"Built a Telegram Bot-based tourism assistant using Python, Telegram Bot API, REST APIs, GPS APIs, JSON, and Text-to-Speech services. Delivered multilingual heritage information, audio support, location-based recommendations, and optimized data retrieval for faster user responses.",
github: "https://github.com/Sanjanakeshari/HaveliGuideBot",
live: "https://safarsetu-web.vercel.app/",
},
{
title: "Sorting Algorithm Visualizer",
description:
"Created an interactive visualization platform using HTML, CSS, JavaScript, and p5.js to demonstrate real-time execution of sorting algorithms. Improved animation smoothness and reduced memory usage by transitioning from DOM-based rendering to Canvas API implementation.",
github: "https://github.com/Sanjanakeshari/Sorting_Algorithm_Visualizer",
live: "https://sorting-algorithm-visualizer-ten-lovat.vercel.app/",
},
  
];

function Projects() {
return ( <section className="min-h-screen py-20 px-6 bg-[#0f0f0f] text-white">
<motion.h2
className="text-4xl font-bold text-center mb-14"
initial={{ y: -40, opacity: 0 }}
whileInView={{ y: 0, opacity: 1 }}
transition={{ duration: 0.5 }}
>
My Projects
</motion.h2>

```
  <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
    {projects.map((project, index) => (
      <motion.div
        key={index}
        className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-6 hover:border-teal-400 transition duration-300 shadow-md"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.2, duration: 0.5 }}
      >
        <h3 className="text-2xl font-semibold mb-3 text-teal-300">
          {project.title}
        </h3>

        <p className="text-gray-300 text-sm leading-relaxed mb-5">
          {project.description}
        </p>

        <div className="flex gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-sm border border-gray-600 rounded-md hover:border-white transition"
          >
            <FaGithub /> GitHub
          </a>

          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-sm bg-teal-600 text-white rounded-md hover:bg-teal-700 transition"
          >
            <FaExternalLinkAlt /> Live Demo
          </a>
        </div>
      </motion.div>
    ))}
  </div>
</section>


);
}

export default Projects;
