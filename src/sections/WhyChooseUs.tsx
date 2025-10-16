"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useCallback } from "react";
import { Check } from "lucide-react";
import Image from "next/image";
import img4 from "public/assets/img4.jpg";

const benefits = [
  "Freshly prepared daily with premium ingredients",
  "Home-cooked taste that reminds you of your family",
  "Hygienic preparation in a clean home kitchen",
  "Affordable pricing with monthly packages",
  "Customizable meals for preferred meal combination",
  "On-time delivery, every single day at your door step",
  "Authentic local and traditional recipes",
  "No preservatives or artificial additives"
];

// Custom hook for card tilt animation
function useCardTilt() {
  const [transform, setTransform] = useState("");
  const cardRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = ((x - centerX) / centerX) * 10;
    const rotateX = -((y - centerY) / centerY) * 10;

    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
  }, []);

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

// BenefitCard component with liquid glass effect
function BenefitCard({ benefit, index, isInView }) {
  const {
    cardRef,
    transform,
    handleMouseMove,
    handleMouseLeave,
    handleFocus,
    handleBlur,
  } = useCardTilt();

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div
        ref={cardRef}
        tabIndex={0}
        style={{
          transform: transform,
          transition: "transform 0.1s ease-out",
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
        className="relative h-full p-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl hover:shadow-2xl transition-shadow duration-100 overflow-hidden focus:outline-none"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onFocus={handleFocus}
        onBlur={handleBlur}
        aria-label={benefit}
      >
        {/* Glass reflection effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 via-transparent to-transparent" style={{ transform: "translateZ(20px)" }} />

        {/* Ambient light effects */}
        <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-200" />

        {/* Content */}
        <div className="relative z-10 flex items-start gap-3" style={{ transform: "translateZ(40px)" }}>
          <div className="mt-1 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors duration-300 backdrop-blur-sm border border-white/30">
            <Check className="w-3 h-3 text-primary" />
          </div>
          <p className="text-sm md:text-base text-foreground/90 leading-relaxed">
            {benefit}
          </p>
        </div>

        {/* Hover gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-2xl" />
      </div>
    </motion.div>
  );
}

export function WhyChooseUs() {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Card tilt for the visual container
  const {
    cardRef: visualCardRef,
    transform: visualTransform,
    handleMouseMove: handleVisualMouseMove,
    handleMouseLeave: handleVisualMouseLeave,
    handleFocus: handleVisualFocus,
    handleBlur: handleVisualBlur,
  } = useCardTilt();

  return (
    <section
      id="why-us"
      className="py-20 md:py-32 relative overflow-hidden bg-cover bg-center bg-no-repeat"
    >
      {/* Optimized background image */}
      <Image
        src={img4}
        alt="Why Choose Us Background"
        fill
        priority
        placeholder="blur"
        style={{ objectFit: "cover", objectPosition: "center 20%", zIndex: 0 }}
        className="absolute inset-0 w-full h-full"
      />
      {/* Black backdrop and blur over background image */}
      <div className="absolute inset-0 z-0">
        {/* Black overlay for contrast */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[5px]" />
        {/* Glass reflection effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent" />
        {/* Ambient light effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 blur-xl opacity-30 animate-pulse" />
      </div>

      <div className="container px-4 relative z-10">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 lg:gap-16 items-center justify-between">
          {/* Content */}
          <motion.div
            ref={ref}
            viewport={{ once: true }}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Why {" "}
                <span className="text-primary">घर का स्वाद</span>
                {" "} ?
              </h2>
              <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
                Our tastiest bihari style
                {" "}
                <span className="text-primary font-semibold">घर का खाना</span>
                {" "}
                in
                {" "}
                <span className="text-primary font-semibold">घर का स्वाद</span>
                {" "}
                with warmth and care of our mother delivered at your doorstep,
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <BenefitCard key={benefit} benefit={benefit} index={index} isInView={isInView} />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div
              ref={visualCardRef}
              tabIndex={0}
              style={{
                transform: visualTransform,
                transition: 'transform 0.1s ease-out',
                transformStyle: 'preserve-3d',
                willChange: 'transform',
              }}
              className="relative aspect-square rounded-3xl overflow-hidden bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl focus:outline-none"
              onMouseMove={handleVisualMouseMove}
              onMouseLeave={handleVisualMouseLeave}
              onFocus={handleVisualFocus}
              onBlur={handleVisualBlur}
              aria-label="Homemade Quality & Authenticity Guaranteed"
            >
              {/* Glass reflection effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/20 via-transparent to-transparent" />

              {/* Ambient light effects */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-200" />

              {/* Image background with blur for better text readability */}
              <div className="relative w-full h-full">
                {/* Background image */}
                <div className="absolute inset-0 w-full h-full">
                  <Image
                    src="/assets/img1.webp"
                    alt="Homemade Food"
                    fill
                    className="object-cover rounded-3xl w-full h-full"
                    style={{ objectPosition: 'center' }}
                    draggable={false}
                    priority
                  />
                  {/* Dark overlay for contrast */}
                  <div className="absolute inset-0 bg-black/40 rounded-3xl backdrop-blur-[2px]" />
                </div>

                {/* Overlayed text content */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="text-center space-y-6 p-8">
                    <div className="text-6xl md:text-8xl font-bold bg-gradient-to-br from-primary via-accent to-primary bg-clip-text text-transparent drop-shadow-lg">
                      <span className="text-white">100%</span>
                    </div>
                    <div className="space-y-2">
                      <div className="text-2xl md:text-3xl font-bold text-white">Homemade</div>
                      <div className="text-xl text-white font-semibold">
                        घर का खाना खाये, घर के स्वाद में खायें |
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-3xl" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom decorative gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-24 md:h-32 bg-gradient-to-t from-background to-transparent z-5" />
    </section>
  );
}