const skills = ["React", "JavaScript", "Tailwind CSS", "Html", "CSS","Bootstrap"];

function Skills() {
  return (
    <section id="skills" className="px-4 py-20 md:px-20">
      <h2 className="mb-6 text-3xl font-bold text-center dark:text-white">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 text-gray-800 bg-gray-200 rounded-full shadow dark:bg-gray-800 dark:text-gray-200"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Skills;
