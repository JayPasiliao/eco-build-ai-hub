import { Button } from "@/components/ui/button";
import { Twitter, Share2 } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] bg-gradient-hero flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/10" />
      
      <div className="relative z-10 max-w-site mx-auto px-container py-20">
        <div className="max-w-2xl">
          {/* Main Heading */}
          <h1 className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6">
            AI-powered insights for{" "}
            <span className="text-white/90">sustainable housing</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Simple guides, practical tools, and evidence-based tips to help you plan greener, more affordable homes.
          </p>
          
          {/* Primary CTA */}
          <div className="mb-8">
            <Button variant="solid-white" size="lg" asChild className="text-lg px-8 py-4 h-auto">
              <a href="#leadmagnet">Get it now</a>
            </Button>
          </div>
          
          {/* Social Meta */}
          <div className="flex items-center gap-6 text-white/80">
            <a 
              href="#" 
              className="flex items-center gap-2 hover:text-white transition-smooth"
            >
              <Twitter size={20} />
              <span className="font-medium">Follow @EcoBuildAI</span>
            </a>
            <a 
              href="#" 
              className="flex items-center gap-2 hover:text-white transition-smooth"
            >
              <Share2 size={20} />
              <span className="font-medium">Share</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;