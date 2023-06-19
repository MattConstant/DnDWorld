import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Monsters from './pages/monsters/monsters';
import Players from './pages/players/players';
import Questions from './pages/questions/questions';
import Layout from './pages/layout/layout';
import Home from './pages/home/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';
import MonstersList from './components/monster/MonsterList';
import AddMonster from './components/monster/AddMonster';


function App() {
  const [monsters, setMonsters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMonstersHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('http://localhost:8080/monster');
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();

      const loadedMonsters = [];

      for (const key in data) {
        loadedMonsters.push({
          id: key,
          name: data[key].name,
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
    const response = await fetch('localhost:8080/monster', {
      method: 'POST',
      body: JSON.stringify(monster),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    console.log(data);
  }

  let content = <p>Found no monsters.</p>;

  if (monsters.length > 0) {
    content = <MonstersList monsters={monsters} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Layout />}>
    //       <Route index element={<Home />} />
    //       <Route path="Monsters" element={<Monsters />} />
    //       <Route path="Players" element={<Players />} />
    //       <Route path="Questions" element={<Questions />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>

    <React.Fragment>
    <section>
      <AddMonster onAddMovie={addMonsterHandler} />
    </section>
    <section>
      <button onClick={fetchMonstersHandler}>Fetch Monsters</button>
    </section>
    <section>{content}</section>
  </React.Fragment>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;
