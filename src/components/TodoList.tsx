import TodoItem from "./TodoItem";
export default function TodoList({ todos }: { todos: string[] }) {
  return (
    <div>
      {todos.map((item: string, index) => (
        <TodoItem key={index} item={item} />
      ))}
    </div>
  );
}
