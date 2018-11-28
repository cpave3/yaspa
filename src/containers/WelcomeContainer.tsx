import { connect } from "react-redux";

import { checkRoom } from "../actions";
import WelcomeComponent from "../components/Welcome";

import IAction from "../interfaces/reducerAction";

const mapStateToProps = (state: any) => ({
  errors: state.room.errors,
  loading: state.room.loading,
  roomName: state.room.roomName
});

const mapDispatchToProps = (dispatch: (action: IAction) => void) => ({
  checkRoom: (roomName: string, password: string) => dispatch(checkRoom(roomName, password))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WelcomeComponent);
