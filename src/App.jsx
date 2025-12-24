import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Lenis from "lenis";
import { HelmetProvider } from 'react-helmet-async';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import MembershipPlans from "./components/MembershipPlans";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import TopBanner from "./components/TopBanner";
import TermsOfService from "./components/TermsOfService";
import PrivacyPolicy from "./components/PrivacyPolicy";
import NotFound from "./components/NotFound";
import PublicRegistration from "./components/PublicRegistration";
import { Toaster } from 'sonner';

function App() {
  const location = useLocation();
  const isGalleryPage = location.pathname === '/gallery';
  const isNotFoundPage = location.pathname === '/404' || !['/', '/plans', '/contact', '/gallery', '/terms', '/privacy', '/register'].includes(location.pathname);
  const isRegistrationPage = location.pathname === '/register';

  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.8,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      mouseMultiplier: 0.8,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <HelmetProvider>
      <Toaster position="top-center" richColors />
      <div className="min-h-screen bg-black text-white font-sans selection:bg-bfc-yellow selection:text-black">
        {/* Global Noise Overlay */}
        <div className="bg-noise-overlay"></div>
        
        {!isGalleryPage && !isNotFoundPage && !isRegistrationPage && <TopBanner />}
        {!isRegistrationPage && <Navbar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plans" element={<MembershipPlans />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/register" element={<PublicRegistration />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {!isGalleryPage && !isNotFoundPage && !isRegistrationPage && <Footer />}
      </div>
    </HelmetProvider>
  );
}

export default App;
