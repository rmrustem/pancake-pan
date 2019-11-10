import React from 'react';
import './App.css';
import Board from './modules/board/index';
import DigitalClock from './modules/clock/DigitalClock';
import useDateHooks from './modules/clock/hooks';
import useDateRedux from './modules/clock/redux';
import useDateSagas from './modules/clock/saga';


function App() {
  return (
    <Board>
      <DigitalClock locale='ar-EG' useDate={useDateHooks}></DigitalClock>
      <DigitalClock locale='en-US' useDate={useDateRedux}></DigitalClock>
      <DigitalClock                useDate={useDateSagas}></DigitalClock>
    </Board>
  );
}

export default App;
