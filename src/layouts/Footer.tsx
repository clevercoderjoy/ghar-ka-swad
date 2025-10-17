"use client";

import Image from "next/image";
import logo from "public/assets/logo.svg";
import img5 from "public/assets/img5.jpeg";
import { Heart } from "lucide-react";
import Link from "next/link";

export function Footer() {

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
  <footer className="relative overflow-hidden bg-white/10 dark:bg-white/5 backdrop-blur-xl shadow-2xl min-h-[175px]">
      {/* Blurred background image */}
      <div className="absolute inset-0 w-full h-full z-0 select-none pointer-events-none">
        <Image
          src={img5}
          alt="Footer Background"
          fill
          priority
          placeholder="blur"
          style={{ objectFit: "cover", objectPosition: "center -430px", zIndex: 0 }}
          className="absolute inset-0 w-full h-full blur-[1px] opacity-60"
        />
        {/* Glass overlays and effects (match Header/Services) */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent dark:from-white/10 dark:via-transparent dark:to-transparent" />
        <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 blur-xl opacity-30 animate-pulse" />
      </div>
  <div className="container px-4 py-24 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-1 cursor-pointer transition-transform duration-200 hover:scale-105" onClick={() => scrollToSection("#home")}> 
            <Image
              src={logo}
              alt="घर का स्वाद Logo"
              width={35}
              height={35}
              className="rounded-full object-cover"
              style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}
              priority
            />
            <div className="block">
              <h1 className="text-lg font-bold leading-tight whitespace-nowrap">घर का स्वाद</h1>
              <p className="text-xs text-foreground/90 whitespace-nowrap">Home Cooked Meals</p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-2 w-full md:w-auto">
            <div className="text-center text-sm text-white">
              <p>&copy; {new Date().getFullYear()} घर का स्वाद | All rights reserved.</p>
            </div>
          </div>

          <div className="flex items-center gap-1 text-sm text-white hover:scale-105 transition-transform duration-200">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500 border-red-500 animate-pulse" />
            <span>by <Link href="https://clevercoderjoy.bio.link/" target="_blank" rel="noopener noreferrer" className="text-orange-500 no-underline hover:text-orange-600 transition-colors font-semibold">clevercoderjoy</Link></span>
          </div>
        </div>
      </div>
      {/* Bottom gradient for depth */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-background/80 to-transparent z-5 pointer-events-none" />
    </footer>
  );
}
