import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";

// import createSagaMiddleware from "redux-saga";
import { routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";
import rootReducer from "./reducers";
import setupSocket from "./sockets";

import * as Sagas from "./sagas";

const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();

// Prepare the redux store
const store = createStore(
  rootReducer(history),
  composeWithDevTools(
    applyMiddleware(routerMiddleware(history), sagaMiddleware)
  )
);

// Prepare the socket connection and pass in the dispatch
const socket = setupSocket(store.dispatch);

sagaMiddleware.run(Sagas.handleCheckRoom, { socket });
sagaMiddleware.run(Sagas.handleAttemptAuthentication, { socket });

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
