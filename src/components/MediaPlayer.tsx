import { useState, useRef } from 'react';

const MediaPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const song1 = process.env.PUBLIC_URL + '/media/PandaMylk-NeonNights.mp3';
  const audioRef = useRef<HTMLAudioElement>(null);

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
      <audio ref={audioRef} src={song1} />
      <button className='player-button' onClick={togglePlay}>{isPlaying ? 'Pause' : 'Play'}</button>  
    </div>
  );
}

export default MediaPlayer;