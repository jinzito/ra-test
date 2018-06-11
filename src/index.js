import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux"
import { compose, createStore } from "redux"
import rootReducer from "./reducers"
import persistState from "redux-localstorage"

import "bootstrap/dist/css/bootstrap.min.css";


const enhancer = compose(
    persistState(/*paths, config*/),
)


/* eslint-disable no-underscore-dangle */
const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    enhancer
)
/* eslint-enable */

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById("root")
);
registerServiceWorker();
