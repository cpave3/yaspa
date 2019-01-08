import * as Types from "../constants/actionTypes";

export const socketConnect = () => ({
  type: Types.SOCKET_CONNECT
});

export const socketDisconnect = () => ({
  type: Types.SOCKET_DISCONNECT
});

export const checkRoom = (roomName: string, password: string) => ({
  payload: {
    password, 
    roomName
  },
  type: Types.CHECK_ROOM
});

export const roomClaimed = (roomName: string) => ({
  payload: {
    roomName
  },
  type: Types.ROOM_CLAIMED
});

export const roomTaken = () => ({
  payload: {},
  type: Types.ROOM_TAKEN
});

// User Room Auth
export const attemptAuthentication = (roomName: string, name: string, password: string) => ({
  payload: {
    name,
    password,
    roomName
  },
  type: Types.JOIN_ROOM
})
