
import React, { useRef, useState } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const resumeData = {
    name: 'Mukund V. Atram',
    titles: ['ML Engineer', 'Data Scientist', 'Data Analyst', 'AI Engineer'],
    contact: {
        linkedin: 'LinkedIn',
        github: 'GitHub',
        email: 'mukundvatram@gmail.com',
        phone: '+91 9356803605',
        linkedinUrl: 'https://www.linkedin.com/in/mukund-atram/',
        githubUrl: 'https://github.com/mukund-v-atram',
    },
    summary: "As a Final-year Computer Science student with a great enthusiasm for Machine Learning and Data Science, I've gained a unique blend of hands-on experience in data-driven decision-making, predictive modeling, and business analytics through various projects and hackathons. My work area has been in MLOps, GenAI, and cloud deployments, where I have utilized my skills to transform raw data into actionable insights while justifying the complexity of modeling an effective predictive system.",
    skills: [
        { category: 'Programming', details: 'Python, SQL, Java, C, JavaScript.' },
        { category: 'Machine Learning & AI', details: 'Supervised & Unsupervised Learning, Deep Learning, PyTorch, LangChain, LangGraph, Hugging Face, Agentic AI, LLMs Predictive Modeling, PyTorch,' },
        { category: 'Data Science & Analytics', details: 'Data Cleaning, Feature Engineering, EDA, Statistical Analysis, A/B Testing, Data Visualization (Matplotlib, Seaborn, Power BI)' },
        { category: 'Databases', details: 'MySQL, PostgreSQL, MongoDB, VectorDB, ElasticSearch.' },
        { category: 'MLOps & Deployment', details: 'FastAPI, Streamlit, Docker, CI/CD Pipelines, langsmith, Kubernetes.' },
        { category: 'Version Control & OS', details: 'Git, Unix' },
    ],
    experience: [
        {
            title: 'Frontend Developer',
            company: 'Smart India Hackathon Finalist | Innovo Hackathon Runner-up – SSGMCE, Shegaon',
            date: 'Feb 2024',
            points: [
                'Led embedded firmware development in C for Arduino, integrating medical sensors (ECG, SpO2) for real-time health monitoring.',
                { 'System-Level Integration': 'Optimized sensor-microcontroller communication, reducing latency by 30%.' },
                { 'Relevance to Qualcomm': 'Direct experience with hardware-software co-design and IoT systems.' },
                'Frontend Development: Built a Hospital Management System using React (runner-up at Innovo Hackathon)'
            ]
        }
    ],
    projects: [
        {
            title: 'Health Insurance Premium Prediction',
            liveDemo: '#',
            points: [
                'Engineered an ML model (XGBoost) with 98% accuracy, leveraging Power BI for visualization.',
                { 'Relevance': 'Highlights data analysis and ETL pipeline skills (Spark/Informatica).' }
            ]
        },
        {
            title: 'GenAI-Powered QnA System',
            liveDemo: '#',
            points: [
                'Developed an LLM-based system using Gemini API, FastAPI, and Streamlit, improving answer accuracy by 30%.',
                { 'Relevance': 'Demonstrates cloud-based AI deployment (AWS/Azure) and API integration.' }
            ]
        }
    ],
    education: {
        degree: 'B.E. in Computer Science & Engineering',
        college: 'Sant Gajanan Maharaj College of Engineering, Shegaon',
        date: '2022 - 2026',
        points: [
            'Ex-Technical Advisor at ACM, SSGMCE',
            'Member & Mentor at FabLab, SSGMCE'
        ]
    },
    certifications: [
        'Finalist - Smart India Hackathon 2023',
        'Runner-up – Innovo Hackathon',
        'Master Machine Learning for Data Science & AI: Beginner to Advanced – CodeBasics',
        'Power BI Crash Course - CoursePe'
    ]
};

const Section: React.FC<{ title: string; children: React.ReactNode; className?: string }> = ({ title, children, className = '' }) => (
    <div className={`mb-6 ${className}`}>
        <h2 className="text-sm font-bold text-cyan-800 border-b border-slate-300 pb-1 mb-3 uppercase tracking-widest">{title}</h2>
        {children}
    </div>
);

interface ResumeProps {
    onBack: () => void;
}

