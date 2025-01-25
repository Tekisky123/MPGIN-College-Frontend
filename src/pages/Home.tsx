import React from "react";
import { motion } from "framer-motion";
import Hero from "../components/Hero";
import ProgramCard from "../components/ProgramCard";
import FacilityCard from "../components/FacilityCard";
import { programs } from "../data/programs";
import { facilities } from "../data/facilities";
import { ArrowRight } from "lucide-react";

const Home = () => {
  return (
    <main className="bg-gray-50">
      {/* Hero Section */}
      <Hero />

      {/* Programs Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our wide range of academic programs designed to prepare
              you for a successful career.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.slice(0, 3).map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>

          <div className="text-center mt-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center space-x-2 bg-[#0860b1] text-white px-8 py-3 rounded-full hover:bg-[#064481] shadow-lg transition-all"
            >
              <span>View All Programs</span>
              <ArrowRight size={20} />
            </motion.button>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Campus Facilities
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience world-class facilities designed to enhance your
              learning journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {facilities.map((facility) => (
              <FacilityCard key={facility.id} facility={facility} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose MPGIN Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#0860b1] to-[#064481] text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose MPGIN?
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Join a legacy of excellence and innovation in education.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Industry Connections",
                description:
                  "Strong partnerships with leading companies ensuring excellent placement opportunities.",
              },
              {
                title: "Expert Faculty",
                description:
                  "Learn from experienced professors and industry experts dedicated to your success.",
              },
              {
                title: "Modern Infrastructure",
                description:
                  "State-of-the-art facilities and laboratories equipped with the latest technology.",
              },
              {
                title: "Research Focus",
                description:
                  "Emphasis on research and innovation with modern research facilities.",
              },
              {
                title: "Holistic Development",
                description:
                  "Focus on overall personality development through various activities and clubs.",
              },
              {
                title: "Global Exposure",
                description:
                  "International collaborations and exchange programs for global exposure.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-lg hover:shadow-xl hover:bg-white/20 transition-all"
              >
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-white/80">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
