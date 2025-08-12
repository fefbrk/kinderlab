import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { X } from 'lucide-react';

const WhitePapersWebinars: React.FC = () => {
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

    const openVideoModal = (videoId: string) => {
        setSelectedVideo(videoId);
    };

    const closeVideoModal = () => {
        setSelectedVideo(null);
    };

    return (
        <div className="flex flex-col min-h-screen bg-orange-50">
            <Header />

            {/* Hero Banner */}
            <div className="bg-gradient-to-r from-kibo-purple to-kibo-orange overflow-hidden">
                <div className="container mx-auto px-4 flex items-center justify-center h-64">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-white mb-4">
                            STEM White Papers & Webinars
                        </h1>
                        <p className="text-white/90 mb-6 text-lg max-w-4xl">
                            See the collection of KIBO White Papers, guides, and webinar recordings. Explore research-backed insights and educational resources to enhance your KIBO experience.
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <main className="flex-grow bg-orange-50">
                <div className="container mx-auto px-4 py-12">

                    {/* White Papers Section */}
                    <section className="mb-16">
                        <h2 className="text-3xl font-bold text-kibo-orange text-center mb-12">
                            White Papers
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                            {/* White Paper 1 */}
                            <a
                                href="/src/assets/resources/whitepapers/Thinking-with-KIBO.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-purple-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow block"
                            >
                                <div className="relative">
                                    <img
                                        src="/src/assets/resources/whitepapers/Thinking-with-KIBO-Cover-Image.jpg"
                                        alt="Thinking with KIBO Curriculum"
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="absolute top-2 right-2 bg-kibo-orange text-white px-2 py-1 rounded text-xs font-semibold">
                                        White Papers
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-bold text-kibo-orange mb-2">
                                        Thinking with KIBO Curriculum – Introducing Artificial Intelligence in Early Grades
                                    </h3>
                                </div>
                            </a>

                            {/* White Paper 2 */}
                            <a
                                href="/src/assets/resources/whitepapers/Horizons-for-Homeless-Use-Case-Final.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-purple-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow block"
                            >
                                <div className="relative">
                                    <img
                                        src="/src/assets/resources/whitepapers/Screenshot_1.png"
                                        alt="Horizons for Homeless Children Case Study"
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="absolute top-2 right-2 bg-kibo-orange text-white px-2 py-1 rounded text-xs font-semibold">
                                        White Papers
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-bold text-kibo-orange mb-2">
                                        Horizons for Homeless Children Case Study – Building, Coding, Creating, and Exploring with KIBO
                                    </h3>
                                </div>
                            </a>

                            {/* White Paper 3 */}
                            <a
                                href="/src/assets/resources/whitepapers/Making-the-Case-for-KIBO.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-purple-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow block"
                            >
                                <div className="relative">
                                    <img
                                        src="/src/assets/resources/whitepapers/The-Case-for-KIBO-Cover-600x794.jpg"
                                        alt="The Case for KIBO"
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="absolute top-2 right-2 bg-kibo-orange text-white px-2 py-1 rounded text-xs font-semibold">
                                        White Papers
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-bold text-kibo-orange mb-2">
                                        The Case for KIBO – Importance of Screen-Free Coding & Robotics for Young Learners
                                    </h3>
                                </div>
                            </a>

                            {/* White Paper 4 */}
                            <a
                                href="/src/assets/resources/whitepapers/Maps-Measurement-and-Make-Believe.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-purple-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow block"
                            >
                                <div className="relative">
                                    <img
                                        src="/src/assets/resources/whitepapers/Map-Guide-Cover-211x300.jpg"
                                        alt="Maps, Measurement, and Make-Believe"
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="absolute top-2 right-2 bg-kibo-orange text-white px-2 py-1 rounded text-xs font-semibold">
                                        White Papers
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-bold text-kibo-orange mb-2">
                                        Maps, Measurement, and Make-Believe! Four Map Activities for KIBO
                                    </h3>
                                </div>
                            </a>

                            {/* White Paper 5 */}
                            <a
                                href="/src/assets/resources/whitepapers/6-Key-Benefits-of-Robotics.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-purple-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow block"
                            >
                                <div className="relative">
                                    <img
                                        src="/src/assets/resources/whitepapers/6-Reason-White-Paper-Cover-211x300.webp"
                                        alt="6 Key Benefits of Using Robotics"
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="absolute top-2 right-2 bg-kibo-orange text-white px-2 py-1 rounded text-xs font-semibold">
                                        White Papers
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-bold text-kibo-orange mb-2">
                                        6 Key Benefits of Using Robotics with Your Youngest Students
                                    </h3>
                                </div>
                            </a>

                            {/* White Paper 6 */}
                            <a
                                href="/src/assets/resources/whitepapers/Meet-KIBO-Flyer-2019.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-purple-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow block"
                            >
                                <div className="relative">
                                    <img
                                        src="/src/assets/resources/whitepapers/Screenshot_2.png"
                                        alt="Meet KIBO Flyer"
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="absolute top-2 right-2 bg-kibo-orange text-white px-2 py-1 rounded text-xs font-semibold">
                                        White Papers
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-bold text-kibo-orange mb-2">
                                        Meet KIBO Flyer – The Playful Screen-Free Robot
                                    </h3>
                                </div>
                            </a>

                            {/* White Paper 7 */}
                            <a
                                href="/src/assets/resources/whitepapers/KIBO_Mascot-1.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-purple-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow block"
                            >
                                <div className="relative">
                                    <img
                                        src="/src/assets/resources/whitepapers/Screenshot_3.png"
                                        alt="Going Full STEAM Ahead"
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="absolute top-2 right-2 bg-kibo-orange text-white px-2 py-1 rounded text-xs font-semibold">
                                        White Papers
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-bold text-kibo-orange mb-2">
                                        Going Full STEAM Ahead Using the KIBO Fun Class Mascot
                                    </h3>
                                </div>
                            </a>

                            {/* White Paper 8 */}
                            <a
                                href="/src/assets/resources/whitepapers/KL_6-Reasons-Districts-Need-Robotics.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-purple-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow block"
                            >
                                <div className="relative">
                                    <img
                                        src="/src/assets/resources/whitepapers/6-Reasons-Admin-Paper-Cover-211x300.jpg"
                                        alt="6 Reasons Your District Needs Early Learning STEAM Robotics"
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="absolute top-2 right-2 bg-kibo-orange text-white px-2 py-1 rounded text-xs font-semibold">
                                        White Papers
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-bold text-kibo-orange mb-2">
                                        6 Reasons Your District Needs Early Learning STEAM Robotics & Coding
                                    </h3>
                                </div>
                            </a>

                            {/* White Paper 9 */}
                            <a
                                href="/src/assets/resources/whitepapers/KL_Learning-Loss_FINAL.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-purple-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow block"
                            >
                                <div className="relative">
                                    <img
                                        src="/src/assets/resources/whitepapers/Using-KIBO-In-Any-Environment-Cover.jpg"
                                        alt="Use KIBO to Practice SEL Skills"
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="absolute top-2 right-2 bg-kibo-orange text-white px-2 py-1 rounded text-xs font-semibold">
                                        White Papers
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-bold text-kibo-orange mb-2">
                                        Use KIBO to Practice SEL Skills & Help with Learning Loss
                                    </h3>
                                </div>
                            </a>

                            {/* White Paper 10 */}
                            <a
                                href="/src/assets/resources/whitepapers/3-Benefits-of-Using-KIBO-at-Home.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-purple-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow block"
                            >
                                <div className="relative">
                                    <img
                                        src="/src/assets/resources/whitepapers/home-resource2-1.jpg"
                                        alt="Playful STEAM Robotics at Home"
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="absolute top-2 right-2 bg-kibo-orange text-white px-2 py-1 rounded text-xs font-semibold">
                                        White Papers
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-bold text-kibo-orange mb-2">
                                        Playful STEAM Robotics at Home – Learn the 3 Benefits of KIBO
                                    </h3>
                                </div>
                            </a>

                            {/* White Paper 11 */}
                            <a
                                href="/src/assets/resources/whitepapers/Connecting-with-KIBO.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-purple-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow block"
                            >
                                <div className="relative">
                                    <img
                                        src="/src/assets/resources/whitepapers/Connecting-with-KIBO-Cover-211x300.jpg"
                                        alt="Connecting with KIBO"
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="absolute top-2 right-2 bg-kibo-orange text-white px-2 py-1 rounded text-xs font-semibold">
                                        White Papers
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-bold text-kibo-orange mb-2">
                                        Connecting with KIBO – Using KIBO in Blended and Distance Learning
                                    </h3>
                                </div>
                            </a>

                        </div>
                    </section>

                    {/* Webinars Section */}
                    <section className="mb-16">
                        <h2 className="text-3xl font-bold text-kibo-orange text-center mb-12">
                            Webinars
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                            {/* Webinar 1 */}
                            <a
                                href="https://home.edweb.net/webinar/ai20241028/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-purple-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow block"
                            >
                                <div className="relative">
                                    <img
                                        src="/src/assets/resources/webinars/20241028-ai-event.jpg"
                                        alt="Teach K-5 Students How AI Works with Unplugged and Robotics Activities"
                                        className="aspect-video w-full object-cover"
                                    />
                                    <div className="absolute top-2 right-2 bg-kibo-orange text-white px-2 py-1 rounded text-xs font-semibold">
                                        Webinars
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-bold text-kibo-orange mb-2">
                                        Teach K-5 Students How AI Works with Unplugged and Robotics Activities
                                    </h3>
                                </div>
                            </a>

                            {/* Webinar 2 */}
                            <div
                                onClick={() => openVideoModal('KEQz4VGIJFc')}
                                className="bg-purple-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                            >
                                <div className="relative">
                                    <img
                                        src="https://img.youtube.com/vi/KEQz4VGIJFc/maxresdefault.jpg"
                                        alt="The Best TK (and Elementary!) Educational Programs Include STEM"
                                        className="aspect-video w-full object-cover"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="bg-kibo-orange text-white rounded-full p-3 hover:bg-kibo-orange/90 transition-colors shadow-lg">
                                            <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="absolute top-2 right-2 bg-kibo-orange text-white px-2 py-1 rounded text-xs font-semibold">
                                        Webinars
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-bold text-kibo-orange mb-2">
                                        The Best TK (and Elementary!) Educational Programs Include STEM
                                    </h3>
                                </div>
                            </div>

                            {/* Webinar 3 */}
                            <div
                                onClick={() => openVideoModal('I7v7iWsxvSE')}
                                className="bg-purple-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                            >
                                <div className="relative">
                                    <img
                                        src="https://img.youtube.com/vi/I7v7iWsxvSE/maxresdefault.jpg"
                                        alt="Webinar 3"
                                        className="aspect-video w-full object-cover"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="bg-kibo-orange text-white rounded-full p-3 hover:bg-kibo-orange/90 transition-colors shadow-lg">
                                            <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="absolute top-2 right-2 bg-kibo-orange text-white px-2 py-1 rounded text-xs font-semibold">
                                        Webinars
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-bold text-kibo-orange mb-2">
                                        Teach Your Elementary Students How AI Works with KIBO Robots!
                                    </h3>
                                </div>
                            </div>

                            {/* Webinar 4 */}
                            <div
                                onClick={() => openVideoModal('dzaY2LT1h3I')}
                                className="bg-purple-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                            >
                                <div className="relative">
                                    <img
                                        src="https://img.youtube.com/vi/dzaY2LT1h3I/maxresdefault.jpg"
                                        alt="Webinar 4"
                                        className="aspect-video w-full object-cover"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="bg-kibo-orange text-white rounded-full p-3 hover:bg-kibo-orange/90 transition-colors shadow-lg">
                                            <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="absolute top-2 right-2 bg-kibo-orange text-white px-2 py-1 rounded text-xs font-semibold">
                                        Webinars
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-bold text-kibo-orange mb-2">
                                        Robots in Your OST Programs? Yes! Your Learners Won't Want to Leave!
                                    </h3>
                                </div>
                            </div>

                            {/* Webinar 5 */}
                            <a
                                href="https://docs.google.com/presentation/d/e/2PACX-1vTJ9nvLeDe_gIqYeuI0AMMEdvQsaQgkEZVoEM9QQYwYCs68FB-u7V1q3at2DCk2hcnYgOfRk0qGdrBl/pub?start=false&loop=false&delayms=3000&slide=id.g6b1a9562d1_0_23"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-purple-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow block"
                            >
                                <div className="relative">
                                    <img
                                        src="/src/assets/resources/whitepapers/Screenshot_4.png"
                                        alt="Webinar 5 - Google Slides Presentation"
                                        className="aspect-video w-full object-cover"
                                    />
                                    <div className="absolute top-2 right-2 bg-kibo-orange text-white px-2 py-1 rounded text-xs font-semibold">
                                        Webinars
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-bold text-kibo-orange mb-2">
                                        Early Childhood Technology: Supporting Child Development with Creative Coding
                                    </h3>
                                </div>
                            </a>

                            {/* Webinar 6 */}
                            <div
                                onClick={() => openVideoModal('tdudKzSpxSQ')}
                                className="bg-purple-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                            >
                                <div className="relative">
                                    <img
                                        src="https://img.youtube.com/vi/tdudKzSpxSQ/maxresdefault.jpg"
                                        alt="Webinar 6"
                                        className="aspect-video w-full object-cover"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="bg-kibo-orange text-white rounded-full p-3 hover:bg-kibo-orange/90 transition-colors shadow-lg">
                                            <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="absolute top-2 right-2 bg-kibo-orange text-white px-2 py-1 rounded text-xs font-semibold">
                                        Webinars
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-bold text-kibo-orange mb-2">
                                        Ready for Robotics? Addressing the Missing 'T' and 'E' of STEM in Early Education
                                    </h3>
                                </div>
                            </div>

                            {/* Webinar 7 */}
                            <div
                                onClick={() => openVideoModal('hqW2KOgUCrE')}
                                className="bg-purple-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                            >
                                <div className="relative">
                                    <img
                                        src="https://img.youtube.com/vi/hqW2KOgUCrE/maxresdefault.jpg"
                                        alt="Webinar 7"
                                        className="aspect-video w-full object-cover"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="bg-kibo-orange text-white rounded-full p-3 hover:bg-kibo-orange/90 transition-colors shadow-lg">
                                            <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="absolute top-2 right-2 bg-kibo-orange text-white px-2 py-1 rounded text-xs font-semibold">
                                        Webinars
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-bold text-kibo-orange mb-2">
                                        KIBO Projects at Home: STEAM Robotics to Engage Your Young Learners Out of School
                                    </h3>
                                </div>
                            </div>

                            {/* Webinar 8 */}
                            <div
                                onClick={() => openVideoModal('XG49lcOOrL8')}
                                className="bg-purple-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                            >
                                <div className="relative">
                                    <img
                                        src="https://img.youtube.com/vi/XG49lcOOrL8/maxresdefault.jpg"
                                        alt="Webinar 8"
                                        className="aspect-video w-full object-cover"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="bg-kibo-orange text-white rounded-full p-3 hover:bg-kibo-orange/90 transition-colors shadow-lg">
                                            <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="absolute top-2 right-2 bg-kibo-orange text-white px-2 py-1 rounded text-xs font-semibold">
                                        Webinars
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-bold text-kibo-orange mb-2">
                                        STEAM Learning Through Play – An Introduction to KIBO
                                    </h3>
                                </div>
                            </div>

                            {/* Webinar 9 */}
                            <a
                                href="https://naaweb.org/webinar-how-to-introduce-fun-and-playful-stem-robotics-in-your-afterschool-program"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-purple-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow block"
                            >
                                <div className="relative">
                                    <img
                                        src="/src/assets/resources/whitepapers/Screenshot_5.png"
                                        alt="Webinar 9 - NAA Web External Link"
                                        className="aspect-video w-full object-cover"
                                    />
                                    <div className="absolute top-2 right-2 bg-kibo-orange text-white px-2 py-1 rounded text-xs font-semibold">
                                        Webinars
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-bold text-kibo-orange mb-2">
                                        Introduce Fun and Playful STEM Robotics in Your Afterschool Program
                                    </h3>
                                </div>
                            </a>

                            {/* Webinar 10 */}
                            <div
                                onClick={() => openVideoModal('JZ71D7bdD3c')}
                                className="bg-purple-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                            >
                                <div className="relative">
                                    <img
                                        src="https://img.youtube.com/vi/JZ71D7bdD3c/maxresdefault.jpg"
                                        alt="Webinar 10"
                                        className="aspect-video w-full object-cover"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="bg-kibo-orange text-white rounded-full p-3 hover:bg-kibo-orange/90 transition-colors shadow-lg">
                                            <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="absolute top-2 right-2 bg-kibo-orange text-white px-2 py-1 rounded text-xs font-semibold">
                                        Webinars
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-bold text-kibo-orange mb-2">
                                        Build. Art. Code. Play. Integrating Robotics within K-2 Curriculum
                                    </h3>
                                </div>
                            </div>

                            {/* Webinar 11 */}
                            <div
                                onClick={() => openVideoModal('c_SvXlgCSnM')}
                                className="bg-purple-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                            >
                                <div className="relative">
                                    <img
                                        src="https://img.youtube.com/vi/c_SvXlgCSnM/maxresdefault.jpg"
                                        alt="Webinar 11"
                                        className="aspect-video w-full object-cover"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="bg-kibo-orange text-white rounded-full p-3 hover:bg-kibo-orange/90 transition-colors shadow-lg">
                                            <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="absolute top-2 right-2 bg-kibo-orange text-white px-2 py-1 rounded text-xs font-semibold">
                                        Webinars
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-bold text-kibo-orange mb-2">
                                        6 Reasons Your Childcare Center or Preschool Needs KIBO
                                    </h3>
                                </div>
                            </div>

                            {/* Webinar 12 */}
                            <div
                                onClick={() => openVideoModal('pqeXX--UGeg')}
                                className="bg-purple-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                            >
                                <div className="relative">
                                    <img
                                        src="https://img.youtube.com/vi/pqeXX--UGeg/maxresdefault.jpg"
                                        alt="Webinar 12"
                                        className="aspect-video w-full object-cover"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="bg-kibo-orange text-white rounded-full p-3 hover:bg-kibo-orange/90 transition-colors shadow-lg">
                                            <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="absolute top-2 right-2 bg-kibo-orange text-white px-2 py-1 rounded text-xs font-semibold">
                                        Webinars
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-bold text-kibo-orange mb-2">
                                        6 Reasons Your Educational Center Needs a KIBO Robot
                                    </h3>
                                </div>
                            </div>
                            {/* Webinar 13 */}
                            <div
                                onClick={() => openVideoModal('z0w7qSa0b3U')}
                                className="bg-purple-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                            >
                                <div className="relative">
                                    <img
                                        src="https://img.youtube.com/vi/z0w7qSa0b3U/maxresdefault.jpg"
                                        alt="Webinar 13"
                                        className="aspect-video w-full object-cover"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="bg-kibo-orange text-white rounded-full p-3 hover:bg-kibo-orange/90 transition-colors shadow-lg">
                                            <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="absolute top-2 right-2 bg-kibo-orange text-white px-2 py-1 rounded text-xs font-semibold">
                                        Webinars
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-bold text-kibo-orange mb-2">
                                        Incorporating Creative Robotics into your Technology Strategy for PreK-5th Grade
                                    </h3>
                                </div>
                            </div>

                            {/* Webinar 14 */}
                            <div
                                onClick={() => openVideoModal('2I13Jdw-lyQ')}
                                className="bg-purple-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                            >
                                <div className="relative">
                                    <img
                                        src="https://img.youtube.com/vi/2I13Jdw-lyQ/maxresdefault.jpg"
                                        alt="Webinar 14"
                                        className="aspect-video w-full object-cover"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="bg-kibo-orange text-white rounded-full p-3 hover:bg-kibo-orange/90 transition-colors shadow-lg">
                                            <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="absolute top-2 right-2 bg-kibo-orange text-white px-2 py-1 rounded text-xs font-semibold">
                                        Webinars
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-bold text-kibo-orange mb-2">
                                        Storytelling with KIBO: Meeting Early Literacy Milestones with Robotics
                                    </h3>
                                </div>
                            </div>

                            {/* Webinar 15 */}
                            <div
                                onClick={() => openVideoModal('MmMk_bakC_g')}
                                className="bg-purple-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                            >
                                <div className="relative">
                                    <img
                                        src="https://img.youtube.com/vi/MmMk_bakC_g/maxresdefault.jpg"
                                        alt="Webinar 15"
                                        className="aspect-video w-full object-cover"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="bg-kibo-orange text-white rounded-full p-3 hover:bg-kibo-orange/90 transition-colors shadow-lg">
                                            <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="absolute top-2 right-2 bg-kibo-orange text-white px-2 py-1 rounded text-xs font-semibold">
                                        Webinars
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-bold text-kibo-orange mb-2">
                                        How Can I Use KIBO Hands-on Robotics in Blended or Distance Learning?
                                    </h3>
                                </div>
                            </div>

                            {/* Webinar 16 */}
                            <div
                                onClick={() => openVideoModal('coIYp6h9Ygs')}
                                className="bg-purple-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                            >
                                <div className="relative">
                                    <img
                                        src="https://img.youtube.com/vi/coIYp6h9Ygs/maxresdefault.jpg"
                                        alt="Webinar 16"
                                        className="aspect-video w-full object-cover"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="bg-kibo-orange text-white rounded-full p-3 hover:bg-kibo-orange/90 transition-colors shadow-lg">
                                            <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="absolute top-2 right-2 bg-kibo-orange text-white px-2 py-1 rounded text-xs font-semibold">
                                        Webinars
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-bold text-kibo-orange mb-2">
                                        Developing Computational Thinking in Early Childhood – a Discussion with Dr. Marina Bers
                                    </h3>
                                </div>
                            </div>

                            {/* Webinar 17 */}
                            <div
                                onClick={() => openVideoModal('6w18HEGqzFU')}
                                className="bg-purple-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                            >
                                <div className="relative">
                                    <img
                                        src="https://img.youtube.com/vi/6w18HEGqzFU/maxresdefault.jpg"
                                        alt="Webinar 17"
                                        className="aspect-video w-full object-cover"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="bg-kibo-orange text-white rounded-full p-3 hover:bg-kibo-orange/90 transition-colors shadow-lg">
                                            <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="absolute top-2 right-2 bg-kibo-orange text-white px-2 py-1 rounded text-xs font-semibold">
                                        Webinars
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-bold text-kibo-orange mb-2">
                                        Coding as a Playground – Exploring Early Childhood Coding with Dr. Marina Bers
                                    </h3>
                                </div>
                            </div>

                            {/* Webinar 18 */}
                            <div
                                onClick={() => openVideoModal('A80sgW3r5Qw')}
                                className="bg-purple-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                            >
                                <div className="relative">
                                    <img
                                        src="https://img.youtube.com/vi/A80sgW3r5Qw/maxresdefault.jpg"
                                        alt="Webinar 18"
                                        className="aspect-video w-full object-cover"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="bg-kibo-orange text-white rounded-full p-3 hover:bg-kibo-orange/90 transition-colors shadow-lg">
                                            <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="absolute top-2 right-2 bg-kibo-orange text-white px-2 py-1 rounded text-xs font-semibold">
                                        Webinars
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-bold text-kibo-orange mb-2">
                                        Innovate your Makerspace: Robotic STEAM Activities to Engage Young Learners!
                                    </h3>
                                </div>
                            </div>

                            {/* Webinar 19 */}
                            <div
                                onClick={() => openVideoModal('ldRBmEKbqZs')}
                                className="bg-purple-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                            >
                                <div className="relative">
                                    <img
                                        src="https://img.youtube.com/vi/ldRBmEKbqZs/maxresdefault.jpg"
                                        alt="Webinar 19"
                                        className="aspect-video w-full object-cover"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="bg-kibo-orange text-white rounded-full p-3 hover:bg-kibo-orange/90 transition-colors shadow-lg">
                                            <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="absolute top-2 right-2 bg-kibo-orange text-white px-2 py-1 rounded text-xs font-semibold">
                                        Webinars
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-bold text-kibo-orange mb-2">
                                        Changing Role of Technology and STEAM Learning in Young Children's Lives
                                    </h3>
                                </div>
                            </div>

                            {/* Webinar 20 */}
                            <div
                                onClick={() => openVideoModal('4SC8jWMogR0')}
                                className="bg-purple-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                            >
                                <div className="relative">
                                    <img
                                        src="https://img.youtube.com/vi/4SC8jWMogR0/maxresdefault.jpg"
                                        alt="Webinar 20"
                                        className="aspect-video w-full object-cover"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="bg-kibo-orange text-white rounded-full p-3 hover:bg-kibo-orange/90 transition-colors shadow-lg">
                                            <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="absolute top-2 right-2 bg-kibo-orange text-white px-2 py-1 rounded text-xs font-semibold">
                                        Webinars
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-bold text-kibo-orange mb-2">
                                        Address Learning Loss and SEL with Creative Robotics
                                    </h3>
                                </div>
                            </div>

                            {/* Webinar 21 */}
                            <div
                                onClick={() => openVideoModal('yklwoey_dd8')}
                                className="bg-purple-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                            >
                                <div className="relative">
                                    <img
                                        src="https://img.youtube.com/vi/yklwoey_dd8/maxresdefault.jpg"
                                        alt="Webinar 21"
                                        className="aspect-video w-full object-cover"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="bg-kibo-orange text-white rounded-full p-3 hover:bg-kibo-orange/90 transition-colors shadow-lg">
                                            <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="absolute top-2 right-2 bg-kibo-orange text-white px-2 py-1 rounded text-xs font-semibold">
                                        Webinars
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-bold text-kibo-orange mb-2">
                                        Bringing Creative STEM Robotics to Cobb County's Early Learners in PreK-2nd Grade
                                    </h3>
                                </div>
                            </div>

                            {/* Webinar 22 */}
                            <div
                                onClick={() => openVideoModal('t6hd5fQ5a8w')}
                                className="bg-purple-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                            >
                                <div className="relative">
                                    <img
                                        src="https://img.youtube.com/vi/t6hd5fQ5a8w/maxresdefault.jpg"
                                        alt="Webinar 22"
                                        className="aspect-video w-full object-cover"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="bg-kibo-orange text-white rounded-full p-3 hover:bg-kibo-orange/90 transition-colors shadow-lg">
                                            <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="absolute top-2 right-2 bg-kibo-orange text-white px-2 py-1 rounded text-xs font-semibold">
                                        Webinars
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-bold text-kibo-orange mb-2">
                                        Computational Thinking and Coding – Playful Learning and Expression for PreK-2nd Grade
                                    </h3>
                                </div>
                            </div>

                            {/* Webinar 23 */}
                            <a
                                href="https://home.edweb.net/webinar/code20220310/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-purple-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow block"
                            >
                                <div className="relative">
                                    <img
                                        src="/src/assets/resources/webinars/20220310_code-event.png"
                                        alt="Webinar 23 - EdWeb External Link"
                                        className="aspect-video w-full object-cover"
                                    />
                                    <div className="absolute top-2 right-2 bg-kibo-orange text-white px-2 py-1 rounded text-xs font-semibold">
                                        Webinars
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-bold text-kibo-orange mb-2">
                                        Integrate SEL and Human Values with Coding and Robotics in PreK-3 Classrooms
                                    </h3>
                                </div>
                            </a>

                            {/* Webinar 24 - Vimeo Video */}
                            <div
                                onClick={() => openVideoModal('vimeo-703872434')}
                                className="bg-purple-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                            >
                                <div className="relative">
                                    <div className="aspect-video bg-gray-300 flex items-center justify-center">
                                        <span className="text-gray-600 text-sm">Vimeo Video</span>
                                    </div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="bg-kibo-orange text-white rounded-full p-3 hover:bg-kibo-orange/90 transition-colors shadow-lg">
                                            <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="absolute top-2 right-2 bg-kibo-orange text-white px-2 py-1 rounded text-xs font-semibold">
                                        Webinars
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-bold text-kibo-orange mb-2">
                                        Develop PreK-4th Graders' Computational Thinking and STEAM Skills with KIBO
                                    </h3>
                                </div>
                            </div>

                            {/* Webinar 25 */}
                            <a
                                href="https://docs.google.com/presentation/d/e/2PACX-1vTJ9nvLeDe_gIqYeuI0AMMEdvQsaQgkEZVoEM9QQYwYCs68FB-u7V1q3at2DCk2hcnYgOfRk0qGdrBl/pub?start=false&loop=false&delayms=3000&slide=id.g794313abcb_2_0"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-purple-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow block"
                            >
                                <div className="relative">
                                    <img
                                        src="/src/assets/resources/whitepapers/Screenshot_4.png"
                                        alt="Webinar 25 - Google Slides Presentation"
                                        className="aspect-video w-full object-cover"
                                    />
                                    <div className="absolute top-2 right-2 bg-kibo-orange text-white px-2 py-1 rounded text-xs font-semibold">
                                        Webinars
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-bold text-kibo-orange mb-2">
                                        Early Childhood Technology: Supporting Child Development with Creative Coding
                                    </h3>
                                </div>
                            </a>

                        </div>
                    </section>

                </div>
            </main>

            <Footer />

            {/* Video Modal */}
            {selectedVideo && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
                    onClick={closeVideoModal}
                >
                    <div
                        className="bg-white rounded-lg overflow-hidden max-w-4xl w-full max-h-[90vh] relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={closeVideoModal}
                            className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-75 transition-colors"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        {/* Video Player */}
                        <div className="aspect-video">
                            {selectedVideo.startsWith('vimeo-') ? (
                                <iframe
                                    src={`https://player.vimeo.com/video/${selectedVideo.replace('vimeo-', '')}`}
                                    title="Vimeo video player"
                                    style={{ border: 0 }}
                                    allow="autoplay; fullscreen; picture-in-picture"
                                    allowFullScreen
                                    className="w-full h-full"
                                ></iframe>
                            ) : (
                                <iframe
                                    src={`https://www.youtube.com/embed/${selectedVideo}`}
                                    title="YouTube video player"
                                    style={{ border: 0 }}
                                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                    className="w-full h-full"
                                ></iframe>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default WhitePapersWebinars;