import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import KiboPhoto from '../assets/kibo/use/fun1-300x300.jpg';
import { Link } from 'react-router-dom';

const KiboUse = () => {
  return (
    <div className="flex flex-col min-h-screen bg-orange-50">
      <Header />
      <main className="flex-grow">
        {/* Banner Section */}
        <div className="bg-gradient-to-r from-kibo-purple to-kibo-orange overflow-hidden">
          <div className="container mx-auto px-4 flex items-center h-64 overflow-hidden">
            <div className="w-2/3">
              <h1 className="text-4xl font-bold text-white mb-4">Coding for Elementary Kids? PreK Kids? Use KIBO!</h1>
              <p className="text-white/90 mb-6">
                Break down concepts. Collaborate. Explore. Create something offline using KIBO robotics – playful coding for elementary kids.
              </p>
            </div>
            <div className="w-1/3 flex justify-end items-center h-full">
              <img src={KiboPhoto} alt="KIBO Robot" className="max-h-[90%] w-[51%] object-contain rounded-lg shadow-lg" />
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row gap-8 mb-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-kibo-purple mb-4">Bring Coding for Elementary Students and Preschoolers to Life</h2>
              <p className="text-gray-600 mb-4">
                There are endless ways to use KIBO to easily teach coding for elementary and PreK kids. KIBO brings a playful and easy way to integrate STEAM concepts into your classroom, where young learners can bring a story to life, go on a social studies journey, reenact a scene, solve math problems, and more!
              </p>
              <p className="text-gray-600 mb-4">
                With numerous sensors, modules, attachments, and activity ideas, young children can spend hours engaging in meaningful play and active learning, all while collaborating, nurturing their innate curiosity, and building self-esteem — all while having fun!
              </p>
              <p className="text-gray-600">
                So what is the best way to teach kids to code using robotics? At what age should kids start coding with robots? Below are just a few examples of KIBO coding activities for elementary and preschool aged students — and we can't wait to see what you come up with.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center items-center">
              <img src={KiboPhoto} alt="KIBO Robot" className="max-w-full h-auto rounded-lg shadow-lg" />
            </div>
          </div>

          <h2 className="text-3xl font-bold text-kibo-purple text-center mb-8">Let's Get Started with KIBO Coding for Elementary & Preschool!</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Getting Started */}
            <div className="bg-purple-200 rounded-lg p-6 shadow-md text-center">

              <h3 className="text-xl font-semibold text-kibo-purple mb-2">Getting Started</h3>
              <p className="text-black mb-4">
                You've got KIBO, now what? Unbox the possibilities with these quick resources that help you get started by familiarizing yourself with KIBO.
              </p>
            </div>

            {/* Tutorials */}
            <div className="bg-purple-200 rounded-lg p-6 shadow-md text-center">

              <h3 className="text-xl font-semibold text-kibo-purple mb-2">Tutorials</h3>
              <p className="text-black mb-4">
                These video tutorials can help get you started with KIBO right away...From introducing you to scanning to using conditional blocks and KIBO's sensors.
              </p>
            </div>

            {/* STEAM Learning Activities */}
            <div className="bg-purple-200 rounded-lg p-6 shadow-md text-center">

              <h3 className="text-xl font-semibold text-kibo-purple mb-2">STEAM Learning Activities and Lesson Ideas</h3>
              <p className="text-black mb-4">
                There's no shortage of ideas here! Check out ways schools, clubs, families, and organizations are creating, building, learning, and laughing with KIBO.
              </p>
            </div>

            {/* Standards Aligned Curricula */}
            <div className="bg-purple-200 rounded-lg p-6 shadow-md text-center">

              <h3 className="text-xl font-semibold text-kibo-purple mb-2">Standards Aligned Curricula</h3>
              <p className="text-black mb-4">
                Teachers and homeschool parents take note...we've got ready-to-use STEM coding for elementary curricula that can kickoff required learning.
              </p>
            </div>

            {/* Professional Development */}
            <div className="bg-purple-200 rounded-lg p-6 shadow-md text-center">

              <h3 className="text-xl font-semibold text-kibo-purple mb-2">Professional Development</h3>
              <p className="text-black mb-4">
                No robotics training? No problem. We've got step by step PD available to get you up to speed and show you how easy programming is and even easier to teach.
              </p>
            </div>

            {/* FAQs */}
            <div className="bg-purple-200 rounded-lg p-6 shadow-md text-center">

              <h3 className="text-xl font-semibold text-kibo-purple mb-2">FAQs</h3>
              <p className="text-black mb-4">
                You've got questions. We've got answers. And most of them can be found right here. But, if you don't find what you're looking for you can always contact us.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default KiboUse;