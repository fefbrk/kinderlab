import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { cn } from '@/lib/utils';

// --- Image Imports ---
import KiboTopBannerImg from '../assets/shop/helpmechoose/kibo-cutout-299x240.png';
import KiboAddonImg from '../assets/shop/helpmechoose/kibo-catapult.png';
import Kibo15HomeImg from '../assets/shop/helpmechoose/KIBO-15-Home-Edition-store-image-scaled.jpg';
import Kibo10HomeImg from '../assets/shop/helpmechoose/KIBO-10-Home-Edition-Image.jpg';
import HomeRoboticsCourseImg from '../assets/shop/helpmechoose/Homeschool-Curriculum-Cover-e1658166584970.png';
import Kibo21KitImg from '../assets/shop/kibokits/KIBO-21-package.png';
import BundleOfFunImg from '../assets/shop/funextensionsets/KIBO_bundleoffun.png';
import ActivityCenter21Img from '../assets/shop/helpmechoose/KIBO-120519_9358.jpg';
import ActivityCenter18Img from '../assets/shop/helpmechoose/KIBO-18-package.jpeg';
import FullClassroom21ExplorerImg from '../assets/shop/helpmechoose/STEAM-explorer-FCP-21.png';
import SmallClassroom21ExplorerImg from '../assets/shop/helpmechoose/STEAM-explorer-SCP-21.png';
import FullClassroom18Img from '../assets/shop/helpmechoose/KIBO-18-package.jpeg';

type Step1Answer = 'home' | 'school';
type Step2Answer = 'startSmall' | 'allIn' | 'stations' | 'wholeClass';

