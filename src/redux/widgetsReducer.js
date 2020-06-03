import * as EventTypes from './eventTypes';

const initialState = {
    1: {
        id: 1,
        properties: {
          text: 'text1',
          level: 1
        },
        x: 100,
        y: 100,
        height: 200,
        width: 200
    },
    2: {
        id: 2,
        properties: {
          text: 'text2',
          level: 2
        },
        x: 300,
        y: 300,
        height: 200,
        width: 200
    },
    3: {
        id: 3,
        properties: {
          text: 'text3',
          level: 3
        },
        x: 500,
        y: 500,
        height: 200,
        width: 200
    }
};

export function widgetsReducer(state = initialState, action) {
    switch (action.type) {
      case EventTypes.CHANGE_LEVEL:
        return {
          ...state,
          [action.data.id]: {
            ...state[action.data.id],
            properties: {
              ...state[action.data.id].properties,
              level: action.data.level
            }
          }
        }
  
      case EventTypes.CHANGE_TEXT:
        return {
          ...state,
          [action.data.id]: {
            ...state[action.data.id],
            properties: {
              ...state[action.data.id].properties,
              text: action.data.text
            }
          }
        }
  
      default:
        return state;
    }
  }
