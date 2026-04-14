import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { Phone, Mail, Clock, MapPin, Send, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const faqs = [
  { q: "How long does shipping take?", a: "Most orders arrive within 1-3 business days. We offer free ground shipping on all tire orders." },
  { q: "Do you offer road hazard protection?", a: "Yes! Free two-year Road Hazard Protection is included with most tire purchases." },
  { q: "Can I return tires?", a: "Unused tires can be returned within 30 days of purchase. Contact us for return authorization." },
  { q: "How do I find the right tire size?", a: "Check the sidewall of your current tires or the sticker inside your driver's door jamb. You can also search by vehicle on our site." },
  { q: "Do you ship internationally?", a: "Currently, we ship within the United States and Canada. Contact us for special shipping requests." },
  { q: "How do I track my order?", a: "Visit our Delivery & Installation page and enter your order number or tracking number." },
];

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="section-dark py-10">
          <div className="container">
            <h1 className="font-heading text-3xl md:text-5xl font-black uppercase text-primary-foreground">
              Contact <span className="text-primary">Us</span>
            </h1>
            <p className="text-primary-foreground/60 mt-2">We're here to help. Our team of tire experts is ready to assist you.</p>
          </div>
        </div>

        <div className="container py-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {/* Contact info */}
            <div className="space-y-6">
              <h2 className="font-heading text-2xl font-black text-foreground uppercase">Get in Touch</h2>
              {[
                { icon: Phone, label: "Phone", value: "1-800-TIRE-MAG", sub: "Mon-Fri 8am-8pm, Sat 9am-5pm" },
                { icon: Mail, label: "Email", value: "contact@tiremagician.com", sub: "We respond within 24 hours" },
                { icon: MessageCircle, label: "Live Chat", value: "Available on site", sub: "Mon-Fri 9am-6pm ET" },
                { icon: MapPin, label: "Website", value: "www.tiremagician.com", sub: "Shop 24/7 online" },
              ].map((info) => (
                <div key={info.label} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">{info.label}</span>
                    <p className="text-sm font-bold text-foreground">{info.value}</p>
                    <p className="text-xs text-muted-foreground">{info.sub}</p>
                  </div>
                </div>
              ))}

              {/* <div className="product-card p-5 mt-6">
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <h3 className="font-heading text-base font-bold text-foreground uppercase">Business Hours</h3>
                </div>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between"><span className="text-muted-foreground">Monday - Friday</span><span className="font-medium text-foreground">8:00 AM - 8:00 PM ET</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">Saturday</span><span className="font-medium text-foreground">9:00 AM - 5:00 PM ET</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">Sunday</span><span className="font-medium text-foreground">Closed</span></div>
                </div>
              </div> */}
            </div>

            {/* Contact form */}
            <div className="lg:col-span-2">
              <div className="glass-card p-6 md:p-8 shadow-lg">
                <h2 className="font-heading text-2xl font-black text-foreground uppercase mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-foreground mb-1.5 uppercase tracking-wide">Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="form-select"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-foreground mb-1.5 uppercase tracking-wide">Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="form-select"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-foreground mb-1.5 uppercase tracking-wide">Subject *</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="form-select"
                      required
                    >
                      <option value="">Select a topic</option>
                      <option value="order">Order Inquiry</option>
                      <option value="product">Product Question</option>
                      <option value="shipping">Shipping & Delivery</option>
                      <option value="returns">Returns & Exchanges</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-foreground mb-1.5 uppercase tracking-wide">Message *</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="form-select resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>
                  <button type="submit" className="btn-hero-primary gap-2 w-full sm:w-auto">
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <section className="section-alt py-12">
          <div className="container max-w-3xl">
            <h2 className="font-heading text-2xl md:text-4xl font-black text-foreground uppercase text-center mb-8">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="product-card overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-4 text-left"
                  >
                    <span className="font-semibold text-sm text-foreground">{faq.q}</span>
                    <span className={`text-primary text-xl transition-transform ${expandedFaq === i ? "rotate-45" : ""}`}>+</span>
                  </button>
                  {expandedFaq === i && (
                    <div className="px-4 pb-4 text-sm text-muted-foreground leading-relaxed animate-fade-in">
                      {faq.a}
                    </div>
                  )}
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

export default ContactPage;
