import React from "react";

import Player from "./Player";
import classes from "../monster/MonsterList.module.css";


  const PlayerList = (props) => {
    const handlePlayerDelete = (playerId) => {
      props.onDeletePlayer(playerId);
    };
  
    return (
      <ul className={classes["monsters-list"]}>
        {props.players.map((player) => (
          <Player
            key={player.id}
            player={player}
            onDelete={handlePlayerDelete}
          />
        ))}
      </ul>
    );
  };

export default PlayerList;
