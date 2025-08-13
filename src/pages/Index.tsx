import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import Features from "@/components/Features";
import ValueStrip from "@/components/ValueStrip";
import LeadMagnet from "@/components/LeadMagnet";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ProjectsSection />
        <Features />
        <ValueStrip />
        <LeadMagnet />
      </main>
      <Footer />
    </div>
  );
};

export default Index;