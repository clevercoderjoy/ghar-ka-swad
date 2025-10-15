"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    detail: "+91 XXXXX XXXXX",
    action: "tel:+91XXXXXXXXXX"
  },
  {
    icon: Mail,
    title: "Email",
    detail: "order@gharkaswad.com",
    action: "mailto:order@gharkaswad.com"
  },
  {
    icon: MapPin,
    title: "Location",
    detail: "Darbhanga, Bihar",
    action: null
  },
  {
    icon: Clock,
    title: "Delivery Hours",
    detail: "7 AM - 9 PM Daily",
    action: null
  }
];

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden bg-secondary/30">
      <div className="container px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Get In Touch
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to experience authentic home-cooked meals? Contact us today!
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-12">
          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow group">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="w-12 h-12 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-sm text-muted-foreground">
                        {info.title}
                      </h3>
                      {info.action ? (
                        <a 
                          href={info.action}
                          className="block text-base font-medium hover:text-primary transition-colors duration-300"
                        >
                          {info.detail}
                        </a>
                      ) : (
                        <p className="text-base font-medium">{info.detail}</p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20 backdrop-blur-sm shadow-glow">
              <CardContent className="p-8 md:p-12 text-center space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold">
                  Start Your Journey to Delicious Home-Cooked Meals
                </h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Join hundreds of satisfied customers who trust us for their daily meals. 
                  Contact us now to place your first order or discuss a monthly package.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Button 
                    size="lg"
                    className="rounded-full px-8 py-6 text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                    onClick={() => window.location.href = 'tel:+91XXXXXXXXXX'}
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now
                  </Button>
                  <Button 
                    size="lg"
                    variant="outline"
                    className="rounded-full px-8 py-6 text-lg font-semibold backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-primary/10"
                    onClick={() => window.location.href = 'mailto:order@gharkaswad.com'}
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    Send Email
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
