"use client";

import { useEffect, useState } from "react";
import axios from "axios"; // Import axios to make API requests
interface project {
  id: number;
  title: string;
  description: string;
  image?: string; // Change from 'string | null' to 'string | undefined'
  githubUrl?: string; // Change from 'string | null' to 'string | undefined'
  liveUrl?: string; // Change from 'string | null' to 'string | undefined'
}

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [projects, setProjects] = useState<project[]>([]);
 
  // Fetch projects from backend
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("http://localhost:5000/projects"); // Change this to your actual backend URL
        setProjects(response.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("projects");
      if (section) {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on initial load

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="projects" className="py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl md:text-5xl font-bold mb-4 transition-all duration-700 transform ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Projects
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.length > 0 ? (
            projects.map((project, index) => (
              <div
                key={project.id}
                className={`overflow-hidden flex flex-col h-full border border-gray-800 rounded-lg bg-gray-900/50 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-glow ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
                }`}
                style={{ transitionDelay: `${300 + index * 150}ms` }}
              >
                <div className="relative h-48 w-full overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                    {project.title}
                  </h3>
                  <p className="text-base text-gray-400 mb-6">{project.description}</p>
                </div>
                <div className="mt-auto p-6 pt-0 flex gap-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2 rounded-md border border-purple-500/50 text-purple-400 hover:bg-purple-500/10 transition-all duration-300 text-sm"
                  >
                    Code
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white transition-all duration-300 text-sm"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-400">No projects found.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
