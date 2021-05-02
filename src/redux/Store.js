import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { APP_ENVIRONMENTS } from "../constants/AppConstants";
import reducers from "./Reducers";
import sagas from "./Sagas";

let store = null;

// redux dev tools enable for non production builds
function enableDeveloperTools(mw) {
  let middleware = mw;

  if (process.env.REACT_APP_ENV !== APP_ENVIRONMENTS.production) {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          // Can specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        })
      : compose;

    const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    if (typeof devToolsExtension === "function") {
      middleware = composeEnhancers(middleware);
    }
  }
  return middleware;
}

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  let middleware = applyMiddleware(sagaMiddleware);

  middleware = enableDeveloperTools(middleware); // enable dev tools for non production builds

  store = createStore(reducers, {}, middleware);
  sagaMiddleware.run(sagas);

  return store;
}

export function getDispatch() {
  return store ? store.dispatch : () => null;
}
