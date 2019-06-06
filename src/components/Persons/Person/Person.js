import React from 'react';
import classes from './Person.module.css';

const Person = (props) => {
  let stylePerson = {
    backgroundColor: 'gray'
  };

  return (
    <div className={classes.Person} style={stylePerson}>
      <p>
        <button onClick={props.click}>X</button> I'm {props.name} and I&rsquo;m{' '}
        {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default Person;
