import { Book, Calculator, Download, Smartphone } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Book,
      title: "Expert Articles",
      text: "In-depth explainers and checklists generated with AI and reviewed for clarity."
    },
    {
      icon: Calculator,
      title: "Practical Tools",
      text: "Embodied carbon, cost, and space calculators tailored for Philippine contexts."
    },
    {
      icon: Download,
      title: "Free Resources",
      text: "Templates, SOPs, and permit-ready forms to speed up your workflow."
    }
  ];

  return (
    <section className="py-section bg-surface">
      <div className="max-w-site mx-auto px-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Phone Mockups */}
          <div className="lg:order-1 flex justify-center">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4 max-w-sm">
                <div className="bg-primary/10 rounded-2xl p-6 shadow-soft">
                  <Smartphone className="text-primary mb-4" size={32} />
                  <div className="h-2 bg-primary/20 rounded mb-2"></div>
                  <div className="h-2 bg-primary/20 rounded w-3/4"></div>
                </div>
                <div className="bg-primary/10 rounded-2xl p-6 shadow-soft mt-8">
                  <Calculator className="text-primary mb-4" size={32} />
                  <div className="h-2 bg-primary/20 rounded mb-2"></div>
                  <div className="h-2 bg-primary/20 rounded w-1/2"></div>
                </div>
                <div className="bg-primary/10 rounded-2xl p-6 shadow-soft -mt-8 col-span-2">
                  <Book className="text-primary mb-4" size={32} />
                  <div className="h-2 bg-primary/20 rounded mb-2"></div>
                  <div className="h-2 bg-primary/20 rounded mb-2"></div>
                  <div className="h-2 bg-primary/20 rounded w-2/3"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Text Content */}
          <div className="lg:order-2">
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-12">
              Design first
            </h2>
            
            <div className="space-y-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
                      <IconComponent className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-xl text-foreground mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;