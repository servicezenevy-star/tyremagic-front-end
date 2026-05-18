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
import FaqPage from "./pages/FaqPage.tsx";
import OnlineTireOrdersFaq from "./pages/OnlineTireOrdersFaq.tsx";
import ShippingDeliveryFaq from "./pages/ShippingDeliveryFaq.tsx";
import TreadWearWarrantyFaq from "./pages/TreadWearWarrantyFaq.tsx";
import TireInstallationFaq from "./pages/TireInstallationFaq.tsx";
import ReturnsRefundsFaq from "./pages/ReturnsRefundsFaq.tsx";
import MobileInstallationFaq from "./pages/MobileInstallationFaq.tsx";
import HowToBuyTiresFaq from "./pages/HowToBuyTiresFaq.tsx";

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
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/faq-shipping-delivery" element={<ShippingDeliveryFaq />} />
          <Route path="/faq-tread-wear-warranty" element={<TreadWearWarrantyFaq />} />
          <Route path="/faq-online-tire-orders" element={<OnlineTireOrdersFaq />} />
          <Route path="/faq-tire-installation" element={<TireInstallationFaq />} />
          <Route path="/faq-returns-refunds" element={<ReturnsRefundsFaq />} />
          <Route path="/faq-mobile-installation-atlanta" element={<MobileInstallationFaq />} />
          <Route path="/faq-how-to-buy-tires-online" element={<HowToBuyTiresFaq />} />
         
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
