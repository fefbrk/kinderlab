import React, { useState } from 'react';
import kiboBe4 from '../assets/whykibo/fun5.jpg';
import fun4 from '../assets/whykibo/kibo-be1.jpg';
import fun5 from '../assets/whykibo/kibo-be2.jpg';
import fun6 from '../assets/whykibo/kibo-draw-children-500pxsq.jpg';
import fun7 from '../assets/whykibo/fun7.jpg';
import kiboBe2 from '../assets/whykibo/fun6.jpg';
import fun3 from '../assets/whykibo/kibo-be4.jpg';
import kiboDrawChildren from '../assets/whykibo/fun4.jpg';
import kiboHi from '../assets/whykibo/fun3.jpg';
import home from '../assets/whykibo/fun2.jpg';

interface CarouselImage {
  src: string;
  alt: string;
  title?: string;
  description?: string;
}

interface KiboCarouselProps {
  images?: CarouselImage[];
}

const KiboCarousel: React.FC<KiboCarouselProps> = ({ images: propImages }) => {
  const defaultImages = [
    { src: fun3, alt: "Creative Play", title: "Creative Play", description: "Dream it. Build it. Decorate it. Code it. Playing with a KIBO coding robotics kit is letting creativity soar to new heights." },
    { src: fun4, alt: "Problem Solving", title: "Problem Solving", description: "KIBO builds on the basics of coding robotics and leads to the understanding of sequential thought, computational thinking, cause and effect, and trial and error." },
    { src: fun5, alt: "Critical Thinking", title: "Critical Thinking", description: "Step by step, children explore, discover, learn, and achieve. They make mistakes and then make it right." },
    { src: fun6, alt: "Versatility", title: "Versatility", description: "With so many sensory and adaptive learning opportunities there's never a dull moment with KIBO coding robotics kits." },
    { src: fun7, alt: "Hands-On Learning", title: "Hands-On Learning", description: "KIBO provides tactile, physical learning experiences that engage multiple senses and learning styles." },
    { src: kiboBe2, alt: "Screen-Free Fun", title: "Screen-Free Fun", description: "No screens needed! KIBO encourages children to unplug and engage with the physical world around them." },
    { src: kiboBe4, alt: "Social Learning", title: "Social Learning", description: "KIBO promotes collaboration and teamwork as children work together to solve problems and create projects." },
    { src: kiboDrawChildren, alt: "Artistic Expression", title: "Artistic Expression", description: "Children can decorate and customize their KIBO robots, combining art and technology in meaningful ways." },
    { src: kiboHi, alt: "Age-Appropriate Design", title: "Age-Appropriate Design", description: "Designed specifically for young learners, KIBO grows with children from preschool through elementary school." },
    { src: home, alt: "Research-Based", title: "Research-Based", description: "Built on 20+ years of research in early childhood development and computer science education." }
  ];
  
  const images = propImages || defaultImages;

  const [currentIndex, setCurrentIndex] = useState(0);

  const getVisibleImages = () => {
    const visibleImages = [];
    
    // En sol görsel (yanın yanı)
    const farLeftIndex = currentIndex === 0 ? (currentIndex === 1 ? images.length - 1 : images.length - 2) : (currentIndex === 1 ? images.length - 1 : currentIndex - 2);
    visibleImages.push({ ...images[farLeftIndex], position: 'far-left', index: farLeftIndex });
    
    // Sol görsel (yan)
    const leftIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    visibleImages.push({ ...images[leftIndex], position: 'left', index: leftIndex });
    
    // Merkez görsel (ana)
    visibleImages.push({ ...images[currentIndex], position: 'center', index: currentIndex });
    
    // Sağ görsel (yan)
    const rightIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    visibleImages.push({ ...images[rightIndex], position: 'right', index: rightIndex });
    
    // En sağ görsel (yanın yanı)
    const farRightIndex = currentIndex === images.length - 1 ? (currentIndex === images.length - 2 ? 0 : 1) : (currentIndex === images.length - 2 ? 0 : currentIndex + 2);
    visibleImages.push({ ...images[farRightIndex], position: 'far-right', index: farRightIndex });
    
    return visibleImages;
  };

  const handleImageClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full h-96 overflow-hidden rounded-xl mb-8">
      <div className="flex items-center justify-center h-full gap-4">
        {getVisibleImages().map((image, idx) => {
          let sizeClass = '';
          let opacityClass = '';
          let zIndexClass = '';
          
          switch(image.position) {
            case 'center':
              sizeClass = 'w-60 h-72';
              opacityClass = 'opacity-100';
              zIndexClass = 'z-30';
              break;
            case 'left':
            case 'right':
              sizeClass = 'w-44 h-56';
              opacityClass = 'opacity-80 hover:opacity-90';
              zIndexClass = 'z-20';
              break;
            case 'far-left':
            case 'far-right':
              sizeClass = 'w-28 h-40';
              opacityClass = 'opacity-50 hover:opacity-70';
              zIndexClass = 'z-10';
              break;
            default:
              sizeClass = 'w-40 h-48';
              opacityClass = 'opacity-70';
              zIndexClass = 'z-10';
          }
          
          return (
            <div
              key={`${image.index}-${idx}`}
              className={`relative cursor-pointer transition-all duration-300 ${sizeClass} ${opacityClass} ${zIndexClass}`}
              onClick={() => handleImageClick(image.index)}
            >
              <img
                className="object-cover w-full h-full rounded-lg shadow-lg"
                src={image.src}
                alt={image.alt || image.title || 'KIBO Activity'}
              />
            </div>
          );
        })}
      </div>
      
      {/* Navigation dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 bg-white/50 px-3 py-2 rounded-full">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentIndex ? 'bg-kibo-purple' : 'bg-kibo-orange/90 hover:bg-kibo-purple/20'
            }`}
            onClick={() => handleImageClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default KiboCarousel;