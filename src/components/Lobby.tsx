import * as React from "react";
import { isBrowser } from 'react-device-detect';
import { Link } from 'react-router-dom';

export default class Lobby extends React.PureComponent {
  public render() {
    return (
      <div className="bg-blue flex flex-col h-screen content-center">
        <header className="w-full flex-row">
          <h1 className="font-serif p-4 text-center text-blue-dark font-lobster">
            Yaspa
          </h1>
        </header>
        <section className="flex-1 flex items-center justify-center">
          <div className="bg-grey-lighter rounded-lg shadow-lg flex flex-col justify-between p-8 pb-4 min-h-64">
              <input placeholder="Your Name" className="p-4 my-2 border" />
              <input placeholder="Room Name" className="p-4 my-2 border" />
              <input placeholder="Password (optional)" className="p-4 my-2 border" />
              <button className="p-4 bg-green text-white my-2"> Join Now! </button>
              { isBrowser ? <Link className="text-center my-2" to="/" title="Create room">or make your own room</Link> : null } 
          </div>
        </section>
      </div>
    );
  }
}
