import './App.css';
import albumArt from './img/PandaMylk-Album.jpg';
import Header from './components/Header';
import Album from './components/Album';
import MediaPlayer from './components/MediaPlayer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Album albumArt={albumArt} />
      <MediaPlayer />
    </div>
  );
}

export default App;
