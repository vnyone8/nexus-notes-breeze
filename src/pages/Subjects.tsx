
import { Link, useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Folder, ChevronRight, FileText } from "lucide-react";
import { motion } from "framer-motion";

const streamData = {
  cse: {
    name: "CSE STREAM",
    subjects: {
      1: {
        "Physics Cycle": [
          "Engineering Mathematics - I",
          "Engineering Physics",
          "Basic Electronics",
          "Programming Fundamentals"
        ],
        "Chemistry Cycle": [
          "Engineering Chemistry",
          "English Communication",
          "Mechanical Engineering",
          "Environmental Science"
        ]
      },
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
      1: {
        "Physics Cycle": [
          "Engineering Mathematics - I",
          "Engineering Physics",
          "Electrical Engineering",
          "Workshop Practice"
        ],
        "Chemistry Cycle": [
          "Engineering Chemistry",
          "Professional Communication",
          "Basic Engineering",
          "Environmental Studies"
        ]
      },
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
  const navigate = useNavigate();
  const streamInfo = stream && streamData[stream as keyof typeof streamData];
  const semesterNumber = semester ? parseInt(semester) as 1 | 2 | 3 | 4 | 5 | 6 : null;
  const semesterContent = streamInfo?.subjects[semesterNumber!];

  if (!streamInfo || !semesterNumber || !semesterContent) {
    return <div>Invalid stream or semester</div>;
  }

  const renderSubjects = (subjects: string[]) => {
    return subjects.map((subject) => (
      <motion.div 
        key={subject}
        whileHover={{ scale: 1.05 }}
        className="glass-card rounded-xl p-8 backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 hover:from-primary/20 hover:to-primary/5 transition-all duration-300 cursor-pointer shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-primary/20"
      >
        <h3 className="text-2xl font-semibold mb-4">{subject}</h3>
        <div className="space-y-4">
          <div className="text-sm text-white/60">12 Files</div>
          <div className="text-sm text-white/60">Last updated: 2 days ago</div>
          <div className="flex flex-col space-y-2 mt-4">
            <div className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
              <FileText className="w-4 h-4 text-primary" />
              <span>Lecture Notes.pdf</span>
            </div>
            <div className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
              <FileText className="w-4 h-4 text-primary" />
              <span>Practice Problems.pdf</span>
            </div>
          </div>
        </div>
      </motion.div>
    ));
  };

  const handleCycleClick = (cycle: string) => {
    // For simplicity, we'll navigate to the same URL but will highlight the cycle in the UI
    // In a real application, you might want to use URL parameters or a state management solution
    const element = document.getElementById(cycle);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-dark pt-24 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb and Back Button */}
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <Link 
              to="/study" 
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-4"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Streams
            </Link>
            
            <div className="flex items-center gap-2 text-white/60">
              <Link to="/study" className="hover:text-primary transition-colors">Study</Link>
              <ChevronRight className="w-4 h-4" />
              <Link to={`/study`} className="hover:text-primary transition-colors">{streamInfo.name}</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white">Semester {semesterNumber}</span>
            </div>
          </div>
        </div>

        <h1 className="text-4xl font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-purple-600">
          {streamInfo.name} - Semester {semesterNumber}
        </h1>

        <div className="space-y-12">
          {semesterNumber === 1 ? (
            <>
              {/* Display the cycle cards only for semester 1 */}
              <div className="grid md:grid-cols-2 gap-8 mb-16">
                {Object.entries(semesterContent as Record<string, string[]>).map(([cycle, _]) => (
                  <motion.div
                    key={cycle}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="glass-card rounded-xl p-10 text-center shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-primary/20 cursor-pointer transition-all duration-300 bg-gradient-to-br from-white/10 to-white/5 hover:from-primary/20 hover:to-primary/5"
                    onClick={() => handleCycleClick(cycle)}
                  >
                    <h2 className="text-3xl font-bold mb-4">{cycle}</h2>
                    <p className="text-white/70 mb-6">
                      {cycle === "Physics Cycle" 
                        ? "Core physics and mathematical foundations for engineering" 
                        : "Chemistry-focused curriculum with complementary engineering skills"}
                    </p>
                    <div className="inline-block bg-primary/20 px-6 py-3 rounded-full text-white font-medium hover:bg-primary/30 transition-colors">
                      View Subjects
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Display subjects grouped by cycle */}
              {Object.entries(semesterContent as Record<string, string[]>).map(([cycle, subjects]) => (
                <div key={cycle} id={cycle} className="space-y-6">
                  <div className="flex items-center gap-3 text-3xl font-bold text-white/90 mb-8 border-b border-white/10 pb-4">
                    <Folder className="w-8 h-8 text-primary" />
                    <h2>{cycle}</h2>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {renderSubjects(subjects)}
                  </div>
                </div>
              ))}
            </>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {renderSubjects(semesterContent as string[])}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Subjects;
