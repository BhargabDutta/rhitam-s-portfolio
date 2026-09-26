import React, { useState, useEffect } from 'react';
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
import amohabags from "../components/images/amohabags.mp4";
import loop from "../components/images/loop.mp4";
import deconstruct from "../components/images/Deconstruct.mp4";
import showreel2026 from "../components/images/showreel2026.mp4";
import GHI from "../components/images/GHI_loop.mp4";
import killr from "../components/images/killr.mp4";
import oil from "../components/images/oil.mp4";
import Lip from "../components/images/Lip.mp4";
import mellow from "../components/images/Mellow.mp4";
import skinfit from "../components/images/skinfit.mp4";
const isVideoFile = (src: string) => {
  return /\.(mp4|webm|ogg)$/i.test(src);
};

const Portfolio: React.FC<{ isDesktop: boolean }> = ({ isDesktop }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'videos' | 'photos'>('all');

  const [loadedVideoCount, setLoadedVideoCount] = useState(0);
    const [heroReady, setHeroReady] = useState(false);

    useEffect(() => {
      const handleHeroReady = () => {
        setHeroReady(true);
      };

      window.addEventListener('hero-video-ready', handleHeroReady);

      return () => {
        window.removeEventListener('hero-video-ready', handleHeroReady);
      };
    }, []);

  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filteredItems = activeTab === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.type === activeTab);

    const videoItems = portfolioItems.filter(item =>
      isVideoFile(item.thumbnail)
    );

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
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 auto-rows-[250px] gap-4"
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
                className={`portfolio-item cursor-pointer overflow-hidden rounded-lg ${
                  item.layout === 'portrait' ? 'row-span-3' : ''
                }`}
                onClick={() => openModal(item)}
              >
                {isVideoFile(item.thumbnail) ? (
                  <video
                     src={
                        (!isDesktop || heroReady) &&
                        videoItems.findIndex(video => video === item) <= loadedVideoCount
                          ? item.thumbnail
                          : undefined
                      }
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    onCanPlay={() => {
                      const index = videoItems.findIndex(video => video === item);

                      if (index === loadedVideoCount) {
                        setLoadedVideoCount(prev => prev + 1);
                      }
                    }}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  ) : (
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-52 md:h-80 object-cover rounded-lg"
                    loading="lazy"
                  />
                )}
                <div className="portfolio-item-overlay">
                  <div className="absolute top-4 right-4">
                    {isVideoFile(item.thumbnail) ? (
                      <div className="bg-accent-100 p-2 rounded-full">
                        <Play size={16} />
                      </div>
                    ) : (
                      <div className="bg-accent-100 p-2 rounded-full">
                        <ImageIcon size={16} />
                      </div>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  {/* <p className="text-gray-300 text-sm mb-2">{item.category}</p> */}
                  {/* <p className="text-accent-100 font-medium">View Details</p> */}
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
  type: 'videos' | 'photos' | 'vertical';
  title: string;
  thumbnail: string;
  content: string;
  layout?: 'portrait' | 'landscape';
}

// Sample portfolio data
const portfolioItems: PortfolioItem[] = [
{
  type: 'videos',
  title: 'MARS | Lip Mellow',
  thumbnail: mellow,
  content: 'https://youtube.com/embed/sNzcPpYTTAc?si=pOyiN35jBZb2eNmj',
  layout: 'portrait',
},
  {
    type: 'videos',
    title: 'MARS | Lip Fuzz',
    thumbnail: Lip,
    content: "https://www.youtube.com/embed/c5_HhGIi0F0?si=c-NmAlXzfhRIAyEo",
  },
  {
    type: 'videos',
    title: 'MARS | Oil Blotter',
    thumbnail: oil,
    content: "https://www.youtube.com/embed/i3wvbkX2HZk?si=ZgBwqfbQtJG41avk",
  },
  {
    type: 'videos',
    title: 'KILLR | Ad Film',
    thumbnail: killr,
    content: "https://www.youtube.com/embed/tLR3sw1PXrM?si=s7P33bBIaJVB6lug",
  },
  {
    type: 'videos',
    title: 'GHI STRAND | Ad Film',
    thumbnail: GHI,
    content: "https://www.youtube.com/embed/cIqgRdZkUNk?si=LFFS4WLZ6U-NOt5Q",
  },
  {
  type: 'videos',
  title: 'MARS | SkinFit',
  thumbnail: skinfit,
  content: 'https://youtube.com/embed/Pb2j99iLJHU?si=aXPmgDdWtnuXEV7w',
  layout: 'portrait',
},
  {
    type: 'videos',
    title: 'URBAN THING | Fashion Film',
    thumbnail: loop,
    content: "https://www.youtube.com/embed/K7KOXw5wf0U?si=Jeu9VJabPi8-dSIZ",
  },
  {
    type: 'videos',
    title: 'AMOHA |Campaign Film',
    thumbnail: amohabags,
    content: "https://www.youtube.com/embed/p-t5bUm75u0?si=hJfPnnyqLsja9_lK",
  },
  {
    type: 'videos',
    title: 'DECONSTRUCT | vitamin c serum',
    thumbnail: deconstruct,
    content: "https://www.youtube.com/embed/vAqcSmKZYzk?si=2q-MKHzKZNzre8qW",
  },
  // {
  //   type: 'videos',
  //   title: 'Showreel 2026',
  //   thumbnail: showreel2026,
  //   content: "https://www.youtube.com/embed/scmn1RstI1o?si=T7liwk0y6AH3Yp7e",
  // },
  {
    type: 'videos',
    title: 'POSHAN | Ad Film',
    thumbnail: poshan_ad,
    content: "https://www.youtube.com/embed/EApshw7rB9s?si=3Izol2Mv6NzhJdFv",
  },
  {
    type: 'videos',
    title: 'POSHAN | Audition',
    thumbnail: poshan_audition,
    content: "https://www.youtube.com/embed/Q60nAqKjqKI?si=53UQXuKZTfvP6YvG",
  },
  {
    type: 'videos',
    title: 'CURIOCOTTAGE | Jewelry fashion film',
    thumbnail: jewelery,
    content: "https://www.youtube.com/embed/m0cYJGiVWkk?si=66iv_62LqoJDCAma",
  },
  {
    type: 'videos',
    title: 'SAMSUNG | Circle Search',
    thumbnail: samsung,
    content: "https://www.youtube.com/embed/T8dp26ykswM?si=DSzq4dndca9m85T0"
  },
  {
    type: 'videos',
    title: 'AMOHA | Ad Film',
    thumbnail: amoha,
    content: "https://www.youtube.com/embed/8CyH0SfHXZ0?si=fU-CWCHi1QqJwMNh",
  },
  {
    type: 'videos',
    title: 'AADAT | Music Video',
    thumbnail: aadat,
    content: "https://www.youtube.com/embed/3I1SIL5NzJw?si=pZzGBQIy0sOOsJRg",
  },
  {
    type: 'videos',
    title: 'COOLBERG | Product Film',
    thumbnail: coolberg,
    content: "https://www.youtube.com/embed/oBTH-rzUhY0?si=1TXeKt07JErcC2IF",
  },
  {
    type: 'videos',
    title: 'SONY | Earbuds commercial',
    thumbnail: sony,
    content: "https://www.youtube.com/embed/vzuSo-heBCU?si=gjAc58bRNFU7oONW",
  },
];

export default Portfolio;