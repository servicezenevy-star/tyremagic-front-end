import { motion } from "framer-motion";
import { Star, Shield, Award, ArrowRight } from "lucide-react";
import roadHazard from "@/assets/road-hazard.jpg";
import installService from "@/assets/installation-service.jpg";
import { Link } from "react-router-dom";

const features = [
  {
    image: roadHazard,
    badge: "Included Free",
    title: "Manufacturer Tread Wear Warranty",
    description: "It's almost always pothole season. Our free two-year Manufacturer Tread Wear Warranty is included with most tires. Rest easy — we've got you covered.",
    icon: Shield,
    cta: "Learn More",
    href: "/tires",
  },
  {
    image: installService,
    badge: "Hassle-Free",
    title: "Expert Installation",
    description: "Our network of qualified, independent installers are ready to help. Mobile installers available in many areas for ultimate convenience.",
    icon: Award,
    cta: "Find an Installer",
    href: "/shipping",
  },
];

const FeaturesCarousel = () => {
  return (
    <section className="section-alt py-16 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-5xl font-black text-foreground uppercase">
            Why <span className="text-primary">Tire Magician?</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
            More than just tires — we deliver peace of mind with every purchase.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="product-card overflow-hidden group"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={feature.image}
                  alt={
                    feature.title === "Manufacturer Tread Wear Warranty"
                      ? "Discount tires online - manufacturer tread wear warranty when you buy tires online"
                      : "Tire installation services - find an installer when you buy tires online"
                  }
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 badge-sale">{feature.badge}</div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <feature.icon className="w-5 h-5 text-primary" />
                  <h3 className="font-heading text-xl font-bold text-foreground uppercase">{feature.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{feature.description}</p>
                <Link to={feature.href} className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm hover:gap-3 transition-all">
                  {feature.cta} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
          {[
            { value: "50+", label: "Tire Brands" },
            { value: "10K+", label: "Happy Customers" },
            { value: "Free", label: "Shipping Always" },
            { value: "4.9", label: "Average Rating", icon: Star },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="flex items-center justify-center gap-1">
                <span className="font-heading text-3xl md:text-4xl font-black text-primary">{stat.value}</span>
                {stat.icon && <stat.icon className="w-5 h-5 star-color fill-current" />}
              </div>
              <span className="text-muted-foreground text-sm">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesCarousel;
