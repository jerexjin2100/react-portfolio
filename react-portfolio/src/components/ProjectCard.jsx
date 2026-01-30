function ProjectCard({ project }) {
  return (
    <div className="p-6 transition bg-gray-900 border border-gray-800 rounded-lg hover:border-pink-500">
      
      <h3 className="mb-2 text-xl font-semibold">
        {project.title}
      </h3>

      <p className="mb-4 text-gray-400">
        {project.description}
      </p>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 text-xs bg-gray-800 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-4 text-sm">
        <a href={project.github} target="_blank" className="text-pink-400 hover:underline">
          GitHub
        </a>
        <a href={project.live} target="_blank" className="text-blue-400 hover:underline">
          Live Demo
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
