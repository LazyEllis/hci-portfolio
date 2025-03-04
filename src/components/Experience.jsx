import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(sectionRef.current);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      period: "Current",
      title: "HOD, Software Engineering Department",
      company: "Babcock University",
      description:
        "Leading the Software Engineering Department, overseeing curriculum development, faculty management, and strategic planning for departmental growth.",
    },
    {
      period: "Current",
      title: "Deputy Director Academics",
      company:
        "Babcock University Center for Open and Distance e-learning (BUCODeL)",
      description:
        "Managing academic operations for distance learning programs, developing e-learning strategies, and ensuring quality education delivery in virtual environments.",
    },
    {
      period: "2013 - Present",
      title: "Associate Professor of Computer Science",
      company: "Babcock University",
      description:
        "Teaching and conducting research in Software Engineering, Human Computer Interaction, Cyber Physical Systems, and Learning Management Systems.",
    },
    {
      period: "Post-Doctoral",
      title: "Post-Doctoral Research",
      company: "Andrews University, Berrien Springs, Michigan, USA",
      description:
        "Conducted advanced research in software engineering methodologies and educational technology applications.",
    },
  ];

  return (
    <section id="experience" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Experience"
          subtitle="Academic and professional journey"
        />

        <div className="mt-12 relative">
          {/* Timeline vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-indigo-100 transform md:translate-x-px"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`relative mb-12 md:w-1/2 ${
                index % 2 === 0 ? "md:pr-12 md:ml-auto" : "md:pl-12"
              }`}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Timeline dot */}
              <div
                className={`absolute top-0 ${
                  index % 2 === 0
                    ? "left-0 md:-left-3.5"
                    : "left-0 md:-left-3.5"
                } w-7 h-7 bg-white border-4 border-indigo-400 rounded-full z-10`}
              ></div>

              {/* Card */}
              <div className="bg-white rounded-lg shadow-lg p-6 ml-10 md:ml-0 hover:shadow-xl transition-shadow">
                <div className="text-sm font-medium text-indigo-500 mb-1">
                  {exp.period}
                </div>
                <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                <div className="text-gray-600 mb-4">{exp.company}</div>
                <p className="text-gray-700">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
