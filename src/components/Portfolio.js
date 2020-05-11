import React from 'react';
import './Styles.css';
import warblerSS from '../images/warblerSS.png';
import memgameSS from '../images/memgameSS.png';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Portfolio() {

  return (
    <div className="section-container">
      <h4 className="mt-5 mb-5">Portfolio</h4>
      <div className="card mb-4">
        <h3 className="card-header">Warbler</h3>
        <span className="portfolio-container"><img src={warblerSS} alt="Warbler app homepage screenshot"></img></span>
        <div className="card-body">
          <p className="card-subtitle">A full-stack Twitter-inspired social media application.</p>
          <p className="card-text">Built with: Python3, Flask, Flask SQLAlchemy, Flask WTF, Jinja</p>
        </div>
        <div className="card-body">
          <a href="https://warbler-r14.herokuapp.com/" target="_blank" rel="noopener noreferrer">
            <button type="button" className="btn btn-outline-info mr-1">Demo</button>
          </a>
          <a href="https://github.com/moogiecodes/warbler" target="_blank" rel="noopener noreferrer"><button type="button" className="btn btn-outline-info">Github Repo</button>
          </a>
        </div>
      </div>
      <div className="card mb-4">
        <h3 className="card-header">Memory Card Game</h3>
        <span className="portfolio-container"><img src={memgameSS} alt="Memory game site screenshot"></img></span>
        <div className="card-body">
          <p className="card-subtitle">A simply designed, single page memory card game. It randomly shuffles cards on restart of the game and tracks cards flipped.</p>
          <p className="card-text">Built with: HTML, CSS, Javascript</p>
        </div>
        <div className="card-body">
          <a href="https://moogiecodes.github.io/memory-game" target="_blank" rel="noopener noreferrer">
            <button type="button" className="btn btn-outline-info mr-1">Demo</button>
          </a>
          <a href="https://github.com/moogiecodes/memory-game" target="_blank" rel="noopener noreferrer"><button type="button" className="btn btn-outline-info">Github Repo</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;