import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import KiboPhoto from '../assets/kibo/kibo-hi.png';
import MigratingWhale from '../assets/kibo/Migrating-whale-KIBO-1.png';
import fun5 from '../assets/whykibo/fun5.jpg';
import kiboBe4 from '../assets/whykibo/kibo-be4.jpg';
import kiboBe2 from '../assets/whykibo/kibo-be2.jpg';
import ProgrammableRobots from '../assets/kibo/Programmable-Robots-for-Kids.jpg';
import Storytelling from '../assets/kibo/Storytelling-Goin-on-a-Bear-Hunt-1.webp';
import kiboBe5 from '../assets/kibo/kibo-be5.jpg';
import kiboBe3 from '../assets/kibo/kibo-be3.jpg';
import BuildingCollaborating from '../assets/kibo/Building-and-Collaborating.jpg';
import kiboBe1 from '../assets/kibo/kibo-be1.jpg';
import ThreeLittlePigs from '../assets/kibo/Three-Little-Pigs-and-Wolf.webp';
import PlayfulAnimal from '../assets/kibo/KIBO-Playful-Animal-1.jpg';
import LittleRedRidingHood from '../assets/kibo/Little-Red-Riding-Hood.jpeg';
import KiboSnowplow from '../assets/kibo/KIBO-snowplow.jpg';
import KiboCarousel from '../components/KiboCarousel';

