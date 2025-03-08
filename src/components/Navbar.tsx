import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Camera } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark-300/90 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <NavLink to="/" className="flex items-center gap-2">
            {/* <Camera className="h-8 w-8 text-accent-100" /> */}
            <span className="text-xl font-display font-bold">RHITAM SOIBAM<br/><span style={{fontWeight:"normal"}}>Cinematographer</span></span>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <NavLink to="/" className={({ isActive }) => 
              isActive ? 'nav-link active-nav-link' : 'nav-link'
            }>
              Home
            </NavLink>
            <NavLink to="/portfolio" className={({ isActive }) => 
              isActive ? 'nav-link active-nav-link' : 'nav-link'
            }>
              My Work
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => 
              isActive ? 'nav-link active-nav-link' : 'nav-link'
            }>
              Contact
            </NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div 
          className="md:hidden bg-dark-300/95 backdrop-blur-md"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <nav className="flex flex-col py-4 px-4">
            <NavLink to="/" className={({ isActive }) => 
              `py-3 px-4 ${isActive ? 'text-accent-100' : 'text-white'}`
            }>
              Home
            </NavLink>
            <NavLink to="/portfolio" className={({ isActive }) => 
              `py-3 px-4 ${isActive ? 'text-accent-100' : 'text-white'}`
            }>
              My Work
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => 
              `py-3 px-4 ${isActive ? 'text-accent-100' : 'text-white'}`
            }>
              Contact
            </NavLink>
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;