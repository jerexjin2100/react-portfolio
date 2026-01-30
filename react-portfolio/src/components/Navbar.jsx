import { NavLink } from "react-router-dom"

const linkClasses = ({ isActive }) =>
  isActive
    ? "text-blue-400 font-semibold"
    : "hover:text-blue-400"

function Navbar({ toggleTheme, theme }) {
  return (
    <nav className="flex items-center justify-between px-6 py-4 text-gray-900 bg-white shadow-md dark:bg-gray-900 dark:text-white">
      <h1 className="text-2xl font-bold text-transparent bg-linear-to-r from-blue-600 to-pink-600 bg-clip-text">MyPortfolio</h1>

      <div className="flex items-center space-x-6">
        <NavLink to="/" className={linkClasses}>Home</NavLink>
        <NavLink to="/about" className={linkClasses}>About</NavLink>
        <NavLink to="/projects" className={linkClasses}>Projects
        </NavLink>
        <NavLink to="/contact" className={linkClasses}>Contact</NavLink>

        <button
          onClick={toggleTheme}
          className="px-4 py-2 ml-4 text-white transition bg-blue-500 rounded-lg hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700"
        >
          {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
        </button>
      </div>

    </nav>
  )
}

export default Navbar
