import { useState, useEffect, useRef } from "react";
import {
  Briefcase,
  Code,
  GraduationCap,
  Laptop,
  BookOpen,
  Users,
} from "lucide-react";
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
      title: "Human-Computer Interaction",
      description:
        "Developing more intuitive and accessible interfaces for educational platforms, with a focus on adapting technology to diverse learning environments in Nigeria and across Africa.",
      icon: <Users size={36} />,
    },
    {
      title: "Distance Learning Technology",
      description:
        "Researching and implementing effective e-learning systems that overcome infrastructure challenges in developing regions while maintaining educational quality and engagement.",
      icon: <Laptop size={36} />,
    },
    {
      title: "Cyber-Physical Systems",
      description:
        "Exploring the integration of computational systems with physical processes to create smart learning environments and enhance educational outcomes.",
      icon: <Code size={36} />,
    },
  ];

  const projects = [
    {
      title: "User-Centered LMS for Nigerian Universities",
      description:
        "Developing a learning management system specifically designed for the Nigerian educational context, addressing local infrastructure challenges and cultural learning preferences.",
      status: "Active",
      funding: "Babcock University Research Grant",
      collaborators: "BUCODeL, Nigerian Universities Commission",
      year: "2023-2025",
    },
    {
      title: "HCI Patterns for Educational Software",
      description:
        "Documenting and testing effective interface design patterns for educational software used in resource-constrained environments.",
      status: "Active",
      funding: "Software Engineering Department",
      collaborators: "Andrews University, University of Lagos",
      year: "2022-2024",
    },
    {
      title: "Smart Learning Environment Framework",
      description:
        "Creating a cyber-physical system framework that enhances classroom learning through intelligent sensors and adaptive learning technologies.",
      status: "Completed",
      funding: "Nigerian Education Trust Fund",
      collaborators: "Babcock University, Microsoft Africa Research",
      year: "2020-2022",
    },
  ];

  // Using Dicebear Avatar API to generate consistent profile images based on names
  const students = [
    {
      name: "Adebayo Oluwaseun",
      degree: "PhD",
      topic:
        "Adaptive User Interface Design for E-Learning Platforms in Low-Bandwidth Environments",
      year: "3rd Year",
      image: `https://api.dicebear.com/7.x/avataaars/svg?seed=AdebayoOluwaseun&backgroundColor=b6e3f4`,
    },
    {
      name: "Grace Okonkwo",
      degree: "PhD",
      topic:
        "Cyber-Physical Systems for Smart Classrooms in Nigerian Universities",
      year: "4th Year",
      image: `https://api.dicebear.com/7.x/avataaars/svg?seed=GraceOkonkwo&backgroundColor=d1d4f9`,
    },
    {
      name: "Emmanuel Afolabi",
      degree: "PhD",
      topic:
        "Usability Evaluation Methods for Educational Software in African Context",
      year: "2nd Year",
      image: `https://api.dicebear.com/7.x/avataaars/svg?seed=EmmanuelAfolabi&backgroundColor=c0aede`,
    },
    {
      name: "Blessing Nwosu",
      degree: "PhD",
      topic:
        "Learning Analytics and Personalized Learning in Distance Education",
      year: "1st Year",
      image: `https://api.dicebear.com/7.x/avataaars/svg?seed=BlessingNwosu&backgroundColor=ffdfbf`,
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
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-indigo-100 bg-indigo-50 flex-shrink-0">
                    <img
                      src={student.image}
                      alt={student.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>

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
