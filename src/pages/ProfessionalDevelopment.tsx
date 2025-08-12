import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import bannerImage from '../assets/education/proffesionaldev/Teachers-working-together-scaled-768x577.jpg';

// Section images
import cstaLogo from '../assets/education/proffesionaldev/csta-logos-small-200x55.webp';

// Gallery images for Section 2
import gallery1Image from '../assets/education/proffesionaldev/Buildling-Block-Extension-Play.jpg';
import gallery2Image from '../assets/education/proffesionaldev/up-preschool2-jumbo.jpg';
import gallery3Image from '../assets/education/proffesionaldev/Parent-and-child-scaled.jpg';
import gallery4Image from '../assets/education/proffesionaldev/ft-kibo.webp';
import gallery5Image from '../assets/education/proffesionaldev/Using-Sensors-scaled.jpg';
import gallery6Image from '../assets/education/proffesionaldev/History-and-Culture-KIBO-Dancer-from-Africa-1-scaled.jpeg';

// Workshop images
import webBasedImage from '../assets/education/proffesionaldev/Jason-400x533.webp';
import halfDayImage from '../assets/education/proffesionaldev/Parent-and-child-scaled.jpg';
import fullDayImage from '../assets/education/proffesionaldev/Group-Training-scaled.jpg';
import twoDayImage from '../assets/education/proffesionaldev/Training-and-creations-scaled-1024x768.jpg';

// PDF file
import pricingPDF from '../assets/education/proffesionaldev/KIBO-Training-Workshops-remote-or-in-person-2023.pdf';

