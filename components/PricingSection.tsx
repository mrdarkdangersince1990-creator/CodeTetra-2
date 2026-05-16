"use client";
import { Zap } from "lucide-react";

const tiers = [
  { name: "Starter", price: "10 Lakh", specs: "2x H100 Equivalent" },
  { name: "Growth", price: "20 Lakh", specs: "4x H100 Equivalent" },
  { name: "AI Lab", price: "40 Lakh", specs: "8x H100 Equivalent" },
  { name: "Enterprise", price: "70 Lakh", specs: "16x H100 Cluster" },
  { name: "Hyperscale", price: "1 Crore", specs: "Liquid Cooled Rack" },
];

export default function PricingSection() {
  return (
    <div className="py-24 px-8 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center">Select Your Compute Tier</h2>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {tiers.map((tier) => (
          <div key={tier.name} className="p-6 border border-white/10 hover:border-cyan-500 transition-colors bg-white/5 rounded-xl cursor-pointer group">
            <Zap className="text-cyan-400 mb-4 group-hover:scale-125 transition-transform" />
            <h3 className="text-xl font-bold">{tier.name}</h3>
            <p className="text-2xl text-cyan-500 font-mono my-2">{tier.price}</p>
            <p className="text-sm text-gray-400">{tier.specs}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
