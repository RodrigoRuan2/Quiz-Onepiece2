function AudioControls({ audioRef }) {
  function aumentar() {
    if (audioRef.current.volume < 1) {
      audioRef.current.volume += 0.1;
    }
  }

  function diminuir() {
    if (audioRef.current.volume > 0) {
      audioRef.current.volume -= 0.1;
    }
  }

  function mutar() {
    audioRef.current.muted = !audioRef.current.muted;
  }

  return (
    <div className="audio-controls">
      <button onClick={aumentar}>+</button>
      <button onClick={diminuir}>-</button>
      <button onClick={mutar}>🔇</button>
    </div>
  );
}

export default AudioControls;