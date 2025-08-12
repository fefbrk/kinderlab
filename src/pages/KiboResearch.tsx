import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import researchBannerImage from '../assets/kibo/why/research/home7.jpg';
import nsfLogoImage from '../assets/kibo/why/research/national-science-foundation-68x68.webp';
import researchPdfFile from '../assets/kibo/why/research/KIBO-Research-Basis-Flyer.pdf';

// Book images
import book1Image from '../assets/kibo/why/research/designing-digital-experiences-cover.jpg';
import book2Image from '../assets/kibo/why/research/Blocks-to-Robots-Cover.jpg';
import book3Image from '../assets/kibo/why/research/Coding-Book-200x300.jpg';
import book4Image from '../assets/kibo/why/research/Beyond-Coding-Book-1.jpg';

const KiboResearch: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-orange-50">
      <Header />

      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-kibo-purple to-kibo-orange overflow-hidden">
        <div className="container mx-auto px-4 flex items-center h-64 overflow-hidden">
          <div className="w-2/3">
            <h1 className="text-3xl font-bold text-white mb-4">
              Robotics Research
            </h1>
            <p className="text-white/90 mb-6">
              Early childhood STEM research…We have decades of it and are proud to offer KIBO with the backing of amazing academic and proven robotics research.
            </p>
          </div>
          <div className="w-1/3 flex justify-end items-center h-full">
            <img
              src={researchBannerImage}
              alt="KIBO Research"
              className="max-h-[90%] w-[80%] object-contain rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow bg-orange-50">
        <div className="container mx-auto px-4 py-12">

          {/* Section 1: Why is it important to introduce coding robots */}
          <div className="flex flex-col md:flex-row items-start gap-8 mb-16">
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold text-kibo-purple mb-6">
                Why is it important to introduce coding robots for kids at a young age?
              </h2>
              <p className="text-gray-600 mb-4">
                KIBO is the result of more than 20 years of early childhood STEM research,
                led by Dr. Marina Bers, a leading researcher on early childhood computer
                science and her research team at the <a href="https://sites.bc.edu/devtech/" target="_blank" rel="noopener noreferrer" className="text-kibo-purple underline">DevTech Research Group</a>. Her research
                shows specific, powerful, and positive learning outcomes for young learners
                when working with KIBO.
              </p>
              <p className="text-gray-600 mb-4">
                The greatest return on investment in educational interventions comes when
                those <a href="https://heckmanequation.org/resource/invest-in-early-childhood-development-reduce-deficits-strengthen-the-economy/" target="_blank" rel="noopener noreferrer" className="underline text-kibo-purple">interventions are made with the youngest learners</a>.
              </p>
              <p className="text-gray-600">
                Early intervention is the reason why Dr. Bers and her team designed KIBO.
                Her robotics research shows that even the youngest students can learn
                sequencing and coding in a fun and engaging, hands-on way, regardless of
                curriculum.
              </p>
            </div>
            <div className="md:w-1/3">
              <div className="bg-gradient-to-br from-orange-100 to-orange-200 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-kibo-orange mb-4">
                  From an NSF grant to Children's Hands
                </h3>
                <div className="flex justify-center mb-4">
                  <img
                    src={nsfLogoImage}
                    alt="National Science Foundation Logo"
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <p className="text-sm text-gray-700">
                  In 2013, with a dream of improving STEM education for young children with
                  innovative and age appropriate technology based on research, Marina was awarded{' '}
                  <a href="https://www.nsf.gov/news" target="_blank" rel="noopener noreferrer" className="text-kibo-purple underline">National Science Foundation</a> grants.
                  From those grants, KIBO was born.
                </p>
              </div>
            </div>
          </div>

          {/* Section 2: Powerful Learning Outcomes */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-kibo-orange text-center mb-12">
              Powerful Learning Outcomes Using KIBO Include:
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Outcome 1 */}
              <div className="text-center">
                <h3 className="text-lg font-bold text-kibo-purple mb-2">
                  Improved Sequencing Ability in Early Childhood
                </h3>
                <p className="text-sm text-gray-600">
                  PreK-Gr2 students' performance on standard assessments of sequencing
                  ability improved from 20-35% after an 8-week robotics and
                  coding curriculum with KIBO.
                </p>
              </div>

              {/* Outcome 2 */}
              <div className="text-center">
                <h3 className="text-lg font-bold text-kibo-purple mb-2">
                  Improved Computational Thinking with Concrete Tools
                </h3>
                <p className="text-sm text-gray-600">
                  Children using KIBO performed 27% better on
                  computational thinking than children using screen-based
                  tools.
                </p>
              </div>

              {/* Outcome 3 */}
              <div className="text-center">
                <h3 className="text-lg font-bold text-kibo-purple mb-2">
                  Counteracting Harmful Gender-Based STEM Stereotypes
                </h3>
                <p className="text-sm text-gray-600">
                  After working with KIBO, 2/3 of girls expressed an interest
                  in engineering career - a rate equal to boys. Girls who
                  completed a 6-week KIBO curriculum were equally as
                  interested as boys at building and programming.
                </p>
              </div>

              {/* Outcome 4 */}
              <div className="text-center">
                <h3 className="text-lg font-bold text-kibo-purple mb-2">
                  Positive Impact on Underrepresented Groups in STEM Fields
                </h3>
                <p className="text-sm text-gray-600">
                  Studies demonstrate successful mastery of
                  programming and computational thinking skills
                  by disadvantaged students in
                  underperforming schools.
                </p>
              </div>
            </div>
          </div>

          {/* Section 3: Early Childhood STEM Research */}
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold text-kibo-orange mb-6">
              Early Childhood STEM Research Published Articles & Books
            </h2>
            <p className="text-gray-600 mb-8 max-w-4xl mx-auto">
              Evidence of KIBO's effect exists in the form of numerous published research articles and books by Marina and her team.
              See below for a listing of Marina's published research.
            </p>
            <a href={researchPdfFile} target="_blank" rel="noopener noreferrer">
              <button className="bg-kibo-orange text-white px-8 py-3 rounded-lg hover:bg-kibo-orange/90 transition-colors font-semibold">
                DOWNLOAD KIBO RESEARCH SYNOPSIS
              </button>
            </a>
          </div>

          {/* Section 4: Books By Dr. Marina Bers */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-kibo-purple text-center mb-12">
              Books By Dr. Marina Umaschi Bers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Book 1 */}
              <div className="text-center">
                <a href="https://www.amazon.com/Designing-Digital-Experiences-Positive-Development/dp/019975702X/ref=sr_1_1?ie=UTF8&qid=1410967491&sr=8-1&keywords=marina+bers" target="_blank" rel="noopener noreferrer" className="block hover:opacity-80 transition-opacity">
                  <img
                    src={book1Image}
                    alt="Designing Digital Experiences for Positive Youth Development"
                    className="w-full max-w-48 mx-auto mb-4 rounded-lg shadow-lg"
                  />
                  <h3 className="text-sm font-bold text-kibo-purple mb-2">
                    Designing Digital Experiences for Positive Youth Development: From Playpen to Playground [2008]
                  </h3>
                </a>
              </div>

              {/* Book 2 */}
              <div className="text-center">
                <a href="https://www.amazon.com/Blocks-Robots-Technology-Childhood-Classroom/dp/0807748471/ref=sr_1_2?ie=UTF8&qid=1410967491&sr=8-2&keywords=marina+bers" target="_blank" rel="noopener noreferrer" className="block hover:opacity-80 transition-opacity">
                  <img
                    src={book2Image}
                    alt="Blocks to Robots"
                    className="w-full max-w-48 mx-auto mb-4 rounded-lg shadow-lg"
                  />
                  <h3 className="text-sm font-bold text-kibo-purple mb-2">
                    Blocks to Robots: Learning with Technology in the Early Childhood Classroom [2012]
                  </h3>
                </a>
              </div>

              {/* Book 3 */}
              <div className="text-center">
                <a href="https://www.amazon.com/Coding-as-Playground-Eye-Education/dp/0367900505/ref=sr_1_1" target="_blank" rel="noopener noreferrer" className="block hover:opacity-80 transition-opacity">
                  <img
                    src={book3Image}
                    alt="Coding as a Playground"
                    className="w-full max-w-48 mx-auto mb-4 rounded-lg shadow-lg"
                  />
                  <h3 className="text-sm font-bold text-kibo-purple mb-2">
                    Coding as a Playground: Programming and Computational Thinking in the Early Childhood Classroom [2018]
                  </h3>
                </a>
              </div>

              {/* Book 4 */}
              <div className="text-center">
                <a href="https://www.penguinrandomhouse.com/books/691617/beyond-coding-by-marina-umaschi-bers/9780262543323/" target="_blank" rel="noopener noreferrer" className="block hover:opacity-80 transition-opacity">
                  <img
                    src={book4Image}
                    alt="Beyond Coding"
                    className="w-full max-w-48 mx-auto mb-4 rounded-lg shadow-lg"
                  />
                  <h3 className="text-sm font-bold text-kibo-purple mb-2">
                    Beyond Coding - How Children Learn Human Values through Programming [2021]
                  </h3>
                </a>
              </div>
            </div>
          </div>

          {/* Section 5: Research Publications List */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-kibo-purple text-center mb-12">
              Published Research Articles
            </h2>
            <div className="bg-purple-200 rounded-lg shadow-lg p-8 max-w-6xl mx-auto">
              <ul className="space-y-4 text-sm text-gray-700">
                {/* Research Articles from your images - chronologically organized */}
                <li>• Kourti, Z., Michalakopoulos C., Bagos, P., Paraskevopoulou-Kollia, E. (2023). <a href="https://www.mdpi.com/2227-7102/13/2/157" target="_blank" rel="noopener noreferrer" className="text-kibo-purple underline">Computational Thinking in Preschool Age: A Case Study in Greece</a>. Educ. Sci, 13(2), 157.</li>
                <li>• Weipeng Y., Davy Tsz Kit N., Jiahong S. (2023). <a href="https://www.sciencedirect.com/science/article/abs/pii/S187118712200219X" target="_blank" rel="noopener noreferrer" className="text-kibo-purple underline">The impact of story-inspired programming on preschool children's computational thinking: A multi-group experiment</a>. Thinking Skills and Creativity, Volume 47, 101218.</li>
                <li>• Strawhacker, A., Relkin, E., & Bers, M. U. (2022). <a href="https://www.educationaldesigner.org/ed/volume4/issue15/article60/" target="_blank" rel="noopener noreferrer" className="text-kibo-purple underline">Designing an Adaptive Assessment for Preschool Children's Robotics Knowledge</a>. Educational Designer, 4(15), ISSN 1759-1325.</li>
                <li>• Hassenfeld, Z. R., Govind, M., de Ruiter, L. E., & Bers, M. U. (2020). <a href="http://www.jite.org/documents/Vol19/JITE-Rv19p065-085Hassenfeld5935.pdf" target="_blank" rel="noopener noreferrer" className="text-kibo-purple underline">If You Can Program, You Can Write: Learning Introductory Programming Across Literacy Levels</a>. Journal of Information Technology Education: Research, 19, 65-85. DOI: 10.28945/4509</li>
                <li>• Hassenfeld, Z. R. & Bers, M. U. (2019). <a href="https://sites.tufts.edu/devtech/files/2019/11/Debugging-the-Writing-Process-Lessons-From-a-Comparison-of-Students%E2%80%99-Coding-and-Writing-Practices.pdf" target="_blank" rel="noopener noreferrer" className="text-kibo-purple underline">Debugging the Writing Process: Lessons From a Comparison of Students' Coding and Writing Practices</a>. The Reading Teacher.</li>
                <li>• Bers, M. U. (2019). <a href="https://sites.tufts.edu/devtech/files/2019/11/Bers2019_Article_CodingAsAnotherLanguageAPedago.pdf" target="_blank" rel="noopener noreferrer" className="text-kibo-purple underline">Coding as another language: a pedagogical approach for teaching computer science in early childhood</a>. Journal of Computers in Education, 1-30.</li>
                <li>• Bers, M. U., González-González, C., & Armas-Torres, M. B. (2019). <a href="https://sites.tufts.edu/devtech/files/2019/05/1-s2.0-S0360131519300995-main-1.pdf" target="_blank" rel="noopener noreferrer" className="text-kibo-purple underline">Coding as a playground: Promoting positive learning experiences in childhood classrooms</a>. Computers & Education, 138, 130-145.</li>
                <li>• Albo-Canals, J., Barco Martelo, A., Relkin, E., Hannon, D., Heerink, M., Heinemann, M., Leidl, K., Bers, M.U. (2018). <a href="https://kinderlabrobotics.com/wp-content/uploads/2018/06/Pilot-Study-of-KIBO-with-Children-with-Severe-ASD.pdf" target="_blank" rel="noopener noreferrer" className="text-kibo-purple underline">Pilot Study of KIBO with Children with Severe ASD</a>. Springer Science+Business Media B.V., part of Springer Nature, 2018. Springer, Netherlands.</li>
                <li>• Leidl, K., Bers, M.U., Mihm, C. (2017). <a href="http://ase.tufts.edu/devtech/publications/Leidl_Bers_Mihm_ScratchJrAnalyticsHongKong.pdf" target="_blank" rel="noopener noreferrer" className="text-kibo-purple underline">Programming with ScratchJr: a review of the first year of user analytics</a>. In the proceedings of the International Conference on Computational Thinking Education, 2017. Wanchai, Hong Kong.</li>
                <li>• Sullivan, A., Bers, M.U., Mihm, C. (2017). <a href="http://ase.tufts.edu/devtech/publications/Sullivan_Bers_Mihm_KIBOHongKong%20.pdf" target="_blank" rel="noopener noreferrer" className="text-kibo-purple underline">Imagining, Playing, & Coding with KIBO: Using KIBO Robotics to Foster Computational Thinking in Young Children</a>. In the proceedings of the International Conference on Computational Thinking Education, 2017. Wanchai, Hong Kong.</li>
                <li>• Sullivan, A., Strawhacker, A., & Bers, M.U. (2017). Dancing, drawing, and dramatic robots: Integrating robotics and the arts to teach foundational STEAM concepts to young children. In Khine, M.S. (Eds.) <a href="http://www.springer.com/gp/book/9783319577852#aboutBook" target="_blank" rel="noopener noreferrer" className="text-kibo-purple underline">Robotics in STEM Education: Redesigning the Learning Experience</a>. Springer Publishing.</li>
                <li>• Sullivan, A. & Bers, M.U. (2017). Computational Thinking and Young Children: Understanding the Potential of Tangible and Graphical Interfaces. In Ozcinar, H., Wong, G., & Ozturk, T. (Eds.) <a href="https://www.igi-global.com/book/teaching-computational-thinking-primary-education/179845" target="_blank" rel="noopener noreferrer" className="text-kibo-purple underline">Teaching Computational Thinking in Primary Education</a>. IGI Global.</li>
                <li>• Pugnali, A., Sullivan, A., & Bers, M.U. (In press, 2017) <a href="https://www.jite.org/documents/Vol16/JITEv16IIPp171-193Pugnali3284.pdf" target="_blank" rel="noopener noreferrer" className="text-kibo-purple underline">The Impact of User Interface on Young Children's Computational Thinking</a>. Journal of Information Technology Education: Innovations in Practice.</li>
                <li>• Strawhacker, A. L., Lee, M. S. C., & Bers, M. U. (2017). <a href="http://ase.tufts.edu/devtech/publications/Strawhacker_Lee_Bers_Teaching%20Tools%20Teachers%20Rules.pdf" target="_blank" rel="noopener noreferrer" className="text-kibo-purple underline">Teaching tools, teachers' rules: exploring the impact of teaching styles on young children's programming knowledge in ScratchJr</a>. International Journal of Technology and Design Education. DOI: 10.1007/s10798-017-9400-9</li>
                <li>• Sullivan, A., & Bers, M.U. (2017). <a href="http://ase.tufts.edu/devtech/publications/Dancing%20Robots.pdf" target="_blank" rel="noopener noreferrer" className="text-kibo-purple underline">Dancing robots: Integrating art, music, and robotics in Singapore's early childhood centers</a>. International Journal of Technology and Design Education. Online First. doi:10.1007/s10798-017-9397-0</li>
                <li>• Vizner, M., & Strawhacker, A. (2016). <a href="http://ase.tufts.edu/devtech/publications/Vizner_Strawhacker_Curious%20Construction.pdf" target="_blank" rel="noopener noreferrer" className="text-kibo-purple underline">Curious Construction Kit: A programmable building kit for early childhood</a>. In FabLearn '16 Proceedings of the 6th Annual Conference on Creativity and Fabrication in Education. pp. 90-93.</li>
                <li>• Elkin, M., Sullivan, A., & Bers, M.U. (2016). <a href="http://ase.tufts.edu/devtech/publications/Elkin_Sullivan_Programming%20with%20KIBO%20in%20Preschool.pdf" target="_blank" rel="noopener noreferrer" className="text-kibo-purple underline">Programming with the KIBO Robotics Kit in Preschool Classrooms</a>. Computers in the Schools, 33:3, 169-186.</li>
                <li>• Sullivan, A. & Bers, M. U. (2016). <a href="http://ase.tufts.edu/devtech/publications/Sullivan_Gender%20Differences%20Robotics_2016.pdf" target="_blank" rel="noopener noreferrer" className="text-kibo-purple underline">Girls, boys, and bots: Gender differences in young children's performance on robotics and programming tasks</a>. Journal of Information Technology Education: Innovations in Practice, 15, 145-165.</li>
                <li>• Hilliard, L., Buckingham, M., Geldhof, G. J., Gansert, P., Stack, C., Gelgoot, E., Bers, M. U., & Lerner, R. (2016). <a href="http://ase.tufts.edu/devtech/publications/Hilliard%20et%20al.,%20ADS,%202016_%20educational%20game%20play.pdf" target="_blank" rel="noopener noreferrer" className="text-kibo-purple underline">Perspective taking and decision-making in educational game play: A mixed-methods study</a>. Applied Developmental Science. pp. 1-13.</li>
                <li>• Strawhacker, A., Sullivan, A., & Portsmore, M. (2016). <a href="http://ase.tufts.edu/devtech/publications/Strawhacker_Sullivan_BBM.pdf" target="_blank" rel="noopener noreferrer" className="text-kibo-purple underline">Billund Builds Music An Engineering Education Initiative in Danish Kindergartens</a>. IEEE Integrated STEM Education Conference (ISEC). pp. 257-261.</li>
                <li>• Portelance, D.J., Strawhacker, A., & Bers, M.U. (2015). <a href="http://ase.tufts.edu/devtech/publications/Portelance-2015-Constructing-ScratchJr.pdf" target="_blank" rel="noopener noreferrer" className="text-kibo-purple underline">Constructing the ScratchJr programming language in the early childhood classroom</a>. International Journal of Technology and Design Education. pp. 1-16. Online First.</li>
                <li>• Strawhacker, A. L., & Bers, M. U. (2015). <a href="https://ase.tufts.edu/DevTech/publications/TGH-robot-look-for-food-Strawhacker-Bers.pdf" target="_blank" rel="noopener noreferrer" className="text-kibo-purple underline">"I want my robot to look for food": Comparing children's programming comprehension using tangible, graphical, and hybrid user interfaces</a>. Journal of Technology and Design Education, 25(3), pp. 293-319.</li>
                <li>• Sullivan, A., Elkin, M., & Bers, M. U. (2015). <a href="http://ase.tufts.edu/devtech/publications/IDC%20KIBO%20Demo%20Complete.pdf" target="_blank" rel="noopener noreferrer" className="text-kibo-purple underline">KIBO Robot Demo: Engaging young children in programming and engineering</a>. In Proceedings of the 14th International Conference on Interaction Design and Children (IDC '15). ACM, Boston, MA, USA.</li>
                <li>• Sullivan, A., & Bers, M.U. (2015). <a href="http://ase.tufts.edu/devtech/publications/robotics%20paper.pdf" target="_blank" rel="noopener noreferrer" className="text-kibo-purple underline">Robotics in the early childhood classroom: Learning outcomes from an 8-week robotics curriculum in pre-kindergarten through second grade</a>. International Journal of Technology and Design Education. Online First.</li>
                <li>• Elkin, M., Sullivan, A., & Bers, M. U. (2014). <a href="http://www.jite.org/documents/Vol13/JITEv13IIPvp153-169Elkin882.pdf" target="_blank" rel="noopener noreferrer" className="text-kibo-purple underline">Implementing a robotics curriculum in an early childhood Montessori classroom</a>. Journal of Information Technology Education: Innovations in Practice, 13, 153-169.</li>
                <li>• Bers, M. U. (2014, November 6). <a href="https://youtu.be/jOQ-9S3lOnM" target="_blank" rel="noopener noreferrer" className="text-kibo-purple underline">Marina Bers: Young programmers: Think playgrounds, not playpens</a>. Retrieved from <a href="http://www.tedxjackson.com/" target="_blank" rel="noopener noreferrer" className="text-kibo-purple underline">Marina's TedxJackson Session</a>.</li>
                <li>• Kazakoff, E.R. & Bers, M.U. (2014). <a href="http://ase.tufts.edu/devtech/publications/Kazakoff%20Put%20Your%20Robot%20In.pdf" target="_blank" rel="noopener noreferrer" className="text-kibo-purple underline">Put your robot in, Put your robot out: Sequencing through programming robots in early childhood</a>. Journal of Educational Computing Research, 50(4).</li>
                <li>• Bers, M. U. (2014). <a href="http://ase.tufts.edu/devtech/publications/Bers_ch8_tk.pdf" target="_blank" rel="noopener noreferrer" className="text-kibo-purple underline">Tangible kindergarten: Learning how to program robots in early childhood</a>. In Sneider, C. I. (Ed.), <a href="http://www.uk.sagepub.com/books/Book241521/reviews" target="_blank" rel="noopener noreferrer" className="text-kibo-purple underline">The Go-To Guide for Engineering Curricula PreK-5: Choosing and using the best instructional materials for your students</a> (pp. 133-145). Thousand Oaks, CA: Corwin.</li>
                <li>• Strawhacker, A. L., & Bers, M. U. (2014). <a href="http://ase.tufts.edu/devtech/publications/TGH-robot-look-for-food-Strawhacker-Bers.pdf" target="_blank" rel="noopener noreferrer" className="text-kibo-purple underline">"I want my robot to look for food": Comparing children's programming comprehension using tangible, graphical, and hybrid user interfaces</a>. International Journal of Technology and Design Education. Advance online publication. doi: 10.1007/s10798-014-9287-7</li>
                <li>• Bers, M.U., Flannery, L.P., Kazakoff, E.R, & Sullivan, A. (2014) <a href="http://ase.tufts.edu/DevTech/publications/computersandeducation.pdf" target="_blank" rel="noopener noreferrer" className="text-kibo-purple underline">Computational thinking and tinkering: Exploration of an early childhood robotics curriculum</a>. 72, 145-157.</li>
                <li>• Bers, M.U., Seddighin, S., & Sullivan, A. (2013). <a href="http://ase.tufts.edu/DevTech/publications/BringingTogetherT.pdf" target="_blank" rel="noopener noreferrer" className="text-kibo-purple underline">Ready for robotics: Bringing together the T and E of STEM in early childhood teacher education</a>. Journal of Technology and Teacher Education, 21(3), 355-377.</li>
                <li>• Sullivan, A., Kazakoff, E.R., & Bers, M.U. (2013). <a href="http://ase.tufts.edu/DevTech/publications/Sullivan-Wheels-Bot.pdf" target="_blank" rel="noopener noreferrer" className="text-kibo-purple underline">The Wheels on the Bot Go Round and Round: Robotics Curriculum in Pre-Kindergarten</a>. Journal of Information Technology Education: Innovations in Practice, 12, 203-219.</li>
                <li>• Flannery, L.P. and Bers, M.U. (2013). <a href="http://ase.tufts.edu/DevTech/publications/JRTE-robot-hokey-pokey.pdf" target="_blank" rel="noopener noreferrer" className="text-kibo-purple underline">Let's Dance the "Robot Hokey-Pokey!": Children's programming approaches and achievement throughout early cognitive development</a>. Journal of Research on Technology in Education, 46(1), 81-101.</li>
                <li>• Bers, M.U., Matas, J. & Libman, N. (2013). <a href="http://ase.tufts.edu/devtech/publications/MiAni.pdf" target="_blank" rel="noopener noreferrer" className="text-kibo-purple underline">Livnot U'Lehibanot, To Build and To Be Built: Making Robots in Kindergarten to Explore Jewish Identity</a>. Diaspora, Indigenous, and Minority Education: Studies of Migration, Integration, Equity, and Cultural Survival, 7(3), 164-179.</li>
                <li>• Sullivan, A., & Bers, M. U. (2013). <a href="http://link.springer.com/article/10.1007%2Fs10798-012-9210-z#" target="_blank" rel="noopener noreferrer" className="text-kibo-purple underline">Gender differences in kindergarteners' robotics and programming achievement</a>. International Journal of Technology and Design Education, 23 (3), 691-702.</li>
                <li>• Kazakoff, E., Sullivan, A., & Bers, M.U. (2013). <a href="http://ase.tufts.edu/DevTech/publications/kazsullbers2013.pdf" target="_blank" rel="noopener noreferrer" className="text-kibo-purple underline">The effect of a classroom-based intensive robotics and programming workshop on sequencing ability in early childhood</a>. Early Childhood Education Journal, 41(4), 245-255. doi:10.1007/s10643-012-0554-5.</li>
                <li>• Lee, K., Sullivan, A., Bers, M.U. (2013). <a href="http://www.tandfonline.com/doi/pdf/10.1080/07380569.2013.805676" target="_blank" rel="noopener noreferrer" className="text-kibo-purple underline">Collaboration by design: Using robotics to foster social interaction in Kindergarten</a>. Computers in the Schools, 30(3), 271-281.</li>
                <li>• Kazakoff, E., & Bers, M. (2012). <a href="http://ase.tufts.edu/DevTech/publications/JEMH.pdf" target="_blank" rel="noopener noreferrer" className="text-kibo-purple underline">Programming in a robotics context in the kindergarten classroom: The impact on sequencing skills</a>. Journal of Educational Multimedia and Hypermedia, 21(4), 371-391.</li>
                <li>• Bers, M. U., & Ettinger, A. B. (2012). <a href="http://ase.tufts.edu/DevTech/publications/Bers_and_Ettinger-robots-express-identity.pdf" target="_blank" rel="noopener noreferrer" className="text-kibo-purple underline">Programming Robots in Kindergarten to Express Identity: An Ethnographic Analysis</a>. In B. Barker, G. Nugent, N. Grandgenett, & V. Adamchuk (Eds.), Robots in K-12 Education: A New Technology for Learning (pp. 168-184). doi:10.4018/978-1-4666-0182-6.ch008</li>
                <li>• Bers, M.U. (2010). <a href="https://eric.ed.gov/?id=EJ910910" target="_blank" rel="noopener noreferrer" className="text-kibo-purple underline">The TangibleK Robotics Program: Applied Computational Thinking for Young Children</a>. Early Childhood Research and Practice, 12(2).</li>
              </ul>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default KiboResearch;