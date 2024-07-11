import React from 'react';
import './i18n';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="home" className="min-h-screen">
          <Home />
        </section>
        <section id="about" className="min-h-screen">
          <About />
        </section>
        <section id="projects" className="min-h-screen">
          <Projects />
        </section>
        <section id="contact" className="min-h-screen">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;
