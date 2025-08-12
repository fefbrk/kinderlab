import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Wrench, Battery, Zap, HelpCircle, Wrench as WrenchIcon, Phone } from 'lucide-react';
import motorImg from '../assets/resources/tech-sup/KIBO-motor-green-dot-visible-600x470.jpg';
import batteriesImg from '../assets/resources/tech-sup/win-07-battery.webp';
import teacherStudentImg from '../assets/resources/tech-sup/Teacher-and-Student.webp';

const TechnicalSupport: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-orange-50">
      <Header />

      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-kibo-purple to-kibo-orange overflow-hidden">
        <div className="container mx-auto px-4 flex items-center justify-center h-64">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">
              Coding Robots Repair & Technical Support
            </h1>
            <p className="text-white/90 mb-6 text-lg max-w-4xl">
              We know that we all get a bit tired here and there, and so does KIBO! We are pleased to offer our customers coding robots repair and technical support!
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow bg-orange-50">
        <div className="container mx-auto px-4 py-12">
          
          {/* Motors & Wheels Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-kibo-purple mb-8">Motors & Wheels</h2>
            
            <div className="bg-purple-100 rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-semibold text-kibo-purple mb-4">
                "KIBO is going in the wrong direction!"
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                
                  <p className="text-gray-700 mb-4">
                    We sometimes hear that KIBO is going in the wrong direction (e.g., the command is to go forward, and KIBO is going backward or turning right or left).
                  </p>
                  
                  <p className="text-gray-700">
                    There is one simple thing to check first. Turn KIBO upside down. Are both of the two Motor Modules' green dots showing through KIBO's transparent bottom? If not, that could explain why KIBO is acting opposite of its commands. Simply pull the Motor Module out, turn it over, and re-insert it so the green dot is visible through KIBO's transparent bottom.
                  </p>
                </div>
                
                <div className="flex justify-center">
                  <img 
                    src={motorImg} 
                    alt="KIBO motor with green dot visible" 
                    className="rounded-lg shadow-lg w-64 h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Batteries Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-kibo-purple mb-8">Batteries</h2>
            
            <div className="bg-purple-100 rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-semibold text-kibo-purple mb-4">
                "KIBO is just not working!"
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                
                  <p className="text-gray-700 mb-4">
                    Batteries will eventually lose their charge after some time; how much time will depend on how often you're using your KIBO, and what kinds of programs KIBO is running (programs with a lot of motion will use up batteries more quickly). We've found that a fresh set of batteries generally last for one to two month of normal classroom use.
                  </p>
                  
                  <p className="text-gray-700">
                    If the red scanner light is not blinking, the first thing to try is to remove and replace one battery. This may bring KIBO back to life. If not, the batteries may need to be replaced. We recommend Duracell AA alkaline batteries.
                  </p>
                </div>
                
                <div className="flex justify-center">
                  <img 
                    src={batteriesImg} 
                    alt="KIBO batteries" 
                    className="rounded-lg shadow-lg w-64 h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Scanning & Programming Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-kibo-purple mb-8">Scanning & Programming</h2>
            
            <div className="bg-purple-100 rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-semibold text-kibo-purple mb-4">
                "KIBO won't scan!"
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                
                  <p className="text-gray-700 mb-4">
                    First, make sure the red scanner light on the front of KIBO is flashing steadily. If not, tap the green triangle button on KIBO's top.
                  </p>
                  
                  <p className="text-gray-700 mb-4">
                    To scan, hold KIBO 2-4 inches (5-10 cm) away from the programming block. Shine the red scanner light onto the bar code. It's ok if the scanner light is "bigger" than the bar code. If KIBO won't scan, try changing KIBO's position slightly. Move it a little closer or farther away from the block and try changing the angle a little bit. If there is lots of overhead lighting, try moving to a slightly darker location, or try scanning from the side, instead of the top.
                  </p>
                  
                  <p className="text-gray-700 mb-4">
                    A few years ago we upgraded our programming block stickers and parameters with an improved bar code "language" with a larger bar code area than the old stickers. As a result of these changes, scanning a KIBO program is significantly easier, faster and more responsive when using these new stickers, which we know students (and their adults) will enjoy!
                  </p>
                  
                  <p className="text-gray-700">
                    If you are still having difficulty with scanning, please email <a href="mailto:support@kinderlabrobotics.com" className="text-kibo-purple underline hover:text-kibo-orange transition-colors">support@kinderlabrobotics.com</a> and we can help answer your scanning questions.
                  </p>
                </div>
                
                <div className="flex justify-center">
                  <img 
                    src={teacherStudentImg} 
                    alt="Teacher and student using KIBO" 
                    className="rounded-lg shadow-lg w-64 h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Cleaning Protocol Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-kibo-purple mb-8">Cleaning Protocol</h2>
            
            <div className="bg-purple-100 rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-semibold text-kibo-purple mb-4">
                Recommended cleaning protocol to sanitize your KIBO and its parts
              </h3>
              
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-kibo-orange mr-2">•</span>
                  Create a 2% bleach solution (4 teaspoons bleach per quart of water, or 5 tablespoons (1/3 cup) bleach per gallon of water).
                </li>
                <li className="flex items-start">
                  <span className="text-kibo-orange mr-2">•</span>
                  Wet a soft cloth with the bleach solution.
                </li>
                <li className="flex items-start">
                  <span className="text-kibo-orange mr-2">•</span>
                  Rub the outside of the KIBO robot and all component parts (blocks, modules, white boards, art stages, etc.) with the wet cloth.
                </li>
                <li className="flex items-start">
                  <span className="text-kibo-orange mr-2">•</span>
                  Allow to air dry. Do not rinse off.
                </li>
              </ul>
              
              <div className="bg-orange-50 border-l-4 border-purple-400 p-4">
                <p className="text-sm text-gray-700">
                  <strong>Note:</strong> Do not immerse your KIBO or parts in water or any liquid solution. Use unexpired household bleach at the recommended concentration.
                </p>
              </div>
            </div>
          </div>

          {/* Our Warranty Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-kibo-purple mb-8">Our Warranty</h2>
            
            <div className="bg-purple-100 rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-semibold text-kibo-purple mb-4">
                "What is your warranty?"
              </h3>
              
              <p className="text-gray-700">
                We offer a 6 month warranty on the KIBO robot and its parts. We test every robot and component before it leaves our factory, but sometimes issues do arise. If you are unsatisfied in any way, please contact support@kinderlabrobotics.com for assistance or any questions you may have.
              </p>
            </div>
          </div>

          {/* KIBO Fix-It Shop Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-kibo-purple mb-8">KIBO Fix-It Shop</h2>
            
            <div className="bg-purple-100 rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-semibold text-kibo-purple mb-4">
                "Can I send KIBO in for repair?"
              </h3>
              
              <p className="text-gray-700">
                Yes! Sometimes KIBO needs to come back to the shop to get going again. We charge a flat fee of $86 (including one-way shipping back to you for domestic orders) for this service if your 6 month warranty has expired. Please email support@kinderlabrobotics.com and describe the problem you're having. We might be able to help you without having to go through the coding robots repair process. If you do send your robot back to us, we will evaluate it and determine whether it can be repaired. If so we will repair it; if not, we will replace it.
              </p>
            </div>
          </div>

          {/* Help Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-kibo-purple mb-8">Help</h2>
            
            <div className="bg-purple-100 rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-semibold text-kibo-purple mb-4">
                "I need more information. Can someone help?"
              </h3>
              
              <p className="text-gray-700 mb-6">
                We are here to help! Email support@kinderlabrobotics.com or call 781-894-4022.
              </p>
              
              <h4 className="font-semibold text-gray-800 mb-4">Other ways we can help:</h4>
              
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-kibo-orange mr-2">•</span>
                  Should you need to update your firmware, you will need a USB A-to-B cable to do this.
                </li>
                <li className="flex items-start">
                  <span className="text-kibo-orange mr-2">•</span>
                  If you have lost track of the Quick Start Guide that was shipped with your KIBO, you can request a copy.
                </li>
              </ul>
            </div>
          </div>

          {/* Regulatory Information Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-kibo-purple mb-8">Regulatory Information</h2>
            
            <div className="bg-purple-100 rounded-lg shadow-lg p-8">
              <p className="text-gray-700 mb-6">
                For batch / lot manufacturing information, please contact us at support@kinderlabrobotics.com or call 781-894-4022 with your KIBO's serial number. The serial number can be found on the sticker on the inside cover of KIBO's battery case.
              </p>
              
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-kibo-orange mr-2">•</span>
                  Download KIBO's <a href="/KinderLab-KIBO-CPC-20211012.pdf" className="text-kibo-purple underline hover:text-kibo-orange transition-colors" target="_blank" rel="noopener noreferrer">Children's Product Certificate</a>
                </li>
                <li className="flex items-start">
                  <span className="text-kibo-orange mr-2">•</span>
                  Download KIBO's <a href="/KinderLab-KIBO-Model-P7102-EU-Declaration-of-Conformity.pdf" className="text-kibo-purple underline hover:text-kibo-orange transition-colors" target="_blank" rel="noopener noreferrer">EU Declaration of Conformity</a> (for KIBO Robot Kits bearing the CE mark).
                </li>
              </ul>
            </div>
          </div>
          
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TechnicalSupport;