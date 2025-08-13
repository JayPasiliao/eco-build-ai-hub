"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/components/use-toast";

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
      description: "Welcome! You're subscribed to our weekly insights.",
    });
    setEmail("");
  };

  return (
    <section id="newsletter" className="py-section bg-surface">
      <div className="max-w-site mx-auto px-container">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-6">
            Weekly AI Tool Insights
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Get our weekly roundup of new AI tools, detailed reviews, and exclusive deals delivered to your inbox.
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
                Subscribe now
              </Button>
            </form>
          ) : (
            <div className="max-w-md mx-auto p-6 bg-primary/10 rounded-2xl border border-primary/20">
              <p className="text-lg font-medium text-primary">
                Welcome! You're subscribed to our weekly insights.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default LeadMagnet;