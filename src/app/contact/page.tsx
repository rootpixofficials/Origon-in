"use client";
import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook,
  Linkedin,
  MessageCircle,
  User,
  Send,
  CheckCircle,
  Map,
  ArrowRight,
  Briefcase,
  Building,
  MapPinned,
  LucideIcon
} from "lucide-react";
import { motion } from 'framer-motion';
import Footer from "@/components/home/Footer";

interface ContactInfo {
  icon: LucideIcon;
  title: string;
  details: string;
  subDetails?: string;
  action: string;
  color: string;
  bgColor: string;
  href?: string;
}

const contactInfo: ContactInfo[] = [
  {
    icon: MapPin,
    title: "Visit Our Office",
    details: "ORIGON, Maravattam, Kadampuzha",
    subDetails: "Malappuram, Kerala – 676553, India",
    action: "View on Map",
    color: "text-blue-500",
    bgColor: "bg-blue-50",
    href: "https://maps.google.com/"
  },
  {
    icon: Phone,
    title: "Call or WhatsApp Us",
    details: "+91 99617 22605",
    subDetails: "Alt: +91 90617 22605",
    action: "Call Now",
    color: "text-green-500",
    bgColor: "bg-green-50",
    href: "tel:+919961722605"
  },
  {
    icon: Mail,
    title: "Email Us",
    details: "info@origon.in",
    subDetails: "For all business inquiries",
    action: "Send Email",
    color: "text-red-500",
    bgColor: "bg-red-50",
    href: "mailto:info@origon.in"
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: "9:00 AM – 6:00 PM",
    subDetails: "Monday – Saturday (Sunday Closed)",
    action: "Contact Anytime",
    color: "text-purple-500",
    bgColor: "bg-purple-50"
  },
];

