import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [user, setUser] = useState([]);

  const fetchUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        setUser(json);
      });
  };

  const fetchTodos = () => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  return (
    <div className="App">
      <div className="topbar">
        <button onClick={fetchUsers}>User</button>
        <button onClick={fetchTodos}>Todos</button>
      </div>
      {user.map((user, index) => {
        return (
          <div>
            <h3>Name: {user.name}</h3>
            <h3>User: {user.username}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default App;
