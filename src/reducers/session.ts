import * as Types from '../constants/actionTypes';

import IAction from '../interfaces/reducerAction';

const initialState = {
  currentTopic: '',
  pastSessions: [],
  sessionActive: false
};

const session = (state = initialState, action: IAction) => {
  switch(action.type) {
    case Types.SET_TOPIC:
      return { ...state, currentTopic: action.payload.topic };
    case Types.START_SESSION:
      return { ...state, sessionActive: true };
    case Types.END_SESSION:
      return { ...state, sessionActive: false };
    case Types.COLLATE_RESULTS:
      return { ...state, pastSessions: action.payload.pastSessions };
    default:
      return state;
  }
}

export default session;
