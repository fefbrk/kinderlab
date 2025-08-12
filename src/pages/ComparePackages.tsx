import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import ComparisonBannerImg from '../assets/foreducators/Storytelling-Goin-on-a-Bear-Hunt-1-300x168.png';

const ComparePackages = () => {
  const tableData = [
    {
      package: 'KIBO 18 Classroom Packages',
      description: 'KIBO 18 Classroom Packages offer additional art platforms, advanced sensors, and conditional programming.',
      extensionSets: [],
      steamCurriculum: [
        'Grades PreK-2 Curriculum – Growing with KIBO',
        'KIBO Activity Center Guidebook (in Activity Center Packages)',
        'Activity Guide Cards',
        '“KIBO Says” Game',
        'KIBO & Engineering Process Posters (2)',
        'Engineering Design Journals (Pack of 6, 12 or 25)',
        'Assessment Workbooks (Pack of 6, 12 or 25)',
      ],
    },
    {
      package: 'KIBO 21 Classroom Packages',
      description: 'KIBO 21 Classroom Packages adds the additional Sound Recorder Playback module and blocks, as well as the Expression Module.',
      extensionSets: [
        'Sound Record/Playback Module (1 per KIBO Kit)*',
        'Expression Module (1 per KIBO Kit)*',
      ],
      steamCurriculum: [
        'Grades PreK-2 Curriculum – Growing with KIBO',
        'KIBO Activity Center Guidebook (in Activity Center Packages)',
        'Activity Guide Cards',
        '“KIBO Says” Game',
        'KIBO & Engineering Process Posters (2)',
        'Engineering Design Journals (Pack of 6, 12 or 25)',
        'Assessment Workbooks (Pack of 6, 12 or 25)',
        'Sound Record/Playback Module Curriculum Guide - Showtime with KIBO!',
        'Expression Module Curriculum Guide - Express Yourself!',
      ],
    },
    {
      package: 'KIBO 21 STEAM Explorer Classroom Packages',
      description: 'KIBO 21 STEAM Explorer Packages gives you everything! Every block, every extension set and every piece of curriculum! Our best value!',
      extensionSets: [
        'Sound Record/Playback Module (1 per KIBO Kit)*',
        'Expression Module (1 per KIBO Kit)*',
        'Advanced Coding Extension Set (1 per KIBO Kit)',
        'Marker Extension Set (1 per KIBO Kit)',
        'Building Brick Extension Sets (1 per KIBO Kit)',
        'Free Throw Extension Set (1 per KIBO Kit)',
      ],
      steamCurriculum: [
        'Grades PreK-2 Curriculum – Growing with KIBO',
        'Grades 3-5 Curriculum – Exploring with KIBO',
        'KIBO Activity Center Guidebook (in Activity Center Packages)',
        'Activity Guide Cards',
        '“KIBO Says” Game',
        'KIBO & Engineering Process Posters (2)',
        'Engineering Design Journals (Pack of 6, 12 or 25)',
        'Assessment Workbooks (Pack of 6, 12 or 25)',
      ],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-orange-50">
      <Header />
      <main>
        {/* Top Banner */}
        <div className="bg-gradient-to-r from-kibo-purple to-kibo-orange">
          <div className="container mx-auto px-4 flex items-center h-64">
            <div className="w-2/3">
              <h1 className="text-3xl font-bold text-white mb-4">Classroom Robotics Kit Packages</h1>
              <p className="text-white/90">
                How many KIBO robots do I need for an innovation lab? Which modules should I start with? Does the curriculum cost extra? Wondering which KIBO classroom robotics kit is right for your school? Before you decide, you should know exactly what you’re getting…
              </p>
            </div>
            <div className="w-1/3 flex justify-end items-center h-full">
              <img src={ComparisonBannerImg} alt="Kids with KIBO" className="max-h-[95%] w-80 object-contain rounded-lg shadow-lg" />
            </div>
          </div>
        </div>

        {/* Intro Text */}
        <div className="container mx-auto py-12 px-4 text-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <p>
              KIBO’s classroom robotic kit packages are designed to provide you with everything you need to incorporate the screen-free, playful STEAM robot into your lesson plans and activities. Offering multiple robots and accessories, 1:1 teacher training and professional development, hours of curriculum, workbooks, resources and more at a discounted rate (you save 5%). If you don’t see the classroom robotics kit package you need below we’ll create one specifically for you.
            </p>
            <p>
              So how many kits will I get? Our <span>KIBO classroom robotics kits packages</span> come in 3 sizes to ensure you get the right number of KIBO kits for your learners in your activity center, makerspace, or classroom!
              <br />
              <strong>Activity Center Package</strong> – 2 KIBO Robot Kits for 4-6 students
              <br />
              <strong>Small Classroom Package</strong> – 5 KIBO Robot Kits for 10-12 students
              <br />
              <strong>Full Classroom Package</strong> – 10 KIBO Robot Kits for 20-24 student
            </p>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="container mx-auto px-4 pb-16">
          <h2 className="text-3xl font-bold text-center text-kibo-orange mb-8">KIBO Classroom Robotics Kit Packages</h2>
          <div className="border border-gray-300 rounded-lg overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-4 bg-kibo-purple text-white">
              <div className="p-4 border-b border-gray-300"></div>
              {tableData.map((col, i) => (
                <div key={i} className="p-4 font-bold text-center border-b border-l border-gray-300">{col.package}</div>
              ))}
            </div>

            {/* Rows */}
            <div className="grid grid-cols-4">
              <div className="p-4 font-semibold bg-kibo-purple text-white border-b border-gray-300">Description</div>
              {tableData.map((col, i) => <div key={i} className="p-4 text-sm border-b border-l border-gray-300">{col.description}</div>)}
            </div>

            <div className="grid grid-cols-1 bg-orange-100">
              <div className="p-4 text-center font-bold text-kibo-orange border-b border-gray-300">What Extension Sets Come with the Classroom Package?</div>
            </div>
            <div className="grid grid-cols-4">
              <div className="p-4 font-semibold bg-kibo-purple text-white border-b border-gray-300">Included Extension Sets</div>
              {tableData.map((col, i) => (
                <div key={i} className="p-4 text-sm border-b border-l border-gray-300">
                  <ul className="list-disc list-inside space-y-2">
                    {col.extensionSets.length > 0 ? col.extensionSets.map((item, j) => <li key={j}>{item}</li>) : <li>-</li>}
                  </ul>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 bg-orange-100">
              <div className="p-4 text-center font-bold text-kibo-orange border-b border-gray-300">What STEAM Curriculum Will I Get?</div>
            </div>
            <div className="grid grid-cols-4">
              <div className="p-4 font-semibold bg-kibo-purple text-white border-b border-gray-300">Included STEAM Curriculum</div>
              {tableData.map((col, i) => (
                <div key={i} className="p-4 text-sm border-b border-l border-gray-300">
                  <ul className="list-disc list-inside space-y-2">
                    {col.steamCurriculum.map((item, j) => {
                      const parts = item.split('(');
                      return (
                        <li key={j}>
                          {parts[0]}
                          {parts[1] && (
                            <span className="block text-xs text-gray-500">({parts[1]}</span>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 bg-orange-100">
              <div className="p-4 text-center font-bold text-kibo-orange border-b border-gray-300">Professional Development & Training</div>
            </div>
            <div className="grid grid-cols-4">
              <div className="p-4 font-semibold bg-kibo-purple text-white border-b border-gray-300">Included PD</div>
              <div className="p-4 text-sm col-span-3 text-center border-b border-l border-gray-300">2 hours of online PD and onboarding support</div>
            </div>

            {/* Buy Now Buttons */}
            <div className="grid grid-cols-4">
              <div className="p-4"></div>
              {tableData.map((_, i) => (
                <div key={i} className="p-4 text-center border-l border-gray-300">
                  <Link to="/shop/kibo-classroom-packages">
                    <Button className="bg-kibo-orange hover:bg-kibo-orange/90">Buy Now</Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <p className="text-xs text-gray-600 mt-4">* The Sound Record/Playback Module and Expression Module are included in the KIBO 21 robot kit, not provided as a separate product.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ComparePackages;