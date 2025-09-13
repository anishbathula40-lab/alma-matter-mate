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
import campusMainBuilding from "@/assets/campus-main-building.jpg";

export const CampusHeader = () => {
  return (
    <header 
      className="relative bg-gradient-to-r from-campus-primary to-campus-secondary text-white shadow-lg overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.9), rgba(147, 51, 234, 0.9)), url(${campusMainBuilding})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay'
      }}
    >
      <div className="container mx-auto px-4 h-20 flex items-center justify-between relative z-10">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
            <BookOpen className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-white">
            CampusAI
          </h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
            <Users className="w-4 h-4 mr-2" />
            Faculty
          </Button>
          <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
            <UtensilsCrossed className="w-4 h-4 mr-2" />
            Dining
          </Button>
          <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
            <MessageSquare className="w-4 h-4 mr-2" />
            Support
          </Button>
        </nav>

        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
            <Bell className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
            <Settings className="w-4 h-4" />
          </Button>
          <Avatar className="w-10 h-10 border-2 border-white/30">
            <AvatarImage src="" />
            <AvatarFallback className="bg-white/20 text-white text-sm">ST</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
};