import React, { Component } from 'react';
import classes from './Person.module.css';

class Person extends Component {
  render() {
    let stylePerson = {
      backgroundColor: 'gray'
    };
    console.log('[Person.js] rendering...');

    return (
      <div className={classes.Person} style={stylePerson}>
        <p>
          <button onClick={this.props.click}>X</button> I'm {this.props.name}{' '}
          and I&rsquo;m {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </div>
    );
  }
}

export default Person;
