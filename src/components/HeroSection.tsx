import { useState, useEffect } from "react";
import heroBackground from "@/assets/hero/bg-kinderlab-block.png";
import kiboRobotHi from "@/assets/hero/kibo-hi.png";

// Gallery images
import gallery1 from "@/assets/hero/Buildling-Block-Extension-Play.jpg";
import gallery11 from "@/assets/hero/Group-work.jpg";
import gallery6 from "@/assets/hero/KIBO-Dancer-from-Africa-1-scaled.jpeg";
import gallery9 from "@/assets/hero/Lego-Masterpiece.jpg";
import gallery3 from "@/assets/hero/Parent-and-child-scaled.jpg";
import gallery8 from "@/assets/hero/Three-Kids.png";
import gallery10 from "@/assets/hero/Two-Kids.png";
import gallery5 from "@/assets/hero/Using-Sensors-scaled.jpg";
import gallery7 from "@/assets/hero/Wheels-and-Under-the-Hood-scaled.jpg";
import gallery4 from "@/assets/hero/ft-kibo.png";
import gallery2 from "@/assets/hero/up-preschool2-jumbo.jpg";

const HeroSection = () => {
  const [isAnimated, setIsAnimated] = useState(false);

  const galleryImages = [
    { src: gallery1, title: "Constructive Play", description: "Kids can build upon KIBO with arts, crafts, and creativity! KIBO grows to new heights and depths, and delivers architectural masterpieces or characters that young minds can then program and interact with. And with the Building Brick Extension Set, KIBO can even transform into a moving interactive creation using popular Legos®." },
    { src: gallery2, title: "Problem Solving", description: "With KIBO’s programmable wooden building blocks, kids discover essential learning tools such as sequential thought, cause and effect, and more. With the trial and error nature of the best robot for kids, when programming KIBO, children problem solve as they develop their social emotional learning, perseverance, and determination." },
    { src: gallery3, title: "Critical Thinking", description: "When a child wants KIBO to perform a task, they consider the steps to get it done. These tactical, critical thinking skills are applied when setting up programming blocks in a sequential order. As KIBO performs the commands, the child analyzes the result to determine if KIBO performed as it should. They can try, try again." },
    { src: gallery4, title: "Versatile", description: "One of the reasons we say KIBO is the best robot for kids is due to the versatility that KIBO provides. Endless hours of imagination, ingenuity, and creativity. No one KIBO needs to be alike, from the changing of wheels, to the sequence of actions, to the artistic opportunities it affords." },
    { src: gallery5, title: "Sensory & Adaptive Learning", description: "Another reason KIBO is the best robot for kids are are all the different opportunities to use KIBOs senses and outputs – sight, distance, lights, and sound. Kids can explore these senses with KIBO and determine what they want KIBO to “feel”, just as they use their senses!" },
    { src: gallery6, title: "Fun Activities", description: "KIBO is experiential learning through play. It is this generation’s playdough, Mr. Potato Head, and tinker toys, all rolled into one. KIBO can be a game, an art project, a science experiment, a geography lesson, even an interactive storyteller. With KIBO’s lesson plans and curricula, there are endless ways to bring on the fun." },
    { src: gallery7, title: "Durable, Safe, & Tested", description: "KIBO is built and designed for early learners. And kids love to explore, uncover, and dissect. The underbelly of KIBO even has a transparent covering so children can look inside and see and get involved in the technology. It’s made of durable materials that can withstand the activities and oopsies of kids as young as 3 years old." },
    { src: gallery8, title: "Backed by Solid Research", description: "Research…we have decades of it. KIBO is the result of 20+ years of research, led by Dr. Marina Bers, a leading researcher on early childhood development. Her research shows specific, powerful, and positive learning outcomes for young learners when working with KIBO." },
    { src: gallery9, title: "Screen-Free Learning and Play", description: "It’s a screen-free robot kit! Time to unplug from those devices and play! By navigating away from the computer, kids can physically engage with KIBO through unique activities, lesson plans, and their own imagination!" },
    { src: gallery10, title: "Purposeful Design", description: "KIBO was designed for PreK-5th graders to engage in STEAM learning, computational thinking, and 21st century skills. And using natural materials, KIBO offers a gender neutral, inclusive design for all learners." },
    { src: gallery11, title: "Tested and Approved", description: "KIBO is used and approved 55+ US states and territories, in 70+ countries, and by thousands of children and their caregivers. From classrooms, to museums, to afterschool programs and camps, kids can practice problem solving, critical thinking, and creative problem solving in a hands-on way, while having fun at the same time." }
  ];

  useEffect(() => {
    // Trigger the animation shortly after the component mounts
    const timer = setTimeout(() => {
      setIsAnimated(true);
    }, 200); // 100ms delay

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  return (
    <section
      className="relative h-[92vh] bg-black bg-cover bg-center bg-no-repeat overflow-x-hidden"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      {/* No overlay - background fully visible */}
      <div className="absolute inset-0 bg-black/50"></div>
      {/* KIBO Robot - Fixed positioning for smooth animation */}
      <img
        src={kiboRobotHi}
        alt="KIBO robot saying Hi"
        className="absolute max-w-xs transition-all ease-out z-30"
        style={{
          transitionDuration: '1500ms',
          left: isAnimated ? '20%' : '-100%',
          top: '30%',
          transform: 'translateY(-50%)'
        }}
      />

      <div className="relative z-10 container mx-auto px-4 h-full flex items-start justify-center pt-32">
        <div className="flex flex-col md:flex-row items-center gap-1 text-white w-full">
          {/* Image Column - Now empty space for robot */}
          <div className="md:w-1/3">
            {/* Robot will be positioned here via fixed positioning */}
          </div>

          {/* Text Column */}
          <div className="md:w-2/3 text-left">
            <h3 className="text-lg font-bold text-kibo-orange uppercase tracking-wider mb-2">
              Playful STEAM Robotics for Kids
            </h3>
            <h2 className="text-5xl font-bold text-kibo-purple mb-6">
              Screen-Less. Fun More.
            </h2>
            <div className="text-lg space-y-4 font-bold">
              <p className="text-white">
                Get ready to build, code, create, and explore using KIBO - hands-on
                STEAM robotics for kids. KIBO provides hours of exciting,
                imaginative, playful, and social learning experiences.
              </p>
              <p>
                <span className="text-gray-00 font-bold">
                  KIBO connects the arts with computer science through robotics designed
                  for elementary learners – with using any screens.
                </span>
                {' '}
                <span className="text-gray-00 font-bold">
                  With KIBO robotics for kids,
                  educators bring lessons to life, while kids use their own creativity and self-expression
                  to bring KIBO to life. They investigate their world, share discoveries,
                  develop their computational thinking and STEAM skills, solve problems, and
                  much more.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Image Gallery - Accordion Style */}
      <div className="absolute bottom-2 left-0 right-0 z-20">
        <div className="w-full px-2">
          <div className="group flex justify-center gap-2 max-w-8xl mx-auto">
            {galleryImages.map((image, index) => (
              <article
                key={index}
                className="group/article relative w-full rounded-xl overflow-hidden md:group-hover:[&:not(:hover)]:w-[20%] transition-all duration-300 ease-bounce-in before:absolute before:inset-x-0 before:bottom-0 before:h-1/3 before:bg-gradient-to-t before:from-black/50 before:transition-opacity md:before:opacity-0 md:hover:before:opacity-100 after:opacity-0 md:group-hover:[&:not(:hover)]:after:opacity-100 after:absolute after:inset-0 after:bg-black/60 after:transition-all cursor-pointer"
              >
                <div className="absolute inset-0 z-10 flex flex-col justify-end">
                  <div className="p-4 md:p-6 text-white md:opacity-0 group-hover/article:opacity-100 md:translate-y-2 group-hover/article:translate-y-0 transition duration-200 ease-bounce-out group-hover/article:delay-300">
                    <h3 className="text-lg md:text-xl font-bold mb-2 drop-shadow-[1px_1px_2px_rgba(0,0,0,0.8)] [text-shadow:_1px_1px_2px_rgb(0_0_0_/_80%)]">{image.title}</h3>
                    <p className="text-sm md:text-base leading-relaxed drop-shadow-[1px_1px_2px_rgba(0,0,0,0.8)] [text-shadow:_1px_1px_2px_rgb(0_0_0_/_80%)]">{image.description}</p>
                  </div>
                </div>
                <img
                  className="object-cover h-72 md:h-[350px] w-full"
                  src={image.src}
                  alt={image.title}
                />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;