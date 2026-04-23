import { useState, useRef } from 'react';

const MediaPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [volume, setVolume] = useState(1);

  const PLAYLIST = [
    {
      title: 'Neon Nights',
      artist: 'PandaMylk',
      src: process.env.PUBLIC_URL + '/media/PandaMylk-NeonNights.mp3'
    },
  ];

  const audioRef = useRef<HTMLAudioElement>(null);

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  } 

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      }
      else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  }

  return (
    <div className="media-player">
      <div className="track-info">
        <p>{PLAYLIST[currentTrack].artist} - {PLAYLIST[currentTrack].title}</p>
      </div>

      <audio 
        ref={audioRef} 
        src={PLAYLIST[currentTrack].src} 
      />

      <label htmlFor="volume" className='volume-label'>Volume</label>
      <input 
        type="range" 
        min="0" 
        max="1" 
        step="0.01" 
        value={volume} 
        onChange={handleVolumeChange} 
        className='volume-slider' 
      />
      
      <button 
        className='player-button glow' 
        onClick={togglePlay}
      >{isPlaying ? '⏸' : '▶'}</button>  
    </div>
  );
}

export default MediaPlayer;