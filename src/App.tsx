import { NavBar } from './components/layout/NavBar';
import { BackgroundEffects } from './components/layout/BackgroundEffects';
import { HeroSection } from './components/sections/HeroSection';
import { FeaturesSection } from './components/sections/FeaturesSection';
import { PreOrderBanner } from './components/sections/PreOrderBanner';
import { Footer } from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0F1F24] text-[#F0F0E8] font-space selection:bg-[#C0FF00] selection:text-[#0F1F24] overflow-x-hidden">
      <BackgroundEffects />
      <NavBar />
      <HeroSection />
      <FeaturesSection />
      <PreOrderBanner />
      <Footer />
    </div>
  );
}

export default App;
