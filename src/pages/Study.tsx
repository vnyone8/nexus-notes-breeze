
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Search, BookOpen, Award, Check } from "lucide-react";
import { useState, useEffect } from "react";

interface Subject {
  [semester: number]: string[] | { [cycle: string]: string[] };
}

interface StreamData {
  name: string;
  description: string;
  semesters: number[];
  subjects: Subject;
}

interface StreamDataMap {
  [key: string]: StreamData;
}

const streamData: StreamDataMap = {
  cse: {
    name: "CSE STREAM",
    description: "Computer Science & Engineering covers programming fundamentals, algorithms, data structures, web development, and advanced computing concepts. Ideal for students interested in software development, artificial intelligence, and computer systems.",
    semesters: [1, 2, 3, 4, 5, 6],
    subjects: {
      1: ["Mathematics I", "Physics", "Basic Electronics", "Programming Fundamentals"],
      2: ["Mathematics II", "Data Structures", "Digital Logic", "Object Oriented Programming"],
      3: ["Computer Architecture", "Operating Systems", "Database Systems", "Web Technologies"],
      4: ["Computer Networks", "Software Engineering", "Algorithms", "Machine Learning"],
      5: ["Cloud Computing", "Artificial Intelligence", "Information Security", "Mobile Development"],
      6: ["Big Data Analytics", "Internet of Things", "Project Management", "Capstone Project"]
    }
  },
  nonCse: {
    name: "NON-CSE STREAM",
    description: "Non-CSE engineering streams cover core engineering principles, physics, mechanics, and specialized domain knowledge. Perfect for mechanical, electrical, civil and other engineering disciplines focusing on physical systems and industrial applications.",
    semesters: [1, 2, 3, 4, 5, 6],
    subjects: {
      1: ["Engineering Mathematics", "Engineering Physics", "Basic Engineering", "Professional Communication"],
      2: ["Engineering Chemistry", "Mechanics", "Electrical Engineering", "Workshop Practice"],
      3: ["Thermodynamics", "Fluid Mechanics", "Material Science", "Engineering Drawing"],
      4: ["Heat Transfer", "Manufacturing Processes", "Industrial Engineering", "Control Systems"],
      5: ["Power Systems", "Machine Design", "Industrial Management", "Renewable Energy"],
      6: ["Project Work", "Professional Ethics", "Quality Engineering", "Industrial Training"]
    }
  }
};

const testimonials = [
  {
    name: "Priya Sharma",
    stream: "CSE",
    year: "3rd Year",
    quote: "These notes helped me ace my database systems exam. The organization and clarity made complex topics much easier to understand!",
    avatar: "PS"
  },
  {
    name: "Rahul Kumar",
    stream: "Non-CSE",
    year: "4th Year",
    quote: "As a mechanical engineering student, I struggled with thermodynamics until I found these notes. The visual explanations made all the difference.",
    avatar: "RK"
  },
  {
    name: "Ananya Patel",
    stream: "CSE",
    year: "2nd Year",
    quote: "The data structures notes are incredible! Clear examples and practice problems helped me understand complex algorithms quickly.",
    avatar: "AP"
  }
];

