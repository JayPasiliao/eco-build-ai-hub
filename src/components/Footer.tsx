import { Button } from "@/components/ui/button";

const Footer = () => {
  const footerColumns = [
    {
      title: "EcoBuild AI",
      links: [
        { label: "About", href: "#" },
        { label: "Contact", href: "#contact" }
      ]
    },
    {
      title: "Explore",
      links: [
        { label: "Articles", href: "#articles" },
        { label: "Resources", href: "#resources" },
        { label: "Tools", href: "#tools" }
      ]
    },
    {
      title: "Legal",
      links: [
        { label: "Terms", href: "#" },
        { label: "Privacy", href: "#" }
      ]
    }
  ];

  return (
    <footer className="py-16 bg-background border-t border-border">
      <div className="max-w-site mx-auto px-container">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <div className="font-heading font-bold text-xl text-foreground mb-4">
              EcoBuild AI
            </div>
            <p className="text-muted-foreground">
              AI-powered insights for sustainable housing. Making green building accessible to everyone.
            </p>
          </div>
          
          {/* Footer Columns */}
          {footerColumns.map((column, index) => (
            <div key={index}>
              <h4 className="font-heading font-semibold text-foreground mb-4">
                {column.title}
              </h4>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a 
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-smooth"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* App Store Badges */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-border gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 EcoBuild AI. All rights reserved.
          </p>
          
          <div className="flex gap-4">
            <Button variant="outline" size="sm" className="h-10">
              App Store
            </Button>
            <Button variant="outline" size="sm" className="h-10">
              Google Play
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;