"use client";

import { motion } from "framer-motion";

const processSteps = [
  { step: "1", title: "Call or Book Online", description: "Contact us for immediate assistance or schedule a visit" },
  { step: "2", title: "We Come to You", description: "Our mobile workshop arrives at your location" },
  { step: "3", title: "Expert Diagnosis", description: "Professional assessment of your motorcycle" },
  { step: "4", title: "Fast Repair", description: "Quality repairs completed on-site" },
];

export function Process() {
  return (
    <section id="process" className="section-padding bg-muted">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Getting your motorcycle fixed has never been easier
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                {step.step}
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}