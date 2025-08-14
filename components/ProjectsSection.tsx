
import React from 'react';
import type { Project } from '../types';
import { GitHubIcon } from './icons';

const projects: Project[] = [
  {
    id: 1,
    title: 'Health Insurance Premium Prediction',
    description: 'Engineered an ML model (XGBoost) with 98% accuracy, leveraging Power BI for visualization. This project highlights my data analysis and ETL pipeline skills.',
    imageUrl: 'https://picsum.photos/seed/insurance/500/300',
    technologies: ['XGBoost', 'Power BI', 'Python', 'Spark', 'Informatica'],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    id: 2,
    title: 'GenAI-Powered QnA System',
    description: 'Developed an LLM-based system using Gemini API, FastAPI, and Streamlit, which improved answer accuracy by 30%. This project demonstrates cloud-based AI deployment and API integration.',
    imageUrl: 'https://picsum.photos/seed/genai/500/300',
    technologies: ['Gemini API', 'FastAPI', 'Streamlit', 'AWS/Azure', 'Python'],
    liveUrl: '#',
    repoUrl: '#',
  },
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className="bg-slate-800 rounded-lg overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 transform hover:-translate-y-2">
    <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
      <p className="text-slate-400 mb-4 flex-grow">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech) => (
          <span key={tech} className="bg-slate-700 text-cyan-400 text-xs font-semibold px-2.5 py-1 rounded-full">
            {tech}
          </span>
        ))}
      </div>
      <div className="mt-auto flex items-center gap-4 pt-4 border-t border-slate-700">
        {project.repoUrl && (
          <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors">
            <GitHubIcon className="w-6 h-6" />
            <span>Code</span>
          </a>
        )}
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 font-semibold">
            Live Demo
          </a>
        )}
      </div>
    </div>
  </div>
);

const ProjectsSection: React.FC = () => {
  return (
    <>
      {/* Experience Section */}
      <section id="experience" className="py-20 md:py-32 bg-slate-900/70 scroll-mt-20">
          <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-white">Work Experience</h2>
                  <div className="w-24 h-1 bg-cyan-500 mx-auto mt-4"></div>
              </div>

              <div className="bg-slate-800 rounded-lg shadow-lg p-8">
                  <div className="flex justify-between items-start mb-2 flex-wrap">
                      <div className="mb-2 md:mb-0">
                          <h3 className="text-xl font-bold text-white">Frontend Developer</h3>
                          <p className="text-cyan-400 font-semibold">Smart India Hackathon Finalist | Innovo Hackathon Runner-up</p>
                      </div>
                      <span className="text-slate-400 text-left md:text-right w-full md:w-auto">Feb 2024</span>
                  </div>
                   <p className="text-slate-400 mb-4">SSGMCE, Shegaon</p>

                  <ul className="list-disc list-inside space-y-3 text-slate-300">
                      <li>
                          Led embedded firmware development in C for Arduino, integrating medical sensors (ECG, SpO2) for real-time health monitoring.
                          <ul className="list-['-_'] list-inside pl-6 mt-2 text-slate-400 space-y-1">
                             <li>System-Level Integration: Optimized sensor-microcontroller communication, reducing latency by 30%.</li>
                             <li>Relevance to Qualcomm: Direct experience with hardware-software co-design and IoT systems.</li>
                          </ul>
                      </li>
                      <li>
                          Frontend Development: Built a Hospital Management System using React (runner-up at Innovo Hackathon).
                      </li>
                  </ul>
              </div>
          </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 md:py-32">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">Projects Showcase</h2>
          <div className="w-24 h-1 bg-cyan-500 mx-auto mt-4"></div>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </>
  );
};

export default ProjectsSection;
