import React, { useEffect, useRef } from "react";
import "../../../assets/Person.css";
//import Aux from "../../../hoc/Auxiliary";
import withClass from "../../../hoc/withClass";

const person = props => {
  const inputElementRef = useRef(null);
  useEffect(() => {
    inputElementRef.current.focus();
  }, []);
  return (
    <div>
      <p onClick={props.click}>
        I'm {props.name} and I am {props.age} years old!
      </p>
      <input
        type="text"
        onChange={props.changed}
        value={props.name}
        ref={inputElementRef}
      />
    </div>
  );
};

export default withClass(person, "Person");
