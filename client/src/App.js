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

function Project({ title, type, links, desc }) {
  return (
    <div className="project">
      <div className="title" style={{gridArea: "title"}}>{title}</div>
      <div className="type" style={{gridArea: "type"}}>{type}</div>
      <div className="links" style={{gridArea: "links"}}>{links}</div>
      <div className="desc" style={{gridArea: "desc"}}>{desc}</div>
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
          This website is still very much a work in progress, so things will probably change a lot very frequently. I'm still trying to strike a balance between a simple industrial design, and not making it look like nutrition facts.<br/>
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
            type="Web App"
            links="test"
            desc="Full-stack typing game made using React and MongoDB."/>
          <Project
            title="Simple Discord Status"
            type="Utility"
            desc="Displays current active Steam Deck game as Discord status."/>
          <Project
            title="Home Server"
            type="IT/Networking"
            desc="Linux-based home media server made with Claude Code."/>
          <Project
            title="CalHacks 9.0"
            type="Utility"/>
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
