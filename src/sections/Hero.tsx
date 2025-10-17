"use client";

import { useState, useRef, useCallback } from "react";
// Removed Framer Motion imports
import Image from "next/image";
import heroFood from "public/assets/hero-food.jpg";
import logo from "public/assets/logo.svg";
import { Button } from "@/components/ui/button";

import { Phone, CookingPot } from "lucide-react";

// Card tilt animation hook (copied from Services)
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
    const rotateY = ((x - centerX) / centerX) * 15;
    const rotateX = -((y - centerY) / centerY) * 15;
    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`);
  }, []);
  
  const handleMouseLeave = useCallback(() => {
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
  }, []);
  
  const handleFocus = handleMouseLeave;
  const handleBlur = handleMouseLeave;
  
  return { cardRef, transform, handleMouseMove, handleMouseLeave, handleFocus, handleBlur };
}

export function Hero() {
  // ✅ YEH NAYA HAI - Services jaisa pattern
  // Removed useInView, always show content

  // Tilt animation for logo
  const {
    cardRef: logoRef,
    transform: logoTransform,
    handleMouseMove: handleLogoMouseMove,
    handleMouseLeave: handleLogoMouseLeave,
    handleFocus: handleLogoFocus,
    handleBlur: handleLogoBlur,
  } = useCardTilt();
  
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  const handleOrderNow = () => {
    setIsOrderModalOpen(true);
  };

  const handleCallNow = () => {
    window.open('tel:+916202744741', '_self');
    setIsOrderModalOpen(false);
  };

  const handleCloseModal = () => {
    setIsOrderModalOpen(false);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroFood}
          alt="Hero Food Background"
          fill
          priority
          placeholder="blur"
          style={{ objectFit: "cover", objectPosition: "center", zIndex: 0 }}
          className="absolute inset-0 w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/35 via-background/60 to-background/85" />
      </div>

      {/* Full Hero Liquid Glass Container */}
      <div className="absolute inset-0 z-5 bg-white/0.5 backdrop-blur-sm border-0 shadow-2xl">
        {/* Glass reflection effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/2 via-transparent to-transparent" />
        {/* Ambient light effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/2 via-accent/2 to-primary/2 blur-xl opacity-10 animate-pulse" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-4 sm:py-6 h-full w-full">
        {/* ✅ YEH FIXED HAI - ref aur conditional animate add kiya */}
        <div
          className="relative max-w-7xl mx-auto flex flex-col justify-between min-h-[calc(100vh-8rem)] transition-all duration-700 ease-out opacity-100 translate-y-0"
        >

          {/* TOP SECTION - Logo and Main Heading */}
          <div className="relative z-10 text-center space-y-2 sm:space-y-3 md:space-y-4 pt-2 sm:pt-4">
            {/* Logo */}
            <div className="flex justify-center">
              <div
                ref={logoRef}
                style={{ transform: logoTransform }}
                tabIndex={0}
                onMouseMove={handleLogoMouseMove}
                onMouseLeave={handleLogoMouseLeave}
                onFocus={handleLogoFocus}
                onBlur={handleLogoBlur}
                className="relative mx-auto rounded-full w-[160px] h-[160px] sm:w-[170px] sm:h-[170px] md:w-[200px] md:h-[200px] lg:w-[220px] lg:h-[220px] focus:outline-none"
                aria-label="Ghar Ka Swaad Logo"
              >
                {/* Logo Image */}
                <Image
                  src={logo}
                  alt="logo"
                  fill
                  priority
                  quality={85}
                  className="rounded-full object-cover"
                />
              </div>
            </div>

            {/* Main Heading - ✅ YEH BHI FIXED */}
            <h1
              className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-none transition-all duration-700 ease-out opacity-100 translate-y-0"
            >
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-float">
                घर का स्वाद
              </span>
            </h1>
          </div>

          {/* CENTER SECTION - Badge and Descriptions */}
          <div className="relative z-10 text-center space-y-3 sm:space-y-4 flex-1 flex flex-col justify-center py-3 sm:py-4">
            {/* Badge - ✅ YEH BHI FIXED */}
            <div
              className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm hover:bg-primary/15 transition-all duration-200 hover:scale-105 mx-auto"
            >
              <span className="text-xs sm:text-sm md:text-base font-semibold text-primary/90 tracking-wide">
                घर का खाना खाये, घर के स्वाद में खायें
              </span>
            </div>

            {/* Description - ✅ YEH BHI FIXED */}
            <div
              className="text-center max-w-2xl mx-auto leading-relaxed font-medium space-y-1.5 sm:space-y-2 px-4 transition-all duration-700 ease-out opacity-100 translate-y-0"
            >
              <p className="text-base sm:text-sm md:text-base text-foreground tracking-wider">
                The authentic home-cooked bihari cuisine.
              </p>
              <p className="text-xs sm:text-sm md:text-base text-foreground tracking-tight">
                हर खुराक में माँ के हाथ का प्यार, आपके{" "}
                <span className="inline-flex items-center px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-lg text-primary/90 font-semibold hover:bg-primary/15 transition-all duration-200 hover:scale-105 mx-0.5">
                  घर के स्वाद
                </span>{" "}
                में |
              </p>
            </div>
          </div>

          {/* BOTTOM SECTION - CTA Buttons and Stats */}
          <div className="relative z-10 space-y-3 sm:space-y-4 md:space-y-5 pb-3 sm:pb-4">
            {/* CTA Buttons - ✅ YEH BHI FIXED */}
            <div
              className="flex flex-col xs:flex-row gap-2.5 sm:gap-3 justify-center items-stretch px-4 w-full max-w-md mx-auto transition-all duration-700 ease-out opacity-100 translate-y-0"
            >
              <Button
                size="lg"
                className="group relative overflow-hidden rounded-full w-full xs:flex-1 px-5 sm:px-6 py-3 sm:py-4 text-sm sm:text-base font-semibold shadow-glow transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-primary/20"
                onClick={handleOrderNow}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                <Phone className="mr-1.5 sm:mr-2 h-4 sm:h-5 w-4 sm:w-5 transition-transform group-hover:rotate-12 group-hover:scale-110 duration-200" />
                <span>Order Now</span>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="group rounded-full w-full xs:flex-1 px-5 sm:px-6 py-3 sm:py-4 text-sm sm:text-base font-semibold backdrop-blur-sm border-foreground transition-all duration-200 hover:scale-105 hover:bg-primary/10 hover:border-primary/30 hover:shadow-lg"
                onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <CookingPot className="mr-1.5 sm:mr-2 h-4 sm:h-5 w-4 sm:w-5 transition-transform group-hover:bounce duration-200" />
                <span>View Packages</span>
              </Button>
            </div>

            {/* Stats - ✅ YEH BHI FIXED */}
            <div
              className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 max-w-2xl mx-auto px-2 transition-all duration-700 ease-out opacity-100 translate-y-0"
            >
              <div
                className="space-y-0.5 sm:space-y-1 text-center p-2 sm:p-3 rounded-2xl transition-all duration-200 hover:bg-white/5 hover:backdrop-blur-sm hover:scale-105 hover:-translate-y-1 cursor-pointer group"
              >
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary group-hover:scale-110 transition-transform duration-200">
                  1000+
                </div>
                <div className="text-[10px] sm:text-xs md:text-sm text-foreground/90">
                  Happy Customers
                </div>
              </div>
              <div
                className="space-y-0.5 sm:space-y-1 text-center p-2 sm:p-3 rounded-2xl transition-all duration-200 hover:bg-white/5 hover:backdrop-blur-sm hover:scale-105 hover:-translate-y-1 cursor-pointer group"
              >
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary group-hover:scale-110 transition-transform duration-200">
                  Daily
                </div>
                <div className="text-[10px] sm:text-xs md:text-sm text-foreground/90">
                  Fresh Meals
                </div>
              </div>
              <div
                className="space-y-0.5 sm:space-y-1 text-center p-2 sm:p-3 rounded-2xl transition-all duration-200 hover:bg-white/5 hover:backdrop-blur-sm hover:scale-105 hover:-translate-y-1 cursor-pointer group"
              >
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary group-hover:scale-110 transition-transform duration-200">
                  2+
                </div>
                <div className="text-[10px] sm:text-xs md:text-sm text-foreground/90">
                  Years of Service
                </div>
              </div>
            </div>
          </div>

  </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-24 md:h-28 bg-gradient-to-t from-background to-transparent z-20" />

      {/* Liquid Glass Order Modal */}
      {isOrderModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-500 ease-in-out"
          onClick={handleCloseModal}
        >
          {/* Backdrop with blur */}
          <div className="absolute inset-0 bg-black/20 backdrop-blur-md transition-opacity duration-500" />

          {/* Modal Content */}
          <div
            className="relative w-full max-w-md mx-auto scale-100 opacity-100 translate-y-0 transition-all duration-500 ease-in-out"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Liquid Glass Card */}
            <div className="relative p-6 sm:p-8 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
              {/* Glass reflection effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/20 via-transparent to-transparent" />

              {/* Content */}
              <div className="relative z-10 text-center space-y-4 sm:space-y-6">
                {/* Icon */}
                <div className="mx-auto w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm border border-white/30 flex items-center justify-center scale-100 transition-transform duration-500">
                  <Phone className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white transition-all duration-500">Ready to Order?</h3>

                {/* Description */}
                <p className="text-white/90 text-base sm:text-lg leading-relaxed transition-all duration-500">
                  Do you want to call and place your order now?
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4 transition-all duration-500">
                  <Button
                    onClick={handleCallNow}
                    className="flex-1 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-semibold py-2.5 sm:py-3 px-5 sm:px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border border-white/20"
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Yes, Call Now
                  </Button>
                  <Button
                    onClick={handleCloseModal}
                    variant="outline"
                    className="flex-1 bg-white/10 hover:bg-white/20 text-white border-white/30 hover:border-white/40 font-semibold py-2.5 sm:py-3 px-5 sm:px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
                  >
                    Not Now
                  </Button>
                </div>
              </div>

              {/* Ambient light effects */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-3xl blur-xl opacity-30 animate-pulse" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}