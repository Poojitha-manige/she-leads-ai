import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Star, Trophy, Target, Book, Users } from "lucide-react";

export const ProgressDashboard = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
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
            <Card className="lg:col-span-2 shadow-soft border-0">
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
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card className="shadow-soft border-0">
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
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="text-center shadow-soft border-0 bg-gradient-primary text-white">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold mb-2">15</div>
                <div className="text-sm opacity-90">Lessons Completed</div>
              </CardContent>
            </Card>
            
            <Card className="text-center shadow-soft border-0 bg-gradient-success text-white">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold mb-2">₹2,340</div>
                <div className="text-sm opacity-90">Total Earnings</div>
              </CardContent>
            </Card>
            
            <Card className="text-center shadow-soft border-0 bg-card">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold mb-2 text-accent">7</div>
                <div className="text-sm text-muted-foreground">Day Streak</div>
              </CardContent>
            </Card>
            
            <Card className="text-center shadow-soft border-0 bg-card">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold mb-2 text-primary">3</div>
                <div className="text-sm text-muted-foreground">Active Projects</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};