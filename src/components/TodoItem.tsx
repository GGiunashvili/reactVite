export default function TodoItem({
  item,
  todos,
  setTodos,
}: {
  item: string;
  todos: string[];
  setTodos: any;
}) {
  function handleDelete(item: string) {
    console.log("delete", item);
    setTodos(todos.filter((todo: string) => todo !== item));
  }
  return (
    <div className="flex justify-between w-[200px] bg-purple-200">
      <h3>{item}</h3>
      <button onClick={() => handleDelete(item)}>delete</button>
    </div>
  );
}
