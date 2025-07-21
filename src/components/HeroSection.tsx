import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-agriculture.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Modern agricultural innovation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 animate-fade-in">
          Empowering Global Development
          <span className="block text-secondary"> through Data, Simulations, and Innovation</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto animate-fade-in">
          Transform economic policies, agricultural innovation, and educational systems with advanced simulation technology that drives sustainable growth worldwide.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
          <Button size="lg" className="group hover-scale">
            Get Started
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20 hover-scale">
            <Play className="mr-2 h-5 w-5" />
            Watch Demo
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 animate-fade-in">
          <div className="text-center">
            <div className="text-3xl font-heading font-bold text-secondary mb-2">50K+</div>
            <div className="text-white/80">Simulations Run</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-heading font-bold text-secondary mb-2">125</div>
            <div className="text-white/80">Countries Served</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-heading font-bold text-secondary mb-2">98%</div>
            <div className="text-white/80">Accuracy Rate</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;