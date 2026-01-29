import { NavLink } from "react-router-dom";

function Home() {
  return (
    <section className="min-h-screen flex items-center bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-blue-400 text-sm mb-2">
          Hi, my name is
        </p>

        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Jeremy John Robert
        </h1>

        <h2 className="text-3xl md:text-5xl font-semibold text-gray-400 mb-6">
          Frontend Developer
        </h2>

        <p className="max-w-xl text-gray-400 mb-8">
          I build responsive and user-friendly web applications using
          React, Tailwind CSS, and modern JavaScript.
        </p>

        <div className="flex gap-4">
          <NavLink to="/projects" className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded font-medium">
         View Projects
          </NavLink>

        <NavLink to="/contact" className="px-6 py-3 border border-gray-600 hover:border-white rounded font-medium">
          Contact Me
        </NavLink>

        </div>
      </div>
    </section>
  )
}

export default Home
