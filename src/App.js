import './App.css';
import React from 'react';
import { Header } from './components/header/header';
import { Highlights } from './components/highlights/highlights';
function App() {

  return (
    <div className="App" >
      <Header/>
      <Highlights/>
    </div>
  );
}

export default App;
