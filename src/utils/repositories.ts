export interface ProjectGithub {
  id: string;
  name: string;
  link_project: string;
  link_github: string;
  description: string;
  stars: number;
  technologies: string[];
}

export async function getRepositories() {
  const repositories = await setupRepositories().then((response) => response);
  return repositories;
}
async function setupRepositories() {
  const response = await fetch(
    "https://api.github.com/users/matheusz-nied/repos"
  )
    .then((response) => response.json())
    .then((repos) => normalizeData(repos))
    .then((repos) => filterRepositorie(repos))
    .then((repos) => SortByStars(repos));

  return response;
}

function normalizeData(data: any) {
  const projectsNormalized: ProjectGithub[] = data.map((project: any) => {
    project = {
      id: project.id,
      name: project.name,
      link_project: project.homepage,
      link_github: project.html_url,
      description: project.description,
      stars: project.stargazers_count,
      language: project.language,
      technologies: project.topics
    };

    return project;
  });
  return projectsNormalized;
}

function filterRepositorie(repositories :ProjectGithub[]) {
  const repositoriesFiltered = repositories.filter((project) => {
    if (project.name != "matheusz-nied" && project.name != "Learn") {
      return project;
    }
  });

  return repositoriesFiltered;
}

function SortByStars(repositories :ProjectGithub[]) {
  const repositoriesSorted = repositories.sort((a, b) => {
    if (a.stars > b.stars) {
      return -1;
    } else {
      return 0;
    }
  });

  return repositoriesSorted;
}
