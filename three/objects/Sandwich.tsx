"use client";

import { useRef } from "react";
import { useGLTF, Float } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function Sandwich() {
  const group = useRef<THREE.Group>(null!);

  const { scene } = useGLTF("/models/sandwich.glb");
  scene.traverse((child: any) => {
  if (child.isMesh) {
    child.castShadow = true;
    child.receiveShadow = true;
  }
});

  useFrame(({ clock, mouse }) => {
  if (!group.current) return;

  group.current.rotation.y = clock.elapsedTime * 0.35;
  group.current.rotation.x = mouse.y * 0.2;
  group.current.rotation.z = mouse.x * 0.15;
});

  return (
    <Float
      speed={2}
      rotationIntensity={0.3}
      floatIntensity={0.7}
    >
      <group
        ref={group}
        scale={2.5}
        position={[0, -1, 0]}
>
        <primitive object={scene} />
      </group>
    </Float>
  );
}

useGLTF.preload("/models/sandwich.glb");