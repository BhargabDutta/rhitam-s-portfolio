import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Image as ImageIcon } from 'lucide-react';
import coolberg from "../components/images/coolberg final.mp4";
import samsung from "../components/images/Samsung.mp4";
import sony from "../components/images/Sony.mp4";
import aadat from "../components/images/AADAT MV.mp4";
import amoha from "../components/images/Amoha.mp4";
import jewelery from "../components/images/Jewelery.mp4";
import poshan_ad from "../components/images/poshan ad.mp4";
import poshan_audition from "../components/images/poshan audition.mp4";
import showreel2025 from "../components/images/showreel2025.mp4";

// import admad from "../components/videos/AdMad Submission_1.mp4";
// import C0141 from "../components/videos/C0141_1.mp4";
const Portfolio: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'videos' | 'photos'>('all');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filteredItems = activeTab === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.type === activeTab);

  const openModal = (item: PortfolioItem) => {
    setSelectedItem(item);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedItem(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <section className="bg-dark-200 pt-32 md:pt-20">
        <div className="w-full px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center hidden md:block"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              My <span className="text-gradient">Work</span>
            </h1>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="portfolio-item cursor-pointer w-full"
                onClick={() => openModal(item)}
              >
                <video
                  src={item.thumbnail}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                  className="w-full h-80 object-cover rounded-lg"
                />
                <div className="portfolio-item-overlay bg-gradient-to-t from-dark-300/90 to-transparent">
                  <div className="absolute top-4 right-4">
                    {item.type === 'videos' ? (
                      <div className="bg-accent-100 p-2 rounded-full">
                        <Play size={16} />
                      </div>
                    ) : (
                      <div className="bg-accent-100 p-2 rounded-full">
                        <ImageIcon size={16} />
                      </div>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  {/* <p className="text-gray-300 text-sm mb-2">{item.category}</p> */}
                  <p className="text-accent-100 font-medium">View Details</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={closeModal}>
          <motion.div 
            className="bg-dark-300 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              {selectedItem.type === 'videos' ? (
                <div className="aspect-video">
                  <iframe
                    className="w-full h-full rounded-t-lg"
                    src={selectedItem.content}
                    title={selectedItem.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              ) : (
                <img
                  src={selectedItem.content}
                  alt={selectedItem.title}
                  className="w-full rounded-t-lg"
                />
              )}
              <button
                className="absolute top-4 right-4 bg-dark-300/80 text-white p-2 rounded-full"
                onClick={closeModal}
              >
                &times;
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

interface PortfolioItem {
  type: 'videos' | 'photos';
  title: string;
  // category: string;
  thumbnail: string;
  content: string;
  // description: string;
  // tags: string[];
}

// Sample portfolio data
const portfolioItems: PortfolioItem[] = [
  {
    type: 'videos',
    title: 'Showreel 2025',
    thumbnail: showreel2025,
    content: "https://www.youtube.com/embed/Btc7Rxwux4M?si=E7rNZXvVVATRrfis",
  },
  {
    type: 'videos',
    title: 'Poshan Ad Film',
    thumbnail: poshan_ad,
    content: "https://www.youtube.com/embed/EApshw7rB9s?si=3Izol2Mv6NzhJdFv",
  },
  {
    type: 'videos',
    title: 'Poshan Audition',
    thumbnail: poshan_audition,
    content: "https://www.youtube.com/embed/Q60nAqKjqKI?si=53UQXuKZTfvP6YvG",
  },
  {
    type: 'videos',
    title: 'Jewelry fashion film | Curiocottage',
    thumbnail: jewelery,
    content: "https://www.youtube.com/embed/m0cYJGiVWkk?si=66iv_62LqoJDCAma",
  },
  {
    type: 'videos',
    title: 'Samsung Commercial | Circle Search',
    thumbnail:samsung,
    content: "https://www.youtube.com/embed/T8dp26ykswM?si=DSzq4dndca9m85T0"
  },
  {
    type: 'videos',
    title: 'Amoha Ad Film',
    thumbnail: amoha,
    content: "https://www.youtube.com/embed/8CyH0SfHXZ0?si=fU-CWCHi1QqJwMNh",
  },
  {
    type: 'videos',
    title: 'Aadat Music Video',
    thumbnail: aadat,
    content: "https://www.youtube.com/embed/3I1SIL5NzJw?si=pZzGBQIy0sOOsJRg",
  },
  {
    type: 'videos',
    title: 'Coolberg commercial',
    thumbnail: coolberg,
    content: "https://www.youtube.com/embed/oBTH-rzUhY0?si=1TXeKt07JErcC2IF",
  },
  {
    type: 'videos',
    title: 'Sony - WF XB700 | Earbuds commercial',
    thumbnail: sony,
    content: "https://www.youtube.com/embed/vzuSo-heBCU?si=gjAc58bRNFU7oONW",
  },
];

export default Portfolio;