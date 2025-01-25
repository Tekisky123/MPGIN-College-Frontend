import React from "react";
import { motion } from "framer-motion";
import PageHeader from "../components/PageHeader";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div>
      <PageHeader
        title="Contact Us"
        subtitle="We’d love to hear from you!"
        backgroundImage="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
        textColor="text-white"
        subTextColor="text-opacity-80"
      />

      {/* Contact Information */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-lg shadow-xl"
            >
              <h2 className="text-3xl font-semibold text-gray-900 mb-6">
                Send us a Message
              </h2>
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-[#0860b1] focus:border-[#0860b1] shadow-md"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-[#0860b1] focus:border-[#0860b1] shadow-md"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-[#0860b1] focus:border-[#0860b1] shadow-md"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-[#0860b1] focus:border-[#0860b1] shadow-md"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#0860b1] text-white py-3 rounded-md hover:bg-[#064481] transition-colors transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div className="bg-white p-8 rounded-lg shadow-xl">
                <h2 className="text-3xl font-semibold text-gray-900 mb-6">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-[#0860b1]/10 p-3 rounded-full">
                      <MapPin className="w-6 h-6 text-[#0860b1]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Address</h3>
                      <p className="text-gray-600">
                        MIDC Area, Nanded - 431603, <br />
                        Maharashtra, India
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-[#0860b1]/10 p-3 rounded-full">
                      <Phone className="w-6 h-6 text-[#0860b1]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Phone</h3>
                      <p className="text-gray-600">+91 2462 269900</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-[#0860b1]/10 p-3 rounded-full">
                      <Mail className="w-6 h-6 text-[#0860b1]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Email</h3>
                      <p className="text-gray-600">info@mpgin.edu.in</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-[#0860b1]/10 p-3 rounded-full">
                      <Clock className="w-6 h-6 text-[#0860b1]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        Office Hours
                      </h3>
                      <p className="text-gray-600">
                        Monday - Saturday: 9:00 AM - 5:00 PM <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="bg-white p-8 rounded-lg shadow-xl">
                <h2 className="text-3xl font-semibold text-gray-900 mb-6">
                  Location Map
                </h2>
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.7123456789!2d77.3123456789!3d19.1234567890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA3JzM0LjQiTiA3N8KwMTgnNDQuNCJF!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                  ></iframe>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
