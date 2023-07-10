import React, { useState } from 'react';
import AppCount from './components/Counter/AppCount';
import { ToggleBtn } from './components/ToggleBtn';
import AppStalker from './components/Stalker/AppStalker';

export const App = (props) => {
  const [visible, setVisible] = useState(true);
  const isVisible = (clicked) => {
    if(clicked) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  return (
    <div className='appContainer'>
      <img src="/img/react.png" alt="React logo" className='reactLogo'/>
      <h1 className='appTitle'>Practicing <span style={{ color: '#16A3AC' }}>React</span> Components</h1>
      <p className='appDescription'>리액트를 사용해서 컴포넌트 단위의 기능들을 구현 및 연습</p>
      <div className='componentContainer'>
        <ToggleBtn 
          title='Counter'
          isVisible={isVisible}
        />
        {visible ? '' : <AppCount />}
        <ToggleBtn
          title='Mouse Stalker'
          isVisible={isVisible}
        />
        <ToggleBtn
          title='Form'
          isVisible={isVisible}
        />
      </div>
    </div>
  );
}