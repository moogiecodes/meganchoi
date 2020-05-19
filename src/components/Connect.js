import React from 'react';
import './Styles.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Connect() {
  const style = {
    margin: '15% auto',
    width: '100%',
    maxHeight: '10em',
    justifyContent: 'center'
  }

  return (
    <div className="full-page-container section-container">
      <h4>Connect with me!</h4>
      <span style={style} className="d-inline-flex p-2">
        <a href="https://github.com/moogiecodes" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon
            icon={['fab', 'github']}
            className="d-flex justify-content-center display-4 mx-5" />
        </a>
        <a href="https://angel.co/u/meganchoi" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon
            icon={['fab', 'angellist']}
            className="d-flex justify-content-center display-4 mx-5" />
        </a>
        <a href="https://www.linkedin.com/in/meganchoi/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon
            icon={['fab', 'linkedin']}
            className="d-flex justify-content-center display-4 mx-5" />
        </a>
        <a href="https://open.spotify.com/user/y52q6hl33nljva7j7bya9h2pe?si=ZvcChfNNRA-fqzsAPfDdEA" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon
            icon={['fab', 'spotify']}
            className="d-flex justify-content-center display-4 mx-5" />
        </a>
      </span>
    </div>
  );
}