import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { UtensilsCrossed, Users, Clock, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: UtensilsCrossed,
    title: "Daily Tiffin Service",
    description: "Fresh, nutritious meals delivered daily to your doorstep. Perfect for working professionals and students."
  },
  {
    icon: Users,
    title: "Catering Services",
    description: "Complete catering solutions for your events, parties, and celebrations with customizable menus."
  },
  {
    icon: Clock,
    title: "Flexible Timings",
    description: "Choose your preferred delivery times - breakfast, lunch, or dinner. We adapt to your schedule."
  },
  {
    icon: Heart,
    title: "Made with Love",
    description: "Every meal is prepared with care by our mother, bringing authentic home-cooked taste to you."
  }
];

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-20 md:py-32 relative overflow-hidden">
      <div className="container px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Our Services
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            From daily tiffins to special events, we've got your food needs covered
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="group h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow hover:scale-105">
                <CardContent className="p-6 space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
