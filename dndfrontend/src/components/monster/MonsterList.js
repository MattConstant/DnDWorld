import React from "react";

import Monster from "./Monster";
import classes from "../monster/MonsterList.module.css";


  const MonsterList = (props) => {
    const handleDeleteMonster = (id) => {
      props.onDeleteMonster(id);
    };
  
    return (
      <ul className={classes["monsters-list"]}>
        {props.monsters.map((monster) => (
          <Monster
            key={monster.id}
            monster={monster}
            onDelete={() => handleDeleteMonster(monster.id)} 
          />
        ))}
      </ul>
    );
  };

export default MonsterList;
