import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import thunk from "redux-thunk";
import reducer from "../reducers";

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
