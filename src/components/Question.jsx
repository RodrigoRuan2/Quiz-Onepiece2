function Question({ pergunta, opcoes, responder }) {
  return (
    <div className="question-container">
      <h2>{pergunta}</h2>

      {opcoes.map((opcao, index) => (
        <div key={index}>
          <button
            className="option-button"
            onClick={() => responder(opcao)}
          >
            {opcao}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Question;