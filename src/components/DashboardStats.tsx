import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Users, BookOpen, Clock } from "lucide-react";

export const DashboardStats = () => {
  const stats = [
    {
      title: "Total Students",
      value: "12,847",
      change: "+2.5%",
      icon: Users,
      trend: "up"
    },
    {
      title: "Active Courses",
      value: "342",
      change: "+12",
      icon: BookOpen,
      trend: "up"
    },
    {
      title: "Faculty Members",
      value: "628",
      change: "+8",
      icon: Users,
      trend: "up"
    },
    {
      title: "Avg Response Time",
      value: "2.3s",
      change: "-0.5s",
      icon: Clock,
      trend: "down"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <Icon className="h-4 w-4 text-campus-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <div className="flex items-center text-xs text-muted-foreground">
                <TrendingUp className={`h-3 w-3 mr-1 ${
                  stat.trend === 'up' ? 'text-campus-green' : 'text-campus-red'
                }`} />
                <span className={stat.trend === 'up' ? 'text-campus-green' : 'text-campus-red'}>
                  {stat.change}
                </span>
                <span className="ml-1">from last month</span>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};