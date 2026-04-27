"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Star, Truck, Shield } from "lucide-react";
import Link from "next/link";

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="home" className="relative min-h-screen pt-20 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-600 via-green-600 to-emerald-600 opacity-95" />

      {/* Decorative Elements */}
      <div className="absolute top-40 right-10 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur px-4 py-2 rounded-full"
            >
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium">
                Premium Quality Desserts
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
            >
              Authentic <span className="text-yellow-400">Pistachio</span>
              <br />
              Kunafa Delivered
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-white/90 max-w-lg leading-relaxed"
            >
              Experience the rich, authentic taste of handcrafted pistachio
              kunafa made with premium ingredients and traditional recipes.
            </motion.p>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-6"
            >
              <div className="flex items-center gap-2">
                <div className="p-2 bg-white/20 rounded-lg">
                  <Truck className="h-5 w-5" />
                </div>
                <span className="text-sm font-medium">Fast Delivery</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="p-2 bg-white/20 rounded-lg">
                  <Shield className="h-5 w-5" />
                </div>
                <span className="text-sm font-medium">Fresh & Safe</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Link href="/products">
                <button className="group flex items-center gap-2 bg-yellow-400 text-green-900 px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition">
                  Order Now
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>

              <Link href="/products">
                <button className="px-8 py-4 rounded-full border border-white text-white hover:bg-white hover:text-green-700 transition font-semibold">
                  View Menu
                </button>
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex items-center gap-8 pt-8 border-t border-white/20"
            >
              <motion.div variants={itemVariants}>
                <div className="text-3xl font-bold">500+</div>
                <div className="text-sm text-white/70">Happy Customers</div>
              </motion.div>
              <motion.div variants={itemVariants}>
                <div className="text-3xl font-bold">4.9</div>
                <div className="text-sm text-white/70">Rating</div>
              </motion.div>
              <motion.div variants={itemVariants}>
                <div className="text-3xl font-bold">24h</div>
                <div className="text-sm text-white/70">Delivery</div>
              </motion.div>
            </motion.div>
          </div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <img
              src="/images/hero-kunafa.jpg"
              alt="Delicious Pistachio Kunafa"
              className="w-full max-w-lg mx-auto rounded-3xl shadow-2xl"
            />

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -bottom-4 -left-4 md:bottom-8 md:-left-8 bg-white p-4 rounded-2xl shadow-xl z-20"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-br from-yellow-400 to-yellow-300 rounded-xl">
                  <Star className="h-5 w-5 text-green-900 fill-green-900" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">Best Seller</div>
                  <div className="text-sm text-gray-500">Classic Kunafa</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
