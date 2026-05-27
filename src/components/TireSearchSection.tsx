import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "@/components/ui/sonner";
import { fitMent } from "@/config/axiosUtils";

const widths = [
  "155",
  "165",
  "175",
  "185",
  "195",
  "205",
  "215",
  "225",
  "235",
  "245",
  "255",
  "265",
  "275",
  "285",
  "295",
  "305",
  "315",
];
const profiles = [
  "25",
  "30",
  "35",
  "40",
  "45",
  "50",
  "55",
  "60",
  "65",
  "70",
  "75",
  "80",
];
const wheelSizes = [
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "24",
  "26",
];
const seasons = [
  "All Season",
  "Summer",
  "Winter",
  "All Weather",
  "All Terrain",
];
const brands = [
  "Michelin",
  "Bridgestone",
  "Goodyear",
  "Continental",
  "Pirelli",
];

type FiltersState = {
  width: string;
  profile: string;
  wheel: string;
  season: string;
  brand: string;
  year: string;
  make: string;
  model: string;
  trim: string;
};

type FitmentResponseKey = "years" | "makes" | "models" | "trims";

type FitmentResponse =
  | Partial<Record<FitmentResponseKey, unknown>>
  | {
      items?: unknown;
      data?: unknown;
      results?: unknown;
    }
  | unknown[];

const INITIAL_FILTERS: FiltersState = {
  width: "",
  profile: "",
  wheel: "",
  season: "",
  brand: "",
  year: "",
  make: "",
  model: "",
  trim: "",
};

const getSelectPlaceholder = ({
  label,
  isLoading,
  hasParentValue,
  hasOptions,
  emptyLabel,
}: {
  label: string;
  isLoading: boolean;
  hasParentValue: boolean;
  hasOptions: boolean;
  emptyLabel: string;
}) => {
  if (!hasParentValue) {
    return label;
  }

  if (isLoading) {
    return `Loading ${label.toLowerCase()}...`;
  }

  if (!hasOptions) {
    return emptyLabel;
  }

  return label;
};

const normalizeFitmentOptions = (
  payload: FitmentResponse | undefined,
  key: FitmentResponseKey,
) => {
  const candidate = Array.isArray(payload)
    ? payload
    : (payload?.[key] ?? payload?.items ?? payload?.data ?? payload?.results);

  if (!Array.isArray(candidate)) {
    return [];
  }

  return candidate
    .map((item) => {
      if (typeof item === "string") {
        return item.trim();
      }

      if (item && typeof item === "object") {
        const record = item as Record<string, unknown>;
        const value =
          record.name ??
          record.label ??
          record.value ??
          record[key.slice(0, -1)];

        return typeof value === "string" ? value.trim() : "";
      }

      return "";
    })
    .filter(Boolean);
};

