import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Testimonials = () => {
  return (
    <div className="flex flex-col min-h-screen bg-orange-50">
      <Header />
      <main className="flex-grow">
        {/* --- Customer Testimonials Banner Section --- */}
        <div className="bg-gradient-to-r from-kibo-purple to-kibo-orange overflow-hidden">
          <div className="container mx-auto px-4 flex items-center h-64 overflow-hidden">
            <div className="w-2/3">
              <h2 className="text-3xl font-bold text-white mb-4">KIBO Reviews & Testimonials</h2>
              <p className="text-white/90 mb-6">
                We love hearing KIBO reviews from our great customers! Check out the Experiences section for lots of first-hand, real-world success stories with KIBO in the classroom and at home!
              </p>
            </div>
            <div className="w-1/3 flex justify-end items-center h-full">
              <img src="/assets/testimonials/teachers-768x615.jpg" alt="Teachers with KIBO" className="max-h-[90%] w-[60%] object-contain rounded-lg shadow-lg" />
            </div>
          </div>
        </div>

        {/* Section 1: Some of Our Customers - Title */}
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-kibo-purple">Some of Our Customers</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">

            </p>
          </div>
        </div>

        {/* Customer logos carousel - Full width */}
        <div className="mb-16">
          <div className="relative overflow-hidden w-full">
            <div className="flex animate-scroll gap-16">
              {/* First set of logos */}
              <div className="flex-shrink-0 w-32 h-24 flex items-center justify-center">
                <img src="/assets/testimonials/mos.webp" alt="Museum of Science" className="max-w-full max-h-full object-contain" />
              </div>
              <div className="flex-shrink-0 w-32 h-24 flex items-center justify-center">
                <img src="/assets/testimonials/jcds.webp" alt="JCDS" className="max-w-full max-h-full object-contain" />
              </div>
              <div className="flex-shrink-0 w-32 h-24 flex items-center justify-center">
                <img src="/assets/testimonials/edmonton-csb.webp" alt="Edmonton Catholic Schools" className="max-w-full max-h-full object-contain" />
              </div>
              <div className="flex-shrink-0 w-32 h-24 flex items-center justify-center">
                <img src="/assets/testimonials/nyc-doe.webp" alt="NYC Department of Education" className="max-w-full max-h-full object-contain" />
              </div>
              <div className="flex-shrink-0 w-32 h-24 flex items-center justify-center">
                <img src="/assets/testimonials/brookwood-logo.webp" alt="Brookwood School" className="max-w-full max-h-full object-contain" />
              </div>
              <div className="flex-shrink-0 w-32 h-24 flex items-center justify-center">
                <img src="/assets/testimonials/cpsd.jpg" alt="Cambridge Public School District" className="max-w-full max-h-full object-contain" />
              </div>
              <div className="flex-shrink-0 w-32 h-24 flex items-center justify-center">
                <img src="/assets/testimonials/desoto-isd.jpg" alt="DeSoto ISD" className="max-w-full max-h-full object-contain" />
              </div>
              <div className="flex-shrink-0 w-32 h-24 flex items-center justify-center">
                <img src="/assets/testimonials/east-baton-rouge.jpg" alt="East Baton Rouge" className="max-w-full max-h-full object-contain" />
              </div>
              <div className="flex-shrink-0 w-32 h-24 flex items-center justify-center">
                <img src="/assets/testimonials/friends-seminary.jpg" alt="Friends Seminary" className="max-w-full max-h-full object-contain" />
              </div>
              <div className="flex-shrink-0 w-32 h-24 flex items-center justify-center">
                <img src="/assets/testimonials/ottawa-csb.jpg" alt="Ottawa Catholic School Board" className="max-w-full max-h-full object-contain" />
              </div>
              <div className="flex-shrink-0 w-32 h-24 flex items-center justify-center">
                <img src="/assets/testimonials/collegi-montserrat-3.webp" alt="Collegi Montserrat" className="max-w-full max-h-full object-contain" />
              </div>

              {/* Duplicate set for seamless loop */}
              <div className="flex-shrink-0 w-32 h-24 flex items-center justify-center">
                <img src="/assets/testimonials/mos.webp" alt="Museum of Science" className="max-w-full max-h-full object-contain" />
              </div>
              <div className="flex-shrink-0 w-32 h-24 flex items-center justify-center">
                <img src="/assets/testimonials/jcds.webp" alt="JCDS" className="max-w-full max-h-full object-contain" />
              </div>
              <div className="flex-shrink-0 w-32 h-24 flex items-center justify-center">
                <img src="/assets/testimonials/edmonton-csb.webp" alt="Edmonton Catholic Schools" className="max-w-full max-h-full object-contain" />
              </div>
              <div className="flex-shrink-0 w-32 h-24 flex items-center justify-center">
                <img src="/assets/testimonials/nyc-doe.webp" alt="NYC Department of Education" className="max-w-full max-h-full object-contain" />
              </div>
              <div className="flex-shrink-0 w-32 h-24 flex items-center justify-center">
                <img src="/assets/testimonials/brookwood-logo.webp" alt="Brookwood School" className="max-w-full max-h-full object-contain" />
              </div>
              <div className="flex-shrink-0 w-32 h-24 flex items-center justify-center">
                <img src="/assets/testimonials/cpsd.jpg" alt="Cambridge Public School District" className="max-w-full max-h-full object-contain" />
              </div>
              <div className="flex-shrink-0 w-32 h-24 flex items-center justify-center">
                <img src="/assets/testimonials/desoto-isd.jpg" alt="DeSoto ISD" className="max-w-full max-h-full object-contain" />
              </div>
              <div className="flex-shrink-0 w-32 h-24 flex items-center justify-center">
                <img src="/assets/testimonials/east-baton-rouge.jpg" alt="East Baton Rouge" className="max-w-full max-h-full object-contain" />
              </div>
              <div className="flex-shrink-0 w-32 h-24 flex items-center justify-center">
                <img src="/assets/testimonials/friends-seminary.jpg" alt="Friends Seminary" className="max-w-full max-h-full object-contain" />
              </div>
              <div className="flex-shrink-0 w-32 h-24 flex items-center justify-center">
                <img src="/assets/testimonials/ottawa-csb.jpg" alt="Ottawa Catholic School Board" className="max-w-full max-h-full object-contain" />
              </div>
              <div className="flex-shrink-0 w-32 h-24 flex items-center justify-center">
                <img src="/assets/testimonials/collegi-montserrat-3.webp" alt="Collegi Montserrat" className="max-w-full max-h-full object-contain" />
              </div>
            </div>
          </div>
        </div>

        {/* --- Testimonials Section --- */}
        <div className="container mx-auto px-4 py-8">
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-kibo-purple">What Our Customers Say</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">

              </p>
            </div>

            <div className="space-y-8">
              {/* Testimonial 1 */}
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <div className="relative">
                  <div className="text-6xl text-gray-300 absolute -top-4 -left-2">"</div>
                  <p className="text-gray-600 leading-relaxed pl-8">
                    In applying for a Maryland State Department of Education grant specifically for robotics instruction, I drew heavily on KinderLab Robotics' research regarding the benefits of play and creativity with KIBO. The work KinderLab Robotics has already done to map their KIBO curriculum to CSTA Standards provided a framework for aligning my proposal with MSDE standards.
                  </p>
                  <div className="mt-4 pl-8">
                    <p className="font-semibold text-kibo-purple">Jade de Winter, Executive Director</p>
                    <p className="text-sm text-white bg-kibo-purple px-3 py-1 rounded-full inline-block mt-1">Big Learning Science & Engineering</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <div className="relative">
                  <div className="text-6xl text-gray-300 absolute -top-4 -left-2">"</div>
                  <p className="text-gray-600 leading-relaxed pl-8">
                    KinderLab has created a wonderful answer to the need for early age STEAM learning. KIBO was designed for children to build and code without requiring screen time. This element really sets KIBO apart from the rest. KIBO sparked a great conversation that led my boy into associating programming, engineering, and technology with not only KIBO, but everything around him. This robot would be a wonderful addition to any STEAM classroom or a child's bedroom.
                  </p>
                  <div className="mt-4 pl-8">
                    <p className="font-semibold text-kibo-purple">Academics' Choice Evaluator</p>
                    <p className="text-sm text-white bg-kibo-purple px-3 py-1 rounded-full inline-block mt-1">Academics' Choice</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <div className="relative">
                  <div className="text-6xl text-gray-300 absolute -top-4 -left-2">"</div>
                  <p className="text-gray-600 leading-relaxed pl-8 text-xl italic">
                    Look, look what i did. I made it myself!
                  </p>
                  <div className="mt-4 pl-8">
                    <p className="font-semibold text-kibo-purple">4-Year Old Student</p>
                    <p className="text-sm text-white bg-kibo-purple px-3 py-1 rounded-full inline-block mt-1">Preschool</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 4 */}
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <div className="relative">
                  <div className="text-6xl text-gray-300 absolute -top-4 -left-2">"</div>
                  <p className="text-gray-600 leading-relaxed pl-8">
                    We are totally in love with the KIBOs and all the potential learning they hold. I keep thinking of the extensive thought that went into designing them and how that is paying off in so many ways for all the children who use them.
                  </p>
                  <div className="mt-4 pl-8">
                    <p className="font-semibold text-kibo-purple">Robin Ricketts, Computational Thinking & Robotics Teacher</p>
                    <p className="text-sm text-white bg-kibo-purple px-3 py-1 rounded-full inline-block mt-1">The Steward School, Richmond VA</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 5 */}
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <div className="relative">
                  <div className="text-6xl text-gray-300 absolute -top-4 -left-2">"</div>
                  <p className="text-gray-600 leading-relaxed pl-8">
                    Some of the children mastered scanning by themselves. All of the parents were so impressed, and daily children were heard on more than one occasion saying, "This is the best camp I've ever been to!!" I had lots of great comments from parents, too.
                  </p>
                  <div className="mt-4 pl-8">
                    <p className="font-semibold text-kibo-purple">Nancy Kincaid, Preschool Teacher</p>
                    <p className="text-sm text-white bg-kibo-purple px-3 py-1 rounded-full inline-block mt-1">Suncrest Primary School, Morgantown WV</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 6 */}
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <div className="relative">
                  <div className="text-6xl text-gray-300 absolute -top-4 -left-2">"</div>
                  <p className="text-gray-600 leading-relaxed pl-8 text-xl italic">
                    My daughter loved it because she and her friends created a puppet show and the puppets sang and danced.
                  </p>
                  <div className="mt-4 pl-8">
                    <p className="font-semibold text-kibo-purple">Parent</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 7 */}
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <div className="relative">
                  <div className="text-6xl text-gray-300 absolute -top-4 -left-2">"</div>
                  <p className="text-gray-600 leading-relaxed pl-8">
                    I highly recommend this STEAM robot. The coding adventures teach cooperation, coordination, reading, problem-solving, logic, organization, and much more! It would be a valuable asset to any classroom.
                  </p>
                  <div className="mt-4 pl-8">
                    <p className="font-semibold text-kibo-purple">Academics' Choice Evaluator</p>
                    <p className="text-sm text-white bg-kibo-purple px-3 py-1 rounded-full inline-block mt-1">Academics' Choice</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 8 */}
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <div className="relative">
                  <div className="text-6xl text-gray-300 absolute -top-4 -left-2">"</div>
                  <p className="text-gray-600 leading-relaxed pl-8">
                    KIBO supports learning in many ways at St. Pius X. Students use KIBO as a tool to think with, as a platform to make and invent, and as a medium to share the knowledge and understandings they have constructed.
                  </p>
                  <div className="mt-4 pl-8">
                    <p className="font-semibold text-kibo-purple">Cory Roffey, Learning Coach/Technology Coach</p>
                    <p className="text-sm text-white bg-kibo-purple px-3 py-1 rounded-full inline-block mt-1">St. Pius X Elementary School, Edmonton Catholic Schools, Edmonton, Canada</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 9 */}
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <div className="relative">
                  <div className="text-6xl text-gray-300 absolute -top-4 -left-2">"</div>
                  <p className="text-gray-600 leading-relaxed pl-8 text-xl italic">
                    When my son tried it, I was just blown away with the kinds of things he was able to do.
                  </p>
                  <div className="mt-4 pl-8">
                    <p className="font-semibold text-kibo-purple">Parent</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 10 */}
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <div className="relative">
                  <div className="text-6xl text-gray-300 absolute -top-4 -left-2">"</div>
                  <p className="text-gray-600 leading-relaxed pl-8">
                    Our KIBOs take on some important jobs. In one lesson, students program them to rescue baby bears that are lost in deep dark caves. (Our caves are constructed with old cardboard boxes, the imagination of the students dresses them up.) They love to train KIBO to navigate the twists and turns of our caves. Most of all, they love programming with the light sensor and the light – if the cave gets dark and scary, then KIBO should turn on her flashlight!
                  </p>
                  <div className="mt-4 pl-8">
                    <p className="font-semibold text-kibo-purple">Brian Sulkow, Teacher and Curriculum Developer</p>
                    <p className="text-sm text-white bg-kibo-purple px-3 py-1 rounded-full inline-block mt-1">New York City Public School System, NY</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 11 */}
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <div className="relative">
                  <div className="text-6xl text-gray-300 absolute -top-4 -left-2">"</div>
                  <p className="text-gray-600 leading-relaxed pl-8">
                    The students in my class couldn't wait to get their hands on the coding blocks that would make their KIBO robots go. The lessons had a true spirit of experimentation – there were no mistakes, just lots of trials, observations, and cheers to get back to work! I wouldn't be surprised if the future programmers and scientists among them remember this experience as one that sparked their interest in coding and creative problem solving.
                  </p>
                  <div className="mt-4 pl-8">
                    <p className="font-semibold text-kibo-purple">Keri Goldberg, First-Grade Teacher</p>
                    <p className="text-sm text-white bg-kibo-purple px-3 py-1 rounded-full inline-block mt-1">PS 321, NYC</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 12 */}
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <div className="relative">
                  <div className="text-6xl text-gray-300 absolute -top-4 -left-2">"</div>
                  <p className="text-gray-600 leading-relaxed pl-8">
                    Using KIBO is one of the funnest and best experiences I have ever had with kids. The excitement, the total engagement is unlike anything I have ever seen before. Our young students loved learning something new, loved the challenges they faced figuring out how KIBO works and the things they might be capable of making it do. Oh, the possibilities...! I truly cannot wait to introduce KIBO to our next four pilot classes and to see where it takes us.
                  </p>
                  <div className="mt-4 pl-8">
                    <p className="font-semibold text-kibo-purple">Randie Groden, Teacher Librarian</p>
                    <p className="text-sm text-white bg-kibo-purple px-3 py-1 rounded-full inline-block mt-1">The Memorial School, Medfield, MA</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 13 */}
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <div className="relative">
                  <div className="text-6xl text-gray-300 absolute -top-4 -left-2">"</div>
                  <p className="text-gray-600 leading-relaxed pl-8">
                    One of the most impressive and inspiring things about KIBO is that it encourages youngsters to use robotics as way to express themselves; as a sort of art medium. The system is designed to easily accommodate and encourage the integration of outside materials: pieces of cardboard, bits of repurposed plastic toys, pipe cleaners, whatever... Developing a KIBO robot this way, it can become a character, a surrogate actor, a playmate or partner in adventure, whatever kids' imaginations call for.
                  </p>
                  <div className="mt-4 pl-8">
                    <p className="font-semibold text-kibo-purple">Mark Gura, Editor</p>
                    <p className="text-sm text-white bg-kibo-purple px-3 py-1 rounded-full inline-block mt-1">EdTech Digest</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 14 */}
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <div className="relative">
                  <div className="text-6xl text-gray-300 absolute -top-4 -left-2">"</div>
                  <p className="text-gray-600 leading-relaxed pl-8">
                    It is widely recognized that young children learn best by playing, creating, and moving with actual concrete objects. KIBO not only taps into students that are technologically-focused, but also has a whole creative aspect that the students can really get creative with.
                  </p>
                  <div className="mt-4 pl-8">
                    <p className="font-semibold text-kibo-purple">Samantha Culpepper, Chapel Hill Preparatory</p>
                    <p className="text-sm text-white bg-kibo-purple px-3 py-1 rounded-full inline-block mt-1">Dallas, TX</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 15 */}
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <div className="relative">
                  <div className="text-6xl text-gray-300 absolute -top-4 -left-2">"</div>
                  <p className="text-gray-600 leading-relaxed pl-8">
                    KIBO strikes me as a remarkable instance of a positively transformational approach to fostering up-to-the-moment learning that is easily available in a form that is user friendly for both teachers and students.
                  </p>
                  <div className="mt-4 pl-8">
                    <p className="font-semibold text-kibo-purple">Mark Gura, Editor</p>
                    <p className="text-sm text-white bg-kibo-purple px-3 py-1 rounded-full inline-block mt-1">EdTech Digest</p>
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

export default Testimonials;