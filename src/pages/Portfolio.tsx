import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Image as ImageIcon } from 'lucide-react';
import firstvid from "../components/images/firstvid.png";
import secondvid from "../components/images/secondvid.png";
import thirdvid from "../components/images/thirdvid.png";
import fourthvid from "../components/images/forthvid.png";
import fifthvid from "../components/images/fifthvid.png";
import sixthvid from "../components/images/sixthvid.png";
import seventhvid from "../components/images/seventhvid.png";
import eighthvid from "../components/images/eighthvid.png";

// import admad from "../components/videos/AdMad Submission_1.mp4";
// import C0141 from "../components/videos/C0141_1.mp4";
const Portfolio: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'videos' | 'photos'>('all');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  // const handleTabChange = (tab: 'all' | 'videos' | 'photos') => {
  //   setActiveTab(tab);
  // };

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
      <section className="pt-32 pb-20 bg-dark-200">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              My <span className="text-gradient">Work</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A collection of my work in filmmaking and photography, showcasing diverse projects and visual storytelling.
            </p>
          </motion.div>

          {/* <div className="flex justify-center mb-12">
            <div className="inline-flex bg-dark-300 rounded-full p-1">
              <button
                onClick={() => handleTabChange('all')}
                className={`px-6 py-2 rounded-full transition-all ${
                  activeTab === 'all' ? 'bg-accent-100 text-white' : 'text-gray-300 hover:text-white'
                }`}
              >
                All Projects
              </button>
              <button
                onClick={() => handleTabChange('videos')}
                className={`px-6 py-2 rounded-full transition-all ${
                  activeTab === 'videos' ? 'bg-accent-100 text-white' : 'text-gray-300 hover:text-white'
                }`}
              >
                Videos
              </button>
              <button
                onClick={() => handleTabChange('photos')}
                className={`px-6 py-2 rounded-full transition-all ${
                  activeTab === 'photos' ? 'bg-accent-100 text-white' : 'text-gray-300 hover:text-white'
                }`}
              >
                Photos
              </button>
            </div>
          </div> */}

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
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
                className="portfolio-item cursor-pointer"
                onClick={() => openModal(item)}
              >
                <img
                  src={item.thumbnail}
                  alt={item.title}
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
            {/* <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{selectedItem.title}</h3>
              <p className="text-accent-100 mb-4">{selectedItem.category}</p>
              <p className="text-gray-300 mb-6">{selectedItem.description}</p>
              <div className="flex flex-wrap gap-2">
                {selectedItem.tags.map((tag, index) => (
                  <span key={index} className="bg-dark-200 px-3 py-1 rounded-full text-sm text-gray-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div> */}
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
    title: 'HP Pavilion | Laptop commercial',
    thumbnail: firstvid,
    content: "https://www.youtube.com/embed/uyYReBOneoI?si=ETNk8y3H-QBe6dx4"
  },
  {
    type: 'videos',
    title: 'Sony - WF XB700 | Earbuds commercial',
    thumbnail: secondvid,
    content: "https://www.youtube.com/embed/vzuSo-heBCU?si=gjAc58bRNFU7oONW",
  },
  {
    type: 'videos',
    title: 'Samsung Commercial | Circle Search',
    thumbnail:thirdvid,
    content: "https://www.youtube.com/embed/T8dp26ykswM?si=DSzq4dndca9m85T0"
  },
  {
    type: 'videos',
    title: 'Coolberg commercial',
    thumbnail: fourthvid,
    content: "https://www.youtube.com/embed/oBTH-rzUhY0?si=1TXeKt07JErcC2IF",
  },
  {
    type: 'videos',
    title: 'Jewelry fashion film | Curiocottage',
    thumbnail: fifthvid,
    content: "https://www.youtube.com/embed/m0cYJGiVWkk?si=66iv_62LqoJDCAma",
  },
  {
    type: 'videos',
    title: 'Air fryer Ad.',
    thumbnail: sixthvid,
    content: "https://www.youtube.com/embed/SQm5vgcKdGw?si=ZFgOK3U8KJA6TuqR",
  },
  {
    type: 'videos',
    title: 'Rivela Serum',
    thumbnail: seventhvid,
    content: "https://www.youtube.com/embed/FwKLw7_cv9k?si=Hqqh6l5CjU7ubJBM",
  },
  {
    type: 'videos',
    title: 'Showreel',
    thumbnail: eighthvid,
    content: "https://www.youtube.com/embed/JBzdNjtYbTs?si=GPMSTpzlIoG57r7Y",
  }
];

export default Portfolio;