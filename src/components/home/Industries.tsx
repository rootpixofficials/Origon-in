"use client";

import React from "react";
import { ShoppingBag, Coffee, Package, ShoppingCart, Utensils, Store, LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface Industry {
  icon: LucideIcon;
  title: string;
  description: string;
}

const industries: Industry[] = [
  {
    icon: ShoppingBag,
    title: "FMCG",
    description: "Distributing a wide range of fast-moving consumer goods to help brands reach retailers.",
  },
  {
    icon: Coffee,
    title: "Food & Beverages",
    description: "Efficient distribution solutions that ensure packaged foods and beverages reach the market quickly.",
  },
  {
    icon: Package,
    title: "Chocolates & Confectionery",
    description: "Expanding our portfolio with premium chocolates and confectionery products to meet growing demand.",
  },
  {
    icon: ShoppingCart,
    title: "Consumer Goods",
    description: "Distributing everyday consumer products through wholesalers, retailers, and modern trade channels.",
  },
  {
    icon: Utensils,
    title: "Grocery & Packaged Foods",
    description: "Working with grocery retailers to distribute quality packaged food products and essential items.",
  },
  {
    icon: Store,
    title: "Retail Chains & Modern Trade",
    description: "Partnering with supermarkets and independent stores to ensure consistent product availability.",
  },
];

const Industries: React.FC = () => {
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
    <section id="industries" className="py-20 bg-gray-50">
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
            Where We Deliver
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Industries We{" "}
            <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
              Serve
            </span>
          </h2>

          <p className="text-gray-600 text-lg">
            ORIGON partners with manufacturers, brands, wholesalers, and retailers across multiple industries.
          </p>
        </motion.div>

        {/* Industries Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
               <motion.div
                key={index}
                variants={itemVariants}
                className="group flex gap-6 p-6 rounded-2xl bg-white hover:bg-green-50 transition duration-500 shadow-sm hover:shadow-md"
              >
                <div className="shrink-0 w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center group-hover:bg-green-600 transition-colors duration-300">
                  <Icon className="h-7 w-7 text-green-600 group-hover:text-white transition-colors duration-300" />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition">
                    {industry.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {industry.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Industries;
