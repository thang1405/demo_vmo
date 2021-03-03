import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "../reducer";
import thunk from "redux-thunk";
// Note: this API requires redux@>=3.1.0
export const store = createStore(rootReducer, applyMiddleware(thunk));
