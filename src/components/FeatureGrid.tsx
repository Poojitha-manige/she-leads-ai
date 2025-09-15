import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Mic, 
  MessageCircle, 
  TrendingUp, 
  DollarSign, 
  Users, 
  Package, 
  Award,
  Wifi
} from "lucide-react";

const features = [
  {
    icon: Mic,
    title: "Voice Learning",
    description: "Hands-free tutorials in local languages for easy understanding and accessibility.",
    color: "primary"
  },
  {
    icon: MessageCircle,
    title: "Smart Chatbot",
    description: "AI-powered guidance that answers questions instantly with friendly support.",
    color: "secondary"
  },
  {
    icon: TrendingUp,
    title: "Skill Tracker",
    description: "Monitor learning progress and unlock new levels as you improve your skills.",
    color: "accent"
  },
  {
    icon: DollarSign,
    title: "Loan Finder",
    description: "Discover suitable micro-loans and financial schemes based on your goals.",
    color: "primary"
  },
  {
    icon: Users,
    title: "Market Connect",
    description: "Connect with local buyers, cooperatives, and online selling platforms.",
    color: "secondary"
  },
  {
    icon: Package,
    title: "Product Helper",
    description: "Generate pricing tips and compelling product descriptions to boost sales.",
    color: "accent"
  },
  {
    icon: Award,
    title: "Badge Rewards",
    description: "Earn achievement badges for completed modules and celebrate your progress.",
    color: "primary"
  },
  {
    icon: Wifi,
    title: "Offline Mode",
    description: "Learn without internet connection and sync progress when reconnected.",
    color: "secondary"
  }
];

export const FeatureGrid = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-gradient-subtle relative overflow-hidden">
      {/* Professional background elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-overlay-section" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Powerful Features for Your Growth
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to transform your traditional skills into a sustainable income stream
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="group hover:shadow-floating transition-all duration-500 hover:-translate-y-2 border-0 shadow-elegant bg-gradient-card backdrop-blur-sm animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader className="text-center pb-4">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mx-auto mb-4 transition-transform duration-300 group-hover:scale-110 ${
                    feature.color === 'primary' ? 'bg-gradient-primary shadow-empowerment' :
                    feature.color === 'secondary' ? 'bg-gradient-success shadow-success' :
                    'bg-gradient-to-br from-accent to-yellow-400 shadow-elegant'
                  }`}>
                    <IconComponent className="h-8 w-8 text-white group-hover:animate-float" />
                  </div>
                  <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-center text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center mt-16">
          <Button 
            variant="outline" 
            size="lg" 
            className="text-lg px-8 py-4 rounded-2xl border-primary/20 hover:bg-primary/5"
            onClick={() => navigate("/features")}
          >
            Explore All Features
          </Button>
        </div>
      </div>
    </section>
  );
};