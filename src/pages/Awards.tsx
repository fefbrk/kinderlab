import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Awards = () => {
  return (
    <div className="flex flex-col min-h-screen bg-orange-50">
      <Header />
      <main className="flex-grow">
        {/* --- Awards Banner Section --- */}
        <div className="bg-gradient-to-r from-kibo-purple to-kibo-orange overflow-hidden">
          <div className="container mx-auto px-4 flex items-center h-64 overflow-hidden">
            <div className="w-full text-center">
              <h2 className="text-4xl font-bold text-white mb-4">KinderLab and KIBO Awards</h2>
              <p className="text-white/90 mb-6 text-xl">
                Learn more about the KinderLab and KIBO awards and certifications we are honored to have received.
              </p>
            </div>
          </div>
        </div>

        {/* --- Content Section --- */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Award 1 - EdTech Cool Tool Award Winner 2025 */}
            <div className="group bg-white rounded-lg p-6 shadow-lg border border-gray-200 text-center cursor-pointer transition-all duration-300 hover:shadow-xl h-[450px] flex flex-col justify-center relative overflow-hidden">
              <div className="group-hover:hidden flex flex-col justify-center h-full">
                <div className="mb-6">
                  <img
                    src="/assets/awards/footerawards/Cool-Tool-Award-2025-Image.jpg"
                    alt="EdTech Cool Tool Award Winner 2025"
                    className="w-80 h-80 mx-auto object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold text-kibo-orange">EdTech Cool Tool Award Winner 2025</h3>
              </div>
              <div className="hidden group-hover:flex flex-col justify-center h-full p-2 overflow-y-auto">
                <h3 className="text-lg font-bold text-kibo-orange mb-3">EdTech Cool Tool Award Winner 2025</h3>
                <p className="text-gray-600 text-xl leading-relaxed ">
                  <strong>The KIBO STEAM Explorer</strong> offering has been named as the Cool Tool Finalist in their EdTech Cool Tool Award in the <strong>Robotics (for learning, education) Solution</strong> category! The STEAM Explorer Packages offer a comprehensive coding and robotics solution for all PreK-5th graders in one bundle. The EdTech Awards recognize outstanding contributions in transforming education to enrich the lives of all learners.
                </p>
              </div>
            </div>

            {/* Award 2 - Nevada STEMList */}
            <div className="group bg-white rounded-lg p-6 shadow-lg border border-gray-200 text-center cursor-pointer transition-all duration-300 hover:shadow-xl h-[450px] flex flex-col justify-center relative overflow-hidden">
              <div className="group-hover:hidden flex flex-col justify-center h-full">
                <div className="mb-6">
                  <img
                    src="/assets/awards/footerawards/Nevada-STEMList.webp"
                    alt="Nevada STEMList of Recommended STEM Programs"
                    className="w-80 h-80 mx-auto object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold text-kibo-orange">Nevada STEMList of Recommended STEM Programs</h3>
              </div>
              <div className="hidden group-hover:flex flex-col justify-center h-full p-2 overflow-y-auto">
                <h3 className="text-lg font-bold text-kibo-orange mb-3">Nevada STEMList of Recommended STEM Programs</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  We are happy to announce that KIBO has been evaluated and listed as a <strong>Model product</strong> and included in Nevada's STEMList of Recommended STEM Programs from the Governor's Office of Science, Innovation and Technology (OSIT). This list is used by schools, teachers, school districts, the Nevada Department of Education, and grantors to make funding decisions. Inclusion on this list means <strong>KIBO embodies research-based attributes of high-quality STEM programming</strong>, as described in the Nevada STEMList Rubric and determined by OSIT's State-wide team of STEM-expert reviewers.
                </p>
              </div>
            </div>

            {/* Award 3 - Purdue University 2024 */}
            <div className="group bg-white rounded-lg p-6 shadow-lg border border-gray-200 text-center cursor-pointer transition-all duration-300 hover:shadow-xl h-[450px] flex flex-col justify-center relative overflow-hidden">
              <div className="group-hover:hidden flex flex-col justify-center h-full">
                <div className="mb-6">
                  <img
                    src="/assets/awards/footerawards/ENG-Gift-Guide-Seal_transparent-300x300.webp"
                    alt="Purdue University 2024 Inspire Engineering Gift Guide"
                    className="w-80 h-80 mx-auto object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold text-kibo-orange">Purdue University 2024 Inspire Engineering Gift Guide</h3>
              </div>
              <div className="hidden group-hover:flex flex-col justify-center h-full p-2 overflow-y-auto">
                <h3 className="text-lg font-bold text-kibo-orange mb-3">Purdue University 2024 Inspire Engineering Gift Guide</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  We are honored KIBO is again included in Purdue University's 2024 Engineering Gift Guide! The <strong>engineering-inspired holiday gifts encourage kids to design, build, code, play, and discover</strong>. See all the engaging gifts evaluated and reviewed! Our reviewer stated: "<strong>KIBO offers endless enjoyment and learning opportunities for budding programmers.</strong> After being in our top five last year, the KIBO 15 Robot Kit certainly deserves a spot on our list again this year! Overall, this kit fosters strong programming skills and lays the foundation for understanding coding algorithms in the future."
                </p>
              </div>
            </div>

            {/* Award 4 - The 2024 EdTech Cool Tool Awards */}
            <div className="group bg-white rounded-lg p-6 shadow-lg border border-gray-200 text-center cursor-pointer transition-all duration-300 hover:shadow-xl h-[450px] flex flex-col justify-center relative overflow-hidden">
              <div className="group-hover:hidden flex flex-col justify-center h-full">
                <div className="mb-6">
                  <img
                    src="/assets/awards/footerawards/tsp-CT-winner-24.jpg"
                    alt="The 2024 EdTech Cool Tool Awards"
                    className="w-80 h-80 mx-auto object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold text-kibo-orange">EdTech Cool Tool Award Winner 2024</h3>
              </div>
              <div className="hidden group-hover:flex flex-col justify-center h-full p-2 overflow-y-auto">
                <h3 className="text-lg font-bold text-kibo-orange mb-3">EdTech Cool Tool Award Winner 2024</h3>
                <p className="text-gray-600 text-xl leading-relaxed">
                  <strong>KIBO's AI instruction and curriculum for young learners</strong> for Early Learners has been named as the Cool Tool Winner in their EdTech Cool Tool Award in the <strong>Robotics (for learning, education) Solution</strong> category! The EdTech Awards is the largest recognition program for education technology. The EdTech Awards recognize outstanding contributions in transforming education to enrich the lives of all learners.
                </p>
              </div>
            </div>

            {/* Award 5 - Best of ISTE 2024 */}
            <div className="group bg-white rounded-lg p-6 shadow-lg border border-gray-200 text-center cursor-pointer transition-all duration-300 hover:shadow-xl h-[450px] flex flex-col justify-center relative overflow-hidden">
              <div className="group-hover:hidden flex flex-col justify-center h-full">
                <div className="mb-6">
                  <img
                    src="/assets/awards/footerawards/ISTEBOS_2024_Winner.webp"
                    alt="Best of ISTE 2024 Awards"
                    className="w-80 h-80 mx-auto object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold text-kibo-orange">Best of ISTE 2024 Awards</h3>
              </div>
              <div className="hidden group-hover:flex flex-col justify-center h-full p-2 overflow-y-auto">
                <h3 className="text-lg font-bold text-kibo-orange mb-3">Best of ISTE 2024 Awards</h3>
                <p className="text-gray-600 text-xl leading-relaxed">
                  We are honored to have won <strong>Tech & Learning's Best in Show Award at ISTELIVE 24</strong>! Tech & Learning has recognized the KIBO robot and its AI curriculum <em>Thinking with KIBO: Introducing Artificial Intelligence in Early Grades</em> as one of the best products at the show supporting innovation in education.
                </p>
              </div>
            </div>

            {/* Award 6 - 2024 FETC Pitchfest Winner */}
            <div className="group bg-white rounded-lg p-6 shadow-lg border border-gray-200 text-center cursor-pointer transition-all duration-300 hover:shadow-xl h-[450px] flex flex-col justify-center relative overflow-hidden">
              <div className="group-hover:hidden flex flex-col justify-center h-full">
                <div className="mb-6">
                  <img
                    src="/assets/awards/footerawards/Winner_Early_Childhood_Learning_Badge_Large.jpg"
                    alt="2024 FETC Pitchfest Winner"
                    className="w-80 h-80 mx-auto object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold text-kibo-orange">2024 FETC Pitchfest Winner</h3>
              </div>
              <div className="hidden group-hover:flex flex-col justify-center h-full p-2 overflow-y-auto">
                <h3 className="text-lg font-bold text-kibo-orange mb-3">2024 FETC Pitchfest Finalist</h3>
                <p className="text-gray-600 text-xl leading-relaxed">
                  KIBO has been named as the <strong>winner in the FETC's Pitchfest in the Early Childhood Learning Category</strong>! Jason Innes, our Director of Curriculum, Training, and Product Management presented the KinderLab story and the benefits of using the screen-free KIBO robot with PreK and elementary learners to a panel of district administrators, teachers, parents, investors, and industry experts during FETC 2024. <strong>Watch the Pitchfest presentation and see for yourself the importance of KIBO for early learners.</strong>
                </p>
              </div>
            </div>

            {/* Award 7 - 2024 FETC Top EdTech Product Finalist */}
            <div className="group bg-white rounded-lg p-6 shadow-lg border border-gray-200 text-center cursor-pointer transition-all duration-300 hover:shadow-xl h-[450px] flex flex-col justify-center relative overflow-hidden">
              <div className="group-hover:hidden flex flex-col justify-center h-full">
                <div className="mb-6">
                  <img
                    src="/assets/awards/footerawards/FETC-Top-Ed-Tech-Product-Finalist-Award.jpeg"
                    alt="2024 FETC Top EdTech Product Finalist"
                    className="w-80 h-80 mx-auto object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold text-kibo-orange">2024 FETC Top EdTech Product Finalist</h3>
              </div>
              <div className="hidden group-hover:flex flex-col justify-center h-full p-2 overflow-y-auto">
                <h3 className="text-lg font-bold text-kibo-orange mb-3">2024 FETC Top EdTech Product Finalist</h3>
                <p className="text-gray-600 text-xl leading-relaxed">
                  We are honored to be finalist for District Administration's <strong>2024 Top EdTech Products in the Curriculum & Instructional Technology category for "Thinking with KIBO: Early Elementary AI Curriculum"</strong>! This award highlights innovative & impactful edtech K-12 solutions.
                </p>
              </div>
            </div>

            {/* Award 8 - The 2023 EdTech Cool Tool Awards */}
            <div className="group bg-white rounded-lg p-6 shadow-lg border border-gray-200 text-center cursor-pointer transition-all duration-300 hover:shadow-xl h-[450px] flex flex-col justify-center relative overflow-hidden">
              <div className="group-hover:hidden flex flex-col justify-center h-full">
                <div className="mb-6">
                  <img
                    src="/assets/awards/footerawards/edtechAward-CT-win2023.jpg"
                    alt="The 2023 EdTech Cool Tool Awards"
                    className="w-80 h-80 mx-auto object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold text-kibo-orange">The 2023 EdTech Cool Tool Awards</h3>
              </div>
              <div className="hidden group-hover:flex flex-col justify-center h-full p-2 overflow-y-auto">
                <h3 className="text-lg font-bold text-kibo-orange mb-3">The 2023 EdTech Cool Tool Awards</h3>
                <p className="text-gray-600 text-xl leading-relaxed">
                  KIBO has been named as a Cool Tool Winner in their EdTech Cool Tool Award in the <strong>Robotics (for learning, education) Solution</strong> category! The EdTech Awards is the largest recognition program in all of education technology. The EdTech Awards from EdTech Digest recognizes outstanding contributions in transforming education to enrich the lives of all learners. We are thrilled to be named as the winner of this award that includes innovators, leaders, and trendsetters in K-12, higher ed, and workforce learning; staying connected, productive, and persistent.
                </p>
              </div>
            </div>

            {/* Award 9 - Purdue University 2023 */}
            <div className="group bg-white rounded-lg p-6 shadow-lg border border-gray-200 text-center cursor-pointer transition-all duration-300 hover:shadow-xl h-[450px] flex flex-col justify-center relative overflow-hidden">
              <div className="group-hover:hidden flex flex-col justify-center h-full">
                <div className="mb-6">
                  <img
                    src="/assets/awards/footerawards/ENG-Gift-Guide-Seal_aj.webp"
                    alt="Purdue University 2023 Inspire Engineering Gift Guide"
                    className="w-80 h-80 mx-auto object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold text-kibo-orange">Purdue University 2023 Inspire Engineering Gift Guide</h3>
              </div>
              <div className="hidden group-hover:flex flex-col justify-center h-full p-2 overflow-y-auto">
                <h3 className="text-lg font-bold text-kibo-orange mb-3">Purdue University 2023 Inspire Engineering Gift Guide</h3>
                <p className="text-gray-600 text-xl leading-relaxed">
                  KIBO has been vetted, reviewed and included in the 2023 Inspire Purdue University College of Engineering Gift Guide! This guide includes <strong>only extensively reviewed products to ensure thoughtful, engineering-inspired holiday presents that encourage kids to design, build, code, play, and discover</strong>. KIBO is featured as a top 5 reviewed gift.
                </p>
              </div>
            </div>

            {/* Award 10 - The 2021 EdTech Awards */}
            <div className="group bg-white rounded-lg p-6 shadow-lg border border-gray-200 text-center cursor-pointer transition-all duration-300 hover:shadow-xl h-[450px] flex flex-col justify-center relative overflow-hidden">
              <div className="group-hover:hidden flex flex-col justify-center h-full">
                <div className="mb-6">
                  <img
                    src="/assets/awards/footerawards/2021-fin-white-CT.webp"
                    alt="The 2021 EdTech Awards"
                    className="w-80 h-80 mx-auto object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold text-kibo-orange">The 2021 EdTech Awards</h3>
              </div>
              <div className="hidden group-hover:flex flex-col justify-center h-full p-2 overflow-y-auto">
                <h3 className="text-lg font-bold text-kibo-orange mb-3">The 2021 EdTech Awards</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  KIBO was once again named as a finalist in their EdTech Cool Tool Award in the <strong>Robotics (for learning, education) Solution</strong> category! The EdTech Awards is the largest recognition program in all of education technology. The EdTech Awards from EdTech Digest recognizes outstanding contributions in transforming education through technology to enrich the lives of learners everywhere. We are thrilled to be a finalist in this award that includes innovators, leaders, and trendsetters in K-12, higher ed, and workforce learning; staying connected, productive, persistent, and getting us closer despite the challenges of the last year.
                </p>
              </div>
            </div>

            {/* Award 11 - The 2020 Academics' Choice Awards */}
            <div className="group bg-white rounded-lg p-6 shadow-lg border border-gray-200 text-center cursor-pointer transition-all duration-300 hover:shadow-xl h-[450px] flex flex-col justify-center relative overflow-hidden">
              <div className="group-hover:hidden flex flex-col justify-center h-full">
                <div className="mb-6">
                  <img
                    src="/assets/awards/footerawards/award-brain-toy-lg-trans.webp"
                    alt="The 2020 Academics' Choice Awards"
                    className="w-80 h-80 mx-auto object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold text-kibo-orange">The 2020 Academics' Choice Awards</h3>
              </div>
              <div className="hidden group-hover:flex flex-col justify-center h-full p-2 overflow-y-auto">
                <h3 className="text-lg font-bold text-kibo-orange mb-3">The 2020 Academics' Choice Awards</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  We are thrilled KIBO was awarded as one of the winners of the <strong>Fall 2020 Academics' Choice Brain Toy Award</strong>. The Academics' Choice Awards and its seal of excellence are recognized worldwide by consumers and educational institutions and is given to the best mind-building media and toys, recognizing effective learning tools that stimulate the mind and develop higher order thinking skills. One of the reviewers stated, "<em>KinderLab has created a wonderful answer to the need for early age STEAM learning. KIBO was designed for children to build and code without requiring screen time. This element really sets KIBO apart from the rest.</em>"
                </p>
              </div>
            </div>

            {/* Award 12 - The 2020 EdTech Awards */}
            <div className="group bg-white rounded-lg p-6 shadow-lg border border-gray-200 text-center cursor-pointer transition-all duration-300 hover:shadow-xl h-[450px] flex flex-col justify-center relative overflow-hidden">
              <div className="group-hover:hidden flex flex-col justify-center h-full">
                <div className="mb-6">
                  <img
                    src="/assets/awards/footerawards/EdTechDigest_CoolTool-FINALIST-2020.webp"
                    alt="The 2020 EdTech Awards"
                    className="w-80 h-80 mx-auto object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold text-kibo-orange">The 2020 EdTech Awards</h3>
              </div>
              <div className="hidden group-hover:flex flex-col justify-center h-full p-2 overflow-y-auto">
                <h3 className="text-lg font-bold text-kibo-orange mb-3">The 2020 EdTech Awards</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  The EdTech Awards, celebrating its 10th anniversary, is the largest recognition program in all of education technology, recognizing the biggest names in edtech. KIBO was named as a finalist in their EdTech Cool Tool Award in the <strong>Robotics (for learning, education) Solution</strong> category! This year's finalists and winners were narrowed from the larger field and judged based on various criteria, including: pedagogical workability, efficacy and results, support, clarity, value and potential. The EdTech Awards recognizes people in and around education for outstanding contributions in transforming education through technology to enrich the lives of learners everywhere.  Featuring edtech’s best and brightest, the annual program shines a spotlight on cool tools, inspiring leaders and innovative trendsetters across the K-12, Higher Education, and Skills and Workforce sectors. The EdTech Awards recognize people—and the products they produce and lives they shape.
                </p>
              </div>
            </div>

            {/* Award 13 - The 2019 Tech Edvocate Awards */}
            <div className="group bg-white rounded-lg p-6 shadow-lg border border-gray-200 text-center cursor-pointer transition-all duration-300 hover:shadow-xl h-[450px] flex flex-col justify-center relative overflow-hidden">
              <div className="group-hover:hidden flex flex-col justify-center h-full">
                <div className="mb-6">
                  <img
                    src="/assets/awards/footerawards/Seal-Finalist-Early-Childhood-App.jpg"
                    alt="The 2019 Tech Edvocate Awards"
                    className="w-80 h-80 mx-auto object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold text-kibo-orange">The 2019 Tech Edvocate Awards</h3>
              </div>
              <div className="hidden group-hover:flex flex-col justify-center h-full p-2 overflow-y-auto">
                <h3 className="text-lg font-bold text-kibo-orange mb-3">The 2019 Tech Edvocate Awards</h3>
                <p className="text-gray-600 text-xl leading-relaxed">
                  <strong>The 2019 Tech Edvocate Awards</strong> honors this year's top edtech companies, products, people and more. Nominees during the online voting period was used to gauge popularity, followed by the selection of finalists and winners by a panel comprised of two edtech thought leaders, two PreK-12 teachers, one college professor, two K-12 administrators, one college administrator and two PreK-12 parents. KIBO was selected as a finalist in the <strong>Best Early Childhood Education App or Tool</strong> category.
                </p>
              </div>
            </div>

            {/* Award 14 - The 2019 EdTech Awards */}
            <div className="group bg-white rounded-lg p-6 shadow-lg border border-gray-200 text-center cursor-pointer transition-all duration-300 hover:shadow-xl h-[450px] flex flex-col justify-center relative overflow-hidden">
              <div className="group-hover:hidden flex flex-col justify-center h-full">
                <div className="mb-6">
                  <img
                    src="/assets/awards/footerawards/EdTechDigest_CoolTool-FINALIST-2019.png"
                    alt="The 2019 EdTech Awards"
                    className="w-80 h-80 mx-auto object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold text-kibo-orange">The 2019 EdTech Awards</h3>
              </div>
              <div className="hidden group-hover:flex flex-col justify-center h-full p-2 overflow-y-auto">
                <h3 className="text-lg font-bold text-kibo-orange mb-3">The 2019 EdTech Awards</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  The EdTech Awards are the largest and most competitive program recognizing the biggest names in edtech, featuring the best and brightest. KIBO was named as a finalist in their EdTech Cool Tool Award in the <strong>Robotics (for learning, education) Solution</strong> category! This year's finalists and winners were narrowed from the larger field and judged based on various criteria, including: pedagogical workability, efficacy and results, support, clarity, value and potential. The EdTech Awards recognizes people in and around education for outstanding contributions in transforming education through technology to enrich the lives of learners everywhere. Featuring edtech’s best and brightest, the annual program shines a spotlight on cool tools, inspiring leaders and innovative trendsetters across the K-12, Higher Education, and Skills and Workforce sectors. The EdTech Awards recognize people—and the products they produce and lives they shape.
                </p>
              </div>
            </div>

            {/* Award 15 - ISTE 2019 Best of Show */}
            <div className="group bg-white rounded-lg p-6 shadow-lg border border-gray-200 text-center cursor-pointer transition-all duration-300 hover:shadow-xl h-[450px] flex flex-col justify-center relative overflow-hidden">
              <div className="group-hover:hidden flex flex-col justify-center h-full">
                <div className="mb-6">
                  <img
                    src="/assets/awards/footerawards/ISTE-BOS-2019-Winner.webp"
                    alt="ISTE 2019 Best of Show"
                    className="w-80 h-80 mx-auto object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold text-kibo-orange">ISTE 2019 Best of Show</h3>
              </div>
              <div className="hidden group-hover:flex flex-col justify-center h-full p-2 overflow-y-auto">
                <h3 className="text-lg font-bold text-kibo-orange mb-3">ISTE 2019 Best of Show</h3>
                <p className="text-gray-600 text-xl leading-relaxed">
                  <strong>Tech & Learning's ISTE Best in Show</strong> award program honors products at the annual ISTE conference. This year, KIBO was selected by an anonymous panel of educator judges, who visited us at the 2019 conference in Philadelphia. The judges evaluated areas such as quality and effectiveness, ease of use, cost, and creative use of technology. We are excited to receive this honor!
                </p>
              </div>
            </div>

            {/* Award 16 - The 2019 Academics' Choice Awards */}
            <div className="group bg-white rounded-lg p-6 shadow-lg border border-gray-200 text-center cursor-pointer transition-all duration-300 hover:shadow-xl h-[450px] flex flex-col justify-center relative overflow-hidden">
              <div className="group-hover:hidden flex flex-col justify-center h-full">
                <div className="mb-6">
                  <img
                    src="/assets/awards/footerawards/award-brain-toy-lg-trans.webp"
                    alt="The 2019 Academics' Choice Awards"
                    className="w-80 h-80 mx-auto object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold text-kibo-orange">The 2019 Academics' Choice Awards</h3>
              </div>
              <div className="hidden group-hover:flex flex-col justify-center h-full p-2 overflow-y-auto">
                <h3 className="text-lg font-bold text-kibo-orange mb-3">The 2019 Academics' Choice Awards</h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  We are thrilled to learn that KIBO was awarded as one of the winners of the <strong>Spring 2019 Academics' Choice Brain Toy Award</strong>. The Academics' Choice Awards bring recognition to the best thinking-based products in the industry. Products are reviewed and evaluated based in constructivist learning theory. KIBO was determined by their academic board and evaluation teams to have robust educational value and strengthen cognitive skills. KIBO was evaluated by a panel of product-appropriate judges, including parents, educators, scientists, artists, doctors, nurses, librarians, students and children. When assessing overall winners, these attributes, must be met: Higher-Order Thinking Skills (HOTS), General Thinking Skills and Standards, Character Building, Engagement, Ease of First/Simultaneous/Repeat Use, Quality/Durability, and Innovative and Unique.
                </p>
              </div>
            </div>

            {/* Award 17 - Parents Choice Award */}
            <div className="group bg-white rounded-lg p-6 shadow-lg border border-gray-200 text-center cursor-pointer transition-all duration-300 hover:shadow-xl h-[450px] flex flex-col justify-center relative overflow-hidden">
              <div className="group-hover:hidden flex flex-col justify-center h-full">
                <div className="mb-6">
                  <img
                    src="/assets/awards/footerawards/gold_web.jpeg"
                    alt="Parents Choice Award"
                    className="w-80 h-80 mx-auto object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold text-kibo-orange">Parents Choice Award</h3>
              </div>
              <div className="hidden group-hover:flex flex-col justify-center h-full p-2 overflow-y-auto">
                <h3 className="text-lg font-bold text-kibo-orange mb-3">Parents Choice Award</h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  KIBO has been named a GOLD winner of the 2017 Parents' Choice Award in the <strong>Toy category.</strong> The Parents' Choice Gold Award recognizes the "highest-quality, most appealing products in their genre" and recognized KIBO as a fun, imaginative and easy way for young children to learn 21st century STEAM concepts. The Parents' Choice Awards' reviewer, Sharon Heuscher affirms, "<em>Children simply connect the blocks in the desired sequence, scan the sequence with the [robot] base's infrared sensor, and off the robot goes. This is a simple, hands-on, and multi-modal way for children to learn the basics of coding: sequencing, analytic thinking, problem-solving, and more. It's all hands-on. And that's playful learning at its best.</em>"
                </p>
              </div>
            </div>

            {/* Award 18 - The 2018 Tech Edvocate Awards */}
            <div className="group bg-white rounded-lg p-6 shadow-lg border border-gray-200 text-center cursor-pointer transition-all duration-300 hover:shadow-xl h-[450px] flex flex-col justify-center relative overflow-hidden">
              <div className="group-hover:hidden flex flex-col justify-center h-full">
                <div className="mb-6">
                  <img
                    src="/assets/awards/footerawards/Seal-Finalist-Early-Childhood-App-2018.jpeg"
                    alt="The 2018 Tech Edvocate Awards"
                    className="w-80 h-80 mx-auto object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold text-kibo-orange">The 2018 Tech Edvocate Awards</h3>
              </div>
              <div className="hidden group-hover:flex flex-col justify-center h-full p-2 overflow-y-auto">
                <h3 className="text-lg font-bold text-kibo-orange mb-3">The 2018 Tech Edvocate Awards</h3>
                <p className="text-gray-600 text-xl leading-relaxed">
                  The 2018 Edvocate Awards chose KIBO as one of the finalists for their <strong> Best Early Childhood Education App or Tool Category</strong>. KIBO was selected by a panel comprised of edtech thought leaders, PreK-12 teachers, K-12 administrators, and PreK-12 parents. The Tech Edvocate Awards honors the best that edtech has to offer by recognizing outstanding companies, people, and products.
                </p>
              </div>
            </div>

            {/* Award 19 - The 2018 Seriously STEM Awards */}
            <div className="group bg-white rounded-lg p-6 shadow-lg border border-gray-200 text-center cursor-pointer transition-all duration-300 hover:shadow-xl h-[450px] flex flex-col justify-center relative overflow-hidden">
              <div className="group-hover:hidden flex flex-col justify-center h-full">
                <div className="mb-6">
                  <img
                    src="/assets/awards/footerawards/SeriouslyStemWebBadge2018.jpeg"
                    alt="The 2018 Seriously STEM Awards"
                    className="w-80 h-80 mx-auto object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold text-kibo-orange">The 2018 Seriously STEM Awards</h3>
              </div>
              <div className="hidden group-hover:flex flex-col justify-center h-full p-2 overflow-y-auto">
                <h3 className="text-lg font-bold text-kibo-orange mb-3">The 2018 Seriously STEM Awards</h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  The inaugural Seriously STEM Awards was created to review and evaluate STEM toys for kids and to help offer valuable information to parents who understand the benefits of their kids’ learning STEM but who need help making the right STEM product choices. The Seriously STEM Awards chose KIBO as their winner for their <strong>Technology/Preschool Category</strong>. KIBO was selected by a panel of independent judges — educators, industry play experts and toy reviewers — with real expertise specifically in children and STEM. Criteria included whether the toy taught skills such as critical thinking and problem solving, inspired creativity, included hands-on experiences and was targeted to the appropriate age range, among other considerations.
                </p>
              </div>
            </div>

            {/* Award 20 - The EdTech Awards 2018 */}
            <div className="group bg-white rounded-lg p-6 shadow-lg border border-gray-200 text-center cursor-pointer transition-all duration-300 hover:shadow-xl h-[450px] flex flex-col justify-center relative overflow-hidden">
              <div className="group-hover:hidden flex flex-col justify-center h-full">
                <div className="mb-6">
                  <img
                    src="/assets/awards/footerawards/ED-TECH-Awards-Horizontal-RGB-1.webp"
                    alt="The EdTech Awards 2018"
                    className="w-80 h-80 mx-auto object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold text-kibo-orange">The EdTech Awards 2018</h3>
              </div>
              <div className="hidden group-hover:flex flex-col justify-center h-full p-2 overflow-y-auto">
                <h3 className="text-lg font-bold text-kibo-orange mb-3">The EdTech Awards 2018</h3>
                <p className="text-gray-600 text-xl leading-relaxed">
                  KIBO has listed as a finalist in the <strong>Robotics (for learning, education) Solution category </strong> of The EdTech Awards 2018! The awards recognizes innovators, leaders, and trendsetters in educational technology and honors educators and supporting technologists who are shaping the future. We are thrilled to be included in such company and being one of the companies to be recognized, acknowledged, honored, and celebrated as one of the biggest names in edtech, shaping the future of edtech.
                </p>
              </div>
            </div>

            {/* Award 21 - Tutora Educational Awards 2017 */}
            <div className="group bg-white rounded-lg p-6 shadow-lg border border-gray-200 text-center cursor-pointer transition-all duration-300 hover:shadow-xl h-[450px] flex flex-col justify-center relative overflow-hidden">
              <div className="group-hover:hidden flex flex-col justify-center h-full">
                <div className="mb-6">
                  <img
                    src="/assets/awards/footerawards/Best-Educational-Gifts-Badge.webp"
                    alt="Tutora Educational Awards 2017"
                    className="w-80 h-80 mx-auto object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold text-kibo-orange">Tutora Educational Awards 2017</h3>
              </div>
              <div className="hidden group-hover:flex flex-col justify-center h-full p-2 overflow-y-auto">
                <h3 className="text-lg font-bold text-kibo-orange mb-3">Tutora Educational Awards 2017</h3>
                <p className="text-gray-600 text-xl leading-relaxed">
                  Tutora honored KIBO as one of the best educational products of the year. "<em>This is the perfect kit for children who love art and creativity. Not only do you get to learn programming, you also get to build and decorate your robot.</em> With no need to use any apps or websites to code your robot, this is also a great kit for parents who like to keep their kids screen time at a minimum. Programming is done with the amazing programming blocks and helps kids learn all the concepts of coding and creating sequences."
                </p>
              </div>
            </div>

            {/* Award 18 - The 2018 Tech Edvocate Awards */}
            <div className="group bg-white rounded-lg p-6 shadow-lg border border-gray-200 text-center cursor-pointer transition-all duration-300 hover:shadow-xl h-[450px] flex flex-col justify-center relative overflow-hidden">
              <div className="group-hover:hidden flex flex-col justify-center h-full">
                <div className="mb-6">
                  <img
                    src="/assets/awards/footerawards/edvocate-Awards-Finalist-Seal.webp"
                    alt="The 2017 Tech Edvocate Awards"
                    className="w-80 h-80 mx-auto object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold text-kibo-orange">The 2017 Tech Edvocate Awards</h3>
              </div>
              <div className="hidden group-hover:flex flex-col justify-center h-full p-2 overflow-y-auto">
                <h3 className="text-lg font-bold text-kibo-orange mb-3">The 2017 Tech Edvocate Awards</h3>
                <p className="text-gray-600 text-xl leading-relaxed">
                  The 2017 Edvocate Awards honors educational innovations that transform the way people learn and how educators teach. KIBO was selected as a finalist in the <strong>Best Early Childhood Education App or Tool Category</strong>. The finalists and winners were selected by a panel comprised of two edtech thought leaders, two PreK-12 teachers, one college professor, two K-12 administrators, one college administrator and two PreK-12 parents.
                </p>
              </div>
            </div>




          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Awards;
