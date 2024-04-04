import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Todo1", completed: false },
    { id: 2, text: "Todo2", completed: true },
  ]);
  const addTodo = (text) => {
    const newTodo = { id: todos.length + 1, text: text, completed: false };
    setTodos((todo) => [...todo, newTodo]);
  };
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const deleteTodo = (id) => {
    setTodos((prevValue) =>
      prevValue
        .filter((todo) => todo.id !== id)
        .map((todo, i) => ({ ...todo, id: i + 1 }))
    );
  };

  return (
    <div className="App">
      <header className="App-header">Todo App</header>
      <main>
        <TodoForm addTodo={addTodo} />
        <TodoList
          toggleTodo={toggleTodo}
          todos={todos}
          deleteTodo={deleteTodo}
        />
      </main>
    </div>
  );
}

export default App;
