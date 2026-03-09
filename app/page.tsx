import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CategorySection from "@/components/CategorySection";
import ResourcesSection from "@/components/ResourcesSection";
import UrgentSupport from "@/components/UrgentSupport";
import MissionSection from "@/components/MissionSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <HeroSection />
        <CategorySection />
        <ResourcesSection />
        <UrgentSupport />
        <MissionSection />
      </main>
      <Footer />
    </div>
  );
}
