import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const HowToBuyTiresFaq = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <main className="flex-1 py-16">
        <div className="container max-w-4xl">

          <h1 className="font-heading text-4xl font-black uppercase mb-6">
            How to Buy Tires Online
          </h1>

          <p className="text-muted-foreground leading-relaxed mb-6">
            Use our online tire search tool to compare sizes,
            tire brands, pricing, and availability.
          </p>

          <h2 className="text-2xl font-bold mb-4">
            Find the Correct Tire Size
          </h2>

          <p className="text-muted-foreground leading-relaxed mb-6">
            You can search by vehicle or tire size to find compatible tires.
          </p>

        </div>
      </main>

      <SiteFooter />
    </div>
  );
};

export default HowToBuyTiresFaq;