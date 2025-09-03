"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, Clock, Zap, ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90"></div>
        <div className="absolute inset-0 w-full h-full">
          <Image 
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80" 
            alt="Motorcycle Repair"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-600/30 rounded-full px-4 py-2 mb-6">
              <Zap className="w-4 h-4 text-red-500" />
              <span className="text-sm text-red-500 font-semibold">24/7 Emergency Service</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Mobile Motorcycle
              <span className="block gradient-text">Repair in Miami</span>
            </h1>

            <p className="text-xl text-gray-300 mb-8">
              Professional motorcycle repair that comes to you. From emergency roadside assistance to scheduled maintenance, we bring the shop to your location.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button variant="gradient" size="lg" asChild>
                <a href="tel:7864706864" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
                asChild
              >
                <a href="#contact" className="flex items-center gap-2">
                  Book Service
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 text-gray-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-orange-500" />
                <span>Miami & Surrounding Areas</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-orange-500" />
                <span>Available 24/7</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:block relative h-[500px]"
          >
            <Image 
              src="https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=800&q=80"
              alt="Professional Mechanic"
              fill
              className="rounded-2xl shadow-2xl object-cover"
            />
          </motion.div>
        </div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown className="w-8 h-8 text-white/50" />
      </motion.div>
    </section>
  );
}