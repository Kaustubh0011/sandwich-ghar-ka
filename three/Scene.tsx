"use client";

import Steam from "./objects/Steam";
import Sandwich from "./objects/Sandwich";
import HeroContent from "@/components/HeroContent";
import Particles from "./objects/Particles";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
} from "@react-three/drei";
import {
  EffectComposer,
  Bloom,
} from "@react-three/postprocessing";

import CameraRig from "./objects/CameraRig";
import FloatingIngredient from "./objects/FloatingIngredient";

/* Temporary Sandwich
   Replace this later with:
   import Sandwich from "./objects/Sandwich";
*/

export default function Scene() {
  return (
    <div className="relative h-screen w-full hero-bg">

      <Canvas
  shadows
  dpr={[1,2]}
  camera={{
    position:[0,1.5,6],
    fov:50
  }}
>

        {/* LIGHTS */}

        <ambientLight intensity={0.6} />

<directionalLight
  castShadow
  position={[6, 8, 5]}
  intensity={5}
  shadow-mapSize-width={2048}
  shadow-mapSize-height={2048}
/>

<pointLight
  position={[-4, 3, -4]}
  intensity={2}
/>

<spotLight
  position={[0, 8, 4]}
  angle={0.4}
  intensity={3}
  penumbra={1}
/>

        {/* ENVIRONMENT */}

         <Environment preset="city" />
        {/* PARTICLES */}

        <Particles />

        {/* FLOATING INGREDIENTS */}

        <FloatingIngredient
          color="#ff3b30"
          radius={2}
          speed={0.5}
          y={1}
        />

        <FloatingIngredient
          color="#34c759"
          radius={2.6}
          speed={0.8}
          y={0.5}
        />

        <FloatingIngredient
          color="#ffd84d"
          radius={3}
          speed={1}
          y={1.2}
        />

        <FloatingIngredient
          color="#9c27b0"
          radius={2.2}
          speed={0.7}
          y={-0.3}
        />

        {/* MAIN OBJECT */}

        <Sandwich />
        <Steam />
        <mesh
  receiveShadow
  rotation={[-Math.PI / 2, 0, 0]}
  position={[0, -1.8, 0]}
>
  <planeGeometry args={[20, 20]} />
  <shadowMaterial opacity={0.25} />
</mesh>

        {/* CAMERA */}

        <CameraRig />

        {/* BLOOM */}

        <EffectComposer>
         <Bloom
  intensity={0.9}
  luminanceThreshold={0.6}
  luminanceSmoothing={0.9}
/>
        </EffectComposer>

        {/* CONTROLS */}

        <OrbitControls
          enableZoom={false}
          enableRotate={false}
          enablePan={false}
        />

      </Canvas>

      {/* HTML CONTENT OUTSIDE CANVAS */}

      <HeroContent />

    </div>
  );
}