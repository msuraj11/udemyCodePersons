import React, { Component } from "react";
import "./App.css";
import { Persons } from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import loader from "../assets/loader.gif";
import Aux from "../hoc/Auxiliary";
import withClass from "../hoc/withClass";

class App extends Component {
  state = {
    persons: [
      { id: "asfa1", name: "Max", age: 28 },
      { id: "vasdf1", name: "Manu", age: 29 },
      { id: "asdf11", name: "Stephanie", age: 26 }
    ],
    otherState: "some other value",
    showPersons: false,
    sound: false,
    showCockpit: true
  };

  InitialState = { ...this.state };

  nameChangedHandler = (event, personIndex) => {
    // const personIndex = this.state.persons.findIndex(p => {
    //   return p.id === id;
    // });

    const person = { ...this.state.persons[personIndex] };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    //const doesShow = this.state.showPersons;
    this.setState(prevState => ({
      showPersons: !prevState.showPersons,
      sound: false
    }));
  };

  resetHandler = () => {
    //const suraj = this;
    this.setState({
      persons: this.InitialState.persons,
      otherState: this.InitialState.otherState,
      showPersons: this.InitialState.showPersons,
      sound: !this.InitialState.sound
    });
    setTimeout(() => {
      this.setState({
        sound: this.InitialState.sound,
        showPersons: true
      });
    }, 2000);
  };

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          deletePersonHandler={this.deletePersonHandler}
          nameChangedHandler={this.nameChangedHandler}
        />
      );
    }

    return (
      <Aux>
        <button
          onClick={() => {
            this.setState({ showCockpit: false });
          }}
        >
          Remove Cockpit
        </button>
        {this.state.showCockpit && (
          <Cockpit
            personsLength={this.state.persons.length}
            showPersons={this.state.showPersons}
            togglePersonsHandler={this.togglePersonsHandler}
            resetHandler={this.resetHandler}
          />
        )}
        {this.state.sound && <img src={loader} alt="pic" />}
        {persons}
      </Aux>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default withClass(App, "App");
