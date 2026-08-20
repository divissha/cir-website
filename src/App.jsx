import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import ResearchSection from "./components/ResearchSection";
import AboutSection from "./components/AboutSection";
import NewsSection from "./components/NewsSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="page-background min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <ResearchSection />
        <AboutSection />
        <NewsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;