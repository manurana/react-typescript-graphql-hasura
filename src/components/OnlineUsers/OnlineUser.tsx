import * as React from "react";

import { Online_Users } from "../../generated/graphql";

// TODO: understand this typing and how it was done in boilerplate
const OnlineUser = ({ user }: Online_Users) => {
  return (
    <div className="userInfo">
      <div className="userImg">
        <i className="far fa-user" />
      </div>
      <div className="userName">{user ? user.name : null}</div>
    </div>
  );
};

export default OnlineUser;
