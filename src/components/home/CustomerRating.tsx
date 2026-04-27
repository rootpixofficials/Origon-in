"use client";

import React from "react";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Mumbai",
    rating: 5,
    text:
      "Absolutely divine! The pistachio kunafa from Origon is the best I've ever had. The perfect balance of crispy and creamy.",
    avatar: "PS",
  },
  {
    id: 2,
    name: "Rahul Verma",
    location: "Delhi",
    rating: 5,
    text:
      "Ordered for my mom's birthday and everyone loved it! Fresh, authentic, and delivered right on time. Highly recommend!",
    avatar: "RV",
  },
  {
    id: 3,
    name: "Aisha Khan",
    location: "Bangalore",
    rating: 5,
    text:
      "The chocolate pistachio kunafa is a game changer! So decadent and perfect for special occasions. Will order again!",
    avatar: "AK",
  },
];

const CustomerRating: React.FC = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-green-700 font-semibold text-sm uppercase tracking-wider mb-4 block">
            Customer Love
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our <span className="text-green-700">Customers</span> Say
          </h2>

          <p className="text-gray-600 text-lg">
            Don’t just take our word for it — hear from our happy customers!
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-500"
            >
              {/* Quote Icon */}
              <div className="w-12 h-12 bg-green-700 rounded-xl flex items-center justify-center mb-6">
                <Quote className="h-6 w-6 text-white" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 leading-relaxed mb-6 italic">
                “{testimonial.text}”
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-700 rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-bold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CustomerRating;
