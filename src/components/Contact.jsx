import { useState, useEffect, useRef } from "react";
import { Briefcase, Mail, Users } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formStatus, setFormStatus] = useState("idle"); // idle, submitting, success, error
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus("submitting");

    // Simulate form submission
    setTimeout(() => {
      setFormStatus("success");
      // Reset form after 3 seconds
      setTimeout(() => setFormStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeader title="Contact" subtitle="Get in touch with me" />

        <div className="mt-12 grid md:grid-cols-5 gap-8">
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-indigo-100 p-3 rounded-full text-indigo-600">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-gray-600">maitanmi@babcock.edu.ng</p>
                  <p className="text-sm text-gray-500 mt-1">
                    For academic inquiries
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-indigo-100 p-3 rounded-full text-indigo-600">
                  <Users size={24} />
                </div>
                <div>
                  <h4 className="font-medium">Office Hours</h4>
                  <p className="text-gray-600">Monday & Wednesday, 10am-12pm</p>
                  <p className="text-sm text-gray-500 mt-1">
                    Software Engineering Department Building
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-indigo-100 p-3 rounded-full text-indigo-600">
                  <Briefcase size={24} />
                </div>
                <div>
                  <h4 className="font-medium">Department</h4>
                  <p className="text-gray-600">
                    Software Engineering Department
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    Babcock University, Ilishan-Remo, Ogun State, Nigeria
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-white rounded-lg shadow-md border border-gray-100">
              <h4 className="font-medium mb-3">Prospective Students</h4>
              <p className="text-gray-600 text-sm">
                I am currently accepting new PhD students with interests in
                human-computer interaction, cyber-physical systems, distance
                learning education, and learning management systems. Please
                email me with your CV and research interests.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>

            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                      placeholder="Your name"
                      disabled={
                        formStatus === "submitting" || formStatus === "success"
                      }
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                      placeholder="Your email"
                      disabled={
                        formStatus === "submitting" || formStatus === "success"
                      }
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                    placeholder="Message subject"
                    disabled={
                      formStatus === "submitting" || formStatus === "success"
                    }
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                    placeholder="Your message"
                    disabled={
                      formStatus === "submitting" || formStatus === "success"
                    }
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={
                    formStatus === "submitting" || formStatus === "success"
                  }
                  className={`w-full py-3 px-6 rounded-lg font-medium transition-all flex items-center justify-center gap-2 ${
                    formStatus === "idle"
                      ? "bg-indigo-600 text-white hover:bg-indigo-700"
                      : formStatus === "submitting"
                      ? "bg-indigo-300 text-white cursor-not-allowed"
                      : formStatus === "success"
                      ? "bg-green-600 text-white cursor-not-allowed"
                      : "bg-red-600 text-white cursor-not-allowed"
                  }`}
                >
                  {formStatus === "idle" && (
                    <>
                      <Mail size={18} />
                      Send Message
                    </>
                  )}

                  {formStatus === "submitting" && (
                    <>
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </>
                  )}

                  {formStatus === "success" && (
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Message Sent!
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
