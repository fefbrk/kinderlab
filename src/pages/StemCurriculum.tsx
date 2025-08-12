import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import bannerImage from '../assets/education/Science-Space-Shuttle-and-Earth-1-600x450.jpg';
import legoAdventureImage from '../assets/education/Lego-Adventure.jpg';
import fun1Image from '../assets/education/fun1.jpg';
import fun2Image from '../assets/education/fun2.jpg';
import fun5Image from '../assets/education/fun5.jpg';
import kiboSaysImage from '../assets/education/kibo-says-600x452.jpg';
import butterflyHabitatImage from '../assets/education/Science-Butterly-Habita-1-300x193.jpg';
import geographyExplorationImage from '../assets/education/Geography-and-Exploration-1-600x450.jpg';
import numberLineImage from '../assets/education/Number-line-600x800.jpg';

// Gallery Images - Top Row
import menu1Image from '../assets/education/menu1-300x150.webp';
import kiboZooAnimalImage from '../assets/education/KIBO-Zoo-Animal.jpg';
import mathMapImage from '../assets/education/Math-Map-scaled-1.jpg';
import dollDrawingImage from '../assets/education/Doll-Drawing-scaled.jpg';
import kidsWithKiboCardsImage from '../assets/education/Kids-with-KIBO-says-cards.jpg';

// Gallery Images - Bottom Row
import rosemaryGutierrezImage from '../assets/education/Rosemary-Gutierrez-Jamian-Cleef-scaled.jpg';
import creditTscRoboticsImage from '../assets/education/CREDIT-TSC-Robotics-img.webp';
import acesRacetrackImage from '../assets/education/ACES-Racetrack-1-scaled-e1658101295889.jpg';
import codingComputationalImage from '../assets/education/Coding-Develops-Computational-Thinking-Skills.jpg';
import legoMasterpieceImage from '../assets/education/Lego-Masterpiece.jpg';
import birdsAndGirlsImage from '../assets/education/Birds-and-Girls-300x225.webp';

