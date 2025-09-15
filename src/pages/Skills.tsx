import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, PlayCircle, CheckCircle, Clock, Award } from "lucide-react";

const skillsData = [
  {
    id: 1,
    title: "Tailoring & Stitching",
    modules: [
      { name: "Basic Stitching", progress: 100, completed: true },
      { name: "Pattern Making", progress: 65, completed: false },
      { name: "Advanced Techniques", progress: 0, completed: false },
    ]
  },
  {
    id: 2,
    title: "Organic Farming Techniques", 
    modules: [
      { name: "Soil Preparation", progress: 85, completed: false },
      { name: "Crop Rotation", progress: 30, completed: false },
      { name: "Pest Management", progress: 0, completed: false },
    ]
  }
];

const Skills = () => {
  const navigate = useNavigate();
  const [selectedSkill, setSelectedSkill] = useState(skillsData[0]);

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
            Your Learning
            <span className="block bg-gradient-success bg-clip-text text-transparent">
              Journey
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Track your progress and continue building skills that empower your future
          </p>
        </div>

        <Tabs defaultValue="my-skills" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 bg-gradient-card backdrop-blur-sm border-0">
            <TabsTrigger value="my-skills" className="data-[state=active]:bg-gradient-primary data-[state=active]:text-white">
              My Skills
            </TabsTrigger>
            <TabsTrigger value="available" className="data-[state=active]:bg-gradient-primary data-[state=active]:text-white">
              Available Skills
            </TabsTrigger>
            <TabsTrigger value="achievements" className="data-[state=active]:bg-gradient-primary data-[state=active]:text-white">
              Achievements
            </TabsTrigger>
          </TabsList>

          <TabsContent value="my-skills" className="mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Skills Navigation */}
              <div className="lg:col-span-1">
                <Card className="bg-gradient-card backdrop-blur-sm border-0 shadow-elegant">
                  <CardHeader>
                    <CardTitle>Your Skills</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {skillsData.map((skill) => (
                      <Button
                        key={skill.id}
                        variant={selectedSkill.id === skill.id ? "empowerment" : "ghost"}
                        className="w-full justify-start text-left"
                        onClick={() => setSelectedSkill(skill)}
                      >
                        {skill.title}
                      </Button>
                    ))}
                  </CardContent>
                </Card>
              </div>

              {/* Skill Details */}
              <div className="lg:col-span-2">
                <Card className="bg-gradient-card backdrop-blur-sm border-0 shadow-elegant">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-2xl">{selectedSkill.title}</CardTitle>
                      <Badge variant="secondary" className="bg-gradient-success text-white">
                        In Progress
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {selectedSkill.modules.map((module, index) => (
                      <div key={index} className="p-4 rounded-xl bg-white/5 backdrop-blur-sm">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-3">
                            {module.completed ? (
                              <CheckCircle className="h-5 w-5 text-green-400" />
                            ) : module.progress > 0 ? (
                              <Clock className="h-5 w-5 text-blue-400" />
                            ) : (
                              <PlayCircle className="h-5 w-5 text-muted-foreground" />
                            )}
                            <h3 className="font-medium">{module.name}</h3>
                          </div>
                          <span className="text-sm text-muted-foreground">
                            {module.progress}%
                          </span>
                        </div>
                        <Progress value={module.progress} className="mb-3" />
                        <Button
                          size="sm"
                          variant={module.progress > 0 ? "empowerment" : "outline"}
                          className="w-full"
                        >
                          {module.completed ? "Review" : module.progress > 0 ? "Continue" : "Start"}
                        </Button>
                      </div>
                    ))}
                    
                    <div className="mt-8 p-4 rounded-xl bg-gradient-primary/10 backdrop-blur-sm">
                      <div className="flex items-center gap-2 mb-2">
                        <Award className="h-5 w-5 text-primary" />
                        <h3 className="font-medium">Achievement Unlocked!</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Complete 3 modules to earn your certification badge
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="available" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "Handicrafts & Embroidery", progress: 0, modules: 4 },
                { name: "Food Processing & Packaging", progress: 0, modules: 5 },
                { name: "Mobile & Digital Literacy", progress: 0, modules: 3 },
                { name: "Business Development", progress: 0, modules: 6 },
                { name: "Financial Literacy", progress: 0, modules: 4 },
                { name: "Marketing & Sales", progress: 0, modules: 5 }
              ].map((skill, index) => (
                <Card key={index} className="bg-gradient-card backdrop-blur-sm border-0 shadow-elegant hover:shadow-floating transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg">{skill.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      {skill.modules} modules available
                    </p>
                    <Button variant="empowerment" className="w-full">
                      Start Learning
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="achievements" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-gradient-card backdrop-blur-sm border-0 shadow-elegant">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-success rounded-full flex items-center justify-center">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle>First Steps</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground mb-4">
                    Complete your first learning module
                  </p>
                  <Badge className="bg-gradient-success text-white">Unlocked</Badge>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card backdrop-blur-sm border-0 shadow-elegant opacity-60">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-secondary rounded-full flex items-center justify-center">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle>Skill Builder</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground mb-4">
                    Complete 3 learning modules
                  </p>
                  <Badge variant="outline">Locked</Badge>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card backdrop-blur-sm border-0 shadow-elegant opacity-60">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle>Expert</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground mb-4">
                    Master 2 complete skills
                  </p>
                  <Badge variant="outline">Locked</Badge>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Skills;