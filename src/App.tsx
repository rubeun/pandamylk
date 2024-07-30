import React from 'react';
import './App.css';
import albumArt from './img/PandaMylk-Album.jpg';

const App = () => {
  return (
    <div className="App">
      <h1 className='glow'>PandaMylk</h1>
      <div className='album'>
        <img className='album-cover' src={albumArt} alt='PandaMylk Album Art' />
      </div>
    </div>
  );
}

export default App;
