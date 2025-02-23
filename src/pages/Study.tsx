
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const streamData = {
  cse: {
    name: "CSE STREAM",
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

const Study = () => {
  const navigate = useNavigate();

  const handleSemesterClick = (stream: string, semester: number) => {
    navigate(`/subjects/${stream}/${semester}`);
  };

  return (
    <div className="min-h-screen bg-dark pt-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <Link 
            to="/" 
            className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
        </div>

        <h1 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-purple-600">
          Choose Your Stream
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(streamData).map(([key, stream]) => (
            <div key={key} className="glass-card rounded-xl p-8 backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5">
              <h2 className="text-3xl font-bold mb-8 text-center">{stream.name}</h2>
              <div className="grid grid-cols-2 gap-6">
                {stream.semesters.map((semester) => (
                  <button
                    key={semester}
                    onClick={() => handleSemesterClick(key, semester)}
                    className="p-6 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 hover:from-primary/30 hover:to-primary/10 border border-white/10 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
                  >
                    <h3 className="text-xl font-semibold">
                      Semester {semester}
                    </h3>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Study;
