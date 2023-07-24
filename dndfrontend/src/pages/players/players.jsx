import PlayerList from "../../components/player/PlayerList.js";
import AddPlayer from "../../components/player/AddPlayer.js";
import Delete from "../../components/player/Player.js"
import { useState, useEffect, useCallback } from "react";

const Players = () => {
  const [players, setPlayers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPlayersHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("http://localhost:8080/player");
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      const loadedPlayers = [];

      for (const key in data) {
        loadedPlayers.push({
          id: key,
          name: data[key].name,
          armorClass: data[key].armorClass,
          initiative: data[key].initiative,
          perception: data[key].perception,
          cl: data[key].cl,
          race: data[key].cl,
          background: data[key].background,
          align: data[key].align,
          speed: data[key].speed,
          prof: data[key].prof,
          str: data[key].str,
          con: data[key].con,
          intl: data[key].intl,
          wis: data[key].wis,
          cha: data[key].cha,
          dex: data[key].dex,
          skills: data[key].skills,
          notes: data[key].notes,
        });
      }

      setPlayers(loadedPlayers);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchPlayersHandler();
  }, [fetchPlayersHandler]);

  async function addPlayerHandler(player) {
    const response = await fetch("http://localhost:8080/player", {
      method: "POST",
      body: JSON.stringify(player),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  }

  async function deletePlayerHandler(playerId) {
    // Make a DELETE request to the server to delete the player with the given id
    try {
      const response = await fetch(`http://localhost:8080/player/${playerId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      // Update the state to remove the deleted player
      setPlayers((prevPlayers) =>
        prevPlayers.filter((player) => player.id !== playerId)
      );
    } catch (error) {
      setError(error.message);
    }
  }

  let content = <p>Found no players.</p>;

  if (players.length > 0) {
    content = <PlayerList players={players} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }


  return (
    <>
      <h1>Players</h1>
      <section>
        <AddPlayer onAddPlayer={addPlayerHandler} />
      </section>
      <section>
        <button onClick={fetchPlayersHandler}>Fetch Players</button>
      </section>
      
      <section>
        <PlayerList players={players} onDeletePlayer={deletePlayerHandler} />
      </section>
    </>
  );
};

export default Players;
