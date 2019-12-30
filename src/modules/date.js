import { useSelector, useStore } from 'react-redux';
import { take, call, put } from 'redux-saga/effects';
import ticker from './ticker';

export const SET_DATE = 'SET_DATE';
const UPDATE_INTERVAL = 1000;


function setDate(date) {
  return {
    type: SET_DATE,
    date
  }
}

function dateReducer(state='', action) {
  switch (action.type) {
    case SET_DATE:
      return action.date;
    default:
      return state;
  }
}

function* dateSaga() {
  const channel = yield call(ticker, UPDATE_INTERVAL)
  while (true) {
    yield take(channel);
    yield put(setDate(new Date()));
  }
}

export default function useDate() {
  const date = useSelector(state => state.date);
  const store = useStore();
  store.injectReducer('date', dateReducer);
  store.runSaga('date', dateSaga);
  return date;
}
