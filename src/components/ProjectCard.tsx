import { ProjectGithub } from "@/utils/repositories";
import Image from "next/image";
import React from "react";

interface Props {
  project: ProjectGithub;
}

const ProjectCard = ({ project }: Props) => {
  return (
    <div className="relative rounded-lg shadow-lg border border-[#03c303b5] mx-2">
      <Image
        src={`/projects/${project.name}.png`}
        alt={project.name}
        width={500}
        height={500}
        className="w-full  object-contain"
      />

<div className="flex justify-around">
            {project.link_project && (
              <a
                className={
                  "mt-2 border py-1 rounded-sm w-28 text-white flex z-[50] items-center justify-center hover:translate-y-[-6px] transition-all ease duration-700"
                }
                href={project.link_project}
                
                target="blank"
              >
                Site
              </a>
            )}
            <a
              className={
                "mt-2 border rounded-sm w-28 text-white flex items-center z-[50] justify-center hover:translate-y-[-6px] transition-all ease duration-700"
              }
              href={project.link_github}
              
              target="blank"

            >
              Github
            </a>
          </div>
      <div className="p-4 flex flex-col justify-between">
        <div>

        <h1 className="text-2xl font-semibold text-white">{project.name}</h1>
        <div className="overflow-hidden flex gap-1 mt-1">
          {project.technologies &&
            project.technologies.map((tech: any) => (
              <span key={tech}  className="text-[#03C303] text-sm border px-2 rounded-md">
                {tech}
              </span>
            ))}
        </div>
          <p className="mt-2 text-gray-300">{project.description}</p>
          </div>

      </div>
    </div>
  );
};

export default ProjectCard;
