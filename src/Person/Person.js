import React from 'react';
import './Person.css';

const person = (props) => {
  let stylePerson = {
    backgroundColor: 'gray',
    // ':hover': {
    //   backgroundColor: 'darkgreen',
    //   color: 'yellow'
    // },
    // '@media (min-width: 500px)': {
    //   width: '450px'
    // }
  }

  return (
    <div className="Person" style={stylePerson}>
      <p><button onClick={props.click}>X</button> I'm {props.name} and I'm {props.age} years old!</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  )
}

export default person;
