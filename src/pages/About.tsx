import React from "react";
import { motion } from "framer-motion";
import PageHeader from "../components/PageHeader";
import {
  Trophy,
  Users,
  BookOpen,
  Award,
  Building2,
  Target,
} from "lucide-react";

const About = () => {
  return (
    <div>
      <PageHeader
        title="About MPGIN"
        subtitle="Excellence in Education Since 2003"
        backgroundImage="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
      />

      {/* Vision & Mission */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-100 via-indigo-50 to-blue-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-lg shadow-xl border-l-4 border-[#0860b1]"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-[#0860b1] p-3 rounded-full">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-[#0860b1]">
                  Our Vision
                </h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To be a premier educational institution that nurtures talent,
                fosters innovation, and creates future leaders who contribute
                meaningfully to society through excellence in technical
                education and research.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-lg shadow-xl border-l-4 border-[#ea1b26]"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-[#ea1b26] p-3 rounded-full">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-[#ea1b26]">
                  Our Mission
                </h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To provide quality technical education through innovative
                teaching-learning processes, to promote research and
                development, and to collaborate with industry to address
                societal needs.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* History & Establishment */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Legacy of Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Established in 2003, MPGIN has grown to become one of the leading
              technical institutions in Maharashtra, affiliated with Dr.
              Babasaheb Ambedkar Technological University (DBATU).
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Trophy,
                title: "AICTE Approved",
                description:
                  "All programs are approved by AICTE, ensuring quality technical education.",
              },
              {
                icon: Users,
                title: "10,000+ Alumni",
                description:
                  "Strong alumni network across various industries globally.",
              },
              {
                icon: BookOpen,
                title: "Modern Curriculum",
                description:
                  "Industry-aligned curriculum updated regularly with emerging technologies.",
              },
              {
                icon: Award,
                title: "Accreditation",
                description:
                  "NBA accredited programs maintaining high educational standards.",
              },
              {
                icon: Building2,
                title: "Infrastructure",
                description:
                  "State-of-the-art facilities spread across 25 acres of campus.",
              },
              {
                icon: Users,
                title: "Expert Faculty",
                description:
                  "Highly qualified faculty with industry and research experience.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-xl border-l-4 border-[#0860b1]"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-[#0860b1]/10 p-3 rounded-full">
                    <item.icon className="w-6 h-6 text-[#0860b1]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#0860b1]">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 px-4 bg-gradient-to-r from-white via-indigo-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Leadership
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the visionaries who guide our institution towards excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Rajesh Kumar",
                role: "Director",
                image:
                  "https://images.prismic.io/instride-next/575869b6-7d6c-4560-8e62-e4793f031107_INS-2720_Blog-Header-01-v1.jpg?auto=compress,format",
                description:
                  "Ph.D. in Engineering with 25+ years of academic and research experience.",
              },
              {
                name: "Dr. Priya Sharma",
                role: "Dean - Academics",
                image:
                  "https://media.licdn.com/dms/image/v2/D5612AQH34j1DoDsvSg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1702059465365?e=2147483647&v=beta&t=xn_zpm1Jd8O8qqxYVu45i341EcckvSs4II8NiEqGOzE",
                description:
                  "Expertise in curriculum development and academic administration.",
              },
              {
                name: "Dr. Amit Patel",
                role: "Head of Research",
                image:
                  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
                description:
                  "Leading research initiatives and industry collaborations.",
              },
            ].map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-xl overflow-hidden border-l-4 border-[#0860b1]"
              >
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {leader.name}
                  </h3>
                  <p className="text-[#0860b1] font-semibold mb-4">
                    {leader.role}
                  </p>
                  <p className="text-gray-600">{leader.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
