import React from 'react';
import './Styles.css';

export default function Home() {

  return (
    <div className="landing">
      <div className="text-center text-lowercase">
        <p>hello, my name is</p>
        <h1 className="text-lowercase"><span role="img" aria-label="cow-emoji">{`{🐮}`}</span> megan choi.</h1>
        <small>full-stack web developer</small>
      </div>
    </div>
  );
}
