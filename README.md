# CodeTetra | Cinematic 3D AI Infrastructure

A production-grade, high-performance 3D scroll experience built for **CodeTetra**. This project utilizes a "Camera-First" architecture where the user's scroll progress controls the cinematic movement through an AI data center and GPU hardware visualization.

## 🚀 Tech Stack

* **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
* **3D Engine:** [Three.js](https://threejs.org/) via [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
* **Utilities:** [Drei](https://github.com/pmndrs/drei) (Camera & Scroll controls)
* **Animations:** [GSAP](https://gsap.com/) (ScrollTrigger integration)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Deployment:** Optimized for [Vercel](https://vercel.com/)

## 📂 Project Structure

```text
├── app/
│   ├── layout.tsx       # Root layout & Metadata
│   ├── page.tsx         # Main entry & Scroll container
│   └── globals.css      # Base styling & tailwind imports
├── components/
│   ├── 3d/
│   │   ├── Scene.tsx       # Canvas & Environment setup
│   │   ├── Experience.tsx  # Scroll-based camera logic
│   │   └── GPUModel.tsx    # Interactive exploded view model
│   ├── HeroUI.tsx       # Landing typography
│   └── PricingSection.tsx # Tier selection UI
└── public/
    └── models/          # .glb / .gltf assets
 
