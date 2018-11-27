import { takeEvery } from 'redux-saga/effects';

import * as Types from '../constants/actionTypes';

interface IParams {
  socket: {
    emit: (type: string, data: any) => void;
  };
};

// Check if room is free
export const handleCheckRoom = function* checkRoom(params: IParams) {
  yield takeEvery(Types.CHECK_ROOM, action => {
    // send something to the web sockets here
    params.socket.emit(Types.CHECK_ROOM, action);
  });
};
