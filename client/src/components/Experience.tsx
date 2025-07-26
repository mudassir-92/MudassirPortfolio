import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Laptop, Users, Award, Tag, Trophy } from "lucide-react";

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const experiences = [
    {
      title: "Frontend Developer Intern",
      company: "TechStart Solutions",
      period: "Jun 2023 - Aug 2023",
      description: "Developed responsive web applications using React and Tailwind CSS. Collaborated with design team to implement user interfaces.",
      icon: Laptop,
      color: "bg-primary"
    },
    {
      title: "Programming Tutor",
      company: "University Computer Lab",
      period: "Jan 2023 - Present",
      description: "Mentored 20+ students in Java, Python, and data structures. Improved student performance by 30% average.",
      icon: Users,
      color: "bg-green-500"
    }
  ];

  const certifications = [
    {
      title: "Java Programming Tag",
      issuer: "Oracle Academy",
      date: "Completed: March 2023",
      icon: Tag,
      color: "bg-blue-500"
    },
    {
      title: "Programming Contest Winner",
      issuer: "Regional ACM ICPC",
      date: "3rd Place - October 2023",
      icon: Trophy,
      color: "bg-purple-500"
    },
    {
      title: "React Developer Certification",
      issuer: "Meta (Facebook)",
      date: "Completed: January 2024",
      icon: Award,
      color: "bg-cyan-500"
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
    <section id="experience" className="py-20 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center text-slate-800 dark:text-white mb-16"
        >
          Experience & Certifications
        </motion.h2>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8"
        >
          {/* Experience */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold text-slate-800 dark:text-white mb-8">Experience</h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="glass rounded-xl p-6"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 ${exp.color} rounded-full flex items-center justify-center`}>
                      <exp.icon className="text-white w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-slate-800 dark:text-white">{exp.title}</h4>
                      <p className="text-primary font-medium">{exp.company}</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">{exp.period}</p>
                      <p className="text-slate-600 dark:text-slate-300">{exp.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold text-slate-800 dark:text-white mb-8">Certifications & Awards</h3>
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="glass rounded-xl p-6"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 ${cert.color} rounded-full flex items-center justify-center`}>
                      <cert.icon className="text-white w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-slate-800 dark:text-white">{cert.title}</h4>
                      <p className={`font-medium ${cert.color.replace('bg-', 'text-')}`}>{cert.issuer}</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">{cert.date}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
