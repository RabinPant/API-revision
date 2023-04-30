import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import User from "./Component/User";
import Todo from "./Component/Todo";

function App() {
  const [user, setUser] = useState([]);
  const [todo, setTodo] = useState([]);

  const fetchUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        setTodo([]);
        setUser(json);
      });
  };

  const fetchTodos = () => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        setUser([]);
        setTodo(json);
      });
  };

  return (
    <div className="App">
      <div className="topbar">
        <button onClick={fetchUsers}>User</button>
        <button onClick={fetchTodos}>Todos</button>
      </div>
      {user.map((user, index) => {
        return <User user={user} />;
      })}
      {todo.map((todo, index) => {
        return <Todo todo={todo} />;
      })}
    </div>
  );
}

export default App;
