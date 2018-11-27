import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';

// Import reducers here
import room from './room';
import session from './session';
import socket from './socket';

export default (history: any) => combineReducers({
  room,
  router: connectRouter(history),
  session,
  socket
});

// export default rootReducer;
