import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { Star, ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";
import wheelIcon from "@/assets/wheel-icon.png";

const mockWheels = [
  { id: 1, name: "Sport Edition A7", brand: "Sport Edition", price: 189.99, rating: 4.7, reviews: 124, finish: "Gloss Black", size: '17"', badge: "Popular" },
  { id: 2, name: "Konig Ampliform", brand: "Konig", price: 225.99, rating: 4.8, reviews: 87, finish: "Bronze", size: '18"', badge: null },
  { id: 3, name: "Enkei Raijin", brand: "Enkei", price: 269.99, rating: 4.9, reviews: 203, finish: "Hyper Silver", size: '18"', badge: "Top Rated" },
  { id: 4, name: "Motegi MR146", brand: "Motegi Racing", price: 179.99, rating: 4.6, reviews: 156, finish: "Satin Black", size: '17"', badge: null },
  { id: 5, name: "TSW Bathurst", brand: "TSW", price: 299.99, rating: 4.8, reviews: 91, finish: "Gunmetal", size: '19"', badge: "Premium" },
  { id: 6, name: "Sparco Assetto Gara", brand: "Sparco", price: 159.99, rating: 4.5, reviews: 312, finish: "Matte Black", size: '16"', badge: "Best Value" },
  { id: 7, name: "BBS SR", brand: "BBS", price: 389.99, rating: 4.9, reviews: 67, finish: "Himalaya Grey", size: '18"', badge: "Premium" },
  { id: 8, name: "OZ Racing Hyper GT", brand: "OZ Racing", price: 349.99, rating: 4.8, reviews: 145, finish: "Star Graphite", size: '19"', badge: "Top Rated" },
];

const WheelsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="section-dark py-10">
          <div className="container">
            <h1 className="font-heading text-3xl md:text-5xl font-black uppercase text-primary-foreground">
              Shop <span className="text-primary">Wheels</span>
            </h1>
            <p className="text-primary-foreground/60 mt-2">Premium wheels from the world's best manufacturers.</p>
          </div>
        </div>

        <div className="container py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {mockWheels.map((wheel, i) => (
              <motion.div
                key={wheel.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="product-card group"
              >
                <div className="relative p-6 pb-2 bg-secondary/30 flex items-center justify-center">
                  <img src={wheelIcon} alt={wheel.name} className="w-32 h-32 object-contain group-hover:scale-110 transition-transform duration-300" />
                  {wheel.badge && (
                    <span className="absolute top-3 left-3 badge-sale">{wheel.badge}</span>
                  )}
                </div>
                <div className="p-4">
                  <span className="text-xs font-semibold text-primary uppercase">{wheel.brand}</span>
                  <h3 className="font-heading text-lg font-bold text-foreground mt-0.5">{wheel.name}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{wheel.finish} • {wheel.size}</p>
                  <div className="flex items-center gap-1.5 mt-2">
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Star key={j} className={`w-3 h-3 ${j < Math.floor(wheel.rating) ? "star-color fill-current" : "text-border"}`} />
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground">({wheel.reviews})</span>
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-xl font-bold text-foreground">${wheel.price}</span>
                    <span className="text-xs text-muted-foreground">each</span>
                  </div>
                  <button className="btn-hero-primary w-full mt-3 py-2.5 text-xs gap-2">
                    <ShoppingCart className="w-3.5 h-3.5" />
                    Add to Cart
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
};

export default WheelsPage;
