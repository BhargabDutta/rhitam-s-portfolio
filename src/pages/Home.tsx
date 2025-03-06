import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronDown, Play, Camera, Award } from 'lucide-react';
import firstvid from "../components/images/firstvid.png";
import secondvid from "../components/images/secondvid.png";
import thirdvid from "../components/images/thirdvid.png";
import fourthvid from "../components/images/forthvid.png";
import fifthvid from "../components/images/fifthvid.png";
import sixthvid from "../components/images/sixthvid.png";

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

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden" style={{
    backgroundImage: 'url(./src/components/images/thirdvid.png)',
    backgroundSize: 'cover' ,
    backgroundPosition: 'center',
  }}>
        {/* <div className="absolute inset-0 z-0">
          <video
            className="w-full h-full object-cover opacity-40"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-filmmaker-recording-a-movie-scene-with-a-camera-34486-large.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-dark-300/70 to-dark-200"></div>
        </div> */}

        <div className="container mx-auto px-4 md:px-6 z-10 text-center" 
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6">
              <span className="text-gradient">Capturing</span> Stories Through Lens
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Filmmaker, Photographer, and Visual Storyteller based in Mumbai
            </p> */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-52">
              <Link
                to="/portfolio"
                className="bg-accent-100 hover:bg-accent-200 text-white px-8 py-3 rounded-full font-medium transition-all duration-300"
              >
                View Portfolio
              </Link>
              <Link
                to="/contact"
                className="bg-transparent border border-white hover:border-accent-100 hover:text-accent-100 px-8 py-3 rounded-full font-medium transition-all duration-300"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="scroll-indicator">
          <span>Scroll Down</span>
          <ChevronDown size={20} />
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-dark-300">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeInUp}>
              <img
                src="https://media-ccu1-2.cdn.whatsapp.net/v/t61.24694-24/473399506_4067823980170027_5589783832990363243_n.jpg?ccb=11-4&oh=01_Q5AaIDUyabySoCFudVSHX7XZMswLj2wPTwvgGtbsOO52s3Is&oe=67D53112&_nc_sid=5e03e0&_nc_cat=108"
                alt="Rhitam Soibam"
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                About <span className="text-gradient">Rhitam Soibam</span>
              </h2>
              <p className="text-gray-300 mb-8">
                I am a budding cinematographer with a ton commercial work with an eye for stunning visuals. If you are into content that's cozy, playful and oddly satisfying, you've definitely found the place!
              </p>

              {/* <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <Play className="text-accent-100 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold mb-1">Filmmaking</h3>
                    <p className="text-gray-400 text-sm">Documentary, Commercial, Music Videos</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Camera className="text-accent-100 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold mb-1">Photography</h3>
                    <p className="text-gray-400 text-sm">Portrait, Landscape, Event</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="text-accent-100 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold mb-1">Awards</h3>
                    <p className="text-gray-400 text-sm">National Film Awards, Mumbai Film Festival</p>
                  </div>
                </div>
              </div> */}
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
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-300 max-w-2xl mx-auto"
            >
              A selection of my recent projects spanning film and photography
            </motion.p>
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

      {/* Testimonials */}
      {/* <section className="py-20 bg-dark-300">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-display font-bold mb-4"
            >
              Client <span className="text-gradient">Testimonials</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-dark-200 p-6 rounded-lg border border-gray-800"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">"{testimonial.text}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-dark-200 to-dark-300">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready to bring your <span className="text-gradient">vision</span> to life?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's collaborate on your next project and create something extraordinary together.
            </p> */}
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
    title: "HP Pavilion | Laptop commercial",
    // category: "Photography Series",
    image: firstvid
  },
  {
    title: "Sony - WF XB700 | Earbuds commercial",
    // category: "Short Film",
    image: secondvid
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
    title: "Jewelry fashion film | Curiocottage",
    // category: "Music Video",
    image: fifthvid
  },
  {
    title: "Air fryer Ad.",
    // category: "Commercial",
    image: sixthvid
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