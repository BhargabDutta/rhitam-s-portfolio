import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronDown, Play, Camera, Award } from 'lucide-react';
import { useMediaQuery } from 'react-responsive';
import ninthvid from "../components/images/ninthvid.png";
import secondvid from "../components/images/secondvid.png";
import thirdvid from "../components/images/thirdvid.png";
import fourthvid from "../components/images/forthvid.png";
import eighthvid from "../components/images/eighthvid.png";
import tenthvid from "../components/images/tenthvid.jpg";
import "../components/styles/style.css";
import desktopVideo from "../components/images/desktop.mp4";
import mobileVideo from "../components/images/mobile.mp4";
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

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const isDesktop = useMediaQuery({ minWidth: 768 }); // Adjust breakpoint as needed
  const videoSource = isDesktop ? desktopVideo : mobileVideo;

  return (
    <>
      {/* Hero Section */}
    <section className="hero-background relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-contain md:object-cover"
        >
          <source src={videoSource} type="video/mp4" />
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

      {/* About Section */}
      <section className="py-20 bg-dark-300 text-center h-screen w-full">
        <div className="container mx-auto px-4 md:px-6 inherit h-full flex flex-col justify-center items-center">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={staggerContainer}
            className="w-full"
          >
            <motion.div variants={fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                About <span className="text-gradient">Rhitam Soibam</span>
              </h2>
              <p className="text-gray-300 mb-8">
                I am a budding cinematographer with a ton commercial work with an eye for stunning visuals. If you are into content that's cozy, playful and oddly satisfying, you've definitely found the place!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-20 bg-dark-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-display font-bold mb-4"
            >
              My <span className="text-gradient">Work</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredWorks.map((work, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="portfolio-item group"
              >
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-80 object-cover rounded-lg"
                />
                <div className="portfolio-item-overlay bg-gradient-to-t from-dark-300/90 to-transparent">
                  <h3 className="text-xl font-semibold mb-2">{work.title}</h3>
                  {/* <p className="text-gray-300 text-sm mb-4">{work.category}</p> */}
                  <Link
                    to="/portfolio"
                    className="text-accent-100 hover:text-accent-200 font-medium inline-flex items-center gap-1"
                  >
                    View Project
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 bg-transparent border border-accent-100 text-accent-100 hover:bg-accent-100 hover:text-white px-6 py-3 rounded-full font-medium transition-all duration-300"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>
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

// Sample data
const featuredWorks = [
  {
    title: "Showreel",
    // category: "Music Video",
    image: eighthvid
  },
  {
    title: "Samsung Commercial | Circle Search",
    // category: "Documentary",
    image: thirdvid
  },
  {
    title: "Coolberg commercial",
    // category: "Photography Series",
    image: fourthvid
  },
  {
    title: "Amoha Ad Film",
    // category: "Photography Series",
    image: ninthvid
  },
  {
    title: "AAadat Music Video",
    // category: "Commercial",
    image: tenthvid
  },
  {
    title: "Sony - WF XB700 | Earbuds commercial",
    // category: "Short Film",
    image: secondvid
  }
];

const testimonials = [
  {
    name: "Priya Sharma",
    company: "Vogue India",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    text: "Rhitam's eye for detail and ability to capture emotion is unparalleled. The photoshoot exceeded our expectations."
  },
  {
    name: "Arjun Kapoor",
    company: "Dreamscape Productions",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    text: "Working with Rhitam on our documentary was a seamless experience. His storytelling through visuals is masterful."
  },
  {
    name: "Meera Patel",
    company: "Indie Film Festival",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    text: "Rhitam's short film was the highlight of our festival. His unique perspective and technical skills are impressive."
  }
];

export default Home;