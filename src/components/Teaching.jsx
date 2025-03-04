import React, { useState, useEffect, useRef } from "react";
import {
  Book,
  Briefcase,
  Code,
  GraduationCap,
  Mail,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const Teaching = () => {
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

  const courses = [
    {
      code: "SENG 404",
      title: "Human Computer Interaction",
      level: "Undergraduate",
      description:
        "Principles of designing effective user interfaces, usability evaluation methods, and user-centered design approaches for software systems.",
      semester: "Spring",
      icon: <Code size={24} />,
    },
    {
      code: "SENG 412",
      title: "Web Technology",
      level: "Undergraduate",
      description:
        "Introduction to web development technologies, client-side and server-side programming, responsive web design, and modern web frameworks.",
      semester: "Spring",
      icon: <Book size={24} />,
    },
    {
      code: "SENG 303",
      title: "Big Data Engineering",
      level: "Undergraduate",
      description:
        "Advanced topics in big data processing, storage, and analysis, including distributed computing frameworks and data visualization techniques.",
      semester: "Fall",
      icon: <GraduationCap size={24} />,
    },
    {
      code: "CSC610",
      title: "Research Methods in Computing",
      level: "Graduate",
      description:
        "Approaches to research in computer science, proposal writing, research design, data collection and analysis techniques for computing disciplines.",
      semester: "Fall",
      icon: <Briefcase size={24} />,
    },
  ];

  return (
    <section id="teaching" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Teaching"
          subtitle="Courses and educational philosophy"
        />

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <h3 className="text-2xl font-bold mb-4">Teaching Philosophy</h3>

            <div className="space-y-4 text-gray-700">
              <p>
                My teaching approach focuses on bridging theoretical concepts
                with practical applications to prepare students for real-world
                challenges in software development and engineering. With 20
                years in higher education, I've developed methods that promote
                critical thinking and innovation in technological contexts.
              </p>

              <p>
                I believe strongly in the integration of technology in
                education, particularly in distance learning environments. My
                role at BUCODeL has allowed me to develop and implement
                effective e-learning strategies that enhance student engagement
                and knowledge retention.
              </p>

              <p>
                My classroom emphasizes collaborative learning, project-based
                assessments, and continuous feedback. I strive to create an
                inclusive learning environment that accommodates diverse
                learning styles while maintaining high academic standards that
                prepare students for careers in the rapidly evolving field of
                software engineering.
              </p>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <div className="flex items-center gap-3 bg-indigo-50 rounded-lg p-3 flex-1">
                <div className="bg-indigo-100 p-2 rounded-full text-indigo-600">
                  <Users size={20} />
                </div>
                <div>
                  <div className="font-medium">Office Hours</div>
                  <div className="text-sm text-gray-500">
                    Tuesday & Thursday, 10am-12pm
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-indigo-50 rounded-lg p-3 flex-1">
                <div className="bg-indigo-100 p-2 rounded-full text-indigo-600">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="font-medium">Student Contact</div>
                  <div className="text-sm text-gray-500">
                    maitanmi@babcock.edu.ng
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6">Current Courses</h3>

            <div className="space-y-4">
              {courses.map((course, index) => (
                <motion.div
                  key={course.code}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="bg-white rounded-lg shadow p-4 hover:shadow-md transition-shadow border border-gray-100"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-indigo-100 p-3 rounded-full text-indigo-600 mt-1">
                      {course.icon}
                    </div>

                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-bold text-lg">{course.title}</h4>
                          <div className="text-sm text-gray-500 flex items-center gap-2">
                            <span>{course.code}</span>
                            <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                            <span>{course.level}</span>
                            <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                            <span>{course.semester}</span>
                          </div>
                        </div>

                        <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                          Current
                        </span>
                      </div>

                      <p className="mt-2 text-sm text-gray-600">
                        {course.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Teaching;
