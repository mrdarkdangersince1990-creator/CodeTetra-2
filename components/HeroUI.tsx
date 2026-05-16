"use client";
import { MoveDown } from "lucide-react";

export default function HeroUI() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-7xl md:text-9xl font-black tracking-tighter uppercase italic">
        CodeTetra
      </h1>
      <p className="text-xl md:text-2xl text-cyan-400 font-mono mt-4 tracking-widest uppercase">
        You Don’t Buy Servers. You Build Intelligence.
      </p>
      
      <div className="absolute bottom-10 animate-bounce flex flex-col items-center text-gray-500">
        <span className="text-xs uppercase tracking-widest mb-2">Scroll to deploy</span>
        <MoveDown size={20} />
      </div>
    </div>
  );
}
