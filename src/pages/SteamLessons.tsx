import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Import banner image
import BannerImage from '../assets/kibo/use/steam-lessons-and-activities/Scanning-300x280.webp';

// Import activity images
import MathNumberLineImg from '../assets/kibo/use/steam-lessons-and-activities/Number-line-600x800.jpg';
import DreamCarImg from '../assets/kibo/use/steam-lessons-and-activities/HoC-dreamcar-scaled-1-600x450.jpg';
import DropTestImg from '../assets/kibo/use/steam-lessons-and-activities/craft-and-build-4x3-1-600x450.jpeg';
import ProgramEachOtherImg from '../assets/kibo/use/steam-lessons-and-activities/kibo-says-4x3-1.jpg';
import DancePartyImg from '../assets/kibo/use/steam-lessons-and-activities/Full-KIBO-Dancer-Image-600x402.png';
import RobotBowlingImg from '../assets/kibo/use/steam-lessons-and-activities/Bowling-aftermath-600x401.jpg';
import SnowplowImg from '../assets/kibo/use/steam-lessons-and-activities/Hour-of-Code-KIBO-Snowplow-600x450.png';
import ExpressingHappinessImg from '../assets/kibo/use/steam-lessons-and-activities/Hour-of-Code-KIBO-Happiness-221x300.jpeg';
import KiboCommunityImg from '../assets/kibo/use/steam-lessons-and-activities/Community-Bus-1-600x304.jpg';
import KiboOffRoadImg from '../assets/kibo/use/steam-lessons-and-activities/Building-and-Engineering-KIBO-Olympics-1-300x183.jpg';
import KiboSnowplowCardImg from '../assets/kibo/use/steam-lessons-and-activities/kibo-snowplow-600x503.webp';
import KiboPetTrickImg from '../assets/kibo/use/steam-lessons-and-activities/pet-trick-card-300x251.png';
import KiboDreamCarImg from '../assets/kibo/use/steam-lessons-and-activities/dream-car-card-300x252.webp';
import KiboDancerImg from '../assets/kibo/use/steam-lessons-and-activities/kibo-dancer-600x503.png';
import KiboFireTruckImg from '../assets/kibo/use/steam-lessons-and-activities/fire-truck-card-300x252.png';
import KiboConcertImg from '../assets/kibo/use/steam-lessons-and-activities/concert-600x503.jpg';
import FloorMapActivitiesImg from '../assets/kibo/use/steam-lessons-and-activities/Floor-Map-1-600x588.jpg';
import KiboZooImg from '../assets/kibo/use/steam-lessons-and-activities/zoo-600x448.jpg';
import KiboBowlingImg from '../assets/kibo/use/steam-lessons-and-activities/Bowling-aftermath-600x401.jpg';

