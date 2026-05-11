import tireIcon from "@/assets/tire-icon.png";
import wheelIcon from "@/assets/wheel-icon.png";
import packageIcon from "@/assets/package-icon.png";
import { Ticket, Truck, Wrench, Tag, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const categories = [
  { label: "Tires", image: tireIcon, href: "/tires" },
  { label: "Wheels", image: wheelIcon, href: "/wheels" },
  { label: "Tire & Wheel Packages", image: packageIcon, href: "/tires" },
  { label: "Deals & Offers", icon: Tag, href: "/deals" },
  { label: "Installation", icon: Wrench, href: "/shipping" },
  { label: "Free Shipping", icon: Truck, href: "/shipping" },
  { label: "Manufacturer Tread Wear Warranty", icon: Shield, href: "/tires" },
  { label: "Tire Lottery", icon: Ticket, href: "/deals" },
];

const CategoryBar = () => {
  return (
    <section className="border-b border-border py-6 bg-background">
      <div className="container">
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 md:gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
            >
              <Link to={cat.href} className="category-card w-20 sm:w-24 md:w-28">
                {cat.image ? (
                  <img
                    src={cat.image}
                    alt={
                      cat.href === "/deals"
                        ? "Tire deals - discount tires online"
                        : `Buy tires online - ${cat.label}`
                    }
                    className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
                  />
                ) : cat.icon ? (
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-secondary flex items-center justify-center">
                    <cat.icon className="w-6 h-6 text-foreground" />
                  </div>
                ) : null}
                <span className="text-[11px] sm:text-xs font-semibold text-foreground text-center leading-tight">
                  {cat.label}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryBar;
