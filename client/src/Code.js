import './Code.css';
import { NavLink } from "react-router";

function Project({ id, title, summary, year, gh, site}) {
  let pid = "p" + id;
  return [
    <div class="p-title" style={{gridArea: pid + "t"}}>
      <h2 class="title">{title ? title : "title"}</h2>
    </div>,
    <div class="p-content" style={{gridArea: pid + "c"}}>
      <div class="p-details">
        <h3 class="year">{year ? year : "0000"}</h3>
        {gh ? <a class="gh" href={gh}>GitHub</a> : ""}
        {site ? <a class="site" href={site}>Website</a> : ""}
      </div>
      <h4 class="p-summary">{summary ? summary : "summary"}</h4>
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

        <Project id="1"
                 title="Home Media Server"
                 summary="Personal Docker-based Linux server with custom network routing and forwarding."
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
                 title="Playlist Title Maker"
                 summary="Script to generate content-aware Spotify playlist titles from AI analysis of song lyrics."
                 year="2022"
                 gh="https://github.com/ehuang1126/Playlist-Name-Generator"/>

        <h1 id="t3" style={{gridArea: "t3"}}>Resume</h1>

        <Project id="5"
                 title="SDE Intern @AWS"
                 summary="Designed and implemented scalable infrastructure upgrades for Amazon Timestream for InfluxDB."
                 year="2024"
                 site="https://aws.amazon.com/timestream/"/>

        <Project id="6"
                 title="Freelance Web Dev"
                 summary="Designed custom landing page for processing home valuation requests for Angeleno Homes LLC."
                 year="2023"/>

        {/* <p id="about" style={{gridArea: "about"}}>Placeholder text.</p> */}
      </div>
    </div>
  );
}

export default Code;
