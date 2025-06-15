import { Link } from "react-router-dom"

const Header = () => (
  <header className="h-20 flex items-center px-5 shadow-sm">
    <nav className="flex items-center justify-between w-full">
      <Link to="/"><img src="/logo.png" alt="Flyt" className="w-20 lg:w-28" /></Link>
      <div className="flex items-center gap-5 lg:gap-10">
        <Link to="/discover" className="text-sm lg:text-base">Discover</Link>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 flex items-center justify-center overflow-hidden rounded-full border border-gray-200">
            <Link to="/"><img src="/usa.svg" alt="USA flag" className="w-6 rounded-full" /></Link>
          </div>
          <div className="w-10 h-10 flex items-center justify-center overflow-hidden rounded-full border border-gray-200">
            <Link to="/"><img src="/user.svg" alt="User Icon" className="w-6 rounded-full" /></Link>
          </div>
          <div className="w-10 h-10 flex items-center justify-center overflow-hidden rounded-full border border-gray-200">
            <Link to="/"><img src="/bars.svg" alt="Bars Icon" className="w-6 rounded-full" /></Link>
          </div>

        </div>
      </div>
    </nav>
  </header>
)

export default Header
