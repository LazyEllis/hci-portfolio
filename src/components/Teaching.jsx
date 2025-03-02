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
      code: "CS401",
      title: "Advanced Algorithms",
      level: "Graduate",
      description:
        "Analysis of algorithmic design techniques, including divide-and-conquer, dynamic programming, and greedy algorithms. Exploration of NP-completeness and approximation algorithms.",
      semester: "Fall",
      icon: <Code size={24} />,
    },
    {
      code: "CS315",
      title: "Machine Learning Fundamentals",
      level: "Undergraduate",
      description:
        "Introduction to machine learning concepts, including supervised and unsupervised learning, neural networks, and evaluation metrics.",
      semester: "Spring",
      icon: <Book size={24} />,
    },
    {
      code: "CS502",
      title: "Computational Theory",
      level: "Graduate",
      description:
        "Advanced topics in computational complexity, automata theory, and formal languages. Focus on theoretical foundations of computer science.",
      semester: "Fall",
      icon: <GraduationCap size={24} />,
    },
    {
      code: "CS210",
      title: "Data Structures",
      level: "Undergraduate",
      description:
        "Implementation and analysis of fundamental data structures including arrays, linked lists, stacks, queues, trees, and graphs.",
      semester: "Spring",
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
                My teaching approach is centered on making complex theoretical
                concepts accessible through practical applications and
                real-world examples. I believe in active learning, where
                students engage with the material through projects, discussions,
                and problem-solving activities.
              </p>

              <p>
                I emphasize critical thinking and creativity in problem-solving,
                encouraging students to develop their own approaches rather than
                simply memorizing solutions. My goal is to prepare students not
                just for exams, but for their future careers in research or
                industry.
              </p>

              <p>
                I maintain an open-door policy and prioritize being available to
                students outside of class hours. I believe mentorship is a
                crucial aspect of education, especially in computer science
                where the field evolves rapidly.
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
                    office@babcock.edu.ng
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
