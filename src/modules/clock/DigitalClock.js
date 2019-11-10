import React from 'react';


function DigitalClock(props) {
  const date = props.useDate();
  if (date) {
    return (
      <div>{ date.toLocaleString(props.locale, props.opts) }</div>
    );
  } else {
    return (
      <div>{ props.undefinedDate }</div>
    );
  }
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
