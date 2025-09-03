"use client";

import { motion } from "framer-motion";
import { Shield, Clock, Star } from "lucide-react";

export function FeaturesBar() {
  return (
    <section className="py-8 bg-gradient-to-r from-orange-500 to-red-600">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4"
          >
            <Shield className="w-8 h-8" />
            <div>
              <div className="font-bold text-lg">Licensed & Insured</div>
              <div className="text-sm opacity-90">Full coverage protection</div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center justify-center gap-4"
          >
            <Clock className="w-8 h-8" />
            <div>
              <div className="font-bold text-lg">Same Day Service</div>
              <div className="text-sm opacity-90">Fast response times</div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-4"
          >
            <Star className="w-8 h-8" />
            <div>
              <div className="font-bold text-lg">5-Star Rated</div>
              <div className="text-sm opacity-90">30+ Google Reviews</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}