const Resume: React.FC<ResumeProps> = ({ onBack }) => {
    const resumeRef = useRef<HTMLDivElement>(null);
    const [isDownloading, setIsDownloading] = useState(false);

    const handleDownload = () => {
        const input = resumeRef.current;
        if (!input || isDownloading) return;

        setIsDownloading(true);
        html2canvas(input, {
            scale: 2, // for better quality
            useCORS: true,
        }).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF({
                orientation: canvas.width > canvas.height ? 'l' : 'p',
                unit: 'px',
                format: [canvas.width, canvas.height],
                hotfixes: ["px_scaling"], // important for px units
            });
            pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
            pdf.save('Mukund_Atram_Resume.pdf');
        }).catch(err => {
            console.error("Failed to generate PDF", err);
            alert("An error occurred while generating the PDF.");
        }).finally(() => {
            setIsDownloading(false);
        });
    };

    return (
        <div className="bg-slate-200 p-4 md:p-8 min-h-screen font-sans">
             <div ref={resumeRef} className="max-w-4xl mx-auto bg-white text-slate-800 shadow-2xl p-6 md:p-10">
                <header className="text-center mb-8 border-b border-slate-200 pb-6">
                    <h1 className="text-4xl font-bold text-slate-900">{resumeData.name}</h1>
                    <p className="text-md text-slate-600 mt-1">{resumeData.titles.join(' | ')}</p>
                    <div className="flex justify-center flex-wrap gap-x-4 gap-y-1 text-sm mt-3">
                        <a href={resumeData.contact.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{resumeData.contact.linkedin}</a>
                        <span>|</span>
                        <a href={resumeData.contact.githubUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{resumeData.contact.github}</a>
                        <span>|</span>
                        <a href={`mailto:${resumeData.contact.email}`} className="text-blue-600 hover:underline">{resumeData.contact.email}</a>
                        <span>|</span>
                        <span className="text-slate-600">{resumeData.contact.phone}</span>
                    </div>
                </header>

                <main>
                    <Section title="Professional Summary">
                        <p className="text-slate-700 leading-relaxed">{resumeData.summary}</p>
                    </Section>
                    
                    <Section title="Skills & Technologies">
                        <ul className="space-y-1 text-slate-700 text-sm">
                            {resumeData.skills.map(skill => (
                                <li key={skill.category}><strong className="font-semibold text-slate-800">{skill.category}:</strong> {skill.details}</li>
                            ))}
                        </ul>
                    </Section>
                    
                    <Section title="Work Experience">
                         {resumeData.experience.map((exp, i) => (
                            <div key={i} className="mb-4">
                                <h3 className="font-bold text-lg text-cyan-700">{exp.title}</h3>
                                <div className="flex justify-between items-baseline flex-wrap">
                                   <p className="font-semibold text-slate-800">{exp.company}</p>
                                   <p className="text-sm text-slate-500 font-medium">{exp.date}</p>
                                </div>
                                <ul className="list-disc list-outside pl-5 mt-2 space-y-1 text-slate-700">
                                    {exp.points.map((point, j) => {
                                        if(typeof point === 'string') {
                                            return <li key={j}>{point}</li>
                                        }
                                        const key = Object.keys(point)[0];
                                        const value = (point as any)[key];
                                        return <li key={j} className="ml-4"><strong className="font-semibold">{key}:</strong> {value}</li>
                                    })}
                                </ul>
                            </div>
                        ))}
                    </Section>
                    
                    <Section title="Projects">
                        {resumeData.projects.map((proj, i) => (
                            <div key={i} className="mb-4">
                                <div className="flex items-baseline gap-4">
                                   <h3 className="font-bold text-lg text-cyan-700">{proj.title}</h3>
                                   <a href={proj.liveDemo} className="text-blue-600 hover:underline text-sm font-semibold">Live Demo</a>
                                </div>
                                 <ul className="list-disc list-outside pl-5 mt-1 space-y-1 text-slate-700">
                                    {proj.points.map((point, j) => {
                                        if(typeof point === 'string') {
                                            return <li key={j}>{point}</li>
                                        }
                                        const key = Object.keys(point)[0];
                                        const value = (point as any)[key];
                                        return <li key={j} className="ml-4"><strong className="font-semibold">{key}:</strong> {value}</li>
                                    })}
                                </ul>
                            </div>
                        ))}
                    </Section>

                    <Section title="Education">
                        <div>
                            <div className="flex justify-between items-baseline flex-wrap">
                                <h3 className="font-bold text-lg text-slate-800">{resumeData.education.degree}</h3>
                                <p className="text-sm text-slate-500 font-medium">{resumeData.education.date}</p>
                            </div>
                            <p className="text-slate-600">{resumeData.education.college}</p>
                            <ul className="list-disc list-outside pl-5 mt-2 space-y-1 text-slate-700">
                               {resumeData.education.points.map((point, i) => <li key={i}>{point}</li>)}
                            </ul>
                        </div>
                    </Section>
                    
                    <Section title="Certifications & Achievements">
                        <ul className="list-disc list-outside pl-5 space-y-1 text-slate-700">
                            {resumeData.certifications.map((cert, i) => (
                                <li key={i}>{cert}</li>
                            ))}
                        </ul>
                    </Section>
                </main>
            </div>
             <div className="text-center mt-8 flex justify-center items-center gap-4">
                 <button 
                     onClick={onBack}
                     className="bg-slate-700 hover:bg-slate-600 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300"
                 >
                     Back to Portfolio
                 </button>
                 <button 
                     onClick={handleDownload}
                     disabled={isDownloading}
                     className="bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 disabled:bg-cyan-800 disabled:cursor-not-allowed"
                 >
                     {isDownloading ? 'Downloading...' : 'Download PDF'}
                 </button>
             </div>
        </div>
    )
}

export default Resume;
