import { useState } from "react";
import { motion } from "framer-motion";
import { FileText, Video, BookOpen, HelpCircle, ChevronRight } from "lucide-react";

interface ContentSection {
  title: string;
  type: "notes" | "video" | "quiz" | "reference";
  content: string;
  link?: string;
}

interface SubjectContentProps {
  subject: string;
  sections: ContentSection[];
}

export const SubjectContent = ({ subject, sections }: SubjectContentProps) => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const getIcon = (type: string) => {
    switch (type) {
      case "notes":
        return <FileText className="w-5 h-5" />;
      case "video":
        return <Video className="w-5 h-5" />;
      case "quiz":
        return <HelpCircle className="w-5 h-5" />;
      case "reference":
        return <BookOpen className="w-5 h-5" />;
      default:
        return <FileText className="w-5 h-5" />;
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-purple-200 mb-8">{subject}</h1>
      <div className="space-y-4">
        {sections.map((section) => (
          <motion.div
            key={section.title}
            className="bg-black/50 backdrop-blur-sm rounded-lg overflow-hidden border border-purple-800/50"
            initial={false}
          >
            <button
              onClick={() => setActiveSection(activeSection === section.title ? null : section.title)}
              className="w-full p-4 flex items-center justify-between text-purple-200 hover:text-white transition-colors"
            >
              <div className="flex items-center gap-3">
                {getIcon(section.type)}
                <span className="font-medium">{section.title}</span>
              </div>
              <ChevronRight
                className={`w-5 h-5 transition-transform ${activeSection === section.title ? 'rotate-90' : ''}`}
              />
            </button>
            <motion.div
              initial={{ height: 0 }}
              animate={{
                height: activeSection === section.title ? "auto" : 0,
                opacity: activeSection === section.title ? 1 : 0
              }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <div className="p-4 pt-0 text-purple-100">
                <p className="text-sm">{section.content}</p>
                {section.link && (
                  <a
                    href={section.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-sm text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    Learn more →
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};