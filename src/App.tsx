// import Hello from "./components/Hello";
import Fruits from "./components/Fruits";
export default function App() {
  // const person = {
  //   name: "xing",
  //   age: 14,
  //   seatnumbers: [1, 2, 3],
  // };
  // const people = ["ana", "bob", "cat"];

  const fruits = [
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
        {fruits.map((fruit) => {
          return (
            <Fruits key={fruit.name} name={fruit.name} price={fruit.price} />
          ); // Return the JSX
        })}
      </ul>
    </>
  );
}
