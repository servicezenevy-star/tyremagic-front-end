import { Search, Truck, Wrench } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: Search,
    number: "1",
    title: "Find What's Right for You",
    description: "An unmatched selection, helpful shopping tools and unbiased reviews. All from the comfort of your home.",
  },
  {
    icon: Truck,
    number: "2",
    title: "Get Fast, Free Shipping",
    description: "Directly to you or your installer. Usually delivered by the next business day.",
  },
  {
    icon: Wrench,
    number: "3",
    title: "Choose an Installer",
    description: "Qualified, independent installers are ready to help, including mobile installers in many areas.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-alt py-16 md:py-24">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-3xl md:text-5xl font-black text-center text-foreground uppercase mb-14"
        >
          How It Works
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center group"
            >
              <div className="relative mb-6">
                <div className="w-24 h-24 rounded-full border-4 border-primary/20 flex items-center justify-center group-hover:border-primary transition-colors duration-300 bg-background shadow-lg">
                  <span className="font-heading text-4xl font-black text-primary">{step.number}</span>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-[calc(50%+2rem)] w-[calc(100%)] h-0.5 bg-border -z-10" />
                )}
              </div>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <step.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground uppercase mb-3">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
