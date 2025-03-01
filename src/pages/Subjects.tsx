
import { Link, useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Folder, ChevronRight, FileText, ChevronDown, ChevronUp, Clock, File } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const streamData = {
  cse: {
    name: "CSE STREAM",
    subjects: {
      1: {
        "Physics Cycle": [
          "Engineering Mathematics - I",
          "Engineering Physics",
          "Basic Electronics",
          "Programming Fundamentals",
          "Electric Circuits",
          "Digital Systems",
          "Physics Lab",
          "Mathematics Lab",
          "Technical Writing",
          "Computer Networks"
        ],
        "Chemistry Cycle": [
          "Engineering Chemistry",
          "English Communication",
          "Mechanical Engineering",
          "Environmental Science",
          "Data Structures",
          "Discrete Mathematics",
          "Chemistry Lab",
          "Communication Skills Lab",
          "Computer Organization",
          "Technical Drawing"
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
          "Workshop Practice",
          "Mechanical Systems",
          "Thermodynamics",
          "Physics Lab",
          "Electrical Lab",
          "Technical Drawing",
          "Engineering Mechanics"
        ],
        "Chemistry Cycle": [
          "Engineering Chemistry",
          "Professional Communication",
          "Basic Engineering",
          "Environmental Studies",
          "Material Science",
          "Manufacturing Processes",
          "Chemistry Lab",
          "Communication Lab",
          "Workshop Practice",
          "Engineering Graphics"
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

const SubjectCard = ({ subject }: { subject: string }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Random number of files between 5 and 25
  const fileCount = Math.floor(Math.random() * 20) + 5;
  // Random number of days ago updated (1-14 days)
  const daysAgo = Math.floor(Math.random() * 14) + 1;

  return (
    <motion.div 
      className="glass-card rounded-xl overflow-hidden bg-gradient-to-br from-white/10 to-white/5 hover:from-primary/20 hover:to-primary/5 transition-all duration-300 cursor-pointer shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-primary/20"
      whileHover={{ scale: 1.03 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 text-white">{subject}</h3>
        <div className="flex items-center justify-between text-sm text-white/60">
          <div className="flex items-center gap-1">
            <File className="w-3.5 h-3.5" />
            <span>{fileCount} Files</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            <span>{daysAgo}d ago</span>
          </div>
        </div>
      </div>

      {isHovered && (
        <motion.div 
          className="bg-dark/90 p-3 border-t border-white/10"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
        >
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm">
              <FileText className="w-4 h-4 text-primary" />
              <span>Lecture Notes</span>
            </div>
            <div className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm">
              <FileText className="w-4 h-4 text-primary" />
              <span>Practice Problems</span>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

const CycleAccordion = ({ 
  title, 
  subjects, 
  isOpen, 
  toggleAccordion 
}: { 
  title: string; 
  subjects: string[]; 
  isOpen: boolean; 
  toggleAccordion: () => void;
}) => {
  return (
    <div className="mb-6">
      <button 
        onClick={toggleAccordion}
        className="w-full flex items-center justify-between bg-gradient-to-r from-primary/20 to-transparent p-4 rounded-lg hover:from-primary/30 transition-all duration-300"
      >
        <div className="flex items-center gap-3">
          <Folder className="w-6 h-6 text-primary" />
          <h2 className="text-2xl font-bold">{title}</h2>
        </div>
        {isOpen ? 
          <ChevronUp className="w-5 h-5 text-white/80" /> : 
          <ChevronDown className="w-5 h-5 text-white/80" />
        }
      </button>
      
      {isOpen && (
        <motion.div 
          className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3 }}
        >
          {subjects.map((subject, index) => (
            <SubjectCard key={index} subject={subject} />
          ))}
        </motion.div>
      )}
    </div>
  );
};

const Subjects = () => {
  const { stream, semester } = useParams();
  const navigate = useNavigate();
  const streamInfo = stream && streamData[stream as keyof typeof streamData];
  const semesterNumber = semester ? parseInt(semester) as 1 | 2 | 3 | 4 | 5 | 6 : null;
  const semesterContent = streamInfo?.subjects[semesterNumber!];

  const [openAccordion, setOpenAccordion] = useState<string | null>("Physics Cycle");

  if (!streamInfo || !semesterNumber || !semesterContent) {
    return <div>Invalid stream or semester</div>;
  }

  const toggleAccordion = (cycleTitle: string) => {
    setOpenAccordion(openAccordion === cycleTitle ? null : cycleTitle);
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

        <div className="space-y-6">
          {semesterNumber === 1 ? (
            // Display as accordions for semester 1
            Object.entries(semesterContent as Record<string, string[]>).map(([cycle, subjects]) => (
              <CycleAccordion 
                key={cycle}
                title={cycle}
                subjects={subjects}
                isOpen={openAccordion === cycle}
                toggleAccordion={() => toggleAccordion(cycle)}
              />
            ))
          ) : (
            // For other semesters, maintain the original grid display
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(semesterContent as string[]).map((subject, index) => (
                <motion.div 
                  key={index}
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
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Subjects;
