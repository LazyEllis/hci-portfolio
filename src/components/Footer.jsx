import { Github, Linkedin, Twitter } from "lucide-react";
import SocialLink from "./SocialLink";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">
              Dr. Oluwasola S. Maitanmi
            </h3>
            <p className="text-gray-400 mb-4">
              Associate Professor of Computer Science (Software Engineering) at
              Babcock University, specializing in Cyber Physical Systems,
              Distance Learning Education, Learning Management Systems, and
              Human Computer Interaction.
            </p>

            <div className="flex space-x-4">
              <SocialLink icon={<Github size={20} />} light />
              <SocialLink icon={<Linkedin size={20} />} light />
              <SocialLink icon={<Twitter size={20} />} light />
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="#publications"
                  className="hover:text-white transition-colors"
                >
                  Publications
                </a>
              </li>
              <li>
                <a
                  href="#teaching"
                  className="hover:text-white transition-colors"
                >
                  Teaching
                </a>
              </li>
              <li>
                <a
                  href="#research"
                  className="hover:text-white transition-colors"
                >
                  Research
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="https://www.babcock.edu.ng"
                  target="_blank"
                  className="hover:text-white transition-colors"
                >
                  Babcock University
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Software Engineering Department
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  BUCODeL
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Academic Calendar
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Dr. Oluwasola S. Maitanmi. All rights
            reserved.
          </div>

          <div className="text-gray-400 text-sm">
            Software Engineering Department, Babcock University
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
