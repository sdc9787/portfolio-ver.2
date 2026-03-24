import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Github, Mail, Terminal } from "lucide-react";
import { toast } from "react-toastify";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
  ];

  const handleCopyEmail = () => {
    const email = "sfc9787@gmail.com";
    navigator.clipboard.writeText(email);
    toast.success("이메일 주소가 복사되었습니다!");
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled ? "bg-slate-950/80 backdrop-blur-md py-4 shadow-lg" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-emerald-400">
          <Terminal size={32} strokeWidth={2.5} />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-400 hover:text-emerald-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="h-4 w-px bg-slate-700" />
          <div className="flex items-center gap-6">
            <div className="relative flex flex-col items-center">
              <a 
                href="https://github.com/sdc9787" 
                target="_blank" 
                className="text-slate-400 hover:text-white transition-colors"
                onMouseEnter={() => setHoveredIcon("github")}
                onMouseLeave={() => setHoveredIcon(null)}
              >
                <Github size={20} />
              </a>
              <AnimatePresence>
                {hoveredIcon === "github" && (
                  <motion.span
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    className="absolute top-full mt-2 text-[10px] font-mono text-emerald-400 whitespace-nowrap bg-slate-900 px-2 py-1 rounded border border-slate-800"
                  >
                    github.com/sdc9787
                  </motion.span>
                )}
              </AnimatePresence>
            </div>

            <div className="relative flex flex-col items-center">
              <button 
                onClick={handleCopyEmail}
                className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                onMouseEnter={() => setHoveredIcon("email")}
                onMouseLeave={() => setHoveredIcon(null)}
              >
                <Mail size={20} />
              </button>
              <AnimatePresence>
                {hoveredIcon === "email" && (
                  <motion.span
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    className="absolute top-full mt-2 text-[10px] font-mono text-emerald-400 whitespace-nowrap bg-slate-900 px-2 py-1 rounded border border-slate-800"
                  >
                    sfc9787@gmail.com
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-slate-900 border-t border-slate-800 p-6 md:hidden"
        >
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-slate-300"
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
