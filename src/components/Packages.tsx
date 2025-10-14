import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Sparkles } from "lucide-react";

const packages = [
  {
    name: "Daily Tiffin",
    price: "Per Day",
    description: "Perfect for trying out our service",
    features: [
      "One meal per day",
      "Fresh preparation",
      "On-time delivery",
      "Standard menu"
    ],
    popular: false
  },
  {
    name: "Monthly Package",
    price: "Advance Payment",
    description: "Most popular choice among our customers",
    features: [
      "30 days of delicious meals",
      "Best value pricing",
      "Priority delivery",
      "Customizable menu",
      "Weekend specials",
      "Dedicated support"
    ],
    popular: true
  },
  {
    name: "Event Catering",
    price: "Custom Quote",
    description: "For your special occasions",
    features: [
      "Customized menu",
      "Any number of guests",
      "Professional setup",
      "Multiple cuisines",
      "Dedicated service staff"
    ],
    popular: false
  }
];

export function Packages() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="packages" className="py-20 md:py-32 relative overflow-hidden">
      <div className="container px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Choose Your Plan
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Flexible packages designed for every need and budget
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={pkg.popular ? "md:scale-105" : ""}
            >
              <Card className={`h-full relative overflow-hidden backdrop-blur-sm transition-all duration-300 hover:shadow-glow ${
                pkg.popular 
                  ? "border-primary/50 bg-primary/5" 
                  : "bg-card/50 border-border/50"
              }`}>
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 text-xs font-semibold rounded-bl-lg flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    Most Popular
                  </div>
                )}
                
                <CardHeader className="space-y-4 pb-8">
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-primary">{pkg.price}</div>
                    <CardDescription className="text-base">{pkg.description}</CardDescription>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4 pb-8">
                  <ul className="space-y-3">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <div className="mt-1 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-sm text-foreground/90">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter>
                  <Button 
                    className="w-full rounded-full font-semibold transition-all duration-300 hover:scale-105"
                    variant={pkg.popular ? "default" : "outline"}
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Get Started
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
