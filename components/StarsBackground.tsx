import React, { useState, useEffect } from 'react';
import './StarsBackground.css';
interface Star {
  id: number;
  top: string;
  left: string;
  animationDelay: string;
  animationDuration: string;
  size: number;
}

const StarsBackground: React.FC = () => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars: Star[] = [];
      const numStars = 150; 
      for (let i = 0; i < numStars; i++) {
        newStars.push({
          id: i,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${2 + Math.random() * 3}s`,
          size: Math.random() * 2 + 1,
        });
      }
      setStars(newStars);
    };

    generateStars();
  }, []);

  return (
    <div className="star-background" aria-hidden="true">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{  
            '--star-top': star.top,
            '--star-left': star.left,
            '--star-size': `${star.size}px`,
            '--star-animation-delay': star.animationDelay,
            '--star-animation-duration': star.animationDuration,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
};

export default StarsBackground;