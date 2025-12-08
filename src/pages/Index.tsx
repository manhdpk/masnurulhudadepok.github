import SEO from "@/components/SEO";
import Hero from "@/components/sections/Hero";
import PrincipalGreeting from "@/components/sections/PrincipalGreeting";
import LatestNews from "@/components/sections/LatestNews";

const Index = () => {
  return (
    <main>
      <SEO
        title="Beranda – MA Nurul Huda"
        description="Website resmi Madrasah Aliyah Nurul Huda: sambutan kepala, berita terbaru, dan informasi sekolah."
        canonical={typeof window !== "undefined" ? window.location.origin + "/" : undefined}
      />
      <Hero />
      <PrincipalGreeting />
      <LatestNews />
    </main>
  );
};

export default Index;
