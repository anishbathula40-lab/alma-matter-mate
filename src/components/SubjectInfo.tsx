import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { 
  BookOpen, 
  Clock, 
  Users, 
  MapPin,
  Star,
  Search,
  Filter,
  Calendar,
  User,
  CreditCard
} from "lucide-react";

interface Course {
  id: string;
  code: string;
  title: string;
  description: string;
  credits: number;
  department: string;
  instructor: string;
  schedule: string;
  location: string;
  prerequisites: string[];
  capacity: number;
  enrolled: number;
  rating: number;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  semester: string;
}

const sampleCourses: Course[] = [
  {
    id: "1",
    code: "CS 101",
    title: "Introduction to Computer Science",
    description: "Fundamental concepts of computer science including programming, algorithms, and data structures.",
    credits: 3,
    department: "Computer Science",
    instructor: "Dr. Sarah Johnson",
    schedule: "MWF 9:00-10:00 AM",
    location: "Engineering Building - Room 201",
    prerequisites: ["Math 101"],
    capacity: 120,
    enrolled: 98,
    rating: 4.5,
    difficulty: "Beginner",
    semester: "Fall 2024"
  },
  {
    id: "2",
    code: "MATH 205",
    title: "Calculus II",
    description: "Advanced calculus concepts including integration techniques, series, and differential equations.",
    credits: 4,
    department: "Mathematics",
    instructor: "Prof. Michael Chen",
    schedule: "TR 2:00-3:30 PM",
    location: "Science Building - Room 105",
    prerequisites: ["MATH 101", "MATH 104"],
    capacity: 80,
    enrolled: 72,
    rating: 4.2,
    difficulty: "Intermediate",
    semester: "Fall 2024"
  },
  {
    id: "3",
    code: "ENG 150",
    title: "Academic Writing",
    description: "Development of critical thinking and writing skills for academic success.",
    credits: 3,
    department: "English",
    instructor: "Dr. Emily Rodriguez",
    schedule: "MWF 11:00-12:00 PM",
    location: "Humanities Building - Room 302",
    prerequisites: [],
    capacity: 25,
    enrolled: 23,
    rating: 4.7,
    difficulty: "Beginner",
    semester: "Fall 2024"
  },
  {
    id: "4",
    code: "PHYS 301",
    title: "Quantum Mechanics",
    description: "Introduction to quantum mechanical principles and their applications in modern physics.",
    credits: 4,
    department: "Physics",
    instructor: "Dr. Robert Kim",
    schedule: "MW 3:00-4:30 PM",
    location: "Physics Lab - Room 401",
    prerequisites: ["PHYS 201", "MATH 205"],
    capacity: 30,
    enrolled: 28,
    rating: 4.3,
    difficulty: "Advanced",
    semester: "Fall 2024"
  },
  {
    id: "5",
    code: "BIO 150",
    title: "General Biology",
    description: "Introduction to biological concepts including cell structure, genetics, and evolution.",
    credits: 4,
    department: "Biology",
    instructor: "Dr. Lisa Park",
    schedule: "TR 10:00-11:30 AM",
    location: "Biology Lab - Room 201",
    prerequisites: ["CHEM 101"],
    capacity: 60,
    enrolled: 55,
    rating: 4.4,
    difficulty: "Beginner",
    semester: "Fall 2024"
  },
  {
    id: "6",
    code: "ECON 200",
    title: "Macroeconomics",
    description: "Study of economic principles at the national and international level.",
    credits: 3,
    department: "Economics",
    instructor: "Prof. David Wilson",
    schedule: "MWF 1:00-2:00 PM",
    location: "Business Building - Room 150",
    prerequisites: ["ECON 101"],
    capacity: 100,
    enrolled: 87,
    rating: 4.1,
    difficulty: "Intermediate",
    semester: "Fall 2024"
  }
];

