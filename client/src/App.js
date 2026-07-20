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
      <a className="links" style={{gridArea: "demo"}} href={demo}>{demo ? "Website" : null}</a>
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
      <div id="page-background"></div>

      <div id="page-content">
        <section id="header" style={{gridArea: "header"}}>
          <p class="title-text">Koa Lee</p>
          <p class="subtitle-text">Software Engineer, Web Designer, Creative</p>
          <p class="content-text">Personal Portfolio Website</p>
        </section>

        <section id="about" style={{gridArea: "about"}}>
          <header>
            Info
          </header>
          <div class="section-content">
            <p>
              <h1>Hi, I'm <b>Koa!</b> I like to make stuff.</h1><br/>
              <br/>
              I'm a UC Berkeley CS graduate who enjoys making useful apps and cool interfaces. On this site you can find a handful of my open-source creations and contributions. When I'm not on the computer, I also like to play and write music.<br/>
              <br/>
              To learn more, or to get in touch, keep scrolling!<br/>
              <br/>
              <br/>
            </p>
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
              desc="A full-stack typing game using React and MongoDB."
              note="Word API broken as of Jul 2026"/>
            <Project
              title="Simple Discord Status"
              type="Utility - 2025"
              src="https://github.com/Miratari/steam-deck-simple-discord-status"
              desc="A Steam Deck plugin to display the current active game via Discord status."/>
            <Project
              title="Home Server"
              type="IT / Networking - 2026"
              desc="Personal Docker-based Linux home media server."/>
            <Project
              title="Playlist Name Generator"
              type="Utility - 2022"
              src="https://github.com/ehuang1126/Playlist-Name-Generator"
              desc="Generates content-aware Spotify playlist titles from AI analysis of song lyrics. Made for CalHacks 9.0 hackathon."/>
          </div>
        </section>
        
        <section style={{gridArea: "work"}}>
          <header>
            Experience
          </header>
          <div class="section-content">
            <Project
              title="SDE Intern, AWS"
              type="Amazon Timestream - 2024"
              demo="https://aws.amazon.com/timestream/"
              desc="Designed and implemented scalable infrastructure upgrades for Amazon Timestream for InfluxDB."/>
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
              desc="UC Berkeley's anime, video game, and film music orchestra. Arranger, conductor, percussionist, drummer, and bassist."
              note="Carousel of YouTube videos coming soon"/>
            {/* <Project
              title="Photography"
              type="Photography"
              desc="More coming soon."
              note="Carousel of photos coming soon"/> */}
          </div>
        </section>

        <section class="contact-container" style={{gridArea: "contact"}}>
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
        </section>

        <footer style={{gridArea: "footer"}}>
          Updated July 2026.<br/>Designed and coded by hand, not AI.
        </footer>
      </div>
    </div>
  );
}

export default App;
