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
    { icon: <Calendar size={24} />, value: "15+", label: "Years Teaching" },
    { icon: <Book size={24} />, value: "65", label: "Publications" },
    { icon: <Users size={24} />, value: "100+", label: "PhD Students" },
    { icon: <Award size={24} />, value: "7", label: "Major Awards" },
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
                I am a Professor and current Head of Department of Software
                Engineering at Babcock University, Nigeria, specializing in
                artificial intelligence, machine learning, and computational
                theory. My research focuses on developing novel algorithmic
                approaches to solve complex problems in various domains with
                particular applications in the African context.
              </p>

              <p>
                With over 15 years of teaching experience, I have mentored
                numerous undergraduate and graduate students who have gone on to
                successful careers in academia and industry across Nigeria and
                internationally. My teaching philosophy emphasizes practical
                applications of theoretical concepts and fostering critical
                thinking adapted to local and global challenges.
              </p>

              <p>
                Prior to my current position, I worked as a visiting research
                scientist at Google's African AI research center, where I
                contributed to significant breakthroughs in machine learning
                applications for the African continent. I hold a Ph.D. in
                Computer Science from the University of Lagos and a Bachelor's
                degree in Mathematics from Babcock University.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Skill name="Machine Learning" />
              <Skill name="Artificial Intelligence" />
              <Skill name="Algorithms" />
              <Skill name="Neural Networks" />
              <Skill name="Python" />
              <Skill name="TensorFlow" />
              <Skill name="Data Structures" />
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
