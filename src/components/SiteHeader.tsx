import { Search, Phone, ShoppingCart, User, Menu, X, ChevronDown, MapPin, Truck } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/Tire Magician.JPG.jpeg";

const navLinks = [
  {
    label: "Shop Products",
    href: "/tires",
    children: [
      { label: "All Season Tires", href: "/tires" },
      { label: "Summer Tires", href: "/tires" },
      { label: "Winter Tires", href: "/tires" },
      { label: "All Terrain Tires", href: "/tires" },
      { label: "Performance Tires", href: "/tires" },
    ],
  },
  { label: "Wheels", href: "/wheels" },
  { label: "Delivery & Installation", href: "/shipping" },
  { label: "Deals", href: "/deals" },
  { label: "Contact Us", href: "/contact" },
];

const PromoBanner = () => (
  <div className="promo-strip text-center py-2 px-4 text-xs sm:text-sm font-semibold tracking-wide">
    🔥 Fast Shipping on All Orders &mdash; Shop Now & Save!
  </div>
);

const TopBar = () => (
  <div className="topbar text-xs py-2">
    <div className="container flex items-center justify-between">
      <div className="flex items-center gap-4">
        <span className="flex items-center gap-1.5">
          <Truck className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Fast, Free Shipping</span>
        </span>
        <span className="hidden md:flex items-center gap-1.5">
          <MapPin className="w-3.5 h-3.5" />
          Find an Installer
        </span>
      </div>
      <div className="flex items-center gap-4">
        <Link to="/contact" className="flex items-center gap-1.5 hover:text-primary transition-colors">
          <Phone className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Customer Support</span>
        </Link>
        <span className="hidden sm:inline opacity-40">|</span>
        <Link to="/shipping" className="hover:text-primary transition-colors hidden sm:inline">
          Order Tracking
        </Link>
      </div>
    </div>
  </div>
);

const SiteHeader = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50">
      {/* <PromoBanner /> */}
      <TopBar />
      <nav className="bg-background border-b border-border shadow-sm">
        <div className="container flex items-center justify-between py-3">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-20  rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-heading font-black ">
                <img src={logo} alt="icon" className="w-100" />
                 </span>
            </div>
            <span className="font-heading text-xl sm:text-4xl font-black tracking-tight uppercase">
              <span className="text-primary">Tire</span>{" "}
              <span className="text-foreground">Magician</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <li
                key={link.label}
                className="relative"
                onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={link.href}
                  className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    location.pathname === link.href
                      ? "text-primary bg-primary/5"
                      : "text-foreground hover:text-primary hover:bg-primary/5"
                  }`}
                >
                  {link.label}
                  {link.children && <ChevronDown className="w-3.5 h-3.5" />}
                </Link>
                {link.children && activeDropdown === link.label && (
                  <div className="absolute top-full left-0 mt-0 w-56 bg-background border border-border rounded-lg shadow-xl py-2 animate-fade-in z-50">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.href}
                        className="block px-4 py-2 text-sm text-foreground hover:text-primary hover:bg-primary/5 transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <Link to="/tires" className="p-2 rounded-lg text-foreground hover:text-primary hover:bg-primary/5 transition-colors">
              <Search className="w-5 h-5" />
            </Link>
            <button className="p-2 rounded-lg text-foreground hover:text-primary hover:bg-primary/5 transition-colors hidden sm:block">
              <User className="w-5 h-5" />
            </button>
            <Link to="/cart" className="relative p-2 rounded-lg text-foreground hover:text-primary hover:bg-primary/5 transition-colors">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-0.5 -right-0.5 bg-primary text-primary-foreground text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                0
              </span>
            </Link>
            <button
              className="lg:hidden p-2 rounded-lg text-foreground hover:bg-accent transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-border bg-background pb-4 animate-fade-in">
            <ul className="container flex flex-col gap-1 pt-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="block px-3 py-2.5 text-sm font-medium text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <ul className="pl-6">
                      {link.children.map((child) => (
                        <li key={child.label}>
                          <Link
                            to={child.href}
                            className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                            onClick={() => setMobileOpen(false)}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default SiteHeader;
