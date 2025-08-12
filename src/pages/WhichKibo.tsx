import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import KiboPhoto from '../assets/kibo/whichkibo/kibo-cutout-299x240.webp';
import TeachersWorkingTogetherImg from '../assets/kibo/whichkibo/Teachers-working-together-scaled-600x451.jpg';
import PreschoolGirlProgramsImg from '../assets/kibo/whichkibo/Preschool-Girl-Programs-KIBO-225x300.jpg';
import KinderlabHomeBgImg from '../assets/kibo/whichkibo/kinderlab-home-bg-mobile-600x450.jpg';

const WhichKibo = () => {
  const [currentTarget, setCurrentTarget] = useState(0);
  
  const targets = [
    'Everyone',
    'Educators', 
    'Administrators',
    'Parents',
    'Homeschoolers',
    'Clubs',
    'Organizations'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTarget((prev) => (prev + 1) % targets.length);
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, [targets.length]);

  return (
    <div className="flex flex-col min-h-screen bg-orange-50">
      <Header />
      <main className="flex-grow">
        {/* --- Which KIBO Banner Section --- */}
        <div className="bg-gradient-to-r from-kibo-purple to-kibo-orange overflow-hidden">
          <div className="container mx-auto px-4 flex items-center h-64 overflow-hidden">
            <div className="w-2/3">
              <h2 className="text-3xl font-bold text-white mb-4">Which KIBO Coding Robot is Best?</h2>
              <p className="text-white/90 mb-6">
                KIBO is right for anyone who wants to incorporate the element of fun into learning to code and grasping new concepts – all in a hands-on experimental way. But which educational coding robot kit is right for you?
              </p>
            </div>
            <div className="w-1/3 flex justify-end items-center h-full">
              <img src={KiboPhoto} alt="KIBO Robot" className="max-h-[80%] w-auto object-contain" />
            </div>
          </div>
        </div>

        {/* --- Content Section --- */}
        <div className="container mx-auto px-4 py-16">
          {/* Dynamic Target Audience Section */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-kibo-purple">
              KIBO Coding Robots Are For{' '}
              <span className="text-kibo-orange transition-all duration-500">
                {targets[currentTarget]}
              </span>
            </h2>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Link to="/help-me-choose">
              <button className="px-6 py-3 rounded-lg border border-kibo-purple text-kibo-purple hover:bg-kibo-orange hover:text-kibo-purple active:bg-kibo-orange active:text-kibo-purple transition-colors cursor-pointer">
                Help Me Choose!
              </button>
            </Link>
            <Link to="/compare-packages">
              <button className="px-6 py-3 rounded-lg border border-kibo-purple text-kibo-purple hover:bg-kibo-orange hover:text-kibo-purple active:bg-kibo-orange active:text-kibo-purple transition-colors cursor-pointer">
                Compare Classroom Packages
              </button>
            </Link>
            <Link to="/compare-kits">
              <button className="px-6 py-3 rounded-lg border border-kibo-purple text-kibo-purple hover:bg-kibo-orange hover:text-kibo-purple active:bg-kibo-orange active:text-kibo-purple transition-colors cursor-pointer">
                Compare KIBO Kits
              </button>
            </Link>
          </div>

          {/* Content Section */}
          <div className="w-full py-16 bg-orange-50">
            <div className="container mx-auto px-4">
              {/* Educators & Administrators */}
              <div className="mb-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-8">
                  <div>
                    <h3 className="text-2xl font-bold text-orange-500 mb-4">Educators & Administrators Love KIBO Robot Kits</h3>
                    <p className="text-gray-600 mb-4">
                      Educators easily incorporate the KIBO coding robot for kids into their classroom, makerspace or afterschool programs. With KIBO, young students engage and connect with STEAM concepts in a hands-on creative way. And KIBO is fun and easy to use for both the student and their educator!
                    </p>
                    <p className="text-gray-600 mb-4">
                      From a single coding robot to discounted classroom packages offering multiple KIBO bots, fun add-ons and extension sets, curricula, and professional development, KinderLab gives schools and districts many ways to bring KIBO to their students.
                    </p>
                    <div className="flex justify-center mt-4">
                      <Link to="/kibo/in-the-classroom/">
                        <Button className="bg-orange-400 text-white hover:text-kibo-purple px-8 py-3 rounded-lg font-semibold transition-colors hover:bg-orange-400 focus:bg-orange-400 active:bg-orange-400">
                          Learn More About KIBO in the Classroom
                        </Button>
                      </Link>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <img src={TeachersWorkingTogetherImg} alt="Teachers working together" className="w-full max-w-md h-64 object-cover rounded-lg shadow-lg" />
                  </div>
                </div>
              </div>

              {/* Parents & Homeschoolers */}
              <div className="mb-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-8">
                  <div className="flex justify-center">
                    <img src={PreschoolGirlProgramsImg} alt="Preschool Girl Programs KIBO" className="w-full max-w-md h-64 object-cover rounded-lg shadow-lg" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-orange-500 mb-4">Parents & Homeschoolers</h3>
                    <p className="text-gray-600 mb-4">
                      Welcoming the KIBO coding robot into your home or homeschool does much more than just provide hours of innovative play. Screen-free robotics teach your children to love STEAM without connecting to the internet – allowing them to their own devices. Creativity comes alive and innovation soars with an educational robot.
                    </p>
                    <p className="text-gray-600 mb-4">
                      Whether you're teaching your children at home by incorporating STEAM learning, or you simply want your children to interact with more meaningful tech, KIBO coding robots fit right in. Your KIBO comes fosters creativity right out of the box. Choose extension sets to take the learning up a notch and give your kids the chance to challenge themselves further. Watch a love of programming develop with the KIBO coding robot!
                    </p>
                    <div className="flex justify-center mt-4">
                      <Link to="/kibo/at-home/">
                        <Button className="bg-orange-400 text-white hover:text-kibo-purple px-8 py-3 rounded-lg font-semibold transition-colors hover:bg-orange-400 focus:bg-orange-400 active:bg-orange-400">
                          Learn More About KIBO at Home
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Clubs & Organizations */}
              <div className="mb-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-8">
                  <div>
                    <h3 className="text-2xl font-bold text-orange-500 mb-4">Clubs & Organizations</h3>
                    <p className="text-gray-600 mb-4">
                      Clubs, museums, vacation programs, summer camps, and youth programs can't get enough of the KIBO coding robot and its interactive activities for kids. There's always something new to build, design, and code when children engage with KIBO. Whether you run a STEAM or Technology club, or simply a recreational program, KIBO is designed to appeal to a variety of personalities, interests, and ages.
                    </p>
                    <p className="text-gray-600 mb-4">
                      What's more, KIBO is one tough educational coding robot! Drops happen, especially when young children are at play. And funding for replacements is typically scarce. That's another reason why many Federally funded and nonprofit programs gravitate to KIBO. Developed with longevity in mind, KIBO is an investment in a child's future and your own organization's future offerings.
                    </p>
                    <div className="flex justify-center mt-4">
                      <Link to="/compare-kits">
                        <Button className="bg-orange-400 text-white hover:text-kibo-purple px-8 py-3 rounded-lg font-semibold transition-colors hover:bg-orange-400 focus:bg-orange-400 active:bg-orange-400">
                          Compare KIBO Options
                        </Button>
                      </Link>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <img src={KinderlabHomeBgImg} alt="KIBO in Clubs" className="w-full max-w-md h-64 object-cover rounded-lg shadow-lg" />
                  </div>
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

export default WhichKibo;