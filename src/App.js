import React, { useState } from "react";

// components
import UserInput from "./Components/User/UserInput";
import UserList from "./Components/User/UserList";

function App() {
  const [users, setUsers] = useState([]);

  const saveUser = (uName, uAge) => {
    setUsers((prevState) => {
      return [
        ...prevState,
        { userName: uName, userAge: uAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    <React.Fragment>
      <UserInput onSaveUser={saveUser} />
      <UserList users={users} />
    </React.Fragment>
  );
}

export default App;
