import { useState, useRef } from 'react';

const MediaPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);

  const PLAYLIST = [
    {
      title: 'Neon Nights',
      artist: 'PandaMylk',
      src: process.env.PUBLIC_URL + '/media/PandaMylk-NeonNights.mp3'
    },
  ];

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
      <div className="track-info">
        <p>{PLAYLIST[currentTrack].artist} - {PLAYLIST[currentTrack].title}</p>
      </div>
      <audio ref={audioRef} src={PLAYLIST[currentTrack].src} />
      <button className='player-button glow' onClick={togglePlay}>{isPlaying ? '⏸' : '▶'}</button>  
    </div>
  );
}

export default MediaPlayer;