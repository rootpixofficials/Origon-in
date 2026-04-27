"use client";
import React, { useState, useRef } from 'react';
import { Truck, Shield, Clock, Award, Leaf, Heart, Globe, Star, ChefHat, Users, MapPin, Repeat, LucideIcon, ChevronRight, ShoppingBag } from "lucide-react";
import { motion, useInView } from 'framer-motion';
import Footer from "@/components/home/Footer";
import Link from "next/link";

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
    stat: "6000+",
    statLabel: "Happy Customers"
  },
];

interface TeamMember {
  name: string;
  role: string;
  experience: string;
  image: string;
  quote: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Ahmed Al-Hakim",
    role: "Master Chef",
    experience: "Mastery of Traditional Kunafa",
    image: "/images/chef-ahmed.jpg",
    quote: "Authentic Traditional Sweets"
  },
  {
    name: "Fatima Al-Mansoori",
    role: "Culinary Director",
    experience: "Innovation in Every Bite",
    image: "/images/chef-fatima.jpg",
    quote: "Middle Eastern Fusion"
  },
  {
    name: "Yusuf Khan",
    role: "Operations Head",
    experience: "Quality & Logistics Mastery",
    image: "/images/quality-yusuf.jpg",
    quote: "The Quality Standard Experts"
  },
];

const milestones = [
  { year: "1995", title: "Family Recipe Born", description: "Our original kunafa recipe was perfected in a home kitchen" },
  { year: "2010", title: "First Shop Opens", description: "The first flagship retail location opened in Dubai" },
  { year: "2018", title: "Online Expansion", description: "Launched our first digital platform for nationwide delivery" },
  { year: "2022", title: "Award Recognition", description: "Received the prestigious 'Best Gourmet Dessert' award" },
  { year: "2023", title: "International", description: "Expanded shipping to over 15 countries worldwide" },
];

const impactStats = [
  { icon: ShoppingBag, value: "10,000+", label: "Orders Served" },
  { icon: Star, value: "4.9/5", label: "Customer Rating" },
  { icon: MapPin, value: "50+", label: "Cities Covered" },
  { icon: Repeat, value: "95%", label: "Repeat Customers" },
];

export default function AboutPage() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
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

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-green-50 to-white py-24 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
              OUR MISSION
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              More Than Just <span className="text-green-600">Kunafa</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're a family-run business bringing authentic Middle Eastern sweetness to your table,
              preserving traditions while embracing innovation since 1995.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our <span className="text-green-600">Journey</span> of Flavor
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                What began as a family recipe in a small kitchen has blossomed into a passion project that brings authentic Middle Eastern desserts to thousands of homes. Every kunafa we make carries the love and tradition of generations.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="p-6 border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                    <Star className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Our Mission</h3>
                  <p className="text-sm text-gray-600">To preserve authentic Middle Eastern dessert traditions while making them accessible to everyone.</p>
                </div>
                <div className="p-6 border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                    <Globe className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Our Vision</h3>
                  <p className="text-sm text-gray-600">To become the world's most trusted brand for authentic and high quality Middle Eastern sweets.</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden"
            >
              <img src="/images/hero-kunafa.jpg" alt="Kunafa Art" className="w-full shadow-2xl" />
              <div className="absolute top-6 right-6 bg-white/95 backdrop-blur px-4 py-3 rounded-2xl shadow-xl border border-white/20">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <ChefHat className="h-5 w-5 text-green-700" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">25+ Years</p>
                    <p className="text-[10px] text-gray-500 uppercase font-bold tracking-tight">of Excellence</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">
              Our <span className="text-green-600">Milestones</span>
            </h2>
            <p className="text-gray-600 mt-4 font-medium tracking-tight">From humble beginnings to nationwide recognition</p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-green-200" />

            <div className="space-y-12">
              {milestones.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`flex items-center gap-8 ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${i % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 inline-block max-w-xs transition hover:shadow-lg">
                      <span className="text-green-600 font-bold text-sm block mb-1 tracking-widest">• {m.year}</span>
                      <h3 className="font-bold text-gray-900 mb-2">{m.title}</h3>
                      <p className="text-sm text-gray-500">{m.description}</p>
                    </div>
                  </div>
                  <div className="relative z-10 w-4 h-4 rounded-full bg-green-600 border-4 border-white shadow-sm" />
                  <div className="w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Origon Difference */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-green-600 font-bold text-xs uppercase tracking-[0.2em] mb-4 block">WHY CHOOSE US</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              The <span className="text-green-600">Origon</span> Difference
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">We're committed to bringing you the most authentic and delicious pistachio kunafa experience.</p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((f, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <div className="w-14 h-14 bg-green-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-green-100">
                  <f.icon className="h-7 w-7 text-white" />
                </div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{f.title}</h3>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-green-600">{f.stat}</p>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter">{f.statLabel}</p>
                  </div>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">{f.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Impact Stats */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
          >
            {impactStats.map((s, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center hover:border-green-200 transition"
              >
                <div className="flex justify-center mb-4">
                  <s.icon className="h-6 w-6 text-green-600" />
                </div>
                <p className="text-3xl font-bold text-gray-900 mb-1">{s.value}</p>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-tight">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


      {/* Meet Our Family */}
      <section className="py-24 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">
              Meet Our <span className="text-green-600">Family</span>
            </h2>
            <p className="text-gray-500 mt-4 tracking-tight">The passionate team behind every sweet box of joy.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
              >
                <div className="h-80 overflow-hidden">
                  <img src={m.image} alt={m.name} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105" />
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="flex items-center gap-2 px-3 py-1 bg-green-50 text-green-700 rounded-full text-[10px] font-bold uppercase tracking-widest border border-green-100">
                      <ChefHat className="h-3 w-3" />
                      {m.role}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{m.name}</h3>
                  <p className="text-sm text-green-600 font-bold mb-4 tracking-tighter uppercase">{m.experience}</p>
                  <div className="pt-4 border-t border-gray-50">
                    <p className="text-gray-500 text-sm italic">"{m.quote}"</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-green-600 rounded-[3rem] p-12 md:p-20 text-center text-white shadow-2xl shadow-green-200"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Taste the Difference?</h2>
            <p className="text-green-50 text-lg mb-10 max-w-xl mx-auto">Handcrafted authentic Middle Eastern sweets delivered right to your door.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/products">
                <button className="bg-white text-green-700 px-10 py-4 rounded-full font-bold hover:bg-green-50 transition shadow-lg">
                  Order Now
                </button>
              </Link>
              <Link href="/products">
                <button className="border-2 border-white/30 text-white px-10 py-4 rounded-full font-bold hover:bg-white/10 transition">
                  View Menu
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