const Kibo = () => {
  return (
    <div className="flex flex-col min-h-screen bg-orange-50">
      <Header />
      <main className="flex-grow">
        {/* --- KIBO Banner Section --- */}
        <div className="bg-gradient-to-r from-kibo-purple to-kibo-orange overflow-hidden">
          <div className="container mx-auto px-4 flex items-center h-64 overflow-hidden">
            <div className="w-2/3">
              <h2 className="text-3xl font-bold text-white mb-4">Robotics Coding for Kids - Meet KIBO!</h2>
              <p className="text-white/90 mb-6">
                Build, code, create, and explore using KIBO, the hands-on (and screen-free) robotics coding kit for PreK through elementary kids. This little robot transforms from a STEM learning tool to an exciting and imaginative day of play.
              </p>
            </div>
            <div className="w-1/3 flex justify-end items-center h-full">
              <img src={KiboPhoto} alt="KIBO Robot" className="max-h-[90%] w-full object-contain rounded-[2rem]" />
            </div>
          </div>
        </div>

        {/* --- Content Section --- */}
        <div className="container mx-auto px-4 py-8">
          {/* Hi, I'm KIBO! Section */}
          <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
            <div className="md:w-1/4">
              <img src={MigratingWhale} alt="KIBO Robot" className="w-full max-w-xs mx-auto rounded-lg shadow-lg" />
            </div>
            <div className="md:w-3/4 flex items-center">
              <div className="space-y-6">
                <div className="text-center flex items-center justify-center bg-kibo-orange/30 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold text-kibo-purple mb-2"></h3>
                  <p className="text-gray-600">
                    I’m KIBO, the research-based, hands-on coding robot which introduces young learners to coding and robotics. I offer robotics coding for kids - all in a fun, screen-free and creative way.
                  </p>
                </div>
                
                <div className="text-center flex items-center justify-center bg-kibo-orange/30 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold text-kibo-purple mb-2"></h3>
                  <p className="text-gray-600">
                    With me, your young learner learns to code, breaks down complex concepts, and gains valuable STEAM skillsets while playing, laughing, drawing, talking, building, dancing…
                  </p>
                </div>
                
                <div className="text-center flex items-center justify-center bg-kibo-orange/30 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold text-kibo-purple mb-2"></h3>
                  <p className="text-gray-600">
                    I’m known as the original champion of screen-free learning that spans all subjects and brings lessons to life – that kids (and their educators and parents) love! Let’s put down those devices, use some creativity, and get hands-on with STEAM learning through robotics coding for kids.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Robotics Coding for Kids Section */}
          <div className="mb-16">
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <div className="lg:w-1/2">
                <div className="h-full">
                  <h3 className="text-3xl font-bold text-kibo-orange mb-6">
                    Robotics Coding for Kids - KIBO transforms into anything a child dreams of!
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    KIBO transforms into anything the child imagines with its art platforms — a research project on migrating whales, a re-enactment of a favorite storybook, a cultural dancer, exploring the solar system, and more!
                  </p>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="flex gap-3 justify-center">
                  <img src="/src/assets/kibo/kibo-be1.jpg" alt="KIBO Activity 1" className="w-32 h-80 object-cover rounded-lg shadow-lg" />
                  <img src="/src/assets/kibo/IMG_0953-183-scaled-1.jpg" alt="KIBO Activity 2" className="w-32 h-80 object-cover rounded-lg shadow-lg" />
                  <img src="/src/assets/kibo/Science-Space-Shuttle-and-Earth-1.jpg" alt="KIBO Activity 3" className="w-32 h-80 object-cover rounded-lg shadow-lg" />
                </div>
              </div>
            </div>
          </div>

          {/* Build. Art. Code. Play! Section */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-12">
              <span className="text-kibo-purple">Build. Art. Code. </span>
              <span className="text-kibo-orange">Play!</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-kibo-purple p-8 rounded-2xl text-center text-white">
                <h3 className="text-2xl font-bold mb-4">Research</h3>
                <p className="text-white text-sm leading-relaxed">
                  Based on 20+ years of early child development research, this hands-on educational coding robot engages young students to learn STEAM concepts through play, exploration, and creative self-expression.
                </p>
              </div>
              
              <div className="bg-kibo-purple p-8 rounded-2xl text-center text-white">
                <h3 className="text-2xl font-bold mb-4">Fun</h3>
                <p className="text-white text-sm leading-relaxed">
                  STEAM learning with KIBO robotics coding for kids is fun, imaginative and easy. Kids playfully discover STEAM concepts by coding with wooden building blocks, creating sequences, and learning the engineering design processes.
                </p>
              </div>
              
              <div className="bg-kibo-purple p-8 rounded-2xl text-center text-white">
                <h3 className="text-2xl font-bold mb-4">Effective</h3>
                <p className="text-white text-sm leading-relaxed">
                  Used in 70+ countries and tested and approved by thousands of children and their caregivers, KIBO robotics coding for kids has proven efficacy in helping elementary-aged students learn STEAM and getting them excited about it!
                </p>
              </div>
            </div>
          </div>

          {/* Question Section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              So how does a single coding robot kit do all of this?
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              It's simple really. By integrating a child's own imagination, with hands-on play, construction and creation, children code and program their KIBO to learn individual skills that lead them on the path for science, technology, engineering, art, and mathematics (STEAM) and future careers.
            </p>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto mt-4">
              <strong>Just imagine what your young learners will create with KIBO coding robots for kids!</strong>
            </p>
          </div>
        </div>
        
        {/* KIBO IS FUN Section - Full Width Orange */}
        <div className="bg-gradient-to-r from-kibo-orange to-orange-400 text-white py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <h2 className="text-5xl font-bold mb-6">What Will KIBO Become Today?</h2>
                <p className="text-xl leading-relaxed">
                  In a sea of tablets, laptops, and devices, KIBO stands out by bringing a new level of creativity to programming. By navigating away from the computer, kids physically engage with KIBO through unique activities, lesson plans, and their own imagination.
                </p>
              </div>
              <div className="lg:w-1/2">
                <KiboCarousel 
                  images={[
                    { src: fun5, alt: "KIBO Fun Activity 1" },
                    { src: kiboBe4, alt: "KIBO Fun Activity 2" },
                    { src: kiboBe2, alt: "KIBO Fun Activity 3" },
                    { src: ProgrammableRobots, alt: "KIBO Fun Activity 4" },
                    { src: Storytelling, alt: "KIBO Fun Activity 5" },
                    { src: kiboBe5, alt: "KIBO Fun Activity 6" },
                    { src: kiboBe3, alt: "KIBO Fun Activity 7" },
                    { src: BuildingCollaborating, alt: "KIBO Fun Activity 8" },
                    { src: kiboBe1, alt: "KIBO Fun Activity 9" },
                    { src: ThreeLittlePigs, alt: "KIBO Fun Activity 10" },
                    { src: PlayfulAnimal, alt: "KIBO Fun Activity 11" },
                    { src: LittleRedRidingHood, alt: "KIBO Fun Activity 12" },
                    { src: KiboSnowplow, alt: "KIBO Fun Activity 13" }
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Kibo;