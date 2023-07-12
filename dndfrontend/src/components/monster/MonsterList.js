import React from "react";

import Monster from "./Monster";
import classes from "./MonsterList.module.css";

const MonsterList = (props) => {
  return (
    <ul className={classes["monsters-list"]}>
      {props.monsters.map((monster) => (
        <>
          <Monster
            key={monster.id}
            name={monster.name}
            url={monster.url}
            ac={monster.ac}
            hp={monster.hp}
            cr={monster.cr}
            str={monster.str}
            dex={monster.dex}
            con={monster.con}
            wis={monster.wis}
            cha={monster.cha}
          />
        </>
      ))}
    </ul>
  );
};

export default MonsterList;
