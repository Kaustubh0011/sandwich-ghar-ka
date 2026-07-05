"use client";

import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function CameraRig() {
  const { camera, mouse } = useThree();

  const target = useRef(new THREE.Vector3(0, 1.5, 6));

  useFrame(() => {
    const scroll =
      window.scrollY /
      (document.body.scrollHeight - window.innerHeight);

    target.current.x = mouse.x * 0.6;

    target.current.y =
      1.5 +
      mouse.y * 0.3 -
      scroll * 1.2;

    target.current.z =
      6 -
      scroll * 2.5;

    camera.position.lerp(target.current, 0.05);

    camera.lookAt(0, 0, 0);
  });

  return null;
}