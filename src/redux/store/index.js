import { createStore } from "redux";
import { rootReducer } from "../reducer";

// Note: this API requires redux@>=3.1.0
export const store = createStore(rootReducer);
