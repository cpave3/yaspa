import { connect } from "react-redux";

import DebugBarComponent from "../components/DebugBar";

const mapStateToProps = (state: any) => ({
  socket: state.socket
});

const mapDispatchToProps = (dispatch: () => void) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DebugBarComponent);
