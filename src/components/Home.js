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
      <div className="absolute -top-36 -left-72 w-[1350px] h-[1350px] rounded-full bg-gradient-to-tr from-blue-700 to-blue-300 opacity-30 z-10"></div>
      <div className="absolute -top-28 -left-72 w-[1250px] h-[1250px] rounded-full bg-gradient-to-tr from-blue-600 to-blue-200 opacity-50 z-20"></div>
      <div className="text-center z-50">
        <h1 className="text-4xl mb-4">
          <span className="font-bold">{t('hello')}</span> {t('i_am')} Matias Gomez Giovagnoli
        </h1>
        <h2 className="text-2xl mb-14">
          {text}
          <span className={isBlinking ? 'border-r-4 border-black' : ''}></span>
        </h2>
        <a
          href={cv}
          download="CV.pdf"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
        >
          {t('download_cv')}
        </a>
      </div>
      <div className="absolute bottom-5 w-screen flex flex-row sel self-end justify-around mt-4 z-50">
        <div className="flex flex-row items-center space-x-2">
          <FaGithub className="text-2xl" />
          <a href="https://github.com/matuggiovagnoli" target="_blank" rel="noopener noreferrer" className="text-xl">Github</a>
        </div>
        <div className="flex flex-row items-center space-x-2">
          <FaLinkedin className="text-2xl" />
          <a href="https://www.linkedin.com/in/matias-daniel-g%C3%B3mez-giovagnoli/" target="_blank" rel="noopener noreferrer" className="text-xl">Linkedin</a>
        </div>
      </div>
    </section>
  );
};

export default Home;
