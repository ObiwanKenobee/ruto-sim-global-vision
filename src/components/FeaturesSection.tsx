import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart3, Sprout, GraduationCap, ArrowRight, TrendingUp, Users, Globe } from "lucide-react";

const FeaturesSection = () => {
  const mainFeatures = [
    {
      icon: BarChart3,
      title: "Economic Policy Simulations",
      description: "Model and predict the effects of economic policies with advanced analytics. Test government spending, taxation, and trade policies before implementation.",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Sprout,
      title: "Agriculture Innovation",
      description: "Demonstrate the impact of sustainable farming and technology on crop yields, climate resilience, and food security across different regions.",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      icon: GraduationCap,
      title: "Educational Empowerment",
      description: "Understand how education investments shape the future. Analyze curriculum changes, technology adoption, and their economic impact.",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
  ];

  const additionalFeatures = [
    {
      icon: TrendingUp,
      title: "Real-time Analytics",
      description: "Get instant insights with interactive dashboards and real-time data visualization."
    },
    {
      icon: Users,
      title: "Collaborative Platform",
      description: "Work with global partners and experts to create comprehensive development strategies."
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Scale solutions worldwide with data from 125+ countries and regions."
    },
  ];

  return (
    <section id="simulations" className="py-24 bg-feature-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
            Transforming Development Through Innovation
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive platform combines advanced simulations, real-world data, and expert insights to drive sustainable economic transformation globally.
          </p>
        </div>

        {/* Main Features */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {mainFeatures.map((feature, index) => (
            <Card key={index} className="group hover-scale cursor-pointer shadow-elegant hover:shadow-glow transition-all duration-300">
              <CardContent className="p-8">
                <div className={`w-16 h-16 rounded-xl ${feature.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon className={`h-8 w-8 ${feature.color}`} />
                </div>
                
                <h3 className="text-2xl font-heading font-semibold text-foreground mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {feature.description}
                </p>

                <Button variant="ghost" className="group/btn p-0 h-auto hover:bg-transparent">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {additionalFeatures.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h4 className="text-lg font-heading font-semibold text-foreground mb-2">
                {feature.title}
              </h4>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;