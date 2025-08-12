import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button'; // Assuming Button is available from ui components
import BannerImage from '../assets/kibo/kibointheclassroom/My-Creation-600x507.webp';
import StudentsBg from '../assets/kibo/kibointheclassroom/adventure-fade.jpg';
import EducatorsBg from '../assets/kibo/kibointheclassroom/possibilities-fade.jpg';
import LegoAdventureImg from '../assets/kibo/kibointheclassroom/Lego-Adventure.jpg';

// Classroom photos for carousel
import school1 from '../assets/kibo/kibointheclassroom/school1.jpg';
import school2 from '../assets/kibo/kibointheclassroom/school2.jpg';
import school3 from '../assets/kibo/kibointheclassroom/school3.jpg';
import school4 from '../assets/kibo/kibointheclassroom/school4.jpg';
import school5 from '../assets/kibo/kibointheclassroom/school5.jpg';
import school6 from '../assets/kibo/kibointheclassroom/school6.jpg';
import school7 from '../assets/kibo/kibointheclassroom/school7.jpg';

const KiboInTheClassroom: React.FC = () => {
  // Example structure based on WhyKibo.tsx
  // You might need to adjust the banner content and styling based on actual examples if available.
  const bannerTitle = "KIBO Sınıfta"; // "KIBO in the Classroom" in Turkish

  // Carousel state and images
  const carouselImages = [school1, school2, school3, school4, school5, school6, school7];
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

  // Get 6 visible images for the carousel
  const getVisibleImages = () => {
    const visibleImages = [];
    for (let i = 0; i < 6; i++) {
      const imageIndex = (currentImageIndex + i) % carouselImages.length;
      visibleImages.push(carouselImages[imageIndex]);
    }
    return visibleImages;
  };

    return (
    <div className="flex flex-col min-h-screen bg-orange-50">
      <Header />
      <main className="flex-grow">
        {/* Banner Section */}
        <div className="bg-gradient-to-r from-kibo-purple to-kibo-orange overflow-hidden">
          <div className="container mx-auto px-4 flex items-center h-64 overflow-hidden">
            <div className="w-2/3">
              <h1 className="text-4xl font-bold text-white mb-4">KIBO Coding Robots for the Classroom</h1>
              <p className="text-white/90 mb-6">
                Engaging today's students requires more than a tablet and a mouse. Devices and screen-time don't have to be the only way. Bring your students screen-free KIBO coding robots for the classroom.
              </p>
            </div>
            <div className="w-1/3 flex justify-end items-center h-full">
              <img src={BannerImage} alt="KIBO Robot in Classroom" className="max-h-[90%] w-[60%] object-contain rounded-lg shadow-lg" />
            </div>
          </div>
        </div>

        {/* Content Section - Similar to WhyKibo's Core Learning Areas */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Box 1: Students */}
            <div className="relative rounded-lg overflow-hidden p-8 text-white" style={{ backgroundImage: `url(${StudentsBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="relative text-center">
                <h3 className="text-2xl font-bold mb-4">Students</h3>
                <p className="text-sm leading-relaxed">Students gravitate to KIBO for new adventures every day. With learning enhanced by play and creativity, using KIBO fosters imagination, ingenuity, and independence. Your students walk away with so more than just coding basics. KIBO shapes a child into who they will become.</p>
              </div>
            </div>

            {/* Box 2: Educators */}
            <div className="relative rounded-lg overflow-hidden p-8 text-white" style={{ backgroundImage: `url(${EducatorsBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="relative text-center">
                <h3 className="text-2xl font-bold mb-4">Educators</h3>
                <p className="text-sm leading-relaxed">Educators gravitate to KIBO for the infinite possibilities. Not only does it help to facilitate lesson plans with hours of standardized-aligned curriculum, but it is easy to learn and use (for the kids too!). Educators see the learning happening and connect with their students in an authentic way that sitting in front of a computer never could.</p>
              </div>
            </div>
          </div>

          {/* Easy, Effective, and Engaging Section */}
          <div className="mb-16">
            <div className="flex flex-col md:flex-row items-start gap-8 mb-8">
              <div className="md:w-1/3">
                <img src={LegoAdventureImg} alt="KIBO Lego Adventure" className="w-full max-w-xs h-48 mx-auto rounded-lg shadow-lg object-cover" />
              </div>
              <div className="md:w-2/3">
                <div className="space-y-6">
                  <div className="text-center md:text-left">
                    <h2 className="text-3xl font-bold text-kibo-purple mb-4">Easy, Effective, and Engaging</h2>
                    <p className="text-gray-600 mb-4">
                      KIBO is a fun and engaging way for students from PreK through Elementary to bring their learning to life while offering young learners with a playful opportunity to acquire computational skills, while developing problem solving skills and logic, and implementing the engineering design process.
                    </p>
                    <p className="text-gray-600 mb-4">
                      And unlike other other coding robots for the classroom or online apps, KIBO's creative platforms encourage artistic expression, communication, and hands-on learning that is critical for today's young students.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="bg-purple-200 p-6 rounded-lg min-h-[120px] flex items-center">
                 <p className="text-gray-900 text-sm leading-relaxed">
                   Learning with KIBO is synonymous with excitement, curiosity, and exploration in STEAM. KIBO coding robots for the classroom offer collaboration, computational thinking, CS learning and more!
                 </p>
               </div>
               
               <div className="bg-purple-200 p-6 rounded-lg min-h-[120px] flex items-center">
                 <p className="text-gray-900 text-sm leading-relaxed">
                   One day KIBO is helping students learn geometry and shapes, the next day it's an interactive geography lesson. Bring research backed coding robots for the classroom to your young learners to reinforce your teaching.
                 </p>
               </div>
             </div>
          </div>

        </div>
        
        {/* Classroom Photos Carousel - Full Width */}
          <div className="w-full py-0">
           <div className="w-full">
             <div className="flex gap-0 overflow-hidden">
               {getVisibleImages().map((image, index) => (
                 <div key={`${currentImageIndex}-${index}`} className="flex-1">
                   <img 
                      src={image} 
                      alt={`Classroom moment ${index + 1}`}
                      className="w-full h-50 object-cover transition-transform duration-300"
                    />
                 </div>
               ))}
             </div>
           </div>
         </div>

         {/* Two Column Info Section */}
         <div className="w-full py-16 bg-orange-50">
           <div className="container mx-auto px-4">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
               {/* Left Column - KIBO Grows with Your Students */}
                <div className="text-left">
                  <img src="/src/assets/kibo/kibointheclassroom/kibo-kids-600x338.jpg" alt="KIBO Grows with Students" className="w-full h-64 object-cover rounded-lg mb-6" />
                  <h3 className="text-2xl font-bold text-kibo-purple mb-4">KIBO Grows with Your Students</h3>
                  <p className="text-gray-600 mb-4 text-justify">
                    Teachers and administrators appreciate the longevity of KIBO coding robots for the classroom. With cumulative lesson plans, out-of-the-box and ready-to-use curricula, activities, KIBO builds on skillsets year after year.
                  </p>
                  <p className="text-gray-600 mb-6 text-justify">
                    From the very basics of coding and programming to performing repairs and loops, KIBO is more than just an investment in a child's education – it nurtures the whole child and affords individualism, social interaction, while developing their STEAM skillset.
                  </p>
                  <div className="text-center">
                    <button 
                      onClick={() => window.open('/src/assets/kibo/kibointheclassroom/KIBO-for-All-Ages-Infographic.jpg', '_blank')}
                      className="px-6 py-3 rounded-lg border border-kibo-purple text-kibo-purple hover:bg-kibo-orange hover:text-kibo-purple active:bg-kibo-orange active:text-kibo-purple transition-colors cursor-pointer"
                    >
                      View the Infographic on how KIBO Grows with Students
                    </button>
                  </div>
                </div>
                
                {/* Right Column - Integrate KIBO with Any Curriculum */}
                <div className="text-left">
                  <img src="/src/assets/kibo/kibointheclassroom/kibo-earth-600x338.jpg" alt="Integrate KIBO with Curriculum" className="w-full h-64 object-cover rounded-lg mb-6" />
                  <h3 className="text-2xl font-bold text-kibo-purple mb-4">Integrate KIBO with Any Curriculum</h3>
                  <p className="text-gray-600 mb-4 text-justify">
                    Educators have used classroom robotics kits to break down complex subject matters, inspire children to use critical thinking and their own imagination, and challenge themselves resulting in pride of their achievements.
                  </p>
                  <p className="text-gray-600 mb-6 text-justify">
                    KIBO coding robots for the classroom can be integrated into existing curriculum or classroom projects, such as literacy, social studies, science, math and art curricula. Easy to implement lesson plans and fun play-based activities build students' basic engineering and programming skills.
                  </p>
                  <div className="text-center">
                    <button 
                      onClick={() => window.location.href = '/kibo/use/steam-lessons-and-activities/'}
                      className="px-6 py-3 rounded-lg border border-kibo-purple text-kibo-purple hover:bg-kibo-orange hover:text-kibo-purple active:bg-kibo-orange active:text-kibo-purple transition-colors cursor-pointer"
                    >
                      Check Out Fun STEAM Lesson Plans and Ideas
                    </button>
                  </div>
                </div>
             </div>
           </div>
         </div>

         {/* Call to Action Section */}
         <div className="w-full py-12 relative overflow-hidden">
           <div className="container mx-auto px-4 text-center relative z-10">
             <div className="flex items-center justify-center mb-4">
               <h2 className="text-3xl font-bold text-gray-800">Get started today! Use coding robots for the classroom!</h2>
             </div>
           </div>
         </div>

         {/* Lesson Plans Section */}
         <div className="w-full py-12 bg-orange-50">
           <div className="container mx-auto px-4">
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               <div className="rounded-lg shadow-lg overflow-hidden">
                 <img src="/src/assets/kibo/kibointheclassroom/kibo-be5-300x300.jpg" alt="Lesson Plan 1" className="w-full h-56 object-cover" />
                 <button 
                   onClick={() => window.open('/src/assets/kibo/kibointheclassroom/KIBO-Singer-Activity.pdf', '_blank')}
                   className="w-full bg-orange-400 text-white py-3 px-6 font-semibold hover:text-kibo-purple transition-colors"
                 >
                   Download Lesson
                 </button>
               </div>
               
               <div className="rounded-lg shadow-lg overflow-hidden">
                 <img src="/src/assets/kibo/kibointheclassroom/Math-and-Estimation-Bowling-Ball-and-Pins-1.jpg" alt="Lesson Plan 2" className="w-full h-56 object-cover" />
                 <button 
                   onClick={() => window.open('/src/assets/kibo/kibointheclassroom/KIBO-Bowling.pdf', '_blank')}
                   className="w-full bg-orange-400 text-white py-3 px-6 font-semibold hover:text-kibo-purple transition-colors"
                 >
                   Download Lesson
                 </button>
               </div>
               
               <div className="rounded-lg shadow-lg overflow-hidden">
                 <img src="/src/assets/kibo/kibointheclassroom/Snowplow-scaled-300x225.jpg" alt="Lesson Plan 3" className="w-full h-56 object-cover" />
                 <button 
                   onClick={() => window.open('/src/assets/kibo/kibointheclassroom/KIBO-Singer-Activity.pdf', '_blank')}
                   className="w-full bg-orange-400 text-white py-3 px-6 font-semibold hover:text-kibo-purple transition-colors"
                 >
                   Download Lesson
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

export default KiboInTheClassroom;