import React from "react";

interface Person {
  firstName: string;
  lastName: string;
  age: number;
  isAlive?: boolean;
  address: {
    country: string;
    houseNo: number;
  };
}
export const ObjectLiterals = () => {
  const person: Person = {
    firstName: "Ismael",
    lastName: "Dicent",
    age: 23,
    address: {
      country: "Dominican Republic",
      houseNo: 30,
    },
  };
  return (
    <>
      <h3>Objetos literales</h3>
      <pre>{JSON.stringify(person, null, 2)}</pre>
    </>
  );
};
