"use client";

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import * as THREE from 'three';

export default function FloatingShape() {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    
    // Initialize renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(300, 300);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Create torus
    const geometry = new THREE.TorusGeometry(1, 0.4, 16, 100);
    const material = new THREE.MeshPhongMaterial({
      color: 0x8A2BE2,
      specular: 0x00FFFF,
      shininess: 100,
      opacity: 0.9,
      transparent: true,
    });
    const torus = new THREE.Mesh(geometry, material);
    scene.add(torus);

    // Lighting
    const light1 = new THREE.PointLight(0x00FFFF, 1);
    light1.position.set(2, 2, 2);
    scene.add(light1);

    const light2 = new THREE.PointLight(0xFF69B4, 1);
    light2.position.set(-2, -2, -2);
    scene.add(light2);

    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);

    camera.position.z = 5;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      torus.rotation.x += 0.005;
      torus.rotation.y += 0.005;
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      if (rendererRef.current && containerRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
        rendererRef.current.dispose();
      }
    };
  }, []);

  return (
    <motion.div
      ref={containerRef}
      className="relative w-[300px] h-[300px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="glow" />
    </motion.div>
  );
}