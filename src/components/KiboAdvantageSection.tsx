import { useState, useEffect, useRef } from 'react';
import kiboCatapult from '@/assets/hero/kibo-catapult.png';

// Helper component for the count-up animation
const AnimatedNumber = ({ target }: { target: string }) => {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const targetNumber = parseInt(target.replace(/,/g, ''), 10);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    const duration = 2000; // 2 seconds
                    const startTime = Date.now();

                    const animate = () => {
                        const currentTime = Date.now();
                        const elapsedTime = currentTime - startTime;
                        const progress = Math.min(elapsedTime / duration, 1);

                        const currentCount = Math.floor(progress * targetNumber);
                        setCount(currentCount);

                        if (progress < 1) {
                            requestAnimationFrame(animate);
                        } else {
                            setCount(targetNumber); // Ensure it ends on the exact number
                        }
                    };

                    requestAnimationFrame(animate);
                    observer.disconnect(); // Animate only once
                }
            },
            { threshold: 0.1 } // Start animation when 10% of the element is visible
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [targetNumber]);

    return (
        <div ref={ref} className="text-5xl font-bold text-kibo-orange mb-2">
            {count.toLocaleString()}+
        </div>
    );
};

const KiboAdvantageSection = () => {
    const stats = [
        {
            number: "10,000",
            label: "of Children in 55 US States & Territories over 70+ Countries"
        },
        {
            number: "20",
            label: "Years of Research"
        },
        {
            number: "9",
            label: "Years of KIBO"
        },
        {
            number: "100",
            label: "Screen-free"
        }
    ];

    const sectionRef = useRef<HTMLDivElement>(null);
    const [carPosition, setCarPosition] = useState(100); // Start from right (100%)

    const handleScroll = () => {
        if (!sectionRef.current) return;

        const { top, height } = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        const startPoint = windowHeight;
        const endPoint = -height;
        const totalDistance = startPoint - endPoint;
        const currentProgress = startPoint - top;
        const progress = currentProgress / totalDistance;
        const clampedProgress = Math.max(0, Math.min(1, progress));

        // Reverse direction: start from 120% and go to -20% (right to left)
        setCarPosition(110 - clampedProgress * 140);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section ref={sectionRef} className="pt-20 pb-12 bg-orange-50 relative overflow-x-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-10">
                    <h2 className="text-4xl font-bold text-kibo-orange">
                        The KIBO Advantage
                    </h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <AnimatedNumber target={stat.number} />
                            <div className="text-sm text-muted-foreground font-semibold">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            {/* The Road and The Car - Moving Right to Left */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-kibo-purple z-10">
                <img
                    src={kiboCatapult}
                    alt="KIBO Catapult"
                    className="absolute top-0 z-0"
                    style={{
                        left: `${carPosition}%`,
                        transform: 'translate(-50%, -78%) scaleX(1) scale(0.6)',
                        maxWidth: 'none'
                    }}
                />
            </div>
        </section>
    );
};

export default KiboAdvantageSection;