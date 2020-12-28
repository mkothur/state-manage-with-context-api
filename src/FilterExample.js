import React from "react";

const FilterExample = () => {
  const arrNames = ["James", "John", "Paul", "Ringo", "George"];
  const people = [
    {
      name: "James",
      age: 31
    },
    {
      name: "John",
      age: 45
    },
    {
      name: "Paul",
      age: 65
    },
    {
      name: "Ringo",
      age: 49
    },
    {
      name: "George",
      age: 34
    }
  ];
  return (
    <div>
      {arrNames
        .filter((name) => name.includes("J"))
        .map((filteredName) => (
          <li>{filteredName}</li>
        ))}
      {people
        .filter((person) => person.age < 60)
        .map((filteredPerson) => (
          <li>{filteredPerson.name}</li>
        ))}
    </div>
  );
};

export default FilterExample;
