import skills from "../data/skills.js"
import SkillBadge from "../components/SkillBadge"

function About() {
  return (
    <section className="min-h-screen px-6 py-16 text-gray-900 transition-colors duration-300 bg-white dark:bg-gray-950 dark:text-white">
      <div className="max-w-5xl mx-auto">
        <h1 className="mb-6 text-4xl font-bold">
          About Me
        </h1>

        <p className="max-w-3xl mb-10 text-gray-700 dark:text-gray-400">
          I am a frontend developer focused on building responsive and user-friendly
          web applications using React and modern CSS frameworks. I enjoy structuring
          applications with reusable components and clean UI patterns, and I am
          continuously expanding my skill set toward full-stack development.
        </p>

        <h2 className="mb-6 text-3xl font-bold bg-linear-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-pink-400">
          Skills
        </h2>

        <div className="flex flex-wrap gap-4">
          {skills.map((skill) => (
            <SkillBadge key={skill} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
