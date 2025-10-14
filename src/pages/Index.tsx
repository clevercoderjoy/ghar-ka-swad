import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Packages } from "@/components/Packages";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Set dark mode as default
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main id="home" className="relative">
        <Hero />
        <Services />
        <WhyChooseUs />
        <Packages />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
