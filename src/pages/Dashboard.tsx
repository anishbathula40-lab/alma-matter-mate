import { CampusHeader } from "@/components/CampusHeader";
import { ChatInterface } from "@/components/ChatInterface";
import { CampusCard } from "@/components/CampusCard";
import { DashboardStats } from "@/components/DashboardStats";
import { 
  BookOpen, 
  Users, 
  UtensilsCrossed, 
  MessageSquare,
  GraduationCap,
  Calendar,
  MapPin,
  Settings
} from "lucide-react";

const Dashboard = () => {
  const campusServices = [
    {
      title: "Academic Information",
      description: "Course schedules, grades, and academic calendar",
      icon: <BookOpen className="w-5 h-5" />,
      stats: [
        { label: "Active Courses", value: "342" },
        { label: "Departments", value: "12" }
      ],
      action: {
        label: "View Courses",
        onClick: () => console.log("Navigate to courses")
      }
    },
    {
      title: "Faculty Directory",
      description: "Find professors, office hours, and contact info",
      icon: <Users className="w-5 h-5" />,
      stats: [
        { label: "Faculty", value: "628" },
        { label: "Available Now", value: "42", variant: "default" as const }
      ],
      action: {
        label: "Browse Faculty",
        onClick: () => console.log("Navigate to faculty")
      }
    },
    {
      title: "Dining Services",
      description: "Meal plans, menus, and dining hall hours",
      icon: <UtensilsCrossed className="w-5 h-5" />,
      stats: [
        { label: "Open Now", value: "3/5" },
        { label: "Today's Special", value: "Mediterranean" }
      ],
      action: {
        label: "View Menus",
        onClick: () => console.log("Navigate to dining")
      }
    },
    {
      title: "Student Portal",
      description: "Grades, registration, and student services",
      icon: <GraduationCap className="w-5 h-5" />,
      stats: [
        { label: "Enrolled", value: "12,847" },
        { label: "New Students", value: "2,156" }
      ],
      action: {
        label: "Access Portal",
        onClick: () => console.log("Navigate to student portal")
      }
    },
    {
      title: "Campus Events",
      description: "Upcoming events, workshops, and activities",
      icon: <Calendar className="w-5 h-5" />,
      stats: [
        { label: "This Week", value: "23" },
        { label: "Featured", value: "5" }
      ],
      action: {
        label: "View Events",
        onClick: () => console.log("Navigate to events")
      }
    },
    {
      title: "Campus Map & Locations",
      description: "Find buildings, rooms, and campus facilities",
      icon: <MapPin className="w-5 h-5" />,
      stats: [
        { label: "Buildings", value: "45" },
        { label: "Parking Spots", value: "1,245" }
      ],
      action: {
        label: "View Map",
        onClick: () => console.log("Navigate to map")
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <CampusHeader />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-campus-primary to-campus-secondary bg-clip-text text-transparent">
            Welcome to Smart Campus Assistant
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your AI-powered companion for all campus needs. Get instant answers about courses, faculty, dining, and more.
          </p>
        </div>

        {/* Stats Dashboard */}
        <div className="mb-8">
          <DashboardStats />
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Campus Services */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold mb-6 flex items-center">
              <Settings className="w-6 h-6 mr-2 text-campus-primary" />
              Campus Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {campusServices.map((service, index) => (
                <CampusCard key={index} {...service} />
              ))}
            </div>
          </div>

          {/* AI Chat Interface */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-semibold mb-6 flex items-center">
              <MessageSquare className="w-6 h-6 mr-2 text-campus-primary" />
              AI Assistant
            </h2>
            <ChatInterface />
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold mb-4">Need Help?</h3>
          <p className="text-muted-foreground mb-6">
            Chat with our AI assistant or browse our comprehensive campus information system.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;