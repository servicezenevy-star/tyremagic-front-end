import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="section-dark py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-primary blur-3xl" />
      </div>
      <div className="container relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-black uppercase text-primary-foreground leading-tight">
            Ready to Find Your{" "}
            <span className="text-primary">Perfect Tires?</span>
          </h2>
          <p className="text-primary-foreground/60 mt-4 text-lg max-w-xl mx-auto">
            Shop now and get free shipping on every order. Our expert team is here to help you every step of the way.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <Link to="/tires" className="btn-hero-primary gap-2 text-base">
              Shop All Tires <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/contact" className="btn-hero-outline gap-2 text-base">
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
