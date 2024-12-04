import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';

const Book3D = ({ coverImage, position = [0, 0, 0], rotation = [0, 0, 0] }) => {
  const meshRef = useRef();
  
  // Load the cover texture
  const texture = useTexture(coverImage);

  // Add a subtle rotation animation
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1 + Math.PI * 0.1;
    }
  });

  return (
    <group position={position} rotation={rotation}>
      {/* Book cover (front) */}
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <boxGeometry args={[5, 7, 0.5]} /> {/* Adjust size as needed */}
        <meshStandardMaterial attach="material-4" map={texture} />
        <meshStandardMaterial attach="material-0" color="#222222" /> {/* Right side */}
        <meshStandardMaterial attach="material-1" color="#222222" /> {/* Left side */}
        <meshStandardMaterial attach="material-2" color="#222222" /> {/* Top */}
        <meshStandardMaterial attach="material-3" color="#222222" /> {/* Bottom */}
        <meshStandardMaterial attach="material-5" color="#111111" /> {/* Back */}
      </mesh>
    </group>
  );
};

export default Book3D; 