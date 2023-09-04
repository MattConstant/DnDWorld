import React from "react";

import Player from "./Player";
import classes from "../monster/MonsterList.module.css";


const PlayerList = (props) => {
  const handlePlayerDelete = (playerId) => {
    props.onDeletePlayer(playerId);
  };

  // Check if props.players is defined and not null before mapping over it
  if (!props.players || props.players.length === 0) {
    return <p>No players available.</p>;
  }

  return (
    <ul className={classes["monsters-list"]}>
      {props.players.map((player) => (
        <Player
          key={player.id}
          player={player}
          username={props.username}
          onDelete={handlePlayerDelete}
        />
      ))}
    </ul>
  );
};

export default PlayerList;
