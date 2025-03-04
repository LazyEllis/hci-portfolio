import { useState, useEffect, useRef } from "react";
import {
  Book,
  Users,
  Globe,
  Github,
  Linkedin,
  Twitter,
  Calendar,
  Award,
} from "lucide-react";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import Skill from "./Skill";
import SocialLink from "./SocialLink";

const About = () => {
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

  const stats = [
    {
      icon: <Calendar size={24} />,
      value: "20+",
      label: "Years in Higher Education",
    },
    { icon: <Book size={24} />, value: "40+", label: "Publications" },
    { icon: <Users size={24} />, value: "6", label: "Books Published" },
    { icon: <Award size={24} />, value: "2", label: "Leadership Positions" },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="About Me"
          subtitle="My background and expertise"
        />

        <div className="grid md:grid-cols-5 gap-8 mt-12">
          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4">Background</h3>

            <div className="space-y-4 text-gray-700">
              <p>
                I am an Associate Professor of Computer Science (Software
                Engineering) at Babcock University, Nigeria, with a track record
                of 20 years in Higher Education. Currently, I serve as the Head
                of Department of Software Engineering and Deputy Director
                Academics at Babcock University Center for Open and Distance
                e-learning (BUCODeL).
              </p>

              <p>
                My educational background includes both MSc and PhD degrees from
                Babcock University, complemented by Post-Doctoral Research
                conducted at Andrews University in Berrien Springs, Michigan,
                USA. Throughout my academic journey, I've focused on developing
                innovative approaches to software engineering with particular
                applications in distance learning and human-computer
                interaction.
              </p>

              <p>
                As a proficient writer, I have authored several educational
                manuals including "Introduction to Big Data Engineering Manual"
                (2021), "Introduction to Web Technology" (2021), "Research
                Proposal and Writing for Students" (2022), "Web Technology and
                Application Development" (2024), and "Human Computer
                Interaction" (2025). Additionally, I have published over 40
                peer-reviewed journal articles across various domains in
                computer science.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Skill name="Cyber Physical Systems" />
              <Skill name="Distance Learning Education" />
              <Skill name="Learning Management Systems" />
              <Skill name="Human Computer Interaction" />
              <Skill name="Software Engineering" />
              <Skill name="Web Technology" />
              <Skill name="Big Data" />
              <Skill name="Research Methods" />
            </div>
          </motion.div>

          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative h-full">
              <div className="absolute inset-0 bg-indigo-100 rounded-lg transform rotate-3"></div>
              <div className="absolute inset-0 bg-blue-100 rounded-lg transform -rotate-3"></div>
              <div className="relative bg-white shadow-xl rounded-lg p-6 h-full">
                <h3 className="text-2xl font-bold mb-6 text-center">
                  Academic Stats
                </h3>

                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      className="flex flex-col items-center justify-center p-4 rounded-lg bg-gray-50"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isVisible ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      <div className="text-indigo-500 mb-2">{stat.icon}</div>
                      <div className="text-3xl font-bold text-gray-800">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-500">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 border-t pt-6">
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Globe size={18} /> Connect with me
                  </h4>

                  <div className="flex justify-center gap-4">
                    <SocialLink icon={<Github size={20} />} label="GitHub" />
                    <SocialLink
                      icon={<Linkedin size={20} />}
                      label="LinkedIn"
                    />
                    <SocialLink icon={<Twitter size={20} />} label="Twitter" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
