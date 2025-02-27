
import Navbar from "@/components/Navbar";
import { Sparkles, Search, Upload, Users, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { BackgroundPaths } from "@/components/ui/background-paths";

const Index = () => {
  const navigate = useNavigate();
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleStartStudy = () => {
    navigate("/study");
  };

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById("features-section");
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-dark">
      {/* Animated background paths */}
      <BackgroundPaths />
      
      <div className="purple-gradient absolute inset-0" />
      <Navbar />
      
      <main className="relative">
        {/* Hero Section */}
        <section 
          aria-label="College Notes Hero Section"
          className="min-h-screen flex items-center justify-center px-6"
        >
          <div className="max-w-7xl mx-auto text-center">
            <div style={{
              animationDelay: "0.2s"
            }} className="inline-flex items-center space-x-2 bg-white/5 px-4 py-2 rounded-full mb-8 animate-fade-up">
              <Sparkles className="w-4 h-4 text-primary" aria-hidden="true" />
              <span className="text-sm font-medium">Built for college students</span>
            </div>
            
            <h1 style={{
              animationDelay: "0.3s"
            }} className="text-8xl font-bold mb-6 animate-fade-up md:text-7xl">
              Your College Notes,<br />
              <span className="text-gradient">At Your Fingertips</span>
            </h1>
            
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-12 animate-fade-up" style={{
              animationDelay: "0.4s"
            }}>
              Upload, organize, and access your college notes.
              Search smarter and collaborate with your peers.
            </p>
            
            <div className="flex items-center justify-center animate-fade-up" style={{
              animationDelay: "0.5s"
            }}>
              <button 
                onClick={handleStartStudy} 
                className="start-study-button px-[40px] py-3 text-white rounded-full font-medium transition-all duration-300 transform hover:scale-110"
                aria-label="Start using the study platform"
              >
                Start Study
              </button>
            </div>

            {/* Scroll Down Indicator */}
            <div 
              className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center cursor-pointer transition-opacity duration-300 ${
                scrollPosition > 100 ? "opacity-0" : "opacity-100"
              }`}
              onClick={scrollToFeatures}
              aria-label="Scroll down to features section"
            >
              <span className="text-white/70 text-sm mb-2">Discover Features</span>
              <ChevronDown className="w-6 h-6 text-primary animate-bounce" aria-hidden="true" />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section 
          id="features-section"
          aria-label="NexusNotes Features"
          className="min-h-screen flex items-center bg-dark-lighter relative px-6"
        >
          <div className="max-w-7xl mx-auto py-24">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-up">
              Features that Empower Your Learning
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {/* Easy Search Feature */}
              <div className="glass-card p-8 rounded-xl text-center animate-fade-up hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-8 h-8 text-primary" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Smart Search</h3>
                <p className="text-white/80">
                  Quickly find the notes you need with our intuitive search functionality. Filter by subject, date, or keywords.
                </p>
              </div>

              {/* Easy Upload Feature */}
              <div className="glass-card p-8 rounded-xl text-center animate-fade-up hover:scale-105 transition-transform duration-300" style={{
              animationDelay: "0.2s"
            }}>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Upload className="w-8 h-8 text-primary" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Easy Upload & Access</h3>
                <p className="text-white/80">
                  Upload your notes in any format and access them from anywhere. Your study materials are always at your fingertips.
                </p>
              </div>

              {/* Collaboration Feature */}
              <div className="glass-card p-8 rounded-xl text-center animate-fade-up hover:scale-105 transition-transform duration-300" style={{
              animationDelay: "0.3s"
            }}>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-primary" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Peer Collaboration</h3>
                <p className="text-white/80">
                  Share notes with classmates, collaborate on study materials, and learn together in a connected environment.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
