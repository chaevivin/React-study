import React, {useState} from 'react';
import styled from './AppStalker.module.css';

export default function AppStalker() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  return (
    <div className={styled.container} onPointerMove={(e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    }}>
      <img 
        alt='background'
        className={styled.stalker}
        src="img/basketball.png"
        style={{ transform: `translate(${position.x}px, ${position.y}px)`}}
      />
    </div>
  );
}

