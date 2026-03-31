import { motion } from "framer-motion";

const brands = [
  "Bridgestone", "Michelin", "Goodyear", "Continental", "Pirelli",
  "Falken", "Hankook", "Kumho", "Toyo", "Cooper",
  "Dunlop", "Firestone", "General", "Yokohama", "BFGoodrich",
  "Nitto", "Vredestein", "Laufenn",
];

const BrandsSection = () => {
  return (
    <section className="py-16 md:py-20 border-t border-border">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-black text-foreground uppercase">
            The Best <span className="text-primary">Tire Brands</span>
          </h2>
          <p className="text-muted-foreground mt-2">We carry all the top brands you know and trust.</p>
        </motion.div>

        <div className="overflow-hidden relative">
          <div className="flex animate-marquee gap-8 w-[200%]">
            {[...brands, ...brands].map((brand, i) => (
              <div
                key={`${brand}-${i}`}
                className="flex-shrink-0 px-6 py-4 bg-secondary rounded-xl border border-border hover:border-primary/30 transition-colors"
              >
                <span className="font-heading text-lg font-bold text-foreground whitespace-nowrap">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
