import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, TrendingUp, Calendar, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

export function LeetCodeStats() {
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
    <section id="stats" className="py-20 px-4 bg-gradient-to-r from-violet-50 to-pink-50 dark:from-slate-800 dark:to-slate-700" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center text-slate-800 dark:text-white mb-16"
        >
          LeetCode Journey
        </motion.h2>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8"
        >
          {/* LeetCode Profile Card */}
          <motion.div
            variants={itemVariants}
            className="glass rounded-2xl p-8"
          >
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mr-4">
                <Code2 className="text-white text-2xl" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-slate-800 dark:text-white">LeetCode Profile</h3>
                <p className="text-primary font-medium">@mudassir_920</p>
              </div>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-slate-600 dark:text-slate-400">Problems Solved:</span>
                <span className="font-bold text-2xl text-orange-500">270+</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-600 dark:text-slate-400">Focus Area:</span>
                <span className="font-semibold text-slate-800 dark:text-white">Data Structures & Algorithms</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-600 dark:text-slate-400">Primary Languages:</span>
                <span className="font-semibold text-slate-800 dark:text-white">Java, C++</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-600 dark:text-slate-400">Status:</span>
                <span className="font-semibold text-green-500">Active Solver</span>
              </div>
            </div>

            <Button 
              className="w-full bg-orange-500 hover:bg-orange-600 text-white"
              asChild
            >
              <a href="https://leetcode.com/u/mudassir_920/" target="_blank" rel="noopener noreferrer">
                View LeetCode Profile
              </a>
            </Button>
          </motion.div>

          {/* GitHub Stats Placeholder */}
          <motion.div
            variants={itemVariants}
            className="glass rounded-2xl p-8"
          >
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gray-800 dark:bg-gray-600 rounded-full flex items-center justify-center mr-4">
                <TrendingUp className="text-white text-2xl" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-slate-800 dark:text-white">GitHub Activity</h3>
                <p className="text-primary font-medium">@mudassir-92</p>
              </div>
            </div>
            
            {/* GitHub Stats Image */}
            <div className="mb-6">
              <img 
                src="https://github-readme-stats.vercel.app/api?username=mudassir-92&show_icons=true&hide_border=true&theme=dark"
                alt="GitHub Stats"
                className="w-full rounded-lg"
              />
            </div>

            <Button 
              className="w-full bg-gray-800 dark:bg-gray-600 hover:bg-gray-900 dark:hover:bg-gray-700 text-white"
              asChild
            >
              <a href="https://github.com/mudassir-92" target="_blank" rel="noopener noreferrer">
                View GitHub Profile
              </a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Additional Stats Row */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8 mt-8"
        >
          {/* GitHub Languages */}
          <motion.div
            variants={itemVariants}
            className="glass rounded-2xl p-8"
          >
            <h4 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">Most Used Languages</h4>
            <img 
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=mudassir-92&layout=compact&hide=html,css&theme=dark"
              alt="Most Used Languages"
              className="w-full rounded-lg"
            />
          </motion.div>

          {/* GitHub Streak */}
          <motion.div
            variants={itemVariants}
            className="glass rounded-2xl p-8"
          >
            <h4 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">Contribution Streak</h4>
            <img 
              src="https://github-readme-streak-stats.herokuapp.com/?user=mudassir-92&theme=dark"
              alt="GitHub Streak"
              className="w-full rounded-lg"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}