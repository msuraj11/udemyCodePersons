import React, { useEffect, useRef } from "react";
import "../../assets/Cockpit.css";
import reset from "../../assets/reset.png";

const Cockpit = props => {
  const autoToggleButtonClick = useRef(null);
  useEffect(() => {
    console.log("useEffect of cockpit.js");
    const timer = setTimeout(() => {
      alert("Data saved to cloud");
      autoToggleButtonClick.current.click();
    }, 1000);
    return () => {
      clearTimeout(timer);
      console.log("clean-up of cockpit useEffect");
    };
  }, [props.persons]);

  useEffect(() => {
    console.log("2nd useEffect of cockpit.js");
    return () => {
      console.log("clean-up of cockpit 2nd useEffect");
    };
  }, []);

  const classes = [];
  const buttonClasses = props.showPersons ? "Cockpit" : "UnCockpit";
  if (props.personsLength <= 2) {
    classes.push("red");
  }
  if (props.personsLength <= 1) {
    classes.push("bold");
  }
  return (
    <div>
      <h1>Hi, I'm a React App</h1>
      <p className={classes.join(" ")}>This is really working!</p>
      <button
        ref={autoToggleButtonClick}
        className={buttonClasses}
        onClick={props.togglePersonsHandler}
      >
        Toggle Persons
      </button>
      <img
        className="resetIcon"
        alt="Reset-icon"
        src={reset}
        onClick={props.resetHandler}
      />
    </div>
  );
};

export default React.memo(Cockpit);
