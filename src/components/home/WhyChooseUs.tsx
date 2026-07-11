"use client";

import React from "react";
import { Truck, Shield, Globe, Map, TrendingUp, CheckCircle, Users, Box, LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: Shield,
    title: "Trusted Distribution Partner",
    description: "We build lasting relationships based on transparency, reliability, and consistent performance.",
  },
  {
    icon: Truck,
    title: "Fast & Efficient Delivery",
    description: "Our streamlined distribution process ensures products are delivered quickly and efficiently.",
  },
  {
    icon: Globe,
    title: "Strong Retail & Wholesale Network",
    description: "Expanding network of retailers, wholesalers, distributors, and super stockists across multiple markets.",
  },
  {
    icon: Map,
    title: "Kerala Market Expertise",
    description: "With a strong presence in Kerala, we understand regional market trends and customer preferences.",
  },
  {
    icon: TrendingUp,
    title: "Expanding Distribution Network",
    description: "Starting from Malappuram, continuously expanding across Kerala to create a nationwide network.",
  },
  {
    icon: CheckCircle,
    title: "Carefully Selected Quality Products",
    description: "Partnering with manufacturers offering quality products with strong market potential.",
  },
  {
    icon: Users,
    title: "Dedicated Professional Team",
    description: "Experienced and customer-focused team working closely with partners to provide responsive support.",
  },
  {
    icon: Box,
    title: "Reliable Supply Chain Solutions",
    description: "From inventory management to delivery, maintaining a smooth, dependable supply chain.",
  },
];

const WhyChooseUs: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="why-choose-us" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-green-600 font-semibold text-sm uppercase tracking-wider mb-4 block">
            Why Choose Us
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
              ORIGON
            </span>
          </h2>

          <p className="text-gray-600 text-lg">
            We are committed to helping brands grow through reliable distribution, strong market connections, and long-term business partnerships.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group p-8 rounded-2xl bg-white hover:bg-green-50 transition duration-500 shadow hover:shadow-xl"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-600 to-emerald-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="h-8 w-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
