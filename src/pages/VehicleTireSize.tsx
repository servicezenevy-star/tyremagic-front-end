import { useEffect, useMemo, useState } from "react";
import { CheckCircle, HelpCircle } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { fitMent } from "@/config/axiosUtils";

type TrimSpecs = {
  LoadIndex: string | null;
  RunFlat: string | null;
  SpeedRating: string | null;
  Size: string | null;
};

type TrimPositionDetail = {
  trimspecs: TrimSpecs | null;
  wheeldiameteroptions: { wheeldiameter: string[] | null } | null;
  fitmentid: string | null;
};

type TrimPosition = {
  front: TrimPositionDetail;
  rear: TrimPositionDetail;
  both: TrimPositionDetail;
};

type TrimOption = {
  trim: string;
  trimoption: string;
  vehicleid: string;
  staggeredfitment: string;
  position: TrimPosition[];
};

type VehicleQuery = {
  year: string;
  make: string;
  model: string;
  trim: string;
};

const parseVehicleQuery = (search: string): VehicleQuery => {
  const params = new URLSearchParams(search);

  return {
    year: params.get("year")?.trim() ?? "",
    make: params.get("make")?.trim() ?? "",
    model: params.get("model")?.trim() ?? "",
    trim: params.get("trim")?.trim() ?? "",
  };
};

const getSizeLabel = (size?: string | null) =>
  size?.match(/R(\d+)/)?.[1] ?? "--";

