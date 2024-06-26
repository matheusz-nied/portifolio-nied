import React from "react";
import ProjectCard from "../ProjectCard";
import { getRepositories } from "@/utils/repositories";

const Projects = async () => {
  const repos = await getRepositories();
  return (
    <div
      className="flex flex-col items-center justify-center py-10"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#03C303] to-slate-50 py-20">
        Meus Projetos
      </h1>

      <div className="h-full w-full grid md:grid-cols-2 lg:grid-cols-2 gap-3 lg:gap-16 px-12 lg:px-24 xl:px-48 justify-items-center">
        {repos.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
