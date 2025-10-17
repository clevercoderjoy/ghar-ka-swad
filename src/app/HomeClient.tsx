"use client";
import dynamic from "next/dynamic";

const Hero = dynamic(() => import("@/sections/Hero").then(mod => mod.Hero), { loading: () => <div className="h-[60vh] flex items-center justify-center">Loading...</div> });
const WhyChooseUs = dynamic(() => import("@/sections/WhyChooseUs").then(mod => mod.WhyChooseUs), { loading: () => <div className="h-[40vh] flex items-center justify-center">Loading...</div> });
const Services = dynamic(() => import("@/sections/Services").then(mod => mod.Services), { loading: () => <div className="h-[40vh] flex items-center justify-center">Loading...</div> });
const Packages = dynamic(() => import("@/sections/Packages").then(mod => mod.Packages), { loading: () => <div className="h-[40vh] flex items-center justify-center">Loading...</div> });
const Contact = dynamic(() => import("@/sections/Contact").then(mod => mod.Contact), { loading: () => <div className="h-[40vh] flex items-center justify-center">Loading...</div> });

export default function HomeClient() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <Services />
      <Packages />
      <Contact />
    </>
  );
}
