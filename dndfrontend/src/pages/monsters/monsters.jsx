import MonsterList from "../../components/monster/MonsterList.js";
import AddMonster from "../../components/monster/AddMonster.js";
import Delete from "../../components/monster/Monster.js"
import { useState, useEffect, useCallback } from "react";

const Monsters = () => {
  const [monsters, setMonsters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMonstersHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("http://localhost:8080/monster");
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      const loadedMonsters = [];

      for (const key in data) {
        loadedMonsters.push({
          id: key,
          name: data[key].name,
          url: data[key].url,
          ac: data[key].ac,
          hp: data[key].hp,
          cr: data[key].cr,
          str: data[key].str,
          dex: data[key].dex,
          con: data[key].con,
          wis: data[key].wis,
          cha: data[key].cha,
        });
      }

      setMonsters(loadedMonsters);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMonstersHandler();
  }, [fetchMonstersHandler]);

  async function addMonsterHandler(monster) {
    const response = await fetch("http://localhost:8080/monster", {
      method: "POST",
      body: JSON.stringify(monster),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  }

  async function deleteMonsterHandler(monsterId) {
    // Make a DELETE request to the server to delete the monster with the given id
    try {
      const response = await fetch(`http://localhost:8080/monster/${monsterId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      // Update the state to remove the deleted monster
      setMonsters((prevMonsters) =>
        prevMonsters.filter((monster) => monster.id !== monsterId)
      );
    } catch (error) {
      setError(error.message);
    }
  }

  let content = <p>Found no monsters.</p>;

  if (monsters.length > 0) {
    content = <MonsterList monsters={monsters} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }


  return (
    <>
      <h1>Monsters</h1>
      <section>
        <AddMonster onAddMonster={addMonsterHandler} />
      </section>
      <section>
        <button onClick={fetchMonstersHandler}>Fetch Monsters</button>
      </section>
      <section>
        {/* Pass onDeleteMonster prop to MonstersList */}
        <MonsterList monsters={monsters} onDeleteMonster={deleteMonsterHandler} />
      </section>
    </>
  );
};

export default Monsters;
