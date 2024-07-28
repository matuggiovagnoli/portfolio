import React, { useState } from 'react';
import ProjectItem from './ProjectItem';

const ProjectList = ({ projects, sectionRef }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 3;

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full sm:w-2/3 lg:w-2/5 my-16">
      <div className="space-y-14 flex flex-col max-sm:justify-center max-sm:items-center">
        {currentProjects.map((project, index) => (
          <ProjectItem key={project.id} project={project} index={index} />
        ))}
      </div>
      <div className="flex justify-center mt-20">
        {[...Array(Math.ceil(projects.length / projectsPerPage)).keys()].map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => paginate(pageNumber + 1)}
            className={`px-4 py-2 mx-1 rounded ${currentPage === pageNumber + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
          >
            {pageNumber + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
