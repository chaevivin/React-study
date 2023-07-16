import React, { useState } from 'react';

export const ToggleBtn = ({ title, isVisible, id }) => {
  const [clicked, setClicked] = useState(false);
  const handleBtnClick = () => {
    setClicked(!clicked);
    isVisible(!clicked, id);
  };

  return (
    <div>
      <div className='toggleBox'>
        <p className='toggleName'>{title}</p>
        <button className='toggleBtn' onClick={handleBtnClick}>
          {clicked ? 
            <img src="img/down.png" alt="downButton" className='downBtn' /> :
            <img src="img/down.png" alt="downButton" className='downBtnRotate' /> 
          }
        </button>
      </div>
    </div>
  );
}