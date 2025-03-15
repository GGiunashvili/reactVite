export default function TodoItem({
  item,
  todos,
  setTodos,
}: {
  item: { name: string; done: boolean }; // Define item as an object with a name and done property
  todos: { name: string; done: boolean }[]; // Define todos as an array of objects with a name and done property
  setTodos: React.Dispatch<
    React.SetStateAction<{ name: string; done: boolean }[]>
  >; // Properly type setTodos
}) {
  function handleDelete(item: { name: string }) {
    console.log("delete", item.name);
    setTodos(todos.filter((todo) => todo.name !== item.name)); // Compare by name
  }

  function handleClick(name: string) {
    const newArray = todos.map((todo) =>
      todo.name === name ? { ...todo, done: !todo.done } : todo
    );

    setTodos(newArray);
    console.log(todos);
  }

  const className = item.done ? "bg-red-900" : "";

  return (
    <div className="flex justify-between w-[200px] bg-purple-200">
      <span className={className} onClick={() => handleClick(item.name)}>
        {item.name}
      </span>

      <button onClick={() => handleDelete(item)}>delete</button>
    </div>
  );
}
