import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import front from '../media/front.png';
import back from '../media/back.png';
import database from '../media/database.png';
import ibm from '../media/IBM.pdf';
import nicelabel from '../media/nicelabel.png';
import coder from '../media/coder.png';
import tools from '../media/tools.png';
import comunication from '../media/comunication.png';
import team from '../media/team.png';
import motivation from '../media/motivation.png';

const About = () => {
  const { t } = useTranslation();
  const [selectedTech, setSelectedTech] = useState('tech_skills');

  const handleTechClick = (tech) => {
    setSelectedTech(tech);
  };

  const renderTechList = () => {
    switch (selectedTech) {
      case 'tech_skills':
        return (
          <div className='w-full flex flex-wrap justify-center mt-3 gap-5' key="tech_skills">
            <div className='w-full sm:w-1/2 md:w-1/4 border-[1px] border-black flex flex-col justify-center rounded-md animate-enter-2s'>
              <div className='flex flex-col items-center justify-center mb-2 rounded-t-md py-2'>
                <img src={front} alt='frontend logo' className='w-14 h-14'/>
                <h3 className='text-center font-semibold'>{t('frontend_tech')}</h3>
              </div>
              <ul className='text-center'>
                <li>JavaScript (ES6+)</li>
                <li>React</li>
                <li>Redux</li>
                <li>Hooks</li>
                <li>HTML 5</li>
                <li>Git</li>
                <li>CSS : Vanilla, Tailwind, Bootstrap</li>
              </ul>
            </div>
            <div className='w-full sm:w-1/2 md:w-1/4 border-[1px] border-black flex flex-col justify-start rounded-md animate-enter-3s'>
              <div className='flex flex-col items-center justify-center mb-2 rounded-t-md py-2'>
                <img src={back} alt='backend logo' className='w-14 h-14'/>
                <h3 className='text-center font-semibold'>{t('backend_tech')}</h3>
              </div>
              <ul className='text-center'>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>REST APIs</li>
                <li>Postman</li>
              </ul>
            </div>
            <div className='w-full sm:w-1/2 md:w-1/4 border-[1px] border-black flex flex-col justify-start rounded-md animate-enter-4s'>
              <div className='flex flex-col items-center justify-start mb-2 rounded-t-md py-2'>
                <img src={database} alt='databe logo' className='w-14 h-14'/>
                <h3 className='text-center font-semibold'>{t('database_tech')}</h3>
              </div>
              <ul className='text-center'>
                <li>MySQL</li>
                <li>SQL SERVER</li>
                <li>Firebase</li>
                <li>Mongo DB</li>
              </ul>
            </div>
            <div className='w-full sm:w-1/2 md:w-1/4 border-[1px] border-black flex flex-col justify-start rounded-md animate-enter-5s'>
              <div className='flex flex-col items-center justify-start mb-2 rounded-t-md py-2'>
                <img src={tools} className='w-14 h-14'/>
                <h3 className='text-center font-semibold'>{t('other_tools')}</h3>
              </div>
              <ul className='text-center'>
                <li>PHP: laravel</li>
                <li>NiceLabel</li>
                <li>Python</li>
                <li>Figma</li>
              </ul>
            </div>
          </div>
        );
      case 'soft_skills':
        return (
          <div className='w-full flex flex-wrap justify-center mt-3 gap-5' key="soft_skills">
            <div className='w-full sm:w-1/2 md:w-1/4 border-[1px] border-black flex flex-col justify-center rounded-md animate-enter-2s'>
              <div className='flex flex-col items-center justify-center mb-2 rounded-t-md py-2'>
                <img src={comunication} alt='comunication logo' className='w-10 h-10'/>
                <h3 className='text-center font-semibold'>{t('comunication_skills')}</h3>
              </div>
              <p>{t('')}</p>
            </div>
            <div className='w-full sm:w-1/2 md:w-1/4 border-[1px] border-black flex flex-col justify-center rounded-md animate-enter-3s'>
              <div className='flex flex-col items-center justify-center mb-2 rounded-t-md py-2'>
                <img src={team} alt='team logo' className='w-10 h-10'/>
                <h3 className='text-center font-semibold'>{t('team_player')}</h3>
              </div>
              <p>{t('')}</p>
            </div>
            <div className='w-full sm:w-1/2 md:w-1/4 border-[1px] border-black flex flex-col justify-center rounded-md animate-enter-4s'>
              <div className='flex flex-col items-center justify-center mb-2 rounded-t-md py-2'>
                <img src={motivation} alt='motivation logo' className='w-10 h-10'/>
                <h3 className='text-center font-semibold'>{t('motivation')}</h3>
              </div>
              <p>{t('')}</p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="about" className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h2 className="text-3xl sm:text-4xl text-blue-500 font-bold mb-6">{t('about')}</h2>
      <div className="max-w-4xl text-left space-y-6">
        <p className='font-serif text-base sm:text-lg'>"{t('about_intro')}"</p>
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-center">{t('skills')}</h3>
          <div className="flex flex-col justify-evenly items-center">
            <div className="w-full flex flex-row justify-around mb-4">
              <p
                className={`cursor-pointer transition duration-500 ease-in-out ${selectedTech === 'tech_skills' ? 'font-semibold text-white bg-blue-500 p-1 rounded-sm' : ''}`}
                onClick={() => handleTechClick('tech_skills')}
              >
                {t('technical_skills')}
              </p>
              <p
                className={`cursor-pointer transition duration-500 ease-in-out ${selectedTech === 'soft_skills' ? 'font-semibold text-white bg-blue-500 p-1 rounded-sm' : ''}`}
                onClick={() => handleTechClick('soft_skills')}
              >
                {t('soft_skills')}
              </p>
            </div>
            <div className="w-full flex items-center justify-evenly">
              {renderTechList()}
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold mb-2">{t('professional_experience')}</h3>
          <ul className="list-disc list-inside text-sm sm:text-base">
            <li>
              <strong>FullStack Developer 3ns</strong> (Junio 2023 - Julio 2024)
              <ul className="list-disc list-inside ml-5">
                <li>{t("3n_1")}</li>
                <li>{t("3n_2")}</li>
                <li>{t("3n_3")}</li>
                <li>{t("3n_4")}</li>
                <li>{t("3n_5")}</li>
                <li>{t("3n_6")}</li>
                <li>{t("3n_7")}</li>
                <li>{t("3n_8")}</li>
                <li>{t("3n_9")}</li>
                <li>{t("3n_10")}</li>
              </ul>
            </li>
            <li>
              <strong>Desarrollador Web en [Nombre de la Empresa]</strong> (Fecha de inicio - Fecha de finalización)
              <ul className="list-disc list-inside ml-5">
                <li>Implementé diseños responsivos y mejoré la experiencia del usuario en varios sitios web.</li>
              </ul>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold mb-2">{t('education_certifications')}</h3>
          <ul className="list-disc list-inside text-sm sm:text-base">
            <div>
              <li>{t('CEAC')}</li>
            </div>
            <div>
              <li>{t('loftware_cert')} 2024</li>
              <a href={nicelabel} download='Loftware Certification' className='text-xs sm:text-sm text-blue-400 hover:text-blue-600 ml-5'>{t('download_cert')}</a>
            </div>
            <div>
              <li>{t('ibm_cert')} 2023</li>
              <a href={ibm} download='IBM Skill Buildt' className='text-xs sm:text-sm text-blue-400 hover:text-blue-600 ml-5'>{t('download_cert')}</a>
            </div>
            <div>
              <li>{t('coder_cert')} 2022</li>
              <a href={coder} download='CoderHouse React' className='text-xs sm:text-sm text-blue-400 hover:text-blue-600 ml-5'>{t('download_cert')}</a>
            </div>
          </ul>
        </div>
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold mb-2">{t('lenguajes')}</h3>
          <ul className="list-disc list-inside text-sm sm:text-base">
            <li>{t('ln_spanish')}</li>
            <li>{t('ln_english')}</li>
            <li>{t('ln_cat')}</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
