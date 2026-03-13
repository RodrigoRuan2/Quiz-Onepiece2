function Home({ 
  iniciarJogo, 
  abrirGaleria, 
  abrirRedes, 
  setDificuldade,
  setModoHardcore,
  modoHardcore,
  dificuldade,
  setArcoSelecionado,
  arcoSelecionado
}) {
  return (
    <div className="home-container">
      <div className="home-overlay">
        <h1 className="home-title">Quiz One Piece 🏴‍☠️</h1>

        {/* DIFICULDADE */}
        <div className="dificuldade-container">
          <h3>Escolha a dificuldade:</h3>
          <select 
            value={dificuldade} 
            onChange={(e) => setDificuldade(e.target.value)}
          >
            <option value="facil">Fácil (5 perguntas)</option>
            <option value="medio">Médio (10 perguntas)</option>
            <option value="dificil">Difícil (15 perguntas)</option>
          </select>
        </div>

        {/* ARCO */}
        <div className="arco-container">
          <h3>Escolha o arco:</h3>

          <div className="arco-buttons">
            <button
              className={arcoSelecionado === "padrao" ? "ativo" : ""}
              onClick={() => setArcoSelecionado("padrao")}
            >
              Misturado
            </button>

            <button
              className={arcoSelecionado === "marineford" ? "ativo" : ""}
              onClick={() => setArcoSelecionado("marineford")}
            >
              Marineford
            </button>

            <button
              className={arcoSelecionado === "eniesLobby" ? "ativo" : ""}
              onClick={() => setArcoSelecionado("eniesLobby")}
            >
              Enies Lobby
            </button>

            <button
              className={arcoSelecionado === "wano" ? "ativo" : ""}
              onClick={() => setArcoSelecionado("wano")}
            >
              Wano
            </button>
          </div>
        </div>

        {/* HARDCORE */}
        <div className={`hardcore-container ${modoHardcore ? "ativo" : ""}`}>
          <input
            type="checkbox"
            id="hardcore"
            checked={modoHardcore}
            onChange={(e) => setModoHardcore(e.target.checked)}
          />  
          <label htmlFor="hardcore">
            Modo Hardcore 🔥 (Errou, acabou!)
          </label>
        </div>
        
        <div className="home-buttons">
          <button onClick={iniciarJogo}>Jogar</button>
          <button onClick={abrirGaleria}>Galeria</button>
          <button onClick={abrirRedes}>Redes</button>
        </div>
      </div>
    </div>
  );
}

export default Home;