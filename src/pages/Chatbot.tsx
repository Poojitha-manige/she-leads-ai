import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ArrowLeft, Send, Bot, User, Mic, MicOff, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const predefinedQuestions = [
  "How do I start learning tailoring?",
  "What materials do I need for organic farming?",
  "How can I find buyers for my products?",
  "What micro-loans are available for women entrepreneurs?",
  "How do I price my handmade products?",
  "Can you help me with digital marketing?"
];

const botResponses = {
  "How do I start learning tailoring?": "Great choice! To start learning tailoring, I recommend beginning with our 'Basic Stitching' module. You'll need a sewing machine, threads, needles, fabric scissors, and measuring tape. The course covers threading, basic stitches, and simple garment construction. Would you like me to enroll you in the course?",
  "What materials do I need for organic farming?": "For organic farming, you'll need organic seeds, natural fertilizers like compost or cow dung, basic farming tools (spade, hoe, watering can), and pH testing strips for soil. Our organic farming course covers soil preparation, composting, and natural pest control methods.",
  "How can I find buyers for my products?": "There are several ways to find buyers: 1) Join local women's cooperatives, 2) Use online platforms like WhatsApp Business, 3) Connect with nearby markets and shops, 4) Participate in local fairs and exhibitions. Our Market Connect feature can help you find potential buyers in your area.",
  "What micro-loans are available for women entrepreneurs?": "Several micro-loan options are available: 1) Mudra Loans (up to ₹10 lakhs), 2) Stand-Up India Scheme, 3) Mahila Udyam Nidhi Scheme, 4) Local Self Help Group loans. I can help you find the best option based on your business needs and location.",
  "How do I price my handmade products?": "To price handmade products: 1) Calculate material costs, 2) Add labor costs (your time × fair hourly rate), 3) Include overhead costs (10-15%), 4) Add profit margin (20-30%), 5) Research competitor pricing. Our Product Helper can generate pricing suggestions for your specific items.",
  "Can you help me with digital marketing?": "Absolutely! Digital marketing for small businesses includes: 1) Creating WhatsApp Business profile, 2) Using Facebook and Instagram for product photos, 3) Joining local community groups, 4) Getting customer reviews and testimonials. Would you like specific guidance for your product type?"
};

const Chatbot = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm your AI learning assistant. I'm here to help you with skill development, business questions, and finding resources. How can I assist you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = (message?: string) => {
    const messageText = message || inputMessage.trim();
    if (!messageText) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now(),
      text: messageText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      const botResponse = botResponses[messageText as keyof typeof botResponses] || 
        "I understand your question! While I'm learning to provide better responses, I recommend checking our Skills section for detailed tutorials, or try our Voice Mode for hands-on learning. Is there a specific skill you'd like to focus on?";

      const botMessage: Message = {
        id: Date.now() + 1,
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleVoiceToggle = () => {
    setIsListening(!isListening);
    toast({
      title: isListening ? "Voice Recognition Stopped" : "Voice Recognition Started",
      description: isListening ? "Stopped listening" : "Now listening for your question...",
    });
  };

  const handleQuickQuestion = (question: string) => {
    handleSendMessage(question);
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
            AI Assistant Online
          </Badge>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Smart
            <span className="block bg-gradient-success bg-clip-text text-transparent">
              Chatbot
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get instant answers to your learning and business questions
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Quick Questions */}
          <div className="lg:col-span-1">
            <Card className="bg-gradient-card backdrop-blur-sm border-0 shadow-elegant">
              <CardHeader>
                <CardTitle className="text-lg">Quick Questions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {predefinedQuestions.map((question, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    className="w-full text-left justify-start h-auto py-3 px-3"
                    onClick={() => handleQuickQuestion(question)}
                  >
                    <MessageCircle className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span className="text-xs leading-tight">{question}</span>
                  </Button>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Chat Interface */}
          <div className="lg:col-span-3">
            <Card className="bg-gradient-card backdrop-blur-sm border-0 shadow-elegant h-[600px] flex flex-col">
              <CardHeader className="border-b border-white/10">
                <CardTitle className="flex items-center gap-2">
                  <Bot className="h-6 w-6 text-primary" />
                  AI Learning Assistant
                </CardTitle>
              </CardHeader>
              
              <CardContent className="flex-1 p-0 flex flex-col">
                {/* Messages */}
                <ScrollArea className="flex-1 p-6">
                  <div className="space-y-4">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex gap-3 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        {message.sender === 'bot' && (
                          <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0">
                            <Bot className="h-4 w-4 text-white" />
                          </div>
                        )}
                        
                        <div className={`max-w-[70%] rounded-2xl px-4 py-3 ${
                          message.sender === 'user' 
                            ? 'bg-gradient-primary text-white' 
                            : 'bg-white/10 backdrop-blur-sm'
                        }`}>
                          <p className="text-sm leading-relaxed">{message.text}</p>
                          <p className="text-xs opacity-60 mt-2">
                            {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </p>
                        </div>

                        {message.sender === 'user' && (
                          <div className="w-8 h-8 rounded-full bg-gradient-success flex items-center justify-center flex-shrink-0">
                            <User className="h-4 w-4 text-white" />
                          </div>
                        )}
                      </div>
                    ))}
                    
                    {isTyping && (
                      <div className="flex gap-3 justify-start">
                        <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0">
                          <Bot className="h-4 w-4 text-white" />
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-4 py-3">
                          <div className="flex gap-1">
                            <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </ScrollArea>

                {/* Input Area */}
                <div className="p-6 border-t border-white/10">
                  <div className="flex gap-3">
                    <div className="flex-1 relative">
                      <Input
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        placeholder="Ask me anything about skills, business, or learning..."
                        className="pr-20 bg-white/5 border-white/20"
                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      />
                      <Button
                        size="icon"
                        variant={isListening ? "destructive" : "outline"}
                        className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8"
                        onClick={handleVoiceToggle}
                      >
                        {isListening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
                      </Button>
                    </div>
                    <Button 
                      onClick={() => handleSendMessage()}
                      disabled={!inputMessage.trim()}
                      className="bg-gradient-primary hover:opacity-90"
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <div className="mt-3 text-center">
                    <p className="text-xs text-muted-foreground">
                      Ask about skills, business planning, market connections, or financial assistance
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;