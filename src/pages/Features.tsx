import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Mic, Brain, TrendingUp, DollarSign, Users, ShoppingBag, Award, Wifi } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const allFeatures = [
  {
    icon: Mic,
    title: "Voice Learning",
    description: "Hands-free tutorials in local languages with voice commands and audio guidance",
    status: "active",
    color: "text-blue-400"
  },
  {
    icon: Brain,
    title: "Smart Chatbot",
    description: "AI-powered assistant that answers questions and provides personalized guidance",
    status: "active", 
    color: "text-purple-400"
  },
  {
    icon: TrendingUp,
    title: "Skill Tracker",
    description: "Monitor learning progress, unlock achievements, and track skill development",
    status: "active",
    color: "text-green-400"
  },
  {
    icon: DollarSign,
    title: "Loan Finder",
    description: "Discover micro-loans and financial schemes tailored to your goals and location",
    status: "beta",
    color: "text-yellow-400"
  },
  {
    icon: Users,
    title: "Market Connect",
    description: "Connect with local buyers, cooperatives, and online selling platforms",
    status: "coming-soon",
    color: "text-pink-400"
  },
  {
    icon: ShoppingBag,
    title: "Product Helper",
    description: "Generate pricing tips, product descriptions, and marketing content",
    status: "beta",
    color: "text-indigo-400"
  },
  {
    icon: Award,
    title: "Badge Rewards",
    description: "Earn achievement badges and certificates for completed learning modules",
    status: "active",
    color: "text-orange-400"
  },
  {
    icon: Wifi,
    title: "Offline Mode",
    description: "Learn without internet connection and sync progress when reconnected",
    status: "coming-soon",
    color: "text-cyan-400"
  }
];

const Features = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleFeatureAction = (feature: any) => {
    if (feature.status === "active") {
      if (feature.title === "Voice Learning") {
        navigate("/voice-mode");
      } else if (feature.title === "Skill Tracker") {
        navigate("/skills");
      } else {
        toast({
          title: `${feature.title} Activated`,
          description: `Welcome to ${feature.title}! This feature is now active.`,
        });
      }
    } else if (feature.status === "beta") {
      toast({
        title: `Joined ${feature.title} Beta`,
        description: `You've been added to the beta testing program for ${feature.title}.`,
      });
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-500/20 text-green-400 border-green-400/20">Active</Badge>;
      case "beta":
        return <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-400/20">Beta</Badge>;
      case "coming-soon":
        return <Badge className="bg-gray-500/20 text-gray-400 border-gray-400/20">Coming Soon</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-professional">
      <div className="absolute inset-0 bg-overlay-section" />
      
      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="flex items-center gap-4 mb-8">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate("/")}
            className="hover:bg-white/10"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Platform
            <span className="block bg-gradient-success bg-clip-text text-transparent">
              Features
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover all the powerful tools designed to support your learning journey and business growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {allFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-floating transition-all duration-500 hover:-translate-y-3 border-0 shadow-elegant bg-gradient-card backdrop-blur-sm animate-fade-in h-full"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110`}>
                      <IconComponent className={`h-8 w-8 ${feature.color}`} />
                    </div>
                    {getStatusBadge(feature.status)}
                  </div>
                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {feature.description}
                  </p>
                  <Button 
                    variant={feature.status === "active" ? "empowerment" : "outline"} 
                    className="w-full rounded-xl font-semibold transition-all duration-300"
                    disabled={feature.status === "coming-soon"}
                    onClick={() => handleFeatureAction(feature)}
                  >
                    {feature.status === "active" ? "Try Now" : 
                     feature.status === "beta" ? "Join Beta" : "Coming Soon"}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Feature Categories */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card className="bg-gradient-card backdrop-blur-sm border-0 shadow-elegant text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl mx-auto mb-4 flex items-center justify-center">
                <Mic className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-bold mb-2">Learning Tools</h3>
              <p className="text-sm text-muted-foreground">Voice learning, progress tracking, and smart guidance</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card backdrop-blur-sm border-0 shadow-elegant text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-gradient-success rounded-xl mx-auto mb-4 flex items-center justify-center">
                <DollarSign className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-bold mb-2">Financial Support</h3>
              <p className="text-sm text-muted-foreground">Micro-loans, funding opportunities, and business advice</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card backdrop-blur-sm border-0 shadow-elegant text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-gradient-secondary rounded-xl mx-auto mb-4 flex items-center justify-center">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-bold mb-2">Market Access</h3>
              <p className="text-sm text-muted-foreground">Connect with buyers, cooperatives, and online platforms</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Features;