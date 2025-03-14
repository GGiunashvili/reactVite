interface HelloProps {
  name: string;
  age?: number;
  seatnumbers: number[]; // Default value
  size?: number; // Make size optional
}

export default function Hello(props: any) {
  //  Specifying a default age for a prop -- without it person.name would work and not just name
  // person.name to name
  return (
    <div>
      <p>
        Hello {props.person.name}, you are {props.person.age} years old, your
        seat is {props.person.seatnumbers}
      </p>
    </div>
  );
}
