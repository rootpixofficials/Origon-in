"use client";
import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook,
  Twitter,
  MessageCircle,
  User,
  Send,
  CheckCircle,
  Headphones,
  MailOpen,
  Map,
  ArrowRight,
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
    title: "Visit Our Location",
    details: "marvattom, Kadampuzha, Kerala 676553",
    action: "View on Map",
    color: "text-blue-500",
    bgColor: "bg-blue-50",
    href: "https://maps.app.goo.gl/RUTXkhaa4UiNwdxY7"
  },
  {
    icon: Phone,
    title: "Call Us",
    details: "+91 9961722605",
    subDetails: "Mon-Sun: 9:00 AM – 9:00 PM",
    action: "Call Now",
    color: "text-green-500",
    bgColor: "bg-green-50",
    href: "tel:+919961722605"
  },
  {
    icon: Mail,
    title: "Email Us",
    details: "info@origon.in",
    subDetails: "Orders: info@origon.in",
    action: "Send Email",
    color: "text-red-500",
    bgColor: "bg-red-50",
    href: "mailto:info@origon.in"
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: "9:00 AM – 9:00 PM",
    subDetails: "7 days a week",
    action: "Order Online",
    color: "text-purple-500",
    bgColor: "bg-purple-50"
  },
];

const inquiryTypes = [
  { id: 'general', label: 'General Inquiry', icon: MessageCircle },
  { id: 'order', label: 'Order Support', icon: Headphones },
  { id: 'feedback', label: 'Feedback', icon: MailOpen },
  { id: 'wholesale', label: 'Wholesale', icon: Map },
];

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    subscribe: true
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState('general');

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
        email: '',
        phone: '',
        subject: '',
        message: '',
        subscribe: true
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    setFormData(prev => ({ ...prev, [name]: val }));
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
              Have questions about our kunafa? We're here to help! Reach out to us for orders,
              custom requests, or just to say hello.
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
                      <div className={`mt-4 flex items-center gap-2 text-sm font-bold ${info.color}`}>
                        {info.action} <ArrowRight className="h-4 w-4" />
                      </div>
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

      {/* Contact Form & Map */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-2xl p-8 md:p-12"
            >
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-gray-900 mb-3">
                  Send Us a Message
                </h2>
              </div>

              {/* Inquiry Type Tabs */}
              <div className="flex flex-wrap gap-3 mb-8">
                {inquiryTypes.map((type) => (
                  <motion.button
                    key={type.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveTab(type.id)}
                    className={`flex items-center gap-2 px-4 py-3 rounded-xl transition-all ${activeTab === type.id
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                  >
                    <type.icon className="h-4 w-4" />
                    <span className="font-medium">{type.label}</span>
                  </motion.button>
                ))}
              </div>

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 outline-none focus:border-green-500 transition"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 outline-none focus:border-green-500 transition"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 outline-none focus:border-green-500 transition resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-3 ${isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-green-600 hover:bg-green-700 text-white'
                    }`}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </motion.button>
              </form>
            </motion.div>

            {/* Google Maps Location */}
            <div className="rounded-3xl overflow-hidden shadow-2xl bg-gray-200 h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d125342.18601353985!2d75.9030819!3d10.9676515!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7b59921f50777%3A0xfb2d33851b121d8d!2sOrigon!5e0!3m2!1sen!2sin!4v1773292441304!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Origon Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
