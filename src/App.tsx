import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Work } from "@/components/sections/Work";
import { Services } from "@/components/sections/Services";
import { Contact } from "@/components/sections/Contact";
import { AnimatedBackground } from "@/components/AnimatedBackground";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <AnimatedBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Work />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
