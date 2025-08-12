import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import KiboPhoto from '../assets/kibo/kiboinaction/action1-600x489.jpg';
import kiboBe1 from '../assets/kibo/kiboinaction/space-drawing-600x297.jpg';
import ObstacleCourse from '../assets/kibo/kiboinaction/Obstacle-Course.jpg';
import BumperKibos from '../assets/kibo/kiboinaction/Bumper-KIBOs.jpg';
import WheelsUnderHood from '../assets/kibo/kiboinaction/Wheels-and-Under-the-Hood-scaled.jpg';
import CommunityNavigating from '../assets/kibo/kiboinaction/Community-Navigating-thru-town-1.png';
import Menu2 from '../assets/kibo/kiboinaction/menu2.jpg';
import BirdsAndGirls from '../assets/kibo/kiboinaction/Birds-and-Girls.jpg';
import Kibo120519 from '../assets/kibo/kiboinaction/KIBO-120519_9103.jpg';
import TrainingArtwork from '../assets/kibo/kiboinaction/Training-artwork-scaled.jpg';
import SpiderWithBlocks from '../assets/kibo/kiboinaction/Spider-with-blocks-scaled.jpg';
import MathEstimationBowling from '../assets/kibo/kiboinaction/Math-and-Estimation-Bowling-Ball-and-Pins-1.jpg';
import Halloween from '../assets/kibo/kiboinaction/Halloween.jpg';
import FtKibo from '../assets/kibo/kiboinaction/ft-kibo.png';
import SuperHero from '../assets/kibo/kiboinaction/Super-Hero-scaled.jpg';
import EnglishCommunity from '../assets/kibo/kiboinaction/English-and-Community-Noun-Town-scaled.jpg';
import Snowplow from '../assets/kibo/kiboinaction/Snowplow-scaled-1.jpg';
import MayflowerCloseUp from '../assets/kibo/kiboinaction/Mayflower-Close-Up.png';

