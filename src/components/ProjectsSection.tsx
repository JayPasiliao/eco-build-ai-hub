import { Button } from "@/components/ui/button";
import phoneMockup from "@/assets/phone-mockup.png";

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-section bg-background">
      <div className="max-w-site mx-auto px-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-6">
              All of your research, consolidated
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              We curate technical standards, local policies, and field-tested methods, then use AI to turn them into clear steps you can apply.
            </p>
            <Button variant="outline" size="lg" asChild className="border-border text-foreground hover:bg-primary hover:text-white">
              <a href="#articles">Learn more</a>
            </Button>
          </div>
          
          {/* Device Mockup */}
          <div className="flex justify-center">
            <div className="relative">
              <img 
                src={phoneMockup} 
                alt="EcoBuild AI mobile app interface"
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