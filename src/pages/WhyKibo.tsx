import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import KiboCarousel from '../components/KiboCarousel';
import KiboPhoto from '../assets/whykibo/home.jpg';
import kiboBe1 from '../assets/whykibo/Expression-Module.jpeg';
import artBg from '../assets/whykibo/art.jpg';
import puzzleBg from '../assets/whykibo/puzzle.jpg';
import rocketBg from '../assets/whykibo/rocket.jpg';
import scienceBg from '../assets/whykibo/science.jpg';

const WhyKibo = () => {
  const navigate = useNavigate();

  const handleKiboKidsClick = () => {
    navigate('/kibo');
  };

  return (
    <div className="flex flex-col min-h-screen bg-orange-50">
      <Header />
      <main className="flex-grow">
        {/* --- Why KIBO? Banner Section --- */}
        <div className="bg-gradient-to-r from-kibo-purple to-kibo-orange overflow-hidden">
          <div className="container mx-auto px-4 flex items-center h-64 overflow-hidden">
            <div className="w-2/3">
              <h2 className="text-3xl font-bold text-white mb-4">Why KIBO Coding Robotics?  </h2>
              <p className="text-white/90 mb-6">
                Why choose KIBO over other coding robotics? 
                Unlike robot kits that rely on laptops, tablets, and the internet, KIBO offers children a creative way to learn computational thinking and STEAM skills offline! 
              
              </p>
            </div>
            <div className="w-1/3 flex justify-end items-center h-full">
              <img src={KiboPhoto} alt="KIBO Robot" className="max-h-[90%] w-[60%] object-contain rounded-lg shadow-lg" />
            </div>
          </div>
        </div>

        {/* --- Content Section --- */}
        <div className="container mx-auto px-4 py-8">
          {/* We Love KIBO Section */}
          <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
            <div className="md:w-1/4">
              <img src={kiboBe1} alt="KIBO Robot saying We Love KIBO!" className="w-full max-w-xs mx-auto rounded-lg shadow-lg" />
            </div>
            <div className="md:w-3/4">
              <div className="space-y-6">
                <div className="text-center flex items-center justify-center bg-kibo-orange/30 p-4 rounded-lg">
                  <p className="text-kibo-purple my-0">KIBO coding robotics is not only screen-free, but also different in that it's powered by a young child's imagination.</p>
                </div>
                
                <div className="text-center flex items-center justify-center bg-kibo-orange/30 p-4 rounded-lg">
                  <p className="text-kibo-purple my-0">With the use of hands-on manipulatives to understand coding, the learning doesn't stop there. In fact, that's just where it starts.</p>
                </div>
                
                <div className="text-center flex items-center justify-center bg-kibo-orange/30 p-4 rounded-lg">
                  <p className="text-kibo-purple my-0">Becoming a KIBO Kid unlocks innate curiosity. They're driven to explore and figure things out.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Core Learning Areas */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-kibo-purple">Core Learning Areas</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              KIBO develops essential 21st-century skills through engaging, hands-on activities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="relative rounded-lg overflow-hidden p-8 text-white" style={{backgroundImage: `url(${artBg})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="relative text-center">
                  <h3 className="text-2xl font-bold mb-4">Creative Play</h3>
                  <p className="text-sm leading-relaxed">Dream it. Build it. Decorate it. Code it. Playing with a KIBO coding robotics kit is letting creativity soar to new heights. </p>
                </div>
              </div>
              
              <div className="relative rounded-lg overflow-hidden p-8 text-white" style={{backgroundImage: `url(${puzzleBg})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="relative text-center">
                  <h3 className="text-2xl font-bold mb-4">Problem Solving</h3>
                  <p className="text-sm leading-relaxed">KIBO builds on the basics of coding robotics and leads to the understanding of sequential thought, computational thinking, cause and effect, and trial and error – all while having fun.</p>
                </div>
              </div>
              
              <div className="relative rounded-lg overflow-hidden p-8 text-white" style={{backgroundImage: `url(${rocketBg})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="relative text-center">
                  <h3 className="text-2xl font-bold mb-4">Critical Thinking</h3>
                  <p className="text-sm leading-relaxed">Step by step, children explore, discover, learn, and achieve. They make mistakes and then make it right. It’s all about progress, accomplishing a desired outcome, and all-around fun!</p>
                </div>
              </div>
              
              <div className="relative rounded-lg overflow-hidden p-8 text-white" style={{backgroundImage: `url(${scienceBg})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="relative text-center">
                  <h3 className="text-2xl font-bold mb-4">Versatility</h3>
                  <p className="text-sm leading-relaxed">Lights. Camera. Action. With so many sensory and adaptive learning opportunities there’s never a dull moment with KIBO coding robotics kits. Children from 4 years to 5th grade take advantage of adventures with KIBO and KIBO extension sets.</p>
                </div>
              </div>
            </div>

          {/* Research Based Section */}
          <div className="mb-16">
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-kibo-purple">Based On Research</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Based on 20+ years of research by leading early childhood development researcher, Dr. Marina Bers, KIBO is the ultimate “sneaky learning” STEAM coding robotics kit that affords hours of activities and creativity for more meaningful play and learning.
            </p>
            <p className="text-gray-600 mb-6">
              KIBO Kids are independent critical thinkers that draw their own conclusions, go through the steps of the engineering design process, and learn to communicate and collaborate - leading to greater achievement and self-esteem.
            </p>
            <div className="text-center">
              <button 
                onClick={handleKiboKidsClick}
                className="px-6 py-3 rounded-lg border border-kibo-purple text-kibo-purple hover:bg-kibo-orange hover:text-kibo-purple active:bg-kibo-orange active:text-kibo-purple transition-colors cursor-pointer"
              >
                Have your young learners become KIBO Kids!
              </button>
            </div>
          </div>

        </div>
        
        {/* KIBO IS FUN Section - Full Width */}
         <div className="bg-gradient-to-r from-kibo-orange to-kibo-orange text-white relative">
           <div className="container mx-auto px-4 py-8">
             <div className="flex flex-col lg:flex-row items-center gap-8">
               {/* Text Content - Left Side */}
               <div className="lg:w-1/2 text-center lg:text-left">
                 <h2 className="text-4xl font-bold mb-4">And let's not forget... KIBO IS FUN!</h2>
                 <p className="text-lg mb-4">
                   Best of all, KIBO coding robotics is experiential learning through play. It is this generation’s playdough, Mr. Potato Head, and tinker toys, all rolled into one. KIBO coding robotics can be a game, an art project, a science experiment, a geography lesson, and even an interactive storyteller.
                 </p>
                 <p className="text-lg">
                   There are endless ways to make KIBO coding robotics a teaching assistant and a young child’s best friend.
                 </p>
               </div>
               
               {/* Image Carousel - Right Side */}
                <div className="lg:w-1/2">
                  <KiboCarousel />
                </div>
             </div>
           </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WhyKibo;