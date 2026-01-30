import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  return (
    <section className="min-h-screen px-6 py-16 pt-20 text-gray-900 transition-colors duration-300 bg-white dark:bg-gray-950 dark:text-white">
      <h1 className="mb-10 text-4xl font-bold text-center text-transparent bg-linear-to-r from-blue-600 to-pink-600 bg-clip-text dark:from-blue-400 dark:to-pink-400">
        Projects
      </h1>

      <div className="grid max-w-6xl gap-8 mx-auto md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

    </section>
  );
}

export default Projects;
