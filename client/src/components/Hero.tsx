import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-slate-800 dark:text-white mb-4">
            <span className="typewriter">Alex Rodriguez</span>
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.5, duration: 0.8 }}
            className="text-xl md:text-2xl text-primary font-semibold mb-6"
          >
            Aspiring Software Engineer | Competitive Programmer
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4, duration: 0.8 }}
            className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed"
          >
            Passionate about solving complex problems through code. Currently pursuing BS Software Engineering 
            while mastering algorithms and building innovative solutions.
          </motion.p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4.5, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            onClick={() => scrollToSection("projects")}
            className="px-8 py-3 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all animate-glow"
          >
            View My Work
          </Button>
          <Button
            variant="outline"
            onClick={() => scrollToSection("contact")}
            className="px-8 py-3 glass text-slate-700 dark:text-slate-300 hover:bg-white/20 dark:hover:bg-white/10 transition-colors"
          >
            Get In Touch
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 5, duration: 0.8 }}
          className="mt-16 grid grid-cols-3 gap-8 max-w-md mx-auto"
        >
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">200+</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">LeetCode Problems</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">180+</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">CodeWars Katas</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">15+</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Projects Built</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
