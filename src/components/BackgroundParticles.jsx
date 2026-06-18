import React, { useEffect, useState } from 'react';

export default function BackgroundParticles() {
  const [cubes, setCubes] = useState([]);

  useEffect(() => {
    const generateCubes = () => {
      const width = window.innerWidth;
      const spacing = 38;
      const cubesPerRow = Math.max(10, Math.floor(width / spacing));
      const totalCubes = Math.min(40, cubesPerRow * 2);

      const newCubes = Array.from({ length: totalCubes }, (_, index) => {
        const left = Math.random() * 100;
        const duration = Math.random() * 7 + 8;
        const delay = Math.random() * 8;
        return {
          id: index,
          left: `${left}%`,
          duration: `${duration}s`,
          delay: `${delay}s`,
        };
      });

      setCubes(newCubes);
    };

    generateCubes();

    const handleResize = () => {
      generateCubes();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="cube-particles" id="cubeParticles">
      {cubes.map((cube) => (
        <div
          key={cube.id}
          className="cube"
          style={{
            left: cube.left,
            animationDuration: cube.duration,
            animationDelay: cube.delay,
          }}
        />
      ))}
    </div>
  );
}
