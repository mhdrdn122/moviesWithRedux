import { legacy_createStore ,applyMiddleware} from "redux";
import { ReducerMovies } from "./Reducer";
import thunk from "redux-thunk";


export const store = legacy_createStore(ReducerMovies , applyMiddleware(thunk))