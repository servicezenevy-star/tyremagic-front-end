import { useState } from "react";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

const widths = ["155", "165", "175", "185", "195", "205", "215", "225", "235", "245", "255", "265", "275", "285", "295", "305", "315"];
const profiles = ["25", "30", "35", "40", "45", "50", "55", "60", "65", "70", "75", "80"];
const wheelSizes = ["13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "24", "26"];
const seasons = ["All Season", "Summer", "Winter", "All Weather", "All Terrain"];
const makes = ["Acura", "Audi", "BMW", "Chevrolet", "Dodge", "Ford", "GMC", "Honda", "Hyundai", "Jeep", "Kia", "Lexus", "Mazda", "Mercedes-Benz", "Nissan", "Ram", "Subaru", "Tesla", "Toyota", "Volkswagen"];

const TireSearchSection = () => {
  const [searchType, setSearchType] = useState<"size" | "vehicle">("size");
  const navigate = useNavigate();

  const tabs = [
    { id: "size" as const, label: "Shop by Tire Size" },
    { id: "vehicle" as const, label: "Shop by Vehicle" },
  ];

  const handleSearch = () => {
    navigate("/tires");
  };

  return (
    <section id="tire-search" className="py-16 md:py-24">
      <div className="container max-w-4xl">
        <h2 className="font-heading text-3xl md:text-5xl font-black text-center text-foreground uppercase mb-3">
          Find Your Perfect Tires
        </h2>
        <p className="text-center text-muted-foreground mb-10 max-w-xl mx-auto">
          Search by tire size or vehicle to discover the best tires for your drive.
        </p>

        <div className="glass-card p-6 md:p-8 shadow-xl">
          {/* Tabs */}
          <div className="flex border-b border-border mb-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSearchType(tab.id)}
                className={`px-5 py-3 font-semibold text-sm transition-all border-b-3 -mb-px ${
                  searchType === tab.id
                    ? "border-b-[3px] border-primary text-primary"
                    : "border-b-[3px] border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {searchType === "size" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="block text-xs font-bold text-foreground mb-1.5 uppercase tracking-wide">Width *</label>
                <select className="form-select">
                  <option value="">- Select -</option>
                  {widths.map((w) => <option key={w} value={w}>{w}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-foreground mb-1.5 uppercase tracking-wide">Profile *</label>
                <select className="form-select">
                  <option value="">- Select -</option>
                  {profiles.map((p) => <option key={p} value={p}>{p}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-foreground mb-1.5 uppercase tracking-wide">Wheel Size *</label>
                <select className="form-select">
                  <option value="">- Select -</option>
                  {wheelSizes.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-foreground mb-1.5 uppercase tracking-wide">Season</label>
                <select className="form-select">
                  {seasons.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
            </div>
          )}

          {searchType === "vehicle" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="block text-xs font-bold text-foreground mb-1.5 uppercase tracking-wide">Year *</label>
                <select className="form-select">
                  <option value="">- Select -</option>
                  {Array.from({ length: 30 }, (_, i) => 2026 - i).map((y) => (
                    <option key={y} value={y}>{y}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-foreground mb-1.5 uppercase tracking-wide">Make *</label>
                <select className="form-select">
                  <option value="">- Select -</option>
                  {makes.map((m) => <option key={m} value={m}>{m}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-foreground mb-1.5 uppercase tracking-wide">Model *</label>
                <select className="form-select">
                  <option value="">- Select Make first -</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-foreground mb-1.5 uppercase tracking-wide">Trim</label>
                <select className="form-select">
                  <option value="">- Optional -</option>
                </select>
              </div>
            </div>
          )}

          <button onClick={handleSearch} className="btn-hero-primary w-full mt-6 gap-2 text-base py-4">
            <Search className="w-5 h-5" />
            Find Your Tires Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default TireSearchSection;
