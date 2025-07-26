import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Sword, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CompetitiveProgramming() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const platforms = [
    {
      name: "LeetCode",
      icon: Code,
      color: "bg-orange-500",
      hoverColor: "hover:bg-orange-600",
      count: "Active",
      metric: "Problem Solver",
      stats: [
        { label: "Profile:", value: "mudassir_920", color: "text-orange-500 font-semibold" },
        { label: "Focus:", value: "Data Structures", color: "text-slate-600 dark:text-slate-400" },
        { label: "Languages:", value: "Java, C++", color: "text-slate-600 dark:text-slate-400" }
      ],
      link: "https://leetcode.com/u/mudassir_920/"
    },
    {
      name: "GitHub",
      icon: Github,
      color: "bg-gray-800 dark:bg-gray-600",
      hoverColor: "hover:bg-gray-900 dark:hover:bg-gray-700",
      count: "Active",
      metric: "Open Source Contributor",
      stats: [
        { label: "Username:", value: "mudassir-92", color: "text-gray-600 dark:text-gray-400 font-semibold" },
        { label: "Focus:", value: "Backend Projects", color: "text-slate-600 dark:text-slate-400" },
        { label: "Languages:", value: "Java, C++, Kotlin", color: "text-slate-600 dark:text-slate-400" }
      ],
      link: "https://github.com/mudassir-92"
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
    <section className="py-20 px-4 bg-gradient-to-r from-violet-50 to-pink-50 dark:from-slate-800 dark:to-slate-700" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center text-slate-800 dark:text-white mb-16"
        >
          Coding Platforms & Open Source
        </motion.h2>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {platforms.map((platform) => (
            <motion.div
              key={platform.name}
              variants={itemVariants}
              className="glass rounded-2xl p-8 text-center"
            >
              <div className={`w-16 h-16 ${platform.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                <platform.icon className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-800 dark:text-white mb-4">
                {platform.name}
              </h3>
              <div className={`text-4xl font-bold mb-2 ${platform.color.includes('orange') ? 'text-orange-500' : platform.color.includes('red') ? 'text-red-600' : 'text-gray-800 dark:text-gray-300'}`}>
                {platform.count}
              </div>
              <p className="text-slate-600 dark:text-slate-300 mb-6">{platform.metric}</p>
              <div className="space-y-2 text-sm mb-6">
                {platform.stats.map((stat, index) => (
                  <div key={index} className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-400">{stat.label}</span>
                    <span className={stat.color}>{stat.value}</span>
                  </div>
                ))}
              </div>
              <Button className={`${platform.color} ${platform.hoverColor} text-white transition-colors`} asChild>
                <a href={platform.link}>View Profile</a>
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
