"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax effect simulation */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-1000"
        style={{ 
          backgroundImage: "url('/images/luxury-salon-hero.png')",
          backgroundAttachment: "fixed"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/80 to-charcoal/60" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-gold font-medium tracking-widest uppercase text-sm block mb-4"
          >
            Since 2000 • Ramakrishna Road, Salem
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-playfair mb-6 leading-tight"
          >
            Redefining <span className="text-gold italic">Luxury</span> <br /> 
            in Beauty & Wellness.
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-white/80 text-lg md:text-xl mb-10 max-w-xl font-light leading-relaxed"
          >
            Experience the 4.5-star excellence of Salem's premier unisex salon. From bridal transformations to expert styling.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button className="bg-gold hover:bg-gold-dark text-emerald-900 px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg">
              Book Appointment
            </button>
            <button className="border border-gold text-gold hover:bg-gold/10 px-8 py-4 rounded-full font-semibold transition-all">
              View Services
            </button>
          </motion.div>
        </div>
      </div>

      {/* Decorative Gold Line */}
      <motion.div 
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 1.5, delay: 1 }}
        className="absolute bottom-0 left-0 h-1 bg-gold/30"
      />
    </section>
  );
}
