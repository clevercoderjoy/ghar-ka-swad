"use client";

// Removed Framer Motion imports

import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { Phone, Mail, Headphones, Clock } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useRef, useState, useCallback } from "react";
import Image from "next/image";
import img6 from "public/assets/img6.jpg";


const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    detail: "+91 6202744741",
    action: "tel:+916202744741"
  },
  {
    icon: Headphones,
    title: "Support Hours",
    detail: "9 AM - 9 PM Daily",
    action: null
  },
  {
    icon: FaWhatsapp,
    title: "Whatsapp",
    detail: "घर का स्वाद",
    action: "https://wa.me/6202744741"
  },
  {
    icon: Clock,
    title: "Delivery Hours",
    detail: "9 AM - 9 PM Daily",
    action: null
  }
];

// Card tilt animation hook (copied from Services)
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

  // Accessibility: reset tilt on focus/blur
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

// Modular ContactCard component
function ContactCard({ info }: { info: typeof contactInfo[number] }) {
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
        className="relative h-full p-6 rounded-3xl bg-white/10 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-shadow duration-100 overflow-hidden focus:outline-none"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onFocus={handleFocus}
        onBlur={handleBlur}
        aria-label={info.title}
      >
        {/* Glass reflection effect */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/20 via-transparent to-transparent" style={{ transform: "translateZ(20px)" }} />
        {/* Ambient light effects */}
        <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-200" />
        {/* Content */}
        <CardContent className="relative z-10 p-0 text-center space-y-4" style={{ transform: "translateZ(40px)" }}>
          <div className="w-12 h-12 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center transition-colors duration-300 group-hover:bg-primary/20">
            <info.icon className="w-6 h-6 text-primary transition-transform duration-200 group-hover:scale-110" />
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-sm text-muted-foreground">
              {info.title}
            </h3>
            {info.action ? (
              <a
                href={info.action}
                className="block text-base font-medium hover:text-primary transition-colors duration-300"
                target={info.title === "Whatsapp" ? "_blank" : undefined}
                rel={info.title === "Whatsapp" ? "noopener noreferrer" : undefined}
              >
                {info.detail}
              </a>
            ) : (
              <p className="text-base font-medium">{info.detail}</p>
            )}
          </div>
        </CardContent>
        {/* Hover gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-3xl" />
      </div>
    </div>
  );
}


export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden bg-secondary/30">
      {/* Blurred background image like Services */}
      <div className="absolute inset-0 w-full h-full z-0 select-none pointer-events-none">
        <Image
          src={img6}
          alt="Contact Background"
          fill
          priority
          placeholder="blur"
          style={{ objectFit: "cover", objectPosition: "center 0%", zIndex: 0 }}
          className="absolute inset-0 w-full h-full blur-[1px] opacity-60"
        />
        {/* Glass overlays and effects (match Services) */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent dark:from-white/10 dark:via-transparent dark:to-transparent" />
        <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 blur-xl opacity-30 animate-pulse" />
      </div>

      <div className="container px-4 relative z-10">
        <div className="text-center space-y-4 mb-16 transition-all duration-700 ease-out opacity-100 translate-y-0">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Get In Touch
          </h2>
          <p className="text-lg md:text-xl text-white max-w-2xl mx-auto">
            Ready to experience <span className="text-primary font-semibold text-base tracking-wider">घर का खाना</span>
            {" "}
            in
            {" "}
            <span className="text-primary font-semibold text-base tracking-wider">घर का स्वाद</span>
            {" "}? Contact us today!
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-12">
          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info) => (
              <ContactCard key={info.title} info={info} />
            ))}
          </div>

          {/* CTA Card with liquid glass and tilt animation */}
          <div className="transition-all duration-700 ease-out opacity-100 translate-y-0">
            {/* Tilt animation for CTA card */}
            <LiquidGlassCTA />
          </div>
        </div>
      </div>
    </section>
  );
}

// CTA Card with tilt and glassmorphism
function LiquidGlassCTA() {
  const {
    cardRef,
    transform,
    handleMouseMove,
    handleMouseLeave,
    handleFocus,
    handleBlur,
  } = useCardTilt();
  return (
    <div
      ref={cardRef}
      tabIndex={0}
      style={{
        transform: transform,
        transition: "transform 0.1s ease-out",
        transformStyle: "preserve-3d",
        willChange: "transform",
      }}
      className="relative rounded-3xl bg-white/10 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-shadow duration-100 overflow-hidden focus:outline-none"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
      aria-label="CTA Card"
    >
      {/* Glass reflection effect */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/20 via-transparent to-transparent" style={{ transform: "translateZ(20px)" }} />
      {/* Ambient light effects */}
      <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-3xl blur-xl opacity-0 hover:opacity-50 transition-opacity duration-200" />
      <CardContent className="relative z-10 p-8 md:p-12 text-center space-y-6" style={{ transform: "translateZ(40px)" }}>
        <h3 className="text-2xl md:text-3xl font-bold">
          Start Your Journey to Delicious Home-Cooked Meals
        </h3>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Join hundreds of satisfied customers who trust us for their daily meals.
          Contact us now to place your first order or discuss a monthly package.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button
            size="lg"
            className="rounded-full px-8 py-6 text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            onClick={() => window.location.href = 'tel:+91XXXXXXXXXX'}
          >
            <Phone className="mr-2 h-5 w-5" />
            Call Now
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full px-8 py-6 text-lg font-semibold backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-primary/10"
            onClick={() => window.location.href = 'mailto:order@gharkaswad.com'}
          >
            <Mail className="mr-2 h-5 w-5" />
            Send Email
          </Button>
        </div>
      </CardContent>
      {/* Hover gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-200 rounded-3xl" />
    </div>
  );
}
