import * as React from "react";

interface IProps {
  locked: boolean;
  name: string;
};

const UserStatus = (props: IProps) => (
  <div className={`flex-col flex content-center items-center w-1/3 text-center`}>
    <i className={`fa fa-check p-1 border-4 rounded-full inline m-4 ${props.locked ? 'text-green border-green' : 'text-grey-light border-grey-light'}`} />
    <span className="text-grey-darkest">{props.name || 'Anonymous'}</span>
  </div>
);

export default UserStatus;
