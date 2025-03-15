import TodoItem from "./TodoItem";

export default function TodoList({
  todos,
  setTodos,
}: {
  todos: { name: string; done: boolean }[]; // Updated to include the 'done' property
  setTodos: React.Dispatch<
    React.SetStateAction<{ name: string; done: boolean }[]>
  >; // Updated type
}) {
  return (
    <div>
      {todos.map((item) => (
        <TodoItem
          key={item.name}
          item={item}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
}
