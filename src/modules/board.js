import React from 'react';

export default function Board(props) {
  return (
    <div className="board">
      {props.children}
    </div>
  );
}

export function Cell(props) {
  const style = {
    gridColumnStart: props.x,
    gridRowStart: props.y,
    gridColumnEnd: parseInt(props.x) + parseInt(props.w),
    gridRowEnd: parseInt(props.y) + parseInt(props.h),
  };

  return (
    <div className="cell" style={style}>
      {props.children}
    </div>
  );
}
