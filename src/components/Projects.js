import React from 'react';
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

const projects = [
  {
    title: 'Cooperatextil',
    imageUrl: coopera,
    url: 'https://www.cooperatextil.com/',
    description: 'coopera_desc'
  },
  {
    title: 'Faustina',
    imageUrl: faustina,
    url: 'https://github.com/matuggiovagnoli/Proyecto-E-commerce-CoderHouse',
    description: 'faustina_desc'
  },
  {
    title: 'Mega Burguer',
    imageUrl: mega,
    url: 'https://github.com/matuggiovagnoli/Skillup_MegaBurger_Shop',
    description: 'mega_desc'
  },
  {
    title: 'Portfolio',
    imageUrl: portfolio,
    url: 'https://github.com/matuggiovagnoli/portfolio',
    description: 'portfolio_desc'
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
];

const Projects = () => {
  const { t } = useTranslation();

  return (
    <section id="projects" className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl text-blue-500 font-bold mb-6">{t('projects')}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 mb-8">
        {projects.map((project, index) => (
          <a href={project.url} key={index} className="relative group w-full h-40 sm:w-60 sm:h-60 lg:w-60 lg:h-60">
            <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover rounded-t-md" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 rounded-md">
              <p className="text-white text-center px-4">
                {t(project.description)}
              </p>
            </div>
            <h3 className="w-full text-center bg-black bg-opacity-75 text-white py-2 rounded-b-md">
              {project.title}
            </h3>
          </a>
        ))}
      </div>
      <h2 className="text-3xl sm:text-4xl font-bold mt-12 mb-4">{t('companies_participated')}</h2>
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
