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

function Project({ title, type, demo, note, src, desc, yt, ig }) {
  return (
    <div className="project">
      <div className="title" style={{gridArea: "title"}}>{title}</div>
      <div className="type" style={{gridArea: "type"}}>{type}</div>
      <a className="links" style={{gridArea: "demo"}} href={demo}>{demo ? "Demo" : null}</a>
      <a className="links" style={{gridArea: "source"}} href={src}>{src ? "GitHub" : null}</a>
      <a className="links" style={{gridArea: "yt"}} href={yt}>{yt ? "YouTube" : null}</a>
      <a className="links" style={{gridArea: "ig"}} href={ig}>{ig ? "Instagram" : null}</a>
      <div className="desc" style={{gridArea: "desc"}}>{desc}</div>
      <div className="note" style={{gridArea: "note"}}>{note}</div>
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
          Hi, I'm <b>Koa!</b> I like to make stuff.<br/>
          <br/>
          I'm a UC Berkeley Computer Science graduate, and enjoy making simple and intuitive apps and tools. On this site you can find a handful of the open-source projects I have both contributed to and created on my own. When I'm not on the computer, I like to play and write music, as well as take photos.<br/>
          <br/>
          To learn more, or to get in touch, keep scrolling!<br/>
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
            type="Web App - 2023"
            demo="https://typed-mauve.vercel.app/"
            src="https://github.com/noah-whelann/typing-game"
            desc="A full-stack typing game made using React and MongoDB. Fetches words from a random word API, and calculates user typing speed and accuracy, storing user data between matches. AI-assisted development using GitHub Copilot."
            note="Word API broken as of Jul 2026"/>
          <Project
            title="Simple Discord Status"
            type="Utility - 2025"
            src="https://github.com/Miratari/steam-deck-simple-discord-status"
            desc="Displays current active Steam Deck game as Discord status. Integrates directly with Discord API. Utilizes TypeScript for frontend interface, and Python for backend API calls."/>
          <Project
            title="Home Server"
            type="IT/Networking - 2026"
            desc="A Linux-based home media server created and maintained with Claude Code. Custom domain management and routing via Porkbun and Nginx Proxy Manager."/>
          <Project
            title="Playlist Name Generator"
            type="Utility - 2022"
            src="https://github.com/ehuang1126/Playlist-Name-Generator"
            desc="AI summarization on lyrics of Spotify songs to generate content-aware playlist titles. Utilizes Cohere NLP model API."/>
        </div>
      </section>
      
      <section style={{gridArea: "work"}}>
        <header>
          Work Experience
        </header>
        <div class="section-content">
          <Project
            title="SDE Intern, AWS"
            type="Amazon Timestream - 2024"
            desc="Backend database infrastructure, Amazon Timestream"/>
          <Project
            title="Web Developer"
            type="Angeleno Homes LLC - 2023"
            desc="Freelance consultation and website development for LA-based real estate company."/>
        </div>
      </section>

      <section style={{gridArea: "other"}}>
        <header>
          Other
        </header>
        <div class="section-content">
          <Project
            title="TIO @ Berkeley"
            type="Music"
            yt="https://www.youtube.com/@tioatberkeley"
            ig="https://www.instagram.com/tioatberkeley/"
            desc="UC Berkeley's anime, video game, and film orchestra. I've arranged and conducted full orchestra pieces and smaller jazz ensembles, and have performed as a percussionist, drummer, and bassist."
            note="Carousel of YouTube videos coming soon"/>
          <Project
            title="Photography"
            type="Photography"
            desc="I like to take photos."
            note="Carousel of photos coming soon"/>
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
