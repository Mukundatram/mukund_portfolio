import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactFooter from './components/ContactFooter';
import Resume from './components/Resume';

const App: React.FC = () => {
  const [showResume, setShowResume] = useState(false);

  if (showResume) {
    return <Resume onBack={() => setShowResume(false)} />;
  }

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <main className="container mx-auto px-4 md:px-8">
        <HeroSection onViewResume={() => setShowResume(true)} />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
      </main>
      <ContactFooter />
    </div>
  );
};

export default App;