import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/Tire Magician.JPG.jpeg";


const SiteFooter = () => {
  return (
    <footer className="footer-section pt-14 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="w-20 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-heading font-black">
                <img
                  src={logo}
                  alt="Online Tire Retailer Logo"
                  className="w-100"
                />
              </span>
            </div>
            <p className="text-sm leading-relaxed opacity-80 max-w-sm">
              Your trusted source for premium tires online. Free shipping, top brands, manufacturer tread wear warranty, and expert customer support.

            </p>
            {/* <div className="flex gap-3 mt-5">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div> */}
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-heading text-sm font-bold uppercase mb-4 footer-heading tracking-wide">Shop</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: "All Tires", href: "/tires" },
                { label: "Wheels", href: "/wheels" },
                { label: "Packages", href: "/tires" },
                { label: "Deals", href: "/deals" },
              ].map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="hover:text-primary transition-colors inline-flex items-center gap-1 group">
                    {link.label}
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-heading text-sm font-bold uppercase mb-4 footer-heading tracking-wide">Support</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: "Order Tracking", href: "/shipping" },
                { label: "Shipping Info", href: "/shipping" },
                { label: "Returns", href: "/contact" },
                { label: "FAQ", href: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="hover:text-primary transition-colors inline-flex items-center gap-1 group">
                    {link.label}
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-sm font-bold uppercase mb-4 footer-heading tracking-wide">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-3.5 h-3.5 text-primary" />
                </div>
                <span>1-800-TIRE-MAG</span>
              </li>
              <li className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-3.5 h-3.5 text-primary" />
                </div>
                <span>contact@tiremagician.com</span>
              </li>
              <li className="flex items-start gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-primary" />
                </div>
                <span>www.tiremagician.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs opacity-60">
          <span>© {new Date().getFullYear()} Tire Magician. All rights reserved.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
