"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/theme-toggle";
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
        ? "bg-background/80 backdrop-blur-lg border-b border-border/50 shadow-soft"
        : "bg-transparent"
        }`}
    >
      <div className="container px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo - Left */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => scrollToSection("#home")}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-glow">
              <span className="text-xl font-bold text-primary-foreground">घ</span>
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
                  className={`px-4 py-2 rounded-lg text-md font-medium transition-all duration-300 ${
                    isActive
                      ? isHome
                        ? "bg-transparent text-foreground"
                        : "bg-primary text-white"
                      : "text-foreground hover:text-foreground hover:bg-primary/20"
                  }`}
                >
                  {item.label}
                </motion.button>
              );
            })}
          </nav>

          {/* Right Side - Location & Theme Toggle */}
          <div className="flex items-center gap-3">
            {/* Location Select */}
            <Select value={location} onValueChange={setLocation}>
              <SelectTrigger className="w-[140px] md:w-[160px] rounded-full border-2 border-primary/50 bg-background/50 backdrop-blur-sm hover:border-primary/50 focus:ring-0 focus:outline-none transition-all duration-300">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <SelectValue />
                </div>
              </SelectTrigger>
              <SelectContent className="rounded-2xl font-medium border-2 bg-background/95 backdrop-blur-lg">
                <SelectItem
                  value="darbhanga"
                  className="rounded-lg cursor-pointer text-foreground/80 hover:bg-primary/20 hover:text-foreground/80 focus:bg-primary/20 focus:text-foreground/80 data-[state=checked]:bg-primary data-[state=checked]:text-white mb-2"
                >
                  Darbhanga
                </SelectItem>
                <SelectItem
                  value="lucknow"
                  className="rounded-lg cursor-pointer text-foreground/80 hover:bg-primary/20 hover:text-foreground/80 focus:bg-primary/20 focus:text-foreground/80 data-[state=checked]:bg-primary data-[state=checked]:text-white"
                >
                  Lucknow
                </SelectItem>
              </SelectContent>
            </Select>

            {/* Theme Toggle */}
            <ThemeToggle />
          </div>
        </div>
      </div>
    </motion.header>
  );
}
