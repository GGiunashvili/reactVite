import React, { useState } from "react";
import TodoList from "./TodoList";
import Form from "./Form";
export default function Todo() {
  const [todos, setTodos] = useState([]);
  const completedTodos = todos.filter((todo) => todo.done).length;
  const totalTodos = todos.length;
  return (
    <div>
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
      <h1>{completedTodos}</h1>
      <h1>{totalTodos}</h1>
    </div>
  );
}
