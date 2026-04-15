import { useState } from "react";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

const widths = ["155","165","175","185","195","205","215","225","235","245","255","265","275","285","295","305","315"];
const profiles = ["25","30","35","40","45","50","55","60","65","70","75","80"];
const wheelSizes = ["13","14","15","16","17","18","19","20","21","22","24","26"];
const seasons = ["All Season","Summer","Winter","All Weather","All Terrain"];
const brands = ["Michelin","Bridgestone","Goodyear","Continental","Pirelli"];

const TireSearchSection = () => {
  const [searchType, setSearchType] = useState<"size" | "vehicle">("size");
  const navigate = useNavigate();

  // 🔥 FULL FILTER STATE
  const [filters, setFilters] = useState({
    width: "",
    profile: "",
    wheel: "",
    season: "",
    brand: "",
    year: "",
    make: "",
    model: "",
    trim: "",
  });

  const tabs = [
    { id: "size" as const, label: "Shop by Tire Size" },
    { id: "vehicle" as const, label: "Shop by Vehicle" },
  ];

  // 🔥 BUILD SIZE STRING
  const sizePreview =
    filters.width && filters.profile && filters.wheel
      ? `${filters.width}/${filters.profile}R${filters.wheel}`
      : "";

  const handleSearch = () => {
    if (searchType === "size") {
      if (!sizePreview) {
        alert("Please select complete tire size");
        return;
      }

      navigate(
        `/tires?size=${sizePreview}${
          filters.brand ? `&brand=${filters.brand}` : ""
        }${filters.season ? `&season=${filters.season}` : ""}`
      );
    } else {
      navigate("/tires");
    }
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container max-w-4xl">
        <h2 className="font-heading text-3xl md:text-5xl font-black text-center uppercase mb-3">
          Find Your Perfect Tires
        </h2>

        <div className="glass-card p-6 md:p-8 shadow-xl">

          {/* Tabs */}
          <div className="flex border-b mb-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSearchType(tab.id)}
                className={`px-5 py-3 font-semibold text-sm ${
                  searchType === tab.id
                    ? "border-b-2 border-primary text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* SIZE SEARCH */}
          {searchType === "size" && (
            <>
              <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">

                <select className="form-select"
                  value={filters.width}
                  onChange={(e)=>setFilters({...filters,width:e.target.value})}>
                  <option value="">Width</option>
                  {widths.map((w)=> <option key={w}>{w}</option>)}
                </select>

                <select className="form-select"
                  value={filters.profile}
                  onChange={(e)=>setFilters({...filters,profile:e.target.value})}>
                  <option value="">Profile</option>
                  {profiles.map((p)=> <option key={p}>{p}</option>)}
                </select>

                <select className="form-select"
                  value={filters.wheel}
                  onChange={(e)=>setFilters({...filters,wheel:e.target.value})}>
                  <option value="">Wheel</option>
                  {wheelSizes.map((s)=> <option key={s}>{s}</option>)}
                </select>

                <select className="form-select"
                  value={filters.brand}
                  onChange={(e)=>setFilters({...filters,brand:e.target.value})}>
                  <option value="">Brand</option>
                  {brands.map((b)=> <option key={b}>{b}</option>)}
                </select>

                <select className="form-select"
                  value={filters.season}
                  onChange={(e)=>setFilters({...filters,season:e.target.value})}>
                  <option value="">Season</option>
                  {seasons.map((s)=> <option key={s}>{s}</option>)}
                </select>
              </div>

              {/* 🔥 SIZE PREVIEW */}
              {sizePreview && (
                <div className="mt-4 text-center">
                  <span className="text-sm text-muted-foreground">
                    Selected Size:
                  </span>
                  <div className="text-xl font-bold text-primary">
                    {sizePreview}
                  </div>
                </div>
              )}
            </>
          )}

          {/* VEHICLE SEARCH */}
          {searchType === "vehicle" && (
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">

              <select className="form-select"
                value={filters.year}
                onChange={(e)=>setFilters({...filters,year:e.target.value})}>
                <option value="">Year</option>
                {Array.from({ length: 30 }, (_, i) => 2026 - i).map((y) => (
                  <option key={y}>{y}</option>
                ))}
              </select>

              <select className="form-select"
                value={filters.make}
                onChange={(e)=>setFilters({...filters,make:e.target.value})}>
                <option value="">Make</option>
                <option>Honda</option>
                <option>Toyota</option>
                <option>Ford</option>
              </select>

              <select className="form-select"
                value={filters.model}
                onChange={(e)=>setFilters({...filters,model:e.target.value})}>
                <option value="">Model</option>
              </select>

              <select className="form-select"
                value={filters.trim}
                onChange={(e)=>setFilters({...filters,trim:e.target.value})}>
                <option value="">Trim</option>
              </select>
            </div>
          )}

          <button
            onClick={handleSearch}
            className="btn-hero-primary w-full mt-6 gap-2 text-base py-4"
          >
            <Search className="w-5 h-5" />
            Find Your Tires Now
          </button>

        </div>
      </div>
    </section>
  );
};

export default TireSearchSection;