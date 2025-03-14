interface FruitsProps {
  name: string;
  price: number;
}

export default function Fruits({ name, price }: FruitsProps) {
  return (
    <>
      <li>
        {name} -- {price}
      </li>
    </>
  );
}
