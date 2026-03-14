
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
    details: "Marvattom, Kadampuzha, Kerala 676553",
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

  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isNewsletterSubscribing, setIsNewsletterSubscribing] = useState(false);
  const [isNewsletterSubscribed, setIsNewsletterSubscribed] = useState(false);

  const handleNewsletterSubmit = async () => {
    if (!newsletterEmail) return;
    setIsNewsletterSubscribing(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsNewsletterSubscribing(false);
    setIsNewsletterSubscribed(true);
    setTimeout(() => {
      setIsNewsletterSubscribed(false);
      setNewsletterEmail('');
    }, 3000);
  };

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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

      {/* Contact Form & Info Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-12 items-start">

            {/* Left Column: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 bg-white rounded-[40px] shadow-2xl p-8 md:p-12"
            >
              <div className="mb-10">
                <h2 className="text-4xl font-bold text-gray-900 mb-3">
                  Send Us a Message
                </h2>
                <p className="text-gray-500">
                  Fill out the form below and we'll get back to you within 24 hours
                </p>
              </div>

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
                      <User className="h-4 w-4" /> Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 rounded-2xl border border-gray-200 outline-none focus:border-green-500 transition !text-black shadow-sm"
                      placeholder="Write your name here."
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
                      placeholder="Write your email here."
                    />
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
                      <Phone className="h-4 w-4" /> Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 rounded-2xl border border-gray-200 outline-none focus:border-green-500 transition !text-black !bg-blue-50 shadow-sm"
                      placeholder="Write your phone number here."
                    />
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
                      <MessageCircle className="h-4 w-4" /> Subject
                    </label>
                    <div className="relative">
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-4 rounded-2xl border border-gray-200 outline-none focus:border-green-500 transition !text-black shadow-sm appearance-none bg-white cursor-pointer"
                      >
                        <option value="" disabled>Select inquiry type</option>
                        {inquiryTypes.map((type) => (
                          <option key={type.id} value={type.label}>
                            {type.label}
                          </option>
                        ))}
                      </select>
                      <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
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
                    className="w-full px-4 py-4 rounded-2xl border border-green-400 outline-none focus:border-green-500 transition resize-none !text-black placeholder-gray-400 shadow-sm"
                    placeholder="Write your message here."
                  />
                </div>

                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="subscribe"
                    name="subscribe"
                    checked={formData.subscribe}
                    onChange={handleChange}
                    className="w-5 h-5 rounded border-gray-300 text-green-600 focus:ring-green-500 cursor-pointer"
                  />
                  <label htmlFor="subscribe" className="text-gray-700 text-sm md:text-base cursor-pointer">
                    Subscribe to our newsletter for updates and special offers
                  </label>
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
                      Send Message <Send className="h-5 w-5 rotate-45" />
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
                    <p className="font-medium text-gray-800">Thank you for your message. It has been sent.</p>
                  </motion.div>
                )}
              </form>
            </motion.div>

            {/* Right Column: Info & Map */}
            <div className="lg:col-span-5 space-y-8">
              {/* Map/Location Mini Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-gray-100 rounded-[40px] overflow-hidden shadow-xl"
              >
                <div className="relative h-80 w-full overflow-hidden">
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
                <div className="p-8 bg-white border-t border-gray-100">
                  <h4 className="font-bold text-gray-900 text-lg mb-4">Our Location</h4>
                  <div className="space-y-4 text-gray-600">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                        <MapPin className="h-5 w-5 text-green-600" />
                      </div>
                      <p className="text-sm">Marvattom, Kadampuzha, Kerala 676553</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                        <Clock className="h-5 w-5 text-green-600" />
                      </div>
                      <p className="text-sm">Open 9:00 AM – 9:00 PM, 7 days a week</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* FAQ Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-[40px] shadow-2xl p-8"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  Frequently Asked Questions
                </h3>
                <div className="space-y-6">
                  {[
                    {
                      q: "How long does delivery take?",
                      a: "We deliver within 24 hours in Kerala. Other areas take 2-3 business days."
                    },
                    {
                      q: "Do you offer catering for events?",
                      a: "Yes! We offer bulk orders and custom arrangements for weddings, parties, and corporate events."
                    },
                    {
                      q: "Is kunafa suitable for vegetarians?",
                      a: "Absolutely! Our kunafa uses vegetarian-friendly cheese and all-natural ingredients."
                    }
                  ].map((faq, idx) => (
                    <div key={idx} className={`${idx !== 2 ? 'border-b border-gray-50 pb-6' : ''}`}>
                      <h4 className="font-bold text-gray-900 mb-2">{faq.q}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
                </div>
                <button className="mt-8 text-green-600 font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                  View all FAQs <ArrowRight className="h-4 w-4" />
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Social & Newsletter Footer Wrapper */}
      <section className="bg-[#0F172A] py-20 overflow-hidden text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-12 items-center">

            {/* Social Section */}
            <div className="lg:col-span-6 space-y-10">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold">
                  Follow Our <span className="text-yellow-400">Sweet</span> Journey
                </h2>
                <p className="text-gray-400 max-w-lg leading-relaxed">
                  Join our community on social media for behind-the-scenes looks, special offers, and kunafa inspiration.
                </p>
              </div>

              {/* Social Cards */}
              <div className="flex flex-wrap justify-center gap-6">
                {[
                  { name: 'Facebook', followers: '18K followers', Icon: Facebook, color: 'bg-[#1877F2]' },
                  { name: 'Instagram', followers: '25K followers', Icon: Instagram, color: 'bg-[#E1306C]' },
                  { name: 'LinkedIn', followers: '12K followers', Icon: Linkedin, color: 'bg-[#0A66C2]' },
                ].map((social, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -5 }}
                    className={`${social.color} rounded-3xl p-6 text-center shadow-lg cursor-pointer transition-all min-w-[160px] flex-1 max-w-[200px]`}
                  >
                    <div className="bg-white/20 w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <social.Icon className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="font-bold text-white text-sm md:text-base">{social.name}</h4>
                    <p className="text-white/80 text-[10px] md:text-xs">{social.followers}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Newsletter Card */}
            <div className="lg:col-span-6">
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="bg-[#1E293B] rounded-[40px] p-8 md:p-12 border border-white/5 shadow-2xl"
              >
                <div className="mb-8">
                  <h3 className="text-3xl font-bold mb-3">
                    Stay <span className="text-yellow-400">Updated</span>
                  </h3>
                  <p className="text-gray-400">
                    Subscribe to our newsletter for exclusive recipes, special discounts, and new product launches.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="relative group">
                    <input
                      type="email"
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full bg-[#334155] border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-yellow-400 transition text-white pr-12"
                    />
                    <Mail className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-yellow-400 transition" />
                  </div>
                  <button
                    onClick={handleNewsletterSubmit}
                    disabled={!newsletterEmail || isNewsletterSubscribing || isNewsletterSubscribed}
                    className={`w-full py-5 font-bold rounded-2xl shadow-xl transition-all flex items-center justify-center gap-2 ${
                      isNewsletterSubscribed
                        ? 'bg-green-500 hover:bg-green-600 text-white'
                        : isNewsletterSubscribing || !newsletterEmail
                        ? 'bg-yellow-400/50 text-gray-900/50 cursor-not-allowed'
                        : 'bg-yellow-400 hover:bg-yellow-300 text-gray-900'
                    }`}
                  >
                    {isNewsletterSubscribing ? (
                      "Subscribing..."
                    ) : isNewsletterSubscribed ? (
                      <>
                        <CheckCircle className="h-5 w-5" /> Subscribed
                      </>
                    ) : (
                      "Subscribe Now"
                    )}
                  </button>
                  <p className="text-[10px] text-gray-500 text-center">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
