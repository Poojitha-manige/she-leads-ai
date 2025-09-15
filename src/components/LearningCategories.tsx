import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SkillModal } from "./SkillModal";
import { 
  Scissors, 
  Sprout, 
  Palette, 
  Package2, 
  Smartphone
} from "lucide-react";

const categories = [
  {
    icon: Scissors,
    title: "Tailoring & Stitching",
    description: "Master traditional and modern stitching techniques, pattern making, and garment construction",
    duration: "6-8 weeks",
    level: "Beginner to Advanced"
  },
  {
    icon: Sprout,
    title: "Organic Farming Techniques",
    description: "Learn sustainable farming methods, crop rotation, and organic pest management",
    duration: "8-10 weeks", 
    level: "Beginner to Intermediate"
  },
  {
    icon: Palette,
    title: "Handicrafts & Embroidery",
    description: "Create beautiful handmade items, learn embroidery patterns, and traditional crafts",
    duration: "4-6 weeks",
    level: "Beginner to Advanced"
  },
  {
    icon: Package2,
    title: "Food Processing & Packaging",
    description: "Food preservation, packaging techniques, and small-scale food business setup",
    duration: "5-7 weeks",
    level: "Beginner to Intermediate"
  },
  {
    icon: Smartphone,
    title: "Mobile & Digital Literacy",
    description: "Master smartphone usage, digital payments, online selling, and basic computer skills",
    duration: "3-4 weeks",
    level: "Beginner"
  }
];

export const LearningCategories = () => {
  const navigate = useNavigate();
  const [selectedSkill, setSelectedSkill] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSkillClick = (category: any) => {
    setSelectedSkill(category);
    setIsModalOpen(true);
  };

  const handleStartLearning = () => {
    setIsModalOpen(false);
    navigate("/skills");
  };

  return (
    <section className="py-24 bg-gradient-professional relative overflow-hidden">
      {/* Professional background elements */}
      <div className="absolute inset-0 bg-overlay-section" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/4 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/4 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Choose Your
            <span className="block bg-gradient-success bg-clip-text text-transparent">
              Learning Path
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Select a skill that matches your interests and start your journey toward financial independence
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="group hover:shadow-floating transition-all duration-500 hover:-translate-y-3 border-0 shadow-elegant bg-gradient-card backdrop-blur-sm animate-fade-in h-full" style={{ animationDelay: `${index * 0.15}s` }}>
                <CardHeader className="text-center pb-4">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl mx-auto mb-6 bg-gradient-primary shadow-empowerment transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <IconComponent className="h-10 w-10 text-white group-hover:animate-float" />
                  </div>
                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors mb-2">
                    {category.title}
                  </CardTitle>
                  <div className="flex justify-center gap-3 mb-4">
                    <span className="text-xs bg-gradient-success text-white px-3 py-1 rounded-full font-medium">
                      {category.duration}
                    </span>
                    <span className="text-xs bg-secondary/10 text-secondary px-3 py-1 rounded-full font-medium">
                      {category.level}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="pt-0 flex flex-col justify-between flex-grow">
                  <p className="text-center text-muted-foreground leading-relaxed mb-6">
                    {category.description}
                  </p>
                  <Button 
                    variant="empowerment" 
                    className="w-full rounded-xl font-semibold transition-all duration-300 group-hover:shadow-empowerment"
                    onClick={() => handleSkillClick(category)}
                  >
                    Learn More
                  </Button>
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
            onClick={() => navigate("/skills")}
          >
            Browse All Skills
          </Button>
        </div>
      </div>
      
      <SkillModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        skill={selectedSkill}
      />
    </section>
  );
};