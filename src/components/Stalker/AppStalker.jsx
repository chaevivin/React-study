import React, {useState} from 'react';

export default function AppStalker() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  return (
    <div className="container" onPointerMove={(e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    }}>
      <img 
        className="stalker"
        src="img/basketball.png"
        style={{ transform: `translate(${position.x}px, ${position.y}px)`}}
      />
    </div>
  );
}

