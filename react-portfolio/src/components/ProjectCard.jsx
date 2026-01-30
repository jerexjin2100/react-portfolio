function ProjectCard({ project }) {
  return (
    <div className="p-6 transition bg-white border border-gray-200 rounded-lg dark:bg-gray-900 dark:border-gray-800 hover:border-pink-500">
      
      <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
        {project.title}
      </h3>

      <p className="mb-4 text-gray-700 dark:text-gray-400">
        {project.description}
      </p>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 text-xs font-medium text-blue-700 transition-colors bg-blue-100 rounded-full cursor-pointer dark:bg-blue-900 dark:text-blue-200 hover:bg-pink-100 hover:text-pink-700 dark:hover:bg-pink-900 dark:hover:text-pink-200"
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
