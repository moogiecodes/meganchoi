import React from 'react';
import './Styles.css';
import warblerSS from '../images/warblerSS.png';
import memgameSS from '../images/memgameSS.png';
import smPomodoro from '../images/smPomodoro.png';
import microblog from '../images/Microblog.gif';
import clevercounsel from '../images/clevercounsel.png';

function Portfolio() {

  return (
    <div className="section-container">
      <h4 className="mt-5 mb-5">Portfolio</h4>
      <div className="card mb-4">
        <h3 className="card-header mb-2">Clever Counsel</h3>
        <span className="portfolio-container"><img src={clevercounsel} alt="clever counsel collage screenshots"></img></span>
        <div className="card-body">
          <p className="card-subtitle">I had the privilege and pleasure of supporting Bet Tzedek Legal Services in building this full-stack application from the ground up. The application is a centralized platform for case intake management and tracking of wage claims before the California Labor Commissioner's Office. Clever Counsel leverages technology to <abbr title="attribute">address the justice gap for low-income individuals</abbr> as the application is able to streamline case processing, allowing advocates to take on larger caseloads of wage theft.
          </p>
          <p className="card-text text-muted mt-2">
            <abbr title="attribute">Built with</abbr>:
            React, Node.js, Python/Flask, MySQL, CSS/Bootstrap, Selenium, Beautiful Soup, Formik/Yup etc.
          </p>
        </div>
      </div>
      <div className="card mb-4">
        <h3 className="card-header mb-2">Microblog</h3>
        <span className="portfolio-container"><img src={microblog} alt="Microblog app homepage screenshot"></img></span>
        <div className="card-body">
          <p className="card-subtitle">A full-stack "micro" blogging application.</p>
          <p className="card-text text-muted mt-2">
            <abbr title="attribute">Built with</abbr>: React, Redux, Node.js/Express, PSQL, Reactstrap, Bootstrap, Axios
          </p>
        </div>
        <div className="card-body">
          <a href="https://github.com/moogiecodes/redux-microblog" target="_blank" rel="noopener noreferrer"><button type="button" className="btn btn-outline-info">Github Repo</button>
          </a>
        </div>
      </div>
      <div className="card mb-4">
        <h3 className="card-header mb-2">Warbler</h3>
        <span className="portfolio-container"><img src={warblerSS} alt="Warbler app homepage screenshot"></img></span>
        <div className="card-body">
          <p className="card-subtitle">A full-stack Twitter-inspired social media application.</p>
          <p className="card-text text-muted mt-2">
            <abbr title="attribute">Built with</abbr>: Python3, Flask, Flask SQLAlchemy, Flask WTF, Jinja</p>
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
        <h3 className="card-header mb-2">Memory Card Game</h3>
        <span className="portfolio-container"><img src={memgameSS} alt="Memory game site screenshot"></img></span>
        <div className="card-body">
          <p className="card-subtitle">A simply designed, single page memory card game. It randomly shuffles cards on restart of the game and tracks cards flipped.</p>
          <p className="card-text text-muted mt-2">
            <abbr title="attribute">Built with</abbr>: HTML, CSS, Javascript
          </p>
        </div>
        <div className="card-body">
          <a href="https://moogiecodes.github.io/memory-game" target="_blank" rel="noopener noreferrer">
            <button type="button" className="btn btn-outline-info mr-1">Demo</button>
          </a>
          <a href="https://github.com/moogiecodes/memory-game" target="_blank" rel="noopener noreferrer"><button type="button" className="btn btn-outline-info">Github Repo</button>
          </a>
        </div>
      </div>
      <div className="card mb-4">
        <h3 className="card-header mb-2">Sailor Moon Pomodoro Timer</h3>
        <span className="portfolio-container"><img src={smPomodoro} alt="Memory game site screenshot"></img></span>
        <div className="card-body">
          <p className="card-subtitle">Sailor Moon-themed pomodoro timer for your lazy Usagi needs!</p>
          <p className="card-text text-muted mt-2">
            <abbr title="attribute">Built with</abbr>: HTML, CSS, Javascript, Jquery
          </p>
        </div>
        <div className="card-body">
          <a href="https://moogiecodes.github.io/SailorMoonPomodoroTimer/" target="_blank" rel="noopener noreferrer">
            <button type="button" className="btn btn-outline-info mr-1">Demo</button>
          </a>
          <a href="https://github.com/moogiecodes/SailorMoonPomodoroTimer" target="_blank" rel="noopener noreferrer"><button type="button" className="btn btn-outline-info">Github Repo</button>
          </a>
        </div>
      </div>
      <p> <span role="img" aria-label="laptop">💻</span> Much more in progress <span role="img" aria-label="exclamation">❗️</span> (Check out my <a href="https://github.com/moogiecodes" target="_blank" rel="noopener noreferrer"> <abbr title="attribute">Github</abbr></a>)
      </p>
    </div>
  );
}

export default Portfolio;