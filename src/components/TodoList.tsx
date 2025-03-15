import TodoItem from "./TodoItem";

export default function TodoList({
  todos,
  setTodos,
}: {
  todos: { name: string }[];
  setTodos: React.Dispatch<React.SetStateAction<{ name: string }[]>>;
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
