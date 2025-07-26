import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { TechStack } from "@/components/TechStack";
import { Projects } from "@/components/Projects";
import { CompetitiveProgramming } from "@/components/CompetitiveProgramming";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";

export default function Portfolio() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <CompetitiveProgramming />
      <Experience />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 px-4 border-t border-slate-200 dark:border-slate-700">
        <div className="max-w-6xl mx-auto text-center text-slate-600 dark:text-slate-400">
          <p>&copy; 2024 Alex Rodriguez. Built with passion and lots of coffee ☕</p>
        </div>
      </footer>
    </div>
  );
}
