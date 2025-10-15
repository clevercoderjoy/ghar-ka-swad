"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, CookingPot, X } from "lucide-react";

export function Hero() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  const handleOrderNow = () => {
    setIsOrderModalOpen(true);
  };

  const handleCallNow = () => {
    // Replace with actual phone number
    window.open('tel:+919934567890', '_self');
    setIsOrderModalOpen(false);
  };

  const handleCloseModal = () => {
    setIsOrderModalOpen(false);
  };
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-base md:text-lg text-foreground max-w-2xl mx-auto leading-relaxed font-medium space-y-1"
          >
            <p className="text-md tracking-wider">The authentic home-cooked bihari cuisine.</p>
            <p className="text-md">हर खुराक में माँ के हाथ का प्यार, आपके <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-lg text-primary/90 font-semibold">घर के स्वाद</span> में |</p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-row gap-3 sm:gap-4 justify-center items-center pt-4"
          >
            <Button
              size="lg"
              className="group relative overflow-hidden rounded-full px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold shadow-glow transition-all duration-300 hover:scale-105 hover:shadow-xl"
              onClick={handleOrderNow}
            >
              <Phone className="mr-1 sm:mr-2 h-4 sm:h-5 w-4 sm:w-5 transition-transform group-hover:rotate-12" />
              <span className="hidden xs:inline">Order Now</span>
              <span className="xs:hidden">Order</span>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold backdrop-blur-sm border-foreground transition-all duration-300 hover:scale-105 hover:bg-primary/10"
              onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <CookingPot className="mr-1 sm:mr-2 h-4 sm:h-5 w-4 sm:w-5" />
              <span className="hidden xs:inline">View Packages</span>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 pt-12 max-w-2xl mx-auto"
          >
            <div className="space-y-1 sm:space-y-2 text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">1000+</div>
              <div className="text-xs sm:text-sm text-foreground/90">Delighted Customers</div>
            </div>
            <div className="space-y-1 sm:space-y-2 text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">Daily</div>
              <div className="text-xs sm:text-sm text-foreground/90">Fresh Meals</div>
            </div>
            <div className="space-y-1 sm:space-y-2 text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">2+</div>
              <div className="text-xs sm:text-sm text-foreground/90">Years Experience</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-20" />

      {/* Liquid Glass Order Modal */}
      <AnimatePresence>
        {isOrderModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={handleCloseModal}
          >
            {/* Backdrop with blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/20 backdrop-blur-md"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 300,
                duration: 0.3
              }}
              className="relative w-full max-w-md mx-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Liquid Glass Card */}
              <div className="relative p-8 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
                {/* Glass reflection effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/20 via-transparent to-transparent" />

                {/* Content */}
                <div className="relative z-10 text-center space-y-6">
                  {/* Icon */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    className="mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm border border-white/30 flex items-center justify-center"
                  >
                    <Phone className="h-8 w-8 text-white" />
                  </motion.div>

                  {/* Title */}
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-2xl font-bold text-white"
                  >
                    Ready to Order?
                  </motion.h3>

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-white/90 text-lg leading-relaxed"
                  >
                    Do you want to call and place your order now?
                  </motion.p>

                  {/* Action Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex gap-4 pt-4"
                  >
                    <Button
                      onClick={handleCallNow}
                      className="flex-1 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-semibold py-3 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border border-white/20"
                    >
                      <Phone className="mr-2 h-4 w-4" />
                      Yes, Call Now
                    </Button>
                    <Button
                      onClick={handleCloseModal}
                      variant="outline"
                      className="flex-1 bg-white/10 hover:bg-white/20 text-white border-white/30 hover:border-white/40 font-semibold py-3 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
                    >
                      Not Now
                    </Button>
                  </motion.div>
                </div>

                {/* Ambient light effects */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-3xl blur-xl opacity-30 animate-pulse" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
