import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Publications from "./components/Publications";
import Teaching from "./components/Teaching";
import Research from "./components/Research";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [scrollY, setScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      // Get all sections
      const sections = [
        "home",
        "about",
        "experience",
        "publications",
        "teaching",
        "research",
        "contact",
      ];

      // Find which section is currently in view
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (!section) continue;

        const rect = section.getBoundingClientRect();
        // If section is in view (allowing for some buffer for the header)
        if (rect.top <= 150 && rect.bottom > 0) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 100,
        behavior: "smooth",
      });
      setActiveSection(sectionId);
      setMenuOpen(false);
    }
  };

  return (
    <div className="font-sans text-gray-800 bg-gray-50 min-h-screen">
      <Header
        scrollY={scrollY}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        scrollToSection={scrollToSection}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      <main className="pt-20">
        <Hero scrollToSection={scrollToSection} />
        <About />
        <Experience />
        <Publications />
        <Teaching />
        <Research />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;
