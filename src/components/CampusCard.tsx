import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";
import campusLibrary from "@/assets/campus-library.jpg";
import campusDining from "@/assets/campus-dining.jpg";
import campusStudents from "@/assets/campus-students.jpg";
import campusFaculty from "@/assets/campus-faculty.jpg";
import campusEvents from "@/assets/campus-events.jpg";

interface CampusCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  stats?: Array<{ label: string; value: string; variant?: "default" | "secondary" | "destructive" | "outline" }>;
  action?: {
    label: string;
    onClick: () => void;
  };
}

export const CampusCard = ({ title, description, icon, stats, action }: CampusCardProps) => {
  // Map card titles to corresponding images
  const getCardImage = (title: string) => {
    if (title.toLowerCase().includes('academic')) return campusLibrary;
    if (title.toLowerCase().includes('faculty')) return campusFaculty;
    if (title.toLowerCase().includes('dining')) return campusDining;
    if (title.toLowerCase().includes('student')) return campusStudents;
    if (title.toLowerCase().includes('events')) return campusEvents;
    return campusLibrary; // default
  };

  const cardImage = getCardImage(title);

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
      {/* Card Image Header */}
      <div className="relative h-32 overflow-hidden">
        <img
          src={cardImage}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute top-2 right-2 p-2 bg-white/20 backdrop-blur-sm rounded-full">
          {icon}
        </div>
      </div>

      <CardHeader className="pb-3">
        <div className="flex items-center space-x-2 mb-2">
          <CardTitle className="text-lg">{title}</CardTitle>
        </div>
        <CardDescription className="text-sm">{description}</CardDescription>
      </CardHeader>
      
      {stats && (
        <CardContent className="pt-0">
          <div className="flex flex-wrap gap-2 mb-4">
            {stats.map((stat, index) => (
              <Badge key={index} variant={stat.variant || "secondary"} className="text-xs">
                {stat.label}: {stat.value}
              </Badge>
            ))}
          </div>
          
          {action && (
            <Button 
              variant="outline" 
              size="sm" 
              onClick={action.onClick}
              className="w-full hover:bg-campus-primary hover:text-white hover:border-campus-primary"
            >
              {action.label}
            </Button>
          )}
        </CardContent>
      )}
    </Card>
  );
};