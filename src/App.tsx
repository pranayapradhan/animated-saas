import Features from "./sections/Features";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import AISection from "./sections/AISection";
import HowItWorks from "./sections/HowItWorks";
import Testimonials from "./sections/testimonials/Testimonials";

function App() {
  return (
    <main className="min-h-screen bg-[#050505]">
      <Navbar />
      <Hero />
      <Features/>
      <HowItWorks />
      <AISection />
      <Testimonials />
    </main>
  );
}

export default App;