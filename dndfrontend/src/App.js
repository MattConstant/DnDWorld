import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Monsters from './pages/monsters/monsters';
import Players from './pages/players/players';
import Questions from './pages/questions/questions';
import Layout from './pages/layout/layout';
import Home from './pages/home/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/authentication/Login';
import Register from './components/authentication/Register';


function App() {
  const isAuthenticated = !!localStorage.getItem('token');

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Monsters" element={<Monsters />} />
          <Route path="Players" element={<Players />} />
          <Route path="Questions" element={<Questions />} />
          <Route path="/login" element={<Login />} />
          <Route path="register" element={<Register />} />

        </Route>
      </Routes>
    </BrowserRouter>

  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;
