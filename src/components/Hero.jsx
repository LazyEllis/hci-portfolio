import { Book, Code, Mail } from "lucide-react";
import { motion } from "framer-motion";

const Hero = ({ scrollToSection }) => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-indigo-500 opacity-5 rounded-full"
            style={{
              width: Math.random() * 300 + 50,
              height: Math.random() * 300 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, Math.random() + 0.5],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              <span className="block">Dr. Oluwasola S. Maitanmi</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                Software Engineering
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Advancing educational technology and human-computer interaction in
              Nigeria and beyond.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-lg hover:bg-indigo-700 transition-all flex items-center gap-2"
                onClick={() => scrollToSection("contact")}
              >
                <Mail size={18} />
                Get in Touch
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-white text-indigo-600 border border-indigo-200 rounded-lg shadow-lg hover:bg-indigo-50 transition-all flex items-center gap-2"
                onClick={() => scrollToSection("publications")}
              >
                <Book size={18} />
                View Publications
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative"
          >
            <div className="aspect-square rounded-full overflow-hidden border-8 border-white shadow-xl mx-auto max-w-md">
              <img
                src="/src/img/portrait.png"
                alt="Professor Oluwasola S. Maitanmi"
                className="w-full h-full object-cover"
              />
            </div>

            <motion.div
              className="absolute -bottom-6 -right-6 bg-white shadow-lg rounded-lg p-4 flex items-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <div className="bg-indigo-100 text-indigo-600 p-2 rounded-full">
                <Code size={24} />
              </div>
              <div>
                <div className="font-medium">Associate Professor</div>
                <div className="text-sm text-gray-500">
                  Software Engineering & HCI
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <button
          onClick={() => scrollToSection("about")}
          className="bg-white rounded-full p-3 shadow-md text-indigo-600 hover:text-indigo-800 transition-colors"
          aria-label="Scroll down"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
          </svg>
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;