// --- Recommendation Data ---
const recommendationData = {
  'home-startSmall': {
    recommended: {
      name: 'KIBO 15 Home Edition',
      image: Kibo15HomeImg,
      description: "Our economical Home Edition line is designed for home use, with easy to use and compact programming cards instead of our school-oriented wooden programming blocks. The KIBO 15 Home Edition is a great value, allowing your child to create expressive programs with movement, light and sound; program interactive behaviors with KIBO's “ear” sound sensor; and decorate with the arts and crafts stage and whiteboard top.",
      productId: 802 // KIBO 15 Home Edition
    },
    alsoLike: [
      { name: 'KIBO 10 Home Edition', image: Kibo10HomeImg, description: "Our lowest-cost and simplest entry point, the KIBO 10 Home Edition uses programming cards like the KIBO 15, but includes a smaller set of add-ons and programming commands. Even with the KIBO 10, children can still explore creating movement programs and decorating their robot to invent solutions and tell creative stories.", productId: 801 },
      { name: 'Home Robotics Course', image: HomeRoboticsCourseImg, description: "Try before you buy! We’ve designed a three-month robotics course specifically for homes and homeschools. You’ll receive a KIBO 18 Robot Kit to use for three months, along with curriculum and activities delivered via email to guide you through the three month course. At the end, simply return the package or choose to buy it at a discount! (US customers only)", productId: 402 }
    ]
  },
  'home-allIn': {
    recommended: {
      name: 'KIBO 21 Kit',
      image: Kibo21KitImg,
      description: "The KIBO 21 is our most complete single robot kit, allowing you to get started right away with the youngest children but providing plenty of room to grow. Start with simple movement programs, and progress to storytelling and imagination play with advanced sensors, the sound recorder, arts and crafts stages, and more!",
      productId: 21
    },
    alsoLike: [
      { name: 'KIBO 15 Home Edition', image: Kibo15HomeImg, description: "If you want to start a little smaller, the KIBO 15 Home Edition is a great value. Create expressive programs with movement, light and sound; program interactive behaviors with KIBO’s “ear” sound sensor; and decorate with the arts and crafts stage and whiteboard top. Makes a great gift for a young STEM explorer!", productId: 802 },
      { name: 'Bundle of Fun Extension Package', image: BundleOfFunImg, description: "Our Bundle of Fun combines all four of our popular KIBO extension sets. These extensions work with any KIBO model to add hours of engaging STEAM learning. Throw a ping pong ball, draw with KIBO, build with LEGO bricks, and explore advanced programming concepts. Buy this bundle to keep the learning going, and save!", productId: 204 }
    ]
  },
  'school-stations': {
    recommended: {
      name: 'Activity Center Package - KIBO 21',
      image: ActivityCenter21Img,
      description: "The KIBO 21 is our most complete single robot kit, providing the widest range of curriculum and activities to support all students. Start with simple movement programs and progress to storytelling and imagination play with advanced sensors, the sound recorder, and arts and crafts stages, and more! The Activity Center bundles two of these robots to outfit your KIBO station, along with curriculum appropriate to a center model. Two one-hour training sessions complete the package. And it’s all provided at a 5% bundle discount!",
      productId: 104
    },
    alsoLike: [
      { name: 'Activity Center Package - KIBO 18', image: ActivityCenter18Img, description: "If you’re looking for a more introductory option, the KIBO 18 Activity Center Package is a great starting point. As with the KIBO 21 Activity Center Package, you’ll get two KIBO robots, plus curriculum and training at a package discount. The KIBO 18 leaves out the voice recorder and expression module, but still allows you to deliver a full, connected STEAM and robotics experience in your stations model.", productId: 107 },
      { name: 'Bundle of Fun Extension Package', image: BundleOfFunImg, description: "Our Add-on Bundle of Fun combines all four of our popular KIBO extension sets. These extensions work with any KIBO model to add hours of engaging activities. Throw a ping pong ball, draw with KIBO, build with LEGO bricks, and explore advanced programming concepts. Choose the “with curriculum” option to receive 60 hours of additional curriculum activities for your activity center. This is an add-on purchase. You’ll need to buy a KIBO robot kit too.", productId: 204 }
    ]
  },
  'school-wholeClass': {
    recommended: {
      name: 'Full Classroom Package - KIBO 21 STEAM Explorer',
      image: FullClassroom21ExplorerImg,
      description: "The KIBO 21 STEAM Explorer is our most complete package, combining the versatile KIBO 21 Robot Kit with every one of our add-on extension sets. This bundle maximizes your investment bu providing the widest range of curriculum and activities to support all students and engage with the full range of our standards-aligned CS curriculum for PreK - 3. Start with simple movement programs and progress to storytelling and imagination play with advanced sensors, the sound recorder, arts and crafts stages, and more! The Full Classroom Package bundles ten of our KIBO 21 Robot Kits and every add-on extension to serve a large class at our recommended ratio of 2-4 students per robot. You receive over 160 hours of curriculum appropriate to a whole-class model. Two one-hour training sessions complete the package. And it’s all provided at a 5% bundle discount. Our best value!",
      productId: 103
    },
    alsoLike: [
      { name: 'Small Classroom Package - KIBO 21 STEAM Explorer', image: SmallClassroom21ExplorerImg, description: "Working with smaller class sizes? Our KIBO 21 STEAM Explorer Small Classroom Package contains the same KIBO 21 robots, add-ons, curriculum, and training as the Full Classroom Package, but it provides five robots instead of ten. At our recommended ratio of one robot per 2-4 students, the small classroom package serves a smaller class size, or perhaps a half-class while the other half explores different activities.", productId: 102 },
      { name: 'Full Classroom Package - KIBO 18', image: FullClassroom18Img, description: "The KIBO 18 Full Classroom package is just like the KIBO 21 Full Classroom Package, but it’s based on our slightly smaller (and more economical) KIBO 18 Robot Kits. You’ll still get ten robots, curriculum, and training, but the KIBO 18 Robot Kits leave out the sound recorder, expression module, and motor add-ons. This means a slightly reduced set of activity options, but you can still deliver our core standards-aligned CS curriculum in a whole class setting.", productId: 109 }
    ]
  }
};

