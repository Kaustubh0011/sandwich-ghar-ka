import Reviews from "@/components/Reviews";
import Navbar from "@/components/Navbar";
import Scene from "@/three/Scene";
import Features from "@/components/Features";
import Menu from "@/components/Menu";
import About from "@/components/About";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Scene />
      <Features />
      <Menu />
      <About />
      <Navbar />
      <Reviews />
    </main>
  );
}