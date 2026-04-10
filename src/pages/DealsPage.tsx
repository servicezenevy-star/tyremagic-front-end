import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { Tag, ArrowRight, Clock, Percent } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// const deals = [
//   { id: 1, title: "Buy 4 Bridgestone Dueler LX Tires", subtitle: "Save $80 Instantly", brand: "Bridgestone", discount: "$80 OFF", expires: "Mar 31, 2026", color: "from-red-600 to-red-500" },
//   { id: 2, title: "Buy 4 Select Falken Tires", subtitle: "Save $80 Instantly", brand: "Falken", discount: "$80 OFF", expires: "Mar 31, 2026", color: "from-blue-600 to-blue-500" },
//   { id: 3, title: "Buy 4 Select Cooper Tires", subtitle: "Get $70 Back", brand: "Cooper", discount: "$70 REBATE", expires: "Apr 15, 2026", color: "from-amber-600 to-amber-500" },
//   { id: 4, title: "Pirelli P7 AS Plus 3", subtitle: "Get a $100 Visa Prepaid Card", brand: "Pirelli", discount: "$100 CARD", expires: "Apr 30, 2026", color: "from-yellow-600 to-yellow-500" },
//   { id: 5, title: "Buy 4 Select Goodyear Tires", subtitle: "Get Up to $80 Back", brand: "Goodyear", discount: "$80 BACK", expires: "Mar 31, 2026", color: "from-green-600 to-green-500" },
//   { id: 6, title: "Hankook Select Tires", subtitle: "Get up to $100 Prepaid Mastercard", brand: "Hankook", discount: "$100 CARD", expires: "Apr 15, 2026", color: "from-teal-600 to-teal-500" },
//   { id: 7, title: "Kumho Prepaid Mastercard", subtitle: "Get an $80 Prepaid Mastercard", brand: "Kumho", discount: "$80 CARD", expires: "Mar 31, 2026", color: "from-purple-600 to-purple-500" },
//   { id: 8, title: "General Tire Prepaid Mastercard", subtitle: "Get up to $80 Back", brand: "General", discount: "$80 BACK", expires: "Apr 30, 2026", color: "from-orange-600 to-orange-500" },
// ];
const deals = [
  { id: 1, title: "Buy 4 Bridgestone Dueler LX Tires", subtitle: "Save $80 Instantly", brand: "Bridgestone", discount: "$80 OFF", expires: "Mar 31, 2026", color: "from-blue-600 to-blue-500" },
  { id: 2, title: "Buy 4 Select Falken Tires", subtitle: "Save $80 Instantly", brand: "Falken", discount: "$80 OFF", expires: "Mar 31, 2026", color: "from-blue-600 to-blue-500" },
  { id: 3, title: "Buy 4 Select Cooper Tires", subtitle: "Get $70 Back", brand: "Cooper", discount: "$70 REBATE", expires: "Apr 15, 2026", color: "from-blue-600 to-blue-500" },
  { id: 4, title: "Pirelli P7 AS Plus 3", subtitle: "Get a $100 Visa Prepaid Card", brand: "Pirelli", discount: "$100 CARD", expires: "Apr 30, 2026", color: "from-blue-600 to-blue-500" },
  { id: 5, title: "Buy 4 Select Goodyear Tires", subtitle: "Get Up to $80 Back", brand: "Goodyear", discount: "$80 BACK", expires: "Mar 31, 2026", color: "from-blue-600 to-blue-500" },
  { id: 6, title: "Hankook Select Tires", subtitle: "Get up to $100 Prepaid Mastercard", brand: "Hankook", discount: "$100 CARD", expires: "Apr 15, 2026", color: "from-blue-600 to-blue-500" },
  { id: 7, title: "Kumho Prepaid Mastercard", subtitle: "Get an $80 Prepaid Mastercard", brand: "Kumho", discount: "$80 CARD", expires: "Mar 31, 2026", color: "from-blue-600 to-blue-500" },
  { id: 8, title: "General Tire Prepaid Mastercard", subtitle: "Get up to $80 Back", brand: "General", discount: "$80 BACK", expires: "Apr 30, 2026", color: "from-blue-600 to-blue-500" },
];

const DealsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="promo-gradient py-12">
          <div className="container text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Percent className="w-12 h-12 mx-auto mb-4 text-primary-foreground/80" />
              <h1 className="font-heading text-3xl md:text-5xl font-black uppercase text-primary-foreground">
                Tire Deals & Savings
              </h1>
              <p className="text-primary-foreground/80 mt-2 text-lg">
                Save big with instant discounts, rebates, and prepaid card offers.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="container py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {deals.map((deal, i) => (
              <motion.div
                key={deal.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="product-card group overflow-hidden"
              >
                <div className={`bg-gradient-to-br ${deal.color} p-6 text-center`}>
                  <Tag className="w-8 h-8 mx-auto mb-2 text-primary-foreground/80" />
                  <span className="font-heading text-3xl font-black text-primary-foreground">{deal.discount}</span>
                </div>
                <div className="p-5">
                  <span className="text-xs font-semibold text-primary uppercase">{deal.brand}</span>
                  <h3 className="font-heading text-base font-bold text-foreground mt-1 leading-tight">{deal.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{deal.subtitle}</p>
                  <div className="flex items-center gap-1.5 mt-3 text-xs text-muted-foreground">
                    <Clock className="w-3.5 h-3.5" />
                    Expires {deal.expires}
                  </div>
                  <Link
                    to="/tires"
                    className="inline-flex items-center gap-1.5 mt-4 text-primary font-semibold text-sm hover:gap-3 transition-all"
                  >
                    Shop Now <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tire Lottery */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-12 product-card p-8 text-center max-w-2xl mx-auto"
          >
            <span className="badge-new inline-block mb-3">Special Offer</span>
            <h2 className="font-heading text-2xl md:text-3xl font-black text-foreground uppercase">
              Tire Lottery Ticket
            </h2>
            <p className="text-muted-foreground mt-2 max-w-md mx-auto">
              Try your luck! Purchase a $4.99 Tire Lottery Ticket for a chance to win a full set of premium tires.
            </p>
            <div className="mt-4">
              <span className="text-3xl font-black text-primary">$4.99</span>
            </div>
            <button className="btn-hero-primary mt-4 gap-2">
              Buy Lottery Ticket <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
};

export default DealsPage;
