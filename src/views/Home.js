import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import cv from '../media/CV.pdf';
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Home = () => {
  const { t } = useTranslation();
  const [text, setText] = useState('');
  const [isBlinking, setIsBlinking] = useState(true);
  const fullText = 'Frontend Developer';

  useEffect(() => {
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      setText(fullText.slice(0, currentIndex + 1));
      currentIndex++;
      if (currentIndex === fullText.length) {
        clearInterval(typingInterval);
      }
    }, 150);

    return () => clearInterval(typingInterval);
  }, [fullText]); // Only run once on mount

  useEffect(() => {
    const blinkingInterval = setInterval(() => {
      setIsBlinking((prev) => !prev);
    }, 500);

    return () => clearInterval(blinkingInterval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center bg-blue-100 overflow-hidden p-4 z-0">
      <div className="absolute -top-20 -left-96 md:-top-36 md:-left-72 lg:-top-36 lg:-left-72 w-[950px] h-[950px] md:w-[1150px] md:h-[1150px] lg:w-[1350px] lg:h-[1350px] rounded-full bg-gradient-to-tr from-blue-700 to-blue-300 opacity-30 z-10"></div>
      <div className="absolute -top-12 -left-96 md:-top-36 md:-left-80 lg:-top-28 lg:-left-72 w-[850px] h-[850px] md:w-[1050px] md:h-[1150px] lg:w-[1250px] lg:h-[1250px] rounded-full bg-gradient-to-tr from-blue-600 to-blue-200 opacity-50 z-20"></div>
      <div className="text-center z-50">
        <h1 className="text-3xl lg:text-5xl mb-4">
          <span className="font-bold">{t('hello')}</span> {t('i_am')} Matias Gomez Giovagnoli
        </h1>
        <h2 className="text-2xl lg:text-5xl mb-14">
          {text}
          <span className={isBlinking ? 'border-r-4 border-black' : ''}></span>
        </h2>
        <a
          href={cv}
          className="text-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300 w-40 h-14 sm:w-48 sm:h-16 md:w-56 md:h-20 lg:w-64 lg:h-24"
        >
          {t('download_cv')}
        </a>
      </div>
      <div className="absolute bottom-5 w-screen flex flex-row sel self-end justify-around mt-4 z-50">
        <div className="flex flex-row items-center space-x-2  transition-all duration-300 hover:bg-black hover:text-white hover:-translate-y-3 border-[1px] border-black rounded-md p-1">
          <FaGithub className="text-2xl md:text-4xl lg:text-5xl" />
          <a href="https://github.com/matuggiovagnoli" target="_blank" rel="noopener noreferrer" className="text-xl md:text-3xl lg:text-4xl">Github</a>
        </div>
        <div className="flex flex-row items-center space-x-2 transition-all duration-300 hover:bg-black hover:text-white hover:-translate-y-3 border-[1px] border-black rounded-md p-1">
          <FaLinkedin className="text-2xl md:text-4xl lg:text-5xl" />
          <a href="https://www.linkedin.com/in/matias-daniel-g%C3%B3mez-giovagnoli/" target="_blank" rel="noopener noreferrer" className="text-xl md:text-3xl lg:text-4xl">Linkedin</a>
        </div>
      </div>
    </section>
  );
};

export default Home;
