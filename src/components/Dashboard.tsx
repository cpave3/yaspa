import * as React from "react";
import UserStatus from "./UserStatus";

interface IUser {
  name: string;
  id: string;
  locked: boolean;
}

interface IState {
  users: IUser[];
  sessionActive: boolean;
  currentTopic: string;
}

export default class Dashboard extends React.PureComponent<{}, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      currentTopic: "",
      sessionActive: false,
      users: [
        { id: "1", name: "Cameron Pavey", locked: false },
        { id: "2", name: "John Doe", locked: false }
      ]
    };
  }

  public render() {
    return (
      <section className="p-4 bg-blue h-screen flex-row flex content-center items-center justify-center">
        <div className="w-full h-full">
          <div className="row h-full">
            {/* Sidebar */}
            <div className="col-sm-5 col-md-4 h-full">
              <div className="bg-white rounded shadow-lg p-4 h-full flex-col flex">
                <div className="border-b pb-4 mb-4">
                  <input
                    placeholder="Enter the next issue"
                    className={`border inline-block w-5/6 p-3 ${
                      this.state.sessionActive ? "bg-grey-lighter" : null
                    }`}
                    onChange={this.setTopic}
                    value={this.state.currentTopic}
                    disabled={this.state.sessionActive}
                    onKeyDown={this.HandleKeydown}
                  />
                  <button
                    className={`w-1/6 p-3 border text-white ${
                      this.state.sessionActive ||
                      this.state.currentTopic.length === 0
                        ? "bg-green-lighter border-green-lighter cursor-not-allowed"
                        : "border-green bg-green"
                    }`}
                    onClick={this.state.currentTopic.length > 0 ? this.startSession : undefined}
                  >
                    Go
                  </button>
                </div>
                <div className="flex justify-between flex-wrap my-4 flex-1 content-start">
                  {/* User Tiles */}
                  {this.state.users.map((user, index) => (
                    <UserStatus
                      key={index}
                      name={user.name}
                      locked={user.locked}
                    />
                  ))}
                </div>
                <div className="flex flex-row mt-10 border-t pt-4">
                  <div className="w-full p-1">
                    <button
                      className={`p-4 bg-red text-white block w-full ${
                        !this.state.sessionActive
                          ? "bg-red-lighter cursor-not-allowed"
                          : null
                      }`}
                      disabled={!this.state.sessionActive}
                      onClick={this.endSession}
                    >
                      Finish this round
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Results */}
            <div className="col-sm-7 col-md-8">
              <div className="bg-white rounded shadow-lg p-4 h-full">
                <div>{/* <Bar options={options} data={data} /> */}</div>
                <div className="border-t my-2 py-2">
                  <table className="w-full h-full text-center border">
                    <tr className="border">
                      <th>User</th>
                      <th>Vote</th>
                    </tr>
                    <tr className="border">
                      <td className="border">John</td>
                      <td className="border">3</td>
                    </tr>
                    <tr className="border">
                      <td className="border">John</td>
                      <td className="border">3</td>
                    </tr>
                    <tr className="border">
                      <td className="border">John</td>
                      <td className="border">3</td>
                    </tr>
                    <tr className="border">
                      <td className="border">John</td>
                      <td className="border">3</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  private HandleKeydown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      this.startSession();
    }
  };

  private setTopic = (newTopic: any) => {
    this.setState({
      currentTopic: newTopic.target.value
    });
  };

  private startSession = () => {
    this.setState({
      sessionActive: true
    });
  };

  private endSession = () => {
    this.setState({
      currentTopic: "",
      sessionActive: false
    });
  };
}
