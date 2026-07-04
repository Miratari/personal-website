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
      <button type="button" className="project-preview">
        <h2 style={{gridArea: "title"}}>{title}</h2>
        <h3 style={{gridArea: "brief"}}>{brief}</h3>
        <h4 style={{gridArea: "arrow"}}>+</h4>
      </button>
      <div className="project-content">

      </div>
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
          href="./resume.pdf"/>
        <Contact 
          icon={mail} 
          text="Email" 
          subtext="koalee10@gmail.com"/>
      </div>

      <section>
        <header>
          Projects
        </header>
        <Project 
          title="TypED" 
          brief="Full-stack web app using React and MongoDB"/>
        <Project 
          title="Simple Discord RP"
          brief="test text here"/>
        <Project 
          title="Cal Hacks 9.0"
          brief="More test text goes right here. Here's what it would look like with a really long brief."/>
      </section>
      
      <section>
        <header>
          Work Experience
        </header>
        <Project
          title="SDE Intern, AWS"
          brief="Backend database infrastructure, Amazon Timestream"/>
        <Project
          title="Freelance Web Dev"
          brief=""/>
        
      </section>

      <section>
        <header>
          Other Creative Works
        </header>
        <Project
          title="TIO @ Berkeley"
          brief=""/>
      </section>

      <footer>
        Designed and coded by myself, not robots.
      </footer>
    </div>
  );
}

export default App;
