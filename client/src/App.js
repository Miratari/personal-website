import './App.css';
import { NavLink } from "react-router";

function Contact({ icon, text, subtext, href }) {
  return (
    <a class="contact" href={href}>
      <img class="contact-icon" src={icon} alt="media icon"/>
      <div class="contact-text">
        <text>{text}</text>
        <sub>{subtext}</sub>
      </div>
    </a>
  );
}

function App() {
  return (
    <div id="page">
      <div id="page-background"></div>

      {/* <div id="pill"></div> */}
      
      <div id="page-content">
        {/* <section id="header" style={{gridArea: "header"}}>
          <p style={{gridArea: "header-title"}} class="title-text">Koa Lee</p>
          <p style={{gridArea: "header-subtitle"}} class="subtitle-text">Software Engineer, Web Designer, Creative</p>
          <p style={{gridArea: "header-content"}} class="content-text">Personal Portfolio Website</p>
        </section> */}

        <h1 id="t1" style={{gridArea: "t1"}}>Koa Lee</h1>
        <h2 id="t2" style={{gridArea: "t2"}}>Software</h2>
        <h1 id="t3" style={{gridArea: "t3"}}>Engineer</h1>
        <h2 id="t4" style={{gridArea: "t4"}}>Web</h2>
        <h1 id="t5" style={{gridArea: "t5"}}>Developer</h1>
        <h1 id="t6" style={{gridArea: "t6"}}>Creative</h1>

        <p id="about" style={{gridArea: "about"}}>Hi, I’m Koa! I like to make stuff. This is my personal website, where you can find links to open-source projects and other creative endeavors.</p>

        <h3 id="l-title" style={{gridArea: "l-title"}}>Links</h3>
        <NavLink id="l1" style={{gridArea: "l1"}} to="/code">Code</NavLink>
        <NavLink id="l2" style={{gridArea: "l2"}} to="/music">Music</NavLink>
        <NavLink id="l3" style={{gridArea: "l3"}} to="/photos">Photos</NavLink>
        <h3 id="c-title" style={{gridArea: "c-title"}}>Contact</h3>
        <a id="l4" style={{gridArea: "l4"}} href="https://github.com/Miratari">Github</a>
        <a id="l5" style={{gridArea: "l5"}} href="https://www.linkedin.com/in/koa-lee-476b2b226/">LinkedIn</a>
        <a id="l6" style={{gridArea: "l6"}} href="mailto:koalee10@gmail.com">Email</a>
      </div>

      <footer style={{gridArea: "footer"}}>
        Updated August 2026.<br/>Designed and coded by hand, not AI.
      </footer>
    </div>
  );
}

export default App;
