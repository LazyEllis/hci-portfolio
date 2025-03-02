import { useState, useEffect, useRef } from "react";
import { Briefcase, Code, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const Research = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("interests");
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

  const interests = [
    {
      title: "Machine Learning Interpretability",
      description:
        "Developing methods to make complex machine learning models more interpretable and explainable to humans, focusing on fairness and transparency in AI systems.",
      icon: <Code size={36} />,
    },
    {
      title: "Algorithmic Efficiency",
      description:
        "Researching novel approaches to improve the efficiency of algorithms for large-scale data processing and optimization problems.",
      icon: <Briefcase size={36} />,
    },
    {
      title: "Neural Network Theory",
      description:
        "Investigating the theoretical foundations of deep learning and developing new architectures for specific problem domains.",
      icon: <GraduationCap size={36} />,
    },
  ];

  const projects = [
    {
      title: "Explainable AI Framework",
      description:
        "Developing a comprehensive framework for making black-box AI models more interpretable through visualization techniques and local explanations.",
      status: "Active",
      funding: "National Science Foundation",
      collaborators: "MIT, Stanford University",
      year: "2022-2025",
    },
    {
      title: "Efficient Graph Neural Networks",
      description:
        "Creating more computationally efficient graph neural network architectures for processing large-scale graph data structures.",
      status: "Active",
      funding: "Google Research",
      collaborators: "Google DeepMind, Cambridge",
      year: "2023-2024",
    },
    {
      title: "Fair Machine Learning Systems",
      description:
        "Investigating methods to detect and mitigate bias in machine learning pipelines across various domains.",
      status: "Completed",
      funding: "European Research Council",
      collaborators: "Oxford University, ETH Zurich",
      year: "2020-2022",
    },
  ];

  const students = [
    {
      name: "Sarah Johnson",
      degree: "PhD",
      topic: "Reinforcement Learning for Robotic Control",
      year: "3rd Year",
      image: "/api/placeholder/60/60",
    },
    {
      name: "Michael Zhang",
      degree: "PhD",
      topic: "Graph Neural Networks for Drug Discovery",
      year: "4th Year",
      image: "/api/placeholder/60/60",
    },
    {
      name: "Emily Williams",
      degree: "PhD",
      topic: "Fairness in Recommender Systems",
      year: "2nd Year",
      image: "/api/placeholder/60/60",
    },
    {
      name: "David Chen",
      degree: "PhD",
      topic: "Theoretical Bounds for Semi-Supervised Learning",
      year: "1st Year",
      image: "/api/placeholder/60/60",
    },
  ];

  return (
    <section id="research" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Research"
          subtitle="Current interests and projects"
        />

        <motion.div
          className="mt-8 flex justify-center border-b"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <button
            onClick={() => setActiveTab("interests")}
            className={`px-6 py-3 font-medium transition-colors ${
              activeTab === "interests"
                ? "text-indigo-600 border-b-2 border-indigo-600"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Research Interests
          </button>

          <button
            onClick={() => setActiveTab("projects")}
            className={`px-6 py-3 font-medium transition-colors ${
              activeTab === "projects"
                ? "text-indigo-600 border-b-2 border-indigo-600"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Current Projects
          </button>

          <button
            onClick={() => setActiveTab("students")}
            className={`px-6 py-3 font-medium transition-colors ${
              activeTab === "students"
                ? "text-indigo-600 border-b-2 border-indigo-600"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Graduate Students
          </button>
        </motion.div>

        <div className="mt-10">
          {/* Research Interests */}
          {activeTab === "interests" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-3 gap-8"
            >
              {interests.map((interest, index) => (
                <motion.div
                  key={interest.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 flex flex-col items-center text-center"
                >
                  <div className="bg-indigo-100 text-indigo-600 p-4 rounded-full mb-4">
                    {interest.icon}
                  </div>

                  <h3 className="text-xl font-bold mb-3">{interest.title}</h3>
                  <p className="text-gray-600">{interest.description}</p>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Current Projects */}
          {activeTab === "projects" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100"
                >
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <span
                      className={`text-xs px-3 py-1 rounded-full ${
                        project.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  <p className="mt-3 text-gray-600">{project.description}</p>

                  <div className="mt-4 grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <div className="font-medium text-gray-800">Funding</div>
                      <div className="text-gray-500">{project.funding}</div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-800">
                        Collaborators
                      </div>
                      <div className="text-gray-500">
                        {project.collaborators}
                      </div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-800">Period</div>
                      <div className="text-gray-500">{project.year}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Graduate Students */}
          {activeTab === "students" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 gap-6"
            >
              {students.map((student, index) => (
                <motion.div
                  key={student.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow border border-gray-100 flex items-center gap-4"
                >
                  <img
                    src={student.image}
                    alt={student.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-indigo-100"
                  />

                  <div>
                    <h3 className="font-bold text-lg">{student.name}</h3>
                    <div className="text-sm">
                      <span className="text-indigo-600">{student.degree}</span>
                      <span className="text-gray-500"> • {student.year}</span>
                    </div>
                    <p className="text-gray-600 text-sm mt-1">
                      {student.topic}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Research;
