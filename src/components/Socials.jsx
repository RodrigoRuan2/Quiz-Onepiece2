import "../styles/Socials.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Socials({ fechar }) {
  return (
    <div className="social-overlay">
      <div className="social-container">
        <h2>Minhas Redes </h2>

        <div className="social-grid">
          <a
            href="https://www.linkedin.com/in/rodrigo-oliveira-141499258/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-card"
         >
    <FaLinkedin size={40} />
    <span></span>
  </a>

          <a
            href="https://github.com/RodrigoRuan2"
            target="_blank"
            rel="noopener noreferrer"
            className="social-card"
          >
    <FaGithub size={40} />
    <span></span>
  </a>

          <a
            href="https://SEU-PORTFOLIO.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-card"
          >
            🌐 Portfólio
          </a>
        </div>

        <button className="fechar" 
        onClick={fechar}>Fechar</button>
      </div>
    </div>
  );
}

export default Socials;