const Study = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [hoveredSemester, setHoveredSemester] = useState<{stream: string, semester: number} | null>(null);
  const [progress, setProgress] = useState<Record<string, number>>({});

  // Simulate loading saved progress for returning users
  useEffect(() => {
    // This would normally come from a database or local storage
    setProgress({
      "cse-1": 75,
      "cse-3": 30,
      "nonCse-2": 50,
    });
  }, []);

  const handleSemesterClick = (stream: string, semester: number) => {
    navigate(`/subjects/${stream}/${semester}`);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // Filter subjects based on search query
  const getFilteredStreams = () => {
    if (!searchQuery.trim()) return Object.entries(streamData);
    
    return Object.entries(streamData).filter(([_, stream]) => {
      // Check if stream name matches
      if (stream.name.toLowerCase().includes(searchQuery.toLowerCase())) return true;
      
      // Check if any subject matches
      return Object.entries(stream.subjects).some(([_, semesterSubjects]) => {
        if (Array.isArray(semesterSubjects)) {
          return semesterSubjects.some(subject => 
            subject.toLowerCase().includes(searchQuery.toLowerCase())
          );
        } else {
          // Handle case when it's an object with cycle structure
          return Object.values(semesterSubjects as Record<string, string[]>).some(cycleSubjects => 
            cycleSubjects.some(subject => 
              subject.toLowerCase().includes(searchQuery.toLowerCase())
            )
          );
        }
      });
    });
  };

  return (
    <div className="min-h-screen bg-dark pt-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <Link 
            to="/" 
            className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
        </div>

        <h1 className="text-4xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-purple-600">
          Choose Your Stream
        </h1>
        
        {/* Search functionality */}
        <div className="relative max-w-md mx-auto mb-10">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-white/50" />
          </div>
          <input
            type="text"
            placeholder="Search for subjects or topics..."
            className="w-full py-3 pl-10 pr-4 glass-card rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white/5"
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {getFilteredStreams().map(([key, stream]) => (
            <div key={key} className="glass-card rounded-xl p-8 backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5">
              <h2 className="text-3xl font-bold mb-4 text-center">{stream.name}</h2>
              
              {/* Stream description */}
              <p className="text-white/80 mb-8 text-center">
                {stream.description}
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                {stream.semesters.map((semester) => (
                  <div key={semester} className="relative">
                    <button
                      onClick={() => handleSemesterClick(key, semester)}
                      onMouseEnter={() => setHoveredSemester({stream: key, semester})}
                      onMouseLeave={() => setHoveredSemester(null)}
                      className="w-full p-6 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 hover:from-primary/30 hover:to-primary/10 border border-white/10 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
                    >
                      <div className="flex justify-between items-center">
                        <h3 className="text-xl font-semibold">
                          Semester {semester}
                        </h3>
                        {progress[`${key}-${semester}`] && (
                          <div className="relative h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center" title={`${progress[`${key}-${semester}`]}% complete`}>
                            {progress[`${key}-${semester}`] >= 100 ? (
                              <Check className="h-4 w-4 text-primary" />
                            ) : (
                              <span className="text-xs font-medium">{progress[`${key}-${semester}`]}%</span>
                            )}
                          </div>
                        )}
                      </div>
                    </button>
                    
                    {/* Hover preview */}
                    {hoveredSemester?.stream === key && hoveredSemester?.semester === semester && (
                      <div className="absolute z-10 top-full left-0 mt-2 w-full bg-dark-lighter rounded-xl shadow-xl border border-white/10 p-4 animate-fade-in">
                        <h4 className="text-sm font-semibold mb-2 text-primary">Subjects in this semester:</h4>
                        <ul className="space-y-1">
                          {Array.isArray(stream.subjects[semester]) ? (
                            (stream.subjects[semester] as string[]).map((subject, idx) => (
                              <li key={idx} className="text-sm text-white/80 flex items-center gap-2">
                                <BookOpen className="h-3 w-3 text-primary/70" />
                                {subject}
                              </li>
                            ))
                          ) : (
                            Object.entries(stream.subjects[semester] as Record<string, string[]>).map(([cycle, subjects]) => (
                              <div key={cycle}>
                                <h5 className="text-xs font-medium text-white/60 mt-2 mb-1">{cycle}:</h5>
                                {subjects.map((subject, idx) => (
                                  <li key={idx} className="text-sm text-white/80 flex items-center gap-2 ml-2">
                                    <BookOpen className="h-3 w-3 text-primary/70" />
                                    {subject}
                                  </li>
                                ))}
                              </div>
                            ))
                          )}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Testimonials section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center flex items-center justify-center gap-2">
            <Award className="h-6 w-6 text-primary" />
            Student Testimonials
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="glass-card rounded-xl p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-white/60 mb-3">{testimonial.stream} • {testimonial.year}</p>
                    <p className="text-white/80 text-sm italic">"{testimonial.quote}"</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Study;