const HelpMeChoose = () => {
  const [step1, setStep1] = useState<Step1Answer | null>(() => {
    const saved = sessionStorage.getItem('hmc-step1');
    return saved ? JSON.parse(saved) : null;
  });
  const [step2, setStep2] = useState<Step2Answer | null>(() => {
    const saved = sessionStorage.getItem('hmc-step2');
    return saved ? JSON.parse(saved) : null;
  });

  useEffect(() => {
    if (step1) {
      sessionStorage.setItem('hmc-step1', JSON.stringify(step1));
    } else {
      sessionStorage.removeItem('hmc-step1');
    }
  }, [step1]);

  useEffect(() => {
    if (step2) {
      sessionStorage.setItem('hmc-step2', JSON.stringify(step2));
    } else {
      sessionStorage.removeItem('hmc-step2');
    }
  }, [step2]);

  const handleStep1Select = (selection: Step1Answer) => {
    setStep1(selection);
    setStep2(null);
  };

  const recommendations = (step1 && step2) ? recommendationData[`${step1}-${step2}` as keyof typeof recommendationData] : null;

  return (
    <div className="flex flex-col min-h-screen bg-orange-50">
      <Header />
      <main>
        {/* Top Banner */}
        <div className="bg-gradient-to-r from-kibo-purple to-kibo-orange">
          <div className="container mx-auto px-4 flex items-center h-64">
            <div className="w-2/3">
              <h1 className="text-3xl font-bold text-white mb-4">Which KIBO?</h1>
              <p className="text-white/90">
                Trying to figure out which KIBO is right for you? A KIBO 10? 15? 18? 21? Maybe you need a classroom package? This guide will help you choose which KIBO or Classroom package is best for you!
              </p>
            </div>
            <div className="w-1/3 flex justify-end items-center h-full">
              <img src={KiboTopBannerImg} alt="KIBO Robot" className="max-h-[70%] w-auto object-contain" />
            </div>
          </div>
        </div>

        {/* Guide Section */}
        <div className="container mx-auto text-center py-16 px-4">
          <h2 className="text-4xl font-bold text-kibo-orange">Let Us Guide You</h2>
          <p className="text-gray-600 mt-2 mb-8">There's just 2 easy questions.</p>
          
          <div className="max-w-3xl mx-auto">
            {/* Step 1 & 2 ... */}
            <div className="mb-12">
              <div className="flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-kibo-orange mr-4">1</span>
                <h3 className="text-xl font-semibold">Where will you use KIBO?</h3>
              </div>
              <div className="flex justify-center gap-4">
                <Button variant="outline" className={cn("text-base", step1 === 'home' ? 'bg-green-100 border-green-500 ring-2 ring-green-500' : 'bg-gray-100 border-gray-300')} onClick={() => handleStep1Select('home')}>
                  <FontAwesomeIcon icon={faCheck} className={cn("mr-2", step1 === 'home' ? 'text-green-500' : 'text-transparent')} />
                  Home
                </Button>
                <Button variant="outline" className={cn("text-base", step1 === 'school' ? 'bg-green-100 border-green-500 ring-2 ring-green-500' : 'bg-gray-100 border-gray-300')} onClick={() => handleStep1Select('school')}>
                  <FontAwesomeIcon icon={faCheck} className={cn("mr-2", step1 === 'school' ? 'text-green-500' : 'text-transparent')} />
                  School or Enrichment Program
                </Button>
              </div>
            </div>

            {step1 && (
              <div className="mb-12">
                <div className="flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-kibo-orange mr-4">2</span>
                  <h3 className="text-xl font-semibold">{step1 === 'home' ? 'Do you want to go all-in?' : 'How will you use KIBO?'}</h3>
                </div>
                <div className="flex justify-center gap-4">
                  {step1 === 'home' ? (
                    <>
                      <Button variant="outline" className={cn("text-base", step2 === 'startSmall' ? 'bg-green-100 border-green-500 ring-2 ring-green-500' : 'bg-gray-100 border-gray-300')} onClick={() => setStep2('startSmall')}>
                        <FontAwesomeIcon icon={faCheck} className={cn("mr-2", step2 === 'startSmall' ? 'text-green-500' : 'text-transparent')} />
                        I'd like to start small and add over time
                      </Button>
                      <Button variant="outline" className={cn("text-base", step2 === 'allIn' ? 'bg-green-100 border-green-500 ring-2 ring-green-500' : 'bg-gray-100 border-gray-300')} onClick={() => setStep2('allIn')}>
                        <FontAwesomeIcon icon={faCheck} className={cn("mr-2", step2 === 'allIn' ? 'text-green-500' : 'text-transparent')} />
                        I'd like the most complete kit right away
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button variant="outline" className={cn("text-base", step2 === 'stations' ? 'bg-green-100 border-green-500 ring-2 ring-green-500' : 'bg-gray-100 border-gray-300')} onClick={() => setStep2('stations')}>
                        <FontAwesomeIcon icon={faCheck} className={cn("mr-2", step2 === 'stations' ? 'text-green-500' : 'text-transparent')} />
                        With Pre-K or K, in "stations"
                      </Button>
                      <Button variant="outline" className={cn("text-base", step2 === 'wholeClass' ? 'bg-green-100 border-green-500 ring-2 ring-green-500' : 'bg-gray-100 border-gray-300')} onClick={() => setStep2('wholeClass')}>
                        <FontAwesomeIcon icon={faCheck} className={cn("mr-2", step2 === 'wholeClass' ? 'text-green-500' : 'text-transparent')} />
                        With K-5, in whole-class engagement
                      </Button>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Recommendations */}
          {recommendations && (
            <div className="py-16">
              <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-kibo-orange text-center mb-12">Your Recommendations</h2>
                <div className="flex justify-center gap-8 items-start">
                  {/* Recommended */}
                  <div className="w-1/3">
                    <h3 className="text-2xl font-semibold text-center mb-4">Recommended</h3>
                    <div className="border-2 border-kibo-purple rounded-lg shadow-lg flex flex-col bg-white overflow-hidden">
                      <div className="h-70 bg-white">
                        <img src={recommendations.recommended.image} alt={recommendations.recommended.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="p-6 flex flex-col flex-grow">
                        <h4 className="text-2xl font-bold text-kibo-purple mb-2">{recommendations.recommended.name}</h4>
                        <p className="text-sm text-gray-600 mb-4 flex-grow">{recommendations.recommended.description}</p>
                        <Link to={
                          recommendations.recommended.name === 'KIBO 15 Home Edition' ? '/shop/home-edition' :
                          recommendations.recommended.name === 'KIBO 21 Kit' ? '/shop/kibo-kits' :
                          recommendations.recommended.name === 'Activity Center Package - KIBO 21' ? '/shop/kibo-classroom-packages' :
                          recommendations.recommended.name === 'Full Classroom Package - KIBO 21 STEAM Explorer' ? '/shop/kibo-classroom-packages' :
                          `/product/${recommendations.recommended.productId}`
                        }>
                          <Button className="w-full bg-kibo-purple hover:bg-kibo-purple/90">View Details</Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/* You May Also Like */}
                  <div className="w-1/2">
                    <h3 className="text-2xl font-semibold text-center mb-4">You May Also Like:</h3>
                    <div className="grid grid-cols-2 gap-6">
                      {recommendations.alsoLike?.map(item => (
                        <div key={item.productId} className="border border-orange-300 rounded-lg shadow-md flex flex-col bg-white overflow-hidden">
                           <div className="h-50 bg-white">
                            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                          </div>
                          <div className="p-4 flex flex-col flex-grow">
                            <h4 className="text-lg font-bold text-kibo-purple mb-2">{item.name}</h4>
                            <p className="text-xs text-gray-600 mb-4 flex-grow">{item.description}</p>
                            <Link to={
                              item.name === 'KIBO 10 Home Edition' ? '/shop/home-edition' :
                              item.name === 'KIBO 15 Home Edition' ? '/shop/home-edition' :
                              item.name === 'Home Robotics Course' ? '/sign-up-for-the-kibo-home-robotics-course' :
                              item.name === 'Bundle of Fun Extension Package' ? '/shop/extensions' :
                              item.name === 'Activity Center Package - KIBO 18' ? '/shop/kibo-classroom-packages' :
                              item.name === 'Small Classroom Package - KIBO 21 STEAM Explorer' ? '/shop/kibo-classroom-packages' :
                              item.name === 'Full Classroom Package - KIBO 18' ? '/shop/kibo-classroom-packages' :
                              `/product/${item.productId}`
                            }>
                              <Button className="w-full bg-kibo-orange hover:bg-kibo-orange/90">View Details</Button>
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Add-ons Banner */}
        <div className="bg-orange-100 py-12 px-4">
          <div className="container mx-auto flex items-center justify-center gap-8">
            <img src={KiboAddonImg} alt="KIBO with Add-ons" className="w-64" />
            <div className="text-center">
              <p className="text-2xl font-semibold text-gray-800">
                Don't forget our Fun Extension Sets & Accessories to add more <br />
                functionality, interaction, and customization to your KIBO.
              </p>
              <Link to="/shop/extensions">
                <Button size="lg" className="mt-6 bg-kibo-orange hover:bg-kibo-orange/90">
                  Shop Add-ons
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HelpMeChoose;