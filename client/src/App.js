// import logo from './logo.svg';
import github from './github.svg';
import './App.css';

function Contact({ icon, text, subtext, href }) {
  return (
    <div className="contact">
      <svg src="./github.svg"/>
      <div className="contact-text">
        <text>Github</text>
        <subtext>Miratari</subtext>
      </div>
    </div>
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
        <Contact></Contact>
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
