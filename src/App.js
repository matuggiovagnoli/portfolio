import React from 'react';
import './i18n';
import Header from './views/Header';
import Home from './views/Home';
import About from './views/About';
import Projects from './views/Projects';
import Contact from './views/Contact';
import Footer from './views/Footer';

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
      <Footer />
    </div>
  );
}

export default App;
