import Hello from "./components/Hello";

export default function App() {
  return (
    <>
      <h1>home</h1>
      <Hello person={{ name: "Lin Lanying", age: 12 }} size={150} />
      <Hello person={{ name: "monkey " }} />
    </>
  );
}
