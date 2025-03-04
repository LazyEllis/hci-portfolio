import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BookOpen, FileText, MessageSquare } from "lucide-react";
import SectionHeader from "./SectionHeader";

const Publications = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
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

  const filters = [
    { id: "all", label: "All Works" },
    { id: "books", label: "Books" },
    { id: "journals", label: "Journals" },
    { id: "hci", label: "HCI Research" },
  ];

  const publications = [
    {
      title: "Human Computer Interaction",
      journal: "Textbook/Manual",
      year: "2025",
      authors: "Maitanmi, O.S.",
      category: "books",
      citations: "Forthcoming",
    },
    {
      title: "Web Technology and Application Development",
      journal: "Textbook/Manual",
      year: "2024",
      authors: "Maitanmi, O.S.",
      category: "books",
      citations: "Published",
    },
    {
      title: "Research Proposal and Writing for Students",
      journal: "Textbook/Manual",
      year: "2022",
      authors: "Maitanmi, O.S.",
      category: "books",
      citations: "Published",
    },
    {
      title: "Introduction to Web Technology",
      journal: "Textbook/Manual",
      year: "2021",
      authors: "Maitanmi, O.S.",
      category: "books",
      citations: "Published",
    },
    {
      title: "Introduction to Big Data Engineering Manual",
      journal: "Textbook/Manual",
      year: "2021",
      authors: "Maitanmi, O.S.",
      category: "books",
      citations: "Published",
    },
    {
      title:
        "Design of Cyber-Physical Systems for Smart Learning in Nigerian Universities",
      journal: "Journal of Educational Technology & Innovation",
      year: "2023",
      authors: "Maitanmi, O.S., Adebayo, K., Johnson, P.",
      category: "journals",
      citations: "8",
    },
    {
      title:
        "Human-Computer Interaction Principles for E-Learning Platforms in Africa",
      journal: "International Journal of User Experience Design",
      year: "2022",
      authors: "Maitanmi, O.S., Williams, R.",
      category: "hci",
      citations: "12",
    },
    {
      title:
        "Optimizing Distance Learning Systems for Nigerian Higher Education",
      journal: "African Journal of Educational Technology",
      year: "2021",
      authors: "Maitanmi, O.S., Afolabi, A., Smith, J.",
      category: "journals",
      citations: "15",
    },
  ];

  const filteredPublications =
    activeFilter === "all"
      ? publications
      : publications.filter((pub) => pub.category === activeFilter);

  return (
    <section id="publications" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Publications"
          subtitle="Books and research papers"
        />

        <motion.div
          className="mt-8 flex justify-center flex-wrap gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === filter.id
                  ? "bg-indigo-600 text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <AnimatePresence mode="wait">
            {filteredPublications.map((pub) => (
              <motion.div
                key={pub.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="bg-white border border-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow p-6"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-bold pr-4">{pub.title}</h3>
                  <span className="bg-indigo-100 text-indigo-700 text-xs px-2 py-1 rounded-full">
                    {pub.year}
                  </span>
                </div>

                <div className="text-sm text-gray-600 mb-2">{pub.authors}</div>
                <div className="text-sm font-medium text-gray-800 mb-4">
                  {pub.journal}
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500 flex items-center gap-1">
                    <FileText size={14} /> {pub.category.toUpperCase()}
                  </span>
                  <span className="text-xs text-gray-500 flex items-center gap-1">
                    <MessageSquare size={14} /> {pub.citations}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          <button className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors inline-flex items-center gap-2">
            <BookOpen size={18} />
            View All Publications
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Publications;
