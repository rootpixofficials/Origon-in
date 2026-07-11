"use client";

import React from "react";
import { Briefcase, Box, Truck, BarChart, ShoppingCart, Users, LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: Truck,
    title: "Sales & Distribution",
    description: "End-to-end sales and distribution services for FMCG, food, confectionery, and consumer products across Kerala.",
  },
  {
    icon: Box,
    title: "Super Stockist Services",
    description: "Managing inventory, warehousing, and regional distribution to ensure consistent product availability.",
  },
  {
    icon: Briefcase,
    title: "Wholesale Distribution",
    description: "Supplying quality products to wholesalers, retailers, supermarkets, and institutional buyers.",
  },
  {
    icon: BarChart,
    title: "Brand Market Expansion",
    description: "Helping brands expand into new markets by building strong distribution channels and appointing distributors.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Sales",
    description: "Leveraging digital commerce to make selected products available through online marketplaces.",
  },
  {
    icon: Users,
    title: "Direct-to-Consumer (D2C)",
    description: "Delivering selected products directly to consumers, ensuring genuine products and competitive pricing.",
  },
];

const Services: React.FC = () => {
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
    <section id="services" className="py-20 bg-white">
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
            What We Do
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Our{" "}
            <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
              Services
            </span>
          </h2>

          <p className="text-gray-600 text-lg">
            Reliable and scalable distribution solutions that help manufacturers, brands, retailers, and wholesalers grow their business.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
               <motion.div
                key={index}
                variants={itemVariants}
                className="group p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-green-100 hover:bg-green-50 transition duration-500 shadow-sm hover:shadow-xl"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-600 to-emerald-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="h-8 w-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-relaxed text-sm">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
