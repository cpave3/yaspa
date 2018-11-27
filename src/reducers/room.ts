import * as Types from '../constants/actionTypes';

import IAction from '../interfaces/reducerAction';

const initialState = {
  errors: {},
  loading: false,
  roomName: '',
  users: []
};

const room = (state = initialState, action: IAction) => {
  switch(action.type) {
    case Types.ROOM_CLAIMED:
      return { ...state, roomName: action.payload.roomName, loading: false, errors: {}};
    case Types.ROOM_TAKEN:
      return { ...state, errors: { roomName: 'This name is already taken' }, loading: false }
    case Types.CHECK_ROOM:
      return { ...state, loading: true };
    case Types.USER_SYNC:
      return { ...state, users: action.payload.users };
    default:
      return state;
  }
}

export default room;
