import React, { useState, useRef } from "react";

// components
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModel from "../UI/ErrorModel";

import classes from "./UserInput.module.css";

const UserInput = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  // const [userInfo, setUserInfo] = useState({
  //   username: "",
  //   userage: "",
  // });
  const [error, setError] = useState(false);

  // const getValueHandler = (event) => {
  //   setUserInfo((prevState) => {
  //     return {
  //       ...prevState,
  //       [event.target.name]: event.target.value,
  //     };
  //   });
  // };

  const saveUserHandler = (event) => {
    // const { username, userage } = userInfo;
    event.preventDefault();
    const username = nameInputRef.current.value;
    const userage = ageInputRef.current.value;

    if (username.trim().length === 0 || userage.trim().length === 0) {
      return setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age (non-empty value).",
      });
    }
    if (+userage <= 0) {
      return setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
    }
    props.onSaveUser(username, userage);
    nameInputRef.current.value = ''
    ageInputRef.current.value = ''
    // setUserInfo({
    //   username: "",
    //   userage: "",
    // });
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <React.Fragment>
      {error && (
        <ErrorModel
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}

      <Card className={classes.input}>
        <form onSubmit={saveUserHandler}>
          <label htmlFor="name">Username</label>
          <input
            type="text"
            id="name"
            name="username"
            ref={nameInputRef}
            // value={userInfo.username}
            // onChange={getValueHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            type="number"
            id="age"
            name="userage"
            ref={ageInputRef}
            // value={userInfo.userage}
            // onChange={getValueHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default UserInput;
