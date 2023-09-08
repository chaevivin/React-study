import React from 'react';
import { ToggleBtn } from './components/ToggleBtn';

export const App = (props) => {
  
  return (
    <section className='appContainer'>
      <img src={process.env.PUBLIC_URL + "/img/react.png"} alt="React logo" className='reactLogo'/>
      <h1 className='appTitle'>Practicing <span style={{ color: '#16A3AC' }}>React</span> Components</h1>
      <p className='appDescription'>리액트를 사용해서 컴포넌트 단위의 기능들을 구현 및 연습</p>
      <ToggleBtn 
        id='counter'
        title='Counter'
      />
      <ToggleBtn
        id='mouseStalker'
        title='Mouse Stalker'
      />
      <ToggleBtn
        id='form'
        title='Form'
      />
      <ToggleBtn 
        id='todo'
        title='Todo List'
      />
    </section>
  );
}