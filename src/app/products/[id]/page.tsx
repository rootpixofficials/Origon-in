"use client";
import React, { useState, useEffect } from 'react';
import { ShoppingCart, Star, ChevronLeft, ChevronRight, Heart, Share2, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence, Variants } from 'framer-motion';
import Footer from "@/components/home/Footer";
import { products, Product } from "@/data/products";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(0);
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [imageHovered, setImageHovered] = useState<boolean>(false);

  useEffect(() => {
    const id = Number(params.id);
    const foundProduct = products.find(p => p.id === id);
    if (foundProduct) {
      setProduct(foundProduct);
      setSelectedImage(foundProduct.image);
    } else {
      router.push("/products");
    }
  }, [params.id, router]);

  if (!product) return null;

  const handleCheckout = () => {
    const phoneNumber = "919961722605"; 
    const message = `Hi! I would like to order ${quantity} x ${product.name} from Origon.in. (Total: ₹${product.price * quantity})`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } }
  };

  const imageVariants: Variants = {
    hover: { scale: 1.05, transition: { duration: 0.3, ease: "easeOut" } },
    initial: { scale: 1 }
  };

  const badgeVariants: Variants = {
    initial: { scale: 0, rotate: -180 },
    animate: { scale: 1, rotate: 0, transition: { type: "spring", stiffness: 200, damping: 10 } }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20">
      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* Navigation / Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 text-sm text-gray-600 mb-8"
        >
          <Link href="/" className="hover:text-green-600 transition">Home</Link>
          <ChevronRight className="h-4 w-4" />
          <Link href="/products" className="hover:text-green-600 transition">Products</Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-green-600 font-semibold">{product.name}</span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Product Image */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="space-y-6"
          >
            <motion.div
              variants={itemVariants}
              className="relative rounded-3xl overflow-hidden bg-white shadow-2xl border border-gray-100"
              onMouseEnter={() => setImageHovered(true)}
              onMouseLeave={() => setImageHovered(false)}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={selectedImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  src={selectedImage}
                  alt={product.name}
                  className="w-full aspect-square object-cover"
                />
              </AnimatePresence>
              
              <motion.span
                variants={badgeVariants}
                initial="initial"
                animate="animate"
                className={`absolute top-6 left-6 ${product.badgeColor} text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg`}
              >
                {product.badge}
              </motion.span>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsLiked(!isLiked)}
                className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg"
              >
                <Heart className={`h-6 w-6 ${isLiked ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
              </motion.button>
            </motion.div>

            {/* Thumbnails */}
            <motion.div variants={itemVariants} className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
              {product.images.map((img, idx) => (
                <motion.button
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedImage(img)}
                  className={`relative h-20 w-20 md:h-24 md:w-24 rounded-2xl overflow-hidden flex-shrink-0 border-2 transition-all duration-300 ${
                    selectedImage === img ? 'border-green-500 shadow-lg' : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`${product.name} thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                </motion.button>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <h1 className="text-4xl font-bold text-gray-900">{product.name}</h1>
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Share2 className="h-6 w-6 text-gray-500" />
                </motion.button>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(product.rating)
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="font-bold text-lg">{product.rating}</span>
                </div>
                <span className="text-gray-600">({product.reviews} reviews)</span>
                <span className="text-green-600 font-semibold">
                  {product.stock} left in stock
                </span>
              </div>
            </div>

            <p className="text-gray-700 text-lg leading-relaxed">
              {product.longDescription}
            </p>

            <div className="space-y-3">
              <h3 className="text-xl font-bold text-gray-900">Key Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="h-2 w-2 bg-green-500 rounded-full" />
                    <span className="text-gray-700">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="bg-green-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Nutrition Information</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {Object.entries(product.nutrition).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <p className="text-sm text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1')}</p>
                    <p className="font-semibold text-gray-900">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-4 pt-4">
               <button 
                onClick={() => setQuantity(q => q === 0 ? 1 : q + 1)}
                className="bg-green-600 text-white px-8 py-4 rounded-full font-bold hover:bg-green-700 transition shadow-lg flex items-center gap-2"
              >
                <ShoppingBag className="h-5 w-5" />
                {quantity === 0 ? "Add to Cart" : "Add More"}
              </button>
            </div>
          </motion.div>
        </div>
      </main>

      <AnimatePresence>
        {quantity > 0 && (
          <div className="sticky bottom-4 md:bottom-8 z-40 max-w-7xl mx-auto px-4 pointer-events-none pb-4 md:pb-8">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              className="mx-auto w-[92%] md:w-auto md:min-w-[500px] max-w-2xl bg-white rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.1)] p-4 flex flex-col md:flex-row items-center gap-4 md:gap-6 border border-green-100 pointer-events-auto"
            >
              <div className="flex items-center justify-between w-full md:w-auto md:flex-1 gap-4">
                <div className="flex items-center gap-4">
                  <img src={product.image} alt={product.name} className="h-14 w-14 md:h-16 md:w-16 rounded-2xl object-cover" />
                  <div>
                    <p className="font-bold text-gray-900 line-clamp-1 text-sm md:text-base">{product.name}</p>
                    <p className="text-green-600 font-bold text-base md:text-lg">₹{product.price * quantity}</p>
                  </div>
                </div>

                {/* Mobile-only checkout counter */}
                <div className="flex md:hidden items-center gap-2 bg-gray-50 p-1 rounded-2xl border border-gray-100">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setQuantity(q => Math.max(0, q - 1))}
                    className="h-8 w-8 flex items-center justify-center bg-white rounded-xl shadow-sm text-gray-600 hover:text-red-500 transition-colors"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </motion.button>
                  <span className="font-bold text-base w-6 text-center text-black">{quantity}</span>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setQuantity(q => q + 1)}
                    className="h-8 w-8 flex items-center justify-center bg-white rounded-xl shadow-sm text-gray-600 hover:text-green-600 transition-colors"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </motion.button>
                </div>
              </div>

              <div className="flex w-full md:w-auto items-center gap-3">
                {/* Desktop-only checkout counter */}
                <div className="hidden md:flex items-center gap-3 bg-gray-50 p-1 rounded-2xl border border-gray-100">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setQuantity(q => Math.max(0, q - 1))}
                    className="h-10 w-10 flex items-center justify-center bg-white rounded-xl shadow-sm text-gray-600 hover:text-red-500 transition-colors"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </motion.button>
                  <span className="font-bold text-lg w-8 text-center text-black">{quantity}</span>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setQuantity(q => q + 1)}
                    className="h-10 w-10 flex items-center justify-center bg-white rounded-xl shadow-sm text-gray-600 hover:text-green-600 transition-colors"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </motion.button>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleCheckout}
                  className="flex-1 md:flex-none bg-green-600 text-white px-8 py-3 md:py-4 rounded-2xl font-bold shadow-lg shadow-green-200 hover:bg-green-700 transition-all text-sm md:text-base flex items-center justify-center gap-2"
                >
                  Checkout <ShoppingBag className="h-4 w-4 md:hidden" />
                </motion.button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <Footer />
    </div>
  );
}
