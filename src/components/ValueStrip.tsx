import { Smartphone } from "lucide-react";

const ValueStrip = () => {
  return (
    <section className="py-section bg-gradient-blurred relative overflow-hidden">
      {/* Background blur effect */}
      <div className="absolute inset-0 backdrop-blur-sm" />
      
      <div className="relative z-10 max-w-site mx-auto px-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-white mb-6">
              Simplifying the way we{" "}
              <span className="text-white/90">build green</span>
            </h2>
            <p className="text-xl text-white/90 leading-relaxed">
              From zoning to details, our AI condenses what matters so you can move faster with confidence.
            </p>
          </div>
          
          {/* Phone in Hand Mockup */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-64 h-80 bg-white/20 backdrop-blur-sm rounded-3xl p-6 shadow-soft border border-white/20">
                <div className="bg-white/90 rounded-2xl h-full p-4 flex flex-col">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                      <Smartphone size={16} className="text-white" />
                    </div>
                    <span className="font-semibold text-foreground">EcoBuild AI</span>
                  </div>
                  
                  <div className="space-y-3 flex-1">
                    <div className="h-20 bg-primary/10 rounded-xl"></div>
                    <div className="h-16 bg-primary/10 rounded-xl"></div>
                    <div className="h-16 bg-primary/10 rounded-xl"></div>
                  </div>
                  
                  <div className="mt-4 h-12 bg-primary rounded-xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueStrip;