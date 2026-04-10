import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import TiresPage from "./pages/TiresPage.tsx";
import WheelsPage from "./pages/WheelsPage.tsx";
import DealsPage from "./pages/DealsPage.tsx";
import ShippingPage from "./pages/ShippingPage.tsx";
import ContactPage from "./pages/ContactPage.tsx";
import CartPage from "./pages/CartPage.tsx";
import NotFound from "./pages/NotFound.tsx";
import InstallerSignupPage from "./pages/InstallerSignupPage.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/tires" element={<TiresPage />} />
          <Route path="/wheels" element={<WheelsPage />} />
          <Route path="/deals" element={<DealsPage />} />
          <Route path="/shipping" element={<ShippingPage />} />
          <Route path="/partner" element={<InstallerSignupPage/>} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
