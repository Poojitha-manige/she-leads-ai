import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Skills Navigation */}
          <div className="lg:col-span-1">
            <Card className="bg-gradient-card backdrop-blur-sm border-0 shadow-elegant">
              <CardHeader>
                <CardTitle>Available Skills</CardTitle>
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
      </div>
    </div>
  );
};

export default Skills;