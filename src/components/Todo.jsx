import React, { useState } from "react";
import TodoItem from "./TodoItem";

export default function Todo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          value={todo}
        />
        <button type="submit">გაგზავნა</button>
      </form>

      {todos.map((item) => (
        <TodoItem item={item} />
      ))}
    </div>
  );
}
