import React from 'react';

import Monster from './Monster';
import classes from './MonsterList.module.css';

const MonsterList = (props) => {
  return (
    <ul className={classes['monsters-list']}>
      {props.monsters.map((monster) => (
        <Monster
          key={monster.id}
          name={monster.name}
        />
      ))}
    </ul>
  );
};

export default MonsterList;