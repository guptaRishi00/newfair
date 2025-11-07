import HeroComponent from '@/components/HeroComponent';
import Register from '@/components/Register';
import OpportunitiesHero from '@/components/Opportunity';
import PropertyDiscovery from '@/components/Propertydiscovery';
import AboutCredai from '@/components/About';
import WhoCanAttend from '@/components/WhoCanAttend';
import ExclusiveOpportunity from '@/components/ExclusiveOpportunity';

export default function Home() {
  return (
    <main>
       <div className="w-full">
        <HeroComponent/>
        <Register />
        <OpportunitiesHero />
        <PropertyDiscovery />
        <AboutCredai />
        <WhoCanAttend />
        <ExclusiveOpportunity />

      </div>

      
    </main>
  );
}