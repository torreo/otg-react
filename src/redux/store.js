import {combineReducers, createStore} from 'redux';
import {widgetsReducer} from './widgetsReducer';

export const store = createStore(combineReducers({
  widgets: widgetsReducer
}));
