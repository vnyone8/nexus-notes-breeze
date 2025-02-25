
import Navbar from "@/components/Navbar";
import { Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  const handleStartStudy = () => {
    navigate("/study");
  };

  const handleLearnMore = () => {
    navigate("/features");
  };

  return (
    <div className="min-h-screen bg-dark">
      <div className="purple-gradient absolute inset-0" />
      <Navbar />
      
      <main className="relative">
        {/* Hero Section */}
        <div className="pt-32 pb-16 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-white/5 px-4 py-2 rounded-full mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Built for college students</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              Your College Notes,<br />
              At Your Fingertips
            </h1>
            
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-12 animate-fade-up" style={{ animationDelay: "0.4s" }}>
              Upload, organize, and access your college notes.
              Search smarter and collaborate with your peers.
            </p>
            
            <div className="flex items-center justify-center space-x-4 animate-fade-up" style={{ animationDelay: "0.5s" }}>
              <button className="button-primary" onClick={handleStartStudy}>
                Start Study
              </button>
              <button className="button-secondary" onClick={handleLearnMore}>
                Learn More
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
