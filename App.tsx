import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactFooter from './components/ContactFooter';
import Resume from './components/Resume';
import StarsBackground from './components/StarsBackground';

const App: React.FC = () => {
  const [showResume, setShowResume] = useState(false);

  if (showResume) {
    return <Resume onBack={() => setShowResume(false)} />;
  }

  return (
    <>
      <StarsBackground />
      <div className="relative z-10 min-h-screen">
        <Header />
        <main className="container mx-auto px-4 md:px-8">
          <HeroSection onViewResume={() => setShowResume(true)} />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
        </main>
        <ContactFooter />
      </div>
    </>
  );
};

export default App;