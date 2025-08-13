import { Button } from "@/components/ui/button";
import { Twitter, Share2 } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] bg-gradient-hero flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(/assets/hero-bg.jpg)` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/10" />
      
      <div className="relative z-10 max-w-site mx-auto px-container py-20">
        <div className="max-w-2xl">
          {/* Main Heading */}
          <h1 className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6">
            Honest reviews for{" "}
            <span className="text-white/90">AI tools & automation</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Unbiased insights, detailed comparisons, and practical guides to help you choose the right AI tools for your workflow.
          </p>
          
          {/* Primary CTA */}
          <div className="mb-8">
            <Button variant="solid-white" size="lg" asChild className="text-lg px-8 py-4 h-auto">
              <a href="#newsletter">Start exploring</a>
            </Button>
          </div>
          
          {/* Social Meta */}
          <div className="flex items-center gap-6 text-white/80">
            <a 
              href="#" 
              className="flex items-center gap-2 hover:text-white transition-smooth"
            >
              <Twitter size={20} />
              <span className="font-medium">Follow @ToolPilotAI</span>
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