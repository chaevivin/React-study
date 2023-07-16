import React, { useState } from 'react';
import AppCount from './components/Counter/AppCount';
import { ToggleBtn } from './components/ToggleBtn';
import AppStalker from './components/Stalker/AppStalker';
import AppForm from './components/Form/AppForm';

export const App = (props) => {
  const [visible, setVisible] = useState(true);
  const [btnId, setBtnId] = useState('');

  const isVisible = (clicked, id) => {
    clicked ? setVisible(true) : setVisible(false);
    setBtnId(id);
  };

  return (
    <div className='appContainer'>
      <img src="/img/react.png" alt="React logo" className='reactLogo'/>
      <h1 className='appTitle'>Practicing <span style={{ color: '#16A3AC' }}>React</span> Components</h1>
      <p className='appDescription'>리액트를 사용해서 컴포넌트 단위의 기능들을 구현 및 연습</p>
      <div className='componentContainer'>
        <ToggleBtn 
          id='counter'
          title='Counter'
          isVisible={isVisible}
        />
        {visible && btnId === 'counter' && <AppCount />}
        <ToggleBtn
          id='mouseStalker'
          title='Mouse Stalker'
          isVisible={isVisible}
        />
        {visible && btnId === 'mouseStalker' && <AppStalker />}
        <ToggleBtn
          id='form'
          title='Form'
          isVisible={isVisible}
        />
        {visible && btnId === 'form' && <AppForm />}
      </div>
    </div>
  );
}