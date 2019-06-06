import React from 'react';
import svgKiwi from 'assets/img/kiwi.svg';
import classes from './Cockpit.module.css';

const Cockpit = (props) => (
  <div>
    serviceWorker: {'serviceWorker' in navigator ? 'true' : 'false'}
    <br />
    img:
    <img src={svgKiwi} alt="I&rsquo;m a logo" width="150" height="123" />
    div:
    <div className={classes.Logo} />
    <h1>Hi, I'm a React App</h1>
    <p className={props.paragraphClasses.join(' ')}>This is really working!</p>
    <button
      className={props.btnClass}
      style={props.btnStyle}
      onClick={props.clicked}
    >
      Toggle Persons
    </button>
  </div>
);

export default Cockpit;
