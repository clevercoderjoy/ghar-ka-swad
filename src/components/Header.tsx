"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/ThemeToggle";
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
  { label: "Packages", href: "#packages" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [location, setLocation] = useState("darbhanga");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
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
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-glow">
              <span className="text-xl font-bold text-primary-foreground">घ</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold leading-tight">घर का स्वाद</h1>
              <p className="text-xs text-muted-foreground">Home Cooked Meals</p>
            </div>
          </motion.div>

          {/* Navigation Menu - Center */}
          <nav className="hidden md:flex items-center gap-1">
            {menuItems.map((item) => (
              <motion.button
                key={item.label}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.href)}
                className="px-4 py-2 rounded-lg text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-secondary/50 transition-all duration-300"
              >
                {item.label}
              </motion.button>
            ))}
          </nav>

          {/* Right Side - Location & Theme Toggle */}
          <div className="flex items-center gap-3">
            {/* Location Select */}
            <Select value={location} onValueChange={setLocation}>
              <SelectTrigger className="w-[140px] md:w-[160px] rounded-full border-2 bg-background/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <SelectValue />
                </div>
              </SelectTrigger>
              <SelectContent className="rounded-2xl border-2 bg-background/95 backdrop-blur-lg">
                <SelectItem 
                  value="darbhanga" 
                  className="rounded-lg cursor-pointer hover:bg-primary/10 focus:bg-primary/10"
                >
                  Darbhanga
                </SelectItem>
                <SelectItem 
                  value="lucknow" 
                  className="rounded-lg cursor-pointer hover:bg-primary/10 focus:bg-primary/10"
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
