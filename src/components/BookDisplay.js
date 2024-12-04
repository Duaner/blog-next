import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PresentationControls, Environment } from '@react-three/drei';
import Book3D from './Book3D';
import styles from './BookDisplay.module.css';

const BookDisplay = ({ books }) => {
  return (
    <div className={styles.canvasContainer}>
      <Canvas
        camera={{ position: [0, 0, 15], fov: 50 }}
        style={{ height: '500px' }}
      >
        <Environment preset="city" />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        
        <PresentationControls
          global
          config={{ mass: 2, tension: 500 }}
          snap={{ mass: 4, tension: 1500 }}
          rotation={[0, 0.3, 0]}
          polar={[-Math.PI / 3, Math.PI / 3]}
          azimuth={[-Math.PI / 1.4, Math.PI / 2]}
        >
          {books.map((book, index) => (
            <Book3D
              key={book.id}
              coverImage={book.coverImage.url}
              position={[(index - (books.length - 1) / 2) * 6, 0, 0]}
            />
          ))}
        </PresentationControls>
      </Canvas>
    </div>
  );
};

export default BookDisplay; 