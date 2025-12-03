import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronDown } from 'lucide-react';
import { useMediaQuery } from 'react-responsive';
import Portfolio from './Portfolio';
// import "../components/styles/style.css";
import desktopVideo from "../components/images/desktop.mp4";
// import mobileVideo from "../components/images/mobile.mp4";
const Home: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const isDesktop = useMediaQuery({ minWidth: 768 }); // Adjust breakpoint as needed
  // const videoSource = isDesktop ? desktopVideo : mobileVideo;

  return (
    <>

    {/* Hero Section (Desktop Only) */}
      {isDesktop && (
        <section className="hero-background relative h-screen flex items-center justify-center overflow-hidden">
          {/* Background Video */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute top-0 left-0 w-full h-full object-cover"
            >
              <source src={desktopVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Content Container */}
          <div className="container mx-auto px-4 md:px-6 z-10 text-center relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-52">
                <Link
                  to="/portfolio"
                  className="bg-accent-100 hover:bg-accent-200 text-white px-8 py-3 rounded-full font-medium transition-all duration-300"
                >
                  View Work
                </Link>
                <Link
                  to="https://www.instagram.com/rhitam_soibam?igsh=MThsZGFhcGQyd3FuOA=="
                  target="_blank"
                  className="bg-transparent border border-white hover:border-accent-100 hover:text-accent-100 px-8 py-3 rounded-full font-medium transition-all duration-300"
                >
                  View Instagram
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <div className="scroll-indicator z-10 relative">
            <span>Scroll Down</span>
            <ChevronDown size={20} />
          </div>
        </section>
      )}
      <Portfolio/>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-dark-200 to-dark-300">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link
              to="/contact"
              className="bg-accent-100 hover:bg-accent-200 text-white px-8 py-3 rounded-full font-medium transition-all duration-300"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;