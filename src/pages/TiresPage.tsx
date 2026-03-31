import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { Star, Filter, ChevronDown, ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import tireIcon from "@/assets/tire-icon.png";

const tireBrands = ["Bridgestone", "Michelin", "Goodyear", "Continental", "Pirelli", "Falken", "Hankook", "Cooper", "Toyo", "Dunlop"];
const tireTypes = ["All Season", "Summer", "Winter", "All Terrain", "Performance", "Touring"];

const mockTires = [
  { id: 1, name: "Dueler LX", brand: "Bridgestone", price: 189.99, originalPrice: 219.99, rating: 4.8, reviews: 342, type: "All Season", size: "225/65R17", badge: "Best Seller" },
  { id: 2, name: "Defender T+H", brand: "Michelin", price: 164.99, originalPrice: null, rating: 4.9, reviews: 1205, type: "All Season", size: "215/55R17", badge: "Top Rated" },
  { id: 3, name: "Assurance MaxLife", brand: "Goodyear", price: 142.99, originalPrice: 169.99, rating: 4.6, reviews: 876, type: "All Season", size: "225/60R16", badge: "Sale" },
  { id: 4, name: "ExtremeContact DWS 06", brand: "Continental", price: 199.99, originalPrice: null, rating: 4.7, reviews: 654, type: "Performance", size: "245/45R18", badge: null },
  { id: 5, name: "P7 AS Plus 3", brand: "Pirelli", price: 178.99, originalPrice: 209.99, rating: 4.5, reviews: 432, type: "All Season", size: "235/55R17", badge: "Sale" },
  { id: 6, name: "WildPeak A/T4W", brand: "Falken", price: 156.99, originalPrice: null, rating: 4.8, reviews: 989, type: "All Terrain", size: "265/70R17", badge: "Best Seller" },
  { id: 7, name: "Ventus V2 Concept2", brand: "Hankook", price: 109.99, originalPrice: 129.99, rating: 4.4, reviews: 567, type: "Performance", size: "225/45R17", badge: "Sale" },
  { id: 8, name: "Discoverer AT3 4S", brand: "Cooper", price: 148.99, originalPrice: null, rating: 4.7, reviews: 723, type: "All Terrain", size: "245/75R16", badge: "Top Rated" },
  { id: 9, name: "Open Country A/T III", brand: "Toyo", price: 172.99, originalPrice: 199.99, rating: 4.6, reviews: 445, type: "All Terrain", size: "275/65R18", badge: "Sale" },
  { id: 10, name: "Sport Maxx RT2", brand: "Dunlop", price: 215.99, originalPrice: null, rating: 4.5, reviews: 289, type: "Summer", size: "255/35R19", badge: null },
  { id: 11, name: "CrossClimate2", brand: "Michelin", price: 185.99, originalPrice: null, rating: 4.9, reviews: 1567, type: "All Season", size: "225/50R17", badge: "Top Rated" },
  { id: 12, name: "Alenza AS Ultra", brand: "Bridgestone", price: 198.99, originalPrice: 229.99, rating: 4.7, reviews: 312, type: "Touring", size: "235/55R20", badge: "Sale" },
];

const TiresPage = () => {
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState("popular");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const filteredTires = mockTires.filter((tire) => {
    if (selectedBrands.length > 0 && !selectedBrands.includes(tire.brand)) return false;
    if (selectedType && tire.type !== selectedType) return false;
    return true;
  });

  const sortedTires = [...filteredTires].sort((a, b) => {
    switch (sortBy) {
      case "price-low": return a.price - b.price;
      case "price-high": return b.price - a.price;
      case "rating": return b.rating - a.rating;
      default: return b.reviews - a.reviews;
    }
  });

  const toggleBrand = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Page header */}
        <div className="section-dark py-10">
          <div className="container">
            <h1 className="font-heading text-3xl md:text-5xl font-black uppercase text-primary-foreground">
              Shop <span className="text-primary">Tires</span>
            </h1>
            <p className="text-primary-foreground/60 mt-2">Find the perfect tires for your vehicle. Free shipping on all orders.</p>
          </div>
        </div>

        <div className="container py-8">
          {/* Toolbar */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setFiltersOpen(!filtersOpen)}
                className="inline-flex items-center gap-2 px-4 py-2.5 border border-border rounded-lg text-sm font-medium text-foreground hover:bg-accent transition-colors"
              >
                <Filter className="w-4 h-4" />
                Filters
                {(selectedBrands.length > 0 || selectedType) && (
                  <span className="w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                    {selectedBrands.length + (selectedType ? 1 : 0)}
                  </span>
                )}
              </button>
              {selectedBrands.length > 0 || selectedType ? (
                <button
                  onClick={() => { setSelectedBrands([]); setSelectedType(null); }}
                  className="text-sm text-primary font-medium hover:underline"
                >
                  Clear all
                </button>
              ) : null}
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">{sortedTires.length} results</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="form-select w-auto text-sm"
              >
                <option value="popular">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>

          <div className="flex gap-8">
            {/* Sidebar filters */}
            <aside className={`${filtersOpen ? 'block' : 'hidden'} lg:block w-full lg:w-64 flex-shrink-0`}>
              <div className="space-y-6">
                <div>
                  <h3 className="font-heading text-sm font-bold uppercase text-foreground mb-3 flex items-center justify-between">
                    Tire Type
                    <ChevronDown className="w-4 h-4" />
                  </h3>
                  <div className="space-y-2">
                    {tireTypes.map((type) => (
                      <label key={type} className="flex items-center gap-2 cursor-pointer group">
                        <input
                          type="radio"
                          name="tireType"
                          checked={selectedType === type}
                          onChange={() => setSelectedType(selectedType === type ? null : type)}
                          className="w-4 h-4 text-primary accent-primary"
                        />
                        <span className="text-sm text-foreground group-hover:text-primary transition-colors">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="border-t border-border pt-6">
                  <h3 className="font-heading text-sm font-bold uppercase text-foreground mb-3 flex items-center justify-between">
                    Brand
                    <ChevronDown className="w-4 h-4" />
                  </h3>
                  <div className="space-y-2">
                    {tireBrands.map((brand) => (
                      <label key={brand} className="flex items-center gap-2 cursor-pointer group">
                        <input
                          type="checkbox"
                          checked={selectedBrands.includes(brand)}
                          onChange={() => toggleBrand(brand)}
                          className="w-4 h-4 accent-primary rounded"
                        />
                        <span className="text-sm text-foreground group-hover:text-primary transition-colors">{brand}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            {/* Product grid */}
            <div className="flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {sortedTires.map((tire, i) => (
                  <motion.div
                    key={tire.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="product-card group"
                  >
                    <div className="relative p-6 pb-2 bg-secondary/30 flex items-center justify-center">
                      <img src={tireIcon} alt={tire.name} className="w-32 h-32 object-contain group-hover:scale-110 transition-transform duration-300" />
                      {tire.badge && (
                        <span className={`absolute top-3 left-3 ${tire.badge === "Sale" ? "badge-sale" : tire.badge === "Top Rated" ? "badge-new" : "badge-sale"}`}>
                          {tire.badge}
                        </span>
                      )}
                    </div>
                    <div className="p-4">
                      <span className="text-xs font-semibold text-primary uppercase">{tire.brand}</span>
                      <h3 className="font-heading text-lg font-bold text-foreground mt-0.5">{tire.name}</h3>
                      <p className="text-xs text-muted-foreground mt-1">{tire.type} • {tire.size}</p>
                      <div className="flex items-center gap-1.5 mt-2">
                        <div className="flex gap-0.5">
                          {Array.from({ length: 5 }).map((_, j) => (
                            <Star key={j} className={`w-3 h-3 ${j < Math.floor(tire.rating) ? "star-color fill-current" : "text-border"}`} />
                          ))}
                        </div>
                        <span className="text-xs text-muted-foreground">({tire.reviews})</span>
                      </div>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-baseline gap-2">
                          <span className="text-xl font-bold text-foreground">${tire.price}</span>
                          {tire.originalPrice && (
                            <span className="text-sm text-muted-foreground line-through">${tire.originalPrice}</span>
                          )}
                        </div>
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

              {sortedTires.length === 0 && (
                <div className="text-center py-20">
                  <p className="text-muted-foreground text-lg">No tires match your filters.</p>
                  <button
                    onClick={() => { setSelectedBrands([]); setSelectedType(null); }}
                    className="text-primary font-semibold mt-2 hover:underline"
                  >
                    Clear all filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
};

export default TiresPage;
