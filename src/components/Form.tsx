import { useState } from "react";

export default function Form({ todos, setTodos }: any) {
  const [todo, setTodo] = useState<string>(""); // Initializing with an empty string

  function handleSubmit(e: any) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo(""); // Resetting the input field
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="border"
        onChange={(e) => setTodo(e.target.value)}
        type="text"
        value={todo}
      />
      <button type="submit">გაგზავნა</button>
    </form>
  );
}
