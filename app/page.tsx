"use client";
import React, { Suspense, useRef, useEffect } from "react";
import dynamic from "next/dynamic";
import { Loader } from "@react-three/drei";
import HeroUI from "@/components/HeroUI";
import PricingSection from "@/components/PricingSection";

const Scene = dynamic(() => import("@/components/3d/Scene"), { 
  ssr: false,
  loading: () => <div className="h-screen w-full flex items-center justify-center bg-black">Initializing Engine...</div>
});

export default function Home() {
  const scrollContainer = useRef<HTMLDivElement>(null);

  return (
    <main ref={scrollContainer} className="relative bg-black">
      {/* 3D Background Layer */}
      <div className="fixed top-0 left-0 w-full h-screen z-0">
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </div>

      {/* Content Layers */}
      <section className="relative h-[200vh] z-10">
        <HeroUI />
      </section>

      <section className="relative h-screen flex items-center justify-center z-10">
        <div className="max-w-4xl px-8">
          <h2 className="text-5xl font-bold mb-4">Interchangeable Power.</h2>
          <p className="text-xl text-gray-400">Our modular GPU units allow for instant scaling and maintenance without downtime. Swappable architecture designed for the future of LLMs.</p>
        </div>
      </section>

      <section className="relative z-10 bg-black/80 backdrop-blur-md">
        <PricingSection />
      </section>

      <footer className="relative z-10 py-20 px-8 border-t border-white/10 text-center">
        <p className="text-gray-500 uppercase tracking-widest text-sm">Founded by Aniket Sharma (Andyy)</p>
        <p className="mt-2 font-mono">as977100@gmail.com</p>
      </footer>

      <Loader />
    </main>
  );
}
