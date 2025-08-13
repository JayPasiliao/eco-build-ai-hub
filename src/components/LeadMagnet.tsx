import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const LeadMagnet = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    // Simulate form submission
    setIsSubmitted(true);
    toast({
      title: "Success!",
      description: "Thanks. Check your inbox in a minute.",
    });
    setEmail("");
  };

  return (
    <section id="leadmagnet" className="py-section bg-surface">
      <div className="max-w-site mx-auto px-container">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-6">
            Free Starter Kit
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            A 12-page guide with a site checklist, materials quick-picks, and a basic embodied-carbon worksheet.
          </p>
          
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 h-12 rounded-2xl border-border"
              />
              <Button 
                type="submit" 
                variant="default" 
                size="lg" 
                className="h-12 px-8"
              >
                Send me the guide
              </Button>
            </form>
          ) : (
            <div className="max-w-md mx-auto p-6 bg-primary/10 rounded-2xl border border-primary/20">
              <p className="text-lg font-medium text-primary">
                Thanks. Check your inbox in a minute.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default LeadMagnet;