import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle, Wrench, Truck, DollarSign, Send } from "lucide-react";

const InstallerSignupPage = () => {
  const { toast } = useToast();

  const [highlightForm, setHighlightForm] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    business: "",
    email: "",
    phone: "",
    city: "",
    experience: "",
  });

  // 🔥 SCROLL TO INSTALLER FORM
  const scrollToForm = () => {
    const section = document.getElementById("installer-form");

    if (section) {
      const yOffset = -80;
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });

      setTimeout(() => {
        setHighlightForm(true);
        setTimeout(() => setHighlightForm(false), 2000);
      }, 500);
    }
  };

  // 🔥 SCROLL TO AFFILIATE FORM
  const scrollToAffiliate = () => {
    const section = document.getElementById("affiliate-form");

    if (section) {
      const yOffset = -80;
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    toast({
      title: "Application Submitted 🚀",
      description: "Our team will contact you within 24 hours.",
    });

    setFormData({
      name: "",
      business: "",
      email: "",
      phone: "",
      city: "",
      experience: "",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <main className="flex-1">

        {/* HERO */}
        <section className="section-dark py-16">
          <div className="container text-center max-w-4xl">
            <h1 className="font-heading text-4xl md:text-6xl font-black uppercase text-primary-foreground">
              Become a <span className="text-primary">Partner</span>
            </h1>
            <p className="text-primary-foreground/70 mt-4 text-lg">
              Join as a Mobile Installer or Affiliate Partner and grow with Tire Magician 🚀
            </p>

            <div className="flex gap-4 justify-center mt-6 flex-wrap">
              <button onClick={scrollToForm} className="btn-hero-primary">
                Installer Signup
              </button>
              <button onClick={scrollToAffiliate} className="btn-hero-primary">
                Affiliate Signup
              </button>
            </div>
          </div>
        </section>

        {/* INSTALLER SECTION */}
        <section className="py-14">
          <div className="container grid md:grid-cols-3 gap-6">
            {[
              {
                icon: DollarSign,
                title: "Earn More",
                desc: "Get consistent, high-paying jobs.",
              },
              {
                icon: Truck,
                title: "Flexible Work",
                desc: "Work on your own schedule.",
              },
              {
                icon: Wrench,
                title: "Grow Business",
                desc: "We bring customers to you.",
              },
            ].map((item, i) => (
              <div key={i} className="product-card p-6 text-center">
                <item.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-bold">{item.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* INSTALLER FORM */}
        <section id="installer-form" className="py-16">
          <div className="container max-w-3xl">
            <div
              className={`glass-card p-8 transition-all duration-500 ${
                highlightForm
                  ? "scale-105 ring-2 ring-primary shadow-[0_0_30px_rgba(34,197,94,0.6)]"
                  : ""
              }`}
            >
              <h2 className="font-heading text-2xl font-black uppercase mb-6 text-center">
                Installer Signup
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input placeholder="Full Name" required className="form-select" />
                <input placeholder="Business Name" className="form-select" />
                <input placeholder="Email" required className="form-select" />
                <input placeholder="Phone" required className="form-select" />
                <input placeholder="City" className="form-select" />

                <select className="form-select">
                  <option>Experience</option>
                  <option>0-1 Years</option>
                  <option>1-3 Years</option>
                  <option>3-5 Years</option>
                </select>

                <button className="btn-hero-primary w-full">
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* AFFILIATE SECTION */}
        <section className="section-alt py-16">
          <div className="container text-center max-w-4xl">
            <h2 className="font-heading text-3xl font-black uppercase">
              Affiliate <span className="text-primary">Program</span>
            </h2>

            <p className="mt-4 text-muted-foreground">
              Earn up to <span className="text-primary font-bold">10% commission</span> per sale 💰
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-10">
              {[
                "Earn Commission",
                "No Inventory Needed",
                "Passive Income",
              ].map((item, i) => (
                <div key={i} className="product-card p-6">
                  <p className="font-bold">{item}</p>
                </div>
              ))}
            </div>

            <button
              onClick={scrollToAffiliate}
              className="btn-hero-primary mt-8"
            >
              Join Affiliate Program
            </button>
          </div>
        </section>

        {/* AFFILIATE FORM */}
        <section id="affiliate-form" className="py-16">
          <div className="container max-w-3xl">
            <div className="glass-card p-8">
              <h2 className="font-heading text-2xl font-black uppercase mb-6 text-center">
                Affiliate Signup
              </h2>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  toast({
                    title: "Affiliate Request Sent 🚀",
                    description: "We’ll send your link soon.",
                  });
                }}
                className="space-y-4"
              >
                <input placeholder="Full Name" required className="form-select" />
                <input placeholder="Email" required className="form-select" />
                <input placeholder="Website / Instagram" className="form-select" />

                <select className="form-select">
                  <option>Audience Size</option>
                  <option>0-1K</option>
                  <option>1K-10K</option>
                  <option>10K+</option>
                </select>

                <button className="btn-hero-primary w-full">
                  Request Affiliate Link
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* TRUST */}
        <section className="section-dark py-14 text-center">
          <div className="container grid md:grid-cols-3 gap-6">
            {[
              "500+ Partners",
              "10K+ Orders",
              "Fast Payments",
            ].map((item, i) => (
              <div key={i} className="text-primary font-bold">
                <CheckCircle className="mx-auto mb-2" />
                {item}
              </div>
            ))}
          </div>
        </section>

      </main>

      <SiteFooter />
    </div>
  );
};

export default InstallerSignupPage;