import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";

const benefits = [
  "Freshly prepared daily with premium ingredients",
  "Home-cooked taste that reminds you of family",
  "Hygienic preparation in a clean kitchen environment",
  "Affordable pricing with monthly package discounts",
  "Customizable meals for dietary preferences",
  "On-time delivery, every single day",
  "Authentic local and traditional recipes",
  "No preservatives or artificial additives"
];

export function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-32 relative overflow-hidden bg-secondary/30">
      <div className="container px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Why Choose<br />
                <span className="text-primary">Ghar ka Swad?</span>
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                We bring the authentic taste and warmth of home-cooked meals to your doorstep, 
                prepared with love and care just like mom makes it.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-3 group"
                >
                  <div className="mt-1 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors duration-300">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <p className="text-sm md:text-base text-foreground/90 leading-relaxed">
                    {benefit}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 shadow-glow">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-6 p-8">
                  <div className="text-6xl md:text-8xl font-bold text-primary/30">
                    100%
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl md:text-3xl font-bold">Homemade</div>
                    <div className="text-lg text-muted-foreground">
                      Quality & Authenticity Guaranteed
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
