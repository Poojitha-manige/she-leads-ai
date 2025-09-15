import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Users, Award, PlayCircle } from "lucide-react";

interface SkillModalProps {
  isOpen: boolean;
  onClose: () => void;
  skill: {
    title: string;
    description: string;
    duration: string;
    level: string;
    icon: React.ComponentType<any>;
  } | null;
}

const skillDetails = {
  "Tailoring & Stitching": {
    modules: ["Basic Stitching", "Pattern Making", "Advanced Techniques", "Garment Construction"],
    outcomes: ["Create custom clothing", "Start tailoring business", "Master traditional techniques"],
    tools: ["Sewing machine", "Thread", "Needles", "Fabric scissors", "Measuring tape"]
  },
  "Organic Farming Techniques": {
    modules: ["Soil Preparation", "Crop Rotation", "Pest Management", "Harvesting"],
    outcomes: ["Grow organic crops", "Improve soil health", "Sustainable farming practices"],
    tools: ["Seeds", "Organic fertilizer", "Farming tools", "pH testing kit"]
  },
  "Handicrafts & Embroidery": {
    modules: ["Basic Embroidery", "Pattern Design", "Color Theory", "Finishing Techniques"],
    outcomes: ["Create beautiful handicrafts", "Sell handmade items", "Preserve cultural arts"],
    tools: ["Embroidery thread", "Needles", "Fabric", "Hoops", "Design patterns"]
  },
  "Food Processing & Packaging": {
    modules: ["Food Safety", "Processing Methods", "Packaging Techniques", "Quality Control"],
    outcomes: ["Start food business", "Preserve food safely", "Create value-added products"],
    tools: ["Processing equipment", "Packaging materials", "Storage containers"]
  },
  "Mobile & Digital Literacy": {
    modules: ["Basic Phone Usage", "Digital Payments", "Online Selling", "Social Media"],
    outcomes: ["Use smartphone confidently", "Make digital payments", "Sell products online"],
    tools: ["Smartphone", "Internet connection", "Banking app", "E-commerce apps"]
  }
};

export const SkillModal = ({ isOpen, onClose, skill }: SkillModalProps) => {
  if (!skill) return null;

  const details = skillDetails[skill.title as keyof typeof skillDetails];
  const IconComponent = skill.icon;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-card backdrop-blur-sm border-0 shadow-floating">
        <DialogHeader>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center">
              <IconComponent className="h-8 w-8 text-white" />
            </div>
            <div>
              <DialogTitle className="text-2xl font-bold">{skill.title}</DialogTitle>
              <div className="flex gap-2 mt-2">
                <Badge className="bg-gradient-success text-white">{skill.duration}</Badge>
                <Badge variant="secondary">{skill.level}</Badge>
              </div>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          <p className="text-muted-foreground leading-relaxed">{skill.description}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Learning Modules */}
            <Card className="bg-white/5 backdrop-blur-sm border-0">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <PlayCircle className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">Learning Modules</h3>
                </div>
                <ul className="space-y-3">
                  {details.modules.map((module, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-gradient-primary text-white text-xs flex items-center justify-center font-medium">
                        {index + 1}
                      </div>
                      <span className="text-sm">{module}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Learning Outcomes */}
            <Card className="bg-white/5 backdrop-blur-sm border-0">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Award className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">What You'll Achieve</h3>
                </div>
                <ul className="space-y-3">
                  {details.outcomes.map((outcome, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-gradient-success mt-2" />
                      <span className="text-sm">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Tools & Materials */}
          <Card className="bg-white/5 backdrop-blur-sm border-0">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="h-5 w-5 text-primary" />
                <h3 className="font-semibold">Tools & Materials Needed</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {details.tools.map((tool, index) => (
                  <Badge key={index} variant="outline" className="bg-white/5">
                    {tool}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Course Stats */}
          <div className="grid grid-cols-3 gap-4">
            <Card className="bg-gradient-primary/10 backdrop-blur-sm border-0 text-center">
              <CardContent className="p-4">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Clock className="h-4 w-4 text-primary" />
                  <span className="font-semibold text-sm">Duration</span>
                </div>
                <p className="text-lg font-bold">{skill.duration}</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-success/10 backdrop-blur-sm border-0 text-center">
              <CardContent className="p-4">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Users className="h-4 w-4 text-primary" />
                  <span className="font-semibold text-sm">Learners</span>
                </div>
                <p className="text-lg font-bold">2,500+</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-secondary/10 backdrop-blur-sm border-0 text-center">
              <CardContent className="p-4">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Award className="h-4 w-4 text-primary" />
                  <span className="font-semibold text-sm">Success Rate</span>
                </div>
                <p className="text-lg font-bold">94%</p>
              </CardContent>
            </Card>
          </div>

          <div className="flex gap-4 pt-4">
            <Button variant="empowerment" className="flex-1" onClick={onClose}>
              Start Learning Now
            </Button>
            <Button variant="outline" onClick={onClose}>
              Save for Later
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};