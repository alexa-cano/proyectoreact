import React from 'react';
//import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NarBar';
import ItemListContainer from './components/NavBar/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer gretting={"Bienvenidos"}/>
    </div>
  );
}

export default App;

