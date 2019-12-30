import React from 'react';
import useDate from './date';

function DigitalClock(props) {
  const date = useDate();

  const textStyle = {
    fill: '#fff',
  }
  if (date) {
    return (
      <svg className="fit" viewBox="0 0 55 19">
        <text style={textStyle} x="0" y="15">{ date.toLocaleString(props.locale, props.opts) }</text>
      </svg>
    );
  }

  return (
    <div>{ props.undefinedDate }</div>
  );
}

DigitalClock.defaultProps = {
  undefinedDate: '…/…/…',
  locale: navigator.language,
  opts: {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  }
};

export default DigitalClock;
