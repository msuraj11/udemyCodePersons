import React from "react";
import Person from "./Person/Person";

export const Persons = props =>
  props.persons.map((person, index) => {
    return (
      <Person
        click={() => props.deletePersonHandler(index)}
        name={person.name}
        age={person.age}
        key={person.id}
        changed={event => props.nameChangedHandler(event, index)}
      />
    );
  });
