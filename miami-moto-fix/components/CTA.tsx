"use client";

import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export function CTA() {
  return (
    <section className="section-padding bg-gradient-to-r from-orange-500 to-red-600">
      <div className="container text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Need Emergency Repair?</h2>
          <p className="text-xl mb-8 opacity-90">
            Don&apos;t let a breakdown ruin your day. We&apos;re here to help 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100" asChild>
              <a href="tel:7864706864" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call (786) 470-6864
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-black/20 backdrop-blur-sm border-2 border-white text-white hover:bg-black/30"
              asChild
            >
              <a href="#contact" className="flex items-center gap-2">
                Schedule Service
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}