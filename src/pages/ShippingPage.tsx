import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { Truck, MapPin, Clock, Package, CheckCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import deliveryIcon from "@/assets/delivery-icon.png";

const ShippingPage = () => {
  const [trackingNumber, setTrackingNumber] = useState("");

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="section-dark py-10">
          <div className="container">
            <h1 className="font-heading text-3xl md:text-5xl font-black uppercase text-primary-foreground">
              Delivery & <span className="text-primary">Installation</span>
            </h1>
            <p className="text-primary-foreground/60 mt-2">Free shipping, fast delivery, and easy installation options.</p>
          </div>
        </div>

        {/* Order Tracking */}
        <section className="py-12 border-b border-border">
          <div className="container max-w-2xl">
            <h2 className="font-heading text-2xl md:text-3xl font-black text-foreground uppercase text-center mb-6">
              Track Your Order
            </h2>
            <div className="glass-card p-6 shadow-lg">
              <div className="flex gap-3">
                <input
                  type="text"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  placeholder="Enter your order or tracking number"
                  className="form-select flex-1"
                />
                <button className="btn-hero-primary px-6">
                  Track
                </button>
              </div>
              <p className="text-xs text-muted-foreground mt-3 text-center">
                Check your confirmation email for your order number
              </p>
            </div>
          </div>
        </section>

        {/* Shipping info */}
        <section className="py-12">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-heading text-2xl md:text-4xl font-black text-foreground uppercase">
                  Fast, <span className="text-primary">Free Shipping</span>
                </h2>
                <p className="text-muted-foreground mt-3 leading-relaxed">
                  Every order ships free. No minimums, no gimmicks. Your tires will be delivered directly to your door or
                  to your preferred installer — usually within 1-3 business days.
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    { icon: Truck, text: "Free ground shipping on all orders" },
                    { icon: Clock, text: "1-3 business day delivery in most areas" },
                    { icon: MapPin, text: "Ship to home or directly to your installer" },
                    { icon: Package, text: "Fully insured and trackable shipments" },
                  ].map((item) => (
                    <li key={item.text} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-sm text-foreground">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <img src={deliveryIcon} alt="Tire delivery" className="w-full max-w-sm mx-auto" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Installation */}
        <section className="section-alt py-12">
          <div className="container max-w-4xl">
            <h2 className="font-heading text-2xl md:text-4xl font-black text-foreground uppercase text-center mb-10">
              Installation <span className="text-primary">Options</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Ship to Installer", desc: "We'll ship your tires directly to one of our qualified local installers. Schedule at your convenience.", price: "Free Delivery" },
                { title: "Mobile Installation", desc: "A mobile installer comes to you — at home, work, or wherever you are. Available in select areas.", price: "From $25/tire" },
                { title: "Self Installation", desc: "Ship to your home and handle installation yourself or at a shop of your choice.", price: "Free Shipping" },
              ].map((option, i) => (
                <motion.div
                  key={option.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="product-card p-6 text-center"
                >
                  <CheckCircle className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-heading text-lg font-bold text-foreground uppercase mb-2">{option.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{option.desc}</p>
                  <span className="badge-sale">{option.price}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
};

export default ShippingPage;
