const projects = [
  { title: "Portfolio", description: "Advanced React Portfolio", link: "https://your-deploy-link.com" },
  { title: "Todo App", description: "React + JavaScript app", link: "#" },
];

function Projects() {
  return (
    <section id="projects" className="px-4 py-20 md:px-20 bg-gray-50 dark:bg-gray-900">
      <h2 className="mb-6 text-3xl font-bold text-center text-gray-900 dark:text-white">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 transition bg-white rounded-lg shadow dark:bg-gray-800 hover:scale-105"
          >
            <h3 className="mb-2 text-xl font-semibold dark:text-white">{project.title}</h3>
            <p className="text-gray-700 dark:text-gray-300">{project.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Projects;
