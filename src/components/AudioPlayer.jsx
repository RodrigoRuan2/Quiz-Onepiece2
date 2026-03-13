import { useState, useRef, useEffect } from "react";
import "../styles/audio.css";

function AudioPlayer({ src, tocar }) {
  const audioRef = useRef(null);

  const [volume, setVolume] = useState(0.2);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    if (audioRef.current) {
      if (tocar) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
    
  }, [tocar]);

  function toggleMute() {
    if (!audioRef.current) return;

    if (muted) {
      audioRef.current.volume = volume;
      setMuted(false);
    } else {
      audioRef.current.volume = 0;
      setMuted(true);
    }
  }

  function handleVolumeChange(e) {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);

    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }

    if (newVolume > 0) {
      setMuted(false);
    }
  }

  return (
    <div className="audio-container">
      <audio ref={audioRef} src={src} loop />

      <button onClick={toggleMute} className="mute-button">
        {muted || volume === 0 ? "🔇" : "🔊"}
      </button>

      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={muted ? 0 : volume}
        onChange={handleVolumeChange}
        className="volume-slider"
      />
    </div>
  );
}

export default AudioPlayer;