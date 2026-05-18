import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { Link } from "react-router-dom";

const ShippingDeliveryFaq = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <main className="flex-1">

        <section className="py-16">
          <div className="container max-w-4xl">

            <h1 className="font-heading text-4xl font-black uppercase mb-6">
              Shipping & Delivery Information
            </h1>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Tire Magician provides fast online tire shipping across the United States.
              Most tire orders are delivered within 3–5 business days.
            </p>

            <h2 className="text-2xl font-bold mb-4">
              How Long Does Shipping Take?
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Most online tire orders ship within 3–5 business days depending on
              product availability and delivery location.
            </p>

            <h2 className="text-2xl font-bold mb-4">
              Can I Track My Tire Order?
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Yes. Once your tires ship, you’ll receive tracking information by email.
            </p>

            {/* RELATED ARTICLES */}
            <div className="glass-card p-6 mt-10">

              <h3 className="font-bold text-lg mb-4">
                Related Articles
              </h3>

              <div className="flex flex-col gap-3">

                <Link
                  to="/faq/online-tire-orders"
                  className="text-primary hover:underline"
                >
                  Buying Tires Online
                </Link>

                <Link
                  to="/faq/tire-installation"
                  className="text-primary hover:underline"
                >
                  Tire Installation Guide
                </Link>

                <Link
                  to="/faq/tread-wear-warranty"
                  className="text-primary hover:underline"
                >
                  Tread Wear Warranty Explained
                </Link>

              </div>
            </div>

          </div>
        </section>

      </main>

      <SiteFooter />
    </div>
  );
};

export default ShippingDeliveryFaq;