const SteamLessons: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Banner Section */}
        <div className="bg-gradient-to-r from-kibo-purple to-kibo-orange overflow-hidden">
          <div className="container mx-auto px-4 flex items-center h-64 overflow-hidden">
            <div className="w-2/3">
              <h2 className="text-3xl font-bold text-white mb-4">Teach Kids Coding with STEM Lessons & Activities</h2>
              <p className="text-white/90 mb-6">
                Welcome! There’s so many ways to use KIBO! See some example lessons, activities, activity cards, and robotics curriculum below to teach kids coding and STEM learning!
              </p>
            </div>
            <div className="w-1/3 flex justify-end items-center h-full">
              <img src={BannerImage} alt="STEAM Lessons Banner" className="max-h-[90%] w-[54%] object-contain rounded-lg shadow-lg" />
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full py-16 bg-orange-50">
          <div className="container mx-auto px-4">
            {/* Adding and Subtracting with KIBO */}
            <div className="mb-16">
              <div className="bg-kibo-orange text-white text-center py-4 mb-8 rounded-lg">
                <h2 className="text-2xl font-bold">Lessons, Activities & Robotics Curriculum</h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-kibo-orange mb-4">Adding and Subtracting with KIBO</h3>
                  <p className="text-gray-600 mb-4">
                    In this lesson, students will create a coding program to move their robots to model mathematical concepts - counting, adding, and subtracting. Students will create algorithms through programming for their math challenge and watch KIBO travel along a physical number line to solve their math problem!
                  </p>
                  <p className="text-gray-600 mb-4">
                    <strong>Bring <span className="text-gray-600">addition and subtraction to life!</span></strong> - KIBO moves forward 3 and back 1. Where is KIBO on the number line?
                  </p>
                  <a href="/src/assets/kibo/use/steam-lessons-and-activities/KIBO-Number-Line-Adv-Hour-Of-Code-2021.pdf" target="_blank" rel="noopener noreferrer" className="bg-kibo-orange text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-block hover:text-kibo-purple focus:outline-none focus:ring-0 hover:shadow-none focus:shadow-none">
                     DOWNLOAD
                   </a>
                </div>
                <div className="flex justify-center">
                  <img src={MathNumberLineImg} alt="KIBO Math Number Line" className="w-full max-w-md h-64 object-cover rounded-lg shadow-lg" />
                </div>
              </div>
              

            </div>

            {/* Create Your Dream Car with KIBO */}
            <div className="mb-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-8">
                <div className="flex justify-center">
                  <img src={DreamCarImg} alt="Dream Car Activity" className="w-full max-w-md h-64 object-cover rounded-lg shadow-lg" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-kibo-orange mb-4">Create Your Dream Car with KIBO</h3>
                  <p className="text-gray-600 mb-4">
                    Inspired by the book <em>If I Built a Car</em> by Chris Van Dusen, students will become engineers and follow the engineering design process to create their own "dream cars" out of craft and recycled materials. They will scan a short programming sequence to get their cars moving!
                  </p>
                  <p className="text-gray-600 mb-4">
                    <strong><span className="text-gray-600">Design and build your Dream Car with KIBO!</span></strong> - Vroom! Vroom!
                  </p>
                  <a href="/src/assets/kibo/use/steam-lessons-and-activities/KIBO-Dream-Car-Intro-Hour-Of-Code-2021.pdf" target="_blank" rel="noopener noreferrer" className="bg-kibo-orange text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-block hover:text-kibo-purple focus:outline-none focus:ring-0 hover:shadow-none focus:shadow-none">
                      DOWNLOAD
                    </a>
                </div>
              </div>
              

            </div>

            {/* KIBO Craft and Build Drop Test */}
            <div className="mb-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-kibo-orange mb-4">KIBO Craft and Build Drop Test</h3>
                  <p className="text-gray-600 mb-4">
                    Engineering is about persistence and grit. Today the students will become engineers, learning the steps of the Engineering Design Process. They will create models out of craft and recycled materials, then they will test the sturdiness of their models by dropping them from ankle height. If the models don't survive, the students can follow the engineering design process to revise their designs. Finally, they can attach their sturdy constructions to KIBO to make them move.
                  </p>
                  <p className="text-gray-600 mb-4">
                    <strong><span className="text-gray-600">Engineers keep trying!</span></strong> - Let's be engineers. We will test and improve our creations until they survive a fall!
                  </p>
                  <a href="/src/assets/kibo/use/steam-lessons-and-activities/KIBO-Craft-and-Build-Drop-Test-Hour-Of-Code-2020.pdf" target="_blank" rel="noopener noreferrer" className="bg-kibo-orange text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-block hover:text-kibo-purple focus:outline-none focus:ring-0 hover:shadow-none focus:shadow-none">
                      DOWNLOAD
                     </a>
                </div>
                <div className="flex justify-center">
                  <img src={DropTestImg} alt="Drop Test Activity" className="w-full max-w-md h-64 object-cover rounded-lg shadow-lg" />
                </div>
              </div>
              

             </div>

             {/* Let's Program Each Other */}
             <div className="mb-16">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-8">
                 <div className="flex justify-center">
                   <img src={ProgramEachOtherImg} alt="Program Each Other Activity" className="w-full max-w-md h-64 object-cover rounded-lg shadow-lg" />
                 </div>
                 <div>
                   <h3 className="text-2xl font-bold text-kibo-orange mb-4">Let's Program Each Other!</h3>
                   <p className="text-gray-600 mb-4">
                     We can use programming to communicate, share, and tell stories. In this lesson, children will learn about sequencing in programming and about the symbols that make up a programming language like KIBO's. Students will create their own programming symbols and act out programs with their own movement. Finally, they can translate these movement programs into programs for KIBO.
                   </p>
                   <p className="text-gray-600 mb-4">
                     <strong><span className="text-gray-600">A program is a story!</span></strong> - Let's be programmers and robots! In this robotics curriculum, learn how to create a sequence of instructions that your friends can follow.
                   </p>
                   <a href="/src/assets/kibo/use/steam-lessons-and-activities/KIBO-Lets-Program-Each-Other-Hour-Of-Code-2020.pdf" target="_blank" rel="noopener noreferrer" className="bg-kibo-orange text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-block hover:text-kibo-purple focus:outline-none focus:ring-0 hover:shadow-none focus:shadow-none">
                      DOWNLOAD
                     </a>
                 </div>
               </div>
               

             </div>

             {/* Teach Your KIBO Robot to Dance */}
             <div className="mb-16">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-8">
                 <div>
                   <h3 className="text-2xl font-bold text-kibo-orange mb-4">Teach Your KIBO Robot to Dance!</h3>
                   <p className="text-gray-600 mb-4">
                     Let's have a KIBO Robot dance party! Set up a music player to play a favorite classroom song, or a song connected to a world culture you're exploring. Students will decorate their KIBO as a dancer, then they will create a program for KIBO to dance to the music. Students will learn how to create a program to express an idea (in this case, a dance), with a focus on sequencing ability.
                   </p>
                   <p className="text-gray-600 mb-4">
                     <strong><span className="text-gray-600">Create your own Dance Party Today!</span></strong> - When studying a cultural studies unit, students will deepen their understanding of the music and customs of the chosen culture. Let's get moving and shaking!
                   </p>
                   <a href="/src/assets/kibo/use/steam-lessons-and-activities/KIBO-Dance-Party.pdf" target="_blank" rel="noopener noreferrer" className="bg-kibo-orange text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-block hover:text-kibo-purple focus:outline-none focus:ring-0 hover:shadow-none focus:shadow-none">
                       DOWNLOAD
                     </a>
                 </div>
                 <div className="flex justify-center">
                   <img src={DancePartyImg} alt="KIBO Dance Party" className="w-full max-w-md h-64 object-cover rounded-lg shadow-lg" />
                 </div>
               </div>
               

             </div>

             {/* Measure and Predict with KIBO Robot Bowling */}
             <div className="mb-16">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-8">
                 <div className="flex justify-center">
                   <img src={RobotBowlingImg} alt="KIBO Robot Bowling" className="w-full max-w-md h-64 object-cover rounded-lg shadow-lg" />
                 </div>
                 <div>
                   <h3 className="text-2xl font-bold text-kibo-orange mb-4">Measure and Predict with KIBO Robot Bowling</h3>
                   <p className="text-gray-600 mb-4">
                     Crash! How far does KIBO have to move to get from the start of the bowling lane to the pins? You can create a single straight lane or a more complicated path. Students will use estimation and measurement to create a program to travel the length of the lane. They'll test how far a single forward block carries KIBO, then improve their programs using the Engineering Design Process.
                   </p>
                   <p className="text-gray-600 mb-4">
                     <strong><span className="text-gray-600">Who can knock their pins down the fastest?</span></strong> - Use KIBO to teach kids coding by creating a program to travel the length of the lane. Let's get bowling!
                   </p>
                    <a href="/src/assets/kibo/use/steam-lessons-and-activities/KIBO-Bowling.pdf" target="_blank" rel="noopener noreferrer" className="bg-kibo-orange text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-block hover:text-kibo-purple focus:outline-none focus:ring-0 hover:shadow-none focus:shadow-none">
                      DOWNLOAD
                     </a>
                 </div>
               </div>
               

             </div>

             {/* The KIBO Snowplow */}
             <div className="mb-16">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-8">
                 <div>
                   <h3 className="text-2xl font-bold text-kibo-orange mb-4">The KIBO Snowplow</h3>
                   <p className="text-gray-600 mb-4">
                     The city is covered in snow and we need to design a KIBO snowplow to help clean up! Students will engage in the engineering design process as they design, test, and improve snowplow robots that can help clean up the cotton-ball snow. Students will also learn more about the many important jobs that make a community function.
                   </p>
                   <p className="text-gray-600 mb-4">
                     <strong><span className="text-gray-600">Who can help clean up the town?</span></strong> Design a snowplow for KIBO, then give it a program to clean our streets of snow!
                   </p>
                    <a href="/src/assets/kibo/use/steam-lessons-and-activities/KIBO-Snowplow-Hour-Of-Code-2019.pdf" target="_blank" rel="noopener noreferrer" className="bg-kibo-orange text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-block hover:text-kibo-purple focus:outline-none focus:ring-0 hover:shadow-none focus:shadow-none">
                       DOWNLOAD
                      </a>
                 </div>
                 <div className="flex justify-center">
                   <img src={SnowplowImg} alt="KIBO Snowplow" className="w-full max-w-md h-64 object-cover rounded-lg shadow-lg" />
                 </div>
               </div>
               
               
             </div>

             {/* Expressing Happiness with KIBO */}
             <div className="mb-16">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-8">
                 <div className="flex justify-center">
                   <img src={ExpressingHappinessImg} alt="Expressing Happiness with KIBO" className="w-full max-w-md h-64 object-cover rounded-lg shadow-lg" />
                 </div>
                 <div>
                   <h3 className="text-2xl font-bold text-kibo-orange mb-4">Expressing Happiness with KIBO</h3>
                   <p className="text-gray-600 mb-4">
                     "If you're happy and you know it flash your light!" In this robotics lesson that also engages with music and social-emotional learning, students collaboratively create a program for KIBO including both input and output that expresses a feeling of happiness. Students learn that robots have output parts that allow them to put information out into the world.
                   </p>
                   <p className="text-gray-600 mb-4">
                     <strong><span className="text-gray-600">Let's dance with our KIBO!</span></strong> - Design a program with KIBO's output parts — like the light bulb — to show how happy you are!
                   </p>
                   <a href="/src/assets/kibo/use/steam-lessons-and-activities/KIBO-Snowplow-Hour-Of-Code-2019.pdf" target="_blank" rel="noopener noreferrer" className="bg-kibo-orange text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-block hover:text-kibo-purple focus:outline-none focus:ring-0 hover:shadow-none focus:shadow-none">
                     DOWNLOAD
                    </a>
                 </div>
               </div>
               

             </div>

             {/* KIBO Community */}
             <div className="mb-16">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-8">
                 <div>
                   <h3 className="text-2xl font-bold text-kibo-orange mb-4">KIBO Community</h3>
                   <p className="text-gray-600 mb-4">
                     Using a playmat, children can create their own map, turn their KIBO into a 'car' or 'bus' and make their way from one part of the community to another. Early learners begin to understand how their lives relate to a larger community and a larger world. Where will your KIBO go?
                   </p>
                   <p className="text-gray-600 mb-4">
                     <strong><span className="text-gray-600">What makes a community?</span></strong> - In this lesson, students will explore what makes a community and program KIBO to move around their community.
                   </p>
                   <a href="/src/assets/kibo/use/steam-lessons-and-activities/Our-Community-Our-World.pdf" target="_blank" rel="noopener noreferrer" className="bg-kibo-orange text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-block hover:text-kibo-purple focus:outline-none focus:ring-0 hover:shadow-none focus:shadow-none">
                         DOWNLOAD
                       </a>
                 </div>
                 <div className="flex justify-center">
                   <img src={KiboCommunityImg} alt="KIBO Community" className="w-full max-w-md h-64 object-cover rounded-lg shadow-lg" />
                 </div>
               </div>
               

             </div>

             {/* KIBO Off-Road */}
             <div className="mb-16">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-8">
                 <div className="flex justify-center">
                   <img src={KiboOffRoadImg} alt="KIBO Off-Road" className="w-full max-w-md h-64 object-cover rounded-lg shadow-lg" />
                 </div>
                 <div>
                   <h3 className="text-2xl font-bold text-kibo-orange mb-4">KIBO Off-Road</h3>
                   <p className="text-gray-600 mb-4">
                     KIBO can be turned into an off-road vehicle! Young kids can even create their own off-road course and see how their KIBO Off-road vehicle can maneuver around the course! What if KIBO could explore these ups and downs too? How can we build slopes and how do slopes change KIBO's movement? What type of off-road course can you create?
                   </p>
                   <p className="text-gray-600 mb-4">
                     <strong><span className="text-gray-600">Can KIBO go off-road?</span></strong> - In this lesson, students will explore different terrains and program KIBO to navigate through various obstacles.
                   </p>
                   <a href="/src/assets/kibo/use/steam-lessons-and-activities/KIBO-Olympics.pdf" target="_blank" rel="noopener noreferrer" className="bg-kibo-orange text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-block hover:text-kibo-purple focus:outline-none focus:ring-0 hover:shadow-none focus:shadow-none">
                      DOWNLOAD
                     </a>
                 </div>
               </div>
               

             </div>

             {/* KIBO Activity Cards Section */}
             <div className="mb-16">
               <div className="bg-kibo-purple text-white text-center py-4 mb-8 rounded-lg">
                 <h2 className="text-2xl font-bold">KIBO Activity Cards</h2>
               </div>

               {/* KIBO Snowplow Card */}
               <div className="mb-12">
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-8">
                   <div>
                     <h3 className="text-2xl font-bold text-kibo-purple mb-4">KIBO Snowplow</h3>
                     <p className="text-gray-600 mb-4">
                       The city is covered in snow, and KIBO will help clean up! We will build, test, and improve a KIBO snowplow using the Engineering Design Process.
                     </p>
                     <p className="text-gray-600 mb-4">
                       This is a free sample activity from the popular KIBO Activity Cards. These cards provide 15 creative KIBO activities with big, colorful images and easy-to-follow instructions, for hours of student engagement or fun at home with KIBO.
                     </p>
                     <p className="text-gray-600 mb-4">
                       The cards can be used independently by students in a classroom activity station, as the basis for teacher-guided lessons in math, science, art, and social learning, or with KIBO at home. Each card invites children into a different creative, imaginative activity with KIBO that combines coding, building, art, and play.
                     </p>
                     <a href="/src/assets/kibo/use/steam-lessons-and-activities/Activity-Card-5-Snowplow.pdf" download className="bg-kibo-purple text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-block hover:text-kibo-orange focus:outline-none focus:ring-0 hover:shadow-none focus:shadow-none">
                        DOWNLOAD
                      </a>
                   </div>
                   <div className="flex justify-center">
                     <img src={KiboSnowplowCardImg} alt="KIBO Snowplow Activity Card" className="w-full max-w-md h-64 object-cover rounded-lg shadow-lg" />
                   </div>
                 </div>
                 

               </div>

               {/* KIBO Pet Trick */}
               <div className="mb-12">
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-8">
                   <div className="flex justify-center">
                     <img src={KiboPetTrickImg} alt="KIBO Pet Trick" className="w-full max-w-md h-64 object-cover rounded-lg shadow-lg" />
                   </div>
                   <div>
                     <h3 className="text-2xl font-bold text-kibo-purple mb-4">KIBO Pet Trick</h3>
                     <p className="text-gray-600 mb-4">
                       Add the sound sensor to KIBO and your robot can respond to the environment, the same way animals use their senses.
                     </p>
                     <p className="text-gray-600 mb-4">
                       Decorate KIBO as a pet and teach it to perform a trick when you clap!
                     </p>
                     <a href="/src/assets/kibo/use/steam-lessons-and-activities/KIBO-Activity-Pet-Trick.pdf" download className="bg-kibo-purple text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-block hover:text-kibo-orange focus:outline-none focus:ring-0 hover:shadow-none focus:shadow-none">
                        DOWNLOAD
                      </a>
                   </div>
                 </div>
                 

               </div>

               {/* KIBO Dream Car */}
               <div className="mb-12">
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-8">
                   <div>
                     <h3 className="text-2xl font-bold text-kibo-purple mb-4">KIBO Dream Car</h3>
                     <p className="text-gray-600 mb-4">
                       Attach KIBO's wheels and motors and create a simple program with KIBO's wooden programming blocks. Get some inspiration and create your "dream car."
                     </p>
                     <p className="text-gray-600 mb-4">
                       Scan your program, press KIBO's "go" button and watch KIBO go!
                     </p>
                     <a href="/src/assets/kibo/use/steam-lessons-and-activities/KIBO-Activity-Dream-Car.pdf" download className="bg-kibo-purple text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-block hover:text-kibo-orange focus:outline-none focus:ring-0 hover:shadow-none focus:shadow-none">
                        DOWNLOAD
                      </a>
                   </div>
                   <div className="flex justify-center">
                     <img src={KiboDreamCarImg} alt="KIBO Dream Car" className="w-full max-w-md h-64 object-cover rounded-lg shadow-lg" />
                   </div>
                 </div>
                 

               </div>

               {/* KIBO Dancer */}
               <div className="mb-12">
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-8">
                   <div className="flex justify-center">
                     <img src={KiboDancerImg} alt="KIBO Dancer" className="w-full max-w-md h-64 object-cover rounded-lg shadow-lg" />
                   </div>
                   <div>
                     <h3 className="text-2xl font-bold text-kibo-purple mb-4">KIBO Dancer</h3>
                     <p className="text-gray-600 mb-4">
                       Introduce your students to creating a dancer and attach the creation to KIBO. Decide on what type of dancer will perform and what costume your dancer will wear. Now develop a coding sequence with KIBO's wooden programming blocks to perform a dance routine.
                     </p>
                     <p className="text-gray-600 mb-4">
                       KIBO can repeat a pattern of blocks over and over with a repeat loop programming blocks to perform a repeating dance routine!
                     </p>
                     <a href="/src/assets/kibo/use/steam-lessons-and-activities/Activity-Card-6-Dancer.pdf" target="_blank" rel="noopener noreferrer" className="bg-kibo-purple text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-block hover:text-kibo-orange focus:outline-none focus:ring-0 hover:shadow-none focus:shadow-none">
                        DOWNLOAD
                      </a>
                   </div>
                 </div>
                 

               </div>

               {/* KIBO Fire Truck */}
               <div className="mb-12">
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-8">
                   <div>
                     <h3 className="text-2xl font-bold text-kibo-purple mb-4">KIBO Fire Truck</h3>
                     <p className="text-gray-600 mb-4">
                       Clang, clang, clang! We need the KIBO fire truck to help put out a fire.
                     </p>
                     <p className="text-gray-600 mb-4">
                       Design your fire truck, attach it to KIBO and create a unique programming sequence for your firetruck to get to the fire to help out the community. Put on the flashing lights lightbulb output sensor and drive!
                     </p>
                     <a href="/src/assets/kibo/use/steam-lessons-and-activities/Activity-Card-7-Fire-Truck.pdf" target="_blank" rel="noopener noreferrer" className="bg-kibo-purple text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-block hover:text-kibo-orange focus:outline-none focus:ring-0 hover:shadow-none focus:shadow-none">
                       DOWNLOAD
                      </a>
                   </div>
                   <div className="flex justify-center">
                     <img src={KiboFireTruckImg} alt="KIBO Fire Truck" className="w-full max-w-md h-64 object-cover rounded-lg shadow-lg" />
                   </div>
                 </div>
                 

               </div>

               {/* KIBO Concert */}
               <div className="mb-12">
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-8">
                   <div className="flex justify-center">
                     <img src={KiboConcertImg} alt="KIBO Concert" className="w-full max-w-md h-64 object-cover rounded-lg shadow-lg" />
                   </div>
                   <div>
                     <h3 className="text-2xl font-bold text-kibo-purple mb-4">KIBO Concert</h3>
                     <p className="text-gray-600 mb-4">
                       This open ended activity turns KIBO into a singer and dancer! Choose your favorite song, dress KIBO up and record yourself singing a tune using KIBO's sound record and playback module.
                     </p>
                     <p className="text-gray-600 mb-4">
                       Add a light show with KIBO's lightbulb to create a fun performance!
                     </p>
                     <a href="/src/assets/kibo/use/steam-lessons-and-activities/KIBO-Activity-Concert-Performer.pdf" target="_blank" rel="noopener noreferrer" className="bg-kibo-purple text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-block hover:text-kibo-orange focus:outline-none focus:ring-0 hover:shadow-none focus:shadow-none">
                       DOWNLOAD
                      </a>
                   </div>
                 </div>
                 

               </div>
             </div>

             {/* Teach Kids Coding with STEM Curriculum Section */}
             <div className="mb-16">
               <div className="bg-kibo-orange text-white text-center py-4 mb-8 rounded-lg">
                 <h2 className="text-2xl font-bold">Teach Kids Coding with STEM Curriculum</h2>
               </div>

               {/* Maps, Measurement, and Make-Believe */}
               <div className="mb-12">
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-8">
                   <div>
                     <h3 className="text-2xl font-bold text-kibo-orange mb-4">Maps, Measurement, and Make-Believe – An Introduction to Floor-Map Activities</h3>
                     <p className="text-gray-600 mb-4">
                       The "guide offers 8 activities using floor maps to address learning standards in math, literacy, science, social studies, and design work. Let your kids go KIBO! Floor map activities get young kids moving and collaborating in physical space – enhancing the strengths of using KIBO and robotics curriculum in the classroom.
                     </p>
                     <a href="/src/assets/kibo/use/steam-lessons-and-activities/Maps-Measurement-and-Make-Believe.pdf" target="_blank" rel="noopener noreferrer" className="bg-kibo-orange text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-block hover:text-kibo-purple focus:outline-none focus:ring-0 hover:shadow-none focus:shadow-none">
                        DOWNLOAD
                      </a>
                   </div>
                   <div className="flex justify-center">
                     <img src={FloorMapActivitiesImg} alt="Floor Map Activities" className="w-full max-w-md h-64 object-cover rounded-lg shadow-lg" />
                   </div>
                 </div>
                 

               </div>

               {/* KIBO Zoo */}
               <div className="mb-12">
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-8">
                   <div className="flex justify-center">
                     <img src={KiboZooImg} alt="KIBO Zoo" className="w-full max-w-md h-64 object-cover rounded-lg shadow-lg" />
                   </div>
                   <div>
                     <h3 className="text-2xl font-bold text-kibo-orange mb-4">KIBO Zoo</h3>
                     <p className="text-gray-600 mb-4">
                       What zoo animal can the kids create? Have they just been to the zoo and want to learn more about their favorite animal? KIBO can be decorated as a zoo animal the child is learning about or is interested in, they can create their "habitat" and program their KIBO to act as that animal in this STEAM activity. What is your favorite animal?
                     </p>
                     <a href="/src/assets/kibo/use/steam-lessons-and-activities/The-KIBO-Zoo-KinderLab-Robotics.pdf" target="_blank" rel="noopener noreferrer" className="bg-kibo-orange text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-block hover:text-kibo-purple focus:outline-none focus:ring-0 hover:shadow-none focus:shadow-none">
                        DOWNLOAD
                      </a>
                   </div>
                 </div>
                 

               </div>
               {/* KIBO Bowling */}
             </div>
           </div>
         </div>
      </main>
      <Footer />
    </div>
  );
};

export default SteamLessons;