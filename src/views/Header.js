import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link as ScrollLink } from 'react-scroll';
import usa from '../media/us.png'
import esp from '../media/esp.png'

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
    <header className="fixed w-full flex justify-between items-center p-4 bg-transparent max-sm:bg-black max-sm:bg-opacity-10  text-black z-50">
      <div>
        <button onClick={toggleMenu} className={`focus:outline-none ${isMenuOpen ? 'hidden' : ''}`}>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 lg:h-12 lg:w-12 md:w-10 md:h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      <div className="flex space-x-2">
        <button 
          onClick={() => changeLanguage('en')} 
          className={`w-9 h-9 lg:h-12 lg:w-12 md:w-10 md:h-10 text-sm md:text-base lg:text-lg rounded-xl  ${i18n.language === 'en' ? '' : ' opacity-35 '}`}
        >
          <img src={usa} alt='usa_flag' className='w-fit'/>
        </button>
        <button 
          onClick={() => changeLanguage('es')} 
          className={`w-9 h-9 lg:h-12 lg:w-12 md:w-10 md:h-10 text-sm md:text-base lg:text-lg  rounded ${i18n.language === 'es' ? '' : ' opacity-35 '}`}
        >
          <img src={esp} alt='spain_flag' className='w-fit'/>
        </button>
      </div>
      {/* Menú desplegable con animación */}
      <div className={`fixed top-0 left-0 w-full h-fit py-6 bg-black bg-opacity-90 flex flex-col items-center justify-center space-y-4 z-50 transition-opacity duration-500 ease-in-out ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
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
