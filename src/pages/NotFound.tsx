import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowRight } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1 flex items-center justify-center py-20">
        <div className="text-center">
          <span className="font-heading text-8xl md:text-9xl font-black text-primary/20">404</span>
          <h1 className="font-heading text-3xl md:text-4xl font-black text-foreground uppercase -mt-4">Page Not Found</h1>
          <p className="text-muted-foreground mt-3 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link to="/" className="btn-hero-primary mt-6 inline-flex gap-2">
            Back to Home <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
};

export default NotFound;
