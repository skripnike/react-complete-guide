import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import logo from './kiwi.svg';

class App extends Component {
  state = {
    persons: [
      { id: '1', name: 'Max', age: 28 },
      { id: '2', name: 'Manu', age: 29 },
      { id: '3', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: true
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    let styleBtn = {
      backgroundColor: 'lightgreen',
      font: 'inherit',
      border: '1px solid lightblue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangeHandler(event, person.id)} />
          })}
        </div>
      );

      styleBtn.backgroundColor = 'darkred';
      styleBtn.color = '#fff';
    }

    let btnClasses = [];
    if (this.state.persons.length <= 2) {
      btnClasses.push('red'); // ["red"]
    }
    if (this.state.persons.length <= 1) {
      btnClasses.push('bold'); // ["red", "bold"]
    }

    return (
      <div className="App">
        serviceWorker: {('serviceWorker' in navigator) ? 'true' : 'false'}
        <img src={logo} alt="Logo" width="150" />
        <div className="Logo" />
        <h1>Hi, I'm a React App</h1>
        <p className={btnClasses.join(' ')}>This is really working!</p>
        <button
          onClick={this.togglePersonsHandler}
          style={styleBtn}>Toggle Persons</button>
        {persons}
      </div>
    );

    // return React.createElement('div', {className: 'App'},
    //   React.createElement('h1', null, 'it\'s h1 title')
    // );
  }
}

export default App;
