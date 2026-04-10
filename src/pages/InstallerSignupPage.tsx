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

  const scrollToForm = () => {
    const section = document.getElementById("installer-form");

    if (section) {
      const yOffset = -80; // adjust if header height different
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });

      // trigger glow animation
      setTimeout(() => {
        setHighlightForm(true);

        // remove highlight after 2 sec
        setTimeout(() => setHighlightForm(false), 2000);
      }, 500);
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
              Become a <span className="text-primary">Mobile Tire Installer</span>
            </h1>
            <p className="text-primary-foreground/70 mt-4 text-lg">
              Join Tire Magician and grow your business with high-quality leads, flexible work, and fast payouts.
            </p>

            <button onClick={scrollToForm} className="btn-hero-primary mt-6">
              Apply Now
            </button>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="py-14">
          <div className="container grid md:grid-cols-3 gap-6">
            {[
              {
                icon: DollarSign,
                title: "Earn More",
                desc: "Get consistent, high-paying installation jobs in your area.",
              },
              {
                icon: Truck,
                title: "Flexible Work",
                desc: "Work when you want. Accept jobs that fit your schedule.",
              },
              {
                icon: Wrench,
                title: "Grow Your Business",
                desc: "Access new customers without spending on ads.",
              },
            ].map((item, i) => (
              <div key={i} className="product-card p-6 text-center">
                <item.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-heading text-lg font-bold uppercase text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-2">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="section-alt py-14">
          <div className="container text-center max-w-5xl">
            <h2 className="font-heading text-3xl font-black uppercase mb-10">
              How It <span className="text-primary">Works</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                "Apply & Get Approved",
                "Receive Job Requests",
                "Install & Get Paid",
              ].map((step, i) => (
                <div key={i} className="product-card p-6">
                  <div className="text-primary text-2xl font-black mb-2">
                    {i + 1}
                  </div>
                  <p className="font-semibold text-foreground">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FORM */}
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
                Apply to Join Our Network
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">

                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    className="form-select"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />

                  <input
                    type="text"
                    placeholder="Business Name"
                    className="form-select"
                    value={formData.business}
                    onChange={(e) => setFormData({...formData, business: e.target.value})}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="email"
                    required
                    placeholder="Email"
                    className="form-select"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />

                  <input
                    type="tel"
                    required
                    placeholder="Phone Number"
                    className="form-select"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>

                <input
                  type="text"
                  placeholder="City / Service Area"
                  className="form-select"
                  value={formData.city}
                  onChange={(e) => setFormData({...formData, city: e.target.value})}
                />

                <select
                  className="form-select"
                  required
                  value={formData.experience}
                  onChange={(e) => setFormData({...formData, experience: e.target.value})}
                >
                  <option value="">Years of Experience</option>
                  <option value="1">0-1 Years</option>
                  <option value="3">1-3 Years</option>
                  <option value="5">3-5 Years</option>
                  <option value="10">5+ Years</option>
                </select>

                <button type="submit" className="btn-hero-primary w-full flex items-center justify-center gap-2">
                  <Send className="w-4 h-4" />
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* TRUST SECTION */}
        <section className="section-dark py-14 text-center">
          <div className="container grid md:grid-cols-3 gap-6">
            {[
              "500+ Installers",
              "10K+ Jobs Completed",
              "Fast Weekly Payments",
            ].map((item, i) => (
              <div key={i} className="text-primary font-bold text-lg">
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