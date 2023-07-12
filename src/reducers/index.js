import { combineReducers } from 'redux';
import addToListReducer from "./addToListReducer"

export const reducers = combineReducers({
    addToList: addToListReducer,
   // tasks: taskReducer
});
