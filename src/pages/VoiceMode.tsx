import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Mic, MicOff, Volume2, Pause, Play, RotateCcw, Languages, Settings } from "lucide-react";

const VoiceMode = () => {
  const navigate = useNavigate();
  const [isListening, setIsListening] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTutorial] = useState("Basic Stitching Techniques");

  const toggleListening = () => {
    setIsListening(!isListening);
  };

  const togglePlayback = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="min-h-screen bg-gradient-professional">
      <div className="absolute inset-0 bg-overlay-section" />
      
      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="flex items-center justify-between mb-8">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate("/")}
            className="hover:bg-white/10"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
          <Badge variant="secondary" className="bg-gradient-success text-white">
            Voice Mode Active
          </Badge>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Voice Learning
              <span className="block bg-gradient-success bg-clip-text text-transparent">
                Experience
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Learn hands-free with voice guidance in your preferred language
            </p>
          </div>

          <Tabs defaultValue="voice-control" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 bg-gradient-card backdrop-blur-sm border-0">
              <TabsTrigger value="voice-control" className="data-[state=active]:bg-gradient-primary data-[state=active]:text-white">
                <Mic className="h-4 w-4 mr-2" />
                Voice Control
              </TabsTrigger>
              <TabsTrigger value="tutorial" className="data-[state=active]:bg-gradient-primary data-[state=active]:text-white">
                <Play className="h-4 w-4 mr-2" />
                Tutorial
              </TabsTrigger>
              <TabsTrigger value="settings" className="data-[state=active]:bg-gradient-primary data-[state=active]:text-white">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </TabsTrigger>
            </TabsList>

            <TabsContent value="voice-control" className="mt-8">
              <Card className="bg-gradient-card backdrop-blur-sm border-0 shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-center">Voice Controls</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-6">
                  <div className="relative">
                    <div className={`w-32 h-32 mx-auto rounded-full flex items-center justify-center transition-all duration-300 ${
                      isListening ? 'bg-gradient-primary shadow-empowerment animate-pulse' : 'bg-gradient-secondary'
                    }`}>
                      <Button
                        size="icon"
                        variant="ghost"
                        onClick={toggleListening}
                        className="w-20 h-20 text-white hover:bg-transparent"
                      >
                        {isListening ? <MicOff className="h-10 w-10" /> : <Mic className="h-10 w-10" />}
                      </Button>
                    </div>
                    {isListening && (
                      <div className="absolute inset-0 rounded-full border-4 border-primary/50 animate-ping" />
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-medium">
                      {isListening ? "Listening..." : "Tap to speak"}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Ask questions about the tutorial or say "next step"
                    </p>
                  </div>

                  <div className="mt-8 p-4 rounded-xl bg-white/5 backdrop-blur-sm">
                    <h3 className="font-medium mb-4">Voice Commands You Can Use:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div>"Next step"</div>
                      <div>"Repeat that"</div>
                      <div>"Show me how"</div>
                      <div>"Go back"</div>
                      <div>"What materials?"</div>
                      <div>"Help me"</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="tutorial" className="mt-8">
              <Card className="bg-gradient-card backdrop-blur-sm border-0 shadow-elegant">
                <CardHeader>
                  <CardTitle>Current Tutorial</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-medium mb-2">{currentTutorial}</h3>
                    <p className="text-sm text-muted-foreground">
                      Learn the basics of hand stitching and needle techniques
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-center gap-4">
                      <Button variant="outline" size="icon">
                        <RotateCcw className="h-4 w-4" />
                      </Button>
                      <Button
                        size="icon"
                        variant="empowerment"
                        onClick={togglePlayback}
                        className="w-16 h-16"
                      >
                        {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
                      </Button>
                      <Button variant="outline" size="icon">
                        <Volume2 className="h-4 w-4" />
                      </Button>
                    </div>

                    <div className="text-center">
                      <p className="text-sm text-muted-foreground">
                        {isPlaying ? "Playing tutorial..." : "Press play to start"}
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white/5 backdrop-blur-sm">
                    <h4 className="font-medium mb-2">Current Step:</h4>
                    <p className="text-sm">
                      "First, thread your needle with a single strand of thread, 
                      about 18 inches long. This is the perfect length to avoid tangling."
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      Previous Step
                    </Button>
                    <Button variant="empowerment" size="sm" className="flex-1">
                      Next Step
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="settings" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-gradient-card backdrop-blur-sm border-0 shadow-elegant">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Languages className="h-5 w-5" />
                      Language Settings
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <h4 className="font-medium">Voice Commands Language</h4>
                      <div className="grid grid-cols-1 gap-2">
                        <Button variant="empowerment" size="sm" className="w-full justify-start">
                          English (Active)
                        </Button>
                        <Button variant="outline" size="sm" className="w-full justify-start">
                          తెలుగు (Telugu)
                        </Button>
                        <Button variant="outline" size="sm" className="w-full justify-start">
                          हिन्दी (Hindi)
                        </Button>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <h4 className="font-medium">Tutorial Language</h4>
                      <div className="grid grid-cols-1 gap-2">
                        <Button variant="empowerment" size="sm" className="w-full justify-start">
                          English (Active)
                        </Button>
                        <Button variant="outline" size="sm" className="w-full justify-start">
                          తెలుగు (Telugu)
                        </Button>
                        <Button variant="outline" size="sm" className="w-full justify-start">
                          हिन्दी (Hindi)
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-card backdrop-blur-sm border-0 shadow-elegant">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Volume2 className="h-5 w-5" />
                      Audio Settings
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <h4 className="font-medium">Voice Speed</h4>
                      <div className="grid grid-cols-3 gap-2">
                        <Button variant="outline" size="sm">Slow</Button>
                        <Button variant="empowerment" size="sm">Normal</Button>
                        <Button variant="outline" size="sm">Fast</Button>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <h4 className="font-medium">Voice Type</h4>
                      <div className="grid grid-cols-2 gap-2">
                        <Button variant="empowerment" size="sm">Female</Button>
                        <Button variant="outline" size="sm">Male</Button>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-medium">Auto-play Next</h4>
                      <div className="grid grid-cols-2 gap-2">
                        <Button variant="empowerment" size="sm">On</Button>
                        <Button variant="outline" size="sm">Off</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default VoiceMode;