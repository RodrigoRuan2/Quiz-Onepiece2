import { useState, useRef, useEffect } from "react";
import { questions } from "./data/questions";
import Question from "./components/Question";
import Result from "./components/Result";
import Home from "./components/Home";
import Gallery from "./components/Gallery";
import theme from "./assets/audios/onepiece-theme.mp3";
import bg1 from "./assets/wallpapers/bg1.png";
import bg2 from "./assets/wallpapers/bg2.png";
import bg3 from "./assets/wallpapers/bg3.png";
import bg4 from "./assets/wallpapers/bg4.png";
import bg5 from "./assets/wallpapers/bg5.png";
import bg6 from "./assets/wallpapers/bg6.png";
import AudioPlayer from "./components/AudioPlayer";
import { allArcs } from "./data/arcs.js";
import Socials from "./components/Socials";


function App() {
  // ✅ Hooks AQUI DENTRO
  const [mostrarRedes, setMostrarRedes] = useState(false);
  const [arcoSelecionado, setArcoSelecionado] = useState("padrao");
  const [perguntaAtual, setPerguntaAtual] = useState(0);
  const [pontuacao, setPontuacao] = useState(0);
  const [mostrarResultado, setMostrarResultado] = useState(false);
  const [tela, setTela] = useState("home");
  const [background, setBackground] = useState(bg1);
  const [mostrarGaleria, setMostrarGaleria] = useState(false);
  const [perguntasAleatorias, setPerguntasAleatorias] = useState([]);
  const [dificuldade, setDificuldade] = useState("facil");
  const [modoHardcore, setModoHardcore] = useState(false);
  const [perdeuHardcore, setPerdeuHardcore] = useState(false);
  const wallpapers = [
  { id: 1, nome: "One piece", imagem: bg1 },
  { id: 2, nome: "One piece 2", imagem: bg2 },
  { id: 3, nome: "One piece 3", imagem: bg3 },
  { id: 4, nome: "One piece 4", imagem: bg4 },
  { id: 5, nome: "luffy", imagem: bg5 },
  { id: 6, nome: "sanji", imagem: bg6 },
];
  
function iniciarJogo() {
  let perguntasBase = questions;

  if (arcoSelecionado !== "padrao") {
    perguntasBase = allArcs[arcoSelecionado];
  }

  const embaralhadas = embaralharPerguntas(perguntasBase);
  const limite = pegarLimitePerguntas();
  const selecionadas = embaralhadas.slice(0, limite);

  setPerguntasAleatorias(selecionadas);
  setPerguntaAtual(0);
  setPontuacao(0);
  setMostrarResultado(false);
  setPerdeuHardcore(false);

  setTela("quiz");
}

function responder(opcao) {
  const acertou =
    opcao === perguntasAleatorias[perguntaAtual].resposta;

  if (acertou) {
    setPontuacao((prev) => prev + 1);

    const proxima = perguntaAtual + 1;

    if (proxima < perguntasAleatorias.length) {
      setPerguntaAtual(proxima);
    } else {
      setMostrarResultado(true);
    }

  } else {
    if (modoHardcore) { 
      setPerdeuHardcore(true);
      setMostrarResultado(true);
    } else {
      // Modo normal continua
      const proxima = perguntaAtual + 1;

      if (proxima < perguntasAleatorias.length) {
        setPerguntaAtual(proxima);
      } else {
        setMostrarResultado(true);
      }
    }
  }
}

  function reiniciarQuiz() {
    setPerguntaAtual(0);
    setPontuacao(0);
    setMostrarResultado(false);
    setTela("home");
     setDificuldade("facil");
     setArcoSelecionado("padrao");
  }

  function embaralharPerguntas(lista) {
  const array = [...lista];

  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}
  function pegarLimitePerguntas() {
    switch (dificuldade) {
      case "medio":
        return 10;
      case "dificil":
        return 15;
      default:
      return 5;
  }
}
 return (
  <div
    className="app-wrapper"
    style={{ backgroundImage: `url(${background})`, }}
  >
    <AudioPlayer src={theme} tocar={tela === "quiz"} />

    <div className="app-content">
      {tela === "home" && (
        <Home
          iniciarJogo={iniciarJogo}
          setArcoSelecionado={setArcoSelecionado}
          abrirGaleria={() => setMostrarGaleria(true)}
          abrirRedes={() => setMostrarRedes(true)}
          setDificuldade={setDificuldade}
          setModoHardcore={setModoHardcore}
          modoHardcore={modoHardcore}
          dificuldade={dificuldade} 
          arcoSelecionado={arcoSelecionado}
        />
      )}

      {tela === "quiz" && (
        <>
          <h1 className="app-title">Quiz One Piece 🏴‍☠️</h1>

          {mostrarResultado ? (
            <Result
              pontuacao={pontuacao}
              total={perguntasAleatorias.length}
              reiniciar={reiniciarQuiz}
              perdeuHardcore={perdeuHardcore}
              modoHardcore={modoHardcore}
            />
          ) : (
            perguntasAleatorias.length > 0 && (
            <Question
              pergunta={perguntasAleatorias[perguntaAtual].pergunta}
              opcoes={perguntasAleatorias[perguntaAtual].opcoes}
              responder={responder}
            />
            )
          )}
        </>
      )}

      {mostrarGaleria && (
        <Gallery
          wallpapers={wallpapers}
          setBackground={setBackground}
          fechar={() => setMostrarGaleria(false)}
        />
      )}
      {mostrarRedes && (
  <Socials fechar={() => setMostrarRedes(false)} />
)}

    </div>
  </div>
);
}
export default App;

