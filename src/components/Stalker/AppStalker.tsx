import React, {useState} from 'react';
import styled from './AppStalker.module.css';

interface positionState {
  x: number;
  y: number;
}

export default function AppStalker() {
  const [position, setPosition] = useState<positionState>({ x: 0, y: 0 });

  return (
    <div className={styled.container} onPointerMove={(e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    }}>
      <img 
        alt='background'
        className={styled.stalker}
        src={process.env.PUBLIC_URL + "/img/basketball.png"}
        style={{ transform: `translate(${position.x}px, ${position.y}px)`}}
      />
    </div>
  );
}

