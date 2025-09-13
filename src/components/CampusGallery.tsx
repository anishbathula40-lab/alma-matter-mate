import { Card } from "@/components/ui/card";
import campusMainBuilding from "@/assets/campus-main-building.jpg";
import campusLibrary from "@/assets/campus-library.jpg";
import campusDining from "@/assets/campus-dining.jpg";
import campusStudents from "@/assets/campus-students.jpg";
import campusFaculty from "@/assets/campus-faculty.jpg";
import campusEvents from "@/assets/campus-events.jpg";

interface CampusPhoto {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
}

const campusPhotos: CampusPhoto[] = [
  {
    id: "1",
    title: "Main Campus Building",
    description: "Our beautiful main administration building with classic architecture",
    image: campusMainBuilding,
    category: "Buildings"
  },
  {
    id: "2",
    title: "University Library",
    description: "State-of-the-art library with extensive study spaces and resources",
    image: campusLibrary,
    category: "Academic"
  },
  {
    id: "3",
    title: "Dining Facilities",
    description: "Modern dining halls with diverse culinary options",
    image: campusDining,
    category: "Dining"
  },
  {
    id: "4",
    title: "Student Life",
    description: "Vibrant campus community with students enjoying campus activities",
    image: campusStudents,
    category: "Student Life"
  },
  {
    id: "5",
    title: "Faculty Buildings",
    description: "Professional academic buildings housing our distinguished faculty",
    image: campusFaculty,
    category: "Academic"
  },
  {
    id: "6",
    title: "Campus Events",
    description: "Dynamic campus events and activities throughout the year",
    image: campusEvents,
    category: "Events"
  }
];

export const CampusGallery = () => {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-campus-primary to-campus-secondary bg-clip-text text-transparent">
          Campus Gallery
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explore our beautiful campus through these stunning photos showcasing our facilities, student life, and academic environment.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {campusPhotos.map((photo) => (
          <Card key={photo.id} className="overflow-hidden group hover:shadow-lg transition-all duration-300">
            <div className="relative overflow-hidden">
              <img
                src={photo.image}
                alt={photo.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute top-2 right-2">
                <span className="bg-campus-primary text-white px-2 py-1 rounded-full text-xs font-medium">
                  {photo.category}
                </span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2 text-foreground">
                {photo.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {photo.description}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};