const KiboInAction = () => {
  const [selectedVideo, setSelectedVideo] = useState({
    id: '6mRoXje2Bhs',
    title: 'Celebrating the Chinese New Year with the KIBO Dragon Dance!',
    platform: 'youtube'
  });

  // Sample video data - you can replace these with actual video IDs
  const videos = [
    { id: '6mRoXje2Bhs', title: 'KIBO Shares a Joke!', platform: 'youtube' },
    { id: 'BwenmmaPmwk', title: 'Celebrating the Chinese New Year with the KIBO Dragon Dance!', platform: 'youtube' },
    { id: 'Ixvxud7n6Vg', title: 'KIBO Love - Sharing Valentines', platform: 'youtube' },
    { id: '1-S0GvwHnvs', title: 'KIBO Lunar New Year', platform: 'youtube' },
    { id: '-Taowap7mRE', title: 'Science Akadémeia Integrates KIBO Robot coding with Global Exploration', platform: 'youtube' },
    { id: 'daq0ME1GkiE', title: 'Watch the KIBO robot on WVTM News!', platform: 'youtube' },
    { id: '4_BFQurVKWU', title: 'Coding Like a Kindergartner @ RCSDs STEAM School', platform: 'youtube' },
    { id: 'NFyyul4aMQs', title: 'KIBO at Wellesley Chinese Language School', platform: 'youtube' },
    { id: 'uYoCfBA9Xpc', title: 'Integrating Technology into a Preschool Classroom', platform: 'youtube' },
    { id: 'Nl1uNmwxFA4', title: 'Rockin Robots!', platform: 'youtube' },
    { id: '_xnAmXLRJK4', title: '"Going on a Bear Hunt" with KIBO!', platform: 'youtube' },
    { id: 'FCVH91RLK_U', title: 'JCDS Boston KIBO Reenactment of the Iditarod Race', platform: 'youtube' },
    { id: '9eZnRkQ3wdI', title: 'Synchronized Hokey Pokey', platform: 'youtube' },
    { id: 'BdFEdd2FsuU', title: 'KIBO Dances from Around the World', platform: 'youtube' },
    { id: 'FrrFkPe1Q7g', title: 'Robbins Childrens Programs - KIBO Bowling!', platform: 'youtube' },
    { id: '4EOoxfd6LhQ', title: 'Balloons Over Broadway - A Balloon Parade with KIBO', platform: 'youtube' },
    { id: 'WAz1GCik1Ak', title: 'KIBO at International School of Billund', platform: 'youtube' },
    { id: 'ltW4NLYB2SI', title: 'KIBO on WFAA Dallas (ABC) News', platform: 'youtube' },
    { id: '39Wj3wYFosY', title: 'KIBO at International School of Billund', platform: 'youtube' },
    { id: 'XvGkwG9wgUE', title: 'Rainforest Animal Project at RPDS', platform: 'youtube' },
    { id: 'VfTeoGLhqH0', title: 'Miami-Dade\'s Aspiring Teachers Introduce Robotics and Coding to Preschoolers', platform: 'youtube' },
    { id: 'wvHCUsQ-Aus', title: 'Parkwood Elementary Students Learn to Code KIBO', platform: 'youtube' },
    { id: '3rJ4H_bEhPc', title: 'KIBO Eclipse #TotalEclipseoftheBot', platform: 'youtube' },
    { id: 'wBVqprQdsA8', title: 'KIBO Coding for Kids Video on Atlanta News', platform: 'youtube' },
    { id: '1FNL1z-nDzQ', title: 'Students using KIBOs Free Throw - Trial and Error', platform: 'youtube' },
    { id: 'ZXIX7HY_hYI', title: 'KIBO Bowling', platform: 'youtube' },
    { id: 'Q5moDtE-CHg', title: 'KIBO Reenacting the Very Hungry Caterpillar', platform: 'youtube' },
    { id: '4Db9gKG-WU0', title: 'KIBO Dances the Virginia Reel', platform: 'youtube' },
    { id: 'qnUf33awuRs', title: 'KIBO Cleanup Song', platform: 'youtube' },
    { id: '0tfIDZnNk2Q', title: 'KIBO Covered Wagon', platform: 'youtube' },
    { id: '9v9EfEnMQ68', title: 'Hopping KIBO Rabbit', platform: 'youtube' },
    { id: 'B9fD3KOQdeI', title: 'KIBO Polar Bear', platform: 'youtube' },
    { id: 'yKxJNag5__E', title: 'STEAM Covered Wagon Exploration', platform: 'youtube' },
    { id: '366082145?fl=pl&fe=ti', title: 'KIBOwling at the Knock Knock Museum', platform: 'vimeo' },
    { id: '-Xh64ZVnNO8', title: 'NPS Now Explores KIBO', platform: 'youtube' },
    { id: 'oXBdq3sC9EQ', title: 'KIBO Hokey Pokey', platform: 'youtube' },
    { id: 'KxHbYywXoyg', title: 'KIBO Dances La Raspa', platform: 'youtube' },
    { id: '220637499?fl=pl&fe=ti&pgroup=plc', title: 'KIBO at La Salle Bonanova School n Barcelona, Spain', platform: 'vimeo' },
    { id: 'EtqN1qGdU6c', title: 'Synchronized KIBO Dance Celebrating Hanukah', platform: 'youtube' },
    { id: 'pBnpPN7f7ys', title: 'KIBO at the Early Learning Day at ID State Capital', platform: 'youtube' },
    { id: 'xjjaTXX_Pbc', title: 'PreK Robotics with KIBO', platform: 'youtube' },
    { id: 'yPCszl4mxXY', title: 'KIBO Engineering', platform: 'youtube' },
    { id: '2ltLPPtA1BY', title: 'Singapore KIBO Robotics Research', platform: 'youtube' },
    { id: '1r0SDBXZbpY', title: 'Singapore Playmaker Symposium', platform: 'youtube' },
    { id: 'qcsGabpLE0s', title: 'Big Robots for Little Kids', platform: 'youtube' },
    { id: 'tQB5vMb-MV8', title: 'Very Hungry Caterpillar', platform: 'youtube' },
    { id: '-0Xpdk5qqKw', title: 'KIBO en México', platform: 'youtube' },
    { id: 'eCf2tjpemQE', title: 'KIBO Rabbit and Wolf', platform: 'youtube' },
    { id: 'VjoswAHGvfM', title: 'Coding As A Playground For Learning', platform: 'youtube' },
    { id: 'w1huLiBCJOA', title: 'KIBO on Formosa TV News', platform: 'youtube' },
    { id: 'YBKSbmRc_D4', title: 'KIBO and Popbo Getting to Know Each Other', platform: 'youtube' },
    { id: 'QxS4K8qaLXg', title: 'The New York Academy of Sciences - Using KIBO to Teach Coding', platform: 'youtube' },
    { id: '0p6MoEfg6jU', title: 'Canal de la Ciudad - Pensamiento computacional en el nivel inicial - Cinthia Corica | HNT 14', platform: 'youtube' },

    // Vimeo video örneği - Vimeo ID'sini buraya ekleyebilirsin
    // { id: 'VIMEO_ID_BURAYA', title: 'Vimeo Video Başlığı', platform: 'vimeo' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-orange-50">
      <Header />
      <main className="flex-grow">
        {/* --- KIBO in Action Banner Section --- */}
        <div className="bg-gradient-to-r from-kibo-purple to-kibo-orange overflow-hidden">
          <div className="container mx-auto px-4 flex items-center h-64 overflow-hidden">
            <div className="w-2/3">
              <h2 className="text-3xl font-bold text-white mb-4">KIBO in Action</h2>
              <p className="text-white/90 mb-6">
                Explore. Problem-solve. Innovate. Change things up. Make it your own. See how KIBO transforms learning through hands-on coding and creative play.
              </p>
            </div>
            <div className="w-1/3 flex justify-end items-center h-full">
              <img src={KiboPhoto} alt="KIBO Robot" className="max-h-[90%] w-[60%] object-contain rounded-lg shadow-lg" />
            </div>
          </div>
        </div>

        {/* --- Content Section --- */}
        <div className="container mx-auto px-4 py-8">
          {/* Screen-Free Learning Section */}
          <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
            <div className="md:w-1/4">
              <img src={kiboBe1} alt="KIBO Robot in Action" className="w-full max-w-xs mx-auto rounded-lg shadow-lg" />
            </div>
            <div className="md:w-3/4">
              <div className="space-y-6">
                <div className="text-center md:text-left">
                  <h3 className="text-xl font-semibold text-kibo-purple mb-2">Let's go on a KIBO adventure!</h3>
                  <p className="text-gray-600">Explore. Design your own world. Problem-solve. Take charge. Collaborate. Forge your own path. Innovate. Tell stories. Change things up. Make it your own. See how others have used the little educational robot in their learning.
This isn't an online simulation. It's real.</p>
                </div>
              </div>
            </div>
          </div>

          {/* YouTube Videos Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-kibo-orange mb-8 text-center">Real-Life Customer Uses of KIBO Educational Robots</h2>
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              {/* Video List */}
              <div className="lg:w-1/3">
                 <div className="bg-kibo-purple rounded-lg shadow-lg p-4">
                   <div className="flex items-center justify-between mb-4">
                     <h3 className="font-semibold text-white">Customer Videos</h3>
                     <span className="text-sm text-purple-200">53 Videos</span>
                   </div>
                   <div className="space-y-2 overflow-y-auto" style={{height: 'calc(83vh - 400px)', minHeight: '400px'}}>
                     {videos.map((video, index) => (
                       <div
                         key={index}
                         className={`flex items-center p-3 rounded-lg cursor-pointer transition-colors ${
                           selectedVideo.id === video.id
                             ? 'bg-kibo-orange text-white'
                             : 'hover:bg-orange-300 text-white'
                         }`}
                         onClick={() => setSelectedVideo(video)}
                       >
                         <div className="w-16 h-12 bg-gray-800 rounded mr-3 flex-shrink-0 overflow-hidden">
                           {video.platform === 'youtube' ? (
                             <img 
                               src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                               alt={video.title}
                               className="w-full h-full object-cover"
                             />
                           ) : video.platform === 'vimeo' ? (
                             <div className="w-full h-full bg-blue-600 flex items-center justify-center">
                               <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                 <path d="M23.977 6.416c-.105 2.338-1.739 5.543-4.894 9.609-3.268 4.247-6.026 6.37-8.29 6.37-1.409 0-2.578-1.294-3.553-3.881L5.322 11.4C4.603 8.816 3.834 7.522 3.01 7.522c-.179 0-.806.378-1.881 1.132L0 7.197c1.185-1.044 2.351-2.084 3.501-3.128C5.08 2.701 6.266 1.984 7.055 1.91c1.867-.18 3.016 1.1 3.447 3.838.465 2.953.789 4.789.971 5.507.539 2.45 1.131 3.674 1.776 3.674.502 0 1.256-.796 2.265-2.385 1.004-1.589 1.54-2.797 1.612-3.628.144-1.371-.395-2.061-1.614-2.061-.574 0-1.167.121-1.777.391 1.186-3.868 3.434-5.757 6.762-5.637 2.473.06 3.628 1.664 3.493 4.797l-.013.01z"/>
                               </svg>
                             </div>
                           ) : (
                             <div className="w-full h-full bg-gray-600 flex items-center justify-center">
                               <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                 <path d="M8 5v10l8-5-8-5z"/>
                               </svg>
                             </div>
                           )}
                         </div>
                         <div className="flex-1 min-w-0">
                           <p className="text-sm font-medium truncate">{video.title}</p>
                         </div>
                       </div>
                     ))}
                   </div>
                 </div>
               </div>

              {/* Video Player */}
              <div className="lg:w-2/3">
                <div className="bg-kibo-purple rounded-lg shadow-lg p-4">

                  <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
                    <iframe
                      width="100%"
                      height="100%"
                      src={selectedVideo.platform === 'youtube' 
                        ? `https://www.youtube.com/embed/${selectedVideo.id}`
                        : selectedVideo.platform === 'vimeo'
                        ? `https://player.vimeo.com/video/${selectedVideo.id}`
                        : `https://www.youtube.com/embed/${selectedVideo.id}`
                      }
                      title={selectedVideo.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Image Gallery Section */}
          <div className="mb-16">
            <div className="relative">
              {/* Top row - 6 images */}
              <div className="grid grid-cols-6 gap-2 mb-2">
                <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                  <img src={ObstacleCourse} alt="KIBO Obstacle Course" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                  <img src={BumperKibos} alt="Bumper KIBOs" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                  <img src={WheelsUnderHood} alt="Wheels and Under the Hood" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                  <img src={CommunityNavigating} alt="Community Navigating" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                  <img src={Menu2} alt="KIBO Menu" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                  <img src={BirdsAndGirls} alt="Birds and Girls" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Middle section with left 4, center text, right 4 */}
              <div className="grid grid-cols-12 gap-2 mb-2">
                {/* Left 2 images */}
                <div className="col-span-2 grid grid-cols-1 gap-2">
                  <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                    <img src={SuperHero} alt="Super Hero KIBO" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                    <img src={EnglishCommunity} alt="English and Community Noun Town" className="w-full h-full object-cover" />
                  </div>
                </div>

                {/* Center text */}
                <div className="col-span-8 flex items-center justify-center">
                  <div className="text-center px-8">
                    <h3 className="text-2xl font-bold text-kibo-purple mb-4">Check Out All That KIBO Educational Robots Can Become!</h3>
                    <p className="text-gray-600 mb-4">
                      Introduce the next factor with intriguing ideas that help young learners develop much more than just coding skills – they develop a sense of self through educational robots. Through dance and music, they figure things out. They make mistakes and learn from them right. They are inventive. And learn from peers. Best of all enjoy that time with KIBO and look forward to every interaction.
                    </p>
                    <p className="text-kibo-orange font-semibold">
                      Bring on the smiles! Look around at all the ways others have put <span className="text-kibo-purple">KIBO educational robots into action!</span>
                    </p>
                  </div>
                </div>

                {/* Right 2 images */}
                <div className="col-span-2 grid grid-cols-1 gap-2">
                  <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                    <img src={Snowplow} alt="Snowplow KIBO" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                    <img src={MayflowerCloseUp} alt="Mayflower Close Up" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>

              {/* Bottom row - 6 images */}
               <div className="grid grid-cols-6 gap-2">
                 <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                   <img src={Kibo120519} alt="KIBO Robot Activity" className="w-full h-full object-cover" />
                 </div>
                 <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                   <img src={TrainingArtwork} alt="Training Artwork" className="w-full h-full object-cover" />
                 </div>
                 <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                   <img src={SpiderWithBlocks} alt="Spider with Blocks" className="w-full h-full object-cover" />
                 </div>
                 <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                   <img src={MathEstimationBowling} alt="Math and Estimation Bowling" className="w-full h-full object-cover" />
                 </div>
                 <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                   <img src={Halloween} alt="Halloween KIBO" className="w-full h-full object-cover" />
                 </div>
                 <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                   <img src={FtKibo} alt="FT KIBO" className="w-full h-full object-cover" />
                 </div>
               </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default KiboInAction;