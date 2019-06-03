import React from 'react';
import classes from './Person.module.css';

const person = (props) => {
  let stylePerson = {
    backgroundColor: 'gray',
  };

  const rnd = Math.random();
  if (rnd > 0.5) {
    throw new Error('Smth went wrong...');
  }

  return (
    <div className={classes.Person} style={stylePerson}>
      <p>
        <button onClick={props.click}>X</button> I'm {props.name} and I'm{' '}
        {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input type='text' onChange={props.changed} value={props.name} />
    </div>
  );
};

export default person;
