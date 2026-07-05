"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function FloatingIngredient({
  color,
  radius,
  speed,
  y,
}: {
  color: string;
  radius: number;
  speed: number;
  y: number;
}) {
  const mesh = useRef<THREE.Mesh>(null!);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed;

    mesh.current.position.x = Math.cos(t) * radius;
    mesh.current.position.z = Math.sin(t) * radius;

    mesh.current.position.y =
      y + Math.sin(clock.getElapsedTime() * 2) * 0.2;

    mesh.current.rotation.x += 0.01;
    mesh.current.rotation.y += 0.02;
  });

  return (
    <mesh ref={mesh}>
      <sphereGeometry args={[0.22, 32, 32]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}