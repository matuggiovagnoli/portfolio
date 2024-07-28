import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

const ProjectItem = ({ project, index }) => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`transition-opacity duration-500 transform ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } flex flex-col sm:flex-row border-[1px] border-slate-400 max-sm:w-fit  mb-5 ${
        isEven ? 'sm:flex-row-reverse' : ''
      } gap-5 p-4`}
    >
      <img
        src={project.imageUrl}
        alt={project.title}
        className="w-full max-sm: sm:w-1/2 max-sm:w-44 object-cover rounded-t-lg sm:rounded-none max-sm:self-center"
      />
      <div className="flex flex-col justify-between w-full sm:w-1/2">
        <div>
          <h3 className="text-xl font-semibold text-center sm:text-left mb-2">
            {t(project.title)}
          </h3>
          <p className="text-sm mb-4 max-sm:hidden">{t(project.description)}</p>
        </div>
        <div className="flex flex-row w-full justify-center sm:justify-evenly space-y-2 sm:space-y-0 sm:space-x-4 max-sm:gap-2">
          <a
            href={project.url}
            className={`px-4 max-sm:w-fit py-2 rounded ${
              project.url ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
            target="_blank"
            rel="noopener noreferrer"
            disabled={!project.url}
          >
            Website
          </a>
          <a
            href={project.github}
            className="px-4 max-sm:w-fit py-2 bg-black text-white rounded"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
