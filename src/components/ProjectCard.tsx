import { ProjectGithub } from "@/utils/repositories";
import Image from "next/image";
import React from "react";

interface Props {
  project: ProjectGithub;
}

const ProjectCard = ({ project }: Props) => {
  return (
    <div className="relative rounded-lg shadow-sm border border-[#ffffff] mx-2 max-w-[650px] max-h-[600px] overflow-hidden">
      {/* Background blur layer */}
      <div className="absolute inset-0 z-0">
        <div className="backdrop-blur-lg bg-white/5 h-full blur-[4px] max-h-[600px]"></div>
      </div>

      {/* Content layer */}
      <div className="relative z-10 ">
        <Image
          src={`/projects/${project.name}.png`}
          alt={project.name}
          width={450}
          height={450}
          className="w-full object-contain max-h-[450px] rounded-t-lg"
        />

        {/* <div className="flex justify-around mt-2">
          {project.link_project && (
            <a
              className="mt-2 border py-1 rounded-sm w-28 h-[35px] text-white flex items-center justify-center hover:translate-y-[-6px] transition-all ease duration-700"
              href={project.link_project}
              target="_blank"
            >
              Site
            </a>
          )}
          <a
            className="mt-2 border rounded-sm w-28 h-[35px] text-white flex items-center justify-center hover:translate-y-[-6px] transition-all ease duration-700"
            href={project.link_github}
            target="_blank"
          >
            Github
          </a>
        </div> */}

        <div className="p-4 flex flex-col justify-between p-[24px]">
          <div>
            <h1 className="text-2xl font-bold text-white">{project.name}</h1>
            <div className="overflow-hidden flex gap-1 mt-2 ml-1">
              {project.technologies &&
                project.technologies.map((tech: any) => (
                  <span key={tech} className="text-white/70 text-sm border-b mr-2 rounded-sm">
                    {tech}
                  </span>
                ))}
            </div>
            <p className="mt-4 text-white">{project.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