export const SubjectInfo = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");
  const [filteredCourses, setFilteredCourses] = useState(sampleCourses);

  const departments = [...new Set(sampleCourses.map(course => course.department))];

  const handleSearch = () => {
    let filtered = sampleCourses;

    if (searchTerm) {
      filtered = filtered.filter(
        course =>
          course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          course.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
          course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedDepartment !== "all") {
      filtered = filtered.filter(course => course.department === selectedDepartment);
    }

    if (selectedDifficulty !== "all") {
      filtered = filtered.filter(course => course.difficulty === selectedDifficulty);
    }

    setFilteredCourses(filtered);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "campus-green";
      case "Intermediate": return "campus-gold"; 
      case "Advanced": return "campus-red";
      default: return "secondary";
    }
  };

  const getEnrollmentStatus = (enrolled: number, capacity: number) => {
    const percentage = (enrolled / capacity) * 100;
    if (percentage >= 95) return { text: "Almost Full", variant: "destructive" as const };
    if (percentage >= 80) return { text: "Filling Up", variant: "secondary" as const };
    return { text: "Available", variant: "default" as const };
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-campus-primary to-campus-secondary bg-clip-text text-transparent">
          Course Catalog & Subject Information
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explore our comprehensive course offerings, check prerequisites, and find the perfect classes for your academic journey.
        </p>
      </div>

      {/* Search and Filter Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Search className="w-5 h-5 mr-2 text-campus-primary" />
            Search & Filter Courses
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2">
              <Input
                placeholder="Search by course name, code, or instructor..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              />
            </div>
            <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
              <SelectTrigger>
                <SelectValue placeholder="All Departments" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Departments</SelectItem>
                {departments.map(dept => (
                  <SelectItem key={dept} value={dept}>{dept}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
              <SelectTrigger>
                <SelectValue placeholder="All Levels" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Levels</SelectItem>
                <SelectItem value="Beginner">Beginner</SelectItem>
                <SelectItem value="Intermediate">Intermediate</SelectItem>
                <SelectItem value="Advanced">Advanced</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button onClick={handleSearch} className="mt-4 w-full md:w-auto">
            <Filter className="w-4 h-4 mr-2" />
            Apply Filters
          </Button>
        </CardContent>
      </Card>

      {/* Course Results */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredCourses.map((course) => {
          const enrollmentStatus = getEnrollmentStatus(course.enrolled, course.capacity);
          
          return (
            <Card key={course.id} className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg">{course.code}: {course.title}</CardTitle>
                    <CardDescription className="mt-2">{course.description}</CardDescription>
                  </div>
                  <Badge variant="outline" className={`bg-${getDifficultyColor(course.difficulty)}/10 text-${getDifficultyColor(course.difficulty)}`}>
                    {course.difficulty}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Course Details */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center">
                    <CreditCard className="w-4 h-4 mr-2 text-muted-foreground" />
                    <span>{course.credits} Credits</span>
                  </div>
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-2 text-muted-foreground" />
                    <span>{course.instructor}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2 text-muted-foreground" />
                    <span>{course.schedule}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-muted-foreground" />
                    <span>{course.location}</span>
                  </div>
                </div>

                {/* Prerequisites */}
                {course.prerequisites.length > 0 && (
                  <div>
                    <p className="text-sm font-medium mb-2">Prerequisites:</p>
                    <div className="flex flex-wrap gap-1">
                      {course.prerequisites.map((prereq, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {prereq}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {/* Enrollment and Rating */}
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1 text-muted-foreground" />
                      <span className="text-sm">{course.enrolled}/{course.capacity}</span>
                    </div>
                    <Badge variant={enrollmentStatus.variant} className="text-xs">
                      {enrollmentStatus.text}
                    </Badge>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 mr-1 text-campus-gold fill-current" />
                    <span className="text-sm font-medium">{course.rating}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Calendar className="w-4 h-4 mr-2" />
                    View Schedule
                  </Button>
                  <Button size="sm" className="flex-1">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Enroll Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {filteredCourses.length === 0 && (
        <Card>
          <CardContent className="text-center py-8">
            <BookOpen className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
            <p className="text-lg font-medium mb-2">No courses found</p>
            <p className="text-muted-foreground">Try adjusting your search criteria or filters.</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};