import React from "react";

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id} style={{ display: "flex", gap: "10px" }}>
          <span>ID: {todo.id}</span>
          <span>Task: {todo.text}</span>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
          />
          <button type="button" onClick={() => deleteTodo(todo.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
