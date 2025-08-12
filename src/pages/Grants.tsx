import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import bannerImage from '../assets/grants/Close-Scanning.jpg';

// Section images
import section1Image1 from '../assets/grants/kibo-kids.jpg';
import section1Image2 from '../assets/grants/kibo-earth.jpg';

export default function Grants() {
  return (
    <div className="flex flex-col min-h-screen bg-orange-50">
      <Header />

      {/* Header Banner */}
      <div className="bg-gradient-to-r from-kibo-purple to-kibo-orange overflow-hidden">
        <div className="container mx-auto px-4 flex items-center h-64 overflow-hidden">
          <div className="w-2/3">
            <h2 className="text-3xl font-bold text-white mb-4">Grants for STEM Education</h2>
            <p className="text-white/90 mb-6">
              Learn about grants for STEM Education when bringing edtech to elementary-aged students in the classroom, makerspaces, afterschool programs, summer programs, and more.
            </p>
          </div>
          <div className="w-1/3 flex justify-end items-center h-full">
            <img src={bannerImage} alt="Close Scanning" className="max-h-[90%] w-[55%] object-contain rounded-lg shadow-lg" />
          </div>
        </div>
      </div>

      {/* Main content area */}
      <main className="flex-grow bg-orange-50">
        <div className="container mx-auto px-4 py-12">

          {/* Section 1: Give children the chance to make their ideas tangible */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-kibo-orange text-center mb-8">
              Give children the chance to make their ideas tangible.
            </h2>
            <div className="text-center mb-12">
              <p className="text-gray-600 text-lg mb-4">
                You're probably thinking that KIBO only qualifies for robotics or technology grants, but not true! <strong>KIBO fits into almost every aspect of early learning curricula, including specific grants for STEM education.</strong> Learn about the different types of grants for STEM education that are available and supporting resources to help you apply!
              </p>
            </div>

            {/* Three columns with purple background */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center bg-purple-100 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-kibo-purple mb-4">Start with the Need</h3>
                <p className="text-gray-600 mb-4">
                  <strong>Robotics engages young children in learning STEM concepts and skills through experiential opportunities that are developmentally appropriate.</strong>
                </p>
                <p className="text-gray-600">
                  KIBO integrates computer science and engineering with math, literacy, physical movement and the arts. It provides endless opportunities for educational, as well as social and emotional growth.
                </p>
              </div>

              <div className="text-center bg-purple-100 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-kibo-purple mb-4">Discuss the Research</h3>
                <p className="text-gray-600 mb-4">
                  <strong>Unlike many programming tools and coding robots for kids, KIBO is backed by 20+ years of early childhood development research.</strong>
                </p>
                <p className="text-gray-600">
                  Real research by Prof. Marina Bers at Boston College, and her previous work at the MIT Media Lab with Seymour Papert, offers years in learning technologies and child development.
                </p>
              </div>

              <div className="text-center bg-purple-100 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-kibo-purple mb-4">Summarize with the Benefits</h3>
                <p className="text-gray-600 mb-4">
                  <strong>Designed for open-ended play, KIBO let's children make (and learn) almost anything with the integration of the arts with computer science.</strong>
                </p>
                <p className="text-gray-600">
                  Children bring characters from a story to life, become builders and inventors, experiment, create, explore individuality. And most of all, enjoy learning new things in new ways while gaining self-confidence.
                </p>
              </div>
            </div>
          </div>

          {/* Section 2: STEAM/STEM Grants and Funding Resources */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-kibo-orange text-center mb-8">
              STEAM/STEM Grants and Funding Resources
            </h2>
            <div className="text-center mb-12">
              <p className="text-gray-600 text-lg">
                Learn about some of the ways you can <Link to="/kibo/steam-grants" className="text-kibo-orange underline">find and secure grants for STEM education</Link> for the purchase of educational technology such as the screen-free KIBO robot.
              </p>
            </div>

            {/* Testimonial section */}
            <div className="bg-purple-200 p-8 rounded-lg">
              <p className="text-gray-600 text-lg italic mb-6">
                "In applying for a Maryland State Department of Education grant specifically for robotics instruction, I drew heavily on KinderLab Robotics' research regarding the benefits of play and creativity with KIBO. The work Kinderlab Robotics has already done to map their KIBO curriculum to CSTA Standards provided a framework for aligning my proposal with MSDE standards."
              </p>
              <p className="text-gray-500 font-semibold">
                Jane de Winter, Executive Director, Big Learning Science & Engineering, MD
              </p>
            </div>
          </div>

          {/* Section 3: Two cards section */}
          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-purple-200 rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
                <img src={section1Image1} alt="All This and it's Screen-Free Too" className="w-full h-48 object-cover" />
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-kibo-purple mb-4">All This and it's Screen-Free(!) Too</h3>
                  <p className="text-gray-600 mb-4 flex-grow">
                    <strong>KIBO's screen-free advantage</strong> is more than just a benefit it. The hands-on manipulatives, and "unplugged" logic benefits critical thinking, motor skills, and cognitive reasoning that most coding programs for early learners do not afford.
                  </p>
                  <p className="text-gray-600 mb-6">
                    As a staple in innovation labs, makerspaces, libraries, as well as in the classroom, KIBO integrates easily into existing lesson plans and activities for endless, playful engagement.
                  </p>
                  <Link to="/blog/75872b66-87ce-478b-8b7e-bc0736767a5e" className="w-full px-6 py-3 rounded-lg border border-kibo-purple text-kibo-purple hover:bg-kibo-orange hover:text-kibo-purple active:bg-kibo-orange active:text-kibo-purple transition-colors cursor-pointer text-center mt-auto block">
                    Learn More
                  </Link>
                </div>
              </div>

              <div className="bg-purple-200 rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
                <img src={section1Image2} alt="Don't Take KIBO for Grant(ed)" className="w-full h-48 object-cover" />
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-kibo-purple mb-4">Don't Take KIBO for Grant(ed)</h3>
                  <p className="text-gray-600 mb-4 flex-grow">
                    Investing in KIBO goes a long way, by providing years of learning for PreK through 5th grade learners. It's important for educators to implement technology strategies that go the distance...and "grow" with your students.
                  </p>
                  <p className="text-gray-600 mb-6">
                    This <strong>infographic</strong> shares how KIBO is used in PreK through elementary school to demonstrate multifaceted lessons and different areas of learning with a single coding robot. Learn more and get those grants for STEM education!
                  </p>
                  <Link to="/blog/30114f9d-f962-4049-a503-fd8608bd2821" className="w-full px-6 py-3 rounded-lg border border-kibo-purple text-kibo-purple hover:bg-kibo-orange hover:text-kibo-purple active:bg-kibo-orange active:text-kibo-purple transition-colors cursor-pointer text-center mt-auto block">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}