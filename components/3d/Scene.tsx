"use client";
import { Canvas } from "@react-three/fiber";
import { Environment, PerspectiveCamera, ScrollControls, Scroll, useScroll } from "@react-three/drei";
import Experience from "./Experience";

export default function Scene() {
  return (
    <Canvas shadows dpr={[1, 2]}>
      <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={35} />
      <color attach="background" args={["#050505"]} />
      <fog attach="fog" args={["#050505", 5, 20]} />
      
      <ambientLight intensity={0.2} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
      
      <ScrollControls pages={4} damping={0.1}>
        <Experience />
      </ScrollControls>

      <Environment preset="night" />
    </Canvas>
  );
}