const VehicleTireSize = () => {
  const navigate = useNavigate();
  const { search } = useLocation();

  const [trimOptions, setTrimOptions] = useState<TrimOption[]>([]);
  const [selectedFitment, setSelectedFitment] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const query = useMemo(() => parseVehicleQuery(search), [search]);
  const isQueryComplete = Boolean(
    query.year && query.make && query.model && query.trim,
  );

  useEffect(() => {
    if (!isQueryComplete) {
      setTrimOptions([]);
      setSelectedFitment(0);
      setError(
        "Please provide year, make, model, and trim in the URL query string.",
      );
      return;
    }

    let active = true;

    const loadTrimOptions = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fitMent.getTrimOptions(
          query.year,
          query.make,
          query.model,
          query.trim,
        );
        if (!active) return;

        const options = response.trimoptions;

        if (options.length === 0) {
          setError("No trim options found for the selected vehicle.");
        }

        setTrimOptions(options);
        setSelectedFitment(0);
      } catch (fetchError: unknown) {
        if (!active) return;

        const message =
          typeof fetchError === "object" &&
          fetchError !== null &&
          "message" in fetchError
            ? (fetchError as { message?: string }).message
            : "Unable to load trim options.";

        setError(message || "Unable to load trim options.");
        setTrimOptions([]);
      } finally {
        if (active) {
          setIsLoading(false);
        }
      }
    };

    loadTrimOptions();

    return () => {
      active = false;
    };
  }, [isQueryComplete, query.year, query.make, query.model, query.trim]);

  const activeOption = trimOptions[selectedFitment];
  const vehicleTitle =
    [query.year, query.make, query.model, query.trim]
      .filter(Boolean)
      .join(" ") || "Your vehicle";

  const handleViewTires = () => {
    if (!activeOption) return;

    const params = new URLSearchParams({
      year: query.year,
      make: query.make,
      model: query.model,
      trim: query.trim,
      trimoption: activeOption.trimoption,
    });

    if (activeOption.staggeredfitment === "yes") {
      params.append(
        "front",
        activeOption.position[0].front.trimspecs?.Size ?? "",
      );
      params.append(
        "rear",
        activeOption.position[0].rear.trimspecs?.Size ?? "",
      );
    } else {
      params.append(
        "size",
        activeOption.position[0].both.trimspecs?.Size ?? "",
      );
    }

    navigate(`/tires?${params.toString()}`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Vehicle Header */}
        <section className="section-dark py-10 border-b border-border">
          <div className="container">
            <p className="text-sm text-muted-foreground mb-2">
              See all tire sizes for:
            </p>

            <h1 className="font-heading text-3xl md:text-5xl font-black uppercase">
              {vehicleTitle}
            </h1>

            <p className="text-muted-foreground mt-3">
              Select the factory tire size installed on your vehicle.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12">
          <div className="container">
            <h2 className="font-heading text-3xl md:text-4xl font-black uppercase mb-8">
              What Tire Size Is On Your Vehicle?
            </h2>

            {isLoading ? (
              <div className="glass-card p-6 border border-border text-center text-lg font-medium">
                Loading trim options...
              </div>
            ) : error ? (
              <div className="glass-card p-6 border border-border text-center text-lg text-destructive">
                {error}
              </div>
            ) : trimOptions.length === 0 ? (
              <div className="glass-card p-6 border border-border text-center text-lg text-muted-foreground">
                No trim options available for this vehicle.
              </div>
            ) : (
              <div className="space-y-6">
                {trimOptions.map((option, index) => (
                  <div
                    key={option.vehicleid ?? index}
                    className={`glass-card p-6 border transition-all ${
                      selectedFitment === index
                        ? "border-primary shadow-lg"
                        : "border-border"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <input
                        type="radio"
                        checked={selectedFitment === index}
                        onChange={() => setSelectedFitment(index)}
                        className="w-5 h-5"
                      />

                      <div>
                        <h3 className="font-heading text-xl font-bold uppercase">
                          Factory Tire Size Option {index + 1}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {option.trimoption}
                        </p>
                      </div>
                    </div>

                    {option.staggeredfitment === "yes" ? (
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <p className="text-sm text-muted-foreground mb-2">
                            Front Size
                          </p>
                          <h4 className="text-3xl font-black">
                            {getSizeLabel(
                              option.position[0].front.trimspecs?.Size,
                            )}
                            "
                          </h4>
                          <div className="text-primary text-xl font-bold">
                            {option.position[0].front.trimspecs?.Size ?? "N/A"}
                          </div>
                          <div className="mt-3 text-sm">
                            Load Index:{" "}
                            {option.position[0].front.trimspecs?.LoadIndex ??
                              "N/A"}
                          </div>
                          <div className="text-sm">
                            Speed Rating:{" "}
                            {option.position[0].front.trimspecs?.SpeedRating ??
                              "N/A"}
                          </div>
                          <div className="text-sm">
                            Run Flat:{" "}
                            {option.position[0].front.trimspecs?.RunFlat === "1"
                              ? "Yes"
                              : "No"}
                          </div>
                        </div>

                        <div>
                          <p className="text-sm text-muted-foreground mb-2">
                            Rear Size
                          </p>
                          <h4 className="text-3xl font-black">
                            {getSizeLabel(
                              option.position[0].rear.trimspecs?.Size,
                            )}
                            "
                          </h4>
                          <div className="text-primary text-xl font-bold">
                            {option.position[0].rear.trimspecs?.Size ?? "N/A"}
                          </div>
                          <div className="mt-3 text-sm">
                            Load Index:{" "}
                            {option.position[0].rear.trimspecs?.LoadIndex ??
                              "N/A"}
                          </div>
                          <div className="text-sm">
                            Speed Rating:{" "}
                            {option.position[0].rear.trimspecs?.SpeedRating ??
                              "N/A"}
                          </div>
                          <div className="text-sm">
                            Run Flat:{" "}
                            {option.position[0].rear.trimspecs?.RunFlat === "1"
                              ? "Yes"
                              : "No"}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div>
                        <p className="text-sm text-muted-foreground mb-2">
                          All Positions
                        </p>
                        <h4 className="text-3xl font-black">
                          {getSizeLabel(
                            option.position[0].both.trimspecs?.Size,
                          )}
                          "
                        </h4>
                        <div className="text-primary text-xl font-bold">
                          {option.position[0].both.trimspecs?.Size ?? "N/A"}
                        </div>
                        <div className="mt-3 text-sm">
                          Load Index:{" "}
                          {option.position[0].both.trimspecs?.LoadIndex ??
                            "N/A"}
                        </div>
                        <div className="text-sm">
                          Speed Rating:{" "}
                          {option.position[0].both.trimspecs?.SpeedRating ??
                            "N/A"}
                        </div>
                        <div className="text-sm">
                          Run Flat:{" "}
                          {option.position[0].both.trimspecs?.RunFlat === "1"
                            ? "Yes"
                            : "No"}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            <div className="mt-10">
              <button
                disabled={!activeOption}
                onClick={handleViewTires}
                className="btn-hero-primary px-10 py-4 disabled:cursor-not-allowed disabled:opacity-60"
              >
                View Tires
              </button>
            </div>

            <div className="glass-card mt-16 p-8">
              <div className="flex items-center gap-3 mb-4">
                <HelpCircle className="text-primary" />
                <h3 className="font-heading text-2xl font-bold uppercase">
                  Need Help Choosing Tires?
                </h3>
              </div>

              <p className="text-muted-foreground mb-6">
                Our tire experts can help you choose the right tires for your
                vehicle.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-primary w-5 h-5" />
                  Tread Wear Warranty
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle className="text-primary w-5 h-5" />
                  Fast Shipping (3–5 Business Days)
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle className="text-primary w-5 h-5" />
                  Expert Tire Support
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle className="text-primary w-5 h-5" />
                  Atlanta Mobile Installation Available
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
};

export default VehicleTireSize;
