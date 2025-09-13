import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Send, Bot, User } from "lucide-react";

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

export const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hello! I'm your smart campus assistant. I can help you with college information, faculty details, dining options, student services, and administrative queries. What would you like to know?",
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: getAIResponse(inputValue),
        sender: 'ai',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  const getAIResponse = (input: string): string => {
    const lowerInput = input.toLowerCase();
    
    if (lowerInput.includes('dining') || lowerInput.includes('food')) {
      return "Our dining services include: Main Cafeteria (6 AM - 10 PM), Student Union Food Court (10 AM - 8 PM), and Coffee Shop (7 AM - 6 PM). Today's special is Mediterranean Bowl at the cafeteria!";
    }
    
    if (lowerInput.includes('faculty') || lowerInput.includes('professor')) {
      return "I can help you find faculty information. Our faculty directory includes professors from Computer Science, Engineering, Business, Arts & Sciences, and more. Which department are you interested in?";
    }
    
    if (lowerInput.includes('library') || lowerInput.includes('study')) {
      return "The Central Library is open 24/7 during exam periods and 6 AM - 12 AM otherwise. We have study rooms, computer labs, and quiet zones. Would you like to book a study room?";
    }
    
    return "I'd be happy to help! You can ask me about dining hours, faculty information, campus events, student services, class schedules, or any other campus-related questions.";
  };

  return (
    <Card className="h-[500px] flex flex-col">
      <div className="p-4 border-b bg-gradient-to-r from-campus-primary to-campus-secondary text-white">
        <div className="flex items-center space-x-2">
          <Bot className="w-5 h-5" />
          <h3 className="font-semibold">Campus AI Assistant</h3>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex items-start space-x-3 ${
              message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
            }`}
          >
            <Avatar className="w-8 h-8">
              <AvatarFallback className={message.sender === 'user' ? 'bg-campus-primary text-white' : 'bg-muted'}>
                {message.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </AvatarFallback>
            </Avatar>
            <div
              className={`rounded-lg px-4 py-2 max-w-[80%] ${
                message.sender === 'user'
                  ? 'bg-campus-primary text-white'
                  : 'bg-muted'
              }`}
            >
              <p className="text-sm">{message.content}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="p-4 border-t">
        <div className="flex space-x-2">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ask me anything about campus..."
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            className="flex-1"
          />
          <Button 
            onClick={handleSendMessage}
            size="sm"
            className="bg-campus-primary hover:bg-campus-primary/90"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
};