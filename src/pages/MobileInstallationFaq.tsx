import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const MobileInstallationFaq = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <main className="flex-1 py-16">
        <div className="container max-w-4xl">

          <h1 className="font-heading text-4xl font-black uppercase mb-6">
            Atlanta Mobile Tire Installation
          </h1>

          <p className="text-muted-foreground leading-relaxed mb-6">
            Tire Magician currently offers mobile tire installation
            services in the Atlanta area.
          </p>

          <h2 className="text-2xl font-bold mb-4">
            How Mobile Installation Works
          </h2>

          <p className="text-muted-foreground leading-relaxed mb-6">
            Our installers come directly to your location for tire installation.
          </p>

        </div>
      </main>

      <SiteFooter />
    </div>
  );
};

export default MobileInstallationFaq;