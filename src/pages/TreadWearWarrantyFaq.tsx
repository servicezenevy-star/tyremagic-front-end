import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { Link } from "react-router-dom";

const TreadWearWarrantyFaq = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <main className="flex-1 py-16">
        <div className="container max-w-4xl">

          <h1 className="font-heading text-4xl font-black uppercase mb-6">
            Tread Wear Warranty
          </h1>

          <p className="text-muted-foreground leading-relaxed mb-6">
            Most tire manufacturers offer tread wear warranty coverage
            based on mileage performance under normal driving conditions.
          </p>

          <h2 className="text-2xl font-bold mb-4">
            What Is Tread Wear Warranty?
          </h2>

          <p className="text-muted-foreground leading-relaxed mb-6">
            A tread wear warranty protects against premature tread wear.
            Coverage depends on the tire brand and model.
          </p>

          <div className="glass-card p-6 mt-10">
            <h3 className="font-bold text-lg mb-4">
              Related Articles
            </h3>

            <div className="flex flex-col gap-2">
              <Link to="/faq/online-tire-orders" className="text-primary hover:underline">
                Buying Tires Online
              </Link>

              <Link to="/faq/shipping-delivery" className="text-primary hover:underline">
                Shipping & Delivery
              </Link>
            </div>
          </div>

        </div>
      </main>

      <SiteFooter />
    </div>
  );
};

export default TreadWearWarrantyFaq;