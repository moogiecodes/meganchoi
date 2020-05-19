import React from 'react';
import './Styles.css';
import ResumeSE from '../ResumeSE.pdf';
import Image from 'react-bootstrap/Image'
// import { Row } from 'react-bootstrap';
import profpic from '../images/profilepic.jpeg';
import '../images/profilepic.jpeg';

export default function About() {
  const emoji = {
    fontSize: '1.25em'
  }
  const pic = {
    width: '13em',
    height: 'auto',
    maxWidth: '65vw',
    maxHeight: '20%'
  }

  return (
    <div className="full-page-container section-container">
      <h4>Blurb About Me</h4>
      <Image
        src={profpic}
        roundedCircle
        style={pic}
        className="ml-3"
        alt="Profile photo"
      />
      <div className="mb-4">
        <p>
          <span role="img" aria-label="palmtree-emoji" style={emoji}>🌴</span> I'm a full-stack software engineer originally from Los Angeles, CA.
        </p>
        <p>
          <span role="img" aria-label="backpack-emoji" style={emoji}>🎒</span> I took the leap to pursue a career in tech by attending a full-stack immersive bootcamp, Rithm School, in San Francisco for 4 months.
        </p>
        <p>
          <span role="img" aria-label="grad-cap-emoji" style={emoji}>🎓</span> I love integrating my non-tech background (Sociology B.A.
          from UCLA) into many aspects of my life, such as in the way I seek out
          organizations I strive to be involved with, the methods I go about to
          consume news and information, and how I empathize with the people I
          meet. Viewing our society through a sociological lens grew my curiosity for problem solving (asking what, why, and how things can change or improve for the better).
        </p>
        <p>
          <span role="img" aria-label="woman-technologist-emoji" style={emoji}>👩🏻‍💻</span>
          The endless possibilities of what programming tools and languages can achieve, especially in bridging gaps for marginalized communities, changed the trajectory of my career aspirations. Through others’ stories and experiences, technology has become a main modality in creating a lasting impact on the world. This is why I'm passionate about dedicating my problem-solving curiosity to doing social good through a lifelong learning, love, and appreciation for software engineering. (And, yes... even an immense amount of time being stuck on a bug only to be stuck on more bugs) <span role="img" aria-label="puzzle-piece-emoji" style={emoji}>🧩</span>
        </p>
        <p>
          <span role="img" aria-label="raised-fist-emoji" style={emoji}>✊🏼</span> I was  inspired by those around me at university who challenged negative social perceptions just by pursuing their careers and aspirations as unapologetically themselves. I believe advocating for representation is a powerful force in inspiring social change and spreading cultural awareness. Considering intersectionality and to empower my community, I aspire to build upon my cultural identity as an Asian American woman and sociology background to exercise an inclusive growth-mindset in my work and beyond. Most importantly, along with supporting equitable culture wherever possible, I hope to answer the question of how I can contribute to making an impact for a cause greater than myself. Learning <strong>A LOT</strong> along the way will always be the constant, and I'm excited to begin my journey as <abbr title="attribute">a woman in tech</abbr>!
          </p>
      </div>
      <p className="lead mb-5">
        <a className="btn btn-primary btn-lg" href={ResumeSE} role="button" target="_blank" rel="noopener noreferrer">View My Resume</a>
      </p>
      {/*MAKE BUTTON EMOJIS, MODALS ON CLICK ? ?*/}
      <h4>More blurbs...</h4>
      <div className="my-5">
        <p>
          <span role="img" aria-label="pizza-emoji" style={emoji}>🍕</span> Pizza is probably my favorite food (I don't really discriminate any
          type of food!)
        </p>
        <p>
          <span role="img" aria-label="cow-emoji" style={emoji}>🐮</span> Cows are my favorite animal.
        </p>
        <p>
          <span role="img" aria-label="headphones-emoji" style={emoji}>🎧</span> A car ride without music isn't a car ride to me! Pre-Covid, a favorite hobby of mine was attending music
          festivals and concerts with friends,
          but thanks to technology, we can listen in on live streams! (Shoutout to Brownies and Lemonade for hosting amazing ones) I'm always sharing music with my friends and
          enjoy getting to know others through song recommendations, too <span role="img" aria-label="sparkly-heart-emoji" style={emoji}>💖</span>
        </p>
        <p>
          <span role="img" aria-label="crescent-moon-emoji" style={emoji}>🌙</span> I'm a fan of Sailor Moon/anime aesthetic and memes (I integrated this into my first project, which was a Sailor Moon-themed pomodoro timer you can view in my portfolio!)
       </p>
      </div>
    </div>
  );
}
