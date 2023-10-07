interface Person {
  nameComplete: string;
  age: number;
  address: Address;
}

interface Address {
  country: string;
  homeNo: number;
}

export const ObjetosLiterales = () => {
  const person: Person = {
    nameComplete: "Pierre",
    age: 23,
    address: {
      country: "Perú",
      homeNo: 123,
    },
  };

  return (
    <>
      <h3>Obtetos literales</h3>
      {/* {JSON.stringify(person)} */}
      <code>
        <pre>{JSON.stringify(person, null, 2)}</pre>
      </code>
    </>
  );
};