const businessTypes = [
  "Manufacturer",
  "Brand Owner",
  "Super Stockist",
  "Distributor",
  "Wholesaler",
  "Retailer",
  "Customer",
  "Other"
];

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    businessType: '',
    state: '',
    district: '',
    subject: '',
    message: ''
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
        name: '',
        company: '',
        phone: '',
        email: '',
        businessType: '',
        state: '',
        district: '',
        subject: '',
        message: ''
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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-green-600 to-emerald-500 py-24">
        <div className="max-w-7xl mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Get in <span className="text-yellow-300">Touch</span>
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Whether you're a manufacturer looking for a distribution partner, a business interested in becoming a super stockist, or a customer seeking more information about our products, we'd be happy to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className={`${info.bgColor} rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all h-full`}
              >
                {info.href ? (
                  <a
                    href={info.href}
                    target={info.href.startsWith('http') ? "_blank" : undefined}
                    rel={info.href.startsWith('http') ? "noopener noreferrer" : undefined}
                    className="flex items-start gap-4 h-full"
                  >
                    <div className={`w-14 h-14 rounded-xl ${info.bgColor} flex items-center justify-center shrink-0`}>
                      <info.icon className={`h-7 w-7 ${info.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 text-lg mb-2">{info.title}</h3>
                      <p className="text-gray-700 font-semibold mb-1">{info.details}</p>
                      {info.subDetails && (
                        <p className="text-gray-600 text-sm">{info.subDetails}</p>
                      )}
                    </div>
                  </a>
                ) : (
                  <div className="flex items-start gap-4 h-full">
                    <div className={`w-14 h-14 rounded-xl ${info.bgColor} flex items-center justify-center shrink-0`}>
                      <info.icon className={`h-7 w-7 ${info.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 text-lg mb-2">{info.title}</h3>
                      <p className="text-gray-700 font-semibold mb-1">{info.details}</p>
                      {info.subDetails && (
                        <p className="text-gray-600 text-sm">{info.subDetails}</p>
                      )}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-12 items-start">

            {/* Left Column: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-8 bg-white rounded-[40px] shadow-2xl p-8 md:p-12"
            >
              <div className="mb-10">
                <h2 className="text-4xl font-bold text-gray-900 mb-3">
                  Send Us an Enquiry
                </h2>
                <p className="text-gray-500">
                  Fill out the form below and our team will get back to you as soon as possible.
                </p>
              </div>

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
                      <User className="h-4 w-4" /> Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 rounded-2xl border border-gray-200 outline-none focus:border-green-500 transition !text-black shadow-sm"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
                      <Building className="h-4 w-4" /> Company Name (Optional)
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-4 rounded-2xl border border-gray-200 outline-none focus:border-green-500 transition !text-black shadow-sm"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
                      <Phone className="h-4 w-4" /> Mobile Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 rounded-2xl border border-gray-200 outline-none focus:border-green-500 transition !text-black shadow-sm"
                      placeholder="Your mobile number"
                    />
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
                      <Mail className="h-4 w-4" /> Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 rounded-2xl border border-gray-200 outline-none focus:border-green-500 transition !text-black shadow-sm"
                      placeholder="Your email address"
                    />
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
                      <Briefcase className="h-4 w-4" /> Business Type
                    </label>
                    <div className="relative">
                      <select
                        name="businessType"
                        value={formData.businessType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-4 rounded-2xl border border-gray-200 outline-none focus:border-green-500 transition !text-black shadow-sm appearance-none bg-white cursor-pointer"
                      >
                        <option value="" disabled>Select business type</option>
                        {businessTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
                      <MapPinned className="h-4 w-4" /> State
                    </label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 rounded-2xl border border-gray-200 outline-none focus:border-green-500 transition !text-black shadow-sm"
                      placeholder="Your state"
                    />
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
                      <Map className="h-4 w-4" /> District
                    </label>
                    <input
                      type="text"
                      name="district"
                      value={formData.district}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 rounded-2xl border border-gray-200 outline-none focus:border-green-500 transition !text-black shadow-sm"
                      placeholder="Your district"
                    />
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
                      <MessageCircle className="h-4 w-4" /> Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 rounded-2xl border border-gray-200 outline-none focus:border-green-500 transition !text-black shadow-sm"
                      placeholder="Subject of your enquiry"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-4 rounded-2xl border border-green-400 outline-none focus:border-green-500 transition resize-none !text-black placeholder-gray-400 shadow-sm"
                    placeholder="Write your message here."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-5 px-6 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-3 shadow-xl ${isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-green-600 hover:bg-green-700 text-white'
                    }`}
                >
                  {isSubmitting ? "Sending..." : (
                    <>
                      Send Enquiry <Send className="h-5 w-5 rotate-45" />
                    </>
                  )}
                </motion.button>

                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-4 border-2 border-green-500 rounded-xl flex items-center gap-3 bg-green-50/50"
                  >
                    <CheckCircle className="h-6 w-6 text-green-500" />
                    <p className="font-medium text-gray-800">Thank you for your enquiry. We will contact you soon.</p>
                  </motion.div>
                )}
              </form>
            </motion.div>

            {/* Right Column: Looking For */}
            <div className="lg:col-span-4 space-y-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-gray-100 rounded-[40px] overflow-hidden shadow-xl"
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d125342.18601353985!2d75.9030819!3d10.9676515!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7b59921f50777%3A0xfb2d33851b121d8d!2sOrigon!5e0!3m2!1sen!2sin!4v1773329300112!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Origon Location"
                    className="absolute inset-0"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-[40px] shadow-2xl p-8"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Looking for Business Opportunities?
                </h3>
                <p className="text-gray-500 mb-4">We are actively looking for:</p>
                <div className="space-y-4">
                  {[
                    "FMCG Brands",
                    "Food & Beverage Manufacturers",
                    "Chocolate & Confectionery Brands",
                    "Imported Products",
                    "Super Stockists",
                    "State & District Distributors",
                    "Wholesale Partners"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      <span className="font-semibold text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-8 text-green-600 font-bold text-sm">
                  Let's work together to build a stronger distribution network across Kerala and India.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
