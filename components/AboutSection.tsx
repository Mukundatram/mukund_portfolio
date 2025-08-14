
import React from 'react';

const certifications = [
  'Finalist - Smart India Hackathon 2023',
  'Runner-up – Innovo Hackathon',
  'Master Machine Learning for Data Science & AI: Beginner to Advanced – CodeBasics',
  'Power BI Crash Course - CoursePe',
];

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white">About Me</h2>
        <div className="w-24 h-1 bg-cyan-500 mx-auto mt-4"></div>
      </div>
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Professional Summary */}
        <div>
          <h3 className="text-2xl font-bold text-cyan-400 mb-4 text-center">Professional Summary</h3>
          <p className="text-lg text-slate-300 leading-relaxed text-center">
            As a Final-year Computer Science student with a great enthusiasm for Machine Learning and Data Science, I've gained a unique blend of hands-on experience in data-driven decision-making, predictive modeling, and business analytics through various projects and hackathons. My work area has been in MLOps, GenAI, and cloud deployments, where I have utilized my skills to transform raw data into actionable insights while justifying the complexity of modeling an effective predictive system.
          </p>
        </div>

        {/* Education */}
        <div className="bg-slate-800/50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-cyan-400 mb-4">Education</h3>
          <div className="text-lg text-slate-300">
            <p className="font-semibold text-white">B.E. in Computer Science & Engineering</p>
            <p>Sant Gajanan Maharaj College of Engineering, Shegaon</p>
            <p className="text-slate-400 italic mb-4">(2022 - 2026)</p>
            <ul className="list-disc list-inside space-y-2 text-slate-400">
              <li><span className="text-slate-300">Ex-Technical Advisor at ACM, SSGMCE</span></li>
              <li><span className="text-slate-300">Member & Mentor at FabLab, SSGMCE</span></li>
            </ul>
          </div>
        </div>

        {/* Certifications */}
        <div id="certifications" className="bg-slate-800/50 rounded-lg p-8 scroll-mt-20">
          <h3 className="text-2xl font-bold text-cyan-400 mb-4">Certifications & Achievements</h3>
           <ul className="space-y-4">
            {certifications.map((cert, index) => (
              <li key={index} className="flex items-center text-lg text-slate-300">
                <svg className="w-6 h-6 mr-3 text-cyan-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm4 0a1 1 0 012 0v6a1 1 0 11-2 0V8z" clipRule="evenodd"></path></svg>
                {cert}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
