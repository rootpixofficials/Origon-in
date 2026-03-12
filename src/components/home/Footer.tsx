import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook,
  Linkedin,
} from "lucide-react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white">

      {/* Main Footer */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12">

            {/* Brand */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <img
                  src="/images/logo.jpeg"
                  alt="Origon"
                  className="h-12 w-12 rounded-xl object-cover"
                />
                <span className="text-2xl font-bold">origon.in</span>
              </div>

              <p className="text-white/70 leading-relaxed">
                Premium pistachio kunafa made with love and authentic recipes.
                Delivering happiness one dessert at a time.
              </p>

              {/* Social Icons */}
              <div className="flex gap-4">
                {[
                  { Icon: Instagram, href: "https://www.instagram.com/origon.in/", label: "Instagram" },
                  { Icon: Facebook, href: "https://www.facebook.com/profile.php?id=61570054439700", label: "Facebook" },
                  { Icon: Linkedin, href: "https://www.linkedin.com/company/origon-in/", label: "LinkedIn" },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-green-700 transition"
                    aria-label={social.label}
                  >
                    <social.Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-lg mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {["Home", "Products", "About Us", "Contact"].map((link) => (
                  <li key={link}>
                    <Link
                      href={
                        link === "Home"
                          ? "/"
                          : link === "About Us"
                            ? "/about"
                            : `/${link.toLowerCase().replace(" ", "")}`
                      }
                      className="text-white/70 hover:text-yellow-400 transition"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div>
              <h3 className="font-bold text-lg mb-6">Our Products</h3>
              <ul className="space-y-3">
                {[
                  "Classic Kunafa",
                  "Cream Kunafa",
                  "Mini Cups",
                  "Chocolate Kunafa",
                ].map((product) => (
                  <li key={product}>
                    <Link
                      href="/products"
                      className="text-white/70 hover:text-yellow-400 transition"
                    >
                      {product}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-bold text-lg mb-6">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <MapPin className="h-5 w-5 text-yellow-400" />
                  <span className="text-white/70">
                    Marvattom, Kadampuzha, Kerala 676553
                  </span>
                </li>

                <li className="flex gap-3">
                  <Phone className="h-5 w-5 text-yellow-400" />
                  <span className="text-white/70">+91 9961722605</span>
                </li>

                <li className="flex gap-3">
                  <Mail className="h-5 w-5 text-yellow-400" />
                  <span className="text-white/70">info@origon.in</span>
                </li>

                <li className="flex gap-3">
                  <Clock className="h-5 w-5 text-yellow-400" />
                  <span className="text-white/70">9:00 AM – 9:00 PM</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 py-6 text-center text-white/50 text-sm">
        © 2026 Origon.in. All rights reserved. Made with ❤️ in India
      </div>

    </footer>
  );
};

export default Footer;
