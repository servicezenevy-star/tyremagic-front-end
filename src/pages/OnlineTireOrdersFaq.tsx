import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { Link } from "react-router-dom";

const OnlineTireOrdersFaq = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <main className="flex-1 py-16">
        <div className="container max-w-4xl">

          <h1 className="font-heading text-4xl font-black uppercase mb-6">
            Buying Tires Online
          </h1>

          <p className="text-muted-foreground leading-relaxed mb-6">
            Buying tires online is fast, secure, and convenient with Tire Magician.
          </p>

          <h2 className="text-2xl font-bold mb-4">
            How Do I Buy Tires Online?
          </h2>

          <p className="text-muted-foreground leading-relaxed mb-6">
            Search by tire size or vehicle, compare brands,
            and place your order online.
          </p>

          <h2 className="text-2xl font-bold mb-4">
            Is Buying Tires Online Safe?
          </h2>

          <p className="text-muted-foreground leading-relaxed mb-6">
            Yes. Tire Magician uses secure checkout and trusted tire suppliers.
          </p>

          <div className="glass-card p-6 mt-10">
            <h3 className="font-bold text-lg mb-4">
              Related Articles
            </h3>

            <div className="flex flex-col gap-2">
              <Link to="/faq/tire-installation" className="text-primary hover:underline">
                Tire Installation
              </Link>

              <Link to="/faq/tread-wear-warranty" className="text-primary hover:underline">
                Tread Wear Warranty
              </Link>
            </div>
          </div>

        </div>
      </main>

      <SiteFooter />
    </div>
  );
};

export default OnlineTireOrdersFaq;