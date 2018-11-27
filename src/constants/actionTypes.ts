// Socket stuff
export const SOCKET_CONNECT = "SOCKET/CONNECT";
export const SOCKET_DISCONNECT = "SOCKET/DISCONNECT";
export const PING = "PING";
export const PONG = "PONG";

// HOST WORKFLOW
export const CHECK_ROOM = "HOST/CHECK_ROOM";
export const ROOM_CLAIMED = "SERVER/ROOM_CLAIMED"; // GRANTED
export const ROOM_TAKEN = "SERVER/ROOM_TAKEN"; // REJECTED

// USER WORKFLOW
export const JOIN_ROOM = "USER/JOIN_ROOM";
export const ACCEPT_JOIN = "SERVER/ACCEPT_JOIN";
export const REJECT_JOIN = "SERVER/REJECT_JOIN";
export const USER_SYNC = "SERVER/USER_SYNC";

// INTERNAL LOOP
export const SET_TOPIC = "HOST/SET_TOPIC";
export const START_SESSION = "HOST/START_SESSION";
export const DISTRIBUTE_TOPIC = "SERVER/DISTRIBUTE_TOPIC";
export const SUBMIT_RESPONSE = "USER/SUBMIT_RESPONSE";
export const END_SESSION = "HOST/END_SESSION";
export const COLLATE_RESULTS = "SERVER/COLLATE_RESULTS";
