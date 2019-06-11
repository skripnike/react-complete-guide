import React from 'react';
import classes from './Cockpit.module.css';
import svgKiwi from 'assets/img/kiwi.svg';

const cockpit = (props) => {
  let btnStyle = {
    font: 'inherit',
    padding: '8px',
    cursor: 'pointer'
  };
  let btnClass = '';
  let paragraphClasses = [];

  if (props.personsLength <= 2) {
    paragraphClasses.push(classes.underlined); // ["underlined"]
    paragraphClasses.push(classes.red); // ["underlined", "red"]
  }
  if (props.personsLength <= 1) {
    paragraphClasses.push(classes.bold); // ["underlined", "red", "bold"]
  }
  if (props.togglePersons) {
    btnStyle.color = '#fff';
    btnClass = classes.red;
  }

  return (
    <div className={classes.Cockpit}>
      serviceWorker: {'serviceWorker' in navigator ? 'true' : 'false'}
      <br />
      img:
      <img src={svgKiwi} alt="I&rsquo;m a logo" width="150" height="123" />
      div:
      <div className={classes.Logo} />
      <h1>{props.title}</h1>
      <p className={paragraphClasses.join(' ')}>This is really working!</p>
      <button className={btnClass} style={btnStyle} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
};

export default cockpit;
