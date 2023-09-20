import { useState } from "react"
import { NavLink } from "react-router-dom"
import { SiSpacex } from "react-icons/si"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  

  return (
    <>
      <header className="absolute flex items-center justify-between px-5 w-full">
        <div>
          <NavLink to="/">
            <SiSpacex className="text-8xl text-white" />
          </NavLink>
        </div>

        <nav className={`${isOpen ? "open" : ""}`}>
          <ul>
            <li className="hover:scale-110">
              <NavLink to="/capsules" className={({ isActive }) => (isActive ? 'active-link' : 'text-white text-sm')} >
                Capsules
              </NavLink>
            </li>
            <li className="hover:scale-110">
              <NavLink to="/cores" className={({ isActive }) => (isActive ? 'active-link' : 'text-white text-sm')}>
                Cores
              </NavLink>
            </li>
            <li className="hover:scale-110">
              <NavLink to="/crew" className={({ isActive }) => (isActive ? 'active-link' : 'text-white text-sm')}>
                Crew
              </NavLink>
            </li>
            <li className="hover:scale-110">
              <NavLink to="/dragons" className={({ isActive }) => (isActive ? 'active-link' : 'text-white text-sm')}>
                Dragons
              </NavLink>
            </li>
            <li className="hover:scale-110">
              <NavLink to="/landpads" className={({ isActive }) => (isActive ? 'active-link' : 'text-white text-sm')}>
                Landpads
              </NavLink>
            </li>
            <li className="hover:scale-110">
              <NavLink to="/launches" className={({ isActive }) => (isActive ? 'active-link' : 'text-white text-sm')}>
                Launches
              </NavLink>
            </li>
            <li className="hover:scale-110">
              <NavLink to="/launchpads" className={({ isActive }) => (isActive ? 'active-link' : 'text-white text-sm')}>
                Launchpads
              </NavLink>
            </li>
            <li className="hover:scale-110">
              <NavLink to="/payloads" className={({ isActive }) => (isActive ? 'active-link' : 'text-white text-sm')}>
                Payloads
              </NavLink>
            </li>
            <li className="hover:scale-110">
              <NavLink to="/roadster" className={({ isActive }) => (isActive ? 'active-link' : 'text-white text-sm')}>
                Roadster
              </NavLink>
            </li>
            <li className="hover:scale-110">
              <NavLink to="/rockets" className={({ isActive }) => (isActive ? 'active-link' : 'text-white text-sm')}>
                Rockets
              </NavLink>
            </li>
            <li className="hover:scale-110">
              <NavLink to="/ships" className={({ isActive }) => (isActive ? 'active-link' : 'text-white text-sm')}>
                Ships
              </NavLink>
            </li>
            <li className="hover:scale-110">
              <NavLink to="/starlink" className={({ isActive }) => (isActive ? 'active-link' : 'text-white text-sm')}>
                Starlink
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-sm uppercase tracking-wider"
          >
            {isOpen ? "Close" : "Menu"}
          </button>
        </div>
      </header>
    </>
  )
}
