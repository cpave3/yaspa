import { takeEvery } from 'redux-saga/effects';

import * as Types from '../constants/actionTypes';

import IAction from '../interfaces/reducerAction';

interface IParams {
  socket: {
    emit: (type: string, data: any) => void;
  };
};

// Check if room is free
export const handleCheckRoom = function* checkRoom(params: IParams) {
  yield takeEvery(Types.CHECK_ROOM, (action: IAction) => {
    // send something to the web sockets here
    params.socket.emit(Types.CHECK_ROOM, action.payload);
  });
};

export const handleAttemptAuthentication = function* attemptAuthentication(params: IParams) {
  yield takeEvery(Types.JOIN_ROOM, (action: IAction) => {
    params.socket.emit(Types.JOIN_ROOM, action.payload);
  });
};
