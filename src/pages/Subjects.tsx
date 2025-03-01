
import { Link, useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { SubjectContent } from "@/components/SubjectContent";

const subjectContent = {
  "Programming Fundamentals": [
    {
      title: "Introduction to Programming",
      type: "notes",
      content: "Learn the basics of programming concepts, variables, data types, and control structures."
    },
    {
      title: "Video Tutorial: Getting Started",
      type: "video",
      content: "A comprehensive video guide to help you get started with programming.",
      link: "https://example.com/video"
    },
    {
      title: "Practice Quiz",
      type: "quiz",
      content: "Test your understanding of basic programming concepts.",
      link: "https://example.com/quiz"
    },
    {
      title: "Additional Resources",
      type: "reference",
      content: "Helpful links and references for further learning.",
      link: "https://example.com/resources"
    }
  ]
};

const Subjects = () => {
  const { stream, semester } = useParams();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-purple-950">
      <div className="container mx-auto px-4 py-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-purple-200 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </button>
        <SubjectContent 
          subject="Programming Fundamentals"
          sections={subjectContent["Programming Fundamentals"]}
        />
      </div>
    </div>
  );
};

export default Subjects;
