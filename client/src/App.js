// import logo from './logo.svg';
import './App.css';

function ProjectCard({ title, brief, description, tags }) {
  return (
    <div className="project-card">
      {title}
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
    </div>
  );
}

export default App;
