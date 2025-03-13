interface HelloProps {
  person: {
    name: string;
    age?: number;
  };
  size?: number; // Make size optional
}

export default function Hello({ person, size }: HelloProps) {
  //  Specifying a default age for a prop -- without it person.name would work and not just name
  const { name, age = 20 } = person;
  // person.name to name
  return (
    <div>
      <p style={{ width: size }}>
        Hello {name}, you are {age} years old
      </p>
    </div>
  );
}
