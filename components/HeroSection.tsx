
import React from 'react';
interface HeroSectionProps {
    onViewResume: () => void;}


const HeroSection: React.FC<HeroSectionProps> = ({ onViewResume }) => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center text-center">
      <div className="flex flex-col md:flex-row items-center gap-12 px-4">
        <div className="md:order-2">
            <img 
                src="https://media.licdn.com/dms/image/v2/D4D12AQH_659RqkP-XQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1736775500834?e=2147483647&v=beta&t=SfutwudFpwQPvOjzoWrKYx5myRuBSK1SRYhvqbsJKiU" 
                alt="Mukund V. Atram" 
                className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-cyan-500 shadow-2xl shadow-cyan-500/20"
            />
        </div>
        <div className="md:order-1 md:text-left">
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-4">
                Mukund V. Atram
            </h1>
            <p className="text-xl md:text-2xl font-medium text-cyan-400 mb-6">
                ML Engineer | Data Scientist | Data Analyst | AI Engineer
            </p>
            <p className="max-w-xl text-lg text-slate-400 mb-8">
                A final-year Computer Science student transforming raw data into actionable insights and building effective predictive systems.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
                <a href="#projects" className="bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 transform hover:-translate-y-1">
                    View My Projects
                </a>
                <a href="#contact" className="bg-slate-700 hover:bg-slate-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300">
                    Get In Touch
                </a>                
                <button onClick={onViewResume} className="bg-slate-700 hover:bg-slate-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300">
                    View Resume
                </button>
            </div>
        </div>
      </div>
    </section>
  );
};


export default HeroSection;
