
import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const streamData = {
  cse: {
    name: "CSE STREAM",
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

const Subjects = () => {
  const { stream, semester } = useParams();
  const streamInfo = stream && streamData[stream as keyof typeof streamData];
  const semesterNumber = semester ? parseInt(semester) as 1 | 2 | 3 | 4 | 5 | 6 : null;
  const semesterSubjects = streamInfo?.subjects[semesterNumber!];

  if (!streamInfo || !semesterNumber || !semesterSubjects) {
    return <div>Invalid stream or semester</div>;
  }

  return (
    <div className="min-h-screen bg-dark pt-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <Link 
            to="/study" 
            className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Streams
          </Link>
        </div>

        <h1 className="text-4xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-purple-600">
          {streamInfo.name} - Semester {semesterNumber}
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {semesterSubjects.map((subject) => (
            <div 
              key={subject}
              className="glass-card rounded-xl p-6 backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 hover:from-primary/20 hover:to-primary/5 transition-all duration-300 cursor-pointer transform hover:scale-105"
            >
              <h3 className="text-xl font-semibold mb-4">{subject}</h3>
              <div className="space-y-2">
                <div className="text-sm text-white/60">12 Files</div>
                <div className="text-sm text-white/60">Last updated: 2 days ago</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Subjects;
