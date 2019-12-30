import React from 'react';
import styled, { keyframes } from 'styled-components'

const fall = keyframes`
  from { top: -10% }
  to   { top: 100% }
`

const slide = keyframes`
  from, to { transform: translateX(0) }
  50%      { transform: translateX(80px) }
`

const Snowflake = styled.span`
  font-size: ${p => p.size || '1em'};
  text-shadow: 0 0 5px #000;
  position: fixed;
  top: -10%;
  left: ${p => p.left || '10%'};
  z-index: 9999;
  user-select: none;
  cursor: default;
  animation-name: ${fall}, ${slide};
  animation-duration: ${p => p.falling || '10s'}, ${p => p.sliding || '3s'};
  animation-delay: ${p => p.delay1 || '0s'}, ${p => p.delay2 || '0s'};
  animation-timing-function: linear,ease-in-out;
  animation-iteration-count: infinite,infinite;
  animation-play-state: running,running;
`


export default function Snowflakes(props) {

  return (
    <div aria-hidden="true">
      {
        [...Array(props.N)].map((x, i) =>
          <Snowflake
            key={i}
            size={1 + Math.random()*5 + 'em'}
            left={5 + i*90/props.N + '%'}
            falling={(Math.random()+1)*props.falling + 's'}
            sliding={(Math.random()+1)*props.sliding + 's'}
            delay1={Math.random()*props.falling + 's'}
            delay2={Math.random()*props.sliding + 's'}
          >❄️</Snowflake>
        )
      }
    </div>
  );
}

Snowflakes.defaultProps = {
  N: 10,
  falling: 10,
  sliding: 3,
}

