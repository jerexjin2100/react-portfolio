import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  return (
    <section className="min-h-screen px-6 py-16 pt-20 text-white bg-gray-950">
      
      <h1 className="mb-10 text-4xl font-bold text-center">
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
