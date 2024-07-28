import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import tai from '../media/tai.png';
import arque from '../media/arque.png';
import loftware from '../media/loftware.png';
import aubay from '../media/aubay.png';
import walltrip from '../media/walltrip.png';
import renolit from '../media/Renolit.png';
import coopera from '../media/coopera.png';
import faustina from '../media/faustina.png';
import mega from '../media/mega.png';
import portfolio from '../media/portfolio.jpg';
import accenture from '../media/accenture.png';
import ProjectList from '../components/ProyectList';

const projects = [
  {
    id: 1,
    title: 'Cooperatextil',
    imageUrl: coopera,
    url: 'https://www.cooperatextil.com/',
    description: 'coopera_desc',
    github: ''
  },
  {
    id: 2,
    title: 'Faustina',
    imageUrl: faustina,
    url: '',
    description: 'faustina_desc',
    github: 'https://github.com/matuggiovagnoli/Proyecto-E-commerce-CoderHouse'
  },
  {
    id: 3,
    title: 'Mega Burguer',
    imageUrl: mega,
    url: '',
    description: 'mega_desc',
    github: 'https://github.com/matuggiovagnoli/Skillup_MegaBurger_Shop'
  },
  {
    id: 4,
    title: 'Portfolio',
    imageUrl: portfolio,
    url: '',
    description: 'portfolio_desc',
    github: 'https://github.com/matuggiovagnoli/portfolio'
  },
];

const companies = [
  {
    logoUrl: aubay,
    name: 'Aubay',
  },
  {
    logoUrl: walltrip,
    name: 'Walltrip',
  },
  {
    logoUrl: arque,
    name: 'Arque',
  },
  {
    logoUrl: renolit,
    name: 'Renolit',
  },
  {
    logoUrl: tai,
    name: 'TAI',
  },
  {
    logoUrl: loftware,
    name: 'Loftware',
  },
  {
    logoUrl: accenture,
    name: 'Accenture',
  },
];

const Projects = () => {
  const { t } = useTranslation();
  const projectRef = useRef(null);

  return (
    <section id="projects" ref={projectRef} className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4 z-20">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl text-blue-500 font-bold my-6">{t('projects')}</h2>
      <ProjectList projects={projects} sectionRef={projectRef} />
      <h2 className="text-2xl sm:text-4xl font-bold mt-12 mb-5">{t('companies_participated')}</h2>
      <div className="w-full overflow-hidden">
        <div className="flex animate-marquee items-center whitespace-nowrap">
          {companies.concat(companies).map((company, index) => (
            <div key={index} className="flex-none w-24 sm:w-32 lg:w-64 mx-10">
              <img src={company.logoUrl} alt={company.name} className="w-full h-auto" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
