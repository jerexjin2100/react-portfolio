import { NavLink } from "react-router-dom"

const linkClasses = ({ isActive }) =>
  isActive
    ? "text-blue-400 font-semibold"
    : "hover:text-blue-400"

function Navbar() {
  return (
    <nav className="flex justify-between px-6 py-4 text-white bg-gray-900">
      <h1 className="text-xl font-bold">MyPortfolio</h1>

      <div className="flex items-center space-x-6">
        <NavLink to="/" className={linkClasses}>Home</NavLink>
        <NavLink to="/about" className={linkClasses}>About</NavLink>
        <NavLink to="/projects" className={linkClasses}>Projects
        </NavLink>
        <NavLink to="/contact" className={linkClasses}>Contact</NavLink>

        {/* Dark/Light Mode Toggle */}
        <button
          onClick={() => document.documentElement.classList.toggle("dark")}
          className="px-3 py-1 transition bg-gray-200 rounded dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
        >
          Toggle Dark
        </button>
      </div>

    </nav>
  )
}

export default Navbar
