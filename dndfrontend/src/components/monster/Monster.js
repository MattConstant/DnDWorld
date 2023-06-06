import React from 'react';

import classes from './Monster.module.css';

const Monster = (props) => {
  return (
    <li className={classes.monster}>
      <h2>{props.name}</h2>
    </li>
  );
};

export default Monster;