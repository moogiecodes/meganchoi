import React from 'react';
import './Styles.css';
import ResumeSE from '../ResumeSE.pdf';

export default function About() {

  return (
    <div className="full-page-container section-container">
      <h4>Blurb About Me</h4>
      <div className="mt-5">
        <p>
          <span role="img" aria-label="palmtree-emoji">🌴</span> I'm a full-stack software engineer originally from Los Angeles, CA.
        </p>
        <p>
          <span role="img" aria-label="grad-cap-emoji">🎓</span> I love integrating my non-tech background (Sociology B.A.
          from UCLA) into many aspects of my life, such as in the way I seek out
          organizations I strive to be involved with, the methods I go about to
          consume news and information, and how I empathize with the people I
          meet.
          <br />
          {/* I believe advocating for representation is a powerful force in inspiring social change and spreading cultural awareness. Considering intersectionality, I aspire to build upon my cultural identity as an Asian American woman and sociology background by exercising an inclusive, growth-mindset in my work and beyond to empower those around me. Most importantly, I hope to answer the question of how I can contribute to making an impact for the greater good. Learning along the way will always be the constant, and I'm excited to begin my journey in tech! */}
        </p>
        <p>
          <span role="img" aria-label="pizza-emoji">🍕</span> Pizza is probably my favorite food (I don't really discriminate any
          type of food!)
        </p>
        <p>
          <span role="img" aria-label="cow-emoji">🐮</span> Cows are my favorite animal.
        </p>
        {/* <p>
          🎧 A car ride without music isn't a car ride to me! Pre-Covid, a favorite hobby of mine was attending music
          festivals and concerts with friends,
          but thanks to technology, there are live streams. I'm always sharing music with my friends and
          enjoy getting to know others through song recommendations, too 💖
       </p> */}
        {/* 🌙 the Sailor Moon aesthetic and memes (I integrated this into my first project, which was a Sailor
        Moon-themed pomodoro timer you can see in my projects!) */}
      </div>
      <p class="lead">
        <a class="btn btn-primary btn-lg" href={ResumeSE} role="button" target="_blank" rel="noopener noreferrer">View My Resume</a>
      </p>
    </div>
  );
}
