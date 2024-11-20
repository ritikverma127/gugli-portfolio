import Navbar from "@/components/home/Navbar";
import Feature from "@/components/home/Features";
import React from "react";
import StatsSection from "@/components/home/stats";
import IntegrationsSection from "@/components/home/Integrations";
import FooterSection from "@/components/home/Footer";
import WallOfLoveSection from "@/components/home/Testinomials";
import ContactSection from "@/components/home/contact";

function page() {
  return (
    <div>
      <Navbar />
      <Feature />
      <StatsSection />
      <IntegrationsSection />
      <WallOfLoveSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}

export default page;
