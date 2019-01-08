import { connect } from "react-redux";

import { attemptAuthentication } from "../actions";
import LobbyComponent from "../components/Lobby";

import IAction from "../interfaces/reducerAction";

const mapStateToProps = (state: any) => ({
  
});

const mapDispatchToProps = (dispatch: (action: IAction) => void) => ({
  attemptAuthentication: (roomName: string, name: string, password: string) => dispatch(attemptAuthentication(roomName, name, password))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LobbyComponent);
