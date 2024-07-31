import React from 'react';
import './App.css';
import albumArt from './img/PandaMylk-Album.jpg';
import Header from './components/Header';
import Album from './components/Album';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Album albumArt={albumArt} />
    </div>
  );
}

export default App;
