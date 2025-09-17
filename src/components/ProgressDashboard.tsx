import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Trophy, Target, Book, Users, ChevronRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const ProgressDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [activeSkill, setActiveSkill] = useState("Tailoring & Stitching");
  
  const skillsProgress = {
    "Tailoring & Stitching": 78,
    "Organic Farming": 45,
    "Handicrafts": 92,
  };

  const handleStatClick = (statType: string) => {
    switch (statType) {
      case "lessons":
        navigate("/skills");
        toast({
          title: "Lessons Overview",
          description: "View all your completed lessons in the Skills section.",
        });
        break;
      case "earnings":
        toast({
          title: "Earnings Tracker",
          description: "₹2,340 earned from your handmade products! Keep up the great work!",
        });
        break;
      case "streak":
        toast({
          title: "Learning Streak",
          description: "7 days in a row! Consistency is key to mastering new skills.",
        });
        break;
      case "projects":
        toast({
          title: "Active Projects",
          description: "You have 3 projects in progress. Focus on completing them one by one.",
        });
        break;
      default:
        break;
    }
  };

  return (
    <section className="py-24 bg-gradient-subtle relative overflow-hidden">
      {/* Professional background pattern */}
      <div className="absolute inset-0 bg-overlay-section" />
      <div className="absolute top-10 left-1/4 w-72 h-72 bg-primary/3 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-secondary/3 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Track Your Journey to
            <span className="block bg-gradient-success bg-clip-text text-transparent">
              Financial Independence
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Monitor your progress, celebrate achievements, and see how far you've come
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Main Progress Card */}
            <Card className="lg:col-span-2 shadow-floating border-0 bg-gradient-card backdrop-blur-sm animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Book className="h-6 w-6 text-primary" />
                  Current Learning Path: Tailoring Skills
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">Overall Progress</span>
                    <span className="text-sm text-muted-foreground">68% Complete</span>
                  </div>
                  <Progress value={68} className="h-3 bg-muted" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Basic Stitching</span>
                      <Badge variant="secondary" className="bg-achievement-gold text-white">Complete</Badge>
                    </div>
                    <Progress value={100} className="h-2" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Pattern Making</span>
                      <Badge variant="outline">In Progress</Badge>
                    </div>
                    <Progress value={45} className="h-2" />
                  </div>
                </div>
                
                <div className="mt-6 flex gap-4">
                  <Button 
                    variant="empowerment" 
                    size="sm"
                    onClick={() => navigate("/skills")}
                  >
                    Continue Learning
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => navigate("/voice-mode")}
                  >
                    Try Voice Mode
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card className="shadow-floating border-0 bg-gradient-card backdrop-blur-sm animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-accent" />
                  Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-achievement-gold/10">
                    <Star className="h-8 w-8 text-achievement-gold" />
                    <div>
                      <p className="font-medium">First Sale!</p>
                      <p className="text-sm text-muted-foreground">Earned ₹500</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-achievement-silver/10">
                    <Target className="h-8 w-8 text-achievement-silver" />
                    <div>
                      <p className="font-medium">Skill Builder</p>
                      <p className="text-sm text-muted-foreground">5 modules completed</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-primary/10">
                    <Users className="h-8 w-8 text-primary" />
                    <div>
                      <p className="font-medium">Community Member</p>
                      <p className="text-sm text-muted-foreground">Joined local group</p>
                  </div>
                </div>
                
                <div className="mt-6">
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => navigate("/skills")}
                  >
                    View All Achievements
                  </Button>
                </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card 
              className="text-center shadow-floating border-0 bg-gradient-primary text-white hover:-translate-y-1 transition-all duration-300 animate-scale-in cursor-pointer"
              onClick={() => handleStatClick("lessons")}
            >
              <CardContent className="pt-6">
                <div className="text-3xl font-bold mb-2 animate-float">15</div>
                <div className="text-sm opacity-90">Lessons Completed</div>
              </CardContent>
            </Card>
            
            <Card 
              className="text-center shadow-floating border-0 bg-gradient-success text-white hover:-translate-y-1 transition-all duration-300 animate-scale-in cursor-pointer" 
              style={{ animationDelay: '0.1s' }}
              onClick={() => handleStatClick("earnings")}
            >
              <CardContent className="pt-6">
                <div className="text-3xl font-bold mb-2 animate-float" style={{ animationDelay: '0.3s' }}>₹2,340</div>
                <div className="text-sm opacity-90">Total Earnings</div>
              </CardContent>
            </Card>
            
            <Card 
              className="text-center shadow-floating border-0 bg-gradient-card hover:-translate-y-1 transition-all duration-300 animate-scale-in cursor-pointer" 
              style={{ animationDelay: '0.2s' }}
              onClick={() => handleStatClick("streak")}
            >
              <CardContent className="pt-6">
                <div className="text-3xl font-bold mb-2 text-accent animate-float" style={{ animationDelay: '0.6s' }}>7</div>
                <div className="text-sm text-muted-foreground">Day Streak</div>
              </CardContent>
            </Card>
            
            <Card 
              className="text-center shadow-floating border-0 bg-gradient-card hover:-translate-y-1 transition-all duration-300 animate-scale-in cursor-pointer" 
              style={{ animationDelay: '0.3s' }}
              onClick={() => handleStatClick("projects")}
            >
              <CardContent className="pt-6">
                <div className="text-3xl font-bold mb-2 text-primary animate-float" style={{ animationDelay: '0.9s' }}>3</div>
                <div className="text-sm text-muted-foreground">Active Projects</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};