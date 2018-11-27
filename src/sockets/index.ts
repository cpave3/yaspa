// These are the actions I dispatch
import { roomClaimed, roomTaken, socketConnect, socketDisconnect } from "../actions";
import * as Types from "../constants/actionTypes";
import { HOST, PORT } from "../constants/socketConfig";

import * as io from "socket.io-client";

const setupSocket = (dispatch: any) => {
  const socket = io(`${HOST}:${PORT}/yaspa`);
  /**
   * Anything that needs to happen in response to web sockets goes in here
   */

  // We have connected to the WSS and need to announce ourselves
  // If we are a host, we need to request a room.
  socket.on("connect", () => {
    dispatch(socketConnect());

    socket.on("disconnect", () => {
      dispatch(socketDisconnect());
    });

    socket.on(Types.PING, () => {
      socket.emit(Types.PONG, { pong: 'staying alive' });
    });

    socket.on(Types.ROOM_TAKEN, () => {
      dispatch(roomTaken())
    });

    socket.on(Types.ROOM_CLAIMED, (data: {roomName: string, users: object[]}) => {
      dispatch(roomClaimed(data.roomName))
    });

  });

  return socket;
};

export default setupSocket;
