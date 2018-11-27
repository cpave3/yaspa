import * as Types from "../constants/actionTypes";

import IAction from '../interfaces/reducerAction';

const initialState = {
  connected: false
};

const socket = (state = initialState, action: IAction) => {
  switch (action.type) {
    case Types.SOCKET_CONNECT:
      return { ...state, connected: true };
    case Types.SOCKET_DISCONNECT:
      return { ...state, connected: false };
    default:
      return state;
  }
};

export default socket;