const TireSearchSection = () => {
  const [searchType, setSearchType] = useState<"size" | "vehicle">("size");
  const [filters, setFilters] = useState(INITIAL_FILTERS);
  const navigate = useNavigate();

  const yearsQuery = useQuery({
    queryKey: ["fitment", "years"],
    queryFn: fitMent.getYears,
    staleTime: 1000 * 60 * 60 * 12,
    retry: 1,
  });

  const makesQuery = useQuery({
    queryKey: ["fitment", "makes", filters.year],
    queryFn: () => fitMent.getMakes(filters.year),
    enabled: Boolean(filters.year),
    staleTime: 1000 * 60 * 30,
    retry: 1,
  });

  const modelsQuery = useQuery({
    queryKey: ["fitment", "models", filters.year, filters.make],
    queryFn: () => fitMent.getModel(filters.year, filters.make),
    enabled: Boolean(filters.year && filters.make),
    staleTime: 1000 * 60 * 30,
    retry: 1,
  });

  const trimsQuery = useQuery({
    queryKey: ["fitment", "trims", filters.year, filters.make, filters.model],
    queryFn: () => fitMent.getTrim(filters.year, filters.make, filters.model),
    enabled: Boolean(filters.year && filters.make && filters.model),
    staleTime: 1000 * 60 * 30,
    retry: 1,
  });

  useEffect(() => {
    if (yearsQuery.error) {
      toast.error("Unable to load vehicle years right now.");
    }
  }, [yearsQuery.error]);

  useEffect(() => {
    if (makesQuery.error) {
      toast.error("Unable to load makes for the selected year.");
    }
  }, [makesQuery.error]);

  useEffect(() => {
    if (modelsQuery.error) {
      toast.error("Unable to load models for the selected vehicle.");
    }
  }, [modelsQuery.error]);

  useEffect(() => {
    if (trimsQuery.error) {
      toast.error("Unable to load trims for the selected model.");
    }
  }, [trimsQuery.error]);

  const sizePreview =
    filters.width && filters.profile && filters.wheel
      ? `${filters.width}/${filters.profile}R${filters.wheel}`
      : "";

  const years = normalizeFitmentOptions(yearsQuery.data, "years");
  const makes = normalizeFitmentOptions(makesQuery.data, "makes");
  const models = normalizeFitmentOptions(modelsQuery.data, "models");
  const trims = normalizeFitmentOptions(trimsQuery.data, "trims");

  const vehicleNote = (() => {
    if (filters.year && !makesQuery.isLoading && makes.length === 0) {
      return `No makes found for ${filters.year}.`;
    }

    if (
      filters.year &&
      filters.make &&
      !modelsQuery.isLoading &&
      models.length === 0
    ) {
      return `No models found for ${filters.year} ${filters.make}.`;
    }

    if (
      filters.year &&
      filters.make &&
      filters.model &&
      !trimsQuery.isLoading &&
      trims.length === 0
    ) {
      return `No trims found for ${filters.year} ${filters.make} ${filters.model}.`;
    }

    return "";
  })();

  const updateFilters = (next: Partial<FiltersState>) => {
    setFilters((current) => ({ ...current, ...next }));
  };

  const handleSearch = () => {
    if (searchType === "size") {
      if (!sizePreview) {
        toast.error("Please select a complete tire size.");
        return;
      }

      navigate(
        `/tires?size=${sizePreview}${
          filters.brand ? `&brand=${encodeURIComponent(filters.brand)}` : ""
        }${filters.season ? `&season=${encodeURIComponent(filters.season)}` : ""}`,
      );
      return;
    }

    if (!filters.year || !filters.make || !filters.model || !filters.trim) {
      toast.error("Please select year, make, model, and trim.");
      return;
    }

    const vehicleParams = new URLSearchParams({
      year: filters.year,
      make: filters.make,
      model: filters.model,
      trim: filters.trim,
    });

    navigate(`/tires?${vehicleParams.toString()}`);
  };

  const tabs = [
    { id: "size" as const, label: "Shop by Tire Size" },
    { id: "vehicle" as const, label: "Shop by Vehicle" },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container max-w-4xl">
        <h2 className="font-heading text-3xl md:text-5xl font-black text-center uppercase mb-3">
          Find Your Perfect Tires
        </h2>

        <div className="glass-card p-6 md:p-8 shadow-xl">
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

          {searchType === "size" && (
            <>
              <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
                <select
                  className="form-select"
                  value={filters.width}
                  onChange={(e) => updateFilters({ width: e.target.value })}
                >
                  <option value="">Width</option>
                  {widths.map((width) => (
                    <option key={width} value={width}>
                      {width}
                    </option>
                  ))}
                </select>

                <select
                  className="form-select"
                  value={filters.profile}
                  onChange={(e) => updateFilters({ profile: e.target.value })}
                >
                  <option value="">Profile</option>
                  {profiles.map((profile) => (
                    <option key={profile} value={profile}>
                      {profile}
                    </option>
                  ))}
                </select>

                <select
                  className="form-select"
                  value={filters.wheel}
                  onChange={(e) => updateFilters({ wheel: e.target.value })}
                >
                  <option value="">Wheel</option>
                  {wheelSizes.map((wheelSize) => (
                    <option key={wheelSize} value={wheelSize}>
                      {wheelSize}
                    </option>
                  ))}
                </select>

                <select
                  className="form-select"
                  value={filters.brand}
                  onChange={(e) => updateFilters({ brand: e.target.value })}
                >
                  <option value="">Brand</option>
                  {brands.map((brand) => (
                    <option key={brand} value={brand}>
                      {brand}
                    </option>
                  ))}
                </select>

                <select
                  className="form-select"
                  value={filters.season}
                  onChange={(e) => updateFilters({ season: e.target.value })}
                >
                  <option value="">Season</option>
                  {seasons.map((season) => (
                    <option key={season} value={season}>
                      {season}
                    </option>
                  ))}
                </select>
              </div>

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

          {searchType === "vehicle" && (
            <>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <select
                  className="form-select"
                  value={filters.year}
                  disabled={yearsQuery.isLoading || years.length === 0}
                  onChange={(e) =>
                    updateFilters({
                      year: e.target.value,
                      make: "",
                      model: "",
                      trim: "",
                    })
                  }
                >
                  <option value="">
                    {yearsQuery.isLoading
                      ? "Loading years..."
                      : years.length === 0
                        ? "No years available"
                        : "Year"}
                  </option>
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>

                <select
                  className="form-select"
                  value={filters.make}
                  disabled={
                    !filters.year || makesQuery.isLoading || makes.length === 0
                  }
                  onChange={(e) =>
                    updateFilters({
                      make: e.target.value,
                      model: "",
                      trim: "",
                    })
                  }
                >
                  <option value="">
                    {getSelectPlaceholder({
                      label: "Make",
                      isLoading: makesQuery.isLoading,
                      hasParentValue: Boolean(filters.year),
                      hasOptions: makes.length > 0,
                      emptyLabel: "No makes available",
                    })}
                  </option>
                  {makes.map((make) => (
                    <option key={make} value={make}>
                      {make}
                    </option>
                  ))}
                </select>

                <select
                  className="form-select"
                  value={filters.model}
                  disabled={
                    !filters.year ||
                    !filters.make ||
                    modelsQuery.isLoading ||
                    models.length === 0
                  }
                  onChange={(e) =>
                    updateFilters({
                      model: e.target.value,
                      trim: "",
                    })
                  }
                >
                  <option value="">
                    {getSelectPlaceholder({
                      label: "Model",
                      isLoading: modelsQuery.isLoading,
                      hasParentValue: Boolean(filters.year && filters.make),
                      hasOptions: models.length > 0,
                      emptyLabel: "No models available",
                    })}
                  </option>
                  {models.map((model) => (
                    <option key={model} value={model}>
                      {model}
                    </option>
                  ))}
                </select>

                <select
                  className="form-select"
                  value={filters.trim}
                  disabled={
                    !filters.year ||
                    !filters.make ||
                    !filters.model ||
                    trimsQuery.isLoading ||
                    trims.length === 0
                  }
                  onChange={(e) => updateFilters({ trim: e.target.value })}
                >
                  <option value="">
                    {getSelectPlaceholder({
                      label: "Trim",
                      isLoading: trimsQuery.isLoading,
                      hasParentValue: Boolean(
                        filters.year && filters.make && filters.model,
                      ),
                      hasOptions: trims.length > 0,
                      emptyLabel: "No trims available",
                    })}
                  </option>
                  {trims.map((trim) => (
                    <option key={trim} value={trim}>
                      {trim}
                    </option>
                  ))}
                </select>
              </div>

              {vehicleNote && (
                <p className="mt-3 text-sm text-muted-foreground">
                  {vehicleNote}
                </p>
              )}
            </>
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
