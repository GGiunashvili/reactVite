import TodoItem from "./TodoItem";
export default function TodoList({
  todos,
  setTodos,
}: {
  todos: string[];
  setTodos: any;
}) {
  return (
    <div>
      {todos.map((item: string, index) => (
        <TodoItem key={index} item={item} todos={todos} setTodos={setTodos} />
      ))}
    </div>
  );
}
