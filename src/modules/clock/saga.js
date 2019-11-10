import { useSelector } from 'react-redux';
import { eventChannel } from 'redux-saga'
import { take, call, put } from 'redux-saga/effects'

import store from '../../store';

const TICK_DELAY = 3000;
const SET_SAGA_DATE = 'SET_SAGA_DATE';
const TICK = 'TICK';


function setDateNow() {
  return {
    type: SET_SAGA_DATE,
    date: new Date()
  }
}

function setDateReducer(state='', action) {
  if (action.type === SET_SAGA_DATE && action.date) {
    return action.date;
  } else {
    return state;
  }
}

store.injectReducer('saga_date', setDateReducer);

function ticker(period, actionType) {
  return eventChannel(emitter => {
      const ticker = setInterval(() => emitter({type: actionType}), period);
      return () => {
        clearInterval(ticker)
      }
    }
  )
}

export function* updateDate() {
  const channel = yield call(ticker, TICK_DELAY, TICK)
  while (true) {
    yield take(channel);
    yield put(setDateNow());
  }
}

store.sagaMiddleware.run(updateDate);

export default function useDate() {
  const date = useSelector(state => state.saga_date);
  return date;
}


