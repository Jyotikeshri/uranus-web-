import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="text-container">
        <div className="text">
          <h3>Partners </h3>
          <p>
            <a
              href="https://dia.wiki/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Decentralized Intelligence Agency
            </a>
          </p>
          <p>
            <a
              href="https://worldvibeweb.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              World Vibe Web
            </a>
          </p>
          <p>
            <a
              href="https://www.purplerock.xyz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Purplerock
            </a>
          </p>
        </div>
        <div className="text">
          <h3>Resources:</h3>
          <p>
            <a href="">Effective Vibes</a>
          </p>
          <p>
            <a href="https://GoldenMeme.org">Golden Meme</a>
          </p>
        </div>
      </div>
      <div className="copyright">© 2024 Uranus Web</div>
    </footer>
  );
};

export default Footer;
