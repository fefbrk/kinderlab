import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Play, X } from 'lucide-react';

const Tutorials: React.FC = () => {
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
                            Coding Robot Tutorials
                        </h1>
                        <p className="text-white/90 mb-6 text-lg max-w-4xl">
                            Get going with the screen-free KIBO robot right out of the box with these video tutorials. From scanning the wooden programming blocks, to using If/Then Repeat Loops, to using the sensors, there is a coding robot tutorial below that will help you get started with KIBO. Need more help, check out our{' '}
                            <a
                                href="#"
                                className="text-white underline hover:text-gray-200 transition-colors font-semibold"
                            >
                                Getting Started
                            </a>{' '}
                            page.
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <main className="flex-grow bg-orange-50">
                <div className="container mx-auto px-4 py-12">
                    {/* Tutorial Videos Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {/* Tutorial Card 1 */}
                        <div
                            onClick={() => openVideoModal('Oewpiod8Dmg')}
                            className="bg-purple-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                        >
                            <div className="relative">
                                <img
                                    src="https://img.youtube.com/vi/Oewpiod8Dmg/maxresdefault.jpg"
                                    alt="Use the KIBO Expression Module"
                                    className="aspect-video w-full object-cover"
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="bg-kibo-orange text-white rounded-full p-3 hover:bg-kibo-orange/90 transition-colors shadow-lg">
                                        <Play className="w-6 h-6 ml-1" />
                                    </div>
                                </div>
                                <div className="absolute top-2 right-2 bg-kibo-orange text-white px-2 py-1 rounded text-xs font-semibold">
                                    Tutorials
                                </div>
                            </div>
                            <div className="p-4">
                                <h3 className="text-lg font-bold text-kibo-orange mb-2">
                                    Use the KIBO Expression Module
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    In this video you will be introduced to the KIBO Expression Module. You’ll see what the Expression Module adds to KIBO, how to use it, and the kinds of activities it supports – literacy, math, social studies and creative activities.
                                </p>
                            </div>
                        </div>

                        {/* Tutorial Card 2 */}
                        <div
                            onClick={() => openVideoModal('9SQEgBZ0Lgo')}
                            className="bg-purple-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                        >
                            <div className="relative">
                                <img
                                    src="https://img.youtube.com/vi/9SQEgBZ0Lgo/maxresdefault.jpg"
                                    alt="Use Nesting If's Inside KIBO's Repeat Loops"
                                    className="aspect-video w-full object-cover"
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="bg-kibo-orange text-white rounded-full p-3 hover:bg-kibo-orange/90 transition-colors shadow-lg">
                                        <Play className="w-6 h-6 ml-1" />
                                    </div>
                                </div>
                                <div className="absolute top-2 right-2 bg-kibo-orange text-white px-2 py-1 rounded text-xs font-semibold">
                                    Tutorials
                                </div>
                            </div>
                            <div className="p-4">
                                <h3 className="text-lg font-bold text-kibo-orange mb-2">
                                    Use Nesting If's Inside KIBO's Repeat Loops
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    This video demonstrates advanced programming with KIBO, showing IF/THEN programming functions with KIBO.
                                </p>
                            </div>
                        </div>

                        {/* Tutorial Card 3 */}
                        <div
                            onClick={() => openVideoModal('M1nYJJIKgos')}
                            className="bg-purple-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                        >
                            <div className="relative">
                                <img
                                    src="https://img.youtube.com/vi/M1nYJJIKgos/maxresdefault.jpg"
                                    alt="Use KIBO's IF and End/IF Blocks"
                                    className="aspect-video w-full object-cover"
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="bg-kibo-orange text-white rounded-full p-3 hover:bg-kibo-orange/90 transition-colors shadow-lg">
                                        <Play className="w-6 h-6 ml-1" />
                                    </div>
                                </div>
                                <div className="absolute top-2 right-2 bg-kibo-orange text-white px-2 py-1 rounded text-xs font-semibold">
                                    Tutorials
                                </div>
                            </div>
                            <div className="p-4">
                                <h3 className="text-lg font-bold text-kibo-orange mb-2">
                                    Use KIBO's IF and End/IF Blocks
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    This video demonstrates the use of the KIBO IF and End/IF blocks to create a conditional statement when creating a programming sequence.
                                </p>
                            </div>
                        </div>

                        {/* Tutorial Card 4 */}
                        <div
                            onClick={() => openVideoModal('J6cPQyKtUuo')}
                            className="bg-purple-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                        >
                            <div className="relative">
                                <img
                                    src="https://img.youtube.com/vi/J6cPQyKtUuo/maxresdefault.jpg"
                                    alt="Use KIBO's Distance Sensor with Repeat"
                                    className="aspect-video w-full object-cover"
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="bg-kibo-orange text-white rounded-full p-3 hover:bg-kibo-orange/90 transition-colors shadow-lg">
                                        <Play className="w-6 h-6 ml-1" />
                                    </div>
                                </div>
                                <div className="absolute top-2 right-2 bg-kibo-orange text-white px-2 py-1 rounded text-xs font-semibold">
                                    Tutorials
                                </div>
                            </div>
                            <div className="p-4">
                                <h3 className="text-lg font-bold text-kibo-orange mb-2">
                                    Use KIBO's Distance Sensor with Repeat
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    This video shows how to create a repeat loop while using KIBO’s distance sensor (telescope).
                                </p>
                            </div>
                        </div>

                        {/* Tutorial Card 5 */}
                        <div
                            onClick={() => openVideoModal('-AfcbbuYjN8')}
                            className="bg-purple-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                        >
                            <div className="relative">
                                <img
                                    src="https://img.youtube.com/vi/-AfcbbuYjN8/maxresdefault.jpg"
                                    alt="Use KIBOs Wait for Clap Sound Sensor"
                                    className="aspect-video w-full object-cover"
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="bg-kibo-orange text-white rounded-full p-3 hover:bg-kibo-orange/90 transition-colors shadow-lg">
                                        <Play className="w-6 h-6 ml-1" />
                                    </div>
                                </div>
                                <div className="absolute top-2 right-2 bg-kibo-orange text-white px-2 py-1 rounded text-xs font-semibold">
                                    Tutorials
                                </div>
                            </div>
                            <div className="p-4">
                                <h3 className="text-lg font-bold text-kibo-orange mb-2">
                                    Use KIBOs Wait for Clap Sound Sensor
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    This video explains how to use the KIBO Sound Sensor (ear) with the Wait for Clap programming block.
                                </p>
                            </div>
                        </div>

                        {/* Tutorial Card 6 */}
                        <div
                            onClick={() => openVideoModal('2bU_nGlKqOQ')}
                            className="bg-purple-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                        >
                            <div className="relative">
                                <img
                                    src="https://img.youtube.com/vi/2bU_nGlKqOQ/maxresdefault.jpg"
                                    alt="Introducing KIBO's Sensors"
                                    className="aspect-video w-full object-cover"
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="bg-kibo-orange text-white rounded-full p-3 hover:bg-kibo-orange/90 transition-colors shadow-lg">
                                        <Play className="w-6 h-6 ml-1" />
                                    </div>
                                </div>
                                <div className="absolute top-2 right-2 bg-kibo-orange text-white px-2 py-1 rounded text-xs font-semibold">
                                    Tutorials
                                </div>
                            </div>
                            <div className="p-4">
                                <h3 className="text-lg font-bold text-kibo-orange mb-2">
                                    Introducing KIBO's Sensors
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    This video introduces KIBO’s sound (ear), light (eye) and distance (telescope), and lightbulb sensors.
                                </p>
                            </div>
                        </div>

                        {/* Tutorial Card 7 */}
                        <div
                            onClick={() => openVideoModal('F7pbknI5JOI')}
                            className="bg-purple-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                        >
                            <div className="relative">
                                <img
                                    src="https://img.youtube.com/vi/F7pbknI5JOI/maxresdefault.jpg"
                                    alt="Use KIBO Repeat Loops with Parameters"
                                    className="aspect-video w-full object-cover"
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="bg-kibo-orange text-white rounded-full p-3 hover:bg-kibo-orange/90 transition-colors shadow-lg">
                                        <Play className="w-6 h-6 ml-1" />
                                    </div>
                                </div>
                                <div className="absolute top-2 right-2 bg-kibo-orange text-white px-2 py-1 rounded text-xs font-semibold">
                                    Tutorials
                                </div>
                            </div>
                            <div className="p-4">
                                <h3 className="text-lg font-bold text-kibo-orange mb-2">
                                    Use KIBO Repeat Loops with Parameters
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    This video explains how to use KIBO’s repeat loop programming blocks with the number parameter cards.
                                </p>
                            </div>
                        </div>

                        {/* Tutorial Card 8 */}
                        <div
                            onClick={() => openVideoModal('XswmYMxrd-E')}
                            className="bg-purple-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                        >
                            <div className="relative">
                                <img
                                    src="https://img.youtube.com/vi/XswmYMxrd-E/maxresdefault.jpg"
                                    alt="Creating and Scanning a Program with KIBO"
                                    className="aspect-video w-full object-cover"
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="bg-kibo-orange text-white rounded-full p-3 hover:bg-kibo-orange/90 transition-colors shadow-lg">
                                        <Play className="w-6 h-6 ml-1" />
                                    </div>
                                </div>
                                <div className="absolute top-2 right-2 bg-kibo-orange text-white px-2 py-1 rounded text-xs font-semibold">
                                    Tutorials
                                </div>
                            </div>
                            <div className="p-4">
                                <h3 className="text-lg font-bold text-kibo-orange mb-2">
                                    Creating and Scanning a Program with KIBO
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    This video demonstrates how to scan a program and create a programming sequence with KIBO.
                                </p>
                            </div>
                        </div>

                        {/* Tutorial Card 9 */}
                        <div
                            onClick={() => openVideoModal('3_WSE3Djmc0')}
                            className="bg-purple-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                        >
                            <div className="relative">
                                <img
                                    src="https://img.youtube.com/vi/3_WSE3Djmc0/maxresdefault.jpg"
                                    alt="Introducing KIBO's Programming Blocks"
                                    className="aspect-video w-full object-cover"
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="bg-kibo-orange text-white rounded-full p-3 hover:bg-kibo-orange/90 transition-colors shadow-lg">
                                        <Play className="w-6 h-6 ml-1" />
                                    </div>
                                </div>
                                <div className="absolute top-2 right-2 bg-kibo-orange text-white px-2 py-1 rounded text-xs font-semibold">
                                    Tutorials
                                </div>
                            </div>
                            <div className="p-4">
                                <h3 className="text-lg font-bold text-kibo-orange mb-2">
                                    Introducing KIBO's Programming Blocks
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    This video introduces you to KIBO’s programming blocks and how to create a coding sequence.
                                </p>
                            </div>
                        </div>

                        {/* Tutorial Card 10 */}
                        <div
                            onClick={() => openVideoModal('_KD1OH3qVTQ')}
                            className="bg-purple-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                        >
                            <div className="relative">
                                <img
                                    src="https://img.youtube.com/vi/_KD1OH3qVTQ/maxresdefault.jpg"
                                    alt="Introducing the Playful KIBO Robot"
                                    className="aspect-video w-full object-cover"
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="bg-kibo-orange text-white rounded-full p-3 hover:bg-kibo-orange/90 transition-colors shadow-lg">
                                        <Play className="w-6 h-6 ml-1" />
                                    </div>
                                </div>
                                <div className="absolute top-2 right-2 bg-kibo-orange text-white px-2 py-1 rounded text-xs font-semibold">
                                    Tutorials
                                </div>
                            </div>
                            <div className="p-4">
                                <h3 className="text-lg font-bold text-kibo-orange mb-2">
                                    Introducing the Playful KIBO Robot
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    This video introduces the KIBO robot and shows you how to assemble your robot to get it moving – from the wheels to the sensors, let’s start building and coding!
                                </p>
                            </div>
                        </div>

                    </div>
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
                            <iframe
                                src={`https://www.youtube.com/embed/${selectedVideo}`}
                                title="YouTube video player"
                                style={{ border: 0 }}
                                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                className="w-full h-full"
                            ></iframe>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Tutorials;