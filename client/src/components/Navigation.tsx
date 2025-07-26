import { useTheme } from "./ThemeProvider";
import { Sun, Moon, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navigation() {
  const { theme, toggleTheme } = useTheme();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-xl font-bold text-slate-800 dark:text-white">
            Alex Rodriguez
          </div>
          
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-slate-600 dark:text-slate-300 hover:text-primary transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-slate-600 dark:text-slate-300 hover:text-primary transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="text-slate-600 dark:text-slate-300 hover:text-primary transition-colors"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-slate-600 dark:text-slate-300 hover:text-primary transition-colors"
            >
              Contact
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="glass hover:bg-white/20 dark:hover:bg-white/10"
            >
              {theme === "light" ? (
                <Sun className="h-5 w-5 text-yellow-500" />
              ) : (
                <Moon className="h-5 w-5 text-slate-300" />
              )}
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden glass"
            >
              <Menu className="h-5 w-5 text-slate-600 dark:text-slate-300" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
