import { NavLink } from "react-router-dom"

function Home() {
  return (
    <section className="flex items-center min-h-screen text-gray-900 transition-colors duration-300 bg-white dark:bg-gray-950 dark:text-white">
      <div className="max-w-6xl px-6 mx-auto">
        <p className="mb-2 text-sm text-blue-500 dark:text-blue-400">
          Hi, my name is
        </p>

        <h1 className="mb-4 text-4xl font-bold md:text-6xl">
          Jeremy John Robert
        </h1>

        <h2 className="mb-6 text-3xl font-semibold text-transparent bg-linear-to-r from-blue-600 to-pink-600 bg-clip-text md:text-5xl dark:from-blue-400 dark:to-pink-400">
          Frontend Developer
        </h2>

        <p className="max-w-xl mb-8 text-gray-700 dark:text-gray-400">
          I build responsive and user-friendly web applications using React,
          Tailwind CSS, and modern JavaScript.
        </p>

        <div className="flex gap-4">
          <NavLink
            to="/projects"
            className="px-6 py-3 font-medium text-white transition bg-blue-500 rounded hover:bg-blue-600"
          >
            View Projects
          </NavLink>

          <NavLink
            to="/contact"
            className="px-6 py-3 font-medium text-blue-600 transition border-2 border-blue-500 rounded hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-gray-900"
          >
            Contact Me
          </NavLink>
        </div>

        
      </div>
    </section>
  )
}

export default Home
