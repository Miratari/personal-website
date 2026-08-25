import './Code.css';
import { NavLink } from "react-router";

function Project({ id, title, summary, year, gh, site}) {
  let pid = "p" + id;
  return [
    <div class="p-details" style={{gridArea: pid + "d"}}>
      <h3>{year ? year : "0000"}</h3>
      {site ? <a href={site}>Website</a> : ""}
      {gh ? <a href={gh}>GitHub</a> : ""}
    </div>,
    <div class="p-content" style={{gridArea: pid + "c"}}>
      <h2 class="title">{title ? title : "title"}</h2>
      <h4 class="summary">{summary? summary : "summary"}</h4>
    </div>
  ];
}

function Code() {
  return (
    <div id="page">
      <div id="page-background"></div>
      
      <div id="code-content">

        <NavLink id="back" style={{gridArea: "back"}} to="/">Back</NavLink>

        <h1 id="t1" style={{gridArea: "t1"}}>Code</h1>
        <h1 id="t2" style={{gridArea: "t2"}}>Projects</h1>
        <h1 id="t3" style={{gridArea: "t3"}}>Resume</h1>

        <Project id="1"
                 title="Home Media Server"
                 summary="Personal Docker-based Linux server with custom routing and forwarding."
                 year="2026"/>
        
        <Project id="2"
                 title="Simple Discord Status"
                 summary="A Steam Deck plugin to display the current active game via Discord Social API."
                 year="2025"
                 gh="https://github.com/Miratari/steam-deck-simple-discord-status"/>

        <Project id="3"
                 title="TypED Typing Game"
                 summary="Desktop web app to test and track players' typing skills, using React and MongoDB."
                 year="2023"
                 gh="https://github.com/noah-whelann/typing-game"
                 site="https://typed-mauve.vercel.app/"/>

        <Project id="4"
                 title="Playlist Title Generator"
                 summary="Script to generate content-aware Spotify playlist titles from AI analysis of song lyrics."
                 year="2022"
                 gh="https://github.com/ehuang1126/Playlist-Name-Generator"/>

        {/* <p id="about" style={{gridArea: "about"}}>Placeholder text.</p> */}
      </div>
    </div>
  );
}

export default Code;
