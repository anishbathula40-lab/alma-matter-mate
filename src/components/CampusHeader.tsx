import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  BookOpen, 
  Users, 
  UtensilsCrossed, 
  MessageSquare,
  Settings,
  Bell
} from "lucide-react";

export const CampusHeader = () => {
  return (
    <header className="bg-background border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-background/95">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-campus-primary to-campus-secondary rounded-lg flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-white" />
          </div>
          <h1 className="text-xl font-bold bg-gradient-to-r from-campus-primary to-campus-secondary bg-clip-text text-transparent">
            CampusAI
          </h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Button variant="ghost" size="sm" className="text-foreground hover:text-campus-primary">
            <Users className="w-4 h-4 mr-2" />
            Faculty
          </Button>
          <Button variant="ghost" size="sm" className="text-foreground hover:text-campus-primary">
            <UtensilsCrossed className="w-4 h-4 mr-2" />
            Dining
          </Button>
          <Button variant="ghost" size="sm" className="text-foreground hover:text-campus-primary">
            <MessageSquare className="w-4 h-4 mr-2" />
            Support
          </Button>
        </nav>

        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="sm">
            <Bell className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <Settings className="w-4 h-4" />
          </Button>
          <Avatar className="w-8 h-8">
            <AvatarImage src="" />
            <AvatarFallback className="bg-campus-primary text-white text-sm">ST</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
};