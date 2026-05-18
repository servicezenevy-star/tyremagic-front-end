import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { Link } from "react-router-dom";

const ReturnsRefundsFaq = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <main className="flex-1 py-16">
        <div className="container max-w-4xl">

          <h1 className="font-heading text-4xl font-black uppercase mb-6">
            Returns & Refunds
          </h1>

          <p className="text-muted-foreground leading-relaxed mb-6">
            Tire returns and refunds are subject to manufacturer
            and shipping conditions.
          </p>

          <h2 className="text-2xl font-bold mb-4">
            Can I Return Tires?
          </h2>

          <p className="text-muted-foreground leading-relaxed mb-6">
            Unused tires may qualify for returns depending on order status.
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
                Shipping Information
              </Link>
            </div>
          </div>

        </div>
      </main>

      <SiteFooter />
    </div>
  );
};

export default ReturnsRefundsFaq;