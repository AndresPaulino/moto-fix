"use client";

import { motion } from "framer-motion";
import { Wrench, Shield, Zap, Clock, CheckCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const services = [
  {
    icon: <Wrench className="w-8 h-8" />,
    title: "Engine Repair",
    description: "Complete engine diagnostics and repair for all motorcycle types",
    features: ["Oil Changes", "Valve Adjustments", "Engine Rebuilds"],
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Brake Service",
    description: "Professional brake inspection, repair and replacement",
    features: ["Brake Pads", "Brake Fluids", "Rotor Service"],
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Electrical Systems",
    description: "Battery, charging systems, and electrical diagnostics",
    features: ["Battery Testing", "Starter Repair", "Wiring Issues"],
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "24/7 Emergency",
    description: "Round-the-clock emergency roadside assistance",
    features: ["Flat Tires", "Dead Battery", "Breakdown Service"],
  },
];

export function Services() {
  return (
    <section id="services" className="section-padding">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Complete motorcycle repair and maintenance at your location. All makes and models serviced.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center text-white mb-4">
                    {service.icon}
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}