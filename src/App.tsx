import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-emerald-500/30 selection:text-emerald-400">
      <ToastContainer 
        position="bottom-right" 
        theme="dark" 
        autoClose={3000} 
        aria-label="Toast Notifications"
      />
      <Navbar />
      <main>
        <Hero />
        <AboutMe />
        <Skills />
        <Projects />
        <Education />
      </main>
      <footer className="py-12 border-t border-slate-900 text-center text-slate-600 text-sm">
        <p>© 2026 Developer Portfolio. Built with React & Tailwind CSS.</p>
      </footer>
    </div>
  );
}
