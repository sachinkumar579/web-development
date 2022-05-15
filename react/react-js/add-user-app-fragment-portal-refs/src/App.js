import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import "./App.css";
import UsersList from "./components/Users/UsersList";

const App = () => {
  const [usersList, setUsersList] = useState([]);
  const addUserHandler = (uName, uAge) => {
    setUsersList((prevData) => {
      return [
        ...prevData,
        { name: uName, age: uAge, id: 10000 * Math.random() },
      ];
    });
  };

  console.log(usersList);
  return (
    <div className="main">
      <AddUser onAddUser={addUserHandler}></AddUser>
      <UsersList users={usersList}></UsersList>
    </div>
  );
};

export default App;
