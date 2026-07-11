"use client";
import React, { useRef } from 'react';
import { Target, Globe, TrendingUp, Shield, Handshake, Users, ArrowRight } from "lucide-react";
import { motion, useInView } from 'framer-motion';
import Footer from "@/components/home/Footer";
import Link from "next/link";

export default function AboutPage() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-green-50 to-white py-24 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
              COMPANY INTRODUCTION
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Building Strong <span className="text-green-600">Distribution Networks</span> <br/> for Growing Brands
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Founded in 2025, ORIGON is a fast-growing FMCG sales and distribution company headquartered in 
              Maravattam, Kadampuzha, Malappuram, Kerala. Our mission is to help brands expand their market 
              reach through reliable distribution, efficient supply chain management, and strong business 
              partnerships.
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
                Our <span className="text-green-600">Growth Journey</span>
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Our journey began with the distribution of ₹100 Kunafa Chocolate, which quickly gained popularity across Malappuram. Through a dedicated sales network and consistent customer demand, we have successfully distributed thousands of units and currently sell more than 1,000 Kunafa Chocolates daily.
              </p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                As demand grew, ORIGON expanded beyond a single product by adding more chocolate and confectionery products to our catalog. Today, we continue to identify quality products with strong market potential while building a diverse portfolio that serves retailers, wholesalers, and consumers.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="p-6 border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition bg-gray-50">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                    <Target className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Our Mission</h3>
                  <p className="text-sm text-gray-600">To help brands expand their market reach through reliable distribution and efficient supply chain management.</p>
                </div>
                <div className="p-6 border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition bg-gray-50">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                    <Globe className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Our Vision</h3>
                  <p className="text-sm text-gray-600">To establish a nationwide distribution network that connects brands with markets across India.</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden"
            >
              <img src="/images/hero-kunafa.jpg" alt="Distribution Network" className="w-full shadow-2xl" />
              <div className="absolute top-6 right-6 bg-white/95 backdrop-blur px-4 py-3 rounded-2xl shadow-xl border border-white/20">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <TrendingUp className="h-5 w-5 text-green-700" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Expanding</p>
                    <p className="text-[10px] text-gray-500 uppercase font-bold tracking-tight">Across Kerala</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Supporting Emerging Brands */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-green-600 font-bold text-xs uppercase tracking-[0.2em] mb-4 block">PARTNER WITH US</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Supporting <span className="text-green-600">Emerging Brands</span>
            </h2>
            <p className="text-gray-600 mt-4 max-w-3xl mx-auto text-lg leading-relaxed">
              At ORIGON, we believe that many excellent products never reach their full market potential due to 
              limited distribution. Our focus is on partnering with small and emerging businesses that are looking 
              to expand their products into new markets.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Handshake, title: "Trusted Growth Partner", desc: "Becoming a reliable distribution network rather than just another supplier." },
              { icon: Shield, title: "Market Expansion", desc: "Building long-term partnerships with manufacturers to scale presence." },
              { icon: Users, title: "Retail Network", desc: "Strengthening retail and wholesale distribution across key demographics." }
            ].map((f, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 text-center"
              >
                <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <f.icon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Looking Ahead */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Looking <span className="text-green-600">Ahead</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              ORIGON's vision is to establish a nationwide distribution network that connects brands with markets across India. As we continue to grow, we welcome manufacturers, startups, and established businesses seeking a trusted distribution partner.
            </p>
            <p className="text-gray-600 text-lg mb-12 leading-relaxed">
              Our long-term goal is not only to distribute quality products but also to develop our own branded products and expand into manufacturing, creating an integrated ecosystem of manufacturing, branding, and distribution.
            </p>
            <p className="text-xl font-bold text-gray-900 mb-8 italic">
              "Connecting Brands Today, Building India's Distribution Network for Tomorrow."
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50 pb-32">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-green-600 rounded-[3rem] p-12 md:p-20 text-center text-white shadow-2xl shadow-green-200"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Grow Your Business?</h2>
            <p className="text-green-50 text-lg mb-10 max-w-2xl mx-auto">
              Together, we aim to create opportunities, expand markets, and build lasting business relationships that drive sustainable growth for everyone involved.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/partner">
                <button className="bg-white text-green-700 px-10 py-4 rounded-full font-bold hover:bg-green-50 transition shadow-lg flex items-center gap-2">
                  Become a Partner
                  <ArrowRight className="h-5 w-5" />
                </button>
              </Link>
              <Link href="/contact">
                <button className="border-2 border-white/30 text-white px-10 py-4 rounded-full font-bold hover:bg-white/10 transition">
                  Contact Us
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
