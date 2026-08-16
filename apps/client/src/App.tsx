import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthPage from "./pages/auth/Index";
import NotFound from "./pages/not-found/Index";
import HomePage from "./pages/portal/HomePage";
import ProductEvidencePage from "./pages/portal/ProductEvidencePage";
import SafetyPage from "./pages/portal/SafetyPage";
import CounselingPage from "./pages/portal/CounselingPage";
import ProfessionalSupportPage from "./pages/portal/ProfessionalSupportPage";
import DashboardPage from "./pages/portal/DashboardPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product-evidence" element={<ProductEvidencePage />} />
          <Route path="/safety" element={<SafetyPage />} />
          <Route path="/counseling" element={<CounselingPage />} />
          <Route path="/professional-support" element={<ProfessionalSupportPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/auth" element={<AuthPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
