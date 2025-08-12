import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import KiboPhoto from '../assets/kibo/athome/Wheels-and-motors-600x400.jpg';

// Home activity images for carousel - using available images from athome folder
import homeActivity1 from '../assets/kibo/athome/home3.jpg';
import homeActivity2 from '../assets/kibo/athome/home4.jpg';
import homeActivity3 from '../assets/kibo/athome/home5.jpg';
import homeActivity4 from '../assets/kibo/athome/home7.jpg';
import homeActivity5 from '../assets/kibo/athome/school1.jpg';
import homeActivity6 from '../assets/kibo/athome/school3.jpg';
import homeActivity7 from '../assets/kibo/athome/school4.jpg';

// Additional images from athome folder
import school1 from '../assets/kibo/athome/school1.jpg';
import school3 from '../assets/kibo/athome/school3.jpg';
import school4 from '../assets/kibo/athome/school4.jpg';
import home3 from '../assets/kibo/athome/home3.jpg';
import home4 from '../assets/kibo/athome/home4.jpg';
import home5 from '../assets/kibo/athome/home5.jpg';
import home7 from '../assets/kibo/athome/home7.jpg';

const KiboAtHome: React.FC = () => {
  const navigate = useNavigate();

  // Carousel state and images
  const carouselImages = [homeActivity1, homeActivity2, homeActivity3, homeActivity4, homeActivity5, homeActivity6, homeActivity7, school1, school3, school4, home3, home4, home5, home7];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-rotate carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  // Get 7 visible images for the carousel
  const getVisibleImages = () => {
    const visibleImages = [];
    for (let i = 0; i < 7; i++) {
      const imageIndex = (currentImageIndex + i) % carouselImages.length;
      visibleImages.push(carouselImages[imageIndex]);
    }
    return visibleImages;
  };

  const handleShopClick = () => {
    navigate('/shop');
  };

  return (
    <div className="flex flex-col min-h-screen bg-orange-50">
      <Header />
      <main className="flex-grow">
        {/* --- KIBO at Home Banner Section --- */}
        <div className="bg-gradient-to-r from-kibo-purple to-kibo-orange overflow-hidden">
          <div className="container mx-auto px-4 flex items-center h-64 overflow-hidden">
            <div className="w-2/3">
              <h2 className="text-3xl font-bold text-white mb-4">KIBO Robot Coding Toy</h2>
              <p className="text-white/90 mb-6">
                 Whether you’re a homeschool parent or just looking for a way to introduce coding and robotics at home to your kids, KIBO, the award-winning robot coding toy, is a welcomed addition to every family.
              </p>
            </div>
            <div className="w-1/3 flex justify-end items-center h-full">
              <img src={KiboPhoto} alt="KIBO Robot" className="max-h-[90%] w-[70%] object-contain rounded-lg shadow-lg" />
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto px-4 py-12">
          {/* Learn to code without screentime section */}
           <div className="mb-12">
             <div className="flex flex-col md:flex-row items-center gap-8">
               <div className="md:w-1/3">
                 <img 
                   src="/src/assets/kibo/athome/IMG_1516-scaled-1-e1658070686438.jpg" 
                   alt="KIBO Hands-on Coding" 
                   className="w-full rounded-lg shadow-lg"
                 />
               </div>
               <div className="md:w-2/3">
                 <h2 className="text-3xl font-bold text-kibo-purple mb-4">
                   Learn to code without screentime? Yes, parents - it can be done!
                 </h2>
                 <p className="text-black mb-4">
                   While programming and coding is synonymous with sitting in front of computers and being online, it's become more of a detriment than a benefit. Aside from the excessive screen time, research has also shown that children are more apt to grasp abstract concepts and instruction when moving, playing, building, and engaging with concrete objects, such as the KIBO robot coding toy.
                 </p>
                 <button 
                onClick={() => window.location.href = '/shop/home-edition'}
                className="px-6 py-3 rounded-lg border border-kibo-purple text-kibo-purple hover:bg-kibo-orange hover:text-kibo-purple active:bg-kibo-orange active:text-kibo-purple transition-colors cursor-pointer"
              >
                Is the KIBO Home Edition right for us?
              </button>
               </div>
             </div>
           </div>

           {/* Two info boxes section */}
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
             <div className="bg-gradient-to-r bg-purple-200 p-6 rounded-lg">
               <p className="text-black text-center">
                 KIBO is the hands-on robot coding toy that allows your child to innovate, create, and imagine – all while learning how to code.
               </p>
             </div>
             <div className="bg-gradient-to-r bg-purple-200 p-6 rounded-lg">
               <p className="text-black text-center">
                 Children of all interests and abilities can communicate, vocalize feelings, and express themselves with KIBO.
               </p>
             </div>
           </div>


        </div>

        {/* Home Photos Carousel - Full Width */}
        <div className="w-full py-0">
          <div className="w-full">
            {/* Title above images */}
            <div className="bg-orange-400 py-4">
              <div className="container mx-auto px-4 text-center">
                <h2 className="text-white text-2xl font-bold">
                  Welcome the KIBO robot coding toy into your home and experience a better way to learn to code.
                </h2>
              </div>
            </div>
            <div className="flex gap-0 overflow-hidden">
              {getVisibleImages().map((image, index) => (
                <div key={`${currentImageIndex}-${index}`} className="flex-1">
                  <img 
                    src={image} 
                    alt={`Home moment ${index + 1}`}
                    className="w-full h-50 object-cover transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Two column section */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* KIBO at Home = Fun! */}
            <div className="bg-purple-200 p-6 rounded-lg">
              {/* Video Section */}
              <div className="mb-6">
                <div className="relative w-full h-48 bg-gray-200 rounded-lg overflow-hidden">
                  <iframe
                     className="w-full h-full"
                     src="https://www.youtube.com/embed/_O3HlPfXnHE"
                     title="KIBO at Home Video"
                     frameBorder="0"
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                     allowFullScreen
                   ></iframe>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-kibo-purple mb-4">KIBO at Home = Fun!</h3>
              <p className="text-gray-600 mb-4">
                Looking for inspiration for STEAM robotics projects you can do at home? Learn how KIBO can engage your young learners, as you connect and collaborate. See first hand:
              </p>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>• The basics of programming and logic through cause and effect  </li>
                <li>• Unplugged learning that engages the senses </li>
                <li>• An opportunity to level or level-up age-appropriate learning and concepts</li>
                <li>• Collaborative play with siblings and friends</li>
                <li>• An outlet for expression and creativity</li>
              </ul>
              <button 
                onClick={() => window.location.href = '/kibo/in-action'}
                className="w-full px-6 py-3 rounded-lg border border-kibo-purple text-kibo-purple hover:bg-kibo-orange hover:text-kibo-purple active:bg-kibo-orange active:text-kibo-purple transition-colors cursor-pointer"
              >
                Watch KIBO In Action
              </button>
            </div>

            {/* Make Your Own Makerspace */}
            <div className="bg-purple-200 p-6 rounded-lg">
              {/* Image Section */}
              <div className="mb-6">
                <div className="relative w-full h-48 bg-gray-200 rounded-lg overflow-hidden">
                  <img 
                    src="/src/assets/kibo/athome/home2-600x338.jpg" 
                    alt="Make Your Own Makerspace" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-kibo-purple mb-4">Make Your Own Makerspace</h3>
              <p className="text-gray-600 mb-4">
                Welcoming KIBO into your home does more than give your child hours of beneficial play.
              </p>
              <p className="text-gray-600 mb-4">
                KIBO satisfies curiosity, keeps figidity hands busy, and provides and outlet for creativity – turning any space in your home into an imaginative workshop – they dream it, they build it, and then make it come alive through programming and code.
              </p>
              <p className="text-gray-600 mb-6">
                In an age when you can’t pry a device out of a child’s hand long enough to hold a conversation, KIBO stands out by transforming short attention spans into concentrated discovery.
              </p>
              <button 
                onClick={() => window.location.href = '/kibo/use/steam-lessons-and-activities/'}
                className="w-full px-6 py-3 rounded-lg border border-kibo-purple text-kibo-purple hover:bg-kibo-orange hover:text-kibo-purple active:bg-kibo-orange active:text-kibo-purple transition-colors cursor-pointer"
              >
                Check Out Fun Lesson Ideas
              </button>
            </div>
          </div>
        </div>

        {/* KIBO @Home Resources Section */}
        <div className="w-full bg-orange-50 py-12">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-gray-800 text-3xl font-bold mb-2">KIBO @Home Resources</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* More Benefits of KIBO */}
              <div className="rounded-lg shadow-lg overflow-hidden">
                <img 
                  src="/src/assets/kibo/athome/home-resource2-1-225x300.jpg" 
                  alt="More Benefits of KIBO" 
                  className="w-full h-56 object-cover"
                />
                <button 
                  onClick={() => window.open('/src/assets/kibo/athome/3-Benefits-of-Using-KIBO-at-Home.pdf', '_blank')}
                  className="w-full bg-orange-400 text-white py-3 px-6 font-semibold hover:text-kibo-purple transition-colors"
                >
                  More Benefits of KIBO
                </button>
              </div>

              {/* Watch The KIBO at Home Webinar */}
              <div className="rounded-lg shadow-lg overflow-hidden">
                <img 
                  src="/src/assets/kibo/athome/home-resource3-1-225x300.jpg" 
                  alt="KIBO at Home Webinar" 
                  className="w-full h-56 object-cover"
                />
                <button 
                  onClick={() => window.open('https://register.gotowebinar.com/notAvailable', '_blank')}
                  className="w-full bg-orange-400 text-white py-3 px-6 font-semibold hover:text-kibo-purple transition-colors"
                >
                  Watch The KIBO at Home Webinar
                </button>
              </div>

              {/* Start the Home Robotics Course */}
              <div className="rounded-lg shadow-lg overflow-hidden">
                <img 
                  src="/src/assets/kibo/athome/home-resource1-1-225x300.jpg" 
                  alt="Home Robotics Course" 
                  className="w-full h-56 object-cover"
                />
                <button 
                  onClick={() => window.location.href = '/sign-up-for-the-kibo-home-robotics-course'}
                  className="w-full bg-orange-400 text-white py-3 px-6 font-semibold hover:text-kibo-purple transition-colors"
                >
                  Start the Home Robotics Course
                </button>
              </div>
            </div>


          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default KiboAtHome;