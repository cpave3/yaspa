import { faSyncAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";

const adjs = [
  "fast",
  "slow",
  "boring",
  "shiny",
  "pointless",
  "complex",
  "serious",
  "pitiful",
  "verbose",
  "awful",
  "disappointing"
];
const nouns = [
  "emu",
  "wombat",
  "koala",
  "engineer",
  "goat",
  "seraph",
  "cantaloupe",
  "todd"
];

interface IState {
  roomName: string;
  password: string;
}

export default class Welcome extends React.PureComponent<{}, IState> {
  public state = {
    password: "",
    roomName: ""
  };

  public render() {
    return (
      <div className="bg-grey flex flex-col h-screen content-center">
        <header className="w-full flex-row">
          <h1 className="font-serif p-4 text-center text-grey-dark font-lobster">
            Yaspa
          </h1>
        </header>
        <section className="flex-1 flex items-center justify-center">
          <div className="bg-grey-lighter rounded-lg shadow-lg flex flex-col justify-between p-8 h-64">
            <div>
              <input
                placeholder="Enter a room name"
                className="p-4 bg-grey-lightest border"
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
              className="p-4 bg-grey-lightest border"
              value={this.state.password}
              onChange={this.handlePasswordChange}
              type="password"
              autoComplete="off"
              autoSave="off"
            />
            <button className="p-4 bg-green text-white">Let's Go!</button>
          </div>
        </section>
      </div>
    );
  }

  private randomName = () => {
    const noun = nouns[Math.floor(Math.random() * nouns.length)];
    const adj = adjs[Math.floor(Math.random() * adjs.length)];
    this.setState({ roomName: `${adj}-${noun}` });
  };

  private handlePasswordChange = (event: any) => {
    const password = event.target.value;
    this.setState({ password });
  }

  private handleNameChange = (event: any) => {
    const rawName = event.target.value;
    const roomName = rawName.replace(/\s+/g, '-').toLowerCase();
    this.setState({ roomName });
  }
}