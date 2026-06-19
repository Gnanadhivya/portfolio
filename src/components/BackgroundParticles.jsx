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
        const delay = Math.random() * -8; // 💡 Using a negative delay makes them start scattered instantly instead of waiting!
        const size = Math.random() * 8 + 4; // Add a bit of random sizes for dynamic depth
        return {
          id: index,
          left: `${left}%`,
          duration: `${duration}s`,
          delay: `${delay}s`,
          size: `${size}px`,
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
    <div className="cube-particles" id="cubeParticles" style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
      {/* 💡 INJECT KEYFRAMES DIRECTLY SO THEY MOVE FLUIDLY */}
      <style>{`
        @keyframes floatUp {
          0% {
            transform: translateY(105vh) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.4;
          }
          90% {
            opacity: 0.4;
          }
          100% {
            transform: translateY(-5vh) rotate(360deg);
            opacity: 0;
          }
        }
        .custom-cube {
          position: absolute;
          bottom: -20px;
          background-color: rgba(107, 255, 247, 0.2);
          border: 1px solid rgba(107, 255, 247, 0.4);
          box-shadow: 0 0 8px rgba(107, 255, 247, 0.2);
          animation-name: floatUp;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        .dark .custom-cube {
          background-color: rgba(107, 255, 247, 0.15);
          border-color: rgba(107, 255, 247, 0.3);
        }
      `}</style>

      {cubes.map((cube) => (
        <div
          key={cube.id}
          className="custom-cube"
          style={{
            left: cube.left,
            width: cube.size,
            height: cube.size,
            animationDuration: cube.duration,
            animationDelay: cube.delay,
          }}
        />
      ))}
    </div>
  );
}
