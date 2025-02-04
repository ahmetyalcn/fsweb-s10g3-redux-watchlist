import { legacy_createStore as createStore, applyMiddleware } from 'redux'; 
import {reducers} from "../reducers"
import logger from 'redux-logger'


export const store = createStore(reducers,applyMiddleware(logger));
