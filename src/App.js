import logo from "./logo.svg";
import "./App.css";

function App() {
  const fetchUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => console.log(json));
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
    </div>
  );
}

export default App;
