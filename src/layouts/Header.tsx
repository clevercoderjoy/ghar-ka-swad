"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const menuItems = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Menu", href: "#packages" },
  { label: "Packages", href: "#packages" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [location, setLocation] = useState("darbhanga");
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = ["home", "services", "packages", "contact"];
    const sectionElements = sections.map(id => document.getElementById(id)).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: [0.5],
        rootMargin: "-100px 0px -100px 0px"
      }
    );

    sectionElements.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionElements.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? ""
        : "bg-transparent"
        }`}
    >
      {/* Liquid Glass Background - Only when scrolled */}
      {scrolled && (
        <>
          {/* Main glass background */}
          <div className="absolute inset-0 bg-white/10 dark:bg-white/5 backdrop-blur-xl border-b border-white/20 dark:border-white/10 shadow-2xl" />

          {/* Glass reflection effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent dark:from-white/10 dark:via-transparent dark:to-transparent" />

          {/* Ambient light effects */}
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 blur-xl opacity-30 animate-pulse" />
        </>
      )}

      <div className="container px-4 relative z-10">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo - Left */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => scrollToSection("#home")}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-glow backdrop-blur-md bg-white/20 border border-white/30" style={{ boxShadow: '0 4px 32px 0 rgba(31, 38, 135, 0.37)', WebkitBackdropFilter: 'blur(8px)', backdropFilter: 'blur(8px)' }}>
              <span
                className="text-xl font-bold text-white/90 relative"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.3) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  textShadow: '0 0 20px rgba(255,255,255,0.5)',
                  filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
                }}
              >
                घ
              </span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold leading-tight">घर का स्वाद</h1>
              <p className="text-xs text-foreground/90">Home Cooked Meals</p>
            </div>
          </motion.div>

          {/* Navigation Menu - Center */}
          <nav className="hidden md:flex items-center gap-2.5">
            {menuItems.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;
              const isHome = item.label === "Home";

              return (
                <motion.button
                  key={item.label}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item.href)}
                  className={`relative px-4 py-2 rounded-lg text-md font-medium transition-all duration-300 overflow-hidden ${
                    isActive && !isHome
                      ? "text-white border border-white/20"
                      : isActive && isHome
                      ? "text-foreground border border-transparent"
                      : "text-foreground border border-transparent hover:border-primary hover:bg-primary/20 hover:text-foreground"
                    }`}
                >
                  {/* Liquid Glass Background for Active Items (excluding Home) */}
                  {isActive && !isHome && (
                    <>
                      {/* Main liquid glass background */}
                      <div className="absolute inset-0 bg-white/10 backdrop-blur-xl shadow-lg" 
                           style={{
                             boxShadow: '0 4px 32px 0 rgba(31, 38, 135, 0.37)',
                             WebkitBackdropFilter: 'blur(8px)',
                             backdropFilter: 'blur(8px)'
                           }} />

                      {/* Glass reflection effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent" />

                      {/* Primary color overlay - Orange */}
                      <div className="absolute inset-0 bg-primary/80" />

                      {/* Ambient light effects */}
                      <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-lg blur-sm opacity-40 animate-pulse" />
                      
                      {/* Additional glass border effect */}
                      <div className="absolute inset-0 rounded-lg border border-white/30 shadow-inner" />
                    </>
                  )}

                  <span className="relative z-10">{item.label}</span>
                </motion.button>
              );
            })}
          </nav>

          {/* Right Side - Location & Theme Toggle */}
          <div className="flex items-center gap-3">
            {/* Location Select */}
            <Select value={location} onValueChange={setLocation}>
              <SelectTrigger
                className="w-[140px] md:w-[160px] rounded-full border border-orange-400/60 bg-white/10 backdrop-blur-md hover:bg-white/20 focus:ring-0 focus:outline-none transition-all duration-300"
                style={{
                  boxShadow: '0 4px 32px 0 rgba(31, 38, 135, 0.37)',
                  WebkitBackdropFilter: 'blur(8px)',
                  backdropFilter: 'blur(8px)'
                }}
              >
                <div className="flex items-center gap-2">
                  <MapPin
                    className="h-4 w-4 text-white/90"
                    style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}
                  />
                  <SelectValue className="text-white/90" />
                </div>
              </SelectTrigger>
              <SelectContent
                className="rounded-2xl font-medium border border-orange-400/60 bg-white/10 backdrop-blur-lg"
                style={{
                  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
                  WebkitBackdropFilter: 'blur(16px)',
                  backdropFilter: 'blur(16px)'
                }}
              >
                <SelectItem
                  value="darbhanga"
                  className="rounded-lg cursor-pointer text-white/90 hover:bg-white/20 hover:text-white hover:border hover:border-orange-400/60 focus:bg-white/20 focus:text-white data-[state=checked]:bg-orange-400/30 data-[state=checked]:text-white data-[state=checked]:border data-[state=checked]:border-orange-400 mb-[0.5rem] mt-1 h-8"
                  style={{ backdropFilter: 'blur(4px)' }}
                >
                  Darbhanga
                </SelectItem>
                <SelectItem
                  value="lucknow"
                  className="rounded-lg cursor-pointer text-white/90 hover:bg-white/20 hover:text-white hover:border hover:border-orange-400/60 focus:bg-white/20 focus:text-white data-[state=checked]:bg-orange-400/30 data-[state=checked]:text-white data-[state=checked]:border data-[state=checked]:border-orange-400 mb-1 h-8"
                  style={{ backdropFilter: 'blur(4px)' }}
                >
                  Lucknow
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
