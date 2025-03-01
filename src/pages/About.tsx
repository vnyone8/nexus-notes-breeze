
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-dark pt-20 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <Link 
            to="/" 
            className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
        </div>
        <h1 className="text-4xl font-bold mb-8">About PurpleNotes</h1>
        <div className="space-y-6 text-white/80">
          <p>
            PurpleNotes is a revolutionary educational platform designed specifically for college students, 
            providing a centralized hub for academic resources and collaborative learning. Our platform 
            transforms the way students access, organize, and share academic materials.
          </p>
          <p>
            Born from the understanding that modern education requires modern solutions, PurpleNotes 
            bridges the gap between traditional note-taking and digital innovation. We offer a 
            comprehensive solution for both CSE and non-CSE streams, ensuring that every student 
            has access to quality study materials.
          </p>
          <p>
            Our mission is to empower students with tools that make learning more efficient and 
            collaborative. Whether you're looking for lecture notes, study guides, or practice materials, 
            PurpleNotes provides an intuitive platform to enhance your academic journey.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
