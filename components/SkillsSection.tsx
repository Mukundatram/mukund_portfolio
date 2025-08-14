
import React from 'react';

const skillCategories = [
  {
    title: 'Programming',
    skills: ['Python', 'SQL', 'Java', 'C', 'JavaScript'],
  },
  {
    title: 'Machine Learning & AI',
    skills: ['Supervised & Unsupervised Learning', 'Deep Learning', 'PyTorch', 'LangChain', 'LangGraph', 'Hugging Face', 'Agentic AI', 'LLMs Predictive Modeling'],
  },
  {
    title: 'Data Science & Analytics',
    skills: ['Data Cleaning', 'Feature Engineering', 'EDA', 'Statistical Analysis', 'A/B Testing', 'Data Visualization (Matplotlib, Seaborn, Power BI)'],
  },
  {
    title: 'Databases',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'VectorDB', 'ElasticSearch'],
  },
  {
    title: 'MLOps & Deployment',
    skills: ['FastAPI', 'Streamlit', 'Docker', 'CI/CD Pipelines', 'langsmith', 'Kubernetes'],
  },
  {
    title: 'Version Control & OS',
    skills: ['Git', 'Unix'],
  },
];


const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white">Skills & Technologies</h2>
        <div className="w-24 h-1 bg-cyan-500 mx-auto mt-4"></div>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category) => (
          <div key={category.title} className="bg-slate-800 rounded-lg p-6 transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/10">
            <h3 className="text-xl font-bold text-cyan-400 mb-4 border-b-2 border-slate-700 pb-2">{category.title}</h3>
            <ul className="space-y-2">
              {category.skills.map((skill) => (
                <li key={skill} className="text-slate-300 flex items-center">
                   <svg className="w-4 h-4 mr-2 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
