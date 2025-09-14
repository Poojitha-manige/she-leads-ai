import { Button } from "@/components/ui/button";
import { Play, Mic, Target } from "lucide-react";
import heroImage from "@/assets/hero-empowerment.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      <div className="absolute inset-0 bg-black/20" />
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Transform Your Skills Into
            <span className="block bg-gradient-to-r from-accent via-yellow-300 to-accent bg-clip-text text-transparent">
              Income & Independence
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
            AI-powered skill development in your local language. Voice-guided learning, 
            micro-loan matching, and market connections for rural women entrepreneurs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4 rounded-2xl">
              <Play className="mr-2 h-5 w-5" />
              Start Learning Now
            </Button>
            
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 rounded-2xl border-white/30 text-white hover:bg-white/10">
              <Mic className="mr-2 h-5 w-5" />
              Try Voice Mode
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <Target className="h-12 w-12 mx-auto mb-4 text-accent" />
              <h3 className="text-xl font-semibold mb-2">Voice Learning</h3>
              <p className="text-white/80">Hands-free tutorials in your local language</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <Target className="h-12 w-12 mx-auto mb-4 text-accent" />
              <h3 className="text-xl font-semibold mb-2">Smart Guidance</h3>
              <p className="text-white/80">AI chatbot answers your questions instantly</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <Target className="h-12 w-12 mx-auto mb-4 text-accent" />
              <h3 className="text-xl font-semibold mb-2">Market Connect</h3>
              <p className="text-white/80">Link to buyers and cooperatives near you</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};