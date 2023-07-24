import React from "react";

import Monster from "./Monster";
import classes from "./MonsterList.module.css";


  const MonsterList = (props) => {
    const handleMonsterDelete = (monsterId) => {
      props.onDeleteMonster(monsterId);
    };
  
    return (
      <ul className={classes["monsters-list"]}>
        {props.monsters.map((monster) => (
          <Monster
            key={monster.id}
            monster={monster} // Pass the entire monster object as a prop
            onDelete={handleMonsterDelete}
          />
        ))}
      </ul>
    );
  };

export default MonsterList;
