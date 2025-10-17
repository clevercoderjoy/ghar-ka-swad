"use client";

// Removed Framer Motion imports
import { UtensilsCrossed, Users, Clock, Heart } from "lucide-react";
import { useRef, useState, useCallback } from "react";
import Image from "next/image";
import img2 from "public/assets/img2.jpg";

/**
 * Custom hook for card tilt animation for service cards
 */
function useCardTilt() {
  const [transform, setTransform] = useState("");
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;


    const rotateY = ((x - centerX) / centerX) * 15;
    const rotateX = -((y - centerY) / centerY) * 15;

    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
  }, []);

  // For accessibility: reset tilt on focus/blur
  const handleFocus = handleMouseLeave;
  const handleBlur = handleMouseLeave;

  return {
    cardRef,
    transform,
    handleMouseMove,
    handleMouseLeave,
    handleFocus,
    handleBlur,
  };
}

// ServiceCard component for each card
/**
 * Card for displaying a single service
 */
function ServiceCard({ service }: { service: typeof services[number] }) {
  const {
    cardRef,
    transform,
    handleMouseMove,
    handleMouseLeave,
    handleFocus,
    handleBlur,
  } = useCardTilt();

  return (
    <div className="group transition-all duration-700 ease-out opacity-100 translate-y-0">
      <div
        ref={cardRef}
        tabIndex={0}
        style={{
          transform: transform,
          transition: "transform 0.1s ease-out",
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
        className="relative h-full p-6 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl hover:shadow-2xl transition-shadow duration-100 overflow-hidden focus:outline-none"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onFocus={handleFocus}
        onBlur={handleBlur}
        aria-label={service.title}
      >
        {/* Glass reflection effect */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/20 via-transparent to-transparent" style={{ transform: "translateZ(20px)" }} />
        {/* Ambient light effects */}
        <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-200" />
        {/* Content */}
        <div className="relative z-10 space-y-4 sm:space-y-5" style={{ transform: "translateZ(40px)" }}>
          {/* Icon Container - perfectly centered */}
          <div className="w-12 h-12 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center transition-colors duration-300 group-hover:bg-primary/20">
            <service.icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary transition-transform duration-200 group-hover:scale-110" />
          </div>
          {/* Title */}
          <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-200 text-center">
            {service.title}
          </h3>
          {/* Description */}
          <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
            {service.description}
          </p>
        </div>
        {/* Hover gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-3xl" />
      </div>
    </div>
  );
}

const services = [
  {
    icon: UtensilsCrossed,
    title: "Daily Tiffin Service",
    description: "Get fresh, घर का खाना in घर का स्वाद delivered daily at your doorstep. Perfect for working professionals and students."
  },
  {
    icon: Users,
    title: "Catering Services",
    description: "From office lunches to house parties to kitty parties to office meetings We've got you all covered."
  },
  {
    icon: Clock,
    title: "3-Time tiffin",
    description: "Choose your preferred meal combination - breakfast, lunch or dinner. We deliver you all."
  },
  {
    icon: Heart,
    title: "Made with Love",
    description: "Every meal is prepared with love & care by our mother. We eat the same food we serve our customers."
  }
];

/**
 * Services section for homepage
 * Shows all service cards
 */
export function Services() {
  // Removed useInView, always show content

  return (
    <section
      id="services"
      className="py-28 sm:py-36 md:py-56 relative overflow-hidden bg-cover bg-center bg-no-repeat"
    >
      {/* Optimized background image */}
      <Image
        src={img2}
        alt="Services Background"
        fill
        priority
        placeholder="blur"
        style={{ objectFit: "cover", objectPosition: "center 0%", zIndex: 0 }}
        className="absolute inset-0 w-full h-full"
      />
      {/* Black backdrop and blur over background image */}
      <div className="absolute inset-0 z-0">
        {/* Black overlay for contrast */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]" />
        {/* Glass reflection effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent" />
        {/* Ambient light effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 blur-xl opacity-30 animate-pulse" />
      </div>

      <div className="container px-4 relative z-10">
        <div
          className="text-center space-y-3 sm:space-y-4 mb-12 sm:mb-16 transition-all duration-700 ease-out opacity-100 translate-y-0"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto px-4">
            From daily tiffins to special events, we've got you all covered
          </p>
  </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>

      {/* Bottom decorative gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-10 sm:h-12 md:h-16 bg-gradient-to-t from-background to-transparent z-5" />
    </section>
  );
}