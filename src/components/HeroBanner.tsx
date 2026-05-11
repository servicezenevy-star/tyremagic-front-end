import heroImage from "@/assets/hero-warehouse.jpg";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Truck, Star } from "lucide-react";
import { Link } from "react-router-dom";

const HeroBanner = () => {
  return (
    <section className="relative h-[480px] md:h-[560px] overflow-hidden">
      <img
        src={heroImage}
        alt="Online tire retailer hero - buy tires online from a tire shop online with fast delivery"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0" style={{ background: "linear-gradient(105deg, hsla(220,20%,8%,0.92) 0%, hsla(220,20%,8%,0.7) 50%, hsla(220,20%,8%,0.3) 100%)" }} />
      
      <div className="relative container h-full flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="badge-sale inline-block mb-4 text-xs tracking-wider uppercase">
            Free Shipping on All Orders
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl font-black uppercase leading-[0.9] text-primary-foreground">
            Your Tires,{" "}
            <span className="text-primary">Delivered</span>{" "}
            <span className="text-primary-foreground">Fast</span>
          </h1>
          <p className="text-primary-foreground/70 mt-5 text-base md:text-lg max-w-lg leading-relaxed">
            Shop top-rated brands. Free shipping to your door or installer. The tire shopping experience, reimagined.
          </p>
          <div className="flex flex-wrap gap-3 mt-7">
            <Link to="/tires" className="btn-hero-primary gap-2">
              Shop Tires <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="#how-it-works" className="btn-hero-outline">
              How It Works
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-6 mt-8">
            {[
              { icon: Truck, text: "Free Shipping" },
              { icon: Shield, text: "Manufacturer Tread Wear Warranty" },
              { icon: Star, text: "5,000+ Reviews" },
            ].map((badge) => (
              <div key={badge.text} className="flex items-center gap-2 text-primary-foreground/60 text-xs sm:text-sm">
                <badge.icon className="w-4 h-4 text-primary" />
                <span>{badge.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroBanner;
