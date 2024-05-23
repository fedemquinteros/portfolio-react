import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Mi Portafolio</h1>
      </header>
      <section className="about-me">
        <h2>Sobre mí</h2>
        <p>Hola, soy Federico Manuel Quinteros, un desarrollador apasionado por la tecnología...</p>
      </section>
      <section className="projects">
        <h2>Proyectos</h2>
        <div className="project-item">
          <h3>Proyecto 1</h3>
          <p>Descripción del proyecto 1...</p>
        </div>
        <div className="project-item">
          <h3>Proyecto 2</h3>
          <p>Descripción del proyecto 2...</p>
        </div>
      </section>
      <section className="skills">
        <h2>Habilidades</h2>
        <ul>
          <li>Habilidad 1</li>
          <li>Habilidad 2</li>
          <li>Habilidad 3</li>
        </ul>
      </section>
      <section className="experience">
        <h2>Experiencia</h2>
        <div className="experience-item">
          <h3>Trabajo 1</h3>
          <p>Descripción del trabajo 1...</p>
        </div>
        <div className="experience-item">
          <h3>Trabajo 2</h3>
          <p>Descripción del trabajo 2...</p>
        </div>
      </section>
      <section className="contact">
        <h2>Contacto</h2>
        <p>Puedes contactarme a través de <a href="https://github.com/fedemquinteros">GitHub</a> o en <a href="https://www.linkedin.com/in/federicomanuelquinteros/">Linkedin</a>...</p>
      </section>
      <footer>
        <p>&copy; 2024 Federico Manuel Quinteros. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
