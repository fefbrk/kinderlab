import { useRef } from "react";
import { Clock, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const NewsTicker = () => {
  const plugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );
  
  const news = [
    "Announcing Exploring with KIBO - Our New 60 Hour KIBO Curriculum for Grades 3-5! Learn More!",
    "Schedule your personalized virtual 1:1 KIBO demo today!",
    "Hear about KIBO “STEAM Explorer” Classroom Packages? Get KIBO, ALL Extension Sets & ALL Curriculum!",
    "Introduce Artificial Intelligence (AI) with KIBO! Get your FREE to 5-lesson curriculum, Thinking with KIBO.",
    "KIBO is again listed in Purdue U’s 2024 Engineering Gift Guide - full of engineering inspired holiday gifts!"
  ];

  return (
    <div className="bg-gradient-to-r from-primary to-secondary text-white py-0">
      <div className="container mx-auto px-4">
        <Carousel
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <div className="flex items-center justify-center gap-4">
            <div className="flex items-center gap-2 text-sm font-medium">
              <Clock className="h-4 w-4" />
              <span>KIBO News!</span>
            </div>

            <CarouselPrevious variant="ghost" className="relative translate-y-0 left-0 top-0 h-6 w-6 border-none !bg-transparent text-white hover:text-orange-500" />

            <CarouselContent className="flex-1 max-w-4xl">
              {news.map((item, index) => (
                <CarouselItem key={index}>
                  <div className="p-1 text-center text-sm font-medium">
                    {item}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <CarouselNext variant="ghost" className="relative translate-y-0 right-0 top-0 h-6 w-6 border-none !bg-transparent text-white hover:text-purple-500" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default NewsTicker;
