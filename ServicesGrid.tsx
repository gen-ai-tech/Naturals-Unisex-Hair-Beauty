"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["Hair", "Skin", "Spa", "Bridal"];

const services = {
  Hair: [
    { name: "Signature Haircut", price: "₹800+", duration: "45 min" },
    { name: "Global Coloring", price: "₹2500+", duration: "120 min" },
    { name: "Keratin Treatment", price: "₹4000+", duration: "180 min" },
  ],
  Skin: [
    { name: "O3+ Radiance Facial", price: "₹2500", duration: "60 min" },
    { name: "Diamond Polishing", price: "₹3500", duration: "75 min" },
    { name: "Hydrating Facial", price: "₹1800", duration: "45 min" },
  ],
  Spa: [
    { name: "Deep Tissue Massage", price: "₹2200", duration: "60 min" },
    { name: "Aromatherapy", price: "₹2500", duration: "90 min" },
  ],
  Bridal: [
    { name: "HD Bridal Makeup", price: "₹15000+", duration: "240 min" },
    { name: "Airbrush Finish", price: "₹20000+", duration: "300 min" },
  ],
};

export default function ServicesGrid() {
  const [activeTab, setActiveTab] = useState("Hair");

  return (
    <section className="py-24 bg-charcoal">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair mb-4">Our Curated Services</h2>
          <div className="w-24 h-1 bg-gold mx-auto" />
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center gap-4 mb-12 overflow-x-auto pb-4 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-8 py-2 rounded-full border transition-all whitespace-nowrap ${
                activeTab === cat 
                  ? "bg-gold text-emerald-900 border-gold" 
                  : "border-gold/30 text-gold hover:border-gold"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {services[activeTab as keyof typeof services].map((service, index) => (
              <motion.div
                key={`${activeTab}-${service.name}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="group relative p-8 border border-gold/10 bg-charcoal-light rounded-xl hover:border-gold/50 transition-all overflow-hidden"
              >
                {/* Shimmer Effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shimmer" />
                
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-medium text-white">{service.name}</h3>
                    <span className="text-gold font-bold">{service.price}</span>
                  </div>
                  <div className="flex items-center text-white/50 text-sm">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {service.duration}
                  </div>
                  <button className="mt-6 text-sm text-gold uppercase tracking-widest font-semibold border-b border-gold/0 hover:border-gold/100 transition-all">
                    Book Now
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
