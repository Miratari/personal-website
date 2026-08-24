import './Code.css';
import { NavLink } from "react-router";

function Code() {
  return (
    <div id="page">
      <div id="page-background"></div>
      
      <div id="page-content">

        <h1 id="t1" style={{gridArea: "t1"}}>Code</h1>
        <h1 id="t3" style={{gridArea: "t3"}}>Projects</h1>
        <h1 id="t5" style={{gridArea: "t5"}}>Work</h1>

        <p id="about" style={{gridArea: "about"}}>Placeholder text.</p>
      </div>
    </div>
  );
}

export default Code;
