import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  SiCplusplus, 
  SiPython, 
  SiKotlin, 
  SiJavascript, 
  SiReact, 
  SiNodedotjs, 
  SiMongodb, 
  SiGit, 
  SiLinux 
} from "react-icons/si";
import { Coffee } from "lucide-react";

export function TechStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const technologies = [
    { name: "Java", icon: Coffee, color: "text-orange-500" },
    { name: "C++", icon: SiCplusplus, color: "text-blue-500" },
    { name: "Kotlin", icon: SiKotlin, color: "text-green-500" },
    { name: "Python", icon: SiPython, color: "text-blue-600" },
    { name: "Git", icon: SiGit, color: "text-orange-600" },
    { name: "Linux", icon: SiLinux, color: "text-gray-600" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-primary/5 to-violet-50 dark:from-slate-800 dark:to-slate-700" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center text-slate-800 dark:text-white mb-16"
        >
          Tech Stack
        </motion.h2>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-3 gap-8"
        >
          {technologies.map((tech) => (
            <motion.div
              key={tech.name}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="glass rounded-xl p-6 text-center hover:scale-105 transition-transform cursor-pointer"
            >
              <tech.icon className={`text-4xl ${tech.color} mx-auto mb-4`} />
              <h4 className="font-semibold text-slate-800 dark:text-white">{tech.name}</h4>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
