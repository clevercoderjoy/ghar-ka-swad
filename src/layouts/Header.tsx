"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { MapPin, Menu, X } from "lucide-react";
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    setMobileMenuOpen(false);
  };

  return (
    <>
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
              className="flex items-center gap-1 cursor-pointer"
              onClick={() => scrollToSection("#home")}
            >
                <Image
                  src="/assets/logo.jpg"
                  alt="घर का स्वाद Logo"
                  width={35}
                  height={35}
                  className="rounded-full object-cover"
                  style={{
                    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
                  }}
                  priority
                />
              <div className="block">
                <h1 className="text-lg font-bold leading-tight whitespace-nowrap">घर का स्वाद</h1>
                <p className="text-xs text-foreground/90 whitespace-nowrap">Home Cooked Meals</p>
              </div>
            </motion.div>

            {/* Navigation Menu - Center (Desktop Only) */}
            <nav className="hidden lg:flex items-center gap-2.5">
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
                    className={`relative px-4 py-2 rounded-lg text-md font-medium transition-all duration-300 overflow-hidden ${isActive && !isHome
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

            {/* Right Side - Hamburger & Location */}
            <div className="flex items-center gap-3">
              {/* Location Select */}
              <Select value={location} onValueChange={setLocation}>
                <SelectTrigger
                  className="w-[160px] rounded-full border border-[#FC8019]/60 bg-white/10 backdrop-blur-md hover:bg-white/20 focus:ring-0 focus:outline-none transition-all duration-300"
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
                  className="rounded-2xl font-medium border border-[#FC8019]/60 bg-white/10 backdrop-blur-lg"
                  style={{
                    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
                    WebkitBackdropFilter: 'blur(16px)',
                    backdropFilter: 'blur(16px)'
                  }}
                >
                  <SelectItem
                    value="darbhanga"
                    className="rounded-lg cursor-pointer text-white/90 hover:bg-white/20 hover:text-white hover:border hover:border-[#FC8019]/60 focus:bg-white/20 focus:text-white data-[state=checked]:bg-[#FC8019]/30 data-[state=checked]:text-white data-[state=checked]:border data-[state=checked]:border-[#FC8019] mb-[0.5rem] mt-1 h-8"
                    style={{ backdropFilter: 'blur(4px)' }}
                  >
                    Darbhanga
                  </SelectItem>
                  <SelectItem
                    value="lucknow"
                    className="rounded-lg cursor-pointer text-white/90 hover:bg-white/20 hover:text-white hover:border hover:border-[#FC8019]/60 focus:bg-white/20 focus:text-white data-[state=checked]:bg-[#FC8019]/30 data-[state=checked]:text-white data-[state=checked]:border data-[state=checked]:border-[#FC8019] mb-1 h-8"
                    style={{ backdropFilter: 'blur(4px)' }}
                  >
                    Lucknow
                  </SelectItem>
                </SelectContent>
              </Select>
              {/* Hamburger Menu Button - Mobile/Tablet */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg border border-[#FC8019]/60 bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300"
                style={{
                  boxShadow: '0 4px 32px 0 rgba(31, 38, 135, 0.37)',
                  WebkitBackdropFilter: 'blur(8px)',
                  backdropFilter: 'blur(8px)'
                }}
              >
                {mobileMenuOpen ? (
                  <X className="h-5 w-5 text-white/90" style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }} />
                ) : (
                  <Menu className="h-5 w-5 text-white/90" style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }} />
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="fixed top-0 right-0 h-full w-[280px] sm:w-[320px] z-50 lg:hidden"
            >
              {/* Liquid Glass Background */}
              <div className="absolute inset-0 bg-white/10 dark:bg-white/5 backdrop-blur-xl border-l border-white/20 shadow-2xl"
                style={{
                  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
                  WebkitBackdropFilter: 'blur(16px)',
                  backdropFilter: 'blur(16px)'
                }}
              />

              {/* Glass reflection effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent" />

              {/* Ambient light effects */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 blur-xl opacity-30 animate-pulse" />

              {/* Menu Content */}
              <div className="relative h-full flex flex-col p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-xl font-bold text-white/90">Menu</h2>
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all"
                  >
                    <X className="h-5 w-5 text-white/90" />
                  </motion.button>
                </div>

                {/* Menu Items */}
                <nav className="flex flex-col gap-2">
                  {menuItems.map((item, index) => {
                    const sectionId = item.href.replace("#", "");
                    const isActive = activeSection === sectionId;
                    const isHome = item.label === "Home";

                    return (
                      <motion.button
                        key={item.label}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => scrollToSection(item.href)}
                        className={`relative px-6 py-4 rounded-xl text-left font-medium transition-all duration-300 overflow-hidden ${isActive && !isHome
                            ? "text-white border border-white/30"
                            : isActive && isHome
                              ? "text-white/90 border border-white/20"
                              : "text-white/80 border border-white/10 hover:border-[#FC8019]/60 hover:bg-white/10"
                          }`}
                      >
                        {/* Liquid Glass Background for Active Items */}
                        {isActive && !isHome && (
                          <>
                            {/* Main liquid glass background */}
                            <div className="absolute inset-0 bg-white/10 backdrop-blur-xl shadow-lg"
                              style={{
                                boxShadow: '0 4px 32px 0 rgba(31, 38, 135, 0.37)',
                                WebkitBackdropFilter: 'blur(8px)',
                                backdropFilter: 'blur(8px)'
                              }}
                            />

                            {/* Glass reflection effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent" />

                            {/* Primary color overlay - Orange */}
                            <div className="absolute inset-0 bg-primary/80" />

                            {/* Ambient light effects */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-xl blur-sm opacity-40 animate-pulse" />

                            {/* Additional glass border effect */}
                            <div className="absolute inset-0 rounded-xl border border-white/30 shadow-inner" />
                          </>
                        )}

                        {/* Home active state with subtle glass */}
                        {isActive && isHome && (
                          <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />
                        )}

                        <span className="relative z-10 text-base">{item.label}</span>
                      </motion.button>
                    );
                  })}
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}