import React from 'react';
import './Person.css';

const person = (props) => {
  return (
    <div className="Person">
      <p><button onClick={props.click}>X</button> I'm {props.name} and I'm {props.age} years old!</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  )
}

export default person;
