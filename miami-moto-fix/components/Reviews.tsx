"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const reviews = [
  { rating: 5, text: "Best mobile mechanic in Miami! Fixed my Harley on the spot. Professional and fast service.", author: "John D." },
  { rating: 5, text: "Saved me from being stranded on I-95. Quick response time and fair pricing. Highly recommend!", author: "Maria S." },
  { rating: 5, text: "These guys know their stuff. Fixed my sportbike's electrical issues that other shops couldn't figure out.", author: "Alex R." },
];

export function Reviews() {
  return (
    <section id="reviews" className="section-padding">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Customer Reviews</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See what our customers say about our service
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card>
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">&ldquo;{review.text}&rdquo;</p>
                  <p className="font-semibold">- {review.author}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}