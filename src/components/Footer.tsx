import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Phone, MapPin, Twitter, Linkedin, Github } from "lucide-react";

const Footer = () => {
  const footerLinks = [
    {
      title: "Platform",
      links: [
        { label: "Simulations", href: "#simulations" },
        { label: "Data Analytics", href: "#data" },
        { label: "Education Hub", href: "#education" },
        { label: "API Access", href: "#api" },
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Documentation", href: "#docs" },
        { label: "Tutorials", href: "#tutorials" },
        { label: "Case Studies", href: "#cases" },
        { label: "Research Papers", href: "#research" },
      ]
    },
    {
      title: "Support",
      links: [
        { label: "Help Center", href: "#help" },
        { label: "Community Forum", href: "#forum" },
        { label: "Contact Us", href: "#contact" },
        { label: "System Status", href: "#status" },
      ]
    }
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Company Info & Newsletter */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-heading font-bold text-secondary mb-4">
                RutoSim
              </h2>
              <p className="text-background/80 text-lg max-w-md">
                Empowering global development through innovative simulations, data-driven insights, and collaborative solutions for a sustainable future.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-secondary" />
                <span className="text-background/80">contact@rutosim.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-secondary" />
                <span className="text-background/80">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-secondary" />
                <span className="text-background/80">Global Headquarters, Kenya</span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-background/5 rounded-xl p-6">
              <h3 className="text-xl font-heading font-semibold mb-3">
                Stay Updated
              </h3>
              <p className="text-background/70 mb-4">
                Get the latest insights on global development and platform updates.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Input 
                  placeholder="Enter your email"
                  className="bg-background/10 border-background/20 text-background placeholder:text-background/50"
                />
                <Button variant="secondary" className="whitespace-nowrap">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h3 className="text-lg font-heading font-semibold mb-4 text-secondary">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a 
                        href={link.href}
                        className="text-background/70 hover:text-background transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-background/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-background/60 text-sm">
              © 2024 RutoSim Global Development Platform. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <a href="#" className="text-background/60 hover:text-secondary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/60 hover:text-secondary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/60 hover:text-secondary transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-4 text-sm">
              <a href="#privacy" className="text-background/60 hover:text-background transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-background/60 hover:text-background transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;