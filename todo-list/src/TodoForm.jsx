import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState("");
  const inputSubmitChangeHandler = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText("");
    }
  };
  return (
    <form onSubmit={inputSubmitChangeHandler}>
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button type="submit" onClick={inputSubmitChangeHandler}>
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;
