import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import Navbar from "./components/ui/Navbar";
import Section from "./components/ui/Section";
import Hero from "./sections/hero/Hero"
import About from "./sections/about/About"
import Contact from "./sections/contact/Contact";
import Footer from "./components/ui/Footer";
import { ScrollControls,Scroll } from "@react-three/drei";

function App() {
  return (
    <div className="h-screen bg-zircon-500">
      <Navbar />
      <Canvas camera={{ position: [0, 0, 7], fov: 30 }} shadows={'soft'}>
      <Experience/>
      <ScrollControls pages={3} damping={0.1} >
      <Scroll html>
        <Section>
            <Hero />
        </Section>
        <Section>
          <About />
        </Section>
        <Section>
          <Contact />
        </Section>
      </Scroll>
      </ScrollControls>
    </Canvas>
    </div>
  );
}

export default App;
