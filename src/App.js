import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import User from "./Component/User";
import Todo from "./Component/Todo";
import Error from "./Component/Error";
function App() {
  const [user, setUser] = useState([]);
  const [todo, setTodo] = useState([]);
  const [errorFlag, setErrorFlag] = useState(false);
  const fetchUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/user")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Error!");
        }
      })
      .then((json) => {
        setTodo([]);
        setUser(json);
      })
      .catch((error) => {
        setErrorFlag(true);
        console.log("error");
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

  if (errorFlag) {
    return <Error />;
  }
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
