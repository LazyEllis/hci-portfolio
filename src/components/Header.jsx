import { AnimatePresence } from "framer-motion";
import {
  Book,
  BookOpen,
  Briefcase,
  Code,
  Coffee,
  GraduationCap,
  Mail,
  User,
} from "lucide-react";
import { motion } from "framer-motion";

const Header = ({
  scrollY,
  activeSection,
  scrollToSection,
  menuOpen,
  setMenuOpen,
}) => {
  const navItems = [
    { id: "home", label: "Home", icon: <User size={16} /> },
    { id: "about", label: "About", icon: <Coffee size={16} /> },
    { id: "experience", label: "Experience", icon: <Briefcase size={16} /> },
    { id: "publications", label: "Publications", icon: <BookOpen size={16} /> },
    { id: "teaching", label: "Teaching", icon: <GraduationCap size={16} /> },
    { id: "research", label: "Research", icon: <Code size={16} /> },
    { id: "contact", label: "Contact", icon: <Mail size={16} /> },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrollY > 50 ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Prof. Alan Turing
          </span>
        </motion.div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-1">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`px-3 py-2 rounded-lg flex items-center space-x-1 transition-all ${
                activeSection === item.id
                  ? "bg-indigo-100 text-indigo-600"
                  : "hover:bg-gray-100"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.icon}
              <span>{item.label}</span>
            </motion.button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="w-6 flex flex-col items-end justify-center">
            <span
              className={`block h-0.5 bg-current transition-all duration-300 ease-out ${
                menuOpen ? "w-6 rotate-45 translate-y-1" : "w-6"
              }`}
            ></span>
            <span
              className={`block h-0.5 bg-current my-1 transition-all duration-300 ease-out ${
                menuOpen ? "opacity-0" : "w-4"
              }`}
            ></span>
            <span
              className={`block h-0.5 bg-current transition-all duration-300 ease-out ${
                menuOpen ? "w-6 -rotate-45 -translate-y-1" : "w-5"
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="container mx-auto px-4 py-2">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left px-4 py-3 flex items-center space-x-3 ${
                    activeSection === item.id
                      ? "bg-indigo-50 text-indigo-600"
                      : ""
                  }`}
                  whileTap={{ backgroundColor: "rgba(79, 70, 229, 0.1)" }}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
