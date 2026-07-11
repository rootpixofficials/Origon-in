import React from "react";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Products from "@/components/home/Products";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Industries from "@/components/home/Industries";
import HowItWorks from "@/components/home/HowItWorks";
import CustomerRating from "@/components/home/CustomerRating";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Products />
      <WhyChooseUs />
      <Industries />
      <HowItWorks />
      <CustomerRating />
      <Footer />
    </main>
  );
}
