import React, { useState } from 'react';
import AppCount from './Counter/AppCount';
import AppStalker from './Stalker/AppStalker';
import AppForm from './Form/AppForm';
import styled from './ToggleBtn.module.css';

export const ToggleBtn = ({ title, id }) => {
  const [clicked, setClicked] = useState(false);
  const handleBtnClick = () => {
    setClicked(!clicked);
  };

  return (
    <div>
      <div className={styled.toggleBox}>
        <p className={styled.toggleName}>{title}</p>
        <button className={styled.toggleBtn} onClick={handleBtnClick}>
          {clicked ? 
            <img src="img/down.png" alt="downButton" className={styled.downBtn} /> :
            <img src="img/down.png" alt="downButton" className={styled.downBtnRotate} /> 
          }
        </button>
      </div>
      {clicked && id === 'counter' && <AppCount />}
      {clicked && id === 'mouseStalker' && <AppStalker />}
      {clicked && id === 'form' && <AppForm />}
    </div>
  );
}