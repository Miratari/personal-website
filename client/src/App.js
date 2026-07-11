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
        {description}
      </div>
    </div>
  );
}

function App() {
  return (
    <div id="page">

      <section id="header" style={{gridArea: "header"}}>
        <p class="title-text">Koa Lee</p>
        <p class="subtitle-text">Software Engineer, Web Designer, Creative</p>
        <p class="content-text">Personal Portfolio Website</p>
      </section>

      <section id="about" style={{gridArea: "about"}}>
        <header>
          About
        </header>
        <div class="section-content">
          Hi, I'm <b>Koa!</b> This is my personal website. This is placeholder text, until I can write an actual bio. <br/>
          <br/>
          This should also invite the user to keep scrolling, so they can see what projects I have made and what I am interested in. For contact information, see the bottom of the webpage.<br/>
          <br/>
          Please enjoy!<br/>
          <br/>
          <br/>
        </div>
      </section>

      <section style={{gridArea: "projects"}}>
        <header>
          Projects
        </header>
        <div class="section-content">
          <Project 
            title="TypED" 
            brief="Full-stack web app using React and MongoDB"
            description="This is filler text for one of the descriptions. When I actually get the formatting done, I'll replace this with more accurate text."/>
          <Project
            title="Home Server"
            brief="Linux-based home media server made with Claude Code"/>
        </div>
      </section>
      
      <section style={{gridArea: "work"}}>
        <header>
          Work Experience
        </header>
        <div class="section-content">
          <Project
            title="SDE Intern, AWS"
            brief="Backend database infrastructure, Amazon Timestream"/>
          <Project
            title="Freelance Web Dev"
            brief="Consultation and site development for LA-based real estate company"/>
        </div>
      </section>

      <section style={{gridArea: "other"}}>
        <header>
          Other
        </header>
        <div class="section-content">
          <Project
            title="TIO @ Berkeley"
            brief="Orchestral/Jazz arrangements of video game music"/>
        </div>
      </section>

      <div class="contact-container" style={{gridArea: "contact"}}>
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

      <footer style={{gridArea: "footer"}}>
        Designed and coded by hand, not AI.
      </footer>
    </div>
  );
}

export default App;
