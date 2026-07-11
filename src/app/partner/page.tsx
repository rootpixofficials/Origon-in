"use client";
import React, { useState } from 'react';
import { 
  Building2, 
  TrendingUp, 
  ShieldCheck, 
  PackageSearch, 
  MapPin, 
  Users, 
  Briefcase,
  CheckCircle,
  Send,
  User,
  Phone,
  Mail,
  Building,
  MapPinned,
  Map
} from "lucide-react";
import { motion } from 'framer-motion';
import Footer from "@/components/home/Footer";

export default function PartnerPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    state: '',
    district: '',
    address: '',
    currentBusiness: '',
    experience: '',
    warehouse: '',
    brands: '',
    territory: '',
    investment: '',
    additionalInfo: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '', company: '', phone: '', email: '', state: '', district: '', address: '',
        currentBusiness: '', experience: '', warehouse: '', brands: '', territory: '', investment: '', additionalInfo: ''
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-green-700 to-emerald-600 py-24">
        <div className="max-w-7xl mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Partner with <span className="text-yellow-400">ORIGON</span>
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
              Join ORIGON's expanding distribution network. Whether you are an established brand, an emerging manufacturer, or looking to become a Super Stockist, we offer the opportunity to represent quality products with strong market demand.
            </p>
          </motion.div>
        </div>
      </section>

      {/* For Manufacturers & Brands */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-green-600 font-bold text-xs uppercase tracking-widest mb-4 block">FOR MANUFACTURERS & BRANDS</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Grow Your Brand with ORIGON
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              ORIGON helps manufacturers and emerging brands expand their market presence through reliable sales, distribution, and strategic market development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: MapPin, title: "Strong Kerala Access", desc: "Reach retailers, wholesalers, and consumers efficiently across key markets." },
              { icon: Building2, title: "Established Network", desc: "Expanding network includes super stockists, wholesalers, and retail partners." },
              { icon: Users, title: "Dedicated Sales Support", desc: "Our experienced sales team improves visibility and generates demand." },
              { icon: PackageSearch, title: "Warehousing", desc: "Efficient inventory management, timely deliveries, and consistent availability." }
            ].map((f, i) => (
              <motion.div key={i} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-green-200 transition">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                  <f.icon className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-gray-600 text-sm">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Super Stockist */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="text-green-600 font-bold text-xs uppercase tracking-widest mb-4 block">BECOME A SUPER STOCKIST</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Grow Your Business
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Join ORIGON's expanding distribution network and become a trusted Super Stockist for premium FMCG, food, confectionery, and consumer products. As we continue to grow across Kerala and expand throughout India, we are actively appointing dedicated super stockists.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "Exclusive business opportunities in selected territories",
                  "Growing product portfolio with regular new additions",
                  "Attractive business growth potential",
                  "Reliable supply chain and timely product availability"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Support Provided</h3>
              <p className="text-gray-600">Product supply and inventory support, sales and marketing guidance, territory development assistance, promotional materials, product training, and dedicated partner support.</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="bg-white p-8 rounded-[30px] shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Apply to Become a Super Stockist</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-green-500" />
                  <input type="text" name="company" placeholder="Company Name" value={formData.company} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-green-500" />
                  <input type="tel" name="phone" placeholder="Mobile Number" value={formData.phone} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-green-500" />
                  <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-green-500" />
                  <input type="text" name="state" placeholder="State" value={formData.state} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-green-500" />
                  <input type="text" name="district" placeholder="District" value={formData.district} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-green-500" />
                  <input type="text" name="currentBusiness" placeholder="Current Business Type" value={formData.currentBusiness} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-green-500" />
                  <input type="text" name="experience" placeholder="Years of Experience" value={formData.experience} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-green-500" />
                  <input type="text" name="warehouse" placeholder="Warehouse Availability (sq ft)" value={formData.warehouse} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-green-500" />
                  <input type="text" name="territory" placeholder="Preferred Territory" value={formData.territory} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-green-500" />
                </div>
                <textarea name="additionalInfo" placeholder="Additional Information (Existing brands, Investment capacity, etc.)" value={formData.additionalInfo} onChange={handleChange} rows={3} className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-green-500 resize-none"></textarea>
                <button type="submit" disabled={isSubmitting} className={`w-full py-4 rounded-xl font-bold text-white transition ${isSubmitting ? 'bg-gray-400' : 'bg-green-600 hover:bg-green-700'}`}>
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </button>
                {isSubmitted && <div className="p-3 bg-green-50 text-green-700 rounded-xl text-center font-medium flex items-center justify-center gap-2"><CheckCircle className="h-5 w-5" /> Application Submitted</div>}
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
