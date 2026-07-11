import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white">

      {/* Main Footer */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">

            {/* Brand */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center gap-3">
                <img
                  src="/images/logo.jpeg"
                  alt="Origon"
                  className="h-12 w-12 rounded-xl object-cover"
                />
                <span className="text-2xl font-bold">origon.in</span>
              </div>

              <p className="text-white/70 leading-relaxed max-w-sm text-sm">
                ORIGON is a fast-growing FMCG sales & distribution company headquartered in Malappuram, Kerala. We specialize in sales & distribution, super stockist services, wholesale distribution, and brand market expansion while building a strong distribution network across India.
              </p>

              {/* Social Icons */}
              <div className="flex gap-4">
                {[
                  { Icon: Facebook, href: "https://www.facebook.com/profile.php?id=61570054439700", label: "Facebook" },
                  { Icon: Instagram, href: "https://www.instagram.com/origon.in/", label: "Instagram" },
                  { Icon: Linkedin, href: "https://www.linkedin.com/company/origon-in/", label: "LinkedIn" },
                  { Icon: Youtube, href: "#", label: "YouTube" },
                  { Icon: MessageCircle, href: "https://wa.me/919961722605", label: "WhatsApp" },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-green-600 transition"
                    aria-label={social.label}
                  >
                    <social.Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-lg mb-6 text-yellow-400">Quick Links</h3>
              <ul className="space-y-3 text-sm">
                {[
                  { name: "Home", href: "/" },
                  { name: "About Us", href: "/about" },
                  { name: "Our Services", href: "/#services" },
                  { name: "Products", href: "/products" },
                  { name: "Partner With ORIGON", href: "/partner" },
                  { name: "Become a Super Stockist", href: "/partner" },
                  { name: "Contact Us", href: "/contact" },
                  { name: "Blog", href: "#" }
                ].map((link, idx) => (
                  <li key={idx}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-white transition"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services & Products */}
            <div className="space-y-8">
              <div>
                <h3 className="font-bold text-lg mb-6 text-yellow-400">Our Services</h3>
                <ul className="space-y-3 text-sm">
                  {[
                    "Sales & Distribution",
                    "Super Stockist Services",
                    "Wholesale Distribution",
                    "Brand Market Expansion",
                    "E-Commerce Sales",
                    "Direct-to-Consumer (D2C)"
                  ].map((service, idx) => (
                    <li key={idx} className="text-white/70">
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-6 text-yellow-400">Products</h3>
                <ul className="space-y-3 text-sm">
                  {[
                    "Kunafa Chocolate",
                    "Premium Chocolates",
                    "Snacks & Confectionery",
                    "FMCG Products",
                    "New Arrivals"
                  ].map((product, idx) => (
                    <li key={idx} className="text-white/70">
                      {product}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Business Opportunities & Contact */}
            <div className="space-y-8">
              <div>
                <h3 className="font-bold text-lg mb-6 text-yellow-400">Business Opportunities</h3>
                <ul className="space-y-3 text-sm">
                  {[
                    "Become a Super Stockist",
                    "Become a Distributor",
                    "Partner With ORIGON",
                    "Brand Registration",
                    "Product Enquiry"
                  ].map((opp, idx) => (
                    <li key={idx} className="text-white/70">
                      <Link href="/partner" className="hover:text-white transition">{opp}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="font-bold text-lg mb-6 text-yellow-400">Contact Us</h3>
                <ul className="space-y-4 text-sm">
                  <li className="flex gap-3">
                    <MapPin className="h-5 w-5 text-white/50 shrink-0" />
                    <span className="text-white/70">
                      ORIGON, Maravattam, Kadampuzha, Malappuram, Kerala – 676553, India
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <Phone className="h-5 w-5 text-white/50 shrink-0" />
                    <span className="text-white/70">+91 99617 22605</span>
                  </li>
                  <li className="flex gap-3">
                    <MessageCircle className="h-5 w-5 text-white/50 shrink-0" />
                    <span className="text-white/70">WhatsApp: +91 99617 22605</span>
                  </li>
                  <li className="flex gap-3">
                    <Mail className="h-5 w-5 text-white/50 shrink-0" />
                    <span className="text-white/70">info@origon.in</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10 bg-gray-950 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50">
            <div className="flex flex-col items-center md:items-start gap-2">
              <p>© 2025–2026 ORIGON. All Rights Reserved.</p>
              <p className="italic text-white/40">Connecting Brands Today, Building India's Distribution Network for Tomorrow.</p>
              <p>GSTIN: 32HJIPK2599N1ZH</p>
            </div>
            
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {[
                "Privacy Policy",
                "Terms & Conditions",
                "Shipping & Delivery Policy",
                "Return & Refund Policy",
                "Disclaimer"
              ].map((legal, idx) => (
                <li key={idx}>
                  <Link href="#" className="hover:text-white transition">
                    {legal}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
