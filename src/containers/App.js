import React, { Component } from 'react';
import classes from './App.module.css';
import Cockpit from 'components/Cockpit/Cockpit';
import Persons from 'components/Persons/Persons';

class App extends Component {
  state = {
    persons: [
      { id: '1', name: 'Max', age: 28 },
      { id: '2', name: 'Manu', age: 29 },
      { id: '3', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    let btnStyle = {
      // backgroundColor: 'lightgreen',
      font: 'inherit',
      padding: '8px',
      cursor: 'pointer'
    };
    let btnClass = '';
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler}
        />
      );

      btnStyle.color = '#fff';
      btnClass = classes.red;
    }

    let paragraphClasses = [];
    if (this.state.persons.length <= 2) {
      paragraphClasses.push(classes.underlined); // ["underlined"]
      paragraphClasses.push(classes.red); // ["underlined", "red"]
    }
    if (this.state.persons.length <= 1) {
      paragraphClasses.push(classes.bold); // ["underlined", "red", "bold"]
    }

    return (
      <div className={classes.App}>
        <Cockpit
          paragraphClasses={paragraphClasses}
          btnClass={btnClass}
          btnStyle={btnStyle}
          clicked={this.togglePersonsHandler}
        />
        {persons}
      </div>
    );

    // return React.createElement('div', {className: 'App'},
    //   React.createElement('h1', null, 'it\'s h1 title')
    // );
  }
}

export default App;
