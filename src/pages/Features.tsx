
import { Search, Upload, Users } from "lucide-react";

const Features = () => {
  return (
    <div className="min-h-screen bg-dark">
      <div className="purple-gradient absolute inset-0" />
      
      <main className="relative animate-fade-in">
        <div className="py-24 px-6 bg-dark-lighter relative">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-up">
              Features that Empower Your Learning
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {/* Easy Search Feature */}
              <div className="glass-card p-8 rounded-xl text-center animate-fade-up hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Smart Search</h3>
                <p className="text-white/80">
                  Quickly find the notes you need with our intuitive search functionality. Filter by subject, date, or keywords.
                </p>
              </div>

              {/* Easy Upload Feature */}
              <div className="glass-card p-8 rounded-xl text-center animate-fade-up hover:scale-105 transition-transform duration-300" style={{ animationDelay: "0.2s" }}>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Upload className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Easy Upload & Access</h3>
                <p className="text-white/80">
                  Upload your notes in any format and access them from anywhere. Your study materials are always at your fingertips.
                </p>
              </div>

              {/* Collaboration Feature */}
              <div className="glass-card p-8 rounded-xl text-center animate-fade-up hover:scale-105 transition-transform duration-300" style={{ animationDelay: "0.3s" }}>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Peer Collaboration</h3>
                <p className="text-white/80">
                  Share notes with classmates, collaborate on study materials, and learn together in a connected environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Features;
