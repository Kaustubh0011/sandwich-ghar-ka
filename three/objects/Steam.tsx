"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function Steam() {
  const group = useRef<THREE.Group>(null!);

  useFrame(({ clock }) => {
    if (!group.current) return;

    group.current.children.forEach((mesh, i) => {
      mesh.position.y = (clock.elapsedTime * 0.5 + i * 0.4) % 3;

      mesh.position.x =
        Math.sin(clock.elapsedTime * 2 + i) * 0.15;

      const material = (mesh as THREE.Mesh<THREE.BufferGeometry, THREE.MeshStandardMaterial>).material;
      material.opacity = 0.35 - mesh.position.y / 8;
    });
  });

  return (
    <group ref={group} position={[0, 1.3, 0]}>
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <mesh key={i} position={[0, i * 0.2, 0]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial
            color="white"
            transparent
            opacity={0.3}
          />
        </mesh>
      ))}
    </group>
  );
}