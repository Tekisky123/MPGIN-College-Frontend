import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import homeImg from "../assets/images/homeimage.avif";

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-r from-[#0860b1] to-[#064481] text-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={homeImg}
          alt="MPGIN Campus"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      {/* Content Section */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Welcome to{" "}
            <span className="text-[#fdf100]">
              Matoshri Pratishthan Group of Institutions
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-2xl font-medium mb-8 max-w-3xl mx-auto md:mx-0">
            Empowering minds, shaping futures. Join us in our pursuit of
            excellence in education, innovation, and leadership.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-[#ea1b26] text-white px-8 py-3 rounded-full flex items-center justify-center gap-2 shadow-lg hover:bg-[#c41820] transition-all"
            >
              Apply Now <ArrowRight size={20} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-white text-[#0860b1] px-8 py-3 rounded-full flex items-center justify-center shadow-lg hover:bg-[#fffac3] hover:text-[#064481] transition-all"
            >
              Explore Programs
            </motion.button>
          </div>
        </motion.div>

        {/* Statistics Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { number: "20+", text: "Years of Excellence" },
            { number: "50+", text: "Expert Faculty Members" },
            { number: "95%", text: "Placement Success Rate" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-lg hover:shadow-xl transition-all"
            >
              <h3 className="text-4xl font-bold text-[#fdf100]">
                {stat.number}
              </h3>
              <p className="mt-2 text-sm md:text-base text-gray-200">
                {stat.text}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
