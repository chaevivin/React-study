import React, { useState } from 'react';
import AppCount from './Counter/AppCount';
import AppStalker from './Stalker/AppStalker';
import AppForm from './Form/AppForm';

export const ToggleBtn = ({ title, id }) => {
  const [clicked, setClicked] = useState(false);
  const handleBtnClick = () => {
    setClicked(!clicked);
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
      {clicked && id === 'counter' && <AppCount />}
      {clicked && id === 'mouseStalker' && <AppStalker />}
      {clicked && id === 'form' && <AppForm />}
    </div>
  );
}