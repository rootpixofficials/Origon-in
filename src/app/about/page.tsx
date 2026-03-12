"use client";
import React, { useState, useRef } from 'react';
import { Truck, Shield, Clock, Award, Leaf, Heart, Globe, Coffee, Star, ChefHat, ThumbsUp, LucideIcon } from "lucide-react";
import { motion, useInView } from 'framer-motion';
import Footer from "@/components/home/Footer";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  stat: string;
  statLabel: string;
}

const features: Feature[] = [
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Fresh kunafa delivered to your doorstep within 24 hours",
    stat: "98%",
    statLabel: "On-time Delivery"
  },
  {
    icon: Shield,
    title: "Quality Assured",
    description: "Premium pistachios and ingredients sourced from trusted suppliers",
    stat: "100%",
    statLabel: "Quality Guarantee"
  },
  {
    icon: Clock,
    title: "Made Fresh Daily",
    description: "Every order is prepared fresh to ensure the best taste",
    stat: "24h",
    statLabel: "Freshness Window"
  },
  {
    icon: Award,
    title: "Traditional Recipe",
    description: "Authentic Middle Eastern recipes passed down through generations",
    stat: "3+",
    statLabel: "Generations"
  },
  {
    icon: Leaf,
    title: "Natural Ingredients",
    description: "No preservatives, no artificial flavors — just pure goodness",
    stat: "0%",
    statLabel: "Artificial Additives"
  },
  {
    icon: Heart,
    title: "Made with Love",
    description: "Handcrafted with passion and attention to every detail",
    stat: "5000+",
    statLabel: "Happy Customers"
  },
];

interface TeamMember {
  name: string;
  role: string;
  experience: string;
  specialty: string;
  image: string;
  quote: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Ahmed Al-Hakim",
    role: "Master Chef",
    experience: "25+ years",
    specialty: "Traditional Kunafa",
    image: "/images/chef-ahmed.jpg",
    quote: "Every kunafa tells a story of tradition and passion."
  },
  {
    name: "Fatima Al-Mansoori",
    role: "Recipe Developer",
    experience: "15+ years",
    specialty: "Modern Fusion",
    image: "/images/chef-fatima.jpg",
    quote: "Innovating while respecting traditions."
  },
  {
    name: "Yusuf Khan",
    role: "Quality Control",
    experience: "12+ years",
    specialty: "Ingredient Selection",
    image: "/images/quality-yusuf.jpg",
    quote: "Only the finest ingredients make it to our kitchen."
  },
];

const milestones = [
  { year: "1995", title: "Family Recipe Born", description: "Our original kunafa recipe was perfected" },
  { year: "2010", title: "First Shop Opens", description: "Started serving in a small bakery in Dubai" },
  { year: "2018", title: "Online Expansion", description: "Launched nationwide delivery service" },
  { year: "2022", title: "Award Recognition", description: "Received 'Best Middle Eastern Dessert' award" },
  { year: "2023", title: "International", description: "Started shipping to 15+ countries" },
];

export default function AboutPage() {
  const [activeMilestone, setActiveMilestone] = useState<number>(2);
  
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const scaleIn = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-green-900/20 to-emerald-900/10 py-24">
        <div className="max-w-7xl mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="inline-flex items-center gap-2 text-green-600 font-semibold text-sm uppercase tracking-wider mb-6 px-4 py-2 bg-green-100 rounded-full">
              <Heart className="h-4 w-4" />
              Our Story
            </span>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              More Than Just{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
                Kunafa
              </span>
            </h1>
            
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              We're a family-run business bringing authentic Middle Eastern sweetness to your table, 
              preserving traditions while embracing innovation since 1995.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-green-100 rounded-3xl -z-10"></div>
                <img
                  src="/images/kunafa-making.jpg"
                  alt="Handcrafting kunafa"
                  className="rounded-3xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <ChefHat className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">25+ Years</p>
                      <p className="text-sm text-gray-600">Of Excellence</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Our <span className="text-green-600">Journey</span> of Flavor
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  What began as a family recipe in a small kitchen has blossomed into a passion 
                  project that brings authentic Middle Eastern desserts to thousands of homes. 
                  Every kunafa we make carries the love and tradition of generations.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                    <Star className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Our Mission</h3>
                  <p className="text-gray-600">
                    To preserve authentic Middle Eastern dessert traditions while making them 
                    accessible to everyone, everywhere.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                    <Globe className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Our Vision</h3>
                  <p className="text-gray-600">
                    To become the world's most trusted brand for authentic Middle Eastern sweets.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-green-50/50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-green-600">Milestones</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              From humble beginnings to nationwide recognition
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-200 hidden md:block"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-green-600 rounded-full border-4 border-white z-10"></div>

                  {/* Content */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      onClick={() => setActiveMilestone(index)}
                      className={`bg-white p-6 rounded-2xl shadow-lg cursor-pointer transition-all ${
                        activeMilestone === index ? 'ring-2 ring-green-500' : ''
                      }`}
                    >
                      <div className="inline-flex items-center gap-2 text-green-600 font-bold text-sm mb-2">
                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Enhanced */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-green-600 font-semibold text-sm uppercase tracking-wider mb-4 block">
              Why Choose Us
            </span>

            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              The{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
                Origon
              </span>{" "}
              Difference
            </h2>
          </motion.div>

          <motion.div
            ref={containerRef}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ y: -10 }}
                  className="group relative p-8 rounded-2xl bg-white hover:bg-gradient-to-br hover:from-white hover:to-green-50 transition-all duration-500 shadow-lg hover:shadow-2xl border border-transparent hover:border-green-100"
                >
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-600 to-emerald-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Icon className="h-8 w-8 text-white" />
                    </div>

                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition">
                        {feature.title}
                      </h3>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-green-600">{feature.stat}</div>
                        <div className="text-xs text-gray-500">{feature.statLabel}</div>
                      </div>
                    </div>

                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
