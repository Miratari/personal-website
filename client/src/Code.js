import './Code.css';
import { NavLink } from "react-router";

function Project({ id, title, summary, year, gh, site}) {
  let pid = "p" + id;
  return [
    <div class="p-details" style={{gridArea: pid + "d"}}>
      <h2>{year ? year : "0000"}</h2>
      {gh ? <a href={gh}>GitHub</a> : ""}
      {site ? <a href={site}>Website</a> : ""}
    </div>,
    <div class="p-content" style={{gridArea: pid + "c"}}>
      <h2 class="title">{title ? title : "title"}</h2>
      {/* <br/> */}
      <h2 class="summary">{summary? summary : "summary"}</h2>
      <br/>
    </div>
  ];
}

function Code() {
  return (
    <div id="page">
      <div id="page-background"></div>
      
      <div id="code-content">

        <h1 id="t1" style={{gridArea: "t1"}}>Code</h1>
        <h1 id="t2" style={{gridArea: "t2"}}>Projects</h1>
        <h1 id="t3" style={{gridArea: "t3"}}>Resume</h1>

        <Project id="1"
                 title="TypED Typing Game"
                 summary="Full-stack web app made using React and MongoDB."
                 year="2023"
                 gh="https://github.com/noah-whelann/typing-game"
                 site="https://typed-mauve.vercel.app/"/>

        <Project id="2"
                 title="Simple Discord Status"
                 summary="A Steam Deck plugin to display the current active game via Discord status."
                 year="2025"
                 gh="https://github.com/Miratari/steam-deck-simple-discord-status"/>

        <Project id="3"
                 title="Playlist Title Generator"
                 summary="Script to generate content-aware Spotify playlist titles from AI analysis of song lyrics."
                 year="2022"
                 gh="https://github.com/ehuang1126/Playlist-Name-Generator"/>

        <Project id="4"
                 title="Linux Home Server"
                 summary="Personal Docker-based Linux home media server."
                 year="2026"/>

        {/* <p id="about" style={{gridArea: "about"}}>Placeholder text.</p> */}
      </div>
    </div>
  );
}

export default Code;
