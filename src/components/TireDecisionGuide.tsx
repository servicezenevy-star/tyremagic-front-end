import tireGuide from "@/assets/tire-guide-banner.jpg";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const TireDecisionGuide = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="badge-sale mb-4 inline-block">Expert Recommendations</span>
            <h2 className="font-heading text-3xl md:text-5xl font-black text-foreground uppercase leading-tight">
              Want an Expert{" "}
              <span className="text-primary">Recommendation?</span>
            </h2>
            <p className="text-muted-foreground mt-4 text-base leading-relaxed max-w-lg">
              Our tire knowledge, testing, and customer reviews combined to create the ultimate tire guide.
              Tell us what, where, and how you drive, and we'll give you our top tire recommendations.
            </p>
            <Link to="/tires" className="btn-hero-primary mt-6 gap-2">
              See Recommended Tires <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img
              src={tireGuide}
              alt="Five different tire types for every season"
              className="rounded-2xl shadow-2xl w-full h-[300px] md:h-[380px] object-cover"
            />
            <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground p-4 rounded-xl shadow-lg">
              <span className="font-heading text-3xl font-black">50+</span>
              <span className="text-sm block opacity-90">Brands Available</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TireDecisionGuide;
