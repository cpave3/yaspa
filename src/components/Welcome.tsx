import { faSpinner, faSyncAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import { Link, Redirect, RouteComponentProps } from "react-router-dom";
import { adjs, nouns } from "../files/words";

interface IErrors {
  roomName: boolean;
}

interface IState {
  roomName: string;
  password: string;
  errors: IErrors;
  loading: boolean;
}

interface IProps extends RouteComponentProps {
  loading: boolean;
  errors: object;
  roomName: string;
  checkRoom: (roomName: string, password: string) => void; 
}

export default class Welcome extends React.PureComponent<IProps, IState> {
  public state = {
    errors: {
      roomName: false
    },
    loading: false,
    password: "",
    roomName: ""
  };

  public render() {
    return (
      <div className="bg-blue flex flex-col h-screen content-center">
        { this.props.roomName !== '' ? <Redirect to={`/room/${this.props.roomName}`} /> : null }
        <header className="w-full flex-row">
          <h1 className="font-serif p-4 text-center text-blue-dark font-lobster">
            Yaspa
          </h1>
        </header>
        <section className="flex-1 flex items-center justify-center">
          <div className="bg-grey-lighter rounded-lg shadow-lg flex flex-col justify-between p-8 pb-4 min-h-64">
            <div className="my-2">
              <input
                placeholder="Enter a room name"
                className={`p-4 bg-grey-lightest border ${
                  this.state.errors.roomName ? "border-red" : null
                }`}
                value={this.state.roomName}
                onChange={this.handleNameChange}
              />
              <button
                className="p-4 bg-grey-light border"
                onClick={this.randomName}
              >
                <FontAwesomeIcon icon={faSyncAlt} />
              </button>
            </div>
            <input
              placeholder="Password (optional)"
              className="p-4 bg-grey-lightest border my-2"
              value={this.state.password}
              onChange={this.handlePasswordChange}
              type="password"
              autoComplete="off"
              autoSave="off"
            />
            <button
              className="p-4 bg-green text-white my-2"
              onClick={this.handleSubmitClick}
            >
              {!this.props.loading ? (
                "Let's Go!"
              ) : (
                <FontAwesomeIcon icon={faSpinner} spin={true} />
              )}
            </button>
            <Link title="join room" to="/join" className="text-center my-2">
              or Join an existing room
            </Link>
          </div>
        </section>
      </div>
    );
  }

  private handleSubmitClick = () => {
    const { roomName, password } = this.state;
    const errorRoomName = !(roomName.length > 0);
    this.setState({
      errors: { ...this.state.errors, roomName: errorRoomName }
    });
    if (!errorRoomName) {
      this.props.checkRoom(roomName, password);
      // this.props.history.push(`/room/${roomName}`);
    }
  };

  private randomName = () => {
    const noun = nouns[Math.floor(Math.random() * nouns.length)];
    const adj = adjs[Math.floor(Math.random() * adjs.length)];
    this.setState({ roomName: `${adj}-${noun}` });
  };

  private handlePasswordChange = (event: any) => {
    const password = event.target.value;
    this.setState({ password });
  };

  private handleNameChange = (event: any) => {
    const rawName = event.target.value;
    const roomName = rawName.replace(/\s+/g, "-").toLowerCase();
    this.setState({ roomName });
  };
}
