import { applyMiddleware, combineReducers, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'

const noopReducer = (state={}, action) => state;

const staticReducers = {
  app: noopReducer
};

const defaultState = {
  app: {}
}

function* noopSaga() {
  yield {};
}

function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    createReducer(),
    initialState,
    applyMiddleware(sagaMiddleware)
  );

  store.asyncReducers = {};
  store.sagaMiddleware = sagaMiddleware;

  store.injectReducer = (key, asyncReducer) => {
    store.asyncReducers[key] = asyncReducer;
    store.replaceReducer(createReducer(store.asyncReducers))
  }

  sagaMiddleware.run(noopSaga)

  return store;
}

function createReducer(asyncReducers) {
  return combineReducers({
    ...staticReducers,
    ...asyncReducers
  });
}


const store = configureStore(defaultState);

export default store;
