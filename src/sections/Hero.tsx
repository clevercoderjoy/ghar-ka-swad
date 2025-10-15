"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, CookingPot } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(/assets/hero-food.jpg)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/35 via-background/60 to-background/85" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          {/* Badge */}
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm"
          >
            <span className="text-md font-medium text-primary">
              Serving Fresh Home Made Food Daily
            </span>
          </motion.div> */}

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight"
          >
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-float">
              घर का स्वाद
            </span>
          </motion.h1>

          {/* Subtitle */}
          {/* <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl lg:text-3xl font-medium text-foreground"
          >
            घर का खाना खाये, घर का स्वाद में खाये
          </motion.p> */}
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm"
          >
            <span className="text-lg font-semibold text-primary/90 tracking-wider">
              घर का खाना खाये, घर का स्वाद में खाये
            </span>
          </motion.div>

          {/* Description */}
          {/* <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-base md:text-lg text-foreground max-w-2xl mx-auto leading-relaxed font-medium"
          >
            Experience authentic home-cooked meals delivered fresh to your doorstep in Darbhanga. 
            Prepared with love by our mother, every meal brings the warmth and taste of home.
          </motion.p> */}

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
          >
            <Button
              size="lg"
              className="group relative overflow-hidden rounded-full px-8 py-6 text-lg font-semibold shadow-glow transition-all duration-300 hover:scale-105 hover:shadow-xl"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Phone className="mr-2 h-5 w-5 transition-transform group-hover:rotate-12" />
              Order Now
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 py-6 text-lg font-semibold backdrop-blur-sm border-foreground transition-all duration-300 hover:scale-105 hover:bg-primary/10"
              onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <CookingPot className="mr-2 h-5 w-5" />
              View Packages
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto"
          >
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">1000+</div>
              <div className="text-sm text-foreground/90">Delighted Customers</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">Daily</div>
              <div className="text-sm text-foreground/90">Fresh Meals</div>
            </div>
            <div className="col-span-2 md:col-span-1 space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">2+</div>
              <div className="text-sm text-foreground/90">Years Experience</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-20" />
    </section>
  );
}
