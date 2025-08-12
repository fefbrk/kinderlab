import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useAuth } from '../context/AuthContext';

const SignUpKiboHomeCourse: React.FC = () => {
  const { isInitializing } = useAuth();

  // Auth yüklenirken bekle
  if (isInitializing) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-kibo-purple to-kibo-orange overflow-hidden">
        <div className="container mx-auto px-4 flex items-center h-64 overflow-hidden">
          <div className="w-2/3">
            <h2 className="text-3xl font-bold text-white mb-4">
              Sign Up for the KIBO Home Robotics Course
            </h2>
            <p className="text-white/90 mb-6">
              An easy and affordable way to introduce coding to homeschoolers. The KIBO Home Robotics Course, designed specifically for homes and homeschools, support parents and caregivers as they introduce coding, robotics and engineering to their children.
            </p>
          </div>
          <div className="w-1/3 flex justify-end items-center h-full">
            <img
              src="/src/assets/kibo/athome/Homeschool-Curriculum-Cover-e1658166584970-231x206.webp"
              alt="KIBO Home Robotics Course"
              className="max-h-[90%] w-[55%] object-contain rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-orange-50 min-h-screen">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            {/* Course Description */}
            <div className="bg-purple-200 rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-orange-500 mb-6">
                An easy and affordable way to introduce coding to homeschoolers
              </h2>
              <p className="text-gray-700 mb-4">
                The KIBO Home Robotics Course, designed specifically for homes and homeschools, support parents and caregivers as they
                introduce coding, robotics and engineering to their children. KIBO is the screen-free robot kit for kids where young learners
                create, design, decorate and bring their own robot to life!
              </p>
              <p className="text-gray-700 mb-6">
                The course provides a step-by-step curriculum to introduce coding, robotics and STEAM concepts, along with the tested
                KIBO Robotics Kit. With the 3-month KIBO Home Robotics Course, you can easily and affordably integrate coding and robotics
                into your home-based learning. Order the KIBO Home Robotics Course today!
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* How does the program work? */}
              <div className="bg-purple-200 rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-purple-600 mb-4">How does the program work?</h3>
                <p className="text-gray-700 mb-4">
                  The program fee is $220, which includes shipping. Simply purchase the course from here and you'll receive the KIBO
                  Home Robotics Course package. You'll receive a KIBO Robot Kit and complete curriculum for your home use. You'll also get
                  weekly emails with guidance, suggestions, and activity ideas to support you and help guide your child's progress.
                </p>
                <div className="bg-orange-50 p-4 rounded-lg mb-4">
                  <img src="/src/assets/kibo/athome/home-resource1-225x300.jpg" alt="How does the program work" className="w-32 h-auto mx-auto mb-2" />
                  <p className="text-sm text-center text-purple-700">KIBO Home Robotics Guide</p>
                </div>
                <p className="text-gray-700 text-sm">
                  After the three month rental period ends, you can return the KIBO Robot Kit and curriculum materials
                  back to us for free. If you want to continue working with KIBO, you can choose to purchase the kit
                  and apply some of the program fee as a discount.
                </p>
              </div>

              {/* What do I get? */}
              <div className="bg-purple-200 rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-purple-600 mb-4">What do I get?</h3>
                <p className="text-gray-700 mb-4">The KIBO Home Robotics Course contains the following materials:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                  <li>KIBO 18 Robot Kit: the programmable, screen-free robot at the heart of the Home Robotics Course. The KIBO kit includes the robot, several attachment motors, wheels, sensors, outputs and art stages, and 18 programming blocks.</li>
                  <li>KIBO Home Robotics Guide: a booklet explaining the scope and sequence of the course curriculum along with tips specifically for homes and homeschools</li>
                  <li>Creating with KIBO: a course curriculum for you to use with your child. The open-ended lessons and project-based focus are perfect for a self-directed approach.</li>
                  <li>Activity Cards: stand-alone activity cards introducing single KIBO concepts</li>
                  <li>Engineering Design Journal: a workbook to support a larger project with KIBO</li>
                  <li>KIBO Workbook: an assessment you can use to document your child's knowledge</li>
                </ul>
                <p className="text-gray-700 text-sm">
                  All together, these materials could cost over $500, but you receive full use of them during the course for just $175.
                </p>
              </div>
            </div>

            {/* Notice */}
            <div className="bg-purple-200 rounded-lg shadow-lg p-8">
              <div className="bg-orange-50 border-l-4 border-orange-400 p-6 mb-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-orange-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-orange-800">
                      Online Registration Currently Unavailable
                    </h3>
                    <div className="mt-2 text-sm text-orange-700">
                      <p>
                        We are currently not accepting online registrations for the KIBO Home Robotics Course.
                        To rent KIBO materials and participate in the course, please visit our physical location.
                      </p>
                      <p className="mt-2">
                        You can still purchase KIBO kits directly from our <a href="/shop" className="font-medium underline text-orange-800 hover:text-orange-900">online shop</a>.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <h2 className="text-2xl font-bold text-purple-600 mb-4">
                  Interested in the KIBO Home Robotics Course?
                </h2>
                <p className="text-gray-700 mb-6">
                  Please contact us directly or visit our location to learn more about renting KIBO materials
                  and participating in our home robotics program.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="px-6 py-3 rounded-lg border border-kibo-purple text-kibo-purple hover:bg-kibo-orange hover:text-kibo-purple active:bg-kibo-orange active:text-kibo-purple transition-colors cursor-pointer"
                  >
                    Contact Us
                  </a>
                  <a
                    href="/shop"
                    className="px-6 py-3 rounded-lg border border-kibo-purple text-kibo-purple hover:bg-kibo-orange hover:text-kibo-purple active:bg-kibo-orange active:text-kibo-purple transition-colors cursor-pointer"
                  >
                    Shop KIBO Kits
                  </a>
                </div>
              </div>
            </div>

            {/* Terms and FAQ Section */}
            <div className="bg-purple-200 rounded-lg shadow-lg p-8 mt-8">
              <h2 className="text-2xl font-bold text-orange-500 mb-6 text-center">
                Terms, Conditions, and Frequently Asked Questions
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">What do I receive with the robotics course?</h4>
                    <p className="text-sm text-gray-700">
                      For the 3-month rental of the program, you'll get to use the KIBO 18 Robot Kit (value $530), two curriculum booklets (the KIBO Home Robotics Guide and Creating with KIBO), and a set of activity cards. These materials must be returned at the end of the 3-month period. You also receive the Engineering Design Journal and Assessment Workbook which are yours to keep.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">How does shipping work?</h4>
                    <p className="text-sm text-gray-700">
                      Shipping to you — to and back to us — is included in the price for anyone in the continental U.S! When you are ready to return the materials at the end of 3 months, you will use the included return shipping label. (Save your box to make it easier to return!) If you need a new label, you can contact us at support@kinderlabrobotics.com. If you live in the U.S. but outside the 48 continental states, we can arrange shipping at cost.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">How does the purchase option work?</h4>
                    <p className="text-sm text-gray-700">
                      If you'd like to keep the KIBO and materials at the end of the program, that is wonderful! The price to keep the entire kit is $530, and you will receive a discount of over $100 off the price of the materials. You will receive buyout instructions by email during the course.
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">What if I do not return the materials?</h4>
                    <p className="text-sm text-gray-700">
                      If you do not return the materials within the 10 day grace period after the end of the three-month course, we will bill your credit card on file for the full retail price of the materials. If your card expires, we will contact you for alternate payment.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">What if I damage KIBO or the components during the course?</h4>
                    <p className="text-sm text-gray-700">
                      Normal wear and tear is expected, and you will not be charged. In order to comply with shipping safety rules, we do not include batteries pre-installed in your KIBO. KIBO requires 4 AA batteries. Please remove batteries before sending KIBO back!
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Do you clean the kits between customers?</h4>
                    <p className="text-sm text-gray-700">
                      Every kit is completely cleaned when it returns to the factory, following the same procedures we use for our Technical Support page.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">What if I have other questions?</h4>
                    <p className="text-sm text-gray-700">
                      Please contact us at <a href="mailto:support@kinderlabrobotics.com" className="text-purple-600 hover:underline">support@kinderlabrobotics.com</a> with any questions about the KIBO Home Robotics Course.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SignUpKiboHomeCourse;