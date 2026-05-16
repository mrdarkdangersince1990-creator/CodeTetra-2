"use client";
import React, { useRef } from "react";
import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function GPUModel() {
  const scroll = useScroll();
  const part1 = useRef<THREE.Mesh>(null);
  const part2 = useRef<THREE.Mesh>(null);

  useFrame(() => {
    const explosionFactor = scroll.range(0.4, 0.6);
    if (part1.current && part2.current) {
      part1.current.position.y = explosionFactor * 2;
      part2.current.position.y = -explosionFactor * 2;
    }
  });

  return (
    <group>
      {/* Shell Part 1 */}
      <mesh ref={part1}>
        <boxGeometry args={[3, 0.5, 2]} />
        <meshStandardMaterial color="#111" metalness={0.9} roughness={0.1} />
      </mesh>
      {/* Shell Part 2 */}
      <mesh ref={part2}>
        <boxGeometry args={[3, 0.5, 2]} />
        <meshStandardMaterial color="#111" metalness={0.9} roughness={0.1} />
      </mesh>
      {/* Core Chips */}
      <mesh>
        <boxGeometry args={[2, 0.2, 1.5]} />
        <meshStandardMaterial color="#ff3300" emissive="#ff3300" emissiveIntensity={0.5} />
      </mesh>
    </group>
  );
}
