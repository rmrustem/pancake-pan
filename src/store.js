import { applyMiddleware, combineReducers, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'

const noopReducer = (state={}, action) => state;

const defaultReducers = {
  app: noopReducer
};

const defaultState = {
  app: {}
}

function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    createReducer(),
    initialState,
    applyMiddleware(sagaMiddleware)
  );

  store.reducers = {};
  store.injectReducer = (key, reducer) => {
    if (!(key in store.reducers)) {
      store.reducers[key] = reducer;
      store.replaceReducer(createReducer(store.reducers));
    }
  }

  store.sagas = {};
  store.sagaMiddleware = sagaMiddleware;
  store.runSaga = (key, saga) => {
    if (!(key in store.sagas)) {
      store.sagas[key] = saga;
      store.sagaMiddleware.run(saga);
    }
  }

  return store;
}

function createReducer(asyncReducers) {
  return combineReducers({
    ...defaultReducers,
    ...asyncReducers
  });
}


const store = configureStore(defaultState);

export default store;
