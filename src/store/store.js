import { applyMiddleware, compose, createStore } from "redux";
import { routerMiddleware } from "connected-react-router";
import rootReducer from "./reducers/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

export default function configureStore() {
  const store = createStore(
    rootReducer(history), // root reducer with router state
    composeWithDevTools(
      applyMiddleware(
        routerMiddleware(history) // for dispatching history actions
      )
    )
  );

  return store;
}


