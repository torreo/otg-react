import * as EventTypes from './eventTypes';

const initialState = {
    1: {
        id: 1,
        text: 'text1',
        level: 1
    },
    2: {
        id: 2,
        text: 'text2',
        level: 2
    },
    3: {
        id: 3,
        text: 'text3',
        level: 3
    }
};

export function widgetsReducer(state = initialState, action) {
    switch (action.type) {
      case EventTypes.CHANGE_LEVEL:
        return {
          ...state,
          [action.data.id]: {
            ...state[action.data.id],
            level: action.data.level
          }
        }
  
      case EventTypes.CHANGE_TEXT:
        return {
          ...state,
          [action.data.id]: {
            ...state[action.data.id],
            text: action.data.text
          }
        }
  
      default:
        return state;
    }
  }
  