import github from './github.svg';
import linkedin from './linkedin.svg';
import mail from './mail.svg';
import resume from './resume.svg';

import './App.css';

function Contact({ icon, text, subtext, href }) {
  return (
    <a className="contact" href={href}>
      <img className="contact-icon" src={icon}/>
      <div className="contact-text">
        <text>{text}</text>
        <sub>{subtext}</sub>
      </div>
    </a>
  );
}

function Project({ title, tags, brief, description }) {
  return (
    <div className="project">
      <h2>{title}</h2>
    </div>
  );
}

function App() {
  return (
    <div id="page">
      <header class="header">
        <h1>Koa Lee</h1>
        <div class="dividing-line"></div>
        <div class="list">
          <sub>Software Engineer</sub>
          <sub>Web Designer</sub>
          <sub>Creative</sub>
        </div>
      </header>

      <div class="contact-container">
        <Contact 
          icon={github} 
          text="Github" 
          subtext="@Miratari" 
          href="https://github.com/Miratari"/>
        <Contact 
          icon={linkedin} 
          text="LinkedIn" 
          subtext="Koa Lee" 
          href="https://www.linkedin.com/in/koa-lee-476b2b226/"/>
        <Contact 
          icon={resume} 
          text="Resume" 
          subtext="View PDF" 
          href="https://"/>
        <Contact 
          icon={mail} 
          text="Email" 
          subtext="koalee10@gmail.com"/>
      </div>

      <section>
        <header>
          Projects
        </header>
        <Project title="TypED" brief="Full-stack web application using React and MongoDB."></Project>
        <Project title="Simple Discord RP"></Project>
        <Project title="Spotify Playlist Title Generator"></Project>
        <Project title="asdfasdf"></Project>
      </section>
      
      <section>
        <header>
          Work Experience
        </header>
        another section
        
      </section>

      <section>
        <header>
          Other Creative Works
        </header>
        another section
      </section>
    </div>
  );
}

export default App;
