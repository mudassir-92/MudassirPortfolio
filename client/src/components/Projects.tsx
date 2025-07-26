import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const projects = [
    {
      title: "MASM Debugger",
      description: "A comprehensive debugging tool for Microsoft Macro Assembler (MASM) programs. Features step-by-step execution, register monitoring, memory visualization, and assembly code analysis.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: ["Assembly", "MASM", "Debugging", "Systems Programming"],
      github: "https://github.com/mudassir-92/MASM_Debugger",
      demo: "#"
    },
    {
      title: "Data Structures Library",
      description: "Implementation of fundamental data structures in Java and C++. Includes linked lists, stacks, queues, trees, and hash tables with comprehensive test suites.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: ["Java", "C++", "Data Structures", "Algorithms"],
      github: "#",
      demo: "#"
    },
    {
      title: "Algorithm Practice Solutions",
      description: "Collection of LeetCode and competitive programming solutions with detailed explanations and time complexity analysis.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: ["Java", "C++", "Algorithms", "Problem Solving"],
      github: "#",
      demo: "#"
    },
    {
      title: "Backend API Framework",
      description: "Lightweight backend framework built with Java for rapid API development with built-in authentication and database abstraction.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: ["Java", "REST API", "Backend", "Framework"],
      github: "#",
      demo: "#"
    },
    {
      title: "Kotlin Android Utils",
      description: "Collection of utility functions and extensions for Android development in Kotlin, focusing on performance and code reusability.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: ["Kotlin", "Android", "Mobile", "Utilities"],
      github: "#",
      demo: "#"
    },
    {
      title: "Performance Benchmarking Tool",
      description: "Cross-platform benchmarking tool to compare algorithm performance across different programming languages and implementations.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: ["C++", "Performance", "Benchmarking", "Cross-platform"],
      github: "#",
      demo: "#"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="projects" className="py-20 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center text-slate-800 dark:text-white mb-16"
        >
          Featured Projects
        </motion.h2>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="glass rounded-2xl overflow-hidden hover:scale-105 transition-transform"
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <Button variant="ghost" size="sm" asChild>
                    <a href={project.github} className="flex items-center text-primary hover:text-primary/80">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button variant="ghost" size="sm" asChild>
                    <a href={project.demo} className="flex items-center text-primary hover:text-primary/80">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
