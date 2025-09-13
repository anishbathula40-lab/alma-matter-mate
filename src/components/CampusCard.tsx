import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

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
  return (
    <Card className="hover:shadow-lg transition-all duration-300 hover:shadow-campus-primary/10 group">
      <CardHeader className="pb-3">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-campus-primary to-campus-secondary rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform">
            {icon}
          </div>
          <div>
            <CardTitle className="text-lg">{title}</CardTitle>
            <CardDescription className="text-sm">{description}</CardDescription>
          </div>
        </div>
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