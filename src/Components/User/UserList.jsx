import React from "react";

// components
import Card from "../UI/Card";

import classes from "./UserList.module.css";

const UserList = (props) => {
  return (
    <React.Fragment>
      <Card className={classes.users}>
        <ul>
          {props.users.map((user) => {
            return (
              <li
                key={user.id}
              >{`${user.userName} (${user.userAge} years old)`}</li>
            );
          })}
        </ul>
      </Card>
    </React.Fragment>
  );
};

export default UserList;
