import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Loading from './components/Loading';

// All 21 Sections
import Hero from './components/Hero';
import WhoAmI from './components/WhoAmI';
import MyStory from './components/MyStory';
import MyMindset from './components/MyMindset';
import MySchool from './components/MySchool';
import MyEducationalFoundation from './components/MyEducationalFoundation';
import MyCollege from './components/MyCollege';
import WhyIChoseCS from './components/WhyIChoseCS';
import MyProgrammingJourney from './components/MyProgrammingJourney';
import MyDataAnalyticsJourney from './components/MyDataAnalyticsJourney';
import MyMachineLearningJourney from './components/MyMachineLearningJourney';
import MyDevelopmentToolkit from './components/MyDevelopmentToolkit';
import ProjectPhilosophy from './components/ProjectPhilosophy';
import NetflixDataAnalysis from './components/NetflixDataAnalysis';
import TitanicDataAnalysis from './components/TitanicDataAnalysis';
import FifaDataAnalysis from './components/FifaDataAnalysis';
import Hackathons from './components/Hackathons';
import MyInterestInGenerativeAI from './components/MyInterestInGenerativeAI';
import MyFutureDirection from './components/MyFutureDirection';
import MyDigitalPresence from './components/MyDigitalPresence';
import Contact from './components/Contact';
import FinalSignature from './components/FinalSignature';

function App() {
  const [loading, setLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(Number(scroll));
    }
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="bg-background min-h-screen text-softwhite font-sans selection:bg-crimson selection:text-white">
      {/* Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-crimson z-50 transition-all duration-75"
        style={{ width: `${scrollProgress * 100}%` }}
      />
      
      <Navbar />
      
      <main>
        <Hero />
        <WhoAmI />
        <MyStory />
        <MyMindset />
        <MySchool />
        <MyEducationalFoundation />
        <MyCollege />
        <WhyIChoseCS />
        <MyProgrammingJourney />
        <MyDataAnalyticsJourney />
        <MyMachineLearningJourney />
        <MyDevelopmentToolkit />
        <ProjectPhilosophy />
        <NetflixDataAnalysis />
        <TitanicDataAnalysis />
        <FifaDataAnalysis />
        <Hackathons />
        <MyInterestInGenerativeAI />
        <MyFutureDirection />
        <MyDigitalPresence />
        <Contact />
        <FinalSignature />
      </main>
    </div>
  );
}

export default App;