export default function ProfessionalDevelopment() {
    return (
        <div className="flex flex-col min-h-screen bg-orange-50">
            <Header />

            {/* Header Banner */}
            <div className="bg-gradient-to-r from-kibo-purple to-kibo-orange overflow-hidden">
                <div className="container mx-auto px-4 flex items-center h-64 overflow-hidden">
                    <div className="w-2/3">
                        <h2 className="text-3xl font-bold text-white mb-4">STEM Teacher Training & Professional Development</h2>
                        <p className="text-white/90 mb-6">
                            Ensure success in bringing KIBO to your young learners with effective and proven PD and STEM Training for Early Childhood Educators.
                        </p>
                    </div>
                    <div className="w-1/3 flex justify-end items-center h-full">
                        <img src={bannerImage} alt="Teachers working together" className="max-h-[90%] w-[65%] object-contain rounded-lg shadow-lg" />
                    </div>
                </div>
            </div>

            {/* Main content area */}
            <main className="flex-grow bg-orange-50">
                <div className="container mx-auto px-4 py-12">
                    {/* Section 1: STEM Learning Starts with Teaching */}
                    <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
                        <div className="md:w-2/3">
                            <h2 className="text-3xl font-bold text-kibo-purple mb-6">
                                STEM Learning Starts with Teaching
                            </h2>
                            <p className="text-gray-600 mb-4">
                                Teaching coding, engineering, and STEM in early childhood requires age-appropriate tools. But quality professional development is every bit as important. In fact, improving teachers' skills is an important part of our mission to improve students' STEM skills.
                            </p>
                            <p className="text-gray-600 mb-6">
                                Early childhood teachers may not have coding education backgrounds, so it's important to include relevant PD and STEM training for early childhood educators when implementing educational solutions, like KIBO.
                            </p>
                        </div>
                        <div className="md:w-1/3 flex justify-center">
                            <div className="bg-orange-100 p-6 rounded-lg shadow-sm">
                                <img src={cstaLogo} alt="CSTA Logo" className="w-30 h-20 mx-auto mb-4" />
                                <div className="text-center">
                                    <p className="text-kibo-orange font-bold text-lg mb-2">The Computer Science Teachers' Association has certified KinderLab's KIBO Professional Development as a</p>
                                    <a href="https://csteachers.org/pd-opportunities/accredited-pd/?_sf_s=kibo" target="_blank" rel="noopener noreferrer" className="text-kibo-orange font-bold underline hover:text-kibo-orange/80 transition-colors">Quality PD Program.</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 2: 6 Ways Our Training Maximizes Your KIBO Investment */}
                <div className="mb-16">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold text-kibo-orange mb-4">
                                6 Ways Our Training Maximizes Your KIBO Investment
                            </h2>
                            <p className="text-gray-600">
                                Here are 6 reasons our PD & STEM training for early childhood educators will help you and your students make the most out of learning with KIBO!
                            </p>
                        </div>
                    </div>

                    {/* Full Width Gallery */}
                    <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
                        <div className="grid grid-cols-6 gap-0">
                            <div className="relative h-64 overflow-hidden group cursor-pointer">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                                    style={{ backgroundImage: `url(${gallery1Image})` }}
                                ></div>
                                <div className="absolute inset-0 bg-transparent group-hover:bg-black/70 transition-colors duration-300"></div>
                                <div className="absolute inset-0 flex items-center justify-center p-4">
                                    <div className="text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <h4 className="text-lg font-bold mb-2">1</h4>
                                        <p className="text-sm leading-tight">Offer standards-aligned PD that’s aligned to your district’s standards and needs.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="relative h-64 overflow-hidden group cursor-pointer">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                                    style={{ backgroundImage: `url(${gallery2Image})` }}
                                ></div>
                                <div className="absolute inset-0 bg-transparent group-hover:bg-black/70 transition-colors duration-300"></div>
                                <div className="absolute inset-0 flex items-center justify-center p-4">
                                    <div className="text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <h4 className="text-lg font-bold mb-2">2</h4>
                                        <p className="text-sm leading-tight">Specifically designed courses with tailored curriculum to your school and district.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="relative h-64 overflow-hidden group cursor-pointer">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                                    style={{ backgroundImage: `url(${gallery3Image})` }}
                                ></div>
                                <div className="absolute inset-0 bg-transparent group-hover:bg-black/70 transition-colors duration-300"></div>
                                <div className="absolute inset-0 flex items-center justify-center p-4">
                                    <div className="text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <h4 className="text-lg font-bold mb-2">3</h4>
                                        <p className="text-sm leading-tight">Deliver hands-on, in-person sessions or remote PD to fit your time and budget.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="relative h-64 overflow-hidden group cursor-pointer">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                                    style={{ backgroundImage: `url(${gallery4Image})` }}
                                ></div>
                                <div className="absolute inset-0 bg-transparent group-hover:bg-black/70 transition-colors duration-300"></div>
                                <div className="absolute inset-0 flex items-center justify-center p-4">
                                    <div className="text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <h4 className="text-lg font-bold mb-2">4</h4>
                                        <p className="text-sm leading-tight">Provide resources, post-training, to discuss any questions or issues that have arisen through practice and provide online and self-paced options for follow-up.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="relative h-64 overflow-hidden group cursor-pointer">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                                    style={{ backgroundImage: `url(${gallery5Image})` }}
                                ></div>
                                <div className="absolute inset-0 bg-transparent group-hover:bg-black/70 transition-colors duration-300"></div>
                                <div className="absolute inset-0 flex items-center justify-center p-4">
                                    <div className="text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <h4 className="text-lg font-bold mb-2">5</h4>
                                        <p className="text-sm leading-tight">Custom activity examples for you to integrate STEAM skills to existing classroom subjects you are already comfortable teaching, such as literacy or math.  </p>
                                    </div>
                                </div>
                            </div>

                            <div className="relative h-64 overflow-hidden group cursor-pointer">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                                    style={{ backgroundImage: `url(${gallery6Image})` }}
                                ></div>
                                <div className="absolute inset-0 bg-transparent group-hover:bg-black/70 transition-colors duration-300"></div>
                                <div className="absolute inset-0 flex items-center justify-center p-4">
                                    <div className="text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <h4 className="text-lg font-bold mb-2">6</h4>
                                        <p className="text-sm leading-tight">Custom activity examples for you to integrate STEAM skills to existing classroom subjects you are already comfortable teaching, such as literacy or math.  </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto px-4 py-12">
                    {/* Section 3: Our KIBO Workshops & STEM Training */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold text-kibo-orange text-center mb-8">
                            Our KIBO Workshops & STEM Training for Early Childhood Educators
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <p className="text-gray-600 mb-4">
                                    KinderLab conducts virtual workshops with customers of all sizes, ranging from large public school districts to individual independent schools, from regional Head Start organizations to neighborhood preschools. Our PD team offers both on-site and remote workshops for teachers, specialists, and district PD providers. These workshops range from one-hour web conferences to multi-day in-person workshops on KIBO and STEAM education best practices.
                                </p>
                            </div>
                            <div>
                                <p className="text-gray-600 mb-4">
                                    Delivered either remotely or in-person at your school or district offices, our workshops include plenty of hands-on experiences with KIBO to help teachers feel comfortable with the technology. We also discuss pedagogical approaches to creative technology education in early childhood, including promoting student collaboration, SEL, and design thinking through STEAM.
                                </p>
                                <p className="text-gray-600">
                                    Get started with KIBO with all the training to be successful!
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Section 4: Workshop Overviews */}
                    <div className="mb-16">
                        <div className="bg-kibo-orange text-white p-4 mb-8 rounded-lg">
                            <p className="text-center text-sm">
                                Workshop overviews and travel-inclusive prices are below. But we also recognize that every school and district has unique needs. To plan your perfect PD workshop, contact our PD team at <a href="mailto:training@kinderlabrobotics.com" className="underline">training@kinderlabrobotics.com</a>.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Web-Based Introductory Training */}
                            <div className="bg-purple-200 rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
                                <img src={webBasedImage} alt="Web-Based Introductory Training" className="w-full h-48 object-cover" />
                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-xl font-bold text-kibo-purple text-center mb-2">Web-Based Introductory Training</h3>
                                    <p className="text-center text-gray-500 mb-4">1 HOUR</p>
                                    <p className="text-gray-600 text-sm mb-4">
                                        <strong>Goal:</strong> Hands-on introduction to KIBO and curriculum to start using KIBO right after the live.
                                    </p>
                                    <p className="text-gray-600 text-sm mb-4 flex-grow">
                                        Kick off your KIBO teaching in a one-hour, interactive videoconference (PD session). In this session, we'll show you how to use KIBO's parts and programming, how to get started with KIBO, and answer any questions. These are an ideal format to provide one educator with a quick, effective introduction to teaching STEM with KIBO. We will also share resources that help you get started immediately.
                                    </p>
                                    <ul className="text-sm text-gray-600 mb-4">
                                        <li>• Virtual Session: $100 (one participant)</li>
                                    </ul>
                                    <Link to="/shop/training" className="w-full px-6 py-3 rounded-lg border border-kibo-purple text-kibo-purple hover:bg-kibo-orange hover:text-kibo-purple active:bg-kibo-orange active:text-kibo-purple transition-colors cursor-pointer inline-block text-center">
                                        Purchase Now On Our Web Store
                                    </Link>
                                </div>
                            </div>

                            {/* Half-Day Group Workshop */}
                            <div className="bg-purple-200 rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
                                <img src={halfDayImage} alt="Half-Day Group Workshop" className="w-full h-48 object-cover" />
                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-xl font-bold text-kibo-purple text-center mb-2">Half-Day Group Workshop</h3>
                                    <p className="text-center text-gray-500 mb-4">3 HOURS</p>
                                    <p className="text-gray-600 text-sm mb-4">
                                        <strong>Goal:</strong> Expertise in KIBO operation and teaching, with hands-on activities.
                                    </p>
                                    <p className="text-gray-600 text-sm mb-4 flex-grow">
                                        The three-hour workshop provides an introduction to the technical and pedagogical aspects of STEAM education with KIBO. Participants will gain familiarity with KIBO through several hands-on activities and challenges. They will explore our research basis supporting KIBO and the extensive curriculum offered by KinderLab.
                                    </p>
                                    <ul className="text-sm text-gray-600 mb-4">
                                        <li>• Virtual Workshop: $1,200</li>
                                        <li>• On-Site Workshop: $2,150 (includes travel charges*)</li>
                                    </ul>
                                    <button className="w-full px-6 py-3 rounded-lg border border-kibo-purple text-kibo-purple hover:bg-kibo-orange hover:text-kibo-purple active:bg-kibo-orange active:text-kibo-purple transition-colors cursor-pointer mt-auto">
                                        Contact Us To Arrange a Workshop
                                    </button>
                                </div>
                            </div>

                            {/* Full-Day Group Workshop */}
                            <div className="bg-purple-200 rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
                                <img src={fullDayImage} alt="Full-Day Group Workshop" className="w-full h-48 object-cover" />
                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-xl font-bold text-kibo-purple text-center mb-2">Full-Day Group Workshop</h3>
                                    <p className="text-center text-gray-500 mb-4">6 HOURS</p>
                                    <p className="text-gray-600 text-sm mb-4">
                                        <strong>Goal:</strong> KIBO operational skills and in-depth curriculum integration.
                                    </p>
                                    <p className="text-gray-600 text-sm mb-4 flex-grow">
                                        This six-hour workshop provides all of the KIBO and STEAM training offered in the half-Day workshop, but with a deeper investigation of how to adapt and implement KIBO curriculum within existing teaching context and goals. Participants will complete a curriculum development activity to ensure they are ready to bring integrated and cross-curricular subject.
                                    </p>
                                    <ul className="text-sm text-gray-600 mb-4">
                                        <li>• Virtual Workshop: $2,150</li>
                                        <li>• On-Site Workshop: $3,250 (includes travel charges*)</li>
                                    </ul>
                                    <button className="w-full px-6 py-3 rounded-lg border border-kibo-purple text-kibo-purple hover:bg-kibo-orange hover:text-kibo-purple active:bg-kibo-orange active:text-kibo-purple transition-colors cursor-pointer mt-auto">
                                        Contact Us To Arrange a Workshop
                                    </button>
                                </div>
                            </div>

                            {/* Two-Day Group Workshop */}
                            <div className="bg-purple-200 rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
                                <img src={twoDayImage} alt="Two-Day Group Workshop" className="w-full h-48 object-cover" />
                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-xl font-bold text-kibo-purple text-center mb-2">Two-Day Group Workshop</h3>
                                    <p className="text-center text-gray-500 mb-4">2 DAYS, 6 HOURS EACH</p>
                                    <p className="text-gray-600 text-sm mb-4">
                                        <strong>Goal:</strong> KIBO operational mastery and custom curriculum development.
                                    </p>
                                    <p className="text-gray-600 text-sm mb-4 flex-grow">
                                        The two-day workshop provides participants with the knowledge to create hands-on learning with KIBO. A variety of challenges and open-ended building opportunities provide concrete experience, bolstered by exploration of supporting pedagogy, research, and teaching examples. We will also explore student learning assessment strategies. Participants will complete a curriculum development activity and have an opportunity to run this activity with their peers. This workshop is offered in-person only, due to the strong reliance on facilitated, hands-on work in small groups.
                                    </p>
                                    <ul className="text-sm text-gray-600 mb-4">
                                        <li>• On-Site Workshop: $4,950 (includes travel charges*)</li>
                                    </ul>
                                    <button className="w-full px-6 py-3 rounded-lg border border-kibo-purple text-kibo-purple hover:bg-kibo-orange hover:text-kibo-purple active:bg-kibo-orange active:text-kibo-purple transition-colors cursor-pointer mt-auto">
                                        Contact Us To Arrange a Workshop
                                    </button>
                                </div>
                            </div>
                        </div>

                        <p className="text-xs text-gray-500 text-center mt-4">
                            * In some situations, we may need to apply additional travel charges. We will make this clear during the quoting process.
                        </p>
                    </div>

                    {/* Section 5: For More Information */}
                    <div className="text-center p-8">
                        <h2 className="text-3xl font-bold text-kibo-orange mb-4">
                            For More Information About STEM Training for Early Childhood Educators
                        </h2>
                        <p className="text-gray-600 mb-6">
                            Download our pricing overview and contact us at <a href="mailto:training@kinderlabrobotics.com" className="text-kibo-orange underline">training@kinderlabrobotics.com</a> to discuss your specific needs and arrange a workshop.
                        </p>
                        <a href={pricingPDF} target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-lg border border-kibo-purple text-kibo-purple hover:bg-kibo-orange hover:text-kibo-purple active:bg-kibo-orange active:text-kibo-purple transition-colors cursor-pointer inline-block">
                            DOWNLOAD PRICING OVERVIEW
                        </a>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}