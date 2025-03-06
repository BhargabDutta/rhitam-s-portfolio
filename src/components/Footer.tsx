import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Youtube, Twitter, Camera } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-300 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Camera className="h-6 w-6 text-accent-100" />
              <span className="text-lg font-display font-bold">RHITAM SOIBAM</span>
            </Link>
            <p className="text-gray-400 mb-4">
              Capturing moments, creating stories, and bringing visions to life through the lens.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent-100 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent-100 transition-colors">
                <Youtube size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent-100 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-accent-100 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-400 hover:text-accent-100 transition-colors">Portfolio</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-accent-100 transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <p className="text-gray-400 mb-2">Mumbai, India</p>
            <p className="text-gray-400 mb-2">rhitamsoibam@gmail.com</p>
            <p className="text-gray-400">+91 8822184165</p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Rhitam Soibam. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;