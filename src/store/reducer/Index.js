import { combineReducers } from "redux";
import Wpmreducer from "./Wpmreducer";
import TypeErrorReducer from './TypeError'
const allReducer = combineReducers({
    WpmReducer:Wpmreducer,
    TypeErrorReducer:TypeErrorReducer
})

export default allReducer;