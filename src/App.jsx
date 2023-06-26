import React from 'react';
import { ToggleBtn } from './ToggleBtn.jsx';

export const App = (props) => {
  return (
    <div className='appContainer'>
      <img src="/img/react.png" alt="React logo" className='reactLogo'/>
      <h1 className='appTitle'>Practicing <span style={{ color: '#16A3AC' }}>React</span> Components</h1>
      <p className='appDescription'>리액트를 사용해서 컴포넌트 단위의 기능들을 구현 및 연습</p>
      <div className='componentContainer'>
        <ToggleBtn />
      </div>
    </div>
  );
}