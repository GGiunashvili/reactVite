import { useState } from "react";

export default function Form({ todos, setTodos }: any) {
  const [todo, setTodo] = useState<{ name: string; done: boolean }>({
    name: "",
    done: false,
  }); // Initializing with an empty object

  function handleSubmit(e: any) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", done: false }); // Resetting the input field
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="border"
        onChange={(e) => setTodo({ name: e.target.value, done: false })}
        type="text"
        value={todo.name}
      />
      <button type="submit">გაგზავნა</button>
    </form>
  );
}
