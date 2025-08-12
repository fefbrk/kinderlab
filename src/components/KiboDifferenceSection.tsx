import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Card1Img from "@/assets/kibodif/Three-Little-Pigs-and-Wolf.png";
import Card2Img from "@/assets/kibodif/Superhero-e1658161117861.png";
import Card3Img from "@/assets/kibodif/Floor-Map-Find-Image-1.png";
import Card4Img from "@/assets/kibodif/Marker-Extension-Set-Drawing-scaled-1.png";
import kiboDiffBg from '@/assets/kibodif/bg-bigfull.png';
import backFaceBg from '@/assets/kibodif/kibo-simple-block2.png';

// --- Local SVG Icon Components to bypass import issues ---
const Cube = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
    <path d="m3.3 8 8.7 5 8.7-5"/>
    <path d="M12 22V12"/>
  </svg>
);

const Palette = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
    <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
    <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
    <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.667 0-.422-.02-.816-.046-1.167-.06-.849.6-1.616 1.44-1.616.805 0 1.46.627 1.46 1.4v.193c0 .813.662 1.472 1.478 1.472.826 0 1.5-.66 1.5-1.482V12c0-5.5-4.5-10-10-10z"/>
  </svg>
);

const BrainCircuit = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.5 3.765 4 4 0 0 0 .5 2.022A3 3 0 0 0 9 14.5a3.62 3.62 0 0 0 2 3.224V19a2 2 0 0 0 2 2h.5a2 2 0 0 0 2-2v-1.276a3.62 3.62 0 0 0 2-3.224A3 3 0 0 0 20.5 12a4 4 0 0 0-2.5-3.765 4 4 0 0 0 .5-2.022A3 3 0 0 0 12 5Z"/>
        <path d="M4.5 12.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"/><path d="M5 18a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"/>
        <path d="M9 18a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"/><path d="M15 18a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"/>
        <path d="M19.5 12.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"/><path d="M16 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"/>
        <path d="M9 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"/>
    </svg>
);

const Hand = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"/><path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2"/>
    <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8"/><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8V9a2 2 0 1 1 4 0v5"/>
  </svg>
);

const cardData = [
    {
        mainTitle: "Build.",
        mainTitleColor: "text-kibo-purple",
        title: "Constructive Play",
        icon: Cube,
        image: Card1Img,
        details: [
            "Build upon Kibo robotics for kids with arts, crafts, and creativity",
            "Create architectural masterpieces or characters then program KIBO to come alive",
            "Add the Building Brick Extension Set to transform KIBO robotics for kids into a moving creation using popular Legos®",
        ],
    },
    {
        mainTitle: "Art.",
        mainTitleColor: "text-kibo-purple",
        title: "Encourage Creativity",
        icon: Palette,
        image: Card2Img,
        details: [
            "Decorate KIBO with arts and crafts for hours of creative fun",
            "Transform KIBO robotics for kids into anything imaginable – A storybook character, cultural dancer, class pet, race car, planet...",
            "Learn STEAM concepts through play and creative self-expression with robotics for kids",
        ],
    },
    {
        mainTitle: "Code.",
        mainTitleColor: "text-kibo-purple",
        title: "Problem Solving",
        icon: BrainCircuit,
        image: Card3Img,
        details: [
            "Discover essential learning tools such as sequential thought, cause and effect, and more",
            "Develop perseverance through the trial and error nature of coding with KIBO robotics for kids",
            "Support emotional growth through determination to get desired results",
        ],
    },
    {
        mainTitle: "Play!",
        mainTitleColor: "text-kibo-orange",
        title: "Hands On Learning",
        icon: Hand,
        image: Card4Img,
        details: [
            "Code KIBO robotics for kids with tangible programming blocks, offering a screen-free experience",
            "Reinforce learning through movement, play, building, and engagement",
            "Connect programming concepts to concrete, physical objects, in an age-appropriate way",
        ],
    },
];

const KiboDifferenceSection = () => {
  return (
    <section className="relative py-12 bg-white" style={{ backgroundImage: `url(${kiboDiffBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-4">
          {cardData.map((card, index) => (
            <div key={index} className="text-center">
              <h2 className={`text-4xl font-bold mb-4 ${card.mainTitleColor}`}>{card.mainTitle}</h2>
              <div className="w-full h-96 rounded-2xl overflow-hidden shadow-2xl group">
                <div className={`w-full h-full rounded-2xl overflow-hidden shadow-2xl relative border-4 ${card.mainTitle === "Play!" ? 'border-kibo-orange' : 'border-kibo-purple'} flex items-end justify-center text-white`}>
                  <img src={card.image} alt={card.title} className="w-full h-full object-cover absolute transition-transform duration-300 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/0 transition-opacity duration-300 group-hover:bg-black/70" />
                  <div className="absolute inset-0 z-10 flex flex-col justify-center items-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="p-4 md:p-6 text-white text-center bg-black/30 rounded-lg">
                      <ul className="text-base md:text-lg font-semibold leading-relaxed drop-shadow-[2px_2px_4px_rgba(0,0,0,1)] [text-shadow:_2px_2px_4px_rgb(0_0_0_/_100%)] list-disc list-inside space-y-2">
                        {card.details.map((detail, i) => <li key={i}>{detail}</li>)}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-lg md:text-xl font-bold mt-4 text-white">{card.title}</h3>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default KiboDifferenceSection;