export default function StemCurriculum() {
  return (
    <div className="flex flex-col min-h-screen bg-orange-50">
      <Header />
      <div className="bg-gradient-to-r from-kibo-purple to-kibo-orange overflow-hidden">
        <div className="container mx-auto px-4 flex items-center h-64 overflow-hidden">
          <div className="w-2/3">
            <h2 className="text-3xl font-bold text-white mb-4">STEM for Elementary & PreK Students - Curriculum & Teacher Materials</h2>
            <p className="text-white/90 mb-6">
              Incorporate STEM learning, coding, and robotics into your teaching with our comprehensive, standards-aligned, easy-to-follow KIBO curriculum.
            </p>
          </div>
          <div className="w-1/3 flex justify-end items-center h-full">
            <img src={bannerImage} alt="Science Space Shuttle and Earth" className="max-h-[90%] w-[65%] object-contain rounded-lg shadow-lg" />
          </div>
        </div>
      </div>

      {/* Main content area */}
      <main className="flex-grow bg-orange-50">
        <div className="container mx-auto px-4 py-12">
          {/* 1. Developmentally Appropriate STEM Section */}
          <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
            <div className="md:w-1/3">
              <img
                src={legoAdventureImage}
                alt="KIBO STEM activities with children"
                className="w-full max-h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold text-kibo-purple mb-6">
                Developmentally Appropriate STEM for Elementary and PreK Students
              </h2>
              <p className="text-gray-600 mb-4">
                STEM for elementary and early childhood students must be hands-on, playful, tangible,
                and developmentally appropriate. Just like KIBO itself, our STEM curriculum and teacher
                materials are backed by our co-founder Dr. Marina Bers' 20+ years of research into how
                young children engage with technology.
              </p>
              <p className="text-gray-600 mb-6">
                But KIBO is not just about coding; it's social-emotional learning through small-group
                collaboration, it's developing persistence through the engineering process, and it's
                connecting to student's passions through cross-curricular lessons. <strong>Learn more about our
                  over 200 hours of standards-aligned curriculum for your elementary students.</strong>
              </p>
              <Link to="/kibo/why/research" className="px-6 py-3 rounded-lg border border-kibo-purple text-kibo-purple hover:bg-kibo-orange hover:text-kibo-purple active:bg-kibo-orange active:text-kibo-purple transition-colors cursor-pointer inline-block">
                Learn About The Research Behind KIBO
              </Link>
            </div>
          </div>

          {/* 6. Explore PreK-5th Grade Section */}
          <div className="flex flex-col md:flex-row items-start gap-8 mb-16">
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold text-kibo-orange mb-6">
                Explore PreK-5th Grade Robotics Curriculum
              </h2>
              <p className="text-gray-600 mb-4">
                What if there was a unified a PreK-5th grade robotics program...one that is screen free
                and adapts as students grow? Discover a robotics program that evolves with your
                students, from your littles learning the basics of coding to academically challenging
                your older students with advanced computer science and robotics concepts like
                sensors, conditionals, and loops. And it all starts with our core curriculum:
              </p>
              <p className="text-gray-600 mb-4">
                <span className="text-gray-600">"Growing with KIBO – A Robotics Curriculum for PreK to 2nd Grade"</span> is a standards-
                aligned comprehensive curriculum which supports early elementary classrooms and
                educators with 60 sequenced lesson plans covering robotics, coding, and
                computational thinking.
              </p>
              <p className="text-gray-600 mb-4">
                <span className="text-gray-600">"Exploring with KIBO – A Robotics Curriculum for Grades 3 – 5"</span> offers 60 additional
                hours of standards-aligned lessons and activities specifically designed for upper
                elementary grades. Exploring with KIBO allows older children to expand their
                computational thinking and computer science skills utilizing KIBO's playful extension
                sets and engaging cross-curricular activities.
              </p>
              <p className="text-gray-600 mb-6">
                Additional curriculum can be found below...for you to develop your robotics program!
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center items-start">
              <img
                src={numberLineImage}
                alt="KIBO number line activities"
                className="w-full max-w-xs max-h-90 object-contain rounded-lg shadow-lg"
              />
            </div>
          </div>

        </div>

        {/* 5. Hero Accordion Gallery Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-kibo-purple text-center mb-8">
            Dive Deeper Into KIBO's STEM for Elementary and PreK Curriculum
          </h2>
        </div>

        {/* Full Width Gallery */}
        <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mb-16">

          {/* First Row - 7 Images - No Default Overlay */}
          <div className="grid grid-cols-7 gap-0 mb-0">
            <div className="relative h-64 overflow-hidden group cursor-pointer">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundImage: `url(${menu1Image})` }}
              ></div>
              <div className="absolute inset-0 bg-transparent group-hover:bg-black/70 transition-colors duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <div className="text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h4 className="text-lg font-bold mb-2">Growing with KIBO (PreK-2)</h4>
                  <p className="text-sm leading-tight">Our comprehensive, research-based STEAM curriculum guide, “Growing with KIBO” offers 60 sequenced hours of standards-aligned lesson plans – covering robotics, coding, and computational thinking.</p>
                </div>
              </div>
            </div>

            <div className="relative h-64 overflow-hidden group cursor-pointer">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundImage: `url(${kiboZooAnimalImage})` }}
              ></div>
              <div className="absolute inset-0 bg-transparent group-hover:bg-black/70 transition-colors duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <div className="text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h4 className="text-lg font-bold mb-2">Exploring with KIBO (3-5)</h4>
                  <p className="text-sm leading-tight">With the Exploring with KIBO curriculum, upper elementary students can expand their computational thinking and computer science skills utilizing KIBO’s playful extension sets and with 60 hours of standards-aligned cross-curricular activities.</p>
                </div>
              </div>
            </div>

            <div className="relative h-64 overflow-hidden group cursor-pointer">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundImage: `url(${fun5Image})` }}
              ></div>
              <div className="absolute inset-0 bg-transparent group-hover:bg-black/70 transition-colors duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <div className="text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h4 className="text-lg font-bold mb-2">Creating with KIBO</h4>
                  <p className="text-sm leading-tight">Get started right away with the comprehensive, research-based curriculum guide, “Creating with KIBO“. The guide offers 20-40 hours of curriculum for early learning classrooms.</p>
                </div>
              </div>
            </div>

            <div className="relative h-64 overflow-hidden group cursor-pointer">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundImage: `url(${fun2Image})` }}
              ></div>
              <div className="absolute inset-0 bg-transparent group-hover:bg-black/70 transition-colors duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <div className="text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h4 className="text-lg font-bold mb-2">Activity Center Guidebook</h4>
                  <p className="text-sm leading-tight">For teachers implementing an activity centers-based classroom, library, or makerspace, the KIBO Activity Center Guidebook provides 10 lessons for student-directed, discovery-based learning experiences.</p>
                </div>
              </div>
            </div>

            <div className="relative h-64 overflow-hidden group cursor-pointer">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundImage: `url(${mathMapImage})` }}
              ></div>
              <div className="absolute inset-0 bg-transparent group-hover:bg-black/70 transition-colors duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <div className="text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h4 className="text-lg font-bold mb-2">Maps, Measurement & Make Believe</h4>
                  <p className="text-sm leading-tight">This free Floor Map Activity Guide offers 8 activities using floor maps to address learning standards in math, ELA/literacy, science, social studies, and design when using KIBO.</p>
                </div>
              </div>
            </div>

            <div className="relative h-64 overflow-hidden group cursor-pointer">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundImage: `url(${dollDrawingImage})` }}
              ></div>
              <div className="absolute inset-0 bg-transparent group-hover:bg-black/70 transition-colors duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <div className="text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h4 className="text-lg font-bold mb-2">KIBO Activity Cards</h4>
                  <p className="text-sm leading-tight">The KIBO Activity Cards provide 15 creative KIBO activities with big, colorful images and easy-to-follow instructions, for hours of engagement and fun at home with KIBO! Easch imaginative activity combines coding, building, art, and play.</p>
                </div>
              </div>
            </div>

            <div className="relative h-64 overflow-hidden group cursor-pointer">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundImage: `url(${kidsWithKiboCardsImage})` }}
              ></div>
              <div className="absolute inset-0 bg-transparent group-hover:bg-black/70 transition-colors duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <div className="text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h4 className="text-lg font-bold mb-2">KIBO Says Game</h4>
                  <p className="text-sm leading-tight">Learn KIBO’s coding language through engaging, unplugged play! Our “KIBO Says” game is a collection of oversized cards contains images of KIBO’s programming icons. And like “Simon Says”, kids act out KIBO’s movements, sounds, and other commands. </p>
                </div>
              </div>
            </div>
          </div>

          {/* Second Row - 7 Images */}
          <div className="grid grid-cols-7 gap-0">
            <div className="relative h-64 overflow-hidden group cursor-pointer">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundImage: `url(${rosemaryGutierrezImage})` }}
              ></div>
              <div className="absolute inset-0 bg-transparent group-hover:bg-black/70 transition-colors duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <div className="text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h4 className="text-lg font-bold mb-2">Engineering Design Journals</h4>
                  <p className="text-sm leading-tight">These “Engineering Design Journals” help early learners plan, revise, and test. Students sketch their imagined constructions, plan their programs, and record the challenges and solutions they discover. </p>
                </div>
              </div>
            </div>

            <div className="relative h-64 overflow-hidden group cursor-pointer">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundImage: `url(${creditTscRoboticsImage})` }}
              ></div>
              <div className="absolute inset-0 bg-transparent group-hover:bg-black/70 transition-colors duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <div className="text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h4 className="text-lg font-bold mb-2">KIBO Assessment Workbooks</h4>
                  <p className="text-sm leading-tight">The “KIBO Assessment Workbooks” help teachers evaluate student learning with a focus on robotics concepts and the engineering design process. Children solve fun story problems to share what they have learned about KIBO!</p>
                </div>
              </div>
            </div>

            <div className="relative h-64 overflow-hidden group cursor-pointer">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundImage: `url(${acesRacetrackImage})` }}
              ></div>
              <div className="absolute inset-0 bg-transparent group-hover:bg-black/70 transition-colors duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <div className="text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h4 className="text-lg font-bold mb-2">Ask and Imagine</h4>
                  <p className="text-sm leading-tight">When exploring advanced programming ideas
                    with the Advanced Coding Extension Set children continue their exploration into sophisticated concepts. The “Ask and Imagine Guide“, provides 6 – 8 hours of KIBO activities using the KIBO Advanced Coding Extension Set.</p>
                </div>
              </div>
            </div>

            <div className="relative h-64 overflow-hidden group cursor-pointer">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundImage: `url(${codingComputationalImage})` }}
              ></div>
              <div className="absolute inset-0 bg-transparent group-hover:bg-black/70 transition-colors duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <div className="text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h4 className="text-lg font-bold mb-2">Showtime with KIBO</h4>
                  <p className="text-sm leading-tight">With the KIBO Sound Record/Playback Module, students record their own voice and KIBO plays back their recording to give their robot sound. The “Showtime with KIBO Guide” provides a STEM curriculum incorporating song, dance, and more.</p>
                </div>
              </div>
            </div>

            <div className="relative h-64 overflow-hidden group cursor-pointer">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundImage: `url(${fun1Image})` }}
              ></div>
              <div className="absolute inset-0 bg-transparent group-hover:bg-black/70 transition-colors duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <div className="text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h4 className="text-lg font-bold mb-2">Make Learning Visible</h4>
                  <p className="text-sm leading-tight">The KIBO Marker Extension Set enables KIBO to draw as it moves, based on the child’s programming sequence. The “Make Learning Visible Guide” provides lesson plans where kids draw shapes and letters, create abstract artworks, and estimate distances by measuring the lines KIBO draws.</p>
                </div>
              </div>
            </div>

            <div className="relative h-64 overflow-hidden group cursor-pointer">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundImage: `url(${legoMasterpieceImage})` }}
              ></div>
              <div className="absolute inset-0 bg-transparent group-hover:bg-black/70 transition-colors duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <div className="text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h4 className="text-lg font-bold mb-2">Build it Better</h4>
                  <p className="text-sm leading-tight">With the KIBO Building Brick Extension Set, kids build onto their KIBO by using popular building bricks, including LEGO®. The “Build it Better Guide” provides engineering and architecture ideas for students to use LEGO-compatible building bricks to create and program a robotic masterpiece.</p>
                </div>
              </div>
            </div>

            <div className="relative h-64 overflow-hidden group cursor-pointer">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundImage: `url(${birdsAndGirlsImage})` }}
              ></div>
              <div className="absolute inset-0 bg-transparent group-hover:bg-black/70 transition-colors duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <div className="text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h4 className="text-lg font-bold mb-2">Express Yourself</h4>
                  <p className="text-sm leading-tight">The KIBO Expression Module allows children to transform KIBO with drawings, flags, and other decorations. The “Express Yourself Guide” provides art, literacy, and social studies ideas and activities. Students can create interactive book reports using the whiteboard, explore other countries and decorate their flags for a robotic world parade, and create interactive self-portraits.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          {/* 2. Our STEAM Curriculum Section */}
          <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
            <div className="md:w-1/4 flex justify-center">
              <img
                src={kiboSaysImage}
                alt="KIBO Says game cards"
                className="w-3/4 max-w-xs max-h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-3/4">
              <h2 className="text-3xl font-bold text-kibo-orange mb-6">
                Our STEAM Curriculum Offers Over 200 hours!
              </h2>
              <p className="text-gray-600 mb-6">
                Beyond Growing with KIBO and Exploring with KIBO, you'll find over 100 hours of
                additional lesson plans in supplemental booklets with connections to literacy, art,
                dance, science, and more! We also supply a wide range of teaching materials to
                enhance classroom experience with KIBO, from our movement-based "KIBO Says"
                game cards, to Activity Cards for stations work, to assessment workbooks and
                engineering journals. We support you every step of the way!
              </p>
              <Link
                to="/shop/learning-materials"
                className="px-6 py-3 rounded-lg border border-kibo-purple text-kibo-purple hover:bg-kibo-orange hover:text-kibo-purple active:bg-kibo-orange active:text-kibo-purple transition-colors cursor-pointer inline-block"
              >
                Shop Our Available Curriculum Items
              </Link>
            </div>
          </div>

          {/* 3. Curriculum When You Need it Section */}
          <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
            <div className="md:w-3/4">
              <h2 className="text-3xl font-bold text-kibo-orange mb-6">
                Curriculum When You Need it
              </h2>
              <p className="text-gray-600 mb-6">
                You can purchase any of our curriculum products individually, but we also provide the
                most appropriate curriculum materials for your STEM for elementary classrooms with
                our Classroom Packages. These bundles of KIBO Robot Kits, professional
                development, and curriculum are sized for activity centers, small classrooms, or large
                classrooms, and they come with the exact curriculum guides, supplements, and
                workbooks you need to implement your program.
              </p>
              <Link
                to="/compare-packages"
                className="px-6 py-3 rounded-lg border border-kibo-purple text-kibo-purple hover:bg-kibo-orange hover:text-kibo-purple active:bg-kibo-orange active:text-kibo-purple transition-colors cursor-pointer inline-block"
              >
                View Our Classroom Packages
              </Link>
            </div>
            <div className="md:w-1/4 flex justify-center">
              <img
                src={butterflyHabitatImage}
                alt="Science butterfly habitat activities"
                className="w-3/4 max-w-xs max-h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* 4. Standards Alignment Section */}
          <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
            <div className="md:w-1/4 flex justify-center">
              <img
                src={geographyExplorationImage}
                alt="Geography and exploration activities"
                className="w-3/4 max-w-xs max-h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-3/4">
              <h2 className="text-3xl font-bold text-kibo-orange mb-6">
                Standards Alignment
              </h2>
              <p className="text-gray-600 mb-4">
                Many states have already adopted computer science standards in K-5, with many more
                planning to do so in coming years. States and districts that starting STEM education
                early is critical to ensuring access and success for all students. To ensure that you are
                meeting your school's or district's goals in computer science and STEM education,
                we've made sure our curriculum is aligned with key model standards at the national
                level from CSTA and ISTE as well as actual state standards.
              </p>
              <p className="text-gray-600 mb-6">
                We are actively expanding our library of standards mappings for our curriculum. Below
                are additional mappings you may find helpful.
              </p>
            </div>
          </div>

          {/* Standards Mapping Details Section */}
          <div className="bg-purple-200 p-8 rounded-lg shadow-sm mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Column */}
              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-4">General Standards Mapping</h3>
                <ul className="space-y-2 mb-6">
                  <li className="text-sm">
                    • <a href="/src/assets/education/KIBO-Academic-Frameworks-Addressed.pdf" target="_blank" rel="noopener noreferrer" className="text-kibo-orange underline hover:text-kibo-orange/80">General overview of academic frameworks addressed with KIBO robotics</a>
                    <span className="text-gray-500"> (incl. Common Core, NGSS, CSTA CSK12)</span>
                  </li>
                </ul>

                <h3 className="text-lg font-semibold text-gray-700 mb-4">Standards mappings for Growing with KIBO, our 60-hour K-2 core curriculum:</h3>
                <ul className="space-y-2 mb-6">
                  <li className="text-sm">
                    • <a href="/src/assets/education/Growing-with-KIBO-Standards-Mapping-CSTA-update-Feb-2022.pdf" target="_blank" rel="noopener noreferrer" className="text-kibo-orange underline hover:text-kibo-orange/80">Growing with KIBO mapping to CSTA K12 Standards</a>
                    <span className="text-gray-500"> (about the </span>
                    <a href="https://csteachers.org/k12standards/" target="_blank" rel="noopener noreferrer" className="text-kibo-orange underline hover:text-kibo-orange/80">CSTA Standards</a>
                    <span className="text-gray-500">)</span>
                  </li>
                  <li className="text-sm">
                    • <a href="/src/assets/education/Growing-with-KIBO-Standards-Alignment-ISTE.pdf" target="_blank" rel="noopener noreferrer" className="text-kibo-orange underline hover:text-kibo-orange/80">Growing with KIBO alignment to ISTE Standards for Students</a>
                    <span className="text-gray-500"> (about the </span>
                    <a href="https://www.iste.org/standards/for-students" target="_blank" rel="noopener noreferrer" className="text-kibo-orange underline hover:text-kibo-orange/80">ISTE Standards</a>
                    <span className="text-gray-500">)</span>
                  </li>
                  <li className="text-sm">
                    • <a href="/src/assets/education/Growing-with-KIBO-Standards-Alignment-Georgia-SoE.pdf" target="_blank" rel="noopener noreferrer" className="text-kibo-orange underline hover:text-kibo-orange/80">Growing with KIBO alignment to Georgia Standards of Excellence in CS</a>
                    <span className="text-gray-500"> (about the </span>
                    <a href="https://www.georgiastandards.org/Georgia-Standards/Pages/Computer-Science.aspx" target="_blank" rel="noopener noreferrer" className="text-kibo-orange underline hover:text-kibo-orange/80">Georgia Standards</a>
                    <span className="text-gray-500">)</span>
                  </li>
                  <li className="text-sm">
                    • <a href="/src/assets/education/Growing-with-KIBO-Standards-Mapping-Illinois-CS-Draft.pdf" target="_blank" rel="noopener noreferrer" className="text-kibo-orange underline hover:text-kibo-orange/80">Growing with KIBO alignment to Illinois Draft CS Standards</a>
                    <span className="text-gray-500"> (about the </span>
                    <a href="https://www.isbe.net/Documents/23-1RG-P-20210521.pdf" target="_blank" rel="noopener noreferrer" className="text-kibo-orange underline hover:text-kibo-orange/80">Illinois Standards</a>
                    <span className="text-gray-500">)</span>
                  </li>
                  <li className="text-sm">
                    • <a href="/src/assets/education/Growing-with-KIBO-Standards-Mapping-Iowa-CS.pdf" target="_blank" rel="noopener noreferrer" className="text-kibo-orange underline hover:text-kibo-orange/80">Growing with KIBO alignment to Iowa CS Standards</a>
                    <span className="text-gray-500"> (about the </span>
                    <a href="/src/assets/education/IowaComputerScienceStandards.pdf" target="_blank" rel="noopener noreferrer" className="text-kibo-orange underline hover:text-kibo-orange/80">Iowa Standards</a>
                    <span className="text-gray-500">)</span>
                  </li>
                  <li className="text-sm">
                    • <a href="/src/assets/education/Growing-with-KIBO-Standards-Mapping-Nevada-NVACS.pdf" target="_blank" rel="noopener noreferrer" className="text-kibo-orange underline hover:text-kibo-orange/80">Growing with KIBO alignment to Nevada CS NVACS</a>
                    <span className="text-gray-500"> (about the </span>
                    <a href="https://doe.nv.gov/Nevada_Academic_Standards/Computer_Science/" target="_blank" rel="noopener noreferrer" className="text-kibo-orange underline hover:text-kibo-orange/80">Nevada Standards</a>
                    <span className="text-gray-500">)</span>
                  </li>
                  <li className="text-sm">
                    • <a href="/src/assets/education/Growing-with-KIBO-Wyoming-WYCPS-alignment.pdf" target="_blank" rel="noopener noreferrer" className="text-kibo-orange underline hover:text-kibo-orange/80">Growing with KIBO alignment to Wyoming Content and Performance Standards in Computer Science Standards</a>
                    <span className="text-gray-500"> (about the </span>
                    <a href="https://edu.wyoming.gov/" target="_blank" rel="noopener noreferrer" className="text-kibo-orange underline hover:text-kibo-orange/80">Wyoming Standards</a>
                    <span className="text-gray-500">)</span>
                  </li>
                </ul>

                <h3 className="text-lg font-semibold text-gray-700 mb-4">Standards mappings for Exploring with KIBO, our 60-hour grade 3-5 core curriculum:</h3>
                <ul className="space-y-2">
                  <li className="text-sm">
                    <span className="text-gray-500">[Coming soon!] </span>
                    • <span className="text-kibo-orange">Exploring with KIBO mapping to CSTA K12 Standards</span>
                    <span className="text-gray-500"> (about the </span>
                    <a href="https://csteachers.org/k12standards/" target="_blank" rel="noopener noreferrer" className="text-kibo-orange underline hover:text-kibo-orange/80">CSTA Standards</a>
                    <span className="text-gray-500">)</span>
                  </li>
                  <li className="text-sm">
                    <span className="text-gray-500">[Coming soon!] </span>
                    • <span className="text-kibo-orange">Exploring with KIBO alignment to ISTE Standards for Students</span>
                    <span className="text-gray-500"> (about the </span>
                    <a href="https://iste.org/standards/students" target="_blank" rel="noopener noreferrer" className="text-kibo-orange underline hover:text-kibo-orange/80">ISTE Standards</a>
                    <span className="text-gray-500">)</span>
                  </li>
                </ul>
              </div>

              {/* Right Column */}
              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-4">Standards mappings for Creating with KIBO, our abbreviated core curriculum:</h3>
                <ul className="space-y-2 mb-6">
                  <li className="text-sm">
                    • <a href="/src/assets/education/KIBO-MA-DLCS-Crosswalk.pdf" target="_blank" rel="noopener noreferrer" className="text-kibo-orange underline hover:text-kibo-orange/80">Creating with KIBO crosswalk with MA Digital Literacy and Computer Science Standards</a>
                    <span className="text-gray-500"> (about </span>
                    <a href="https://d1949rjvrttu9y.cloudfront.net/cutoverswap/maintenance.html" target="_blank" rel="noopener noreferrer" className="text-kibo-orange underline hover:text-kibo-orange/80">MA DLCS</a>
                    <span className="text-gray-500">)</span>
                  </li>
                  <li className="text-sm">
                    • <a href="/src/assets/education/KIBO-CwK-Idaho-Content-Standards-Crosswalk-KinderLab-26-Nov-2018.pdf" target="_blank" rel="noopener noreferrer" className="text-kibo-orange underline hover:text-kibo-orange/80">Creating with KIBO mapping to Idaho Content Standards</a>
                    <span className="text-gray-500"> (about </span>
                    <a href="https://www.sde.idaho.gov/academic/computer-science/" target="_blank" rel="noopener noreferrer" className="text-kibo-orange underline hover:text-kibo-orange/80">Idaho ICS in Computer Science</a>
                    <span className="text-gray-500">)</span>
                  </li>
                </ul>

                <h3 className="text-lg font-semibold text-gray-700 mb-4">Linked Resources in Exploring with KIBO</h3>
                <ul className="space-y-2 mb-6">
                  <li className="text-sm">
                    • <a href="https://education.nationalgeographic.org/resource/mayflower_gulfstream_990/" className="text-kibo-orange underline hover:text-kibo-orange/80">Mayflower Route Map</a>
                    <span className="text-gray-500"> at National Geographic Society (Grade 3 Lesson 10)</span>
                  </li>
                  <li className="text-sm">
                    • <a href="https://www.youtube.com/watch?v=2EooyeAvPOM" className="text-kibo-orange underline hover:text-kibo-orange/80">"Electromagnet at the scrap yard 2017"</a>
                    <span className="text-gray-500"> by Travis Benner (Grade 3 Lesson 11)</span>
                  </li>
                  <li className="text-sm">
                    • <a href="http://tweenbots.com/" className="text-kibo-orange underline hover:text-kibo-orange/80">Tweenbots.com</a>
                    <span className="text-gray-500"> (video) and </span>
                    <a href="https://www.moma.org/collection/works/145467" className="text-kibo-orange underline hover:text-kibo-orange/80">Tweenbots at MoMA</a>
                    <span className="text-gray-500"> (Grade 5 Lesson 8)</span>
                  </li>
                  <li className="text-sm">
                    • <a href="https://scratch.mit.edu/educators" className="text-kibo-orange underline hover:text-kibo-orange/80">Scratch educator resources</a>
                    <span className="text-gray-500"> at Scratch website (Grade 5 Lesson 10)</span>
                  </li>
                </ul>

                <h3 className="text-lg font-semibold text-gray-700 mb-4">Recommended readings in Growing with KIBO</h3>
                <ul className="space-y-2 mb-6">
                  <li className="text-sm">
                    • <a href="C:\Users\fefbrk\Desktop\internproject\src\assets\education\KIBO-STEAM-Book-List.pdf" className="text-kibo-orange underline hover:text-kibo-orange/80">KIBO STEAM Book List</a>
                  </li>
                </ul>

                <h3 className="text-lg font-semibold text-gray-700 mb-4">Thinking with KIBO resources</h3>
                <p className="text-sm text-gray-500 mb-4 italic">
                  These resources are referenced in Thinking with KIBO, our free AI curriculum. These are not KinderLab-created; we provide these links as a convenience. You may find alternative videos or read-alouds that better fit your classroom.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="text-sm">
                    • <a href="https://www.youtube.com/watch?v=cqAls3q_2tc" className="text-kibo-orange underline hover:text-kibo-orange/80">Good Night Oppy read-aloud</a>
                    <span className="text-gray-500"> video</span>
                  </li>
                  <li className="text-sm">
                    • <a href="http://www.tweenbots.com/" className="text-kibo-orange underline hover:text-kibo-orange/80">Tweenbot website</a>
                    <span className="text-gray-500"> with 3-minute video</span>
                  </li>
                  <li className="text-sm">
                    • <a href="https://www.moma.org/collection/works/145467" className="text-kibo-orange underline hover:text-kibo-orange/80">Tweenbot page at MoMA website</a>
                  </li>
                </ul>

                <h3 className="text-lg font-semibold text-gray-700 mb-4">Standards alignment for Thinking with KIBO</h3>
                <p className="text-sm text-gray-500 mb-4 italic">
                  Thinking with KIBO is aligned with the draft
                </p>
                <p className="text-sm">
                  • <a href="https://ai4k12.org/gradeband-progression-charts/" className="text-kibo-orange underline hover:text-kibo-orange/80">AI4K12 curriculum guidelines</a>
                  <span className="text-gray-500">, a collaboration between AAAI and CSTA, frame AI education as an important component of K-12 computer science education.</span>
                </p>
              </div>
            </div>
          </div>

          {/* 7. Need More Resources Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-kibo-purple mb-4">
              Need More Resources?
            </h2>
            <p className="text-xl text-gray-500 mb-8">
              Learn From Your Fellow Educators
            </p>
            <p className="text-gray-600 mb-4">
              Be sure to check out our <span className="text-gray-600">Resources</span> site to learn more about what other educators are doing with KIBO in their classrooms.
            </p>
            <p className="text-gray-600">
              We would love to hear from you too! <span className="text-gray-600">Submit your own resources today</span>!
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
