import Hero from "../components/home/Hero";
import Stats from "../components/home/Stats";
import ResearchSection from "../components/home/ResearchSection";
import AboutSection from "../components/home/AboutSection";
import NewsSection from "../components/home/NewsSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <ResearchSection />
      <AboutSection />
      <NewsSection />
    </>
  );
}