import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { Link } from "react-router-dom";
import { Search, ChevronRight } from "lucide-react";

const faqCategories = [
  {
    title: "Shipping & Delivery",
    description:
      "Learn about shipping times, order tracking, and online tire delivery.",
    link: "/faq/shipping-delivery",
  },
  {
    title: "Tread Wear Warranty",
    description:
      "Understand manufacturer tread wear warranty coverage for your tires.",
    link: "/faq/tread-wear-warranty",
  },
  {
    title: "Online Tire Orders",
    description:
      "Everything about buying tires online from a trusted tire retailer.",
    link: "/faq/online-tire-orders",
  },
  {
    title: "Tire Installation",
    description:
      "Learn about tire installation and Atlanta mobile installation service.",
    link: "/faq/tire-installation",
  },
  {
    title: "Returns & Refunds",
    description:
      "Read our tire return, cancellation, and refund policies.",
    link: "/faq/returns-refunds",
  },
];

const FaqPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <main className="flex-1">

        {/* HERO */}
        <section className="section-dark py-16">
          <div className="container text-center max-w-4xl">

            <h1 className="font-heading text-4xl md:text-6xl font-black uppercase">
              Tire Buying <span className="text-primary">FAQ</span>
            </h1>

            <p className="text-muted-foreground mt-4 text-lg">
              Learn everything about buying tires online, shipping,
              installation, warranties, and tire deals.
            </p>

            {/* SEARCH */}
            <div className="glass-card mt-8 p-3 flex items-center gap-3 max-w-2xl mx-auto">
              <Search className="w-5 h-5 text-muted-foreground" />

              <input
                type="text"
                placeholder="Search FAQ articles..."
                className="bg-transparent outline-none w-full"
              />
            </div>
          </div>
        </section>

        {/* FAQ GRID */}
        <section className="py-16">
          <div className="container">

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

              {faqCategories.map((item, i) => (
                <Link
                  key={i}
                  to={item.link}
                  className="glass-card p-6 hover:border-primary transition-all group"
                >
                  <h2 className="font-bold text-xl mb-3 group-hover:text-primary transition-colors">
                    {item.title}
                  </h2>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>

                  <div className="flex items-center gap-2 mt-5 text-primary text-sm font-semibold">
                    Read Article
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </Link>
              ))}

            </div>
          </div>
        </section>

        {/* POPULAR QUESTIONS */}
        <section className="section-alt py-16">
          <div className="container max-w-4xl">

            <h2 className="font-heading text-3xl font-black uppercase mb-8 text-center">
              Popular Questions
            </h2>

            <div className="space-y-4">

              {[
                "How long does tire shipping take?",
                "What is tread wear warranty?",
                "Can I buy tires online safely?",
                "Do you offer mobile tire installation?",
              ].map((q, i) => (
                <div key={i} className="glass-card p-5">
                  <p className="font-semibold">{q}</p>
                </div>
              ))}

            </div>
          </div>
        </section>

      </main>

      <SiteFooter />
    </div>
  );
};

export default FaqPage;