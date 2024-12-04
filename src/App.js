import "./App.css";
import AddTodo from "./components/addTodo";
import Todos from "./components/todos";

const App = () => {
  return (
    <div>
      <h1>Redux Todo</h1>
      <AddTodo />
      <Todos />
    </div>
  );
};

export default App;
