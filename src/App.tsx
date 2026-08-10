import Features from "./sections/Features";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import AISection from "./sections/AISection";

function App() {
  return (
    <main className="min-h-screen bg-[#050505]">
      <Navbar />
      <Hero />
      <Features/>
      <AISection />
    </main>
  );
}

export default App;