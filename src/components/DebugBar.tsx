import * as React from 'react';

interface IProps {
  socket: any;
};

export default class DebugBar extends React.PureComponent<IProps, {}> {
  public render() {
    return (
      <div className="p-2 bg-grey-darkest text-grey font-mono flex flex-row absolute pin-b pin-x">
        <div>Socket: { this.props.socket.connected ? <span className="text-green">Connected</span> : <span className="text-red">Disconnected</span> }</div>
      </div>
    );
  }
}
