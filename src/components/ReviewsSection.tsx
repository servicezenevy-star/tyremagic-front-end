import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Michael R.",
    rating: 5,
    text: "Incredible selection and the free shipping was a game changer. Found the perfect all-season tires for my truck in minutes.",
    tire: "Bridgestone Dueler LX",
    date: "2 weeks ago",
  },
  {
    name: "Sarah K.",
    rating: 5,
    text: "The tire decision guide helped me choose exactly what I needed. Installation was arranged seamlessly through their network.",
    tire: "Michelin Defender T+H",
    date: "1 month ago",
  },
  {
    name: "James L.",
    rating: 5,
    text: "Best tire buying experience I've ever had. Prices beat my local shop and the road hazard protection gives me peace of mind.",
    tire: "Continental ExtremeContact",
    date: "3 weeks ago",
  },
  {
    name: "Amanda W.",
    rating: 4,
    text: "Fast delivery and great customer support. The tires perform exactly as described in the reviews. Will definitely buy again.",
    tire: "Goodyear Assurance",
    date: "1 week ago",
  },
];

const ReviewsSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-5xl font-black text-foreground uppercase">
            Customer <span className="text-primary">Reviews</span>
          </h2>
          <p className="text-muted-foreground mt-2">Real reviews from real customers.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              className="product-card p-5 flex flex-col"
            >
              <Quote className="w-6 h-6 text-primary/20 mb-3" />
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    className={`w-4 h-4 ${j < review.rating ? "star-color fill-current" : "text-border"}`}
                  />
                ))}
              </div>
              <p className="text-sm text-foreground leading-relaxed flex-1 mb-4">{review.text}</p>
              <div className="border-t border-border pt-3 mt-auto">
                <span className="text-sm font-bold text-foreground">{review.name}</span>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-xs text-primary font-medium">{review.tire}</span>
                  <span className="text-xs text-muted-foreground">{review.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
