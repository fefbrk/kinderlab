import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import ComparisonBannerImg from '../assets/kibo/Three-Kids-300x215.png';

const CompareKits = () => {
  const tableHeaders = [
    { name: 'KIBO 10', description: 'Introduction to Computer Programming and Motion' },
    { name: 'KIBO 15', description: 'Adds Art Platforms and Introduces Sensors and Outputs' },
    { name: 'KIBO 18', description: 'Adds Advanced Sensors and Conditional Programming' },
    { name: 'KIBO 21', description: 'Most Complete Robot Kit Adds Visual & Audio Narratives' },
  ];

  const tableData = {
    'Hardware': [
      { feature: 'Robot', values: [1, 1, 1, 1] },
      { feature: 'Wheels', values: [2, 2, 2, 2] },
      { feature: 'Motors', values: [2, 2, 3, 3] },
    ],
    'Blocks': [
        { feature: 'Begin', values: [true, true, true, true] },
        { feature: 'End', values: [true, true, true, true] },
        { feature: 'Forward', values: [true, true, true, true] },
        { feature: 'Backward', values: [true, true, true, true] },
        { feature: 'Turn Right', values: [true, true, true, true] },
        { feature: 'Turn Left', values: [true, true, true, true] },
        { feature: 'Shake', values: [true, true, true, true] },
        { feature: 'Repeat', values: [true, true, true, true] },
        { feature: 'End Repeat', values: [true, true, true, true] },
        { feature: 'Beep', values: [true, true, true, true] },
        { feature: 'Wait for Clap', values: [false, true, true, true] },
        { feature: 'White Light On', values: [false, true, true, true] },
        { feature: 'Red Light On', values: [false, false, true, true] },
        { feature: 'Blue Light On', values: [false, false, true, true] },
        { feature: 'Spin', values: [false, false, true, true] },
        { feature: 'Sing', values: [false, false, true, true] },
        { feature: 'If', values: [false, false, true, true] },
        { feature: 'End If', values: [false, false, true, true] },
        { feature: 'Play: Triangle', values: [false, false, false, true] },
        { feature: 'Play: Circle', values: [false, false, false, true] },
        { feature: 'Play: Square', values: [false, false, false, true] },
    ],
    'Parameters': [
        { feature: '2', values: [true, true, true, true] },
        { feature: '3', values: [true, true, true, true] },
        { feature: '4', values: [true, true, true, true] },
        { feature: 'Forever', values: [true, true, true, true] },
        { feature: 'Light', values: [false, false, true, true] },
        { feature: 'Dark', values: [false, false, true, true] },
        { feature: 'Near', values: [false, false, true, true] },
        { feature: 'Far', values: [false, false, true, true] },
        { feature: 'Until Light', values: [false, false, true, true] },
        { feature: 'Until Dark', values: [false, false, true, true] },
        { feature: 'Until Near', values: [false, false, true, true] },
        { feature: 'Until Far', values: [false, false, true, true] },
    ],
    'Sensors': [
        { feature: 'Light Bulb', values: [false, true, true, true] },
        { feature: 'Ear: Sound Sensor', values: [false, true, true, true] },
        { feature: 'Eye: Light Sensor', values: [false, false, true, true] },
        { feature: 'Telescope: Distance Sensor', values: [false, false, true, true] },
        { feature: 'Sound Record/Playback Module', values: [false, false, false, true] },
    ],
    'Art Stages': [
        { feature: 'Stage Support', values: [false, true, true, true] },
        { feature: 'Stage Pedestal', values: [false, true, true, true] },
        { feature: 'Rectangular Stage (Wood)', values: [false, true, true, true] },
        { feature: 'Round Stage (Wood)', values: [false, false, true, true] },
    ],
    'Expression Module': [
        { feature: 'Flag Pole', values: [false, false, false, true] },
        { feature: 'Whiteboard', values: [false, false, false, true] },
        { feature: 'Marker', values: [false, false, false, true] },
    ],
  };

  return (
    <div className="flex flex-col min-h-screen bg-orange-50">
      <Header />
      <main>
        {/* Top Banner */}
        <div className="bg-gradient-to-r from-kibo-purple to-kibo-orange">
          <div className="container mx-auto px-4 flex items-center h-64">
            <div className="w-2/3">
              <h1 className="text-3xl font-bold text-white mb-4">Compare KIBO STEM Robots for Kids</h1>
              <p className="text-white/90">
                There are so many robots for kids available. So how do you know which one to choose? See the chart below to decide which KIBO STEM robot kit is the best for you and your students.
              </p>
            </div>
            <div className="w-1/3 flex justify-end items-center h-full">
              <img src={ComparisonBannerImg} alt="Kids with KIBO" className="max-h-[95%] w-80 object-contain rounded-lg shadow-lg" />
            </div>
          </div>
        </div>

        {/* Intro Text */}
        <div className="container mx-auto py-12 px-4 text-gray-700">
          <p>
            The chart below lists the contents found in each of our KIBO STEM robot kits which are available for ordering. The KIBO 18 and KIBO 21 STEM robots for kids are also available as Classroom Packages, which include our standards-aligned Curriculum and Professional Development. In addition, programming blocks, modules, additional curriculum and teacher materials can be purchased a la carte.
          </p>
          <div className="mt-8 text-center">
            <Link
              to="/shop/kibo-kits"
              className="px-6 py-3 rounded-lg border border-kibo-purple text-kibo-purple hover:bg-kibo-orange hover:text-kibo-purple active:bg-kibo-orange active:text-kibo-purple transition-colors cursor-pointer inline-block"
            >
              Shop KIBO Robot Kits
            </Link>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="container mx-auto px-4 pb-16">
          <div className="border border-gray-300 rounded-lg overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-5 bg-kibo-purple text-white">
              <div className="p-4 border-b border-gray-300"></div>
              {tableHeaders.map((header, i) => (
                <div key={i} className="p-4 text-center border-b border-l border-gray-300">
                  <h3 className="font-bold text-lg">{header.name}</h3>
                  <p className="text-xs text-gray-200">{header.description}</p>
                </div>
              ))}
            </div>

            {Object.entries(tableData).map(([category, rows]) => (
              <div key={category}>
                <div className="grid grid-cols-1 bg-orange-100">
                  <div className="p-4 text-center font-bold text-kibo-orange border-b border-t border-gray-300">{category}</div>
                </div>
                {rows.map((row, rowIndex) => (
                  <div key={rowIndex} className="grid grid-cols-5">
                    <div className="p-3 font-semibold bg-kibo-purple text-white border-b border-gray-300">{row.feature}</div>
                    {row.values.map((value, i) => (
                      <div key={i} className="p-3 text-center border-b border-l border-gray-300 flex justify-center items-center">
                        {typeof value === 'boolean' && value && <FontAwesomeIcon icon={faCheck} className="text-kibo-purple" />}
                        {typeof value === 'number' && <span>{value}</span>}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CompareKits;