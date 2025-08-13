import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-section bg-background">
      <div className="max-w-site mx-auto px-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-6">
              Every tool tested, honestly reviewed
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              We test hundreds of AI tools, compare features, pricing, and real-world performance, then distill everything into clear recommendations.
            </p>
            <Button variant="outline" size="lg" asChild className="border-border text-foreground hover:bg-primary hover:text-white">
              <a href="#reviews">Browse reviews</a>
            </Button>
          </div>
          
          {/* Device Mockup */}
          <div className="flex justify-center">
            <div className="relative">
              <img 
                src="/assets/phone-mockup.png" 
                alt="ToolPilot AI mobile app interface"
                className="max-w-sm w-full transform rotate-6 hover:rotate-3 transition-smooth shadow-card"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;