import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, MessageSquare } from 'lucide-react';
import RippleButton from '../components/animata/button/ripple-button';
const Contact: React.FC = () => {
  return (
    <section className="pt-32 pb-20 bg-dark-200">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Get in <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
        </motion.div>

        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className='flex flex-col md:flex-row gap-24'>
              <div>
                <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-accent-100/10 p-3 rounded-full">
                      <Phone className="text-accent-100" size={24} />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Phone</h3>
                      <a
                        href="tel:+918822184165"
                        className="text-gray-300 hover:text-accent-100 transition-colors"
                      >
                        +91 8822184165
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-accent-100/10 p-3 rounded-full">
                      <Mail className="text-accent-100" size={24} />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Email</h3>
                      <a
                        href="mailto:rhitamsoibam@gmail.com"
                        className="text-gray-300 hover:text-accent-100 transition-colors"
                      >
                        rhitamsoibam@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-accent-100/10 p-3 rounded-full">
                      <MapPin className="text-accent-100" size={24} />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Location</h3>
                      <p className="text-gray-300">Mumbai, Maharashtra, India</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <h2 className="text-2xl font-semibold mb-6">Connect Directly</h2>
                  <div>
                    <div className="space-y-4">
                      {/* CALL BUTTON */}
                      <RippleButton
                        onClick={() => {
                          window.location.href = "tel:+918822184165";
                        }}
                        
                      >
                        <div className='flex gap-5'>
                        <Phone size={30} />
                        Call Now
                        </div>
                      </RippleButton>

                      {/* WHATSAPP BUTTON */}
                      <RippleButton
                        onClick={() => {
                          window.open("https://wa.me/918822184165", "_blank");
                        }}
                      
                      >
                        <div className='flex gap-5'>
                          <MessageSquare size={30} />
                          WhatsApp
                        </div>
                      </RippleButton>
                    </div>

                  </div>
                </div>
              </div>

              <div className="w-full">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <h2 className="text-2xl font-semibold mb-6 text-center">Find Me Here</h2>
                  <div className="rounded-lg overflow-hidden h-[400px]">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.74109995709657!3d19.08219783958221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1651982326196!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Rhitam Soibam Location"
                    ></iframe>
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-semibold mb-6">Working Hours</h2>
              <ul className="space-y-2 text-gray-300">
                <li className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday:</span>
                  <span>10:00 AM - 4:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

      
      </div>
    </section>
  );
};

export default Contact;