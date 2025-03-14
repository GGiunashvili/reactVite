// import Hello from "./components/Hello";

export default function App() {
  // const person = {
  //   name: "xing",
  //   age: 14,
  //   seatnumbers: [1, 2, 3],
  // };
  // const people = ["ana", "bob", "cat"];
  interface fruitsInterface {
    name: string;
    price: number;
  }

  const fruits: fruitsInterface[] = [
    {
      name: "apple",
      price: 5,
    },
    {
      name: "banana",
      price: 2,
    },

    {
      name: "mango",
      price: 8,
    },
  ];

  return (
    <>
      <h1>home</h1>
      <ul>
        {fruits.map((fruit, index) => {
          return (
            <li key={index}>
              {fruit.name} - {fruit.price}
            </li>
          ); // Return the JSX
        })}
      </ul>
    </>
  );
}
