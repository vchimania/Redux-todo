import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

const Todos = () => {
  const todoSelector = useSelector((state) => state.todos);
  console.log({ todoSelector });
  const dispatch = useDispatch();
  return (
    <div>
      {todoSelector.todos.map((todo) => (
        <div key={todo.id}>
          <input type="text" defaultValue={todo.text} key={todo.id} />
          <button type="button" onClick={() => dispatch(removeTodo(todo.id))}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default Todos;
