function Gallery({ wallpapers, setBackground, fechar }) {
  return (
    <div className="gallery-overlay">
      <div className="gallery-container">
        <h2>Escolha seu Wallpaper 🖼️</h2>

        <div className="gallery-grid">
          {wallpapers.map((wall) => (
            <div key={wall.id} className="wallpaper-card">
              <img
                src={wall.imagem}
                alt={wall.nome}
                onClick={() => setBackground(wall.imagem)}
              />
              <p>{wall.nome}</p>
            </div>
          ))}
        </div>

        <button className="fechar"  
        onClick={fechar}>Fechar</button>
      </div>
    </div>
  );
}

export default Gallery;