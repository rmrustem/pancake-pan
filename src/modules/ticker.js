import { eventChannel } from 'redux-saga';

export default function ticker(period) {
  return eventChannel(emitter => {
      const ticker = setInterval(() => emitter({}), period);
      setTimeout(() => emitter({}), 100);
      return () => {
        clearInterval(ticker)
      }
    }
  )
}
