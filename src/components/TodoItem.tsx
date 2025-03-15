export default function TodoItem({
  item,
  todos,
  setTodos,
}: {
  item: { name: string }; // Define item as an object with a name property
  todos: { name: string }[]; // Define todos as an array of objects with a name property
  setTodos: React.Dispatch<React.SetStateAction<{ name: string }[]>>; // Properly type setTodos
}) {
  function handleDelete(item: { name: string }) {
    console.log("delete", item.name);
    setTodos(todos.filter((todo) => todo.name !== item.name)); // Compare by name
  }

  return (
    <div className="flex justify-between w-[200px] bg-purple-200">
      <h3>{item.name}</h3>
      <button onClick={() => handleDelete(item)}>delete</button>
    </div>
  );
}
