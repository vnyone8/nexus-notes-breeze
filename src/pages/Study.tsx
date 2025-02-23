
import { Link } from "react-router-dom";

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
  return (
    <div className="min-h-screen bg-dark pt-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-center">Choose Your Stream</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(streamData).map(([key, stream]) => (
            <div key={key} className="glass-card rounded-xl p-6">
              <h2 className="text-2xl font-bold mb-6">{stream.name}</h2>
              <div className="grid grid-cols-2 gap-4">
                {stream.semesters.map((semester) => (
                  <div key={semester} className="bg-white/5 rounded-lg p-4">
                    <h3 className="text-lg font-semibold mb-3">Semester {semester}</h3>
                    <ul className="space-y-2">
                      {stream.subjects[semester].map((subject) => (
                        <li key={subject} className="text-sm text-white/80 hover:text-white cursor-pointer">
                          {subject}
                        </li>
                      ))}
                    </ul>
                  </div>
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
