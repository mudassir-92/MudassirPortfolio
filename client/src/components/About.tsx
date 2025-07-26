import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Code, Trophy, Laptop } from "lucide-react";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

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
    <section id="about" className="py-20 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center text-slate-800 dark:text-white mb-16"
        >
          About Me
        </motion.h2>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants} className="glass rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-slate-800 dark:text-white mb-6">My Journey</h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              I'm a backend developer and open source contributor with a passion for building 
              efficient, scalable solutions. My journey began with curiosity about how systems work, 
              which led me to specialize in backend technologies and data structures.
            </p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Currently focused on mastering Java, C++, and Kotlin while contributing to open source 
              projects and solving complex algorithmic challenges. I believe in writing clean, 
              maintainable code that makes a difference.
            </p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
            <div className="glass rounded-xl p-6 text-center hover:scale-105 transition-transform">
              <Code className="h-8 w-8 text-primary mx-auto mb-4" />
              <h4 className="font-semibold text-slate-800 dark:text-white">Specialization</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">Backend Development</p>
            </div>
            <div className="glass rounded-xl p-6 text-center hover:scale-105 transition-transform">
              <Trophy className="h-8 w-8 text-primary mx-auto mb-4" />
              <h4 className="font-semibold text-slate-800 dark:text-white">Focus Areas</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">Data Structures & Algorithms</p>
            </div>
            <div className="glass rounded-xl p-6 text-center hover:scale-105 transition-transform">
              <GraduationCap className="h-8 w-8 text-primary mx-auto mb-4" />
              <h4 className="font-semibold text-slate-800 dark:text-white">Contribution</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">Open Source Projects</p>
            </div>
            <div className="glass rounded-xl p-6 text-center hover:scale-105 transition-transform">
              <Laptop className="h-8 w-8 text-primary mx-auto mb-4" />
              <h4 className="font-semibold text-slate-800 dark:text-white">Languages</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">Java, C++, Kotlin</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
