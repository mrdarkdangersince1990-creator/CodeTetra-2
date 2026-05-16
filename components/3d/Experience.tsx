"use client";
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, useScroll, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { GPUModel } from "./GPUModel";

export default function Experience() {
  const scroll = useScroll();
  const sceneRef = useRef<THREE.Group>(null);
  const clusterRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const r1 = scroll.range(0, 1/4);
    const r2 = scroll.range(1/4, 1/2);
    const r3 = scroll.range(2/4, 3/4);

    // Camera movement logic
    state.camera.position.z = THREE.MathUtils.lerp(10, 2, r1);
    state.camera.position.y = THREE.MathUtils.lerp(0, 0.5, r2);
    
    // Rotate GPU group based on scroll
    if (sceneRef.current) {
      sceneRef.current.rotation.y = r2 * Math.PI;
    }

    // Cluster interaction
    if (clusterRef.current) {
      clusterRef.current.scale.setScalar(THREE.MathUtils.lerp(0, 1.2, r3));
    }
  });

  return (
    <group ref={sceneRef}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <GPUModel />
      </Float>

      {/* Simplified Server Cluster Nodes */}
      <group ref={clusterRef} position={[0, -2, -5]}>
        {Array.from({ length: 20 }).map((_, i) => (
          <mesh key={i} position={[(Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10, -2]}>
            <boxGeometry args={[0.2, 0.2, 0.2]} />
            <meshStandardMaterial color="#00f3ff" emissive="#00f3ff" emissiveIntensity={2} />
          </mesh>
        ))}
      </group>
    </group>
  );
}
