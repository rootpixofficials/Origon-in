import React from "react";
import { Star, Flame, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { products } from "@/data/products";

const Products: React.FC = () => {
  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 text-green-600 font-semibold text-sm uppercase tracking-wider mb-4">
            <Flame className="h-4 w-4" />
            Our Specialties
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Delicious Kunafa{" "}
            <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
              Collection
            </span>
          </h2>

          <p className="text-gray-600 text-lg">
            Handcrafted with love using the finest pistachios and traditional
            recipes passed down through generations.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Link 
              key={product.id} 
              href={`/products/${product.id}`}
              className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition duration-500 block h-full"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Badge */}
                <span
                  className={`absolute top-4 left-4 ${product.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full`}
                >
                  {product.badge}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                {/* Rating */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold text-sm">
                      {product.rating}
                    </span>
                  </div>
                  <span className="text-gray-500 text-sm">
                    ({product.reviews} reviews)
                  </span>
                </div>

                {/* Name */}
                <h3 className="font-bold text-lg text-gray-900 group-hover:text-green-600 transition">
                  {product.name}
                </h3>

                {/* Price */}
                <div className="flex items-center justify-between pt-2">
                  <div className="flex flex-col">
                    <span className="text-xl font-bold text-green-600">
                      ₹{product.price}
                    </span>
                    <span className="text-xs text-gray-400 line-through">
                      ₹{product.originalPrice}
                    </span>
                  </div>
                  <div className="h-10 w-10 bg-green-50 rounded-xl flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white transition-all">
                    <ShoppingBag className="h-5 w-5" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
