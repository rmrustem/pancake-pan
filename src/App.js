import React from 'react';
import './App.css';
import Board, { Cell } from './modules/board';
import DigitalClock from './modules/DigitalClock';
import Snowflakes from './modules/Snowflakes';


function App() {
  return (
    <Board>
      <Cell x="1" y="3" w="6" h="2">
        <DigitalClock locale="ru"/>
      </Cell>

      <Cell x="3" y="1" w="1" h="1">
        <Snowflakes/>
      </Cell>
    </Board>
  );
}

export default App;
