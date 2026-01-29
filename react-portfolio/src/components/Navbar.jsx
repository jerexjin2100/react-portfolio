import { NavLink } from "react-router-dom"

const linkClasses = ({ isActive }) =>
  isActive
    ? "text-blue-400 font-semibold"
    : "hover:text-blue-400"

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between">
      <h1 className="text-xl font-bold">MyPortfolio</h1>

      <div className="space-x-6">
        <NavLink to="/" className={linkClasses}>Home</NavLink>
        <NavLink to="/about" className={linkClasses}>About</NavLink>
        <NavLink to="/projects" className={linkClasses}>Projects</NavLink>
        <NavLink to="/contact" className={linkClasses}>Contact</NavLink>
      </div>
    </nav>
  )
}

export default Navbar
