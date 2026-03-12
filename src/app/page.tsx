import React from "react";
import Hero from "@/components/home/Hero";
import Products from "@/components/home/Products";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import HowItWorks from "@/components/home/HowItWorks";
import CustomerRating from "@/components/home/CustomerRating";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Products />
      <WhyChooseUs />
      <HowItWorks />
      <CustomerRating />
      <Footer />
    </main>
  );
}
