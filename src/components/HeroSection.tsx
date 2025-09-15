import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mic, Brain, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-empowerment.jpg";

export const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Professional layered background */}
      <div className="absolute inset-0 bg-overlay-hero" />
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-secondary/8 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Transform Your Skills Into
            <span className="block bg-gradient-to-r from-accent via-yellow-300 to-accent bg-clip-text text-transparent animate-shimmer bg-[length:200%_auto]">
              Income & Independence
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
            AI-powered skill development in your local language. Voice-guided learning, 
            micro-loan matching, and market connections for rural women entrepreneurs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-8 py-4 rounded-2xl font-semibold"
              onClick={() => navigate("/skills")}
            >
              Start Learning Now
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4 rounded-2xl border-white/20 hover:bg-white/10 text-white"
              onClick={() => navigate("/voice-mode")}
            >
              Try Voice Mode
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/8 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:bg-white/12 transition-all duration-300 hover:-translate-y-1 shadow-floating">
              <Mic className="h-12 w-12 mx-auto mb-4 text-accent animate-float" />
              <h3 className="text-xl font-semibold mb-2">Voice Learning</h3>
              <p className="text-white/80">Hands-free tutorials in your local language</p>
            </div>
            
            <div className="bg-white/8 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:bg-white/12 transition-all duration-300 hover:-translate-y-1 shadow-floating" style={{ animationDelay: '0.2s' }}>
              <Brain className="h-12 w-12 mx-auto mb-4 text-accent animate-float" style={{ animationDelay: '0.5s' }} />
              <h3 className="text-xl font-semibold mb-2">Smart Guidance</h3>
              <p className="text-white/80">AI chatbot answers your questions instantly</p>
            </div>
            
            <div className="bg-white/8 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:bg-white/12 transition-all duration-300 hover:-translate-y-1 shadow-floating" style={{ animationDelay: '0.4s' }}>
              <TrendingUp className="h-12 w-12 mx-auto mb-4 text-accent animate-float" style={{ animationDelay: '1s' }} />
              <h3 className="text-xl font-semibold mb-2">Market Connect</h3>
              <p className="text-white/80">Link to buyers and cooperatives near you</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};