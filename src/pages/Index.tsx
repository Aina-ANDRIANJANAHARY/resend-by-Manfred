import Header from "@/components/sections/Header";
import HeroSection from "@/components/sections/HeroSection";
import ClientLogos from "@/components/sections/ClientLogos";
import SdkSection from "@/components/sections/SdkSection";
import DevExperienceSection from "@/components/sections/DevExperienceSection";
import TestModeSection from "@/components/sections/TestModeSection";
import WebhooksSection from "@/components/sections/WebhooksSection";
import EditorSection from "@/components/sections/EditorSection";
import AudienceSection from "@/components/sections/AudienceSection";
import ReactEmailSection from "@/components/sections/ReactEmailSection";
import DeliverabilitySection from "@/components/sections/DeliverabilitySection";
import HighlightTestimonialSection from "@/components/sections/HighlightTestimonialSection";
import ControlPanelSection from "@/components/sections/ControlPanelSection";
import Testimonials from "@/components/sections/Testimonials";
import FinalCtaSection from "@/components/sections/FinalCtaSection";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ClientLogos />
        <SdkSection />
        <DevExperienceSection />
        <TestModeSection />
        <WebhooksSection />
        <EditorSection />
        <AudienceSection />
        <ReactEmailSection />
        <DeliverabilitySection />
        <HighlightTestimonialSection />
        <ControlPanelSection />
        <Testimonials />
        <FinalCtaSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
