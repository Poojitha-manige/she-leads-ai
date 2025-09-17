import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Mic, MicOff, Volume2, Pause, Play, RotateCcw, Languages, Settings } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const VoiceMode = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isListening, setIsListening] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTutorial] = useState("Basic Stitching Techniques");
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [selectedSpeed, setSelectedSpeed] = useState("Normal");
  const [selectedVoice, setSelectedVoice] = useState("Female");
  const [autoPlay, setAutoPlay] = useState(true);

  const toggleListening = () => {
    setIsListening(!isListening);
    toast({
      title: isListening ? "Voice Recognition Stopped" : "Voice Recognition Started",
      description: isListening ? "Stopped listening for voice commands" : "Now listening for your voice commands...",
    });
  };

  const togglePlayback = () => {
    setIsPlaying(!isPlaying);
    toast({
      title: isPlaying ? "Paused" : "Playing",
      description: `Audio ${isPlaying ? 'paused' : 'resumed'} for: ${currentTutorial}`,
    });
  };

  const handleRestart = () => {
    toast({
      title: "Tutorial Restarted",
      description: "Starting from the beginning of the current lesson",
    });
  };

  const handleVolumeControl = () => {
    toast({
      title: "Volume Settings",
      description: "Audio volume controls activated",
    });
  };

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
    toast({
      title: "Language Changed",
      description: `Audio language switched to ${language}`,
    });
  };

  const handleSpeedChange = (speed: string) => {
    setSelectedSpeed(speed);
    toast({
      title: "Speed Adjusted",
      description: `Playback speed set to ${speed}`,
    });
  };

  const handleVoiceChange = (voice: string) => {
    setSelectedVoice(voice);
    toast({
      title: "Voice Changed",
      description: `Audio voice switched to ${voice}`,
    });
  };

  const handleAutoPlayToggle = () => {
    setAutoPlay(!autoPlay);
    toast({
      title: "Auto-play Updated",
      description: `Auto-play is now ${!autoPlay ? 'enabled' : 'disabled'}`,
    });
  };

  const handlePreviousStep = () => {
    toast({
      title: "Previous Step",
      description: "Moving to the previous tutorial step",
    });
  };

  const handleNextStep = () => {
    toast({
      title: "Next Step",
      description: "Moving to the next tutorial step",
    });
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

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Voice-Guided
            <span className="block bg-gradient-success bg-clip-text text-transparent">
              Learning
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Learn hands-free with voice commands and audio tutorials in your preferred language
          </p>
        </div>

        <Tabs defaultValue="voice-control" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 bg-gradient-card backdrop-blur-sm border-0">
            <TabsTrigger value="voice-control" className="data-[state=active]:bg-gradient-primary data-[state=active]:text-white">
              Voice Control
            </TabsTrigger>
            <TabsTrigger value="audio-player" className="data-[state=active]:bg-gradient-primary data-[state=active]:text-white">
              Audio Player
            </TabsTrigger>
            <TabsTrigger value="settings" className="data-[state=active]:bg-gradient-primary data-[state=active]:text-white">
              Settings
            </TabsTrigger>
          </TabsList>

          <TabsContent value="voice-control" className="mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="bg-gradient-card backdrop-blur-sm border-0 shadow-elegant">
                <CardHeader className="text-center">
                  <CardTitle>Voice Commands</CardTitle>
                  <p className="text-muted-foreground">Tap the microphone and speak your command</p>
                </CardHeader>
                <CardContent className="text-center space-y-6">
                  <div className="flex justify-center">
                    <div className={`relative w-32 h-32 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isListening 
                        ? 'bg-gradient-to-br from-red-500 to-red-600 animate-pulse shadow-floating' 
                        : 'bg-gradient-primary hover:shadow-empowerment'
                    }`}>
                      <Button
                        size="icon"
                        variant="ghost"
                        onClick={toggleListening}
                        className="w-full h-full hover:bg-transparent"
                      >
                        {isListening ? <MicOff className="h-10 w-10" /> : <Mic className="h-10 w-10" />}
                      </Button>
                    </div>
                  </div>
                  
                  <div className="space-y-3 text-sm">
                    <div className="p-3 rounded-lg bg-white/5">
                      <p className="font-medium">"Play the tutorial"</p>
                      <p className="text-muted-foreground">Start audio playback</p>
                    </div>
                    <div className="p-3 rounded-lg bg-white/5">
                      <p className="font-medium">"Next step"</p>
                      <p className="text-muted-foreground">Move to next section</p>
                    </div>
                    <div className="p-3 rounded-lg bg-white/5">
                      <p className="font-medium">"Repeat that"</p>
                      <p className="text-muted-foreground">Replay current instruction</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card backdrop-blur-sm border-0 shadow-elegant">
                <CardHeader>
                  <CardTitle>Current Tutorial</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{currentTutorial}</h3>
                    <Badge className="bg-gradient-success text-white">In Progress</Badge>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Progress</span>
                      <span>65%</span>
                    </div>
                    <Progress value={65} className="mb-4" />
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <p className="text-muted-foreground">Current Step:</p>
                    <p className="font-medium">Threading the needle and preparing your workspace</p>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1" onClick={handlePreviousStep}>
                      Previous Step
                    </Button>
                    <Button variant="empowerment" size="sm" className="flex-1" onClick={handleNextStep}>
                      Next Step
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="audio-player" className="mt-8">
            <Card className="bg-gradient-card backdrop-blur-sm border-0 shadow-elegant max-w-4xl mx-auto">
              <CardHeader className="text-center">
                <CardTitle>Audio Player</CardTitle>
                <p className="text-muted-foreground">Control your learning audio</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-2">{currentTutorial}</h3>
                  <p className="text-muted-foreground">Step 3 of 8: Basic Threading Technique</p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>2:34</span>
                    <span>8:42</span>
                  </div>
                  <Progress value={30} className="h-2" />
                </div>
                
                <div className="flex items-center justify-center gap-4">
                  <Button variant="outline" size="icon" onClick={handleRestart}>
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
                  <Button variant="outline" size="icon" onClick={handleVolumeControl}>
                    <Volume2 className="h-4 w-4" />
                  </Button>
                </div>
                
                <div className="text-center">
                  <Badge variant="outline" className="bg-white/5">
                    Playing in {selectedLanguage}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="bg-gradient-card backdrop-blur-sm border-0 shadow-elegant">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Languages className="h-5 w-5" />
                    Language Settings
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <h4 className="font-medium">Audio Language</h4>
                    <div className="grid grid-cols-1 gap-2">
                      <Button 
                        variant={selectedLanguage === "English" ? "empowerment" : "outline"} 
                        size="sm" 
                        className="w-full justify-start"
                        onClick={() => handleLanguageChange("English")}
                      >
                        English {selectedLanguage === "English" && "(Active)"}
                      </Button>
                      <Button 
                        variant={selectedLanguage === "Telugu" ? "empowerment" : "outline"} 
                        size="sm" 
                        className="w-full justify-start"
                        onClick={() => handleLanguageChange("Telugu")}
                      >
                        తెలుగు (Telugu)
                      </Button>
                      <Button 
                        variant={selectedLanguage === "Hindi" ? "empowerment" : "outline"} 
                        size="sm" 
                        className="w-full justify-start"
                        onClick={() => handleLanguageChange("Hindi")}
                      >
                        हिन्दी (Hindi)
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-medium">Voice Commands Language</h4>
                    <div className="grid grid-cols-1 gap-2">
                      <Button 
                        variant={selectedLanguage === "English" ? "empowerment" : "outline"} 
                        size="sm" 
                        className="w-full justify-start"
                        onClick={() => handleLanguageChange("English")}
                      >
                        English {selectedLanguage === "English" && "(Active)"}
                      </Button>
                      <Button 
                        variant={selectedLanguage === "Telugu" ? "empowerment" : "outline"} 
                        size="sm" 
                        className="w-full justify-start"
                        onClick={() => handleLanguageChange("Telugu")}
                      >
                        తెలుగు (Telugu)
                      </Button>
                      <Button 
                        variant={selectedLanguage === "Hindi" ? "empowerment" : "outline"} 
                        size="sm" 
                        className="w-full justify-start"
                        onClick={() => handleLanguageChange("Hindi")}
                      >
                        हिन्दी (Hindi)
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card backdrop-blur-sm border-0 shadow-elegant">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="h-5 w-5" />
                    Audio Settings
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <h4 className="font-medium">Playback Speed</h4>
                    <div className="grid grid-cols-3 gap-2">
                      <Button 
                        variant={selectedSpeed === "Slow" ? "empowerment" : "outline"} 
                        size="sm"
                        onClick={() => handleSpeedChange("Slow")}
                      >
                        Slow
                      </Button>
                      <Button 
                        variant={selectedSpeed === "Normal" ? "empowerment" : "outline"} 
                        size="sm"
                        onClick={() => handleSpeedChange("Normal")}
                      >
                        Normal
                      </Button>
                      <Button 
                        variant={selectedSpeed === "Fast" ? "empowerment" : "outline"} 
                        size="sm"
                        onClick={() => handleSpeedChange("Fast")}
                      >
                        Fast
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-medium">Voice Type</h4>
                    <div className="grid grid-cols-2 gap-2">
                      <Button 
                        variant={selectedVoice === "Female" ? "empowerment" : "outline"} 
                        size="sm"
                        onClick={() => handleVoiceChange("Female")}
                      >
                        Female
                      </Button>
                      <Button 
                        variant={selectedVoice === "Male" ? "empowerment" : "outline"} 
                        size="sm"
                        onClick={() => handleVoiceChange("Male")}
                      >
                        Male
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-medium">Auto-play Next</h4>
                    <div className="grid grid-cols-2 gap-2">
                      <Button 
                        variant={autoPlay ? "empowerment" : "outline"} 
                        size="sm"
                        onClick={handleAutoPlayToggle}
                      >
                        On
                      </Button>
                      <Button 
                        variant={!autoPlay ? "empowerment" : "outline"} 
                        size="sm"
                        onClick={handleAutoPlayToggle}
                      >
                        Off
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default VoiceMode;