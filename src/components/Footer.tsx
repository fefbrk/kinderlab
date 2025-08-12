import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareXTwitter, faSquareInstagram, faSquareFacebook, faLinkedin, faSquareYoutube } from '@fortawesome/free-brands-svg-icons';
import { MessageCircle, Send } from "lucide-react";
import Logo from "@/assets/logo/kinderlab-logo-outline.png";
import NsfLogo from "@/assets/footer/national-science-foundation-68x68.png";
import Award1 from "@/assets/awards/academics-choice-award.png";
import Award2 from "@/assets/awards/ENG-Gift-Guide-Seal_transparent-300x300.png";
import Award3 from "@/assets/awards/2021-fin-white-CT.png";
import Award4 from "@/assets/awards/Best-Educational-Gifts-Badge.png";
import Award6 from "@/assets/awards/ED-TECH-Awards-Horizontal-RGB-1.png";
import Award7 from "@/assets/awards/Nevada-STEMList.png";

const Footer = () => {
  const awards = [Award1, Award2, Award3, Award4, Award6, Award7];
  const links1 = [
    { text: "About Us", href: "/about" },
    { text: "Customer Testimonials", href: "/testimonials" },
    { text: "Awards", href: "/awards" },
    { text: "Blog", href: "/blog" },
    { text: "Press Releases", href: "/press-releases" }
  ];
  const links2 = [
    { text: "Media Coverage", href: "/media-coverage" },
    { text: "Events", href: "/events" },
    { text: "Technical Support", href: "/technical-support" },
    { text: "Contact Us", href: "/contact" }
  ];

  return (
    <>
      <footer className="bg-kibo-purple text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
            
            {/* Column 1: Logo, Social */}
            <div className="flex flex-col items-center space-y-8 text-center">
              <img src={Logo} alt="KinderLab Robotics" className="w-60" />
              <div className="bg-kibo-purple-light/0 p-4 rounded-lg w-full max-w-xs">
                <h4 className="font-bold text-sm mb-3">FOLLOW US</h4>
                <div className="flex space-x-3 justify-center text-2xl">
                  <a href="https://x.com/KinderLabRobot" className="transition-colors hover:text-kibo-orange"><FontAwesomeIcon icon={faSquareXTwitter} /></a>
                  <a href="https://www.facebook.com/KinderLabRobotics/#" className="transition-colors hover:text-kibo-orange"><FontAwesomeIcon icon={faSquareFacebook} /></a>
                  <a href="https://www.instagram.com/kinderlabrobot/" className="transition-colors hover:text-kibo-orange"><FontAwesomeIcon icon={faSquareInstagram} /></a>
                  <a href="https://www.linkedin.com/company/kinderlab-robotics-inc-/" className="transition-colors hover:text-kibo-orange"><FontAwesomeIcon icon={faLinkedin} /></a>
                  <a href="https://www.youtube.com/channel/UCI1135I3x2d2Yq9x-mczpaw" className="transition-colors hover:text-kibo-orange"><FontAwesomeIcon icon={faSquareYoutube} /></a>
                </div>
              </div>
            </div>

            {/* Column 2: Links (Back to 2 columns) */}
            <div className="grid grid-cols-2 gap-x-8 pt-2">
              <div className="space-y-2">
                {links1.map(link => (
                  <Link key={link.text} to={link.href} className="block py-1 transition-colors hover:text-kibo-orange">
                    {link.text}
                  </Link>
                ))}
              </div>
              <div className="space-y-2">
                {links2.map(link => (
                  <Link key={link.text} to={link.href} className="block py-1 transition-colors hover:text-kibo-orange">
                    {link.text}
                  </Link>
                ))}
              </div>
            </div>

            {/* Column 3: NSF & Awards */}
            <div className="space-y-12">
              <div className="flex items-start gap-4">
                <img 
                  src={NsfLogo} 
                  alt="NSF Logo" 
                  className="w-16 h-16 flex-shrink-0"
                />
                <div>
                  <h4 className="font-bold text-sm">NATIONAL SCIENCE FOUNDATION</h4>
                  <p className="text-xs text-white/70 mt-1">
                    Research and development has been generously funded in part by STTR grants from the National Science Foundation.
                  </p>
                </div>
              </div>
              <div className="flex justify-start gap-2">
                {awards.map((awardSrc, index) => (
                  <div key={index} className="bg-transparent p-1 rounded-lg w-20 h-20 flex items-center justify-center">
                    <img 
                      src={awardSrc} 
                      alt={`Award ${index + 1}`} 
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="bg-kibo-orange text-kibo-purple py-2">
        <div className="container mx-auto px-4 text-center text-xs font-bold">
          <p className="break-words">
            © Copyright 2025 KinderLab Robotics. All Rights Reserved. • 7 Sun Street • Waltham, MA 02453 • 
            <a href="mailto:info@kinderlabrobotics.com" className="hover:text-white transition-colors"> info@kinderlabrobotics.com</a> •
            781-894-4022 • 
            <Link to="/privacy-policy" className="hover:text-white transition-colors"> Privacy Policy</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;