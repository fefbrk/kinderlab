import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import bannerImage from '../assets/kibo/steam-grants/fun5.jpg';
import section3Image from '../assets/kibo/steam-grants/fun1.jpg';
import kiboCasePDF from '../assets/kibo/steam-grants/Making-the-Case-for-KIBO.pdf';

export default function SteamGrants() {
  return (
    <div className="flex flex-col min-h-screen bg-orange-50">
      <Header />

      {/* Header Banner */}
      <div className="bg-gradient-to-r from-kibo-purple to-kibo-orange overflow-hidden">
        <div className="container mx-auto px-4 flex items-center h-64 overflow-hidden">
          <div className="w-2/3">
            <h2 className="text-3xl font-bold text-white mb-4">
              Grants for STEM Programs</h2>
            <p className="text-white/90 mb-6">
              These grants for STEM programs and funding sources can help to bring KIBO into early education centers or elementary schools.
            </p>
          </div>
          <div className="w-1/3 flex justify-end items-center h-full">
            <img src={bannerImage} alt="STEAM Grants" className="max-h-[90%] w-[50%] object-contain rounded-lg shadow-lg" />
          </div>
        </div>
      </div>

      {/* Main content area */}
      <main className="flex-grow bg-orange-50">
        <div className="container mx-auto px-4 py-12">

          {/* Section 1: With these funding sources */}
          <div className="mb-16">
            <div className="flex flex-col md:flex-row items-center gap-0">
              <div className="md:w-1/3">
                <img src={section3Image} alt="Children learning with KIBO" className="w-80 h-90 rounded-lg shadow-lg" />
              </div>
              <div className="md:w-2/3 md:pl-0">
                <h2 className="text-4xl font-bold text-kibo-purple mb-6">
                  With these funding sources, you can bring KIBO to your young learners!
                </h2>
                <p className="text-gray-600 mb-4">
                  There are many different ways to get grants for STEM programs for elementary schools and early educational centers for the purchase of KIBO robotics. Below are some resources that can be helpful to find and secure STEM/STEAM grants and funding.
                </p>
                <p className="text-gray-600 mb-4">
                  And we can help! We have <a href={kiboCasePDF} target="_blank" rel="noopener noreferrer" className="text-kibo-purple underline hover:text-kibo-purple/80"><em>The Importance of Screen-free Coding and Robotics for your Young Learners – The Case for KIBO</em></a> white paper available to give you all the details you need when filling out a grant or award for KIBO. From basic information, to research and even testimonials!
                </p>
              </div>
            </div>
          </div>

          {/* Section 2: Funding Sources */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-kibo-purple text-center mb-12">
              Funding Sources
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {/* National Support */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-kibo-purple mb-4">National Support</h3>
                <p className="text-gray-600 text-sm">
                  The federal government and other national organizations offer programs to support STEM/STEAM grants in the classroom when research is associated.
                </p>
              </div>

              {/* State and District Support */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-kibo-purple mb-4">State and District Support</h3>
                <p className="text-gray-600 text-sm">
                  Different states and districts have their own sources for getting funding for STEM/STEAM related programs in the form of grants.
                </p>
              </div>

              {/* School Support */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-kibo-purple mb-4">School Support</h3>
                <p className="text-gray-600 text-sm">
                  School systems have ways for funding innovative STEM/STEAM programs, through educational foundations, special grants and dedicated budgets.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* PTA Fundraising */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-kibo-purple mb-4">PTA Fundraising</h3>
                <p className="text-gray-600 text-sm">
                  Most schools have a local parent association that can organize and support fundraising events to buy KIBO kits and fund other STEM/STEAM initiatives.
                </p>
              </div>

              {/* Corporations */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-kibo-purple mb-4">Corporations</h3>
                <p className="text-gray-600 text-sm">
                  High tech companies support STEM/STEAM programs to cultivate their future workforce. Many have foundations offering grants and funding to schools.
                </p>
              </div>

              {/* Crowd Funding */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-kibo-purple mb-4">Crowd Funding</h3>
                <p className="text-gray-600 text-sm">
                  Educators can request assistance in purchasing products such as KIBO at sites like Adopt A Classroom, Digital Wish, Donors Choose, and PledgeCents.
                </p>
              </div>
            </div>
          </div>

          {/* Section 3: Grants for STEM Programs and Funding Resources */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-kibo-purple text-center mb-12">
              Grants for STEM Programs and Funding Resources
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4">
              {/* Left Column */}
              <div className="space-y-3">
                <div><a href="https://www.honda.com/community/applying-for-a-grant" target="_blank" rel="noopener noreferrer" className="text-kibo-purple underline hover:text-kibo-purple/80">• American Honda Foundation</a></div>
                <div><a href="http://www.fund.bayer.us/grant/2016/7/1/education" target="_blank" rel="noopener noreferrer" className="text-kibo-purple underline hover:text-kibo-purple/80">• Bayer Fund STEM Education Grant</a></div>
                <div><a href="https://www.dodea.edu/" target="_blank" rel="noopener noreferrer" className="text-kibo-purple underline hover:text-kibo-purple/80">• DoDEA Grant Program</a></div>
                <div><a href="http://www.fund.bayer.us/grant/2016/8/15/first-robotics-program" target="_blank" rel="noopener noreferrer" className="text-kibo-purple underline hover:text-kibo-purple/80">• First Robotics Program</a></div>
                <div><a href="https://www.foundationsineducation.org/" target="_blank" rel="noopener noreferrer" className="text-kibo-purple underline hover:text-kibo-purple/80">• Foundations in Education</a></div>
                <div><a href="https://www.getedfunding.com/c/index.web?s@4V9B7WU3c1K96" target="_blank" rel="noopener noreferrer" className="text-kibo-purple underline hover:text-kibo-purple/80">• GetEdFunding</a></div>
                <div><a href="http://www.grantsalert.com/grants" target="_blank" rel="noopener noreferrer" className="text-kibo-purple underline hover:text-kibo-purple/80">• Grant Alerts</a></div>
                <div><a href="https://www.grantwatch.com/" target="_blank" rel="noopener noreferrer" className="text-kibo-purple underline hover:text-kibo-purple/80">• Grant Watch</a></div>
                <div><a href="http://www.grantsforteachers.com/cat/STEM/cat_49.aspx" target="_blank" rel="noopener noreferrer" className="text-kibo-purple underline hover:text-kibo-purple/80">• Grants for Teachers</a></div>
                <div><a href="https://teach.com/what/grants-for-teachers" target="_blank" rel="noopener noreferrer" className="text-kibo-purple underline hover:text-kibo-purple/80">• Teach</a></div>
                <div><a href="http://www.grants.gov/" target="_blank" rel="noopener noreferrer" className="text-kibo-purple underline hover:text-kibo-purple/80">• Grants.gov</a></div>
                <div><a href="http://www.ieee.org/organizations/foundation/grants.html" target="_blank" rel="noopener noreferrer" className="text-kibo-purple underline hover:text-kibo-purple/80">• IEEE Foundation</a></div>
                <div><a href="https://www.insidephilanthropy.com/find-a-grant/science-education-grants" target="_blank" rel="noopener noreferrer" className="text-kibo-purple underline hover:text-kibo-purple/80">• Inside Philanthropy</a></div>
                <div><a href="http://www.ala.org/tools/readytocode" target="_blank" rel="noopener noreferrer" className="text-kibo-purple underline hover:text-kibo-purple/80">• Libraries Ready to Code</a></div>
                <div><a href="https://www.lockheedmartin.com/en-us/who-we-are/communities/stem-education.html" target="_blank" rel="noopener noreferrer" className="text-kibo-purple underline hover:text-kibo-purple/80">• Lockheed Martin's STEM Education Grants</a></div>
                <div><a href="http://toolboxforeducation.com/" target="_blank" rel="noopener noreferrer" className="text-kibo-purple underline hover:text-kibo-purple/80">• Lowe's Toolbox</a></div>
                <div><a href="https://www.mass.gov/early-education-and-care-funding-and-grant-opportunities" target="_blank" rel="noopener noreferrer" className="text-kibo-purple underline hover:text-kibo-purple/80">• Mass.gov's Early Education and Care Funding and Grant Opportunities</a></div>
                <div><a href="https://www.motorolasolutions.com/en_us/about/company-overview/corporate-responsibility/motorola-solutions-foundation.html" target="_blank" rel="noopener noreferrer" className="text-kibo-purple underline hover:text-kibo-purple/80">• Motorola Innovation Generation Grants</a></div>
              </div>

              {/* Right Column */}
              <div className="space-y-3">
                <div><a href="https://www.nctm.org/Grants/" target="_blank" rel="noopener noreferrer" className="text-kibo-purple underline hover:text-kibo-purple/80">• National Council of Teachers of Mathematics</a></div>
                <div><a href="https://www.pta.org/home/run-your-pta/Awards-Grants" target="_blank" rel="noopener noreferrer" className="text-kibo-purple underline hover:text-kibo-purple/80">• National PTA Grants & Awards</a></div>
                <div><a href="https://www.nsf.gov/funding/education.jsp?fund_type=4" target="_blank" rel="noopener noreferrer" className="text-kibo-purple underline hover:text-kibo-purple/80">• National Science Foundation Grants</a></div>
                <div><a href="https://www.nea.org/grants-funding" target="_blank" rel="noopener noreferrer" className="text-kibo-purple underline hover:text-kibo-purple/80">• NEA Foundation Grants</a></div>
                <div><a href="http://ruraltechfund.org/" target="_blank" rel="noopener noreferrer" className="text-kibo-purple underline hover:text-kibo-purple/80">• Rural Technology Fund</a></div>
                <div><a href="https://www.spencer.org/" target="_blank" rel="noopener noreferrer" className="text-kibo-purple underline hover:text-kibo-purple/80">• The Spencer Foundation</a></div>
                <div><a href="https://www.stemfinity.com/STEM-Education-Grants" target="_blank" rel="noopener noreferrer" className="text-kibo-purple underline hover:text-kibo-purple/80">• STEMfinity</a></div>
                <div><a href="https://teach.com/what/grants-for-teachers/" target="_blank" rel="noopener noreferrer" className="text-kibo-purple underline hover:text-kibo-purple/80">• Teach.com</a></div>
                <div><a href="http://www.teacherscount.org/grants" target="_blank" rel="noopener noreferrer" className="text-kibo-purple underline hover:text-kibo-purple/80">• Teachers Count Grants</a></div>
                <div><a href="https://thejournal.com/grants" target="_blank" rel="noopener noreferrer" className="text-kibo-purple underline hover:text-kibo-purple/80">• THE Journal</a></div>
                <div><a href="http://www.nsf.gov/funding/pgm_summ.jsp?pims_id=5487&org=NSF" target="_blank" rel="noopener noreferrer" className="text-kibo-purple underline hover:text-kibo-purple/80">• The National Science Foundation</a></div>
                <div><a href="https://www.toshiba.com/taf/k5.jsp" target="_blank" rel="noopener noreferrer" className="text-kibo-purple underline hover:text-kibo-purple/80">• Toshiba America Foundation</a></div>
                <div><a href="https://www.ed.gov/stem" target="_blank" rel="noopener noreferrer" className="text-kibo-purple underline hover:text-kibo-purple/80">• US Department of Education</a></div>
                <div><a href="https://www.voya.com/page/voya-unsung-heroesr" target="_blank" rel="noopener noreferrer" className="text-kibo-purple underline hover:text-kibo-purple/80">• Voya Unsung Heroes</a></div>
                <div><a href="https://walmart.org/tools-and-resources" target="_blank" rel="noopener noreferrer" className="text-kibo-purple underline hover:text-kibo-purple/80">• Walmart Foundation Grants</a></div>
                <div><a href="https://www.wkkf.org/" target="_blank" rel="noopener noreferrer" className="text-kibo-purple underline hover:text-kibo-purple/80">• WK Kellogg Foundation</a></div>
                <div><a href="http://philanthropynewsdigest.org/rfps/(search)/?tags_interest[]=education" target="_blank" rel="noopener noreferrer" className="text-kibo-purple underline hover:text-kibo-purple/80">• Philanthropy New Digest</a></div>
                <div><a href="http://ysa.org/grants" target="_blank" rel="noopener noreferrer" className="text-kibo-purple underline hover:text-kibo-purple/80">• Youth Changing the World</a></div>
              </div>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}