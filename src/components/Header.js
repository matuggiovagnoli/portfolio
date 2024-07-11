import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link as ScrollLink } from 'react-scroll';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full flex justify-between items-center p-4 bg-transparent text-black z-50">
      <div>
        <button onClick={toggleMenu} className="focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      <div className="flex space-x-2">
        <button 
          onClick={() => changeLanguage('en')} 
          className={`px-2 py-1 rounded ${i18n.language === 'en' ? 'bg-black text-white' : 'bg-transparent text-black border border-black'}`}
        >
          EN
        </button>
        <button 
          onClick={() => changeLanguage('es')} 
          className={`px-2 py-1 rounded ${i18n.language === 'es' ? 'bg-black text-white' : 'bg-transparent text-black border border-black'}`}
        >
          ES
        </button>
      </div>
      {/* Menú desplegable con animación */}
      <div className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex flex-col items-center justify-center space-y-4 z-50 transition-opacity duration-500 ease-in-out ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <button onClick={toggleMenu} className="focus:outline-none absolute top-4 right-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <nav className="flex flex-col gap-6 text-center">
          <ScrollLink 
            to="home" 
            smooth={true} 
            duration={500} 
            className="text-2xl text-white cursor-pointer transition duration-300 ease-in-out hover:text-gray-300"
            activeClass="font-bold border-2 border-white p-1 rounded-sm"
            spy={true} 
            onClick={toggleMenu}
          >
            {t('home')}
          </ScrollLink>
          <ScrollLink 
            to="about" 
            smooth={true} 
            duration={500} 
            className="text-2xl text-white cursor-pointer transition duration-300 ease-in-out hover:text-gray-300"
            activeClass="font-bold border-2 border-white p-1 rounded-sm"
            spy={true} 
            onClick={toggleMenu}
          >
            {t('about')}
          </ScrollLink>
          <ScrollLink 
            to="projects" 
            smooth={true} 
            duration={500} 
            className="text-2xl text-white cursor-pointer transition duration-300 ease-in-out hover:text-gray-300"
            activeClass="font-bold border-2 border-white p-1 rounded-sm"
            spy={true} 
            onClick={toggleMenu}
          >
            {t('projects')}
          </ScrollLink>
          <ScrollLink 
            to="contact" 
            smooth={true} 
            duration={500} 
            className="text-2xl text-white cursor-pointer transition duration-300 ease-in-out hover:text-gray-300"
            activeClass="font-bold border-2 border-white p-1 rounded-sm"
            spy={true} 
            onClick={toggleMenu}
          >
            {t('contact')}
          </ScrollLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
