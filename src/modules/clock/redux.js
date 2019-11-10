import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import store from '../../store';


const SET_REDUX_DATE = 'SET_REDUX_DATE';

function setDateNow() {
  return {
    type: SET_REDUX_DATE,
    date: new Date()
  }
}

function setDateReducer(state='', action) {
  if (action.type === SET_REDUX_DATE && action.date) {
    return action.date;
  } else {
    return state;
  }
}

store.injectReducer('redux_date', setDateReducer);

export default function useDate(delay=1000) {
  const date = useSelector(state => state.redux_date);
  const dispatch = useDispatch();

  useEffect(() => {
    let ticker = setInterval(
      () => { dispatch(setDateNow()) },
      delay
    );

    return () => {
      clearInterval(ticker);
    };
  }, [delay, dispatch]);

  return date;
}
