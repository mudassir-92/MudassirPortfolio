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
              I'm a BS Software Engineering student with a passion for competitive programming and 
              software development. My journey began with curiosity about how technology works, 
              which led me to explore programming through various challenges and projects.
            </p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Currently diving deep into Object-Oriented Programming, Operating Systems, 
              Networking, and Assembly language while consistently solving algorithmic challenges 
              to sharpen my problem-solving skills.
            </p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
            <div className="glass rounded-xl p-6 text-center hover:scale-105 transition-transform">
              <GraduationCap className="h-8 w-8 text-primary mx-auto mb-4" />
              <h4 className="font-semibold text-slate-800 dark:text-white">Education</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">BS Software Engineering</p>
            </div>
            <div className="glass rounded-xl p-6 text-center hover:scale-105 transition-transform">
              <Code className="h-8 w-8 text-primary mx-auto mb-4" />
              <h4 className="font-semibold text-slate-800 dark:text-white">Focus Areas</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">Algorithms & Data Structures</p>
            </div>
            <div className="glass rounded-xl p-6 text-center hover:scale-105 transition-transform">
              <Trophy className="h-8 w-8 text-primary mx-auto mb-4" />
              <h4 className="font-semibold text-slate-800 dark:text-white">Achievements</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">380+ Problems Solved</p>
            </div>
            <div className="glass rounded-xl p-6 text-center hover:scale-105 transition-transform">
              <Laptop className="h-8 w-8 text-primary mx-auto mb-4" />
              <h4 className="font-semibold text-slate-800 dark:text-white">Interests</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">Full-Stack Development</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
