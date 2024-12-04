import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";

const Todos = () => {
  const todoSelector = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleTodoUpdate = (e, id, currentText) => {
    e.preventDefault();
    const updatedText = e.target.elements.todoInput.value.trim();
    if (updatedText && updatedText !== currentText) {
      dispatch(updateTodo({ id, text: updatedText }));
    }
  };

  return (
    <div>
      {todoSelector.todos.map((todo) => (
        <form
          key={todo.id}
          onSubmit={(e) => handleTodoUpdate(e, todo.id, todo.name)}
        >
          <input
            type="text"
            defaultValue={todo.text}
            key={todo.id}
            name="todoInput"
          />
          <button type="button" onClick={() => dispatch(removeTodo(todo.id))}>
            Remove
          </button>
          <button type="submit">Update</button>
        </form>
      ))}
    </div>
  );
};

export default Todos;
