
function Result({ pontuacao, total, reiniciar, perdeuHardcore, modoHardcore }) {
  return (
    <div className="result-container">
      {modoHardcore && perdeuHardcore ? (
        <h2 style={{ color: "red" }}>
          ☠️ VOCÊ MORREU NO MODO HARDCORE!
        </h2>
      ) : (
        <h2>Fim de Jogo!</h2>
      )}

      <p>
        Você acertou {pontuacao} de {total} perguntas.
      </p>

      <button className="reiniciar-button"  
      onClick={reiniciar}>Jogar novamente</button>
    </div>
  );
}

export default Result;