import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { Link } from "react-router-dom";

const TireInstallationFaq = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <main className="flex-1 py-16">
        <div className="container max-w-4xl">

          <h1 className="font-heading text-4xl font-black uppercase mb-6">
            Tire Installation Guide
          </h1>

          <p className="text-muted-foreground leading-relaxed mb-6">
            Tire installation services are available through local installers
            and mobile installation in select markets.
          </p>

          <h2 className="text-2xl font-bold mb-4">
            Do You Offer Mobile Installation?
          </h2>

          <p className="text-muted-foreground leading-relaxed mb-6">
            Mobile tire installation is currently available in Atlanta only.
          </p>

          <div className="glass-card p-6 mt-10">
            <h3 className="font-bold text-lg mb-4">
              Related Articles
            </h3>

            <div className="flex flex-col gap-2">
              <Link to="/faq/mobile-installation-atlanta" className="text-primary hover:underline">
                Atlanta Mobile Installation
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

export default TireInstallationFaq;