import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import Navbar from "./components/ui/Navbar";
import Hero from "./sections/hero/Hero";
import About from "./sections/about/About";

function App() {
  return (
    <div className="bg-zircon-500">
      <Navbar />
      <Hero />
      <div className="h-screen w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <Canvas shadows camera={{ position: [0, 0, 7], fov: 30 }}>
      {/* <color attach="background" args={["#ececec"]} /> */}
      <Experience />
    </Canvas>
    </div>
    <About />
    </div>
  );
}

export